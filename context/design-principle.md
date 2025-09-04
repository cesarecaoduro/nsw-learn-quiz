The Design Principles Guide (Plain Text)
World-class product craft distilled into clear, testable principles—optimized for speed, scale, and trust.

---

## TABLE OF CONTENTS

0. How to Use This Guide
1. Canon of Principles (with tests, tactics, anti‑patterns, metrics)
   1.1 Clarity
   1.2 Focus
   1.3 Consistency
   1.4 Hierarchy
   1.5 Progressive Disclosure
   1.6 Feedback & Status
   1.7 Forgiveness (Undo > Confirm)
   1.8 Accessibility by Default
   1.9 Performance Perception
   1.10 Predictability & Control
   1.11 Trust & Privacy
   1.12 Minimal Cognitive Load
   1.13 Intentional Motion
   1.14 Resilience (Error Tolerance)
   1.15 Composability & Reuse
   1.16 Opinionated Defaults
   1.17 Data-Informed, Not Data-Led
   1.18 Inclusive, Global, Local
   1.19 Craft & Cohesion
   1.20 Joy, Not Noise
2. Platform Principles (Web, iOS, Android, Desktop)
3. AI/ML Experience Principles
4. Content & Conversation Principles (UX Writing)
5. Research & Evidence: Levels of Proof
6. Decision & Trade-off Frameworks
7. Quality Bars & Definition of Done
8. Ethics, Safety, and Privacy-by-Design
9. Review Checklists (Crits, Pre-Ship, Post-Launch)
10. Anti-Principles (What We Avoid)
11. Appendices: Heuristics, Templates, and Example Tests

---

0. HOW TO USE THIS GUIDE

---

- Treat principles as constraints that accelerate decisions. If everything is a priority, nothing is.
- Each principle includes: WHY (value), HOW (actions), SMELLS (anti-patterns), METRICS (signals).
- Use “Principle → Test” in design reviews to quickly validate a flow.
- When principles conflict, escalate using the Decision & Trade-off Frameworks (Section 6).

---

1. CANON OF PRINCIPLES

---

1.1 CLARITY
WHY: People act faster when the interface speaks their language.
HOW:

- Name actions with concrete verbs and objects (“Create invoice”), not vague metaphors.
- Show the next step prominently; collapse the rest.
- Prefer plain language; one idea per sentence.
  SMELLS: Clever labels, unexplained icons, nouns used as verbs, ambiguous CTAs.
  METRICS: Time to first success, misclick rate, help center visits from that screen.

  1.2 FOCUS
  WHY: Attention is finite; split attention kills outcomes.
  HOW:

- One primary action per view. Secondary actions demoted or deferred.
- Remove non-essential visuals; avoid decorative motion.
- Use progressive disclosure to reveal complexity only when needed.
  SMELLS: Competing CTAs, equal-weight buttons, crowded toolbars.
  METRICS: Primary action activation rate, completion time variance.

  1.3 CONSISTENCY
  WHY: Consistency shortens learning loops and reduces support load.
  HOW:

- Reuse components and tokens; never redraw fundamentals.
- Align patterns across platforms while respecting native idioms.
  SMELLS: Multiple date pickers, varied paddings for the same control, ad-hoc icon styles.
  METRICS: Number of one-off components, design–build divergence, bug reports for “can’t find”.

  1.4 HIERARCHY
  WHY: Users scan; hierarchy guides the eye and decision.
  HOW:

- Use size, weight, contrast, and spacing to signal importance.
- Align content to a consistent grid; avoid center-justified bodies.
  SMELLS: Wall-of-text, equal emphasis everywhere, floating elements.
  METRICS: Scroll depth to action, heatmap fixation dispersion.

  1.5 PROGRESSIVE DISCLOSURE
  WHY: Complexity is inevitable; timing its reveal is the craft.
  HOW:

- Default to simple; disclose advanced options behind “Show advanced” or stepper.
- Summarize chosen options; let users drill in.
  SMELLS: Overwhelming first-run forms; nested modals.
  METRICS: Abandonment on step 1, toggle-open rates, error rates after reveal.

  1.6 FEEDBACK & STATUS
  WHY: Uncertainty causes hesitation; visible state builds confidence.
  HOW:

- Always communicate system status: loading, success, idle, offline.
- Use optimistic UI where safe and reversible.
  SMELLS: Spinners without context, silent failures, hidden autosave.
  METRICS: Error recovery rate, retry taps, undo usage.

  1.7 FORGIVENESS (UNDO > CONFIRM)
  WHY: People make mistakes; systems should be forgiving.
  HOW:

- Prefer reversible actions and “toast-undo” over confirmation dialogs.
- Provide previews for destructive operations.
  SMELLS: Mandatory confirmations for trivial actions; no recovery path.
  METRICS: Undo success rate, accidental destructive actions, support tickets.

  1.8 ACCESSIBILITY BY DEFAULT
  WHY: Accessibility improves usability for everyone and is a non-negotiable standard.
  HOW:

- Meet WCAG 2.2 AA minimums. Keyboard-first navigation. Focus visible.
- Provide alt text, captions, and logical reading order.
  SMELLS: Color-only differentiation, low contrast, non-labeled controls.
  METRICS: Automated a11y score, assistive tech task success, keyboard completion rates.

  1.9 PERFORMANCE PERCEPTION
  WHY: Perceived speed beats raw speed for UX outcomes.
  HOW:

- Use skeletons, instant affordance on tap/click, and prefetch likely routes.
- Keep first interaction under 100 ms; primary nav under 200 ms.
  SMELLS: Blocking spinners, layout shift, delayed tap response.
  METRICS: TTI, INP, layout shift, rage clicks, first action latency.

  1.10 PREDICTABILITY & CONTROL
  WHY: Users trust systems that behave as expected and honor intent.
  HOW:

- No surprise navigation or auto-submissions; explicit save/undo.
- Provide granular settings and visible controls for automation.
  SMELLS: Auto-format that overwrites input, hidden preferences, hijacked scroll.
  METRICS: Back button usage, setting churn, manual overrides.

  1.11 TRUST & PRIVACY
  WHY: Trust compounds slowly and breaks instantly.
  HOW:

- Data minimization, local-first where viable, clear consent and provenance.
- Explain why data is needed; provide export/delete pathways.
  SMELLS: Dark patterns, pre-checked sharing, vague permissions.
  METRICS: Privacy complaints, opt-out rates, data deletion SLA adherence.

  1.12 MINIMAL COGNITIVE LOAD
  WHY: Lower mental effort → higher completion.
  HOW:

- Chunk steps, use recognition over recall, label before input.
- Keep forms short; show progress and save state.
  SMELLS: Long unbroken forms, placeholder-as-label, unexplained validation.
  METRICS: NASA-TLX (subjective), completion rate, edits per field.

  1.13 INTENTIONAL MOTION
  WHY: Motion clarifies relationships and outcomes.
  HOW:

- Animate only state changes and spatial transitions; keep durations 120–240 ms.
- Respect “Reduce Motion” OS setting.
  SMELLS: Gratuitous loops, looping confetti on mundane actions, jittery micro-animations.
  METRICS: Motion complaints, motion-disabled sessions, comprehension in tests.

  1.14 RESILIENCE (ERROR TOLERANCE)
  WHY: Real-world networks and inputs are messy.
  HOW:

- Offline-friendly where feasible; autosave and retry queues.
- Preserve input across errors; show actionable next steps.
  SMELLS: “Something went wrong” with no details, lost form data.
  METRICS: Recovery without support, error loop frequency, offline completion.

  1.15 COMPOSABILITY & REUSE
  WHY: Systems scale when parts combine without friction.
  HOW:

- Design components API-first (props/variants/states). Think constraints, not pages.
- Favor primitives that compose (list + cell + action) over bespoke screens.
  SMELLS: Single-use snowflakes, one-off layout hacks.
  METRICS: Reuse ratio, time-to-implement, custom CSS lines.

  1.16 OPINIONATED DEFAULTS
  WHY: Good defaults reduce setup time and decision fatigue.
  HOW:

- Provide safe, popular defaults and clear “Recommended” paths.
- Let advanced users override.
  SMELLS: Blank slates requiring configuration, wizard fatigue.
  METRICS: Time-to-value, percent using defaults, override success rate.

  1.17 DATA-INFORMED, NOT DATA-LED
  WHY: Metrics guide but cannot define taste or ethics.
  HOW:

- Pair quant (A/B) with qual (usability, interviews); design for the long term.
- Use guardrail metrics (trust, retention) to avoid local maxima.
  SMELLS: Shipping the higher CTR that erodes trust, chasing shallow KPIs.
  METRICS: Retention, task success, satisfaction, complaint rate.

  1.18 INCLUSIVE, GLOBAL, LOCAL
  WHY: Products live in cultures and languages, not just screens.
  HOW:

- Plan for RTL, text expansion, locale formats, cultural imagery.
- Avoid idioms; support assistive input methods (IME, voice).
  SMELLS: Truncated strings, left/right directional icons in RTL, culture-specific jokes.
  METRICS: Bug reports by locale, truncation rate, RTL parity audits.

  1.19 CRAFT & COHESION
  WHY: Details signal care and raise perceived quality.
  HOW:

- Align to grid, consistent radii/spacing, precise hit targets, crisp icons.
- Eliminate visual noise; favor subtraction.
  SMELLS: Misaligned baselines, off-scale corners, mixed icon sets.
  METRICS: Visual QA defects, polish bugs, qualitative “quality” ratings.

  1.20 JOY, NOT NOISE
  WHY: Delight should amplify value, not distract from it.
  HOW:

- Use tasteful micro-moments for achievement and learning.
- Tie delight to meaning (e.g., milestone reached) and allow opt-out.
  SMELLS: Confetti for every click, gamified chores, childish tone for pro tools.
  METRICS: Positive unsolicited feedback, feature adoption post-delight, opt-out rates.

---

2. PLATFORM PRINCIPLES

---

WEB: Responsive first, keyboard parity, performance budgets (Core Web Vitals).
iOS: Respect HIG; use native gestures; haptics for confirmation; back-swipe safe.
Android: Material motion/elevation; system back behavior; edge-to-edge layouts.
Desktop: Precision pointer targets; shortcut discoverability; windowed resilience.

---

3. AI/ML EXPERIENCE PRINCIPLES

---

### General AI Experience Principles
- User in Control: Humans start, steer, and can stop automation at any time.
- Explainability at the Right Level: Show simple rationales ("Because you asked X…").
- Show Uncertainty: Communicate confidence and alternatives; avoid false certainty.
- Progressive Autonomy: Suggest → Assist → Automate, gated by consent and trust.
- Data Minimization: Only capture what's essential; offer local/on-device when possible.
- Provenance & Integrity: Watermark or label generated media; show source citations.
- Safe Defaults: Block harmful outputs; provide escalation and reporting paths.
- Repair Loops: One-tap feedback improves future results (thumbs, re-rank, refine).
- Fast Paths: Cache/stream partial results; never block core tasks on generation.
- Human Handoff: Provide smooth transitions to human support with context attached.

### Claude Code Agent Principles

**Code Analysis First**
- Always read and understand existing code patterns before generating new components
- Identify design system tokens and component libraries in use
- Respect established architectural decisions and naming conventions
- Maintain consistency with existing state management patterns

**Pattern Recognition & Reuse**
- Extract common patterns into reusable components
- Follow the principle of least surprise - use familiar patterns
- Prefer composition over inheritance in component design
- Identify and eliminate code duplication across the codebase

**Accessibility by Default in Code Generation**
- Include proper ARIA attributes in generated components
- Implement keyboard navigation support automatically
- Ensure color contrast meets WCAG standards in generated styles
- Add semantic HTML structure as foundation

**Incremental Enhancement**
- Build features progressively - core functionality first, then enhancements
- Generate loading states, error boundaries, and empty states by default
- Implement mobile-first responsive design patterns
- Add proper TypeScript typing for all generated code

**Context-Aware Development**
- Understand the business domain before generating components
- Consider user personas and use cases in design decisions
- Align technical implementation with project goals
- Document design decisions and trade-offs made during development

**Code Quality Gates**
- Generate code that passes linting and type checking
- Include proper error handling and edge case coverage
- Write components that are testable and maintainable
- Follow established performance best practices

**Collaborative Development**
- Generate code that other developers can easily understand and extend
- Include meaningful comments for complex business logic
- Follow established code review and contribution guidelines
- Create documentation for non-obvious implementation decisions

---

4. CONTENT & CONVERSATION PRINCIPLES (UX WRITING)

---

- Clarity over cleverness; verbs before nouns; avoid jargon.
- Write for scanning: short sentences, front-load keywords, lists over paragraphs.
- Error style: Say what happened, why, and how to fix—ideally in one sentence.
- Empty states teach; tooltips don’t replace labels; placeholders are examples only.
- Inclusive language: gender-neutral, culture-neutral, emoji optional and purposeful.

---

5. RESEARCH & EVIDENCE: LEVELS OF PROOF

---

- Level 0: Heuristic review and expert critique.
- Level 1: Concept tests (5–8 participants) for comprehension.
- Level 2: Usability tests (8–12) on realistic tasks; success/time/err rates.
- Level 3: Live experiments with guardrails; measure retention and trust.
- Level 4: Longitudinal field studies; diary + telemetry to capture real behavior.

---

6. DECISION & TRADE-OFF FRAMEWORKS

---

- North Star: One outcome metric per product area (e.g., Time-to-Value).
- Jobs-to-Be-Done: Define job statements; design flows that satisfy functional + emotional jobs.
- Kano: Identify must-haves vs. exciters; meet basics before polish.
- HEART/ARES: Happiness/Adoption/Retention/Task success + Error/Responsiveness/Engagement/Satisfaction.
- Quality-Speed-Risk Triad: Pick two; document the trade-off and date to revisit.
- Decision Record (ADR): Context → Options → Decision → Why → Risks → Follow-ups.

---

7. QUALITY BARS & DEFINITION OF DONE

---

MVP QUALITY BAR

- Meets critical principles: Clarity, Focus, Accessibility, Performance perception.
- Empty/loading/error states implemented; analytics and logs wired.
- Support paths defined; rollback plan exists.

BETA QUALITY BAR

- A11y WCAG AA pass; keyboard parity; localization-ready strings.
- Componentized UI; tokens only; no hard-coded colors.
- Experiment guardrails set; success & stop criteria defined.

GA QUALITY BAR

- Performance budgets met (first interaction <100 ms; nav <200 ms).
- Security/privacy review complete; data retention documented.
- Documentation: help articles, release notes, migration plan.

---

8. ETHICS, SAFETY, AND PRIVACY-BY-DESIGN

---

- Do no harm: avoid dark patterns; solicit meaningful consent.
- Least privilege: minimal scopes, revocable tokens, clear permission prompts.
- Transparency: show what is collected and why; provide export/delete.
- Bias & Fairness: test across demographics and contexts; track disparities.
- Safeguards: rate limits, content filters, abuse reporting, human escalation.

---

9. REVIEW CHECKLISTS

---

### Standard Design Review Checklists

CRIT REVIEW (BEFORE BUILD)

- [ ] One primary job-to-be-done
- [ ] Primary CTA visually dominant; others demoted
- [ ] State coverage (empty, loading, error, success)
- [ ] Keyboard & screen reader plan
- [ ] Performance plan (skeletons/prefetch)

PRE-SHIP (BEFORE MERGE)

- [ ] Tokens only; components reused
- [ ] Copy approved; localized keys extracted
- [ ] A11y check: contrast, focus, labels, semantics
- [ ] Analytics events named, documented, and tested
- [ ] Undo paths for destructive actions

POST-LAUNCH (WITHIN 1–2 WEEKS)

- [ ] Review guardrail metrics (trust, retention, support)
- [ ] Triage feedback; fix paper cuts
- [ ] Write ADR: what worked, what didn't, next bets

### Claude Code Agent Review Checklists

PATTERN ANALYSIS (BEFORE GENERATION)

- [ ] Read existing components with similar functionality
- [ ] Identify design system tokens and utilities in use
- [ ] Map out component composition patterns
- [ ] Understand state management approach
- [ ] Check naming conventions and file structure

CODE GENERATION (DURING DEVELOPMENT)

- [ ] Follow established architectural patterns
- [ ] Use semantic HTML elements as foundation
- [ ] Include proper TypeScript interfaces and props
- [ ] Implement responsive design mobile-first
- [ ] Add loading, error, and empty states
- [ ] Include proper ARIA attributes and labels
- [ ] Follow existing styling patterns (Tailwind classes, design tokens)
- [ ] Handle edge cases and error boundaries

QUALITY ASSURANCE (BEFORE COMPLETION)

- [ ] Code passes linting and type checking
- [ ] Components work across breakpoints
- [ ] Keyboard navigation functions properly
- [ ] Screen reader accessibility verified
- [ ] Performance considerations addressed
- [ ] Integration with existing components tested
- [ ] Documentation and comments added where needed
- [ ] Follows project's code style guidelines

INTEGRATION TESTING (POST-DEVELOPMENT)

- [ ] Component integrates seamlessly with existing codebase
- [ ] No regressions in related functionality
- [ ] State management works with global context
- [ ] Styling is consistent with design system
- [ ] No console errors or warnings
- [ ] Responsive behavior verified on multiple devices

---

10. ANTI-PRINCIPLES (WHAT WE AVOID)

---

### General Anti-Principles
- Growth that erodes trust (spammy prompts, nagging modals).
- Surprises (auto-navigation, silent data changes).
- Cleverness over clarity (puns, cute labels in pro tools).
- Snowflake components (one-offs that break system cohesion).
- Over-configuration (dozens of toggles instead of better defaults).
- "Because data said so" without context or ethics.
- Unrecoverable actions without warning or undo.

### Claude Code Agent Anti-Principles

**Code Generation Anti-Patterns**
- Generating code without understanding existing patterns
- Creating duplicate components instead of reusing existing ones
- Ignoring established naming conventions and file structures
- Writing code that doesn't follow the project's TypeScript standards
- Generating components without proper accessibility attributes

**Design System Violations**
- Using hardcoded colors instead of design tokens
- Creating inconsistent spacing and sizing patterns
- Mixing different icon styles or component variants
- Breaking responsive design patterns established in the codebase
- Ignoring the project's established visual hierarchy

**State Management Mistakes**
- Creating local state when global context should be used
- Ignoring existing state management patterns
- Not handling loading and error states properly
- Creating components that don't integrate with existing data flow
- Bypassing established error boundaries and validation patterns

**Accessibility Failures**
- Generating components without semantic HTML structure
- Missing ARIA labels and role attributes
- Creating interactions that are not keyboard accessible
- Ignoring color contrast requirements
- Not testing with screen readers or assistive technologies

**Performance and Maintainability Issues**
- Creating components with poor performance characteristics
- Writing code that is difficult for other developers to understand
- Not documenting complex logic or design decisions
- Generating code that doesn't handle edge cases properly
- Creating tightly coupled components that are hard to test

---

11. APPENDICES

---

A) QUICK HEURISTICS (NIELSEN + SYSTEM AUGMENTED)

- Visibility of system status
- Match between system and real world
- User control and freedom (undo/redo)
- Consistency and standards
- Error prevention and clear recovery
- Recognition rather than recall
- Flexibility and efficiency of use (shortcuts)
- Aesthetic and minimalist design
- Help users recognize, diagnose, and recover from errors
- Help and documentation (inline, contextual)

B) TEMPLATE: PRINCIPLE → TEST → TACTICS
Example: “Clarity”
Test: “Can a new user tell what to do next within 3 seconds?”
Tactics: Use explicit verbs, de-emphasize secondary actions, add helper text where needed.

C) EXAMPLE METRIC MAP
Outcome: Faster onboarding
Signals: Time-to-first-value, step completion, drop-off between steps, support tickets.

D) EXAMPLE DECISION RECORD (ADR)
Context: Multiple ways to schedule posts; user confusion in tests.
Decision: Standardize on one “Schedule” modal with presets and advanced options.
Why: Reduces cognitive load; increases completion.
Risks: Power-user friction; mitigated via advanced tab.
Follow-ups: Measure override use and completion after 2 weeks.

---

## FINAL NOTES

### General Principles
- Principles are living scaffolds. Revisit quarterly; prune aggressively.
- When in doubt, ship the simple path with an escape hatch for experts.
- Taste matters. Data verifies; it never replaces judgment.

### Claude Code Agent Guidelines
- **Context is King**: Always understand the existing codebase before making changes
- **Consistency Over Innovation**: Follow established patterns rather than creating new ones
- **Progressive Enhancement**: Build incrementally from solid foundations
- **Quality Gates**: Every generated component should pass accessibility and performance checks
- **Documentation**: Code should be self-documenting, but complex decisions need explanation

### Principle-Driven Development Workflow

1. **Analyze** - Read existing code to understand patterns and conventions
2. **Plan** - Apply design principles to guide implementation decisions  
3. **Generate** - Write code that follows established patterns and best practices
4. **Validate** - Check against quality gates and review checklists
5. **Integrate** - Ensure seamless integration with existing codebase
6. **Document** - Record design decisions and rationale for future reference

### Quick Reference for AI Agents

When generating code, ask:
- Does this follow existing patterns in the codebase?
- Is this accessible by default?
- Will this work across all device sizes?
- Does this handle loading and error states?
- Is this component reusable and composable?
- Would another developer understand this code?

Remember: **Good design principles make AI agents better code partners**.
