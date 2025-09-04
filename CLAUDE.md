# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (starts on localhost:8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Design System & Code Standards

This project follows comprehensive design principles and style guidelines. **ALWAYS reference these documents before making any code changes or component creation:**

### Required Reading
- **`context/design-style.md`**: Complete design system guide with design tokens, component specifications, and Claude Code integration patterns
- **`context/design-principle.md`**: Design principles with AI agent guidelines, review checklists, and anti-patterns to avoid

### Claude Code Agent Workflow

**Before generating any code, you MUST:**
1. Read `context/design-style.md` to understand the design token system and component patterns
2. Review `context/design-principle.md` for applicable design principles and Claude Code agent guidelines
3. Analyze existing similar components in the codebase to understand established patterns
4. Follow the component creation workflow outlined in the design documents

**Development Process:**
1. **Analyze**: Read existing code patterns and design system documentation
2. **Plan**: Apply design principles to guide implementation decisions
3. **Generate**: Follow established patterns and best practices
4. **Validate**: Check against quality gates and review checklists in design-principle.md
5. **Integrate**: Ensure seamless integration with existing codebase

### Code Quality Standards

**Component Requirements:**
- Include all component states: default, hover, active, focus, loading, disabled, error
- Implement proper ARIA attributes and semantic HTML structure
- Follow established TypeScript interface patterns
- Include responsive behavior across all breakpoints
- Handle loading and error states appropriately

**Quality Gates:**
- All generated code must pass ESLint and TypeScript checks
- Components must be keyboard accessible and screen reader compatible
- Follow established naming conventions and file structure
- Include proper documentation for complex logic

**Anti-Patterns to Avoid:**
- Creating duplicate components instead of reusing existing ones
- Using hardcoded colors instead of design tokens
- Ignoring accessibility requirements
- Breaking established responsive design patterns
- Not handling loading and error states

**MANDATORY**: Before any component creation or significant code changes, read and follow the guidelines in `context/design-style.md` and `context/design-principle.md`.

## Project Architecture

<!-- UPDATE THIS SECTION FOR YOUR SPECIFIC PROJECT -->
<!-- Template: Describe your project type, main purpose, and target users -->
This is a React-based quiz application built for NSW school curriculum testing, using a modern tech stack:

### Tech Stack
<!-- UPDATE: List your project's specific technologies -->
- **Vite**: Build tool and development server
- **React 18**: UI framework with TypeScript
- **shadcn/ui**: Component library built on Radix UI
- **Tailwind CSS**: Styling framework
- **React Router**: Client-side routing
- **TanStack Query**: Data fetching and state management
- **React Hook Form + Zod**: Form handling and validation

### Key Application Structure

<!-- UPDATE: Describe your main application architecture and core components -->
**Quiz System Architecture:**
- `src/types/quiz.ts`: Core type definitions for Quiz, Question, UserAnswer, and QuizResult interfaces
- `src/data/sampleQuizzes.ts`: Sample quiz data for Years 4-6 NSW curriculum
- `src/components/quiz/QuizApp.tsx`: Main quiz orchestrator managing three states: 'selection', 'taking', 'results'

**Component Organization:**
- `src/components/quiz/`: Quiz-specific components (QuizCard, QuestionCard, QuizResults, ProgressBar, QuizUpload)
- `src/components/ui/`: shadcn/ui components (button, card, dialog, etc.)
- `src/pages/`: Route components (Index, NotFound)

**State Management Pattern:**
<!-- UPDATE: Describe your state management approach -->
The QuizApp component uses local state to manage the quiz flow:
1. Quiz selection with year filtering
2. Question progression with answer tracking
3. Results calculation with subject-wise breakdown

**Data Structure:**
<!-- UPDATE: Describe your main data models and relationships -->
- Each quiz contains questions grouped by subject (English, Mathematics, Science, History, Geography)
- Questions include explanations shown after answering
- Results calculate overall grade (A-F) and per-subject performance

### Path Alias
<!-- UPDATE: Document your path aliases -->
- `@/` maps to `src/` directory for clean imports

### Styling Approach
<!-- UPDATE: Describe your styling approach and design system -->
- Uses Tailwind utility classes
- Custom color palette defined in tailwind.config.ts
- Mobile-responsive design with careful attention to small screens
- Font loading: Fredoka font family for headings

### Project-Specific Features
<!-- UPDATE: Document any unique features or systems in your project -->
**Progress Tracking System:**
- `src/contexts/ProgressContext.tsx`: Global state management for user profiles and progress
- `src/services/progressStorage.ts`: Secure localStorage wrapper with validation
- `src/types/progress.ts`: Type definitions and Zod schemas for progress tracking
- `src/components/profile/`: Profile management components (ProfileSelector, ProfileSwitcher, AchievementNotification)
- `src/components/progress/`: Progress dashboard and analytics components

**Multi-Profile Architecture:**
- Client-side persistence using localStorage with base64 encoding
- Support for up to 5 profiles per device for family sharing
- Achievement system with real-time notifications
- Subject-wise performance tracking and streak monitoring
- Data privacy focused - no external data collection

### Notable Patterns
<!-- UPDATE: Document important patterns and conventions specific to your project -->
- Questions are keyed with `question-${index}-${quizId}` for proper React re-mounting
- Answer submission prevents multiple selections per question
- Results show both percentage and letter grades with subject breakdowns
- Progress tracking integrates seamlessly with existing quiz flow
- All data validation uses Zod schemas for security and type safety