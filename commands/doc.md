Update the module context file after development is completed. The context file describes the current state of the module — no version history, no changelogs, no "previously X now Y". Just what it is right now.

## Steps

1. Ask for the development directory:
   ```
   Development directory? (Press Enter for current: <cwd>)
   ```

2. Find the context `.md` file and confirm:
   ```
   Found: `<filename>` — is this the context file to update?
   1. Yes
   2. No (provide path)
   3. Don't have one (create new)
   ```

3. Read `git diff HEAD` to understand what changed in this development cycle.

4. Read the current context file fully.

5. Identify which sections of the context file are affected by the changes:
   - New model or field added → update or add that model section
   - Existing behavior changed → update the relevant description to reflect current behavior
   - New UI component, menu, route, or flow added → update the relevant section
   - Something removed → remove it from the context file

6. Update only the affected sections — do not rewrite unaffected parts.

7. Present the proposed changes to the user before writing:
   ```
   I'll update the following sections:
   - <section name>: <what changes>
   - <section name>: <what changes>
   Proceed?
   1. Yes
   2. No (adjust)
   ```

8. On confirmation, write the updated context file.

## Writing Rules

- **Current state only** — describe what the module is now. Never write "previously" or "changed from" or "fixed".
- **Functional + technical** — describe what it does and how at a high level. No line-by-line code detail.
- **Same style as existing file** — match the tone, structure, and depth of what is already written. Do not add new sections unless the change genuinely requires one.
- **No changelog, no version notes, no issue references** — the file is a reference, not a history.
- **Concise** — one paragraph or a short field list per model/component. If a section is already accurate, leave it untouched.
