The Design Style Guide (Plain Text)
A comprehensive system-level guide for building modern, high-craft product experiences—designed with the rigor you’d expect from world-class teams.

---

## TABLE OF CONTENTS

1. Purpose & Principles
2. Brand Foundations
3. Design Tokens
4. Layout, Grid & Spacing
5. Typography
6. Color System & Dark Mode
7. Iconography & Illustration
8. Motion, Interaction & Haptics
9. Components
10. Common Product Patterns
11. Accessibility & Inclusive Design
12. Internationalization & Localization
13. Data Visualization
14. Content Design (UX Writing)
15. Quality, Governance & Contribution
16. Design–Engineering Handoff
17. Measurement & Experimentation
18. Appendix: Reference Specs & Templates

---

1. PURPOSE & PRINCIPLES

---

Goal: Build coherent, fast, and humane products that scale from MVP to ecosystem.

Design Tenets

- Clarity over cleverness. Prioritize comprehension at a glance.
- Economy of UI. Fewer elements, stronger hierarchy, progressive disclosure.
- Consistency breeds velocity. A single source of truth (tokens + components).
- Intentional motion. Animation serves meaning, never decoration alone.
- Accessible by default. WCAG AA as a floor, not a ceiling.
- Device-agnostic. Design once; adapt fluidly across breakpoints and inputs.
- Data-informed, not data-led. Metrics guide; craft decides.
- Privacy & trust. Minimize data capture; maximize transparency and control.

Heuristics (Use in reviews)

- Can a new user succeed without guidance?
- Is the primary action visually and semantically obvious?
- Are states (empty/loading/error/success) explicit and graceful?
- Does the screen reveal the right amount of complexity for the moment?
- Is there exactly one way to accomplish a core task?

---

2. BRAND FOUNDATIONS

---

Voice & Tone

- Voice: Clear, confident, helpful.
- Tone spectrum:
  - Default: Neutral-friendly, concise.
  - Errors: Empathetic, actionable.
  - Success: Brief, celebratory but modest.
  - Education/Onboarding: Encouraging, precise.

Naming & Terminology

- Prefer nouns users already know.
- Avoid internal jargon.
- Use consistent labels across surfaces (nav, settings, docs).

Brand Assets

- Logo usage: Minimum clear space = 0.5× logomark height.
- Minimum size: 24 px height digital; avoid sub-24 favicon derivatives.

---

3. DESIGN TOKENS

---

Design tokens are the contract between design and code. They express brand and interaction primitives.

Token Categories

**Core System Tokens**
- **color** – semantic first (e.g., color.bg.surface, color.text.muted)
- **typography** – font families, sizes, weights, line-heights, letter-spacing
- **space** – 4-pt base scale (2,4,8,12,16,24,32,48,64)
- **radius** – 0,2,4,8,12,16,9999 (for fully rounded)
- **shadow** – elevation levels (sm, md, lg, xl, overlay)
- **z** – layering (base, sticky, dropdown, modal, toast, tooltip)
- **motion** – durations & easings
- **border** – widths & styles
- **opacity** – interaction & disabled states
- **breakpoint** – xs, sm, md, lg, xl, 2xl
- **grid** – container widths, columns, gutters

**AI Agent Token Usage Patterns**
```typescript
// When analyzing existing code, look for these patterns:
const tokenPatterns = {
  colors: /(?:bg-|text-|border-)\w+/g,
  spacing: /(?:p-|m-|gap-|space-)\d+/g,
  sizing: /(?:w-|h-|max-w-|min-h-)\w+/g,
  typography: /(?:text-|font-|leading-|tracking-)\w+/g,
  effects: /(?:shadow-|rounded-|opacity-)\w+/g,
};

// Preferred semantic tokens over direct values
const semanticColors = {
  surface: 'bg-white dark:bg-gray-900',
  primary: 'text-gray-900 dark:text-white',
  secondary: 'text-gray-600 dark:text-gray-400',
  accent: 'text-blue-600 dark:text-blue-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-amber-600 dark:text-amber-400',
  error: 'text-red-600 dark:text-red-400',
};
```

Example Token JSON
{
"color": {
"bg": { "canvas": "#0B0B0C", "surface": "#121214", "elevated": "#1A1B1E" },
"text": { "primary": "#FFFFFF", "secondary": "#B7B9C2", "muted": "#8A8D98", "inverse": "#0B0B0C" },
"brand": { "primary": "#5B8CFF", "primary-contrast": "#0B0B0C" },
"accent": { "green": "#22C55E", "yellow": "#F59E0B", "red": "#EF4444", "blue": "#3B82F6" },
"border": { "subtle": "#23252A", "strong": "#2E3036", "focus": "#5B8CFF" }
},
"type": {
"family": { "sans": "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" },
"size": { "xs": 12, "sm": 14, "md": 16, "lg": 18, "xl": 20, "2xl": 24, "3xl": 30, "4xl": 36 },
"weight": { "regular": 400, "medium": 500, "semibold": 600, "bold": 700 },
"leading": { "tight": 1.2, "normal": 1.45, "loose": 1.6 },
"tracking": { "tight": -0.01, "normal": 0, "wide": 0.02 }
},
"space": { "1": 4, "2": 8, "3": 12, "4": 16, "5": 24, "6": 32, "7": 48, "8": 64 },
"radius": { "sm": 4, "md": 8, "lg": 12, "xl": 16, "full": 9999 },
"shadow": {
"sm": "0 1px 2px rgba(0,0,0,.12)",
"md": "0 4px 12px rgba(0,0,0,.16)",
"lg": "0 8px 24px rgba(0,0,0,.18)",
"overlay": "0 16px 40px rgba(0,0,0,.28)"
},
"motion": {
"duration": { "fast": 120, "normal": 180, "slow": 240, "modal": 300 },
"easing": {
"standard": "cubic-bezier(0.2, 0, 0, 1)",
"emphasized": "cubic-bezier(0.2, 0, 0, 1.2)"
}
},
"z": { "base": 0, "sticky": 10, "dropdown": 1000, "modal": 1100, "toast": 1200, "tooltip": 1300 }
}

CSS Variable Mapping (generated at build)
:root {
--color-bg-canvas:#0B0B0C; --color-bg-surface:#121214; --color-bg-elevated:#1A1B1E;
--color-text-primary:#FFFFFF; --color-text-secondary:#B7B9C2; --color-text-muted:#8A8D98;
--color-brand-primary:#5B8CFF; --color-brand-contrast:#0B0B0C;
--color-border-subtle:#23252A; --color-border-strong:#2E3036; --color-border-focus:#5B8CFF;

--space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:24px; --space-6:32px;
--radius-sm:4px; --radius-md:8px; --radius-lg:12px; --radius-xl:16px; --radius-full:9999px;

--shadow-sm:0 1px 2px rgba(0,0,0,.12);
--shadow-md:0 4px 12px rgba(0,0,0,.16);
--shadow-lg:0 8px 24px rgba(0,0,0,.18);
--shadow-overlay:0 16px 40px rgba(0,0,0,.28);

--duration-fast:120ms; --duration-normal:180ms; --duration-slow:240ms; --duration-modal:300ms;
--easing-standard:cubic-bezier(.2,0,0,1); --easing-emphasized:cubic-bezier(.2,0,0,1.2);
}

Tailwind Mapping (excerpt)
/_ tailwind.config.js _/
theme.extend = {
colors: {
canvas: "var(--color-bg-canvas)",
surface: "var(--color-bg-surface)",
elevated: "var(--color-bg-elevated)",
text: {
primary: "var(--color-text-primary)",
secondary: "var(--color-text-secondary)",
muted: "var(--color-text-muted)"
},
brand: { DEFAULT: "var(--color-brand-primary)" }
},
borderColor: {
subtle: "var(--color-border-subtle)",
strong: "var(--color-border-strong)",
focus: "var(--color-border-focus)"
},
boxShadow: {
sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)", overlay: "var(--shadow-overlay)"
},
borderRadius: { sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px" },
spacing: { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 5: "24px", 6: "32px", 7: "48px", 8: "64px" },
transitionTimingFunction: {
standard: "var(--easing-standard)",
emphasized: "var(--easing-emphasized)"
},
transitionDuration: {
fast: "120ms", normal: "180ms", slow: "240ms", modal: "300ms"
}
};

---

4. LAYOUT, GRID & SPACING

---

Base unit: 4-pt grid.
Containers (desktop): sm 640, md 768, lg 1024, xl 1280, 2xl 1536.
Columns: 12 on desktop, 6 on tablet, 4 on mobile.
Gutters: 16–24 px desktop, 12–16 px mobile.
Safe areas: Respect OS notches & insets via env(safe-area-inset-\*).
Minimum hit area: 44×44 px touch, 32×32 px pointer.

Spacing System

- Tight within components; generous between regions (e.g., 8–12 px within, 16–24 px between groups).
- Use spacing tokens, not arbitrary numbers.

---

5. TYPOGRAPHY

---

Primary family: Geometric-humanist sans (e.g., Inter).
Scale: 1.125 modular for body up to display.
Leading: 1.45 for body; adjust down for headings (1.2–1.35).
Weights: 400 body, 500 UI controls, 600 headings.
Alignment: Left-aligned for readability; avoid justified body text.
Contrast: Text must meet WCAG AA (≥4.5:1 body, ≥3:1 ≥18px/semibold).
Truncation: Use ellipsis + accessible titles; avoid mid-word truncation.

Type Pairing Usage

- Display (3xl–4xl): Marketing hero & key metrics.
- Headline (xl–2xl): Section headers.
- Body (sm–md): 14–16 px. Prefer 16 px default.
- Caption (xs): Metadata and helper text.

---

6. COLOR SYSTEM & DARK MODE

---

Palette Strategy

- Neutrals: Cool-neutral ramp for surfaces (canvas → elevated).
- Brand: Single primary with quiet saturation; avoid neon for UI text.
- Semantics: success, warning, danger, info with accessible contrasts.

States

- Hover: +4–6% lightness.
- Active: -6–10% lightness & pressed shadow reduction.
- Focus: 2 px focus ring (color-border-focus), offset 2 px.

Dark Mode

- Maintain perceived contrast; text never pure white (#FFF → #EDEFF2).
- Elevation via lightness and shadow; avoid high-alpha overlays.
- Use identical semantic tokens; swap ramp at theme switch.

---

7. ICONOGRAPHY & ILLUSTRATION

---

Icon grid: 24×24, stroke 1.5 px, rounded caps/joins.
Metaphor: Prefer universal objects/actions; avoid colloquialisms.
Do: Use consistent perspective and corner radii.
Don’t: Mix filled and stroked styles in the same set.
Illustrations: Minimal, geometric, and purposeful (onboarding, empty states). Provide alt text summaries.

---

8. MOTION, INTERACTION & HAPTICS

---

Durations: 120–240 ms micro, ~300 ms overlays, 400–600 ms page transitions.
Easings: Standard for UI (0.2,0,0,1), emphasized for entrances.
Reduce Motion: Respect OS setting—replace motion with opacity/transform minimization.
Haptics (mobile):

- Success: selection / light tick.
- Error: notificationError.
- Drag: subtle impactLight on drop.

---

9. COMPONENTS

---

Each component defines: anatomy, variants, states, behavior, accessibility, API, usage.

Buttons

- Anatomy: Container, label, optional leading/trailing icon, focus ring.
- Variants: primary, secondary, tertiary, danger, link.
- Sizes: sm(32), md(40), lg(48).
- States: default, hover, active, focus, loading, disabled.
- Accessibility: Label is required; loading shows spinner + aria-busy="true".
- Behavior: Primary: one per view (ideally). Keyboard: Enter triggers primary; Space handles press on focus.
- API (React Props):
  variant: "primary" | "secondary" | "tertiary" | "danger" | "link"
  size: "sm" | "md" | "lg"
  leadingIcon, trailingIcon: ReactNode
  loading, disabled: boolean
  children: ReactNode
  onClick: function
  aria-label: string

Inputs (TextField)

- Anatomy: Label, input, helper, error, optional icon.
- States: focus ring, invalid (red border + message), disabled (50% opacity).
- Validation: real-time for format; defer expensive checks to onBlur/submit.
- Accessibility: Associate label with id; describe errors via aria-describedby.

Modal / Dialog

- Use cases: Blocking decisions, focused tasks.
- Specs: Width 480–720 px; close on Esc, overlay click optional per severity.
- Focus: Trap inside; return focus to invoking control.
- Accessibility: role="dialog", labelled by heading, described by body.

Navigation (Topbar + Sidebar)

- Topbar: Product switcher, search, help, avatar.
- Sidebar: Sections with icons; current page highlighted; collapse at md.
- Breadcrumbs: 3–5 levels max; truncate middle on narrow viewports.

Table

- Density: Comfortable by default; compact variant for power users.
- Columns: Resizable; persist user prefs.
- Empty state: Guidance + primary CTA + link to docs/import.
- Accessibility: Proper th/scope, keyboard sortable headers, focusable cells on interactive tables.

Feedback (Toast/Inline)

- Levels: success, info, warning, error.
- Lifetime: 4–6 s; persistent for errors requiring action.
- Accessibility: Announce via aria-live="polite" (errors: assertive).

(Define additional components similarly: Select, Combobox/Command Palette, Tabs, Accordion, Tooltip, Popover, Drawer, Pagination, Avatar, Badge/Chip, Progress, Skeleton, Spinner, Date/Time Picker, Uploader.)

---

10. COMMON PRODUCT PATTERNS

---

- Search & Command Palette: ⌘K/CTRL+K opens; fuzzy search; keyboard-first.
- Create/Edit Flows: Progressive disclosure; autosave; optimistic UI where safe.
- Auth: Minimal fields; passwordless where viable; clear error messaging.
- Settings: Group by job-to-be-done; destructive actions separated and confirmed.
- Empty States: Explain value, show example, and provide next step.
- Error Recovery: Plain language; preserve user input; one-click retry.
- Notifications: User-controllable frequency; respect quiet hours.

---

11. ACCESSIBILITY & INCLUSIVE DESIGN

---

- Contrast: Body text ≥4.5:1; large/semibold (≥18px) ≥3:1.
- Focus Visible: Always; 2 px offset ring, non-color-only indicators when possible.
- Keyboard Support: All interactive elements reachable; logical tab order; skip links.
- Screen Readers: Labels, roles, aria- for dynamic content; announce route changes.
- Forms: Group related fields; describe errors near inputs.
- Media: Captions and transcripts; alt text for imagery.
- Cognitive Load: Chunk content, predictable interactions, avoid surprise motion.

---

12. INTERNATIONALIZATION & LOCALIZATION

---

- RTL: Mirror layout; place affordances per reading order; icons with directionality mirrored.
- Text Expansion: Budget +30–50% width; avoid fixed button widths.
- Date/Number/Currency: Localize formats; clarify time zones; respect user locale.
- Input Methods: Support IME, dead keys; never block non-ASCII.

---

13. DATA VISUALIZATION

---

- Color: Color-blind-safe palettes; encode with shape/position first, color second.
- Typography: Axis labels ≥12 px, titles ≥14 px; use thousands separators.
- Interactivity: Hover tooltips with exact values; keyboard navigable data points.
- Legends: Order matches visual encoding; responsive stacking.
- Sparklines: No gridlines; baseline at zero unless justified.
- Empty/Error: Show fallback text; never blank charts.

---

14. CONTENT DESIGN (UX WRITING)

---

- Microcopy: Action-oriented verbs; concrete nouns.
- Placeholders ≠ labels: Use placeholders for examples only.
- Errors: Say what happened, why, and how to fix—ideally in one sentence.
- Tooltips: Teach once, not forever; if permanent, make it a helper text.
- Numbers: Use consistent decimal precision; explain rounding when material.

Voice Guides

- Do: “Connect account” → clear, direct.
- Don’t: “Let’s link your thing!” → vague, infantilizing.

---

15. QUALITY, GOVERNANCE & CONTRIBUTION

---

Component Maturity

- Alpha → API unstable, no external use
- Beta → API stable, a11y complete, tests in place
- Stable → Versioned, changelogged, telemetry instrumented

Contribution Flow

1. Open proposal with use cases and impact.
2. Design spike in Figma using tokens.
3. Engineering RFC & API review.
4. Accessibility review + test plan.
5. Ship behind flag; collect telemetry.
6. Promote to Stable; document in Storybook.

Review Checklist (Excerpt)

- [ ] Primary action is unmistakable
- [ ] Keyboard & screen reader parity
- [ ] Empty/loading/error states defined
- [ ] Copy reviewed & localized keys extracted
- [ ] Performance budget met (see below)

Performance Budgets

- First interaction <100 ms, primary nav <200 ms, modal open <150 ms.
- Defer non-critical scripts; prefetch likely next routes.

---

16. DESIGN–ENGINEERING HANDOFF

---

Figma Conventions

- Library: Foundations / Components / Patterns / Templates
- Naming: Component / Variant / Size / State → Button / Primary / md / Hover
- Auto-layout on all components; constraints set for breakpoints.
- Document: specs, redlines, interactions, a11y notes.

Spec Template (per screen)

- Objective: What this screen accomplishes
- Primary Action: One verb
- Data Requirements: Source, shape, loading skeleton
- Empty/Error States: Copy + visuals
- Metrics: What success looks like
- Open Questions: Items blocking build

---

17. MEASUREMENT & EXPERIMENTATION

---

- Core UX Metrics: Time-to-value, task success rate, error rate, NPS/CSAT, feature retention.
- Event Taxonomy: view, interact, submit, error, dismiss.
- A/B Guardrails: Power analysis, stop criteria, global holdouts for long-term effects.
- Qual & Quant: Pair analytics with usability tests and support tickets.

---

18. APPENDIX: REFERENCE SPECS & TEMPLATES

---

Focus Ring (CSS)
:where(button,[role="button"],a, input, select, textarea, [tabindex]):focus-visible {
outline: 2px solid var(--color-border-focus);
outline-offset: 2px;
border-radius: inherit;
}

State Elevation (CSS)
.card { background: var(--color-bg-surface); box-shadow: var(--shadow-sm); }
.card:hover { box-shadow: var(--shadow-md); }
.modal { background: var(--color-bg-elevated); box-shadow: var(--shadow-overlay); }

Accessible Visually Hidden Text (CSS)
.sr-only {
position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden;
clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}

Component Spec Template (Markdown-ish)

# Component Name

## Anatomy
Parts: Container, Content, Interactive Elements, Icons/Indicators

## Variants
- Size: sm, md, lg
- Type: primary, secondary, tertiary
- State: static, interactive, disabled

## States
- Default: Base appearance and behavior
- Hover: Visual feedback on pointer interaction
- Active: Pressed/activated state
- Focus: Keyboard focus indicator (2px ring, offset)
- Loading: Progress indication with aria-busy
- Disabled: 50% opacity, no pointer events
- Error: Red border/background, error message
- Success: Green accent, success indicator

## Behavior
- User interactions and expected responses
- State transitions and timing
- Data flow and side effects

## Accessibility
- ARIA roles and properties
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Color contrast compliance (4.5:1 minimum)

## API (TypeScript)
```typescript
interface ComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  onClick?: (event: MouseEvent) => void;
}
```

## Usage Guidelines
**Do:**
- Use consistent spacing and alignment
- Provide clear visual hierarchy
- Include proper ARIA labels
- Follow established interaction patterns

**Don't:**
- Override semantic HTML behavior
- Use color as the only differentiator
- Ignore loading and error states
- Create custom keyboard shortcuts without documentation

## Implementation Examples
```typescript
// Basic usage
<Component variant="primary" size="md">
  Content
</Component>

// With state management
<Component 
  loading={isSubmitting}
  disabled={!isValid}
  onClick={handleSubmit}
  aria-label="Submit form"
>
  Submit
</Component>
```

Error Message Style
Title: Short & human (“We couldn’t save your changes”)
Body: What happened + actionable next step
CTA: Single, explicit action; secondary link to docs if needed

Empty State Template

- Icon/illustration (optional)
- Title: “Nothing here yet”
- Body: One sentence about value + how to start
- Primary CTA: “Create …”
- Secondary: “Import …” or “Learn more”

Accessibility Keyboard Map (Excerpt)

- Global: Skip to content (Tab from top), Command Palette (⌘K/CTRL+K)
- Modal: Esc closes, Tab cycles focus, Shift+Tab reverse
- Menus: Arrow keys navigate; Enter/Space selects; Home/End jump

---

## CLAUDE CODE INTEGRATION

---

### AI Agent Design Patterns

When working with Claude Code, apply these patterns:

**Component Analysis**
- Read existing components before creating new ones
- Identify design token usage patterns in the codebase
- Follow established naming conventions and file structure
- Maintain consistency with existing component APIs

**Design Token Implementation**
```typescript
// Preferred: Use semantic tokens
className="bg-surface text-primary border-subtle"

// Avoid: Direct color values
className="bg-gray-100 text-gray-900 border-gray-200"
```

**Responsive Implementation**
```typescript
// Mobile-first approach
className="p-4 sm:p-6 lg:p-8"

// Container queries when appropriate
className="container mx-auto px-4 max-w-4xl"
```

**Accessibility Integration**
- Always include ARIA attributes for dynamic content
- Implement focus management for interactive flows
- Use semantic HTML elements as base
- Test keyboard navigation paths

**State Management Patterns**
```typescript
// Loading states
const [isLoading, setIsLoading] = useState(false);

// Error boundaries
const [error, setError] = useState<string | null>(null);

// Success feedback
const [showSuccess, setShowSuccess] = useState(false);
```

### Claude Code Workflow Integration

**File Structure Conventions**
```
src/
├── components/
│   ├── ui/           # Base design system components
│   ├── [domain]/     # Feature-specific components
├── contexts/         # Global state management
├── types/           # TypeScript definitions
├── services/        # Business logic
└── data/           # Static data and configurations
```

**Component Creation Pattern**
1. Analyze existing similar components
2. Extract reusable patterns to ui/ directory  
3. Implement feature-specific logic in domain directories
4. Use TypeScript for all prop interfaces
5. Include proper JSDoc documentation

**Design System Extension**
- Add new tokens to design system first
- Create base components in ui/ before feature components
- Document component variants and states
- Implement proper prop typing and validation

### AI Agent Best Practices

**Code Generation Guidelines**
- Always read existing code before generating new components
- Follow established patterns for state management
- Use existing utility functions and hooks
- Maintain consistent error handling approaches

**Design Decision Framework**
- Prioritize accessibility compliance
- Consider mobile-first responsive design
- Use semantic HTML structures
- Implement proper loading and error states

**Integration Testing**
- Test components in isolation
- Verify responsive behavior across breakpoints
- Validate accessibility with screen readers
- Check keyboard navigation flow

---

## Final Notes

- Ship the system, not a page. Every addition must generalize.
- Prefer subtraction. If a new rule duplicates another, delete one.
- Document decisions. The "why" prevents entropy.
- **For AI Agents**: Always analyze existing patterns before implementing new ones.
- **Code Consistency**: Follow established conventions rather than creating new patterns.
- **Progressive Enhancement**: Build base functionality first, then add advanced features.
