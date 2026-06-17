#!/bin/bash
set -e

COMMANDS_DIR="$HOME/.claude/commands"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mkdir -p "$COMMANDS_DIR"

for file in "$SCRIPT_DIR/commands/"*.md; do
    filename=$(basename "$file")
    ln -sf "$file" "$COMMANDS_DIR/$filename"
    echo "Installed: /$filename"
done

echo ""
echo "Done. Restart Claude Code to activate the commands."
