Load the module context file for the current working directory before starting any work.

## Steps

1. Search the current directory and its immediate parent for `.md` files that match the module name (e.g. `ak_odoo_cpq_custom.md`, `ak_odoo_cpq_step_config_18.md`). Ignore generic files like `README.md`, `CHANGELOG.md`.

2. Always present what you found and ask the user to confirm — never silently load a file:

   ```
   Found: `<filename>`
   Is this the right context file?
   1. Yes
   2. No
   3. Don't have a context file
   ```

3. Based on the response:
   - **1. Yes** — Read the file fully. Summarize the module's purpose, key models, and any important rules or constraints in 3–5 bullet points so both you and the developer are oriented.
   - **2. No** — Ask: "Please provide the correct file path." Then read that file and summarize as above.
   - **3. Don't have a context file** — Acknowledge and continue without context. Suggest the developer creates one once familiar with the module.

## Notes

- If multiple `.md` files are found, list all of them and let the user pick.
- Keep the summary concise — this is orientation, not documentation.
- After loading context, confirm you are ready: "Context loaded. What are we working on?"
