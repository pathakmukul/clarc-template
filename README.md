# CLARC Template

**C**laude **L**arge **A**nalysis **R**esearch **C**ompanion - A structured research knowledge base template for Claude Code.

## What is CLARC?

A lean, intelligent research organization system that:
- ✅ **Organizes research by topic** with findings, sources, and notes
- ✅ **Single navigation hub** (INDEX.md) for all research content
- ✅ **Smart agents** that auto-maintain indexes and citations
- ✅ **Slash commands** for documenting, cross-referencing, and synthesizing
- ✅ **Zero bloat** - only research content, no system clutter

## Installation

```bash
npm install -g clarc-template
```

## Usage

Initialize in a new directory:

```bash
mkdir my-research
cd my-research
clarc-init
```

Or in the current directory:

```bash
clarc-init .
```

## Structure Created

```
your-project/
├── INDEX.md              # Start here - navigation hub
├── CLAUDE.md             # Project context & system info
├── .claude/
│   ├── commands/         # 5 slash commands
│   └── agents/           # 3 specialized agents
├── research/             # Your research topics go here
├── todo/                 # Task management
├── directions/           # Goals & methodology
└── .gitignore
```

## Quick Start

1. **Open INDEX.md** - Your navigation command center
2. **Set research goals** in `directions/goals.md`
3. **Configure citation style** in `directions/methodology.md`
4. **Start researching** - Use `/add-finding` in Claude Code

## Available Commands

Type `/` in Claude Code to see all commands:

- `/add-finding` - Document new research finding
- `/refresh-index` - Update INDEX.md
- `/cross-reference` - Link related topics
- `/synthesize` - Generate summary report
- `/export-report` - Create formatted research report

## Available Agents

These activate automatically when needed:

- **research-analyzer** - Evaluates source quality, identifies gaps
- **citation-manager** - Handles references and bibliography
- **memory-updater** - Maintains INDEX.md

## Key Features

### Clean Separation of Concerns

- **INDEX.md** = Research filesystem only (topics, tasks, cross-refs)
- **CLAUDE.md** = System info (commands, agents, rules)
- **No redundancy** = Everything has one clear place

### Research Standards Built-in

- Confidence levels (High/Medium/Low)
- Source credibility hierarchy
- Citation style configuration (APA/Chicago/MLA)
- Cross-referencing between topics

### Intelligent Maintenance

- Agents auto-update INDEX.md as you research
- Commands ensure consistent formatting
- No manual index management needed

## Philosophy

1. **INDEX.md first** - Always check navigation before searching
2. **Document everything** - Every finding, source, insight recorded
3. **Cross-reference** - Link related topics for holistic understanding
4. **Iterative refinement** - Research builds progressively

## Requirements

- Node.js >= 14.0.0
- Claude Code (for slash commands and agents)

## License

MIT

## Contributing

Issues and PRs welcome at https://github.com/pathakmukul/clarc-template

## Credits

Created to solve the research organization problem with Claude Code. Inspired by the need for a lean, intelligent research companion that stays out of your way.
