Update the module context after development is completed. Supports both single-file context and feature-level folder structure. Current state only — no changelogs, no history.

## Steps

1. Ask for the development directory:
   ```
   Development directory? (Press Enter for current: <cwd>)
   ```

2. Detect the context structure:

   **New structure** — check for `_overview.md` in the directory.
   **Old structure** — look for a `.md` file matching the module name. Ignore `README.md`, `CHANGELOG.md`.

3. Run `git diff HEAD` to understand what changed in this development cycle.

4. **New structure path:**

   a. Identify which feature areas the changes touch (based on git diff — which files changed and in which functional area).

   b. Map changed files to their feature folders:
      - Changed a method in hide rule logic → `rules/hide/context.md`
      - Changed configurator component → `configurator/<feature>/context.md`
      - New feature with no existing folder → note it, ask user if `/scaffold` should be run for it first

   c. For each affected feature file, confirm before updating:
      ```
      Changes affect these feature files:
      - rules/hide/context.md
      - configurator/product_visibility/context.md

      Update these? 
      1. Yes
      2. Adjust list
      ```

   d. Read each affected `context.md` and update only the relevant sections. Apply writing rules below.

   e. If `_overview.md` needs updating (new feature area added, module purpose changed) — update it as well. Do not update it for routine feature changes.

5. **Old structure path:**

   a. Confirm the context file:
      ```
      Found: `<filename>` — is this the context file to update?
      1. Yes
      2. No (provide path)
      3. Don't have one (create new)
      ```

   b. Read the current context file fully.

   c. Identify which sections are affected by the changes and update only those.

   d. Present proposed changes before writing:
      ```
      I'll update the following sections:
      - <section>: <what changes>
      Proceed?
      1. Yes
      2. No (adjust)
      ```

   e. On confirmation, write the updated file.

## Writing Rules

- **Current state only** — describe what the module is now. Never write "previously" or "changed from" or "fixed".
- **Functional + technical** — what it does and how at a high level. No line-by-line code detail.
- **Same style as existing file** — match tone, structure, depth. Do not add new sections unless the change genuinely requires one.
- **No changelog, no version notes, no issue references.**
- **Concise** — one paragraph or short field list per section. If already accurate, leave untouched.
- **Feature files only** — update the specific feature's `context.md`, not all files in the module.
