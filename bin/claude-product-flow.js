#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const os = require('os');

const command = process.argv[2];

if (command === 'setup') {
  const commandsSource = path.join(__dirname, '..', 'commands');
  const commandsDest = path.join(os.homedir(), '.claude', 'commands');

  if (!fs.existsSync(commandsDest)) {
    fs.mkdirSync(commandsDest, { recursive: true });
  }

  const files = fs.readdirSync(commandsSource).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const src = path.join(commandsSource, file);
    const dest = path.join(commandsDest, file);
    if (fs.existsSync(dest)) fs.unlinkSync(dest);
    fs.symlinkSync(src, dest);
    console.log(`Installed: /${file.replace('.md', '')}`);
  }

  console.log('\nDone. Restart Claude Code to activate the commands.');
} else {
  console.log('Usage: claude-product-flow setup');
}
