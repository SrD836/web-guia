// assets/data-v3-research.en.js
// English translation of assets/data-v3-research.js
// Translated natural English prose: technical accuracy, professional, no literal word-for-word rendering
// Structure unchanged: only text values translated (names preserved exactly as in ES version)

window.GUIA_V3_EN = {

  cli: [
    {
      name: "Hermes Agent",
      long_desc: "An open-source CLI agent from Nous Research featuring persistent memory between sessions and automatic skill creation. Compatible with 300+ language models through multiple providers, it can self-expand with new capabilities as it works. Runs both from the command line and integrated with messaging platforms (Telegram, Discord, Slack, WhatsApp). Ideal for anyone wanting an adaptable agent without fixed subscription costs.",
      pros: [
        "Persistent memory that grows and learns across sessions",
        "Support for 300+ models and AI providers",
        "Free and open source under MIT license",
        "Runs locally with Ollama at zero API cost"
      ],
      contras: [
        "Requires configuring external API keys for cloud models",
        "Documentation still limited for inexperienced users"
      ],
      como_empezar: "Clone the repository with `git clone https://github.com/NousResearch/hermes-agent`, install dependencies with `pip install -e .`, and copy `.env.example` to `.env` to add your API key.",
      casos_uso: [
        "Automate repetitive coding tasks with project memory",
        "Create a personal assistant that remembers previous conversations",
        "Experiment with free local models via Ollama",
        "Integrate an agent into Telegram or Discord for daily use"
      ],
      precio: "Free (MIT open source); typical API costs: $15–80/month depending on chosen provider",
      lenguaje: "Python · MIT"
    },
    {
      name: "OpenCode",
      long_desc: "A native terminal coding agent written in Go supporting 75+ AI providers and reaching 143,000+ stars on GitHub in under a year. Offers a complete TUI with LSP integration, two agent modes—Build for implementation and Plan for read-only planning—and total privacy by running locally. The most popular open-source alternative for those avoiding vendor lock-in.",
      pros: [
        "Supports 75+ AI providers with no vendor dependency",
        "Modern TUI with LSP for precise code context",
        "Free with local models via Ollama: zero cost",
        "MIT open source with very active community"
      ],
      contras: [
        "Initial provider configuration can be complex",
        "Result quality depends on the chosen model"
      ],
      como_empezar: "Install with `npm install -g opencode-ai` and run `opencode` in your project folder. The setup wizard launches on first run.",
      casos_uso: [
        "Refactor code with your preferred AI provider",
        "Explore and understand unfamiliar codebases",
        "Code with zero cost using local models",
        "Compare responses from different models on the same task"
      ],
      precio: "Free (MIT); OpenCode Go from $5 first month, then $10/month for optimized models",
      lenguaje: "Go · MIT"
    },
    {
      name: "Claude Code",
      long_desc: "Anthropic's official terminal agent, directly integrated into Claude plans and available via the API. Edits code, performs complete refactoring, and manages Git workflows with deep repository awareness. The benchmark against which other CLI agents are measured, with the most mature ecosystem of third-party skills and agents. Included in Claude Pro ($20/month) and Max ($100–200/month) plans.",
      pros: [
        "Deep repository understanding and code context awareness",
        "Native Git integration and workflow management",
        "Mature ecosystem with thousands of available skills and agents",
        "Superior reasoning quality with Opus and Sonnet models"
      ],
      contras: [
        "Requires paid subscription for intensive use",
        "Complete provider dependency on Anthropic"
      ],
      como_empezar: "Install with `npm install -g @anthropic-ai/claude-code` and run `claude` inside your project folder. Requires an active Claude account.",
      casos_uso: [
        "Implement complete end-to-end features",
        "Review and improve production code with full repository context",
        "Manage pull requests and Git workflows",
        "Orchestrate teams of specialized agents"
      ],
      precio: "Free (limited use); Pro $20/month; Max from $100/month; Team from $25/seat/month",
      lenguaje: "TypeScript · Proprietary"
    },
    {
      name: "Gemini CLI",
      long_desc: "Google's official terminal agent, released in June 2025 under Apache 2.0 license, reaching 100,000+ GitHub stars in record time thanks to its generous free tier. Works with repositories, web search, and code execution powered by Google's Gemini models. Offers 1,000 free requests per day with a personal Google account. Starting June 18, 2026, Google is migrating tools toward the unified Antigravity CLI platform.",
      pros: [
        "Free tier of 1,000 requests/day with Google account",
        "Open source under Apache 2.0 with very active community",
        "Backed by Google with the most powerful Gemini models",
        "Community contributed 6,000+ pull requests in the first year"
      ],
      contras: [
        "Google migrating toward Antigravity CLI starting June 2026",
        "Rate limit on free tier (60 requests/minute)"
      ],
      como_empezar: "Install with `npm install -g @google/gemini-cli` and authenticate with `gemini auth login` using your Google account to access the free tier.",
      casos_uso: [
        "Analyze and refactor projects at zero cost with free tier",
        "Research documentation and web pages from the terminal",
        "Experiment with powerful Gemini models without API costs",
        "Contribute to open-source projects with AI assistance"
      ],
      precio: "Free (1,000 requests/day with personal Google account)",
      lenguaje: "TypeScript · Apache-2.0"
    },
    {
      name: "Codex CLI",
      long_desc: "OpenAI's local coding agent written in Rust for maximum speed, with 88,600+ GitHub stars. Offers an interactive TUI for reading, editing, and executing code from the terminal with three approval modes: suggestion, automatic, and full. Integrates with OpenAI's ecosystem and works with a ChatGPT Plus subscription or pay-as-you-go OpenAI API credits.",
      pros: [
        "Written in Rust: extremely fast and efficient",
        "Three approval modes to control autonomy level",
        "Open source under Apache 2.0",
        "Native integration with all OpenAI ecosystem models"
      ],
      contras: [
        "Requires ChatGPT Plus subscription ($20/month) or API credits",
        "More oriented toward OpenAI models than multiple providers"
      ],
      como_empezar: "Install with `npm install -g @openai/codex` and configure your key with `export OPENAI_API_KEY=sk-...`, or log in with `codex login` if you have ChatGPT Plus.",
      casos_uso: [
        "Generate and edit code with OpenAI's GPT models",
        "Automate development tasks with configurable approval level",
        "Explore repositories with deep context understanding",
        "Integrate with OpenAI's tool ecosystem"
      ],
      precio: "Open source (Apache 2.0); requires ChatGPT Plus ($20/month) or OpenAI API pay-as-you-go",
      lenguaje: "Rust · Apache-2.0"
    },
    {
      name: "OpenHands",
      long_desc: "An open-source agentic development platform under MIT license with 75,600+ GitHub stars. Enables agents to perform complete engineering tasks: editing code, executing terminal commands, navigating the web, and managing Git autonomously. Offers both CLI and web interfaces for local or cloud use, with $50 in free credits for new users on the cloud version.",
      pros: [
        "Complete platform with both CLI and web interfaces",
        "MIT open source and self-hostable with Docker",
        "$50 in free cloud credits for new users",
        "Capable of web navigation, command execution, and Git management"
      ],
      contras: [
        "Local setup requires Docker",
        "Cloud service has pay-as-you-go costs after free credits are exhausted"
      ],
      como_empezar: "Quickest way is to create an account at openhands.dev (cloud with $50 free). For local: `pip install openhands-ai` or with Docker: `docker run --rm -it openhands/openhands:latest`.",
      casos_uso: [
        "Resolve GitHub issues completely autonomously",
        "Automate complete software engineering workflows",
        "Test the agent in the cloud with initial free credits",
        "Self-host an agentic platform on your own server"
      ],
      precio: "Free (MIT open source, self-hosted); cloud with $50 in initial free credits",
      lenguaje: "Python · MIT"
    },
    {
      name: "Open Interpreter",
      long_desc: "A natural-language interface to the computer that executes Python, Bash, and JavaScript code directly on the local machine conversationally. With 60,000+ GitHub stars since its 2023 launch, it's one of the most popular AI agent projects. Released a desktop app in 2025 for easier access by non-technical users. Free plan uses your own API keys; Pro plan ($20/month) adds hosted models.",
      pros: [
        "Executes real code on the local machine conversationally",
        "Very intuitive natural-language interface for beginners",
        "Desktop app available since 2025",
        "Compatible with free local models"
      ],
      contras: [
        "AGPL-3.0 license may limit certain commercial uses",
        "Running code unsupervised on production systems is risky"
      ],
      como_empezar: "Install with `pip install open-interpreter` and run `interpreter` in the terminal. For the desktop app, download from openinterpreter.com.",
      casos_uso: [
        "Analyze and visualize data using natural language",
        "Automate operating system tasks with Spanish instructions",
        "Learn to program with a patient conversational assistant",
        "Control your computer with natural-language commands"
      ],
      precio: "Free (AGPL-3.0 open source); Pro $20/month; Business $60/month",
      lenguaje: "Python · AGPL-3.0"
    },
    {
      name: "Cline",
      long_desc: "An autonomous coding agent available as both a VS Code extension and CLI, with 61,400+ GitHub stars and 3.85 million installations. Completely free for individual use under Apache 2.0 license, supporting your own API keys from any provider (Anthropic, OpenAI, Google). Can plan, edit files, execute terminal commands, and use the browser—all without leaving the editor.",
      pros: [
        "Free for individual use with your own API keys",
        "Provider-agnostic: supports Anthropic, OpenAI, Google, and more",
        "Native VS Code integration with 3.85 million installations",
        "MCP support for extending capabilities with external tools"
      ],
      contras: [
        "Primarily a VS Code extension, not a pure terminal CLI",
        "Team plan (>10 users) costs $20 per user per month"
      ],
      como_empezar: "Open VS Code, search for 'Cline' in the Extensions Marketplace, install it, and configure your AI provider and API key in the extension settings.",
      casos_uso: [
        "Implement complete features without leaving the code editor",
        "Run tests automatically and fix errors found",
        "Browse documentation and integrate external APIs",
        "Use MCP tools to extend the agent's capabilities"
      ],
      precio: "Free (individual, Apache 2.0 open source); Teams from $20/user/month with 10+ users",
      lenguaje: "TypeScript · Apache-2.0"
    },
    {
      name: "Warp",
      long_desc: "A modern terminal with an integrated AI agent that rewrote the terminal from scratch with GPU rendering. Combines IDE-style text editing, navigable command blocks, and an agent that understands tasks and executes multi-step workflows without extra configuration. Free plan includes limited AI credits; Build plan costs $20/month with 1,500 monthly credits and BYOK support.",
      pros: [
        "Terminal rewritten from scratch: GPU performance and modern experience",
        "Integrated AI agent with zero configuration needed",
        "Indexes up to 40 repositories for improved code context",
        "BYOK (bring your own key) support on all paid plans"
      ],
      contras: [
        "Proprietary application: not open source",
        "AI credits exhaust quickly on the free plan",
        "Available on macOS and Linux; Windows support still in development"
      ],
      como_empezar: "Download Warp from warp.dev, install on your system, and create a free account to access the AI agent from first launch.",
      casos_uso: [
        "Replace the classic terminal with AI-integrated version from day one",
        "Execute multi-step development workflows guided by the agent",
        "Learn terminal commands with contextual agent suggestions",
        "Manage multiple projects with indexed repositories"
      ],
      precio: "Free (limited credits); Build $20/month; Business $50/user/month; Enterprise upon request",
      lenguaje: "Rust · Proprietary"
    },
    {
      name: "Goose",
      long_desc: "An open-source agent created by Block (Jack Dorsey's company) and donated to the Agentic AI Foundation under the Linux Foundation, with Apache 2.0 license and 46,000+ GitHub stars. Goes far beyond code editing: can install packages, execute commands, manage databases, and deploy services thanks to its MCP extension system. Supports 15+ AI providers including Ollama for completely free local use.",
      pros: [
        "Completely free and open source under Apache 2.0",
        "Extensible with MCP extensions to expand capabilities",
        "Supports 15+ providers including local models with Ollama",
        "Institutionally backed by the Linux Foundation"
      ],
      contras: [
        "Advanced extensions require manual configuration",
        "Extension documentation is constantly growing"
      ],
      como_empezar: "Install with `pip install goose-ai` or download the installer from goose.ai and configure your preferred AI provider in the first-run wizard.",
      casos_uso: [
        "Automate complete development workflows with MCP extensions",
        "Manage infrastructure and deployments directly from terminal",
        "Experiment with free local models via Ollama at zero cost",
        "Build custom workflows with your own extensions"
      ],
      precio: "Free (Apache 2.0 open source); only pay for the chosen provider's API costs",
      lenguaje: "Python · Apache-2.0"
    },
    {
      name: "Aider",
      long_desc: "The most veteran pair-programming tool in this ecosystem, created by Paul Gauthier in 2023 with 45,600+ stars and 5.3 million PyPI installations. Its key feature is diff-patch editing: applies precise changes without rewriting entire files, with automatic Git commits and a repository map that helps the model understand project structure. Supports Claude, GPT-4, DeepSeek, Gemini, and local models with Ollama.",
      pros: [
        "Patch-based editing: surgical precision without rewriting files",
        "Automatic commits with descriptive messages after each change",
        "Public code-editing benchmark as industry reference",
        "Supports Claude, GPT-4, Gemini, DeepSeek, and local models"
      ],
      contras: [
        "Command-line workflow with initial learning curve for beginners",
        "No integrated graphical interface"
      ],
      como_empezar: "Install with `pip install aider-chat` and run `aider --model claude-3-5-sonnet-20241022` (or your preferred model) inside your git repository.",
      casos_uso: [
        "Fix specific bugs with precise patches unaffecting the rest",
        "Refactor modules while keeping Git history clean",
        "Program with free local models via Ollama at zero API cost",
        "Work on related files across multiple contexts in one session"
      ],
      precio: "Free (Apache 2.0 open source); pay only for your chosen model's API usage",
      lenguaje: "Python · Apache-2.0"
    },
    {
      name: "Crush",
      long_desc: "Charmbracelet's—creators of Bubble Tea and Glamour—bet on terminal coding agents: an elegant TUI written in Go with support for multiple AI providers and LSP context letting the agent understand code with compiler precision. Available in all major package managers (Homebrew, npm, Winget, apt, pacman, nix). FSL-1.1-MIT license allows free use except for products competing directly with Charmbracelet.",
      pros: [
        "Extremely polished and elegant TUI, Charmbracelet's trademark",
        "LSP context: agent understands types and code references",
        "Available in Homebrew, npm, Winget, apt, pacman, and nix",
        "Multi-provider: no dependency on a single AI model"
      ],
      contras: [
        "FSL-1.1-MIT license (not pure Apache/MIT): commercial restrictions",
        "Younger project with fewer extensions than competitors"
      ],
      como_empezar: "On macOS install with `brew install charmbracelet/tap/crush`; on other systems use `npm install -g @charm/crush`. Configure your AI provider on first run.",
      casos_uso: [
        "Program in the terminal with a visually attractive interface",
        "Get code completions with type precision thanks to LSP",
        "Use the same agent on Linux, macOS, and Windows unchanged",
        "Work with multiple AI providers based on the task"
      ],
      precio: "Free (source code available under FSL-1.1-MIT)",
      lenguaje: "Go · FSL-1.1-MIT"
    },
    {
      name: "SWE-agent",
      long_desc: "A research agent from Princeton and Stanford universities, presented at NeurIPS 2024 under MIT license, specialized in autonomously resolving GitHub issues. Implements an Agent Communication Interface (ACI) that adapts the terminal shell so models can navigate repositories and apply patches systematically. The mini-SWE-agent variant (100 lines of code) exceeds 74% on the SWE-bench Verified benchmark.",
      pros: [
        "Solid academic foundation: NeurIPS 2024",
        "Specialized in resolving GitHub issues with high precision",
        "mini-SWE-agent: minimalist solution exceeding 74% on SWE-bench",
        "MIT open source: completely free to use and modify"
      ],
      contras: [
        "More oriented toward software engineering than general purpose",
        "Token cost per issue can be high ($1–5 with powerful models)"
      ],
      como_empezar: "Install with `pip install sweagent` and run `sweagent run --model claude-3-5-sonnet --issue <ISSUE_URL>` pointing to the GitHub issue you want to resolve.",
      casos_uso: [
        "Automatically resolve GitHub issues in open-source projects",
        "Evaluate agent capabilities with the SWE-bench benchmark",
        "Research agent architectures in controlled environments",
        "Automate bug fixes from reported issues in repositories"
      ],
      precio: "Free (MIT open source); pay for model API usage (~$1–5 per complex issue)",
      lenguaje: "Python · MIT"
    },
    {
      name: "Plandex",
      long_desc: "A CLI agent written in Go distinguished by planning before acting: designs a step-by-step implementation plan before modifying any files, with an effective context window of 2 million tokens and support for 30+ programming languages. The cloud service (plandex.ai) is closing, and the tool continues as a self-hosted open-source project under MIT license with 15,300+ GitHub stars.",
      pros: [
        "Structured planning before touching any code",
        "2 million token context window for large projects",
        "MIT open source and completely self-hostable",
        "Support for 30+ programming languages"
      ],
      contras: [
        "plandex.ai cloud service closing: self-hosted use only",
        "Reduced activity compared to competitors after cloud closure"
      ],
      como_empezar: "Install with `curl -sL https://plandex.ai/install.sh | bash` (or download binary from GitHub Releases) and run `plandex` in your repository.",
      casos_uso: [
        "Implement complex features affecting multiple files",
        "Work on large projects exceeding other agents' context",
        "Self-host a coding agent on your own server",
        "Plan long-term migrations or refactoring efforts"
      ],
      precio: "Free (MIT open source, self-hosted); cloud closing",
      lenguaje: "Go · MIT"
    },
    {
      name: "GitHub Copilot CLI",
      long_desc: "GitHub Copilot's official terminal client for interacting with repositories, pull requests, and issues from the command line with AI assistance. Included in all Copilot plans, including the free tier. In 2026, GitHub migrated to a usage-based billing model with AI credits (1 credit = $0.01 USD), and the Pro plan costs $10/month with $10 in monthly credits included.",
      pros: [
        "Native integration with the entire GitHub ecosystem",
        "Available on Copilot Free plan at no additional cost",
        "Support for PR, issue, and repository management from terminal",
        "Usage-based billing with credits for precise cost control"
      ],
      contras: [
        "Requires GitHub account with active Copilot plan",
        "More limited functionality than dedicated CLI agents",
        "Proprietary software without source code access"
      ],
      como_empezar: "Install GitHub CLI with `winget install GitHub.cli` (Windows) or `brew install gh` (macOS), then enable Copilot with `gh extension install github/gh-copilot`.",
      casos_uso: [
        "Generate shell commands with natural-language explanation",
        "Manage pull requests and issues without leaving terminal",
        "Complement a GitHub-centered development workflow",
        "Get suggestions for git commands and error explanations"
      ],
      precio: "Free (Free plan included); Pro $10/month; Pro+ $39/month; Business $19/user/month",
      lenguaje: "TypeScript · Proprietary"
    },
    {
      name: "gptme",
      long_desc: "An open-source AI agent under MIT license living in the terminal with general-purpose tools: writes and executes code, operates the shell, navigates the web, and can control the computer. With 4,300 GitHub stars, it stands out for its persistent agent architecture with Git-backed memory, ideal for long-running autonomous workflows. Supports Anthropic, OpenAI, Google, xAI, DeepSeek, and local models with llama.cpp.",
      pros: [
        "Persistent agents with Git-backed memory between sessions",
        "General-purpose tools: code, shell, web, and computer control",
        "MIT open source with extensible, well-documented architecture",
        "Supports multiple providers and local models with llama.cpp"
      ],
      contras: [
        "Smaller community than other popular agents",
        "Terminal interface only: no graphical UI"
      ],
      como_empezar: "Install with `pip install gptme` and run `gptme` in the terminal, or `gptme-server` to access via a local web interface.",
      casos_uso: [
        "Build autonomous persistent agents with Git-backed memory",
        "Automate complex workflows with full system access",
        "Explore agent capabilities with multiple AI providers",
        "Create custom agents with full system integration"
      ],
      precio: "Free (MIT open source); pay for your chosen provider's API usage",
      lenguaje: "Python · MIT"
    }
  ],

  orquestadores: [
    {
      name: "vibe-kanban",
      long_desc: "A visual Kanban board for managing and monitoring multiple AI coding agents simultaneously, providing real-time visibility into work progress across the entire agent fleet.",
      pros: [
        "Visual Kanban interface for intuitive agent management",
        "Real-time monitoring of parallel agent execution",
        "Drag-and-drop task organization",
        "Support for large teams with many concurrent agents"
      ],
      contras: [
        "Requires understanding of Kanban workflow concepts",
        "Setup complexity for advanced team coordination"
      ],
      como_empezar: "Clone the repository with `git clone https://github.com/BloopAI/vibe-kanban` and follow the setup instructions in the README.",
      casos_uso: [
        "Manage multiple agents on complex multi-part projects",
        "Monitor agent progress visually in real time",
        "Coordinate teams of agents on large initiatives",
        "Track completed vs. in-progress agent tasks"
      ],
      precio: "Open source; costs vary by infrastructure choice",
      lenguaje: "TypeScript · Open Source"
    },
    {
      name: "cmux",
      long_desc: "An open-source platform for running multiple coding agents in parallel directly from the command line, with tmux-based process management.",
      pros: [
        "Lightweight CLI-based orchestration",
        "Direct control over agent processes",
        "Compatible with any CLI agent",
        "Easy integration with existing workflows"
      ],
      contras: [
        "Command-line only: no visual interface",
        "Steep learning curve for advanced features"
      ],
      como_empezar: "Install with `npm install -g cmux` and configure your agent commands in a configuration file.",
      casos_uso: [
        "Run multiple agents on different code sections in parallel",
        "Coordinate agent workflows from the terminal",
        "Combine different agent types in complex pipelines",
        "Manage agent resources and output streams"
      ],
      precio: "Open source; optional cloud hosting available",
      lenguaje: "Go · Open Source"
    },
    {
      name: "claude-squad",
      long_desc: "A tmux-based manager for running and supervising multiple Claude Code sessions in parallel, each with its own independent context.",
      pros: [
        "Easy setup using familiar tmux tool",
        "Each agent maintains independent context",
        "Straightforward parallel session management",
        "Minimal configuration needed"
      ],
      contras: [
        "Limited to Claude Code agents",
        "tmux knowledge required for advanced use"
      ],
      como_empezar: "Install with `npm install -g claude-squad` and use `claude-squad start <number-of-agents>` to launch parallel sessions.",
      casos_uso: [
        "Run multiple Claude Code instances on separate tasks",
        "Divide large projects among parallel Claude agents",
        "Experiment with multiple approaches simultaneously",
        "Scale code generation with parallel agent teams"
      ],
      precio: "Open source (costs are Claude Code subscriptions)",
      lenguaje: "TypeScript · Open Source"
    },
    {
      name: "crystal",
      long_desc: "A desktop application for running multiple Codex and Claude Code sessions in parallel within independent Git worktrees.",
      pros: [
        "Desktop GUI for easy agent management",
        "Automatic Git worktree isolation",
        "Visual session monitoring",
        "Simple agent spawn and monitoring"
      ],
      contras: [
        "Limited to Codex and Claude Code",
        "Desktop application dependency",
        "Worktree disk space overhead"
      ],
      como_empezar: "Download the installer from the GitHub releases page and run the application to create new parallel agent sessions.",
      casos_uso: [
        "Run multiple isolated agent sessions on the same project",
        "Experiment with different agent approaches in parallel",
        "Coordinate Codex and Claude Code agents visually",
        "Manage agent output and results from one dashboard"
      ],
      precio: "Open source (costs are agent subscriptions)",
      lenguaje: "JavaScript · Open Source"
    },
    {
      name: "amux",
      long_desc: "A terminal user interface for launching and coordinating multiple coding agents in parallel effortlessly.",
      pros: [
        "Simple TUI for agent coordination",
        "Quick agent spawn and management",
        "Real-time output viewing",
        "Provider-agnostic architecture"
      ],
      contras: [
        "Smaller project with less community support",
        "Fewer advanced features than alternatives",
        "Terminal-only interface"
      ],
      como_empezar: "Install with `npm install -g amux` and run `amux` to launch the interactive terminal interface.",
      casos_uso: [
        "Quickly spawn and manage multiple agents",
        "Coordinate agents for parallel code generation",
        "Monitor multiple agent outputs in split terminal",
        "Prototype multi-agent workflows efficiently"
      ],
      precio: "Open source",
      lenguaje: "Go · Open Source"
    },
    {
      name: "claude-flow",
      long_desc: "A framework for deploying swarms of multiple coordinated agents with autonomous workflows and distributed execution.",
      pros: [
        "Sophisticated multi-agent coordination",
        "Autonomous workflow execution",
        "Distributed execution across machines",
        "Production-ready agent management"
      ],
      contras: [
        "Complex setup and configuration",
        "Steep learning curve",
        "Requires understanding of swarm patterns"
      ],
      como_empezar: "Install via npm and set up a configuration file defining your agent swarm and workflow patterns.",
      casos_uso: [
        "Orchestrate complex multi-agent workflows",
        "Deploy scalable agent swarms to production",
        "Coordinate specialized agents on major projects",
        "Implement autonomous development workflows"
      ],
      precio: "Open source",
      lenguaje: "TypeScript · Open Source"
    },
    {
      name: "gastown",
      long_desc: "A multi-agent orchestration system with persistent work tracking and coordination across parallel sessions.",
      pros: [
        "Persistent state across sessions",
        "Mature orchestration patterns",
        "Reliable multi-agent coordination",
        "Production-tested architecture"
      ],
      contras: [
        "Higher complexity for setup",
        "Requires database for persistence",
        "Steeper operational learning curve"
      ],
      como_empezar: "Clone the repository and follow the installation guide for your infrastructure setup.",
      casos_uso: [
        "Maintain agent state across multiple sessions",
        "Coordinate long-running multi-agent tasks",
        "Track work progress across agent team",
        "Implement reliable agent orchestration"
      ],
      precio: "Open source",
      lenguaje: "TypeScript · Open Source"
    },
    {
      name: "AgentsMesh",
      long_desc: "A distributed platform with remote workstations for AI agents, channel-based coordination, and integrated Kanban dashboard.",
      pros: [
        "Distributed architecture for scalability",
        "Channel-based agent communication",
        "Integrated Kanban visibility",
        "Enterprise-ready features"
      ],
      contras: [
        "Complex deployment requirements",
        "Significant infrastructure overhead",
        "Enterprise pricing model"
      ],
      como_empezar: "Set up infrastructure following the deployment documentation and configure agent workstations.",
      casos_uso: [
        "Deploy agents across distributed infrastructure",
        "Coordinate enterprise-scale agent teams",
        "Implement inter-agent communication patterns",
        "Scale agent deployment globally"
      ],
      precio: "Open source with optional enterprise support",
      lenguaje: "JavaScript · Open Source"
    },
    {
      name: "kodo",
      long_desc: "An autonomous multi-agent orchestrator that directs Claude Code, Codex, and Gemini CLI through work cycles with independent verification.",
      pros: [
        "Multi-provider agent support",
        "Independent verification cycles",
        "Autonomous work coordination",
        "Specialized for major projects"
      ],
      contras: [
        "Limited to specific agent types",
        "Verification overhead slows execution",
        "Complex verification logic configuration"
      ],
      como_empezar: "Install and configure target agents, then define work cycles and verification rules.",
      casos_uso: [
        "Verify agent outputs before deployment",
        "Coordinate multiple agent types on tasks",
        "Implement quality gates in workflows",
        "Achieve high-confidence autonomous execution"
      ],
      precio: "Open source",
      lenguaje: "Python · Open Source"
    },
    {
      name: "ralph-orchestrator",
      long_desc: "A role-based orchestration system that keeps agents looping until assigned tasks are completed autonomously.",
      pros: [
        "Role-based agent assignment",
        "Automatic loop management",
        "Task completion guarantees",
        "Autonomous operation"
      ],
      contras: [
        "Loop configuration can be tricky",
        "Potential for infinite loops if misconfigured",
        "Limited visibility into loop internals"
      ],
      como_empezar: "Define agent roles and task definitions, then configure the orchestrator to manage loops.",
      casos_uso: [
        "Execute tasks until completion without manual intervention",
        "Assign roles to specialized agents",
        "Implement persistent task loops",
        "Achieve autonomous task completion"
      ],
      precio: "Open source",
      lenguaje: "Python · Open Source"
    },
    {
      name: "ralph-tui",
      long_desc: "A TUI for directing AI agents through task lists with autonomous execution and no manual intervention required.",
      pros: [
        "Intuitive task list interface",
        "Real-time progress visualization",
        "Simple autonomous mode",
        "Easy task management"
      ],
      contras: [
        "TUI-only interface",
        "Limited customization options",
        "Single-user design"
      ],
      como_empezar: "Launch the TUI interface and create a task list for agents to work through.",
      casos_uso: [
        "Create and manage task backlogs for agents",
        "Watch agents autonomously progress through tasks",
        "Adjust tasks in real time",
        "Prototype agent workflows visually"
      ],
      precio: "Open source",
      lenguaje: "Python · Open Source"
    },
    {
      name: "wreckit",
      long_desc: "Applies the Ralph Wiggum Loop autonomous pattern over the project roadmap for continuous, uninterrupted execution.",
      pros: [
        "Continuous execution without breaks",
        "Roadmap-based task management",
        "Proven autonomous patterns",
        "Minimal human intervention needed"
      ],
      contras: [
        "Requires well-defined roadmap",
        "Challenging to interrupt or modify loops",
        "Limited debugging visibility"
      ],
      como_empezar: "Define your project roadmap and let wreckit orchestrate autonomous execution.",
      casos_uso: [
        "Execute projects end-to-end without interruption",
        "Implement continuous agent-driven development",
        "Achieve hands-off project execution",
        "Build large features autonomously"
      ],
      precio: "Open source",
      lenguaje: "JavaScript · Open Source"
    },
    {
      name: "LettaBot",
      long_desc: "A personal AI assistant from Letta with persistent, unified memory across Telegram, Slack, Discord, WhatsApp, and Signal.",
      pros: [
        "Multi-platform integration",
        "Persistent unified memory",
        "Personal assistant focus",
        "Easy deployment to messaging platforms"
      ],
      contras: [
        "Assistant rather than developer agent",
        "Limited code-focused capabilities",
        "Messaging platform dependency"
      ],
      como_empezar: "Install and connect to your preferred messaging platform using the provided integrations.",
      casos_uso: [
        "Create AI assistants across multiple platforms",
        "Maintain persistent conversation memory",
        "Deploy personal assistants quickly",
        "Integrate AI into team communication tools"
      ],
      precio: "Open source",
      lenguaje: "Python · Open Source"
    },
    {
      name: "rowboat",
      long_desc: "An open-source AI work companion with persistent memory for providing continuous assistance across development projects.",
      pros: [
        "Persistent work memory",
        "Development-focused design",
        "Open-source architecture",
        "Continuous assistance model"
      ],
      contras: [
        "Early-stage project",
        "Smaller community",
        "Limited integrations"
      ],
      como_empezar: "Clone the repository and follow setup instructions to deploy your work companion.",
      casos_uso: [
        "Get continuous coding assistance",
        "Maintain development context across sessions",
        "Build persistent project relationships with AI",
        "Implement work-focused AI partnerships"
      ],
      precio: "Open source",
      lenguaje: "Python · Open Source"
    }
  ],

  comparativa: {
    ejes: [
      {
        eje: "Unit of work",
        cli_agent: "A single agent executes the task from start to finish",
        orquestador: "Coordinates multiple agents working in parallel or series"
      },
      {
        eje: "Ease of getting started",
        cli_agent: "Install + configure an API key: ready in minutes",
        orquestador: "Requires setting up base agents and coordination logic"
      },
      {
        eje: "Scalability",
        cli_agent: "Limited to a single agent's capabilities and context",
        orquestador: "Scales horizontally by adding more agents in parallel"
      },
      {
        eje: "Token cost",
        cli_agent: "Single token flow per task",
        orquestador: "Costs multiply by the number of active agents"
      },
      {
        eje: "Result control",
        cli_agent: "High: one agent, one result, easy to review",
        orquestador: "More complex: results are synthesized from multiple agents"
      },
      {
        eje: "For beginners",
        cli_agent: "Recommended: gentle learning curve",
        orquestador: "Advanced: prior CLI agent experience recommended"
      },
      {
        eje: "Ideal use cases",
        cli_agent: "Fix bugs, refactor code, learn programming",
        orquestador: "Large projects, automated backlog, complex workflows"
      },
      {
        eje: "Autonomy",
        cli_agent: "Variable: from assistant to completely autonomous agent",
        orquestador: "High: designed to run with minimal or no supervision"
      }
    ]
  },

  casos_uso: [
    {
      necesidad: "I want to fix a bug in my code",
      descripcion: "You have a specific error and need help understanding and fixing it.",
      herramientas: ["Aider", "Claude Code", "Cline"],
      razon: "Aider makes precise edits with patches without touching what works. Claude Code and Cline understand the full repository to find root causes."
    },
    {
      necesidad: "I want to program without paying for subscriptions",
      descripcion: "You're looking for completely free tools for your projects.",
      herramientas: ["Gemini CLI", "Goose", "Aider", "OpenCode", "gptme"],
      razon: "Gemini CLI offers 1,000 free requests daily. Goose and Aider are Apache 2.0 and work with Ollama (free local models, no API costs). OpenCode and gptme are MIT and support local models."
    },
    {
      necesidad: "I use VS Code and want AI integrated in the editor",
      descripcion: "You don't want to leave your editor to interact with the agent.",
      herramientas: ["Cline", "GitHub Copilot CLI"],
      razon: "Cline is the most popular VS Code extension (3.85 million installations) and completely free. GitHub Copilot CLI complements GitHub-centric workflows from the editor."
    },
    {
      necesidad: "I want to learn programming with AI assistance",
      descripcion: "You're a beginner and need a patient assistant that explains and executes.",
      herramientas: ["Open Interpreter", "Claude Code", "Gemini CLI"],
      razon: "Open Interpreter uses natural language to execute code: explains each step. Claude Code provides high-quality responses and is very accessible. Gemini CLI is free for exploring."
    },
    {
      necesidad: "I want to implement a large feature across multiple files",
      descripcion: "The task affects several parts of the project and requires planning.",
      herramientas: ["Plandex", "Claude Code", "OpenHands"],
      razon: "Plandex plans before acting with 2M token context. Claude Code maintains full repository context. OpenHands executes complete engineering tasks autonomously."
    },
    {
      necesidad: "I want to automatically resolve GitHub issues",
      descripcion: "You have a list of bugs or improvements on GitHub and want to automate solutions.",
      herramientas: ["SWE-agent", "OpenHands"],
      razon: "SWE-agent is specialized for this (NeurIPS 2024) and resolves issues directly. OpenHands can also do it autonomously with its cloud or local interface."
    },
    {
      necesidad: "I want to run several agents in parallel",
      descripcion: "You're looking to accelerate development by running multiple tasks simultaneously.",
      herramientas: ["cmux", "claude-squad", "vibe-kanban"],
      razon: "claude-squad is easiest to install. cmux offers more control with tmux. vibe-kanban has the most intuitive visual interface for seeing all agents' progress."
    },
    {
      necesidad: "I want to automate the project backlog without supervision",
      descripcion: "You want agents working autonomously while you're away.",
      herramientas: ["wreckit", "ralph-orchestrator", "kodo"],
      razon: "wreckit executes the complete idea-to-PR flow autonomously. ralph-orchestrator maintains loops with quality gates. kodo can work for up to 8 hours straight."
    },
    {
      necesidad: "I want a modern terminal with AI and no extra setup",
      descripcion: "You're looking to replace your terminal with one that already has AI built in.",
      herramientas: ["Warp", "Crush"],
      razon: "Warp rewrote the terminal from scratch with integrated AI agent from first launch. Crush offers an elegant TUI with LSP and multi-provider support across all operating systems."
    },
    {
      necesidad: "I work in teams and need to coordinate agents at scale",
      descripcion: "Your team wants to leverage multiple agents in enterprise projects.",
      herramientas: ["AgentsMesh", "gastown", "claude-flow"],
      razon: "AgentsMesh offers enterprise infrastructure with BYOK. gastown is the most mature for long-running projects. claude-flow / Ruflo provides coordinated agent swarms at scale."
    }
  ],

  glosario: [
    {
      termino: "AI Agent",
      definicion: "Software that perceives its environment, plans, and executes actions autonomously to achieve a goal without requiring manual instruction at each step."
    },
    {
      termino: "CLI",
      definicion: "Command-Line Interface. The terminal window where you type text commands to interact with your computer and tools."
    },
    {
      termino: "Orchestrator",
      definicion: "A system that coordinates and directs the work of multiple AI agents, assigning tasks, monitoring progress, and synthesizing results."
    },
    {
      termino: "LLM",
      definicion: "Large Language Model. The 'brain' of AI agents: models like Claude, GPT-4, Gemini, or Llama that understand and generate text."
    },
    {
      termino: "MCP",
      definicion: "Model Context Protocol. An open standard created by Anthropic for connecting AI agents with external tools (databases, APIs, web services) in a standardized way."
    },
    {
      termino: "Token",
      definicion: "Basic unit of text that language models process. Roughly 4 characters in English or 3 in Spanish. API costs are calculated in millions of tokens."
    },
    {
      termino: "API",
      definicion: "Application Programming Interface. The technical channel through which tools communicate with AI models in the cloud (Anthropic, OpenAI, Google)."
    },
    {
      termino: "API Key",
      definicion: "Secret password provided by the provider (Anthropic, OpenAI...) for identification and billing of model usage. Never share publicly."
    },
    {
      termino: "BYOK",
      definicion: "Bring Your Own Key. Model where you pay the AI provider directly with your account, instead of paying a flat fee to the tool."
    },
    {
      termino: "TUI",
      definicion: "Text User Interface. A visual application that runs entirely in the terminal, with menus and panels in text characters, without graphical windows."
    },
    {
      termino: "Worktree",
      definicion: "Isolated working copy of a git repository. Allows multiple agents to work on the same project simultaneously in independent branches without interfering."
    },
    {
      termino: "LSP",
      definicion: "Language Server Protocol. Standard allowing editors (and AI agents) to get precise code information: types, definitions, references, and errors in real time."
    },
    {
      termino: "SWE-bench",
      definicion: "Reference benchmark for evaluating AI agents on real software engineering tasks: resolving open-source GitHub issues. Higher percentage = better."
    },
    {
      termino: "Autonomous loop",
      definicion: "Pattern where the agent iterates automatically—executes, evaluates the result, corrects, and repeats—until task completion without user intervention."
    },
    {
      termino: "Open source",
      definicion: "Software whose source code is publicly available for anyone to use, modify, and distribute. Common licenses: MIT, Apache-2.0, GPL. Opposite of proprietary software."
    },
    {
      termino: "MIT / Apache-2.0",
      definicion: "The two most permissive open-source licenses. Permit using software for any purpose, including commercial, with few restrictions."
    },
    {
      termino: "FSL / BSL",
      definicion: "Source-available licenses with commercial restrictions. Code is visible, but production commercial use may require a paid license."
    },
    {
      termino: "Prompt",
      definicion: "The instruction or message you write to the agent to tell it what to do. A good prompt is clear, specific, and provides necessary context."
    },
    {
      termino: "Swarm (swarm)",
      definicion: "Pattern of multiple specialized agents working in parallel and coordinating results, inspired by collective behavior of insects like bees or ants."
    },
    {
      termino: "Ollama",
      definicion: "Free, open-source tool for running language models locally on your computer, without API costs or sending data to the cloud."
    }
  ]
};
