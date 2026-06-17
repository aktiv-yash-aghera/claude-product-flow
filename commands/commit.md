Generate a structured commit message based on the current git changes.

## Steps

1. Run `git diff HEAD` to understand what changed. Also check `git diff --cached` for staged changes.

2. Identify which modules were affected (look for `__manifest__.py` files in changed paths).

3. Read `__manifest__.py` from each affected module to get the exact `version` value. Never guess or bump versions.

4. Determine the change type based on the diff and suggest it to the user:
   - `[IMP]` — improvement to existing functionality
   - `[FIX]` — bug fix
   - `[ADD]` — new feature
   - `[HOTFIX]` — urgent production fix
   - `[REL]` — release
   
   Ask: "Change type: `[IMP]` — correct? (or specify: IMP / FIX / ADD / HOTFIX / REL)"

5. Ask: "Task ID? (Enter to skip)"

6. Ask: "Task name? (Enter to skip)"

7. Generate the commit message and present it for review.

## Commit Message Format

**With task:**
```
[TYPE] #<task_id> | module[version], module[version]: <Short description>

- <Functional bullet point>
- <Functional bullet point>

Task #<task_id>, <Task Name>
```

**Without task:**
```
[TYPE] module[version], module[version]: <Short description>

- <Functional bullet point>
- <Functional bullet point>
```

## Rules

- **Functional language only** — describe what users or the system can now do, not what code changed.
  - Good: "Components marked as optional can now be driven by compatibility rules"
  - Bad: "Added `is_optional` boolean field to `cpq.component.configuration`"
- Subject line should be concise but descriptive. It can wrap to a second line if needed.
- Bullet points explain behavior changes, not implementation details.
- Module versions come strictly from `__manifest__.py` — never modify them.
- Omit the `Task #` footer line entirely if no task ID is provided.
- If multiple modules are affected, list all with their versions separated by `, `.
