import { 
  ProgressStorage, 
  ProgressStorageSchema, 
  ProfileData, 
  ProfileDataSchema,
  QuizHistory,
  Achievement,
  getDefaultProfileStats,
  createProfileId,
  ACHIEVEMENT_DEFINITIONS,
  calculateStreak,
  AvatarEmoji
} from "@/types/progress";

// Storage key for localStorage
const STORAGE_KEY = "nsw-quiz-progress";
const STORAGE_VERSION = "1.0";

// Maximum storage size (5MB) to prevent abuse
const MAX_STORAGE_SIZE = 5 * 1024 * 1024;

/**
 * Secure localStorage service for progress data
 * Handles validation, encoding, and error management
 */
class ProgressStorageService {
  private isStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  private estimateStorageSize(data: unknown): number {
    try {
      return JSON.stringify(data).length;
    } catch {
      return 0;
    }
  }

  private encode(data: string): string {
    // Simple base64 encoding for obfuscation (not security)
    try {
      return btoa(data);
    } catch {
      return data; // fallback to plain text if encoding fails
    }
  }

  private decode(encodedData: string): string {
    try {
      return atob(encodedData);
    } catch {
      return encodedData; // fallback to treating as plain text
    }
  }

  private sanitizeString(input: string): string {
    // Remove any potentially dangerous characters
    return input.replace(/[<>"'&]/g, '').trim();
  }

  private createEmptyStorage(): ProgressStorage {
    return {
      version: STORAGE_VERSION,
      profiles: {},
      activeProfileId: null,
      createdAt: Date.now(),
      lastUpdatedAt: Date.now()
    };
  }

  private validateAndCleanData(data: unknown): ProgressStorage | null {
    try {
      const parsed = ProgressStorageSchema.parse(data);
      
      // Additional cleanup and validation
      const cleanedProfiles: Record<string, ProfileData> = {};
      
      for (const [profileId, profile] of Object.entries(parsed.profiles)) {
        // Sanitize nickname
        const cleanNickname = this.sanitizeString(profile.nickname);
        if (cleanNickname.length === 0) continue;
        
        // Limit history size
        const limitedHistory = profile.history.slice(-500); // Keep last 500 entries
        
        // Clean achievements
        const validAchievements = profile.achievements.filter(
          achievement => ACHIEVEMENT_DEFINITIONS.some(def => def.id === achievement.id)
        );
        
        cleanedProfiles[profileId] = {
          ...profile,
          nickname: cleanNickname,
          history: limitedHistory,
          achievements: validAchievements
        };
      }
      
      return {
        ...parsed,
        profiles: cleanedProfiles,
        lastUpdatedAt: Date.now()
      };
    } catch (error) {
      console.warn('Progress data validation failed:', error);
      return null;
    }
  }

  /**
   * Load all progress data from localStorage
   */
  loadProgressData(): ProgressStorage {
    if (!this.isStorageAvailable()) {
      console.warn('localStorage not available, using empty storage');
      return this.createEmptyStorage();
    }

    try {
      const encodedData = localStorage.getItem(STORAGE_KEY);
      if (!encodedData) {
        return this.createEmptyStorage();
      }

      const decodedData = this.decode(encodedData);
      const parsedData = JSON.parse(decodedData);
      
      const validatedData = this.validateAndCleanData(parsedData);
      if (!validatedData) {
        console.warn('Invalid progress data, creating fresh storage');
        return this.createEmptyStorage();
      }

      return validatedData;
    } catch (error) {
      console.error('Failed to load progress data:', error);
      return this.createEmptyStorage();
    }
  }

  /**
   * Save progress data to localStorage
   */
  saveProgressData(data: ProgressStorage): boolean {
    if (!this.isStorageAvailable()) {
      console.warn('localStorage not available');
      return false;
    }

    try {
      // Validate data before saving
      const validatedData = this.validateAndCleanData(data);
      if (!validatedData) {
        console.error('Invalid data provided to saveProgressData');
        return false;
      }

      // Check storage size
      const dataSize = this.estimateStorageSize(validatedData);
      if (dataSize > MAX_STORAGE_SIZE) {
        console.error('Progress data too large for storage');
        return false;
      }

      const jsonData = JSON.stringify(validatedData);
      const encodedData = this.encode(jsonData);
      
      localStorage.setItem(STORAGE_KEY, encodedData);
      return true;
    } catch (error) {
      console.error('Failed to save progress data:', error);
      return false;
    }
  }

  /**
   * Create a new profile
   */
  createProfile(nickname: string, avatar: AvatarEmoji): ProfileData | null {
    const sanitizedNickname = this.sanitizeString(nickname);
    if (sanitizedNickname.length === 0 || sanitizedNickname.length > 20) {
      return null;
    }

    try {
      const profileData: ProfileData = {
        nickname: sanitizedNickname,
        avatar,
        createdAt: Date.now(),
        lastActiveAt: Date.now(),
        stats: getDefaultProfileStats(),
        history: [],
        achievements: []
      };

      // Validate the profile data
      const validatedProfile = ProfileDataSchema.parse(profileData);
      return validatedProfile;
    } catch (error) {
      console.error('Failed to create profile:', error);
      return null;
    }
  }

  /**
   * Add quiz result to profile history
   */
  addQuizResult(profileId: string, quizResult: Omit<QuizHistory, 'id'>): boolean {
    try {
      const storage = this.loadProgressData();
      const profile = storage.profiles[profileId];
      
      if (!profile) {
        console.error('Profile not found:', profileId);
        return false;
      }

      // Create new history entry
      const historyEntry: QuizHistory = {
        id: `${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
        ...quizResult
      };

      // Update profile
      profile.history.unshift(historyEntry); // Add to beginning
      profile.lastActiveAt = Date.now();
      
      // Update stats
      this.updateProfileStats(profile);
      
      // Check for new achievements
      this.updateAchievements(profile);
      
      storage.activeProfileId = profileId;
      storage.lastUpdatedAt = Date.now();

      return this.saveProgressData(storage);
    } catch (error) {
      console.error('Failed to add quiz result:', error);
      return false;
    }
  }

  private updateProfileStats(profile: ProfileData): void {
    const stats = profile.stats;
    const history = profile.history;
    
    // Basic stats
    stats.totalQuizzesTaken = history.length;
    stats.totalCorrectAnswers = history.reduce((sum, h) => sum + h.correctAnswers, 0);
    stats.averageScore = history.length > 0 
      ? Math.round(history.reduce((sum, h) => sum + h.score, 0) / history.length)
      : 0;
    
    // Subject stats
    stats.subjectStats = {};
    history.forEach(h => {
      h.subjects.forEach(subject => {
        if (!stats.subjectStats[subject]) {
          stats.subjectStats[subject] = { attempted: 0, correct: 0, averageScore: 0 };
        }
        stats.subjectStats[subject].attempted++;
      });
      
      // Add correct answers per subject from breakdown
      Object.entries(h.subjectBreakdown).forEach(([subject, breakdown]) => {
        if (stats.subjectStats[subject]) {
          stats.subjectStats[subject].correct += breakdown.correct;
        }
      });
    });
    
    // Calculate average scores for subjects
    Object.keys(stats.subjectStats).forEach(subject => {
      const subjectHistory = history.filter(h => h.subjects.includes(subject));
      if (subjectHistory.length > 0) {
        const subjectAverage = subjectHistory.reduce((sum, h) => {
          const subjectBreakdown = h.subjectBreakdown[subject];
          if (subjectBreakdown) {
            return sum + (subjectBreakdown.correct / subjectBreakdown.total) * 100;
          }
          return sum;
        }, 0) / subjectHistory.length;
        stats.subjectStats[subject].averageScore = Math.round(subjectAverage);
      }
    });
    
    // Find favorite subject
    let maxScore = 0;
    stats.favoriteSubject = "";
    Object.entries(stats.subjectStats).forEach(([subject, subjectStats]) => {
      if (subjectStats.attempted >= 3 && subjectStats.averageScore > maxScore) {
        maxScore = subjectStats.averageScore;
        stats.favoriteSubject = subject;
      }
    });
    
    // Calculate streaks
    stats.currentStreak = calculateStreak(history);
    stats.longestStreak = Math.max(stats.longestStreak, stats.currentStreak);
    stats.lastActiveDate = Date.now();
  }

  private updateAchievements(profile: ProfileData): void {
    const currentAchievementIds = new Set(profile.achievements.map(a => a.id));
    
    ACHIEVEMENT_DEFINITIONS.forEach(definition => {
      if (!currentAchievementIds.has(definition.id)) {
        // Check if achievement condition is met
        if (definition.condition(profile.stats, profile.history)) {
          const achievement: Achievement = {
            id: definition.id,
            type: definition.type,
            title: definition.title,
            description: definition.description,
            icon: definition.icon,
            unlockedAt: Date.now(),
            metadata: definition.metadata
          };
          
          profile.achievements.push(achievement);
        }
      }
    });
  }

  /**
   * Get all profiles summary
   */
  getProfilesSummary() {
    const storage = this.loadProgressData();
    return Object.entries(storage.profiles).map(([id, profile]) => ({
      id,
      nickname: profile.nickname,
      avatar: profile.avatar,
      totalQuizzes: profile.stats.totalQuizzesTaken,
      averageScore: profile.stats.averageScore,
      lastActive: profile.lastActiveAt
    }));
  }

  /**
   * Get active profile ID
   */
  getActiveProfileId(): string | null {
    const storage = this.loadProgressData();
    return storage.activeProfileId;
  }

  /**
   * Set active profile
   */
  setActiveProfile(profileId: string): boolean {
    const storage = this.loadProgressData();
    if (!storage.profiles[profileId]) {
      return false;
    }
    
    storage.activeProfileId = profileId;
    storage.profiles[profileId].lastActiveAt = Date.now();
    storage.lastUpdatedAt = Date.now();
    
    return this.saveProgressData(storage);
  }

  /**
   * Add new profile to storage
   */
  addProfile(nickname: string, avatar: AvatarEmoji): string | null {
    const profile = this.createProfile(nickname, avatar);
    if (!profile) return null;
    
    const profileId = createProfileId(nickname);
    const storage = this.loadProgressData();
    
    // Check if profile limit reached
    if (Object.keys(storage.profiles).length >= 5) {
      console.error('Maximum profile limit reached');
      return null;
    }
    
    // Check if profile already exists
    if (storage.profiles[profileId]) {
      console.error('Profile already exists:', profileId);
      return null;
    }
    
    storage.profiles[profileId] = profile;
    storage.activeProfileId = profileId;
    storage.lastUpdatedAt = Date.now();
    
    const success = this.saveProgressData(storage);
    return success ? profileId : null;
  }

  /**
   * Delete profile
   */
  deleteProfile(profileId: string): boolean {
    const storage = this.loadProgressData();
    
    if (!storage.profiles[profileId]) {
      return false;
    }
    
    delete storage.profiles[profileId];
    
    // Reset active profile if it was deleted
    if (storage.activeProfileId === profileId) {
      const remainingProfiles = Object.keys(storage.profiles);
      storage.activeProfileId = remainingProfiles.length > 0 ? remainingProfiles[0] : null;
    }
    
    storage.lastUpdatedAt = Date.now();
    return this.saveProgressData(storage);
  }

  /**
   * Get profile data
   */
  getProfile(profileId: string): ProfileData | null {
    const storage = this.loadProgressData();
    return storage.profiles[profileId] || null;
  }

  /**
   * Clear all data (for testing or reset)
   */
  clearAllData(): boolean {
    if (!this.isStorageAvailable()) return false;
    
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Failed to clear progress data:', error);
      return false;
    }
  }

  /**
   * Export data for backup
   */
  exportData(): string | null {
    try {
      const storage = this.loadProgressData();
      return JSON.stringify(storage, null, 2);
    } catch (error) {
      console.error('Failed to export data:', error);
      return null;
    }
  }

  /**
   * Import data from backup
   */
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      const validatedData = this.validateAndCleanData(data);
      
      if (!validatedData) {
        console.error('Invalid import data');
        return false;
      }
      
      return this.saveProgressData(validatedData);
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  }
}

// Create singleton instance
export const progressStorage = new ProgressStorageService();

// Export service class for testing
export { ProgressStorageService };