# claude-product-flow

Claude Code skills for product development teams. Shared across the team — new skills pushed here are available to everyone after a `git pull`.

## Install

```bash
npm install -g github:aktiv-yash-aghera/claude-product-flow
claude-product-flow setup
```

Restart Claude Code. Commands are now available.

## Update

```bash
npm install -g github:aktiv-yash-aghera/claude-product-flow
claude-product-flow setup
```

## Commands

| Command | Description |
|---|---|
| `/start` | Load module context before starting work |
| `/commit` | Generate a structured commit message from current changes |
| `/research` | Explore and validate product feature ideas with live web search |
| `/flow` | Map a decided feature into the product flow functionally |
| `/sync` | Sync a feature from one product version to another |
| `/doc` | Update the module context file after development is completed |

## How It Works

Skills are markdown files in `commands/`. Install symlinks them into `~/.claude/commands/` so Claude Code picks them up. Since they are symlinked, a `git pull` is all that's needed to update.

## Adding a New Skill

1. Create `commands/<skill-name>.md`
2. Write the instructions for Claude
3. Push to GitHub
4. Team runs `git pull` to get it
