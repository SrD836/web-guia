// assets/data.en.js
// English translation of assets/data.js
// Translated natural prose: formal, technical accuracy, no literal word-for-word rendering
// Structure unchanged: only text values translated (name, url, stars, category keys preserved)

window.GUIA_DATA_EN = {
  cli: [
    {
      name: "Hermes Agent",
      desc: "A CLI agent from Nous Research featuring persistent memory across sessions, automatic skill creation, and support for 300+ language models.",
      url: "https://github.com/NousResearch/hermes-agent",
      stars: 176000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "OpenCode",
      desc: "Native terminal agent written in Go with support for 75+ AI providers, LSP integration, and privacy-first architecture.",
      url: "https://github.com/opencode-ai/opencode",
      stars: 168000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "Claude Code",
      desc: "Anthropic's terminal agent that edits code, performs refactoring, and manages Git workflows with full repository awareness.",
      url: "https://github.com/anthropics/claude-code",
      stars: 129000,
      badge: "Popular",
      category: "closed"
    },
    {
      name: "Gemini CLI",
      desc: "Google's official terminal agent powered by Gemini, supporting repository work and research tasks. Licensed under Apache-2.0.",
      url: "https://github.com/google-gemini/gemini-cli",
      stars: 105000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "Codex CLI",
      desc: "OpenAI's local coding agent featuring an interactive TUI for reading, editing, and executing code directly from the terminal. Apache-2.0 license.",
      url: "https://github.com/openai/codex",
      stars: 87600,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "OpenHands",
      desc: "An open-source agentic development environment—formerly OpenDevin—with both CLI and web interfaces for autonomous programming tasks.",
      url: "https://github.com/All-Hands-AI/OpenHands",
      stars: 75600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Open Interpreter",
      desc: "A terminal tool that executes code and actions on the local machine conversationally, functioning as a general-purpose agent.",
      url: "https://github.com/OpenInterpreter/open-interpreter",
      stars: 63800,
      badge: null,
      category: "open-source"
    },
    {
      name: "Cline",
      desc: "A model-agnostic autonomous agent for planning, file editing, command execution, and browser control directly from the terminal.",
      url: "https://github.com/cline/cline",
      stars: 62600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Warp",
      desc: "A modern terminal with an integrated AI agent that understands tasks, executes commands, and edits files in multi-step workflows.",
      url: "https://github.com/warpdotdev/Warp",
      stars: 60800,
      badge: null,
      category: "closed"
    },
    {
      name: "Goose",
      desc: "A locally-run extensible agent from Block that executes, edits, and tests code on-device with MCP integration and plugin support.",
      url: "https://github.com/block/goose",
      stars: 46200,
      badge: null,
      category: "open-source"
    },
    {
      name: "Aider",
      desc: "A pair-programming agent that edits files through patches, with robust multi-file workflows and native Git integration.",
      url: "https://github.com/Aider-AI/aider",
      stars: 45600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Crush",
      desc: "An elegant agentic TUI by Charmbracelet written in Go, compatible with multiple AI providers and LSP integration for the terminal.",
      url: "https://github.com/charmbracelet/crush",
      stars: 24900,
      badge: null,
      category: "open-source"
    },
    {
      name: "SWE-agent",
      desc: "A specialized agent for resolving repository issues and pull-request tasks; widely adopted in software engineering benchmarks.",
      url: "https://github.com/SWE-agent/SWE-agent",
      stars: 19400,
      badge: null,
      category: "open-source"
    },
    {
      name: "Plandex",
      desc: "A CLI agent that plans before acting, building features across multiple files with structured steps and up to 2M tokens of context.",
      url: "https://github.com/plandex-ai/plandex",
      stars: 15400,
      badge: null,
      category: "open-source"
    },
    {
      name: "GitHub Copilot CLI",
      desc: "GitHub's official agentic CLI for managing repositories, pull requests, and issues, with support for headless automation.",
      url: "https://github.com/github/copilot-cli",
      stars: 10700,
      badge: null,
      category: "closed"
    },
    {
      name: "gptme",
      desc: "An AI terminal agent with support for persistent agents; executes code, edits files, and navigates the web with Git-backed memory.",
      url: "https://github.com/gptme/gptme",
      stars: 4300,
      badge: null,
      category: "open-source"
    }
  ],
  orquestadores: [
    {
      name: "vibe-kanban",
      desc: "A visual Kanban board for managing and monitoring multiple AI coding agents simultaneously.",
      url: "https://github.com/BloopAI/vibe-kanban",
      stars: 26700,
      badge: "Popular",
      category: "runners-paralelos"
    },
    {
      name: "cmux",
      desc: "An open-source platform for running multiple coding agents in parallel directly from the command line.",
      url: "https://github.com/craigsc/cmux",
      stars: 20600,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "claude-squad",
      desc: "A tmux-based manager for running and supervising multiple Claude Code sessions in parallel, each with its own context.",
      url: "https://github.com/smtg-ai/claude-squad",
      stars: 7700,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "crystal",
      desc: "A desktop application for running multiple Codex and Claude Code sessions in parallel within independent Git worktrees.",
      url: "https://github.com/stravu/crystal",
      stars: 3100,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "amux",
      desc: "A terminal user interface for launching and coordinating multiple coding agents in parallel effortlessly.",
      url: "https://github.com/mixpeek/amux",
      stars: 118,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "claude-flow",
      desc: "A framework for deploying swarms of multiple coordinated agents with autonomous workflows and distributed execution.",
      url: "https://github.com/ruvnet/claude-flow",
      stars: 57100,
      badge: "Popular",
      category: "swarms"
    },
    {
      name: "gastown",
      desc: "A multi-agent orchestration system with persistent work tracking and coordination across parallel sessions.",
      url: "https://github.com/steveyegge/gastown",
      stars: 15700,
      badge: null,
      category: "swarms"
    },
    {
      name: "AgentsMesh",
      desc: "A distributed platform with remote workstations for AI agents, channel-based coordination, and integrated Kanban dashboard.",
      url: "https://github.com/AgentsMesh/AgentsMesh",
      stars: 2200,
      badge: null,
      category: "swarms"
    },
    {
      name: "kodo",
      desc: "An autonomous multi-agent orchestrator that directs Claude Code, Codex, and Gemini CLI through work cycles with independent verification.",
      url: "https://github.com/ikamensh/kodo",
      stars: 106,
      badge: null,
      category: "swarms"
    },
    {
      name: "ralph-orchestrator",
      desc: "A role-based orchestration system that keeps agents looping until assigned tasks are completed autonomously.",
      url: "https://github.com/mikeyobrien/ralph-orchestrator",
      stars: 2900,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "ralph-tui",
      desc: "A TUI for directing AI agents through task lists with autonomous execution and no manual intervention required.",
      url: "https://github.com/syntax-syndicate/ralph-ai-tui",
      stars: 2300,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "wreckit",
      desc: "Applies the Ralph Wiggum Loop autonomous pattern over the project roadmap for continuous, uninterrupted execution.",
      url: "https://github.com/mikehostetler/wreckit",
      stars: 128,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "LettaBot",
      desc: "A personal AI assistant from Letta with persistent, unified memory across Telegram, Slack, Discord, WhatsApp, and Signal.",
      url: "https://github.com/letta-ai/lettabot",
      stars: 327,
      badge: null,
      category: "asistentes"
    },
    {
      name: "rowboat",
      desc: "An open-source AI work companion with persistent memory for providing continuous assistance across development projects.",
      url: "https://github.com/rowboatlabs/rowboat",
      stars: 0,
      badge: null,
      category: "asistentes"
    }
  ]
};

window.GUIA_LABELS = {
  "open-source": "Open source",
  "closed": "Closed / commercial",
  "openclaw-eco": "OpenClaw ecosystem",
  "runners-paralelos": "Parallel runners",
  "swarms": "Swarms",
  "loops-autonomos": "Autonomous loops",
  "asistentes": "Assistants"
};
