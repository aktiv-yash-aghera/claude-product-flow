Load the module context before starting any work.

## Steps

1. First ask the user for the development directory:
   ```
   What is the development directory?
   (Press Enter to use current directory: <current working directory>)
   ```
   If the user presses Enter or provides no input, use the current working directory.

2. Search that directory for a context file. Check in this order:
   - `_overview.md` — new folder structure
   - Any `.md` file matching the module name (e.g. `ak_odoo_cpq_custom.md`) — old structure
   - Ignore `README.md`, `CHANGELOG.md`

3. Always confirm with the user — never silently load a file:
   ```
   Found: `<filename>`
   Is this the right context file?
   1. Yes
   2. No
   3. Don't have a context file
   ```

4. Based on the response:
   - **1. Yes** — Read the file fully. Summarize the module's purpose, key models, and any important rules or constraints in 3–5 bullet points.
   - **2. No** — Ask: "Please provide the correct file path." Then read that file and summarize as above.
   - **3. Don't have a context file** — Acknowledge and continue without context. Suggest running `/scaffold` to set up the structure.

5. After loading the primary context, ask:
   ```
   Is there a reference or dependency module I should also be aware of?
   1. Yes
   2. No
   ```
   - **1. Yes** — Ask: "What is the reference module directory?" Then search for its context file the same way as steps 2–3. Read it and note it as **read-only reference** — development only happens in the primary module. Summarize in 2–3 bullet points. Then ask again — keep looping until the user says No.
   - **2. No** — Proceed directly.

## Notes

- If multiple `.md` files are found, list all and let the user pick.
- Keep summaries concise — this is orientation, not documentation.
- The reference module is read-only — make this clear so no edits are made there.
- After loading all context, confirm you are ready: "Context loaded. What are we working on?"
