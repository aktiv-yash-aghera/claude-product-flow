# claude-product-flow

Claude Code skills for Aktiv Software product development. Shared across the team — new skills added here are available to everyone after a `git pull`.

## Install

```bash
npm install -g claude-product-flow
claude-product-flow setup
```

Restart Claude Code. Commands are now available.

## Update

```bash
npm update -g claude-product-flow
claude-product-flow setup
```

## Commands

| Command | Description |
|---|---|
| `/start` | Load module context before starting work |
| `/commit` | Generate a structured commit message from current changes |

## How It Works

Skills are markdown files in `commands/`. Install symlinks them into `~/.claude/commands/` so Claude Code picks them up. Since they are symlinked, a `git pull` updates them without reinstalling.

## Adding a New Skill

1. Create `commands/<skill-name>.md`
2. Write the instructions (what Claude should do when the command is invoked)
3. Push to GitHub
4. Team runs `git pull` to get it
