// assets/data-v3-research.js
// Oscar (wg-11) — datos citados para campos v3 de todos los ~30 herramientas
// Fuentes principales:
//   https://github.com/bradAGI/awesome-cli-coding-agents
//   https://github.com/andyrewlee/awesome-agent-orchestrators
//   + repos/sitios oficiales de cada herramienta (citados por tool)
// Todo el contenido verificado en fuentes públicas — ningún dato inventado.
// Prosa en español natural; caveman solo en chat interno.

// ─────────────────────────────────────────────────────────────────────────────
// SECCIÓN 1 — Campos v3 por herramienta
// Formato: { name, long_desc, pros[], contras[], como_empezar, casos_uso[], precio, lenguaje }
// ─────────────────────────────────────────────────────────────────────────────

window.GUIA_V3_ES = {

  // ── CLI AGENTS ──────────────────────────────────────────────────────────────

  cli: [
    {
      name: "Hermes Agent",
      // Fuente: https://github.com/NousResearch/hermes-agent  |  https://hermes-agent.org
      long_desc: "Hermes Agent es un agente CLI de código abierto desarrollado por Nous Research con memoria persistente entre sesiones y creación automática de habilidades. Compatible con más de 300 modelos de lenguaje a través de múltiples proveedores, puede autoexpandirse con nuevas capacidades conforme trabaja. Funciona tanto en la línea de comandos como conectado a plataformas de mensajería (Telegram, Discord, Slack, WhatsApp). Ideal para quien quiera un agente adaptable sin coste fijo de suscripción.",
      pros: [
        "Memoria persistente que crece y aprende entre sesiones",
        "Soporte para más de 300 modelos y proveedores de IA",
        "Gratis y código abierto bajo licencia MIT",
        "Se ejecuta localmente con Ollama sin ningún coste de API"
      ],
      contras: [
        "Requiere configurar claves de API externas para modelos en la nube",
        "Documentación aún limitada para usuarios sin experiencia"
      ],
      como_empezar: "Clona el repositorio con `git clone https://github.com/NousResearch/hermes-agent`, instala las dependencias con `pip install -e .` y copia `.env.example` a `.env` para añadir tu clave de API.",
      casos_uso: [
        "Automatizar tareas repetitivas de codificación con memoria del proyecto",
        "Crear un asistente personal que recuerda conversaciones anteriores",
        "Experimentar con modelos locales gratuitos vía Ollama",
        "Integrar un agente en Telegram o Discord para uso diario"
      ],
      precio: "Gratis (código abierto MIT); costes típicos de API: $15–80/mes según el proveedor elegido",
      lenguaje: "Python · MIT"
    },
    {
      name: "OpenCode",
      // Fuente: https://github.com/opencode-ai/opencode  |  https://opencode.ai
      long_desc: "OpenCode es un agente de codificación nativo del terminal escrito en Go que soporta más de 75 proveedores de IA y superó las 143.000 estrellas en GitHub en menos de un año. Ofrece una TUI completa con integración LSP, dos modos de agente —Build para implementar y Plan para solo leer y planificar— y total privacidad al ejecutarse localmente. Es la alternativa de código abierto más popular para quienes prefieren no depender de un único proveedor.",
      pros: [
        "Soporta 75+ proveedores de IA sin dependencia de uno solo",
        "TUI moderna con LSP para contexto preciso del código",
        "Gratis con modelos locales vía Ollama: coste cero",
        "Código abierto MIT con comunidad muy activa"
      ],
      contras: [
        "La configuración inicial de proveedores puede ser compleja",
        "La calidad de los resultados depende del modelo elegido"
      ],
      como_empezar: "Instala con `npm install -g opencode-ai` y ejecuta `opencode` en la carpeta del proyecto. En el primer arranque se abre el asistente de configuración.",
      casos_uso: [
        "Refactorizar código con el proveedor de IA que prefieras",
        "Explorar y entender bases de código desconocidas",
        "Programar sin coste alguno usando modelos locales",
        "Comparar respuestas de distintos modelos en la misma tarea"
      ],
      precio: "Gratis (MIT); OpenCode Go desde $5 el primer mes, luego $10/mes para modelos optimizados",
      lenguaje: "Go · MIT"
    },
    {
      name: "Claude Code",
      // Fuente: https://claude.com/pricing  |  https://www.finout.io/blog/claude-code-pricing-2026
      long_desc: "Claude Code es el agente de terminal oficial de Anthropic, integrado directamente en los planes de Claude y disponible mediante la API. Edita código, realiza refactorizaciones completas y gestiona flujos de trabajo en Git con una comprensión profunda del repositorio completo. Es el punto de referencia contra el que se comparan otros agentes CLI y cuenta con el ecosistema más maduro de skills y agentes de terceros. Se incluye en los planes Claude Pro ($20/mes) y Max ($100–200/mes).",
      pros: [
        "Comprensión profunda del repositorio y del contexto del código",
        "Integración nativa con Git y gestión de flujos de trabajo",
        "Ecosistema maduro con miles de skills y agentes disponibles",
        "Calidad de razonamiento superior con los modelos Opus y Sonnet"
      ],
      contras: [
        "Requiere suscripción de pago para uso intensivo",
        "Dependencia total del proveedor Anthropic"
      ],
      como_empezar: "Instala con `npm install -g @anthropic-ai/claude-code` y ejecuta `claude` dentro de la carpeta del proyecto. Se necesita una cuenta de Claude activa.",
      casos_uso: [
        "Implementar funcionalidades completas de extremo a extremo",
        "Revisar y mejorar código de producción con contexto completo del repo",
        "Gestionar pull requests y flujos de trabajo en Git",
        "Orquestar equipos de agentes especializados"
      ],
      precio: "Gratis (uso limitado); Pro $20/mes; Max desde $100/mes; Team desde $25/asiento/mes",
      lenguaje: "TypeScript · Propietario"
    },
    {
      name: "Gemini CLI",
      // Fuente: https://github.com/google-gemini/gemini-cli  |  https://geminicli.com/docs/resources/quota-and-pricing/
      long_desc: "Gemini CLI es el agente oficial de Google para el terminal, publicado en junio de 2025 bajo licencia Apache 2.0, que superó las 100.000 estrellas en GitHub en tiempo récord gracias a su generosa capa gratuita. Permite trabajar con repositorios, buscar en la web y ejecutar código impulsado por los modelos Gemini de Google. Ofrece 1.000 peticiones gratuitas al día con cuenta personal. A partir del 18 de junio de 2026, Google migra sus herramientas hacia la plataforma unificada Antigravity CLI.",
      pros: [
        "Capa gratuita de 1.000 peticiones/día con cuenta Google",
        "Código abierto bajo Apache 2.0 con comunidad muy activa",
        "Respaldado por Google con los modelos Gemini más potentes",
        "Comunidad que aportó 6.000+ pull requests en el primer año"
      ],
      contras: [
        "Google migra hacia Antigravity CLI a partir de junio 2026",
        "Límite de velocidad en la capa gratuita (60 peticiones/minuto)"
      ],
      como_empezar: "Instala con `npm install -g @google/gemini-cli` y autentica con `gemini auth login` usando tu cuenta de Google para acceder al nivel gratuito.",
      casos_uso: [
        "Analizar y refactorizar proyectos sin coste con la capa gratuita",
        "Investigar documentación y páginas web desde el terminal",
        "Experimentar con modelos Gemini potentes sin pagar API",
        "Contribuir a proyectos de código abierto con asistencia IA"
      ],
      precio: "Gratis (1.000 peticiones/día con cuenta Google personal)",
      lenguaje: "TypeScript · Apache-2.0"
    },
    {
      name: "Codex CLI",
      // Fuente: https://github.com/openai/codex  |  https://developers.openai.com/codex/pricing
      long_desc: "Codex CLI es el agente de codificación local de OpenAI escrito en Rust para máxima velocidad, con 88.600+ estrellas en GitHub. Ofrece una TUI interactiva para leer, editar y ejecutar código desde la terminal con tres modos de aprobación: sugerencia, automático y completo. Se integra con el ecosistema OpenAI y puede usarse con una suscripción ChatGPT Plus o con créditos de la API de OpenAI pagados por uso.",
      pros: [
        "Escrito en Rust: extremadamente rápido y eficiente",
        "Tres modos de aprobación para controlar el nivel de autonomía",
        "Código abierto bajo Apache 2.0",
        "Integración nativa con todos los modelos del ecosistema OpenAI"
      ],
      contras: [
        "Requiere suscripción ChatGPT Plus ($20/mes) o créditos de API",
        "Más orientado a modelos OpenAI que a múltiples proveedores"
      ],
      como_empezar: "Instala con `npm install -g @openai/codex` y configura tu clave con `export OPENAI_API_KEY=sk-...`, o inicia sesión con `codex login` si tienes ChatGPT Plus.",
      casos_uso: [
        "Generar y editar código con los modelos GPT de OpenAI",
        "Automatizar tareas de desarrollo con nivel de aprobación configurable",
        "Explorar el repositorio con comprensión profunda del contexto",
        "Integrar con el ecosistema de herramientas de OpenAI"
      ],
      precio: "Código abierto (Apache 2.0); requiere ChatGPT Plus ($20/mes) o API de OpenAI por uso",
      lenguaje: "Rust · Apache-2.0"
    },
    {
      name: "OpenHands",
      // Fuente: https://github.com/OpenHands/OpenHands  |  https://www.openhands.dev/pricing
      long_desc: "OpenHands (antes OpenDevin) es una plataforma de desarrollo agéntico de código abierto bajo licencia MIT con más de 75.600 estrellas en GitHub. Permite a los agentes realizar tareas completas de ingeniería: editar código, ejecutar comandos del terminal, navegar la web y gestionar Git de forma autónoma. Ofrece interfaz CLI y web para uso local o en la nube, con $50 en créditos gratuitos para nuevos usuarios en la versión cloud.",
      pros: [
        "Plataforma completa con interfaces CLI y web",
        "Código abierto MIT y auto-hospedable con Docker",
        "$50 en créditos gratuitos en la nube para usuarios nuevos",
        "Capaz de navegar la web, ejecutar comandos y gestionar Git"
      ],
      contras: [
        "La configuración local requiere Docker",
        "El servicio cloud tiene costes por uso tras agotar los créditos gratuitos"
      ],
      como_empezar: "La forma más rápida es crear cuenta en openhands.dev (cloud con $50 gratis). Para local: `pip install openhands-ai` o con Docker: `docker run --rm -it openhands/openhands:latest`.",
      casos_uso: [
        "Resolver issues de GitHub de forma completamente autónoma",
        "Automatizar flujos de trabajo completos de ingeniería de software",
        "Probar el agente en la nube con los créditos gratuitos iniciales",
        "Auto-hospedar una plataforma agéntica en el servidor propio"
      ],
      precio: "Gratis (código abierto MIT, auto-hospedado); cloud con $50 en créditos iniciales gratuitos",
      lenguaje: "Python · MIT"
    },
    {
      name: "Open Interpreter",
      // Fuente: https://github.com/openinterpreter/open-interpreter  |  https://www.openinterpreter.com
      long_desc: "Open Interpreter es una interfaz de lenguaje natural para el ordenador que permite ejecutar código Python, Bash y JavaScript directamente en la máquina local de forma conversacional. Con más de 60.000 estrellas en GitHub desde su lanzamiento en 2023, es uno de los proyectos de agentes IA más populares. En 2025 lanzó una aplicación de escritorio que facilita el acceso a usuarios no técnicos. El plan gratuito usa claves de API propias; el plan Pro ($20/mes) añade modelos alojados.",
      pros: [
        "Ejecuta código real en la máquina local de forma conversacional",
        "Interfaz de lenguaje natural muy intuitiva para principiantes",
        "Aplicación de escritorio disponible desde 2025",
        "Compatible con modelos locales gratuitos"
      ],
      contras: [
        "Licencia AGPL-3.0 puede limitar ciertos usos comerciales",
        "Ejecutar código sin supervisión en sistemas de producción es arriesgado"
      ],
      como_empezar: "Instala con `pip install open-interpreter` y ejecuta `interpreter` en el terminal. Para la app de escritorio, descárgala desde openinterpreter.com.",
      casos_uso: [
        "Analizar y visualizar datos usando lenguaje natural",
        "Automatizar tareas del sistema operativo con instrucciones en español",
        "Aprender a programar con un asistente conversacional paciente",
        "Controlar el ordenador con comandos en lenguaje natural"
      ],
      precio: "Gratis (código abierto AGPL-3.0); Pro $20/mes; Business $60/mes",
      lenguaje: "Python · AGPL-3.0"
    },
    {
      name: "Cline",
      // Fuente: https://github.com/cline/cline  |  https://cline.bot/pricing
      long_desc: "Cline es un agente de codificación autónomo disponible como extensión de VS Code y como CLI, con más de 61.400 estrellas en GitHub y 3,85 millones de instalaciones. Es completamente gratuito para uso individual bajo licencia Apache 2.0, y permite usar tus propias claves de API de cualquier proveedor (Anthropic, OpenAI, Google). Puede planificar, editar archivos, ejecutar comandos del terminal y usar el navegador, todo sin salir del editor.",
      pros: [
        "Gratis para uso individual con tus propias claves de API",
        "Sin dependencia de un proveedor: soporta Anthropic, OpenAI, Google y más",
        "Integración nativa en VS Code con 3,85 millones de instalaciones",
        "Soporte MCP para ampliar capacidades con herramientas externas"
      ],
      contras: [
        "Es principalmente una extensión de VS Code, no un CLI puro de terminal",
        "El plan Team (>10 usuarios) cuesta $20 por usuario al mes"
      ],
      como_empezar: "Abre VS Code, busca 'Cline' en el Marketplace de extensiones, instálala y configura tu proveedor de IA y clave de API en los ajustes de la extensión.",
      casos_uso: [
        "Implementar funcionalidades completas sin salir del editor de código",
        "Ejecutar tests automáticamente y corregir los errores encontrados",
        "Navegar documentación web e integrar APIs externas",
        "Usar herramientas MCP para ampliar las capacidades del agente"
      ],
      precio: "Gratis (individual, código abierto Apache 2.0); Teams desde $20/usuario/mes a partir de 10 usuarios",
      lenguaje: "TypeScript · Apache-2.0"
    },
    {
      name: "Warp",
      // Fuente: https://www.warp.dev/pricing  |  https://docs.warp.dev/support-and-community/plans-and-billing/plans-pricing-refunds/
      long_desc: "Warp es un terminal moderno con agente IA integrado que reescribió el terminal desde cero con renderizado GPU. Combina edición de texto al estilo IDE, bloques de comandos navegables y un agente que comprende tareas y ejecuta flujos de trabajo de varios pasos sin configuración adicional. El plan gratuito incluye créditos limitados de IA; el plan Build cuesta $20/mes con 1.500 créditos mensuales y soporte para traer tu propia clave de API.",
      pros: [
        "Terminal reescrito desde cero: rendimiento GPU y experiencia moderna",
        "Agente IA integrado sin necesidad de configuración adicional",
        "Indexa hasta 40 repositorios de código para contexto mejorado",
        "Soporte BYOK (trae tu propia clave de API) en todos los planes de pago"
      ],
      contras: [
        "Aplicación propietaria: no es código abierto",
        "Los créditos de IA se agotan rápido en el plan gratuito",
        "Disponible en macOS y Linux; soporte Windows aún en desarrollo"
      ],
      como_empezar: "Descarga Warp desde warp.dev, instálalo en tu sistema y crea una cuenta gratuita para acceder al agente IA desde el primer arranque.",
      casos_uso: [
        "Reemplazar el terminal clásico por uno con IA integrada desde el primer día",
        "Ejecutar flujos de trabajo de desarrollo de varios pasos de forma guiada",
        "Aprender comandos del terminal con sugerencias contextuales del agente",
        "Gestionar múltiples proyectos con repositorios indexados"
      ],
      precio: "Gratis (créditos limitados); Build $20/mes; Business $50/usuario/mes; Enterprise a consultar",
      lenguaje: "Rust · Propietario"
    },
    {
      name: "Goose",
      // Fuente: https://github.com/block/goose  |  https://block.xyz/inside/block-open-source-introduces-codename-goose
      long_desc: "Goose es un agente de código abierto creado por Block (empresa de Jack Dorsey) y donado a la Agentic AI Foundation bajo la Linux Foundation, con licencia Apache 2.0 y más de 46.000 estrellas en GitHub. Va mucho más allá de la edición de código: puede instalar paquetes, ejecutar comandos, gestionar bases de datos y desplegar servicios gracias a su sistema de extensiones MCP. Soporta más de 15 proveedores de IA incluyendo Ollama para uso local completamente gratuito.",
      pros: [
        "Totalmente gratuito y código abierto bajo Apache 2.0",
        "Extensible con extensiones MCP para ampliar capacidades",
        "Soporta 15+ proveedores incluyendo modelos locales con Ollama",
        "Respaldado institucionalmente por la Linux Foundation"
      ],
      contras: [
        "Las extensiones avanzadas requieren configuración manual",
        "La documentación de extensiones está en crecimiento constante"
      ],
      como_empezar: "Instala con `pip install goose-ai` o descarga el instalador desde goose.ai y configura el proveedor de IA preferido en el asistente de primer uso.",
      casos_uso: [
        "Automatizar flujos completos de desarrollo con extensiones MCP",
        "Gestionar infraestructura y despliegues directamente desde el terminal",
        "Experimentar con modelos locales gratuitos vía Ollama sin coste",
        "Construir flujos de trabajo personalizados con extensiones propias"
      ],
      precio: "Gratis (código abierto Apache 2.0); solo se pagan los costes de API del proveedor elegido",
      lenguaje: "Python · Apache-2.0"
    },
    {
      name: "Aider",
      // Fuente: https://github.com/Aider-AI/aider  |  https://aider.chat
      long_desc: "Aider es la herramienta de programación en pareja más veterana de este ecosistema, creada por Paul Gauthier en 2023 con más de 45.600 estrellas y 5,3 millones de instalaciones en PyPI. Su característica clave es la edición mediante parches de diff: aplica cambios precisos sin reescribir archivos completos, con commits automáticos en Git y un mapa del repositorio que ayuda al modelo a entender la estructura del proyecto. Soporta Claude, GPT-4, DeepSeek, Gemini y modelos locales con Ollama.",
      pros: [
        "Edición por parches: cambios quirúrgicos y precisos sin reescribir archivos",
        "Commits automáticos con mensajes descriptivos tras cada cambio",
        "Benchmark público de edición de código como referencia del sector",
        "Soporta Claude, GPT-4, Gemini, DeepSeek y modelos locales"
      ],
      contras: [
        "Flujo de trabajo de línea de comandos con curva inicial para principiantes",
        "Sin interfaz gráfica integrada"
      ],
      como_empezar: "Instala con `pip install aider-chat` y ejecuta `aider --model claude-3-5-sonnet-20241022` (o el modelo que prefieras) dentro de tu repositorio git.",
      casos_uso: [
        "Corregir bugs puntuales con parches precisos que no afectan el resto",
        "Refactorizar módulos manteniendo el historial limpio en Git",
        "Programar con modelos locales gratuitos vía Ollama sin coste de API",
        "Trabajar en varios archivos relacionados en una misma sesión"
      ],
      precio: "Gratis (código abierto Apache 2.0); se paga únicamente el uso de la API del modelo elegido",
      lenguaje: "Python · Apache-2.0"
    },
    {
      name: "Crush",
      // Fuente: https://github.com/charmbracelet/crush  |  crush/LICENSE.md
      long_desc: "Crush es la apuesta de Charmbracelet —los creadores de Bubble Tea y Glamour— por el agente de codificación en el terminal: una TUI elegante escrita en Go con soporte para múltiples proveedores de IA y contexto LSP que permite al agente entender el código con precisión de compilador. Disponible en todos los gestores de paquetes principales (Homebrew, npm, Winget, apt, pacman, nix). Su licencia FSL-1.1-MIT permite uso libre excepto para productos que compitan directamente con Charmbracelet.",
      pros: [
        "TUI extremadamente pulida y elegante, característica de Charmbracelet",
        "Contexto LSP: el agente entiende tipos y referencias del código",
        "Disponible en Homebrew, npm, Winget, apt, pacman y nix",
        "Multiproveedor: sin dependencia de un único modelo de IA"
      ],
      contras: [
        "Licencia FSL-1.1-MIT (no Apache/MIT pura): restricciones comerciales",
        "Proyecto más joven con menos extensiones que sus competidores"
      ],
      como_empezar: "En macOS instala con `brew install charmbracelet/tap/crush`; en otros sistemas usa `npm install -g @charm/crush`. Configura tu proveedor de IA al primer arranque.",
      casos_uso: [
        "Programar en el terminal con una interfaz visualmente atractiva",
        "Obtener completados de código con precisión de tipos gracias a LSP",
        "Usar el mismo agente en Linux, macOS y Windows sin cambios de configuración",
        "Trabajar con múltiples proveedores de IA según la tarea"
      ],
      precio: "Gratis (código fuente disponible bajo FSL-1.1-MIT)",
      lenguaje: "Go · FSL-1.1-MIT"
    },
    {
      name: "SWE-agent",
      // Fuente: https://github.com/SWE-agent/SWE-agent  |  https://swe-agent.com
      long_desc: "SWE-agent es un agente de investigación de la Universidad de Princeton y Stanford, presentado en NeurIPS 2024 con licencia MIT, especializado en resolver issues de GitHub de forma autónoma. Implementa una Interfaz de Control de Agentes (ACI) que adapta la shell del terminal para que los modelos puedan navegar repositorios y aplicar parches de forma sistemática. La variante mini-SWE-agent (100 líneas de código) supera el 74% en el benchmark SWE-bench Verified.",
      pros: [
        "Base de investigación académica sólida: NeurIPS 2024",
        "Especializado en resolver issues de GitHub con alta precisión",
        "mini-SWE-agent: solución minimalista que supera el 74% en SWE-bench",
        "Código abierto MIT: totalmente libre para usar y modificar"
      ],
      contras: [
        "Más orientado a ingeniería de software que a uso de propósito general",
        "El coste de tokens por issue puede ser elevado ($1–5 con modelos potentes)"
      ],
      como_empezar: "Instala con `pip install sweagent` y ejecuta `sweagent run --model claude-3-5-sonnet --issue <URL_del_issue>` apuntando al issue de GitHub que quieras resolver.",
      casos_uso: [
        "Resolver automáticamente issues de GitHub en proyectos de código abierto",
        "Evaluar capacidades de agentes con el benchmark SWE-bench",
        "Investigar arquitecturas de agentes en entornos controlados",
        "Automatizar la corrección de bugs reportados en repositorios"
      ],
      precio: "Gratis (código abierto MIT); se paga el uso de la API del modelo (~$1–5 por issue complejo)",
      lenguaje: "Python · MIT"
    },
    {
      name: "Plandex",
      // Fuente: https://github.com/plandex-ai/plandex  |  https://theaiagentindex.com/agents/plandex
      long_desc: "Plandex es un agente CLI escrito en Go que se distingue por planificar antes de actuar: diseña un plan de implementación paso a paso antes de modificar cualquier archivo, con una ventana de contexto efectiva de 2 millones de tokens y soporte para más de 30 lenguajes de programación. El servicio cloud (plandex.ai) está cerrando, y la herramienta continúa como proyecto de código abierto auto-hospedado bajo licencia MIT con 15.300+ estrellas en GitHub.",
      pros: [
        "Planificación estructurada antes de tocar el código",
        "Ventana de contexto de 2 millones de tokens para proyectos grandes",
        "Código abierto MIT y completamente auto-hospedable",
        "Soporte para más de 30 lenguajes de programación"
      ],
      contras: [
        "El servicio cloud plandex.ai está cerrando: solo uso auto-hospedado",
        "Actividad reducida en comparación con competidores tras el cierre del cloud"
      ],
      como_empezar: "Instala con `curl -sL https://plandex.ai/install.sh | bash` (o descarga el binario desde GitHub Releases) y ejecuta `plandex` en tu repositorio.",
      casos_uso: [
        "Implementar funcionalidades complejas que afectan a múltiples archivos",
        "Trabajar en proyectos grandes que superan el contexto de otros agentes",
        "Auto-hospedar un agente de codificación en el servidor propio",
        "Planificar migraciones o refactorizaciones a largo plazo"
      ],
      precio: "Gratis (código abierto MIT, auto-hospedado); cloud cerrando",
      lenguaje: "Go · MIT"
    },
    {
      name: "GitHub Copilot CLI",
      // Fuente: https://github.com/features/copilot/plans  |  https://docs.github.com/en/copilot
      long_desc: "GitHub Copilot CLI es el cliente de terminal oficial de GitHub Copilot que permite interactuar con repositorios, pull requests e issues desde la línea de comandos con asistencia IA. Se incluye en todos los planes de Copilot, incluyendo el plan Free. En 2026, GitHub migró a un modelo de facturación por uso basado en créditos de IA (1 crédito = $0,01 USD), y el plan Pro cuesta $10/mes con $10 en créditos mensuales incluidos.",
      pros: [
        "Integración nativa con todo el ecosistema de GitHub",
        "Disponible en el plan Copilot Free sin coste adicional",
        "Soporte para gestión de PRs, issues y repositorios desde el terminal",
        "Facturación por uso con créditos para control preciso de costes"
      ],
      contras: [
        "Requiere cuenta de GitHub con plan Copilot activo",
        "Funcionalidad más limitada que agentes CLI dedicados",
        "Software propietario sin acceso al código fuente"
      ],
      como_empezar: "Instala GitHub CLI con `winget install GitHub.cli` (Windows) o `brew install gh` (macOS), y activa Copilot con `gh extension install github/gh-copilot`.",
      casos_uso: [
        "Generar comandos de shell con explicación en lenguaje natural",
        "Gestionar pull requests e issues sin salir del terminal",
        "Complementar un flujo de desarrollo ya centrado en GitHub",
        "Obtener sugerencias de comandos git y explicaciones de errores"
      ],
      precio: "Gratis (plan Free incluido); Pro $10/mes; Pro+ $39/mes; Business $19/usuario/mes",
      lenguaje: "TypeScript · Propietario"
    },
    {
      name: "gptme",
      // Fuente: https://github.com/gptme/gptme  |  https://gptme.org
      long_desc: "gptme es un agente IA de código abierto bajo licencia MIT que vive en el terminal con herramientas de propósito general: escribe y ejecuta código, opera en el shell, navega la web y puede controlar el ordenador. Con 4.300 estrellas en GitHub, destaca por su arquitectura de agentes persistentes con memoria respaldada por Git, ideal para flujos de trabajo autónomos de larga duración. Soporta Anthropic, OpenAI, Google, xAI, DeepSeek y modelos locales con llama.cpp.",
      pros: [
        "Agentes persistentes con memoria almacenada en Git entre sesiones",
        "Herramientas de propósito general: código, shell, web y control del ordenador",
        "Código abierto MIT con arquitectura extensible y bien documentada",
        "Soporta múltiples proveedores y modelos locales con llama.cpp"
      ],
      contras: [
        "Comunidad más pequeña que otros agentes populares",
        "Solo interfaz de terminal: sin UI gráfica"
      ],
      como_empezar: "Instala con `pip install gptme` y ejecuta `gptme` en el terminal, o `gptme-server` para acceder mediante una interfaz web local.",
      casos_uso: [
        "Construir agentes autónomos persistentes con memoria en Git",
        "Automatizar flujos de trabajo complejos con acceso completo al sistema",
        "Explorar capacidades de agentes con múltiples proveedores de IA",
        "Crear agentes de ejecución programada para tareas recurrentes"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "Python · MIT"
    }
  ],

  // ── ORQUESTADORES ───────────────────────────────────────────────────────────

  orquestadores: [
    {
      name: "vibe-kanban",
      // Fuente: https://github.com/BloopAI/vibe-kanban  |  https://vibekanban.com
      long_desc: "Vibe Kanban es un tablero Kanban visual para administrar múltiples agentes de codificación IA en paralelo, creado por Bloop AI con 26.700 estrellas en GitHub. En 2026, Bloop anunció el cierre de la empresa y donó el proyecto a la comunidad como código abierto. Soporta más de 10 agentes distintos: Claude Code, Codex, Gemini CLI, Copilot, Amp, OpenCode y otros. Era el orquestador de referencia en gestión visual de flujos de trabajo multi-agente.",
      pros: [
        "Interfaz visual Kanban muy intuitiva para principiantes",
        "Soporta 10+ agentes de codificación diferentes",
        "Código abierto y mantenido por la comunidad desde 2026",
        "Permite ejecutar agentes en paralelo con seguimiento visual"
      ],
      contras: [
        "La empresa Bloop cerró en 2026; el mantenimiento depende de la comunidad",
        "Los servicios remotos alojados ya no están disponibles"
      ],
      como_empezar: "Clona el repositorio con `git clone https://github.com/BloopAI/vibe-kanban` y sigue las instrucciones del README para la instalación y arranque local.",
      casos_uso: [
        "Coordinar tareas de desarrollo entre varios agentes IA en paralelo",
        "Visualizar el progreso del trabajo de agentes ejecutándose simultáneamente",
        "Gestionar el backlog de un proyecto con asistencia de múltiples agentes",
        "Comparar el rendimiento de distintos agentes en la misma tarea"
      ],
      precio: "Gratis (código abierto, mantenido por la comunidad)",
      lenguaje: "TypeScript · MIT"
    },
    {
      name: "cmux",
      // Fuente: https://github.com/craigsc/cmux  |  https://github.com/multiagentcognition/cmux-agent-mcp
      long_desc: "cmux (Claude Multiplexer) es una plataforma de código abierto para ejecutar múltiples agentes de codificación en paralelo usando tmux como base. Su skill nativa para Claude Code convierte una sesión en orquestadora: descubre paneles, delega tareas a otras sesiones, monitoriza el progreso por inspección de pantalla y gestiona el ciclo completo de commit-merge-rebase con aislamiento por worktrees. La comunidad ha construido un ecosistema complementario: cmuxlayer (29 herramientas MCP), wmux (Windows) y cmux-team.",
      pros: [
        "Orquestación real de múltiples agentes sin infraestructura externa",
        "Skill de orquestación nativa para Claude Code incluida",
        "Ecosistema activo: MCP layer, versión Windows, herramientas de equipo",
        "Ligero y de código abierto"
      ],
      contras: [
        "Requiere tmux instalado (disponible nativamente en Linux/macOS)",
        "Curva de aprendizaje para configurar la orquestación de forma óptima"
      ],
      como_empezar: "Instala tmux con tu gestor de paquetes y clona cmux: `git clone https://github.com/craigsc/cmux && cd cmux && make install`. En Windows usa wmux.",
      casos_uso: [
        "Lanzar múltiples agentes Claude Code en paralelo sobre un repositorio",
        "Orquestar un agente director con varios agentes trabajadores",
        "Coordinar agentes trabajando en distintos proyectos simultáneamente",
        "Ampliar capacidades con las 29 herramientas MCP de cmuxlayer"
      ],
      precio: "Gratis (código abierto)",
      lenguaje: "Shell · MIT"
    },
    {
      name: "claude-squad",
      // Fuente: https://github.com/smtg-ai/claude-squad  |  https://smtg-ai.github.io/claude-squad/
      long_desc: "Claude Squad es una aplicación de terminal escrita en Go que permite gestionar múltiples sesiones de agentes IA en paralelo —Claude Code, Codex, OpenCode, Amp y otros— cada una con su propio contexto y rama de trabajo git independiente. Usa tmux internamente para aislar las sesiones y ofrece una interfaz unificada para cambiar entre ellas, monitorizar el progreso y controlarlas. Se instala con un solo comando vía Homebrew o curl, y cuenta con 7.700+ estrellas en GitHub.",
      pros: [
        "Gestión unificada de múltiples agentes en una única interfaz de terminal",
        "Aislamiento por worktrees git: cada sesión trabaja en su propia rama",
        "Soporta Claude Code, Codex, OpenCode, Amp y más agentes",
        "Instalación muy sencilla: Homebrew o un solo comando curl"
      ],
      contras: [
        "Requiere tmux instalado en el sistema",
        "Sin interfaz web ni visual avanzada"
      ],
      como_empezar: "En macOS: `brew install smtg-ai/tap/claude-squad`. En otros sistemas: `curl -sL https://raw.githubusercontent.com/smtg-ai/claude-squad/main/install.sh | bash`.",
      casos_uso: [
        "Trabajar en múltiples funcionalidades del mismo proyecto simultáneamente",
        "Comparar enfoques de implementación con diferentes agentes en paralelo",
        "Supervisar y coordinar agentes que trabajan de forma autónoma",
        "Gestionar sprints de desarrollo con varios agentes asignados a tareas"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "Go · MIT"
    },
    {
      name: "crystal",
      // Fuente: https://github.com/stravu/crystal  — archivado feb 2026, reemplazado por Nimbalyst
      long_desc: "Crystal fue una aplicación de escritorio de Stravu para ejecutar múltiples sesiones de Claude Code y Codex en paralelo dentro de ramas git independientes, con un enfoque 'humano en el bucle': el usuario controla las sesiones sin jerarquía automática de director-trabajador. El repositorio fue marcado como obsoleto en febrero de 2026 cuando el equipo lanzó Nimbalyst, su sucesor con edición visual interactiva de Markdown, mockups y código. Sigue siendo funcional para quienes no quieran migrar.",
      pros: [
        "Aislamiento por worktrees git: sesiones independientes sin conflictos",
        "Enfoque humano-en-el-bucle para control total del trabajo",
        "Interfaz de escritorio visual y fácil de usar",
        "Vista consolidada de todas las sesiones en un único panel"
      ],
      contras: [
        "Proyecto archivado en febrero de 2026: sin actualizaciones activas",
        "Reemplazado por Nimbalyst del mismo equipo con más funciones"
      ],
      como_empezar: "Descarga la última versión desde github.com/stravu/crystal/releases e instala la app de escritorio en macOS o Windows. Para nuevos proyectos, se recomienda Nimbalyst.",
      casos_uso: [
        "Explorar varias implementaciones alternativas de una misma funcionalidad",
        "Comparar resultados de Claude Code y Codex en la misma tarea",
        "Gestionar trabajo en paralelo con supervisión visual e intervención manual"
      ],
      precio: "Gratis (código abierto, mantenimiento reducido)",
      lenguaje: "TypeScript · MIT"
    },
    {
      name: "amux",
      // Fuente: https://github.com/mixpeek/amux  |  https://amux.io
      long_desc: "amux (Agent Multiplexer) de Mixpeek es un plano de control para agentes IA con licencia MIT + Commons Clause que permite ejecutar decenas de agentes Claude Code en paralelo mediante tmux, con panel web de seguimiento, tablero Kanban con SQLite, soporte PWA para acceso desde el móvil y watchdog auto-reparador que reinicia agentes bloqueados. Incluye una REST API para integración programática. Gratuito para auto-hospedar; la reventa comercial requiere licencia separada.",
      pros: [
        "Panel web + tablero Kanban para gestión visual de muchos agentes",
        "Watchdog auto-reparador: reinicia automáticamente agentes bloqueados",
        "Aplicación web progresiva (PWA): controla tus agentes desde el móvil",
        "REST API para integración programática y automatización"
      ],
      contras: [
        "Licencia MIT + Commons Clause: la reventa comercial requiere licencia",
        "Requiere configuración de servidor para acceder al panel web"
      ],
      como_empezar: "Instala con `curl -sSL https://raw.githubusercontent.com/mixpeek/amux/main/install.sh | bash` y accede al panel de control en `http://localhost:3000`.",
      casos_uso: [
        "Ejecutar decenas de agentes en paralelo sin supervisión constante",
        "Monitorizar el consumo de tokens de múltiples sesiones simultáneas",
        "Gestionar proyectos grandes con equipos completos de agentes",
        "Controlar agentes remotamente desde el teléfono móvil"
      ],
      precio: "Gratis (auto-hospedado); la reventa comercial requiere licencia",
      lenguaje: "Python · MIT + Commons Clause"
    },
    {
      name: "claude-flow",
      // Fuente: https://github.com/ruvnet/claude-flow  |  https://mcpmarket.com/server/claude-flow
      long_desc: "Claude Flow (ahora evolucionado a Ruflo) es el framework de orquestación de enjambres de agentes más popular del ecosistema Claude, creado por Reuven Cohen con 57.100+ estrellas en GitHub. Implementa inteligencia de enjambre con una arquitectura tipo 'reina + trabajadores especializados' y memoria compartida para coordinar decenas de agentes en proyectos complejos. Cuenta con 87 herramientas MCP integradas y métricas de referencia publicadas: 84,8% en SWE-Bench y reducción del 32,3% en consumo de tokens.",
      pros: [
        "Inteligencia de enjambre: arquitectura reina + trabajadores especializados",
        "84,8% en SWE-Bench con coordinación multi-agente",
        "87 herramientas MCP integradas listas para usar",
        "Código abierto con comunidad muy activa"
      ],
      contras: [
        "Complejidad alta: se recomienda empezar con casos de uso simples",
        "La transición a Ruflo puede romper flujos de trabajo existentes"
      ],
      como_empezar: "Instala con `npm install -g claude-flow` y ejecuta `claude-flow help` para ver los comandos de orquestación disponibles y los ejemplos de inicio rápido.",
      casos_uso: [
        "Coordinar enjambres de agentes en proyectos de software complejos",
        "Explorar capacidades avanzadas de inteligencia multi-agente",
        "Aprovechar las 87 herramientas MCP integradas en flujos automatizados",
        "Reducir el consumo de tokens coordinando agentes especializados"
      ],
      precio: "Gratis (código abierto)",
      lenguaje: "TypeScript · MIT"
    },
    {
      name: "gastown",
      // Fuente: https://github.com/gastownhall/gastown  |  https://github.com/steveyegge/gastown
      long_desc: "Gas Town es un gestor de espacio de trabajo multi-agente con seguimiento persistente del trabajo respaldado en git, un sistema de vigilancia de tres niveles (Daemon, Boot, Deacon) para detectar y recuperar agentes bloqueados, y soporte para todos los agentes principales: Claude Code, Copilot, Codex, Gemini. Con más de 15.700 estrellas, es el sistema de orquestación más maduro para proyectos de larga duración donde los agentes necesitan persistir el estado entre reinicios. Se instala vía Homebrew, npm o compilando desde Go.",
      pros: [
        "Estado persistente: los agentes no pierden contexto al reiniciarse",
        "Vigilancia de tres niveles para detectar y recuperar agentes bloqueados",
        "Soporte universal: Claude Code, Copilot, Codex y Gemini",
        "Ecosistema activo: GUI web, operador Kubernetes, fork para Gemini"
      ],
      contras: [
        "Arquitectura más compleja que otros gestores de sesiones simples",
        "La instalación desde código fuente requiere tener Go instalado"
      ],
      como_empezar: "Instala con `brew install gastownhall/tap/gastown` o `npm install -g gastown` y ejecuta `gt init` en el directorio de tu repositorio.",
      casos_uso: [
        "Gestionar proyectos de larga duración con múltiples agentes activos",
        "Recuperar automáticamente agentes bloqueados con el sistema de vigilancia",
        "Coordinar flujos de trabajo que deben sobrevivir a reinicios del sistema",
        "Desplegar agentes en Kubernetes con el operador oficial"
      ],
      precio: "Gratis (código abierto)",
      lenguaje: "Go · MIT"
    },
    {
      name: "AgentsMesh",
      // Fuente: https://github.com/AgentsMesh/AgentsMesh  — licencia BSL → GPL-2.0
      long_desc: "AgentsMesh es una plataforma de fuerza de trabajo de agentes IA distribuida con estaciones de trabajo remotas (AgentPods), coordinación por canales, tablero Kanban integrado y modelo BYOK (traes tus propias claves de API). Su arquitectura permite escalar equipos más allá del número de empleados humanos añadiendo 'empleados' IA especializados. Utiliza Business Source License (BSL): el uso no productivo es libre, pero la puesta en producción requiere licencia comercial hasta que cambie a GPL-2.0.",
      pros: [
        "AgentPods: estaciones de trabajo remotas con terminal web y worktrees git",
        "BYOK: control total de costes con tus propias claves de API",
        "Tablero Kanban integrado para seguimiento centralizado de tareas",
        "Coordinación por canales entre agentes especializados"
      ],
      contras: [
        "Licencia BSL: el uso en producción requiere licencia comercial",
        "Plataforma orientada a equipos; puede ser excesiva para uso individual"
      ],
      como_empezar: "Regístrate en agentsmesh.com y crea tu primer AgentPod desde la consola web añadiendo tus claves de API de los proveedores que quieras usar.",
      casos_uso: [
        "Escalar un equipo de desarrollo con empleados IA remotos especializados",
        "Coordinar múltiples agentes en proyectos empresariales de gran escala",
        "Gestionar flujos de trabajo de desarrollo con visibilidad y control centralizados",
        "Explorar arquitecturas multi-agente distribuidas en la nube"
      ],
      precio: "Gratis para uso no productivo; producción requiere licencia comercial (BSL)",
      lenguaje: "TypeScript · BSL → GPL-2.0"
    },
    {
      name: "kodo",
      // Fuente: https://github.com/ikamensh/kodo  |  https://ikamen.medium.com/kodo-learning-and-pushing-the-limits-of-autonomous-coding-5159f6540760
      long_desc: "kodo es un orquestador de codificación autónomo con licencia MIT que extiende el tiempo de trabajo autónomo de un agente de menos de 30 minutos hasta aproximadamente 8 horas. Usa una arquitectura jerárquica con un coordinador (Gemini Flash), agentes especializados —arquitecto, trabajador inteligente (Claude Code), trabajador rápido (Codex/Cursor)— y verificación independiente entre agentes. Diseñado para tareas grandes que requieren planificación a largo plazo sin intervención humana.",
      pros: [
        "Extiende el trabajo autónomo a ~8 horas sin intervención humana",
        "Arquitectura jerárquica con agentes especializados por tipo de tarea",
        "Verificación independiente: un agente comprueba el trabajo de otro",
        "Código abierto MIT: libre para usar y modificar"
      ],
      contras: [
        "Proyecto pequeño (106 estrellas): comunidad y soporte aún limitados",
        "Requiere claves de API de múltiples proveedores para el esquema completo"
      ],
      como_empezar: "Instala con `pip install kodo-agent` y sigue la guía de configuración en github.com/ikamensh/kodo para definir los agentes y sus modelos.",
      casos_uso: [
        "Ejecutar tareas de implementación largas de forma completamente autónoma",
        "Coordinar agentes especializados en proyectos de múltiples componentes",
        "Explorar arquitecturas multi-agente jerárquicas en proyectos propios",
        "Delegar ciclos de prueba y corrección a un tester autónomo"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "Python · MIT"
    },
    {
      name: "ralph-orchestrator",
      // Fuente: https://github.com/mikeyobrien/ralph-orchestrator
      long_desc: "Ralph Orchestrator es una implementación mejorada del patrón Ralph Wiggum: mantiene agentes de codificación en un bucle autónomo hasta completar la tarea usando un sistema de 'sombreros' (hats) con roles especializados —code-assist, debug, research, review—. Incluye puertas de contrapresión (tests, lint, typecheck) que rechazan trabajo incompleto, memoria persistente entre ejecuciones y soporte para Claude Code, Gemini CLI, Codex y otros agentes.",
      pros: [
        "Bucle autónomo: el agente itera automáticamente hasta completar la tarea",
        "Sistema de roles especializados (hats) para cada tipo de trabajo",
        "Puertas de calidad integradas: tests y lint bloquean trabajo incompleto",
        "Memoria persistente entre sesiones para continuidad del trabajo"
      ],
      contras: [
        "El concepto del 'Ralph Wiggum loop' puede resultar confuso para principiantes",
        "Comunidad más pequeña que las herramientas más populares del ecosistema"
      ],
      como_empezar: "Instala con `npm install -g ralph-orchestrator` y ejecuta `ralph run --task 'descripción de la tarea'` dentro de tu repositorio git.",
      casos_uso: [
        "Automatizar tareas de implementación con verificación de calidad integrada",
        "Ciclos de desarrollo guiados por tests completamente automatizados",
        "Explorar el patrón Ralph Wiggum para tareas de complejidad media",
        "Mantener al agente trabajando hasta pasar todas las comprobaciones de calidad"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "TypeScript · MIT"
    },
    {
      name: "ralph-tui",
      // Fuente: https://github.com/syntax-syndicate/ralph-ai-tui  |  https://ralph-tui.com
      long_desc: "Ralph TUI es una interfaz de terminal para dirigir agentes IA —Claude Code, OpenCode, Factory Droid— a través de listas de tareas de forma completamente autónoma. Conecta el agente con el gestor de tareas del proyecto y ejecuta un bucle: selecciona la tarea de mayor prioridad, construye el prompt, ejecuta el agente, detecta la finalización y repite hasta completar todas las tareas. También disponible en ralph-tui.com con documentación y versión web.",
      pros: [
        "Automatización completa de listas de tareas del proyecto sin intervención",
        "Selección inteligente de tareas por prioridad",
        "Detección automática de finalización con manejo de errores",
        "Soporta Claude Code, OpenCode y Factory Droid"
      ],
      contras: [
        "Proyecto joven con documentación aún en desarrollo",
        "Depende de que las tareas estén bien definidas para funcionar correctamente"
      ],
      como_empezar: "Instala la crate con `cargo install ralph-tui` (requiere Rust) o sigue las instrucciones de instalación en ralph-tui.com para tu sistema operativo.",
      casos_uso: [
        "Ejecutar un backlog completo de tareas del proyecto de forma autónoma",
        "Integrar un agente IA con el gestor de tareas existente del equipo",
        "Explorar la automatización de flujos de trabajo TDD con agentes",
        "Procesar listas de tareas durante la noche sin supervisión"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "Rust · MIT"
    },
    {
      name: "wreckit",
      // Fuente: https://github.com/mikehostetler/wreckit
      long_desc: "Wreckit es un agente autónomo que ejecuta el Ralph Wiggum Loop sobre la hoja de ruta de un proyecto con un flujo completo: ideas → investigación → plan → implementación → PR → entrega. Soporta modo sandbox con aislamiento en microVM Firecracker para operaciones de riesgo. Usa el Claude Agent SDK en proceso (in-process) por defecto, lo que lo hace significativamente más rápido que los wrappers que lanzan procesos externos. Diseñado para procesar el backlog durante la noche sin supervisión.",
      pros: [
        "Flujo completo: de ideas a pull request sin intervención humana",
        "Modo sandbox con microVM Firecracker para mayor seguridad",
        "Claude Agent SDK en proceso: más rápido que wrappers externos",
        "Diseñado para ejecución autónoma nocturna sin supervisión"
      ],
      contras: [
        "Muy orientado al flujo Claude/Ralph Wiggum: poca flexibilidad fuera de él",
        "Proyecto pequeño (128 estrellas) con comunidad en crecimiento"
      ],
      como_empezar: "Instala con `npm install -g wreckit-ai` y ejecuta `wreckit init` en tu repositorio para configurar la hoja de ruta del proyecto.",
      casos_uso: [
        "Procesar el backlog del proyecto de forma autónoma durante la noche",
        "Generar y ejecutar planes de implementación completos sin intervención",
        "Usar el sandbox Firecracker para operaciones de riesgo en aislamiento",
        "Automatizar el ciclo completo de desarrollo: desde idea hasta PR"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "TypeScript · MIT"
    },
    {
      name: "LettaBot",
      // Fuente: https://github.com/letta-ai/lettabot  — archivado 2025
      long_desc: "LettaBot fue el asistente personal IA de Letta AI con memoria persistente y unificada a través de múltiples plataformas de mensajería: Telegram, Slack, Discord, WhatsApp y Signal. El repositorio fue archivado en 2025 cuando el equipo migró toda la funcionalidad a Letta Code mediante canales y entornos remotos. Si bien ya no recibe actualizaciones activas, su código sigue disponible para quien quiera explorarlo como referencia.",
      pros: [
        "Memoria persistente y unificada entre múltiples plataformas de mensajería",
        "Integración con Telegram, Slack, Discord, WhatsApp y Signal",
        "Base tecnológica sólida de Letta AI para memoria a largo plazo"
      ],
      contras: [
        "Archivado en 2025: sin actualizaciones activas ni mantenimiento",
        "Reemplazado por Letta Code (canales y entornos remotos) como sucesor"
      ],
      como_empezar: "Para nuevos proyectos se recomienda usar Letta Code en lugar de LettaBot: visita letta.ai para explorar los canales y entornos remotos como alternativa actual.",
      casos_uso: [
        "Estudiar implementaciones de agentes con memoria persistente entre plataformas",
        "Usar como referencia para integrar IA en plataformas de mensajería",
        "Explorar la evolución histórica de los asistentes IA con memoria"
      ],
      precio: "Gratis (código abierto, archivado)",
      lenguaje: "Python · Apache-2.0"
    },
    {
      name: "rowboat",
      // Fuente: https://github.com/rowboatlabs/rowboat  |  https://www.rowboatlabs.com
      long_desc: "Rowboat es un compañero de trabajo IA de código abierto con memoria persistente desarrollado por Rowboat Labs, diseñado para prestar asistencia continua en proyectos de desarrollo. Se conecta al correo electrónico y a las notas de reuniones, construye un grafo de conocimiento de larga duración y usa ese contexto para ayudar en el trabajo diario de forma completamente privada y local. Su enfoque en privacidad y ejecución local lo diferencia de los asistentes basados en la nube.",
      pros: [
        "Memoria persistente mediante grafo de conocimiento personalizado",
        "Conexión con correo y notas de reuniones para contexto enriquecido",
        "Ejecución completamente local: total privacidad de los datos",
        "Código abierto con comunidad activa en crecimiento"
      ],
      contras: [
        "Proyecto joven: documentación y características aún en desarrollo activo",
        "Requiere configuración inicial para conectar las fuentes de datos"
      ],
      como_empezar: "Clona el repositorio con `git clone https://github.com/rowboatlabs/rowboat` y sigue las instrucciones del README para instalar dependencias y conectar tus fuentes de datos.",
      casos_uso: [
        "Construir un asistente de trabajo con contexto de correos y reuniones",
        "Gestionar proyectos largos con memoria persistente del historial del equipo",
        "Explorar agentes con grafos de conocimiento y datos completamente privados",
        "Crear un compañero de trabajo IA que recuerda decisiones pasadas"
      ],
      precio: "Gratis (código abierto MIT)",
      lenguaje: "Python · MIT"
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // SECCIÓN 2 — Comparativa: CLI Agents vs Orquestadores
  // ─────────────────────────────────────────────────────────────────────────────

  comparativa: {
    ejes: [
      {
        eje: "Unidad de trabajo",
        cli_agent: "Un único agente ejecuta la tarea de principio a fin",
        orquestador: "Coordina múltiples agentes trabajando en paralelo o en cadena"
      },
      {
        eje: "Facilidad de inicio",
        cli_agent: "Instalar + configurar una clave de API: listo en minutos",
        orquestador: "Requiere configurar los agentes base y la lógica de coordinación"
      },
      {
        eje: "Escalabilidad",
        cli_agent: "Limitada a las capacidades de un único agente y su contexto",
        orquestador: "Escala horizontalmente añadiendo más agentes en paralelo"
      },
      {
        eje: "Coste de tokens",
        cli_agent: "Un solo flujo de tokens por tarea",
        orquestador: "El coste se multiplica por el número de agentes activos"
      },
      {
        eje: "Control del resultado",
        cli_agent: "Alta: un agente, un resultado, fácil de revisar",
        orquestador: "Más complejo: los resultados se sintetizan de múltiples agentes"
      },
      {
        eje: "Para principiantes",
        cli_agent: "Recomendado: curva de aprendizaje suave",
        orquestador: "Avanzado: se recomienda tener experiencia previa con CLI agents"
      },
      {
        eje: "Casos de uso ideales",
        cli_agent: "Corregir bugs, refactorizar código, aprender a programar",
        orquestador: "Proyectos grandes, backlog automático, flujos de trabajo complejos"
      },
      {
        eje: "Autonomía",
        cli_agent: "Variable: desde asistente hasta agente completamente autónomo",
        orquestador: "Alta: diseñados para ejecutarse con poca o ninguna supervisión"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SECCIÓN 3 — Casos de uso: necesidad del principiante → herramientas recomendadas
  // ─────────────────────────────────────────────────────────────────────────────

  casos_uso: [
    {
      necesidad: "Quiero corregir un bug en mi código",
      descripcion: "Tienes un error concreto y necesitas ayuda para entenderlo y solucionarlo.",
      herramientas: ["Aider", "Claude Code", "Cline"],
      razon: "Aider hace ediciones precisas con parches sin tocar lo que funciona. Claude Code y Cline entienden el repositorio completo para encontrar la causa raíz."
    },
    {
      necesidad: "Quiero programar sin pagar suscripciones",
      descripcion: "Buscas herramientas completamente gratuitas para tus proyectos.",
      herramientas: ["Gemini CLI", "Goose", "Aider", "OpenCode", "gptme"],
      razon: "Gemini CLI ofrece 1.000 peticiones/día gratis. Goose y Aider son Apache 2.0 y funcionan con Ollama (modelos locales sin coste de API). OpenCode y gptme son MIT y soportan modelos locales."
    },
    {
      necesidad: "Uso VS Code y quiero IA integrada en el editor",
      descripcion: "No quieres abandonar tu editor para interactuar con el agente.",
      herramientas: ["Cline", "GitHub Copilot CLI"],
      razon: "Cline es la extensión de VS Code más popular (3,85 millones de instalaciones) y totalmente gratuita. GitHub Copilot CLI complementa el flujo de trabajo de GitHub desde el editor."
    },
    {
      necesidad: "Quiero aprender a programar con asistencia IA",
      descripcion: "Eres principiante y necesitas un asistente paciente que explique y ejecute.",
      herramientas: ["Open Interpreter", "Claude Code", "Gemini CLI"],
      razon: "Open Interpreter usa lenguaje natural para ejecutar código: explica cada paso. Claude Code tiene una respuesta de alta calidad y es muy accesible. Gemini CLI es gratis para explorar."
    },
    {
      necesidad: "Quiero implementar una funcionalidad grande en múltiples archivos",
      descripcion: "La tarea afecta a varias partes del proyecto y requiere planificación.",
      herramientas: ["Plandex", "Claude Code", "OpenHands"],
      razon: "Plandex planifica antes de actuar con contexto de 2M tokens. Claude Code mantiene contexto completo del repositorio. OpenHands ejecuta tareas completas de ingeniería de forma autónoma."
    },
    {
      necesidad: "Quiero resolver issues de GitHub automáticamente",
      descripcion: "Tienes una lista de bugs o mejoras en GitHub y quieres automatizar su solución.",
      herramientas: ["SWE-agent", "OpenHands"],
      razon: "SWE-agent está especializado en esto (NeurIPS 2024) y resuelve issues directamente. OpenHands también puede hacerlo de forma autónoma con su interfaz cloud o local."
    },
    {
      necesidad: "Quiero ejecutar varios agentes en paralelo",
      descripcion: "Buscas acelerar el desarrollo ejecutando múltiples tareas simultáneamente.",
      herramientas: ["cmux", "claude-squad", "vibe-kanban"],
      razon: "claude-squad es el más sencillo de instalar. cmux ofrece más control con tmux. vibe-kanban tiene la interfaz visual más intuitiva para ver el progreso de todos los agentes."
    },
    {
      necesidad: "Quiero automatizar el backlog del proyecto sin supervisión",
      descripcion: "Quieres que los agentes trabajen de forma autónoma mientras no estás.",
      herramientas: ["wreckit", "ralph-orchestrator", "kodo"],
      razon: "wreckit ejecuta el flujo completo de ideas a PR de forma autónoma. ralph-orchestrator mantiene bucles con puertas de calidad. kodo puede trabajar hasta 8 horas seguidas."
    },
    {
      necesidad: "Quiero un terminal moderno con IA sin configuración extra",
      descripcion: "Buscas reemplazar tu terminal con uno que ya incluya capacidades de IA.",
      herramientas: ["Warp", "Crush"],
      razon: "Warp reescribió el terminal desde cero con agente IA integrado desde el primer arranque. Crush ofrece una TUI elegante con LSP y multiproveedor en todos los sistemas operativos."
    },
    {
      necesidad: "Trabajo en equipo y necesito coordinar agentes a gran escala",
      descripcion: "Tu equipo quiere aprovechar múltiples agentes en proyectos empresariales.",
      herramientas: ["AgentsMesh", "gastown", "claude-flow"],
      razon: "AgentsMesh ofrece infraestructura empresarial con BYOK. gastown es el más maduro para proyectos largos. claude-flow / Ruflo proporciona enjambres de agentes coordinados a escala."
    }
  ],

  // ─────────────────────────────────────────────────────────────────────────────
  // SECCIÓN 4 — Glosario de términos clave para principiantes
  // ─────────────────────────────────────────────────────────────────────────────

  glosario: [
    {
      termino: "Agente IA",
      definicion: "Software que percibe su entorno, planifica y ejecuta acciones de forma autónoma para alcanzar un objetivo, sin necesidad de instrucción manual en cada paso."
    },
    {
      termino: "CLI",
      definicion: "Interfaz de línea de comandos (Command-Line Interface). La ventana de terminal donde escribes comandos de texto para interactuar con el ordenador y las herramientas."
    },
    {
      termino: "Orquestador",
      definicion: "Sistema que coordina y dirige el trabajo de múltiples agentes IA, asignándoles tareas, monitorizando su progreso y sintetizando sus resultados."
    },
    {
      termino: "LLM",
      definicion: "Modelo de lenguaje grande (Large Language Model). El 'cerebro' de los agentes IA: modelos como Claude, GPT-4, Gemini o Llama que entienden y generan texto."
    },
    {
      termino: "MCP",
      definicion: "Model Context Protocol. Estándar abierto creado por Anthropic para conectar agentes IA con herramientas externas (bases de datos, APIs, servicios web) de forma estandarizada."
    },
    {
      termino: "Token",
      definicion: "Unidad básica de texto que procesan los modelos de lenguaje. Aproximadamente 4 caracteres en inglés o 3 en español. Los costes de la API se calculan en millones de tokens."
    },
    {
      termino: "API",
      definicion: "Interfaz de programación de aplicaciones. El canal técnico mediante el que las herramientas se comunican con los modelos de IA en la nube (Anthropic, OpenAI, Google)."
    },
    {
      termino: "Clave de API",
      definicion: "Contraseña secreta que te proporciona el proveedor (Anthropic, OpenAI...) para identificarte y facturar el uso de sus modelos. Nunca debe compartirse públicamente."
    },
    {
      termino: "BYOK",
      definicion: "Bring Your Own Key (trae tu propia clave). Modelo en el que pagas directamente al proveedor de IA con tu cuenta, en lugar de pagar una tarifa fija a la herramienta."
    },
    {
      termino: "TUI",
      definicion: "Interfaz de usuario de texto (Text User Interface). Aplicación visual que funciona completamente en el terminal, con menús y paneles en caracteres de texto, sin ventanas gráficas."
    },
    {
      termino: "Worktree",
      definicion: "Copia de trabajo aislada de un repositorio git. Permite que varios agentes trabajen en el mismo proyecto simultáneamente en ramas independientes sin interferirse."
    },
    {
      termino: "LSP",
      definicion: "Language Server Protocol. Estándar que permite a los editores (y agentes IA) obtener información precisa del código: tipos, definiciones, referencias y errores en tiempo real."
    },
    {
      termino: "SWE-bench",
      definicion: "Benchmark de referencia para evaluar agentes IA en tareas reales de ingeniería de software: resolver issues de repositorios de código abierto de GitHub. Mayor porcentaje = mejor."
    },
    {
      termino: "Loop autónomo",
      definicion: "Patrón en el que el agente itera automáticamente —ejecuta, evalúa el resultado, corrige y repite— hasta completar la tarea sin necesidad de intervención del usuario."
    },
    {
      termino: "Código abierto",
      definicion: "Software cuyo código fuente está disponible públicamente para que cualquiera lo use, modifique y distribuya. Licencias comunes: MIT, Apache-2.0, GPL. Opuesto a software propietario."
    },
    {
      termino: "MIT / Apache-2.0",
      definicion: "Las dos licencias de código abierto más permisivas. Permiten usar el software para cualquier propósito, incluyendo comercial, con pocas restricciones."
    },
    {
      termino: "FSL / BSL",
      definicion: "Licencias de código fuente disponible (source-available) con restricciones comerciales. El código es visible, pero su uso en producción comercial puede requerir una licencia de pago."
    },
    {
      termino: "Prompt",
      definicion: "La instrucción o mensaje que escribes al agente para indicarle qué hacer. Un buen prompt es claro, específico y proporciona el contexto necesario para obtener el resultado deseado."
    },
    {
      termino: "Swarm (enjambre)",
      definicion: "Patrón de múltiples agentes especializados que trabajan en paralelo y coordinan sus resultados, inspirado en el comportamiento colectivo de insectos como abejas o hormigas."
    },
    {
      termino: "Ollama",
      definicion: "Herramienta gratuita y de código abierto para ejecutar modelos de lenguaje localmente en tu ordenador, sin coste de API ni envío de datos a la nube."
    }
  ]
};
