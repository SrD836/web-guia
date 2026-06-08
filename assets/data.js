// assets/data.js
// Fuente: https://github.com/bradAGI/awesome-cli-coding-agents
//         https://github.com/andyrewlee/awesome-agent-orchestrators
// Datos citados de las listas fuente; ninguna entrada es inventada.

window.GUIA_DATA = {
  cli: [
    {
      name: "Hermes Agent",
      desc: "Agente CLI de Nous Research con memoria persistente, creación automática de habilidades y soporte para más de 300 modelos de lenguaje.",
      url: "https://github.com/NousResearch/hermes-agent",
      stars: 176000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "OpenCode",
      desc: "Agente nativo del terminal con soporte para más de 75 proveedores de IA, integración LSP y diseño orientado a la privacidad.",
      url: "https://github.com/opencode-ai/opencode",
      stars: 168000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "Claude Code",
      desc: "Agente de terminal de Anthropic que edita código, realiza refactorizaciones y gestiona flujos de trabajo en Git con conciencia del repositorio.",
      url: "https://github.com/anthropics/claude-code",
      stars: 129000,
      badge: "Popular",
      category: "closed"
    },
    {
      name: "Gemini CLI",
      desc: "Agente oficial de Google para el terminal, impulsado por Gemini, que trabaja con repositorios y soporta tareas de investigación. Licencia Apache-2.0.",
      url: "https://github.com/google-gemini/gemini-cli",
      stars: 105000,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "Codex CLI",
      desc: "Agente de codificación local de OpenAI con interfaz TUI interactiva para leer, editar y ejecutar código directamente desde la terminal. Apache-2.0.",
      url: "https://github.com/openai/codex",
      stars: 87600,
      badge: "Popular",
      category: "open-source"
    },
    {
      name: "OpenHands",
      desc: "Entorno de desarrollo agéntico de código abierto —antes OpenDevin— con interfaces CLI y web para tareas autónomas de programación.",
      url: "https://github.com/All-Hands-AI/OpenHands",
      stars: 75600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Open Interpreter",
      desc: "Herramienta de terminal que ejecuta código y acciones en la máquina local de forma conversacional, como un agente de propósito general.",
      url: "https://github.com/OpenInterpreter/open-interpreter",
      stars: 63800,
      badge: null,
      category: "open-source"
    },
    {
      name: "Cline",
      desc: "Agente autónomo e independiente del modelo para planificación, edición de archivos, ejecución de comandos y uso del navegador desde el terminal.",
      url: "https://github.com/cline/cline",
      stars: 62600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Warp",
      desc: "Terminal moderno con agente IA integrado que comprende tareas, ejecuta comandos y edita archivos en flujos de trabajo de múltiples pasos.",
      url: "https://github.com/warpdotdev/Warp",
      stars: 60800,
      badge: null,
      category: "closed"
    },
    {
      name: "Goose",
      desc: "Agente local extensible de Block que ejecuta, edita y prueba código en el dispositivo con integración MCP y soporte para plugins de extensión.",
      url: "https://github.com/block/goose",
      stars: 46200,
      badge: null,
      category: "open-source"
    },
    {
      name: "Aider",
      desc: "Agente de programación en pareja que edita archivos mediante parches, con sólidos flujos de trabajo multi-archivo e integración nativa con Git.",
      url: "https://github.com/Aider-AI/aider",
      stars: 45600,
      badge: null,
      category: "open-source"
    },
    {
      name: "Crush",
      desc: "Elegante TUI agéntica de Charmbracelet escrita en Go, compatible con múltiples proveedores de IA e integración LSP para el terminal.",
      url: "https://github.com/charmbracelet/crush",
      stars: 24900,
      badge: null,
      category: "open-source"
    },
    {
      name: "SWE-agent",
      desc: "Agente especializado en resolver incidencias de repositorios y tareas de tipo PR; ampliamente utilizado en benchmarks de ingeniería de software.",
      url: "https://github.com/SWE-agent/SWE-agent",
      stars: 19400,
      badge: null,
      category: "open-source"
    },
    {
      name: "Plandex",
      desc: "Agente CLI que planifica antes de actuar, construyendo funcionalidades en múltiples archivos con pasos estructurados y un contexto de hasta 2 M de tokens.",
      url: "https://github.com/plandex-ai/plandex",
      stars: 15400,
      badge: null,
      category: "open-source"
    },
    {
      name: "GitHub Copilot CLI",
      desc: "CLI agéntico oficial de GitHub para gestionar repositorios, pull requests e incidencias, con soporte para automatización sin cabeza.",
      url: "https://github.com/github/copilot-cli",
      stars: 10700,
      badge: null,
      category: "closed"
    },
    {
      name: "gptme",
      desc: "Agente IA en el terminal con soporte para agentes persistentes; ejecuta código, edita archivos y navega la web con memoria respaldada por Git.",
      url: "https://github.com/gptme/gptme",
      stars: 4300,
      badge: null,
      category: "open-source"
    }
  ],
  orquestadores: [
    {
      name: "vibe-kanban",
      desc: "Tablero Kanban visual para administrar y monitorizar múltiples agentes de codificación IA de forma simultánea.",
      url: "https://github.com/BloopAI/vibe-kanban",
      stars: 26700,
      badge: "Popular",
      category: "runners-paralelos"
    },
    {
      name: "cmux",
      desc: "Plataforma de código abierto para ejecutar múltiples agentes de codificación en paralelo desde la línea de comandos.",
      url: "https://github.com/craigsc/cmux",
      stars: 20600,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "claude-squad",
      desc: "Gestor basado en tmux que permite ejecutar y supervisar varias sesiones de Claude Code en paralelo, cada una con su propio contexto.",
      url: "https://github.com/smtg-ai/claude-squad",
      stars: 7700,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "crystal",
      desc: "Aplicación de escritorio para ejecutar múltiples sesiones de Codex y Claude Code en paralelo dentro de ramas de trabajo Git independientes.",
      url: "https://github.com/stravu/crystal",
      stars: 3100,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "amux",
      desc: "Interfaz de usuario de terminal para lanzar y coordinar múltiples agentes de codificación en paralelo de forma sencilla.",
      url: "https://github.com/mixpeek/amux",
      stars: 118,
      badge: null,
      category: "runners-paralelos"
    },
    {
      name: "claude-flow",
      desc: "Framework para desplegar enjambres de múltiples agentes coordinados con flujos de trabajo autónomos y ejecución distribuida.",
      url: "https://github.com/ruvnet/claude-flow",
      stars: 57100,
      badge: "Popular",
      category: "swarms"
    },
    {
      name: "gastown",
      desc: "Sistema de orquestación multi-agente con seguimiento persistente del trabajo y coordinación entre sesiones paralelas.",
      url: "https://github.com/steveyegge/gastown",
      stars: 15700,
      badge: null,
      category: "swarms"
    },
    {
      name: "AgentsMesh",
      desc: "Plataforma distribuida con estaciones de trabajo remotas para agentes IA, coordinación por canales y tablero Kanban integrado.",
      url: "https://github.com/AgentsMesh/AgentsMesh",
      stars: 2200,
      badge: null,
      category: "swarms"
    },
    {
      name: "kodo",
      desc: "Orquestador multi-agente autónomo que dirige Claude Code, Codex y Gemini CLI a través de ciclos de trabajo con verificación independiente.",
      url: "https://github.com/ikamensh/kodo",
      stars: 106,
      badge: null,
      category: "swarms"
    },
    {
      name: "ralph-orchestrator",
      desc: "Sistema de orquestación por roles que mantiene a los agentes en bucle hasta completar la tarea asignada de forma autónoma.",
      url: "https://github.com/mikeyobrien/ralph-orchestrator",
      stars: 2900,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "ralph-tui",
      desc: "Interfaz TUI para dirigir agentes IA a través de listas de tareas con ejecución autónoma y sin necesidad de intervención manual.",
      url: "https://github.com/syntax-syndicate/ralph-ai-tui",
      stars: 2300,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "wreckit",
      desc: "Aplica el patrón de bucle autónomo Ralph Wiggum Loop sobre la hoja de ruta del proyecto para una ejecución continua y sin interrupciones.",
      url: "https://github.com/mikehostetler/wreckit",
      stars: 128,
      badge: null,
      category: "loops-autonomos"
    },
    {
      name: "LettaBot",
      desc: "Asistente personal IA de Letta con memoria persistente y unificada a través de Telegram, Slack, Discord, WhatsApp y Signal.",
      url: "https://github.com/letta-ai/lettabot",
      stars: 327,
      badge: null,
      category: "asistentes"
    },
    {
      name: "rowboat",
      desc: "Compañero de trabajo IA de código abierto con memoria persistente para prestar asistencia continua en proyectos de desarrollo.",
      url: "https://github.com/rowboatlabs/rowboat",
      stars: 0,
      badge: null,
      category: "asistentes"
    }
  ]
};

window.GUIA_LABELS = {
  "open-source": "Código abierto",
  "closed": "Cerrado / comercial",
  "openclaw-eco": "Ecosistema OpenClaw",
  "runners-paralelos": "Ejecutores en paralelo",
  "swarms": "Enjambres",
  "loops-autonomos": "Bucles autónomos",
  "asistentes": "Asistentes"
};
