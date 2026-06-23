Single entry point for any development task. Accepts any input — detailed or thin — and ensures all required information is captured before work begins. Reduces back-and-forth by asking only what is missing, in one shot.

## Steps

1. Receive the user's input — feature idea, bug description, change request, anything.

2. Identify the task type:
   - **Feature** — adding or changing functionality
   - **Bug** — something broken or behaving incorrectly
   - **Research** — exploring options before deciding
   - **Sync** — moving a feature between versions

3. Check for critical gaps based on task type:

   **Feature gaps to check:**
   - What triggers it? (user action, condition, automatic?)
   - What is the expected behavior / outcome?
   - Any edge cases or optional flows mentioned?

   **Bug gaps to check:**
   - What was expected to happen?
   - What is actually happening?
   - Where in the flow does it break? (screen, action, condition)

   **Research gaps to check:**
   - What decision will this research inform?
   - Any constraints (technical, product, time)?

   **Sync gaps to check:**
   - Which feature exactly?
   - Source version and target version?

4. If critical information is missing — ask only the missing pieces, maximum 3 questions, in one message, one line each. Do not ask for things already in the context file or reasonably inferable.

5. If nothing is missing — proceed directly without asking anything.

6. Once input is complete, execute based on task type:
   - **Feature** → map functional flow first (what user sees and does), then implement
   - **Bug** → diagnose root cause, propose fix with explanation
   - **Research** → search live, never answer from training data, present findings
   - **Sync** → read source version behavior, map to target version, implement

## Rules

- Never assume a gap and proceed silently — ask if something critical is missing
- Never ask more than 3 questions at once — prioritize the most critical gaps
- Never ask for what is already in the loaded context file
- If the user gave enough detail, skip questions entirely and go straight to work
- Keep questions short — one line each, no explanation needed
- The goal is faster execution, not interrogation
