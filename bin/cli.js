#!/usr/bin/env node
const { spawn } = require('child_process');
const { existsSync } = require('fs');

const [, , cmd, ...rest] = process.argv;
const hasPnpm = existsSync('pnpm-lock.yaml');
const pkgManager = hasPnpm ? 'pnpm' : 'npm';

function run(args) {
  const child = spawn(pkgManager, args, { stdio: 'inherit', shell: true });
  child.on('exit', (code) => process.exit(code));
}

if (!cmd || cmd === 'help' || cmd === '-h' || cmd === '--help') {
  console.log('thestudioh CLI\n\nUsage: thestudioh <command> [args]\n\nCommands:\n  dev       Run development server (vite)\n  build     Build for production\n  help      Show this message');
  process.exit(0);
}

if (cmd === 'dev') {
  if (pkgManager === 'pnpm') run(['dev']);
  else run(['run', 'dev']);
} else if (cmd === 'build') {
  if (pkgManager === 'pnpm') run(['build']);
  else run(['run', 'build']);
} else {
  // forward unknown commands to npm scripts if present
  if (pkgManager === 'pnpm') run(['run', cmd, ...rest]);
  else run(['run', cmd, ...rest]);
}
