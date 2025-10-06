#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get target directory from command line or use current directory
const targetDir = process.argv[2] || process.cwd();
const templateDir = path.join(__dirname, 'template');

// Function to copy directory recursively
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    // Create directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    // Copy all files/folders in directory
    fs.readdirSync(src).forEach(childItem => {
      copyRecursive(
        path.join(src, childItem),
        path.join(dest, childItem)
      );
    });
  } else {
    // Copy file
    fs.copyFileSync(src, dest);
  }
}

// Main execution
try {
  console.log('🚀 Initializing CLARC Research Template...\n');

  // Check if target directory is empty
  if (fs.existsSync(targetDir)) {
    const files = fs.readdirSync(targetDir);
    if (files.length > 0 && targetDir === process.cwd()) {
      console.log('⚠️  Warning: Current directory is not empty.');
      console.log('   Files will be added to the current directory.\n');
    }
  }

  // Copy template files
  copyRecursive(templateDir, targetDir);

  console.log('✅ CLARC template initialized successfully!\n');
  console.log('📁 Structure created:');
  console.log('   ├── INDEX.md              (Start here for navigation)');
  console.log('   ├── CLAUDE.md             (Project context)');
  console.log('   ├── .claude/');
  console.log('   │   ├── commands/         (5 slash commands)');
  console.log('   │   └── agents/           (3 specialized agents)');
  console.log('   ├── research/             (Your research topics)');
  console.log('   ├── todo/                 (Task management)');
  console.log('   ├── directions/           (Goals & methodology)');
  console.log('   └── .gitignore\n');

  console.log('🎯 Next steps:');
  console.log('   1. Open INDEX.md to see the navigation hub');
  console.log('   2. Set your research goals in directions/goals.md');
  console.log('   3. Configure citation style in directions/methodology.md');
  console.log('   4. Start researching: use /add-finding command\n');

  console.log('📚 Available commands (type / in Claude Code):');
  console.log('   /add-finding       Document new research finding');
  console.log('   /refresh-index     Update INDEX.md');
  console.log('   /cross-reference   Link related topics');
  console.log('   /synthesize        Generate summary report');
  console.log('   /export-report     Create formatted research report\n');

  console.log('Happy researching! 🔬\n');

} catch (error) {
  console.error('❌ Error initializing template:', error.message);
  process.exit(1);
}
