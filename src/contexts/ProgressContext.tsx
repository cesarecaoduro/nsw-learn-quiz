import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { progressStorage } from "@/services/progressStorage";
import { ProfileData, Achievement, QuizHistory, ProfileSummary } from "@/types/progress";
import { QuizResult } from "@/types/quiz";

interface ProgressContextValue {
  // Profile state
  activeProfileId: string | null;
  activeProfile: ProfileData | null;
  profiles: ProfileSummary[];
  isLoading: boolean;

  // Profile actions
  setActiveProfile: (profileId: string | null) => void;
  createProfile: (nickname: string, avatar: string) => Promise<string | null>;
  deleteProfile: (profileId: string) => Promise<boolean>;
  refreshProfiles: () => void;

  // Progress tracking
  addQuizResult: (quizResult: Omit<QuizHistory, 'id'>) => Promise<boolean>;
  
  // Achievement system
  newAchievements: Achievement[];
  markAchievementSeen: (achievementId: string) => void;

  // Stats helpers
  getSubjectStats: () => Record<string, { attempted: number; correct: number; averageScore: number }>;
  getCurrentStreak: () => number;
  getTotalQuizzesTaken: () => number;
  getAverageScore: () => number;

  // Data management
  exportData: () => string | null;
  importData: (jsonData: string) => Promise<boolean>;
  clearAllData: () => Promise<boolean>;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export const useProgress = (): ProgressContextValue => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider = ({ children }: ProgressProviderProps) => {
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);
  const [activeProfile, setActiveProfile] = useState<ProfileData | null>(null);
  const [profiles, setProfiles] = useState<ProfileSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);

  // Initialize progress data on mount
  useEffect(() => {
    initializeProgress();
  }, []);

  // Update active profile when ID changes
  useEffect(() => {
    if (activeProfileId) {
      const profile = progressStorage.getProfile(activeProfileId);
      setActiveProfile(profile);
    } else {
      setActiveProfile(null);
    }
  }, [activeProfileId]);

  const initializeProgress = async () => {
    try {
      setIsLoading(true);
      
      // Load current active profile
      const currentActiveId = progressStorage.getActiveProfileId();
      setActiveProfileId(currentActiveId);
      
      // Load all profiles
      refreshProfiles();
      
    } catch (error) {
      console.error("Failed to initialize progress:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshProfiles = useCallback(() => {
    const profileSummaries = progressStorage.getProfilesSummary();
    setProfiles(profileSummaries);
  }, []);

  const setActiveProfileHandler = useCallback((profileId: string | null) => {
    if (profileId) {
      const success = progressStorage.setActiveProfile(profileId);
      if (success) {
        setActiveProfileId(profileId);
        refreshProfiles();
      }
    } else {
      setActiveProfileId(null);
      setActiveProfile(null);
    }
  }, [refreshProfiles]);

  const createProfile = useCallback(async (nickname: string, avatar: string): Promise<string | null> => {
    try {
      const profileId = progressStorage.addProfile(nickname, avatar);
      if (profileId) {
        setActiveProfileId(profileId);
        refreshProfiles();
        return profileId;
      }
      return null;
    } catch (error) {
      console.error("Failed to create profile:", error);
      return null;
    }
  }, [refreshProfiles]);

  const deleteProfile = useCallback(async (profileId: string): Promise<boolean> => {
    try {
      const success = progressStorage.deleteProfile(profileId);
      if (success) {
        // If deleted profile was active, clear active profile
        if (activeProfileId === profileId) {
          setActiveProfileId(null);
          setActiveProfile(null);
        }
        refreshProfiles();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to delete profile:", error);
      return false;
    }
  }, [activeProfileId, refreshProfiles]);

  const addQuizResult = useCallback(async (quizResult: Omit<QuizHistory, 'id'>): Promise<boolean> => {
    if (!activeProfileId) {
      console.warn("No active profile to save quiz result");
      return false;
    }

    try {
      // Get achievements before adding result
      const profileBefore = progressStorage.getProfile(activeProfileId);
      const achievementsBefore = profileBefore?.achievements || [];
      
      // Add the quiz result
      const success = progressStorage.addQuizResult(activeProfileId, quizResult);
      
      if (success) {
        // Get achievements after adding result
        const profileAfter = progressStorage.getProfile(activeProfileId);
        const achievementsAfter = profileAfter?.achievements || [];
        
        // Find new achievements
        const newUnlockedAchievements = achievementsAfter.filter(
          afterAchievement => !achievementsBefore.some(
            beforeAchievement => beforeAchievement.id === afterAchievement.id
          )
        );
        
        // Add to new achievements queue
        if (newUnlockedAchievements.length > 0) {
          setNewAchievements(prev => [...prev, ...newUnlockedAchievements]);
        }
        
        // Update active profile
        setActiveProfile(profileAfter);
        refreshProfiles();
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error("Failed to add quiz result:", error);
      return false;
    }
  }, [activeProfileId, refreshProfiles]);

  const markAchievementSeen = useCallback((achievementId: string) => {
    setNewAchievements(prev => prev.filter(achievement => achievement.id !== achievementId));
  }, []);

  // Stats helper functions
  const getSubjectStats = useCallback(() => {
    return activeProfile?.stats.subjectStats || {};
  }, [activeProfile]);

  const getCurrentStreak = useCallback(() => {
    return activeProfile?.stats.currentStreak || 0;
  }, [activeProfile]);

  const getTotalQuizzesTaken = useCallback(() => {
    return activeProfile?.stats.totalQuizzesTaken || 0;
  }, [activeProfile]);

  const getAverageScore = useCallback(() => {
    return activeProfile?.stats.averageScore || 0;
  }, [activeProfile]);

  // Data management functions
  const exportData = useCallback(() => {
    return progressStorage.exportData();
  }, []);

  const importData = useCallback(async (jsonData: string): Promise<boolean> => {
    try {
      const success = progressStorage.importData(jsonData);
      if (success) {
        // Refresh everything after import
        await initializeProgress();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to import data:", error);
      return false;
    }
  }, []);

  const clearAllData = useCallback(async (): Promise<boolean> => {
    try {
      const success = progressStorage.clearAllData();
      if (success) {
        // Reset all state
        setActiveProfileId(null);
        setActiveProfile(null);
        setProfiles([]);
        setNewAchievements([]);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to clear all data:", error);
      return false;
    }
  }, []);

  const value: ProgressContextValue = {
    // Profile state
    activeProfileId,
    activeProfile,
    profiles,
    isLoading,

    // Profile actions
    setActiveProfile: setActiveProfileHandler,
    createProfile,
    deleteProfile,
    refreshProfiles,

    // Progress tracking
    addQuizResult,

    // Achievement system
    newAchievements,
    markAchievementSeen,

    // Stats helpers
    getSubjectStats,
    getCurrentStreak,
    getTotalQuizzesTaken,
    getAverageScore,

    // Data management
    exportData,
    importData,
    clearAllData,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

// Helper hook for conditional progress tracking
export const useProgressOptional = () => {
  try {
    return useProgress();
  } catch {
    return null;
  }
};