/**
 * Centralized theme configuration following design system principles
 * This file provides semantic tokens and consistent theming across the application
 */

// Subject theme configuration using design tokens
export const subjectTheme = {
  English: {
    bg: 'bg-subject-english/10',
    text: 'text-subject-english',
    border: 'border-subject-english/20',
    badge: 'bg-subject-english text-subject-english-foreground',
    emoji: '📚'
  },
  Mathematics: {
    bg: 'bg-subject-mathematics/10', 
    text: 'text-subject-mathematics',
    border: 'border-subject-mathematics/20',
    badge: 'bg-subject-mathematics text-subject-mathematics-foreground',
    emoji: '🔢'
  },
  Science: {
    bg: 'bg-subject-science/10',
    text: 'text-subject-science', 
    border: 'border-subject-science/20',
    badge: 'bg-subject-science text-subject-science-foreground',
    emoji: '🔬'
  },
  History: {
    bg: 'bg-subject-history/10',
    text: 'text-subject-history',
    border: 'border-subject-history/20', 
    badge: 'bg-subject-history text-subject-history-foreground',
    emoji: '🏛️'
  },
  Geography: {
    bg: 'bg-subject-geography/10',
    text: 'text-subject-geography',
    border: 'border-subject-geography/20',
    badge: 'bg-subject-geography text-subject-geography-foreground', 
    emoji: '🌍'
  }
} as const;

// Grade theme configuration using design tokens
export const gradeTheme = {
  A: { 
    bg: 'bg-success/10', 
    text: 'text-success', 
    border: 'border-success/20',
    badge: 'bg-success text-success-foreground'
  },
  B: { 
    bg: 'bg-info/10', 
    text: 'text-info', 
    border: 'border-info/20',
    badge: 'bg-info text-info-foreground' 
  },
  C: { 
    bg: 'bg-warning/10', 
    text: 'text-warning', 
    border: 'border-warning/20',
    badge: 'bg-warning text-warning-foreground'
  },
  D: { 
    bg: 'bg-destructive/10', 
    text: 'text-destructive', 
    border: 'border-destructive/20',
    badge: 'bg-destructive text-destructive-foreground'
  },
  F: { 
    bg: 'bg-destructive/20', 
    text: 'text-destructive', 
    border: 'border-destructive/30',
    badge: 'bg-destructive text-destructive-foreground'
  }
} as const;

// Type definitions for better TypeScript support
export type SubjectName = keyof typeof subjectTheme;
export type GradeName = keyof typeof gradeTheme;

// Utility function to get subject theme
export function getSubjectTheme(subject: string) {
  return subjectTheme[subject as SubjectName] || subjectTheme.English;
}

// Utility function to get grade theme
export function getGradeTheme(grade: string) {
  return gradeTheme[grade as GradeName] || gradeTheme.C;
}

// Common component variants using design tokens
export const componentVariants = {
  button: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    success: 'bg-success text-success-foreground hover:bg-success/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
  },
  card: {
    default: 'bg-card text-card-foreground border border-border',
    elevated: 'bg-card text-card-foreground border border-border shadow-lg',
    interactive: 'bg-card text-card-foreground border border-border hover:shadow-md transition-shadow'
  }
} as const;