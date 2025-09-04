/**
 * Centralized theme configuration following design system principles
 * This file provides semantic tokens and consistent theming across the application
 */

// Subject theme configuration using design tokens
export const subjectTheme = {
  English: {
    bg: 'bg-primary-50',
    text: 'text-primary-700',
    border: 'border-primary-200',
    badge: 'bg-primary-500 text-primary-foreground',
    emoji: '📚'
  },
  Mathematics: {
    bg: 'bg-accent-50', 
    text: 'text-accent-700',
    border: 'border-accent-200',
    badge: 'bg-accent-500 text-accent-foreground',
    emoji: '🔢'
  },
  Science: {
    bg: 'bg-success-50',
    text: 'text-success-700', 
    border: 'border-success-200',
    badge: 'bg-success-500 text-success-foreground',
    emoji: '🔬'
  },
  History: {
    bg: 'bg-secondary-50',
    text: 'text-secondary-700',
    border: 'border-secondary-200', 
    badge: 'bg-secondary-500 text-secondary-foreground',
    emoji: '🏛️'
  },
  Geography: {
    bg: 'bg-muted-100',
    text: 'text-muted-700',
    border: 'border-muted-300',
    badge: 'bg-muted-600 text-white', 
    emoji: '🌍'
  }
} as const;

// Grade theme configuration using design tokens
export const gradeTheme = {
  A: { 
    bg: 'bg-success-50', 
    text: 'text-success-700', 
    border: 'border-success-200',
    badge: 'bg-success text-success-foreground'
  },
  B: { 
    bg: 'bg-accent-50', 
    text: 'text-accent-700', 
    border: 'border-accent-200',
    badge: 'bg-accent text-accent-foreground' 
  },
  C: { 
    bg: 'bg-warning-50', 
    text: 'text-warning-700', 
    border: 'border-warning-200',
    badge: 'bg-warning text-warning-foreground'
  },
  D: { 
    bg: 'bg-error-50', 
    text: 'text-error-700', 
    border: 'border-error-200',
    badge: 'bg-error text-error-foreground'
  },
  F: { 
    bg: 'bg-error-100', 
    text: 'text-error-800', 
    border: 'border-error-300',
    badge: 'bg-error text-error-foreground'
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