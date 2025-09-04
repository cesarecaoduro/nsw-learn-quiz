import { z } from "zod";

// Available avatar emojis for profiles
export const AVAILABLE_AVATARS = [
  "🦋", "🚀", "🌟", "🎨", "📚", "🔬", "🎯", "🌈", 
  "🦉", "🐨", "🦘", "🐙", "🦁", "🐸", "🐧", "🦄"
] as const;

// Achievement types
export const ACHIEVEMENT_TYPES = {
  FIRST_QUIZ: "first_quiz",
  PERFECT_SCORE: "perfect_score", 
  SUBJECT_EXPERT: "subject_expert",
  QUIZ_MASTER: "quiz_master",
  LEARNING_STREAK: "learning_streak",
  MILESTONE: "milestone"
} as const;

// Zod Schemas for validation
export const ProfileStatsSchema = z.object({
  totalQuizzesTaken: z.number().min(0).max(10000),
  totalCorrectAnswers: z.number().min(0).max(100000),
  averageScore: z.number().min(0).max(100),
  favoriteSubject: z.string().max(50),
  currentStreak: z.number().min(0).max(365),
  longestStreak: z.number().min(0).max(365),
  lastActiveDate: z.number(), // timestamp
  subjectStats: z.record(z.string(), z.object({
    attempted: z.number().min(0),
    correct: z.number().min(0),
    averageScore: z.number().min(0).max(100)
  }))
});

export const QuizHistorySchema = z.object({
  id: z.string(),
  quizId: z.string().max(100),
  quizName: z.string().max(200),
  score: z.number().min(0).max(100),
  grade: z.enum(["A", "B", "C", "D", "F"]),
  totalQuestions: z.number().min(1).max(100),
  correctAnswers: z.number().min(0).max(100),
  completedAt: z.number(), // timestamp
  timeSpent: z.number().min(0).max(3600), // seconds, max 1 hour
  subjects: z.array(z.string()).max(10),
  subjectBreakdown: z.record(z.string(), z.object({
    correct: z.number().min(0),
    total: z.number().min(1)
  }))
});

export const AchievementSchema = z.object({
  id: z.string(),
  type: z.enum([
    ACHIEVEMENT_TYPES.FIRST_QUIZ,
    ACHIEVEMENT_TYPES.PERFECT_SCORE,
    ACHIEVEMENT_TYPES.SUBJECT_EXPERT,
    ACHIEVEMENT_TYPES.QUIZ_MASTER,
    ACHIEVEMENT_TYPES.LEARNING_STREAK,
    ACHIEVEMENT_TYPES.MILESTONE
  ]),
  title: z.string().max(100),
  description: z.string().max(500),
  icon: z.string().max(10), // emoji
  unlockedAt: z.number(), // timestamp
  metadata: z.record(z.unknown()).optional() // flexible data for achievement specifics
});

export const ProfileDataSchema = z.object({
  nickname: z.string().min(1).max(20).regex(/^[a-zA-Z0-9\s]*$/, "Only letters, numbers, and spaces allowed"),
  avatar: z.enum(AVAILABLE_AVATARS),
  createdAt: z.number(),
  lastActiveAt: z.number(),
  stats: ProfileStatsSchema,
  history: z.array(QuizHistorySchema).max(1000), // limit history to prevent storage bloat
  achievements: z.array(AchievementSchema).max(100)
});

export const ProgressStorageSchema = z.object({
  version: z.literal("1.0"),
  profiles: z.record(z.string(), ProfileDataSchema).refine(
    (profiles) => Object.keys(profiles).length <= 5, 
    "Maximum 5 profiles allowed"
  ),
  activeProfileId: z.string().nullable(),
  createdAt: z.number(),
  lastUpdatedAt: z.number()
});

// TypeScript types derived from schemas
export type ProfileStats = z.infer<typeof ProfileStatsSchema>;
export type QuizHistory = z.infer<typeof QuizHistorySchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type ProfileData = z.infer<typeof ProfileDataSchema>;
export type ProgressStorage = z.infer<typeof ProgressStorageSchema>;
export type AvatarEmoji = typeof AVAILABLE_AVATARS[number];
export type AchievementType = typeof ACHIEVEMENT_TYPES[keyof typeof ACHIEVEMENT_TYPES];

// Helper interfaces for UI components
export interface ProfileSummary {
  id: string;
  nickname: string;
  avatar: AvatarEmoji;
  totalQuizzes: number;
  averageScore: number;
  lastActive: number;
}

export interface SubjectPerformance {
  subject: string;
  attempted: number;
  correct: number;
  percentage: number;
  improvement: number; // percentage change from previous attempts
}

// Achievement definitions
export interface AchievementDefinition {
  id: string;
  type: AchievementType;
  title: string;
  description: string;
  icon: string;
  condition: (stats: ProfileStats, history: QuizHistory[]) => boolean;
  metadata?: Record<string, unknown>;
}

// Default achievement definitions
export const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  {
    id: "first_quiz_completed",
    type: ACHIEVEMENT_TYPES.FIRST_QUIZ,
    title: "Getting Started! 🎯",
    description: "Completed your very first quiz",
    icon: "🎯",
    condition: (stats) => stats.totalQuizzesTaken >= 1
  },
  {
    id: "perfect_score_achieved",
    type: ACHIEVEMENT_TYPES.PERFECT_SCORE,
    title: "Perfect Score! 🌟",
    description: "Got 100% on a quiz",
    icon: "🌟",
    condition: (_, history) => history.some(h => h.score === 100)
  },
  {
    id: "quiz_master",
    type: ACHIEVEMENT_TYPES.QUIZ_MASTER,
    title: "Quiz Master 👑",
    description: "Completed 10 quizzes",
    icon: "👑",
    condition: (stats) => stats.totalQuizzesTaken >= 10
  },
  {
    id: "math_expert",
    type: ACHIEVEMENT_TYPES.SUBJECT_EXPERT,
    title: "Math Wizard 🔢",
    description: "Achieved 80%+ average in Mathematics",
    icon: "🔢",
    condition: (stats) => (stats.subjectStats["Mathematics"]?.averageScore ?? 0) >= 80,
    metadata: { subject: "Mathematics" }
  },
  {
    id: "english_expert", 
    type: ACHIEVEMENT_TYPES.SUBJECT_EXPERT,
    title: "Word Master 📚",
    description: "Achieved 80%+ average in English",
    icon: "📚",
    condition: (stats) => (stats.subjectStats["English"]?.averageScore ?? 0) >= 80,
    metadata: { subject: "English" }
  },
  {
    id: "science_expert",
    type: ACHIEVEMENT_TYPES.SUBJECT_EXPERT, 
    title: "Science Explorer 🔬",
    description: "Achieved 80%+ average in Science",
    icon: "🔬",
    condition: (stats) => (stats.subjectStats["Science"]?.averageScore ?? 0) >= 80,
    metadata: { subject: "Science" }
  },
  {
    id: "streak_3_days",
    type: ACHIEVEMENT_TYPES.LEARNING_STREAK,
    title: "Learning Streak! 🔥",
    description: "Completed quizzes for 3 days in a row",
    icon: "🔥",
    condition: (stats) => stats.currentStreak >= 3,
    metadata: { streakDays: 3 }
  },
  {
    id: "streak_7_days",
    type: ACHIEVEMENT_TYPES.LEARNING_STREAK,
    title: "Week Warrior! ⚡",
    description: "Completed quizzes for 7 days in a row",
    icon: "⚡",
    condition: (stats) => stats.currentStreak >= 7,
    metadata: { streakDays: 7 }
  },
  {
    id: "milestone_50_quizzes",
    type: ACHIEVEMENT_TYPES.MILESTONE,
    title: "Half Century! 🎊",
    description: "Completed 50 quizzes",
    icon: "🎊", 
    condition: (stats) => stats.totalQuizzesTaken >= 50,
    metadata: { milestone: 50 }
  }
];

// Utility functions
export const getDefaultProfileStats = (): ProfileStats => ({
  totalQuizzesTaken: 0,
  totalCorrectAnswers: 0,
  averageScore: 0,
  favoriteSubject: "",
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: Date.now(),
  subjectStats: {}
});

export const createProfileId = (nickname: string): string => {
  return nickname.toLowerCase().replace(/\s+/g, '_').substring(0, 20);
};

export const isValidNickname = (nickname: string): boolean => {
  return /^[a-zA-Z0-9\s]{1,20}$/.test(nickname.trim());
};

export const calculateStreak = (history: QuizHistory[]): number => {
  if (history.length === 0) return 0;
  
  const sortedHistory = [...history].sort((a, b) => b.completedAt - a.completedAt);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let streak = 0;
  let currentDate = today.getTime();
  const oneDayMs = 24 * 60 * 60 * 1000;
  
  for (const record of sortedHistory) {
    const recordDate = new Date(record.completedAt);
    recordDate.setHours(0, 0, 0, 0);
    
    if (recordDate.getTime() === currentDate || recordDate.getTime() === currentDate - oneDayMs) {
      if (recordDate.getTime() === currentDate - oneDayMs) {
        streak++;
        currentDate -= oneDayMs;
      }
    } else {
      break;
    }
  }
  
  return streak;
};