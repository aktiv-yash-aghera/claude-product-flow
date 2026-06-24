Load the module context before starting any work. Supports both single-file context and feature-level folder structure.

## Steps

1. First ask the user for the development directory:
   ```
   What is the development directory?
   (Press Enter to use current directory: <current working directory>)
   ```
   If the user presses Enter or provides no input, use the current working directory.

2. Detect the context structure in that directory:

   **New structure** — look for `_overview.md`. If found, this module uses feature-level folders (`/scaffold` was run).
   **Old structure** — look for a `.md` file matching the module name (e.g. `ak_odoo_cpq_custom.md`). Ignore `README.md`, `CHANGELOG.md`.

3. Always confirm with the user — never silently load a file:
   ```
   Found: `<filename>`
   Is this the right context file?
   1. Yes
   2. No
   3. Don't have a context file
   ```

4. Based on the response:

   **New structure (found `_overview.md`):**
   - Read `_overview.md` fully. Summarize module purpose and feature areas in 3–5 bullet points.
   - Then ask:
     ```
     Load a specific feature context as well?
     1. Yes — which feature?
     2. No — overview is enough
     ```
   - If Yes: find and read `<area>/<feature>/context.md` for the named feature. Summarize it in 2–3 bullet points.

   **Old structure (single `.md` file):**
   - Read the file fully. Summarize the module's purpose, key models, and any important rules or constraints in 3–5 bullet points.

   **No:** Ask: "Please provide the correct file path." Then read that file and summarize as above.

   **Don't have one:** Acknowledge and continue without context. Suggest running `/scaffold` to set up the structure.

5. After loading the primary context, ask:
   ```
   Is there a reference or dependency module I should also be aware of?
   1. Yes
   2. No
   ```
   - **1. Yes** — Ask for the reference module directory. Detect its structure the same way (new: load `_overview.md` + `interface.md` if exists; old: load single `.md`). Mark it as **read-only reference**. Summarize in 2–3 bullet points. Then ask again — keep looping until the user says No.
   - **2. No** — Proceed directly.

## Notes

- If multiple `.md` files are found in the directory, list all of them and let the user pick.
- Keep summaries concise — this is orientation, not documentation.
- The reference module is read-only — make this clear so no edits are made there.
- After loading all context, confirm you are ready: "Context loaded. What are we working on?"
