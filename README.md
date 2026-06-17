# claude-product-flow

Claude Code skills for product development teams. Shared across the team — new skills pushed here are available to everyone after a `git pull`.

## Install

```bash
git clone https://github.com/aktiv-yash-aghera/claude-product-flow ~/.claude/claude-product-flow
cd ~/.claude/claude-product-flow && ./install.sh
```

Restart Claude Code. Commands are now available.

## Update

```bash
cd ~/.claude/claude-product-flow && git pull
```

No reinstall needed — commands update automatically on next Claude Code restart.

## Commands

| Command | Description |
|---|---|
| `/start` | Load module context before starting work |
| `/commit` | Generate a structured commit message from current changes |

## How It Works

Skills are markdown files in `commands/`. Install symlinks them into `~/.claude/commands/` so Claude Code picks them up. Since they are symlinked, a `git pull` is all that's needed to update.

## Adding a New Skill

1. Create `commands/<skill-name>.md`
2. Write the instructions for Claude
3. Push to GitHub
4. Team runs `git pull` to get it
