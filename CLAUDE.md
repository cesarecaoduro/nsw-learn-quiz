# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (starts on localhost:8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

This is a React-based quiz application built for NSW school curriculum testing, using a modern tech stack:

### Tech Stack
- **Vite**: Build tool and development server
- **React 18**: UI framework with TypeScript
- **shadcn/ui**: Component library built on Radix UI
- **Tailwind CSS**: Styling framework
- **React Router**: Client-side routing
- **TanStack Query**: Data fetching and state management
- **React Hook Form + Zod**: Form handling and validation

### Key Application Structure

**Quiz System Architecture:**
- `src/types/quiz.ts`: Core type definitions for Quiz, Question, UserAnswer, and QuizResult interfaces
- `src/data/sampleQuizzes.ts`: Sample quiz data for Years 4-6 NSW curriculum
- `src/components/quiz/QuizApp.tsx`: Main quiz orchestrator managing three states: 'selection', 'taking', 'results'

**Component Organization:**
- `src/components/quiz/`: Quiz-specific components (QuizCard, QuestionCard, QuizResults, ProgressBar, QuizUpload)
- `src/components/ui/`: shadcn/ui components (button, card, dialog, etc.)
- `src/pages/`: Route components (Index, NotFound)

**State Management Pattern:**
The QuizApp component uses local state to manage the quiz flow:
1. Quiz selection with year filtering
2. Question progression with answer tracking
3. Results calculation with subject-wise breakdown

**Quiz Data Structure:**
- Each quiz contains questions grouped by subject (English, Mathematics, Science, History, Geography)
- Questions include explanations shown after answering
- Results calculate overall grade (A-F) and per-subject performance

### Path Alias
- `@/` maps to `src/` directory for clean imports

### Styling Approach
- Uses Tailwind utility classes
- Custom color palette defined in tailwind.config.ts
- Mobile-responsive design with careful attention to small screens
- Font loading: Fredoka font family for headings

### Notable Patterns
- Questions are keyed with `question-${index}-${quizId}` for proper React re-mounting
- Answer submission prevents multiple selections per question
- Results show both percentage and letter grades with subject breakdowns