/* assets/i18n.js — Bilingüe ES/EN para web-guia (sitio estático, sin build, file:// safe)
 * Arquitectura: i18n-ARCHITECTURE.md (ADR-001, Jim).
 *
 * Canal A — prosa HTML vía atributos:
 *   data-i18n="clave"            → reemplaza textContent
 *   data-i18n-attr="attr:clave"  → reemplaza un atributo (varios separados por ';')
 *   data-i18n-html="clave"       → reemplaza innerHTML (para texto con <span>/<code>/<a> internos)
 * Canal B — datos dinámicos: selecciona GUIA_DATA_ES/EN y GUIA_V3_ES/EN antes del render de app.js.
 *
 * Carga en cada página DESPUÉS de data*.js y data*.en.js, ANTES de app.js.
 *
 * ESTADO: loader funcional + I18N_ES sembrado con chrome compartido + plantilla index (worked example).
 *   → Pam: completa I18N_ES cableando el resto de páginas (protocolo §6 del ADR).
 *   → Andy: rellena I18N_EN (espejo de cada clave) + ficheros data*.en.js.
 */
(function () {
  'use strict';

  /* ─── Diccionario ES (idioma origen). Sembrado: shared + index. ───────────── */
  window.I18N_ES = {
    /* ---- Chrome compartido (nav / drawer / tablet / footer / toggle) ---- */
    'nav.brand': 'Guía de Agentes',
    'nav.inicio': 'Inicio',
    'nav.agentesCli': 'Agentes CLI',
    'nav.orquestadores': 'Orquestadores',
    'nav.comparativa': 'Comparativa',
    'nav.aprender': 'Aprender',
    'nav.casosUso': 'Casos de uso',
    'nav.ruta': 'Ruta de aprendizaje',
    'nav.conceptos': 'Conceptos',
    'nav.glosarioFaq': 'Glosario y FAQ',
    'nav.acerca': 'Acerca',
    'nav.menu': 'Menú',
    'nav.catalogo': 'Catálogo',
    'nav.navegacion': 'Navegación',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.principalLabel': 'Navegación principal',
    'nav.drawerLabel': 'Menú de navegación',
    'nav.langGroup': 'Idioma / Language',

    'footer.title': 'Guía de Agentes IA',
    'footer.tagline': 'Una guía abierta para desarrolladores que quieren entender los agentes de código CLI y orquestadores.',
    'footer.fecha': 'Datos a fecha de junio de 2026',

    'common.cerrar': 'Cerrar',

    /* ---- Literales que hoy viven en app.js (ui.*) ---- */
    'ui.verDetalle': 'Ver detalle',
    'ui.repo': 'Repo ↗',
    'ui.comoEmpezarFallback': 'Consulta la documentación oficial del proyecto.',
    'ui.desconocido': 'Desconocido',
    'ui.col.herramienta': 'Herramienta',
    'ui.col.categoria': 'Categoría',
    'ui.col.estrellas': 'Estrellas',
    'ui.col.precio': 'Precio',
    'ui.col.lenguaje': 'Lenguaje',
    'ui.col.primerPaso': 'Primer paso',

    /* ---- index.html (worked example — plantilla del esquema) ---- */
    'index.meta.title': 'Guía de Agentes IA — CLI y Orquestadores',
    'index.meta.desc': 'Guía completa de agentes de código CLI y orquestadores IA. Descubre las 30 herramientas más populares, compáralas y aprende cuál usar.',
    'index.hero.badge': '30 herramientas · actualizado junio 2026',
    'index.hero.title': 'Automatiza tu flujo de código con <span class="text-gradient">agentes de IA</span>',
    'index.hero.subtitle': 'Descubre cómo los agentes de código CLI y orquestadores transforman la forma en que escribes, debugueas y despliegas tu software.',
    'index.hero.ctaPrimary': 'Explorar Agentes CLI',
    'index.hero.ctaSecondary': 'Ruta de aprendizaje',
    'index.intro.body': 'Los agentes de código son herramientas de inteligencia artificial que entienden tu repositorio, leen errores, proponen cambios y ejecutan tareas complejas desde la línea de comandos. En lugar de escribir instrucciones paso a paso, describes qué necesitas y el agente lo hace. Esta guía te enseña qué son, cómo funcionan y cuál elegir para tu equipo.',
    'index.routes.heading': 'Dos caminos, una meta',
    'index.routes.card1.heading': 'Agentes de Código CLI',
    'index.routes.card1.desc': 'Herramientas autónomas que corren en tu terminal y pueden leer código, entender errores y escribir soluciones. Perfectas para desarrolladores que quieren automatizar tareas repetitivas sin dejar el terminal.',
    'index.routes.card1.cta': 'Ver catálogo',
    'index.routes.card2.heading': 'Orquestadores',
    'index.routes.card2.desc': 'Plataformas que coordinan múltiples agentes en paralelo, con loops autónomos y decisiones inteligentes. Para equipos que necesitan orquestar workflows complejos donde un solo agente no es suficiente.',
    'index.routes.card2.cta': 'Ver catálogo',
    'index.steps.heading': 'Ruta de aprendizaje en 3 pasos',
    'index.steps.subtitle': 'Sin rodeos: de cero a orquestar agentes de forma autónoma.',
    'index.steps.step1.heading': 'Entender los conceptos',
    'index.steps.step1.desc': 'Aprende qué es un agente de código CLI, por qué es diferente de un chatbot normal y cuáles son los casos de uso reales.',
    'index.steps.step1.cta': 'Leer el artículo →',
    'index.steps.step2.heading': 'Explorar categorías',
    'index.steps.step2.desc': 'Descubre cuatro tipos de orquestadores: runners paralelos, swarms multi-agente, loops autónomos y asistentes personales que aprenden tu estilo.',
    'index.steps.step2.cta': 'Explorar →',
    'index.steps.step3.heading': 'Elegir tu herramienta',
    'index.steps.step3.desc': 'Con los conceptos claros, decides cuál utilizar según tu caso de uso, presupuesto y nivel de autonomía deseado.',
    'index.steps.step3.cta': 'Ver casos de uso →',
    'index.featured.heading': 'Herramientas destacadas',
    'index.featured.subtitle': 'Las más populares de cada categoría.',
    'index.featured.cta': 'Ver comparativa completa →',
    'index.cta.heading': '¿Por dónde empiezo?',
    'index.cta.body': 'Sigue la ruta de aprendizaje en 6 pasos. De los conceptos básicos a la orquestación avanzada.',
    'index.cta.button': 'Empezar la ruta de aprendizaje',

    /* ---- Shared UI — modal labels (same modal HTML across catalog pages) ---- */
    'ui.modal.ventajas': 'Ventajas',
    'ui.modal.limitaciones': 'Limitaciones',
    'ui.modal.comoEmpezar': 'Cómo empezar',
    'ui.modal.precio': 'Precio',
    'ui.modal.lenguajeLicencia': 'Lenguaje / Licencia',
    'ui.modal.verGithub': 'Ver en GitHub ↗',

    /* ---- Shared UI — filter pills and category labels ---- */
    'ui.filter.todos': 'Todos',
    'ui.cat.openSource': 'Código abierto',
    'ui.cat.closed': 'Cerrado / comercial',
    'ui.cat.runnersParalelos': 'Ejecutores en paralelo',
    'ui.cat.swarms': 'Enjambres',
    'ui.cat.loopsAutonomos': 'Bucles autónomos',
    'ui.cat.asistentes': 'Asistentes',
    'ui.emptyState': 'No hay herramientas en esta categoría.',

    /* ---- Shared footer ---- */
    'footer.sitemapLabel': 'Mapa del sitio',

    /* ---- agentes-cli.html ---- */
    'agentes-cli.meta.title': 'Agentes de Código CLI — Guía de Agentes IA',
    'agentes-cli.meta.desc': 'Catálogo de 16 agentes de código CLI: Claude Code, Gemini CLI, Aider, OpenCode y más. Filtra por categoría, compara características y elige el mejor para ti.',
    'agentes-cli.hero.badge': '16 herramientas',
    'agentes-cli.hero.h1': 'Agentes de código <span class="text-gradient">CLI</span>',
    'agentes-cli.hero.desc': 'Un agente de código CLI es un programa que corre en tu terminal y usa inteligencia artificial para entender y modificar código. Filtra por categoría y abre cualquier tarjeta para ver detalles completos, precios y cómo empezar.',
    'agentes-cli.explainer.body': 'Un agente CLI lee tu proyecto, interpreta errores, propone cambios concretos y, si se lo pides, los aplica directamente a tus archivos. Por ejemplo: escribes <code class="bg-line/60 px-1.5 py-0.5 rounded font-mono text-ink text-xs">claude fix-this-bug</code>. El agente lee tu código, busca el error, entiende el contexto del proyecto, escribe una solución y te la muestra. Tú la revisas y apruebas. Sin intermediarios, sin copiar y pegar entre ventanas.',
    'agentes-cli.filter.ariaLabel': 'Filtrar por categoría',

    /* ---- orquestadores.html ---- */
    'orquestadores.meta.title': 'Orquestadores — Guía de Agentes IA',
    'orquestadores.meta.desc': 'Catálogo de 14 orquestadores de agentes IA: claude-flow, claude-squad, gastown, vibe-kanban y más. Coordina múltiples agentes en paralelo.',
    'orquestadores.hero.badge': '14 herramientas',
    'orquestadores.hero.h1': 'Orquestadores: <span class="text-gradient">4 patrones</span>',
    'orquestadores.hero.desc': 'Cuando un solo agente no es suficiente, necesitas coordinar varios agentes especializados. Filtra por tipo de orquestación y abre cualquier tarjeta para ver detalles completos, casos de uso y cómo empezar.',
    'orquestadores.pat1.heading': 'Ejecutores en paralelo',
    'orquestadores.pat1.desc': 'Lanza N agentes al mismo tiempo, cada uno con una tarea independiente. Rápido y eficiente para tareas que no dependen una de la otra.',
    'orquestadores.pat2.heading': 'Enjambres',
    'orquestadores.pat2.desc': 'Varios agentes especializados trabajan en coordinación. Arquitecto, implementador, tester, documentador — cada uno en su rol.',
    'orquestadores.pat3.heading': 'Bucles autónomos',
    'orquestadores.pat3.desc': 'El agente ejecuta un ciclo: identifica, propone, prueba y reintenta. Sin intervención humana entre intentos.',
    'orquestadores.pat4.heading': 'Asistentes',
    'orquestadores.pat4.desc': 'Un agente que aprende tu código, tu estilo y tus preferencias. Se adapta conforme lo usas y recuerda el contexto entre sesiones.',
    'orquestadores.filter.ariaLabel': 'Filtrar por categoría',

    /* ---- comparativa.html ---- */
    'comparativa.meta.title': 'Comparativa — Guía de Agentes IA',
    'comparativa.meta.desc': 'Comparativa de las 30 herramientas de agentes IA por estrellas, licencia, precio y 8 ejes de evaluación. Toma la mejor decisión para tu proyecto.',
    'comparativa.hero.h1': 'Comparativa <span class="text-gradient">completa</span>',
    'comparativa.hero.desc': 'En esta página encontrarás una comparación lado a lado de las 30 herramientas de esta guía. La tabla de herramientas las ordena por popularidad (estrellas en GitHub) e incluye precio, licencia y tipo. Los ejes de evaluación te muestran las diferencias conceptuales entre agentes CLI y orquestadores en 8 dimensiones clave para decidir cuál encaja mejor en tu flujo de trabajo.',
    'comparativa.ejes.heading': 'Ejes de evaluación',
    'comparativa.ejes.ariaLabel': 'Comparativa por ejes',
    'comparativa.ejes.col.eje': 'Eje',
    'comparativa.ejes.col.agenteCli': 'Agente CLI',
    'comparativa.ejes.col.orquestador': 'Orquestador',
    'comparativa.tools.heading': 'Todas las herramientas',
    'comparativa.tools.ariaLabel': 'Todas las herramientas ordenadas por popularidad',
    'comparativa.tools.col.herramienta': 'Herramienta',
    'comparativa.tools.col.tipo': 'Tipo',
    'comparativa.tools.col.estrellas': '⭐ Estrellas',
    'comparativa.tools.col.precio': 'Precio',
    'comparativa.tools.col.lenguaje': 'Lenguaje',
    'comparativa.tools.col.detalle': 'Detalle',
    'comparativa.footnote': '* Estrellas de GitHub a fecha de junio de 2026. Haz clic en «ver» para abrir el detalle completo de cada herramienta.',

    /* ---- casos-uso.html ---- */
    'casosUso.meta.title': 'Casos de uso — Guía de Agentes IA',
    'casosUso.meta.desc': '10 casos de uso reales de agentes IA: desde automatizar code reviews hasta orquestar pipelines de datos. Descubre qué herramienta usar en cada situación.',
    'casosUso.hero.h1': 'Casos de <span class="text-gradient">uso reales</span>',
    'casosUso.hero.desc': 'Cada escenario describe una necesidad concreta, la herramienta más adecuada para resolverla y el razonamiento detrás de esa elección. Haz clic en cualquier herramienta para ver sus detalles completos.',
    'casosUso.labelRazon': 'Por qué esta combinación',
    'casosUso.labelHerramientas': 'Herramientas recomendadas',

    /* ---- concepto.html ---- */
    'concepto.meta.title': 'Conceptos — Guía de Agentes IA',
    'concepto.meta.desc': '¿Qué es un agente de código CLI y por qué está cambiando la ingeniería de software? Artículo completo con ejemplos, comparativas y guía para elegir la herramienta adecuada.',
    'concepto.hero.badge': 'Artículo conceptual',
    'concepto.hero.h1': '¿Qué es un agente de código CLI y por qué está <span class="text-gradient">cambiando la ingeniería</span> de software?',
    'concepto.hero.subtitle': 'De Stack Overflow y copiar-pegar a herramientas que leen tu repositorio, entienden tu arquitectura y escriben código específico para tu proyecto. Una explicación completa para desarrolladores.',
    'concepto.hero.readTime': '8 min lectura',
    'concepto.hero.sections': '7 secciones',
    'concepto.hero.date': 'Junio 2026',
    'concepto.toc.label': 'Tabla de contenidos',
    'concepto.toc.item1': '1. La frustración de explicar código',
    'concepto.toc.item2': '2. Entrada de los agentes CLI',
    'concepto.toc.item3': '3. Cómo funciona bajo el capó',
    'concepto.toc.item4': '4. Diferencia con chatbot',
    'concepto.toc.item5': '5. Casos de uso reales',
    'concepto.toc.item6': '6. Limitaciones reales',
    'concepto.toc.item7': '7. Cómo elegir',
    'concepto.sidebar.heading': 'Contenido',
    'concepto.sidebar.cta.heading': '¿Listo para ver las herramientas?',
    'concepto.sidebar.cta.button': 'Ver catálogo →',
    'concepto.s1.heading': 'La frustración de explicar código a una máquina',
    'concepto.s1.p1': 'Todos hemos pasado por esto: buscas una solución en Stack Overflow, la encuentras en JavaScript, pero tu proyecto usa Rust. La copias, la adaptas, ajustas los tipos, buscas documentación de la librería, y después de veinte minutos tienes algo que funciona — o casi funciona.',
    'concepto.s1.p2': 'Un buscador no entiende tu contexto. Un tutorial asume que tu estructura de carpetas es igual a la del ejemplo. Un colega freelance que contrataste necesita una semana para entender tu arquitectura antes de contribuir algo útil. El problema no es la falta de información: es que toda esa información no está conectada a <em>tu</em> proyecto.',
    'concepto.s1.callout': 'El problema de la programación asistida no es la capacidad del modelo, sino la falta de contexto. Las herramientas que no leen tu código solo pueden darte respuestas genéricas.',
    'concepto.s2.heading': 'Entrada de los agentes CLI',
    'concepto.s2.p1': 'Un agente de código CLI es un programa que corre en tu terminal y usa inteligencia artificial para leer, entender y escribir código específico a tu proyecto. No es un chatbot que escribe ejemplos genéricos. Lee tu repositorio, interpreta tus convenciones, busca en tus archivos, y entiende relaciones entre módulos.',
    'concepto.s2.p2': 'Escribes un comando como:',
    'concepto.s2.list1': 'Navega tu repositorio completo',
    'concepto.s2.list2': 'Encuentra el módulo <code class="article-code">AuthModule</code>',
    'concepto.s2.list3': 'Lee su código actual y sus dependencias',
    'concepto.s2.list4': 'Entiende la estructura y el estilo del proyecto',
    'concepto.s2.list5': 'Propone dónde y cómo añadir validación',
    'concepto.s2.list6': 'Te muestra el diff antes de aplicar',
    'concepto.s2.list7': 'Aplica el cambio (opcionalmente) con tu aprobación',
    'concepto.s2.closing': 'La diferencia fundamental: el agente está anclado en la realidad de <em>tu</em> código, no en ejemplos de internet.',
    'concepto.s3.heading': 'Cómo funciona bajo el capó',
    'concepto.s3.intro': 'Un agente CLI no es solo una API de chat con una interfaz de terminal. Por detrás hay un sistema que coordina múltiples capacidades para entender y modificar código de forma precisa.',
    'concepto.s3.card1.heading': 'Lectura del repositorio',
    'concepto.s3.card1.desc': 'Lee archivos respetando <code class="article-code">.gitignore</code> y mantiene un modelo mental de la estructura del código.',
    'concepto.s3.card2.heading': 'Grafo de dependencias',
    'concepto.s3.card2.desc': 'Entiende cómo los módulos se importan entre sí y qué impacto tendría un cambio en una función concreta.',
    'concepto.s3.card3.heading': 'Lectura de errores',
    'concepto.s3.card3.desc': 'Lee mensajes del compilador, fallos de tests y stack traces, y los conecta con el código fuente correspondiente.',
    'concepto.s3.card4.heading': 'Generación con tu estilo',
    'concepto.s3.card4.desc': 'Genera código que respeta tus convenciones de nombres, indentación y arquitectura, no un template genérico.',
    'concepto.s4.heading': 'Por qué un agente CLI es diferente de un chatbot',
    'concepto.s4.intro': 'La confusión más común es tratar un agente CLI como un chatbot más sofisticado. No lo es. Son herramientas con propósitos, arquitecturas y casos de uso fundamentalmente distintos.',
    'concepto.s4.chatbot.heading': 'Chatbot tradicional',
    'concepto.s4.chatbot.subtitle': 'ej. ChatGPT sin plugins',
    'concepto.s4.chatbot.li1': 'Contesta preguntas generales',
    'concepto.s4.chatbot.li2': 'No tiene acceso a tu código fuente',
    'concepto.s4.chatbot.li3': 'No sabe dónde colocar el código',
    'concepto.s4.chatbot.li4': 'Escribe ejemplos genéricos: tú los integras',
    'concepto.s4.chatbot.li5': 'Cada pregunta empieza desde cero',
    'concepto.s4.cli.heading': 'Agente CLI',
    'concepto.s4.cli.subtitle': 'ej. Claude Code, Aider',
    'concepto.s4.cli.li1': 'Lee tu proyecto completo en tiempo real',
    'concepto.s4.cli.li2': 'Entiende tu arquitectura y convenciones',
    'concepto.s4.cli.li3': 'Sabe exactamente dónde colocar el código',
    'concepto.s4.cli.li4': 'Edita archivos directamente',
    'concepto.s4.cli.li5': 'Recuerda el contexto y prueba cambios',
    'concepto.s4.quote': 'Un chatbot es un asistente consultivo. Un agente CLI es un desarrollador junior que <em>ya conoce tu código</em>.',
    'concepto.s5.heading': 'Los casos de uso que funcionan hoy',
    'concepto.s5.intro': 'Estos patrones de uso están validados en producción. Funcionan porque tienen reglas claras y verificabilidad: los tests pasan o no, el código compila o no, el lint falla o no.',
    'concepto.s5.card1.heading': 'Refactoring',
    'concepto.s5.card1.desc': '«Migra este módulo de CommonJS a ES modules.» El agente entiende las dependencias y cambia todas las importaciones a la vez.',
    'concepto.s5.card2.heading': 'Bugfixes',
    'concepto.s5.card2.desc': '«El test <code class="article-code">auth.spec.ts</code> falla. Diagnostica y arregla.» El agente lee el error y busca la causa raíz.',
    'concepto.s5.card3.heading': 'Feature development',
    'concepto.s5.card3.desc': '«Añade un endpoint POST <code class="article-code">/api/users</code> que valide email.» El agente crea el handler, validación y tests.',
    'concepto.s5.card4.heading': 'Testing',
    'concepto.s5.card4.desc': '«Escribe tests unitarios para esta función.» El agente crea casos de prueba basados en el código real y sus casos límite.',
    'concepto.s5.card5.heading': 'Documentación',
    'concepto.s5.card5.desc': '«Regenera el README basándote en el código actual.» El agente inspecciona el repo y produce documentación actualizada.',
    'concepto.s5.card6.heading': 'Migraciones',
    'concepto.s5.card6.desc': '«Actualiza todas las importaciones de React 17 a React 18.» El agente actualiza sistemáticamente cada archivo afectado.',
    'concepto.s5.card7.heading': 'Security scanning',
    'concepto.s5.card7.desc': '«Busca hardcoded secrets o vulnerabilidades comunes.» El agente recorre el código buscando patrones inseguros conocidos en toda la base de código.',
    'concepto.s6.heading': 'Las limitaciones reales (qué no hace)',
    'concepto.s6.intro': 'No es magia. Entender los límites de los agentes CLI es tan importante como entender sus capacidades. Estas son las fronteras reales, documentadas por practitioners en producción:',
    'concepto.s6.lim1.heading': 'No inventa requisitos ambiguos',
    'concepto.s6.lim1.desc': 'Si le pides algo vago, pregunta. Esto es una ventaja: el agente te obliga a ser preciso en lo que necesitas antes de escribir una sola línea.',
    'concepto.s6.lim2.heading': 'No entiende hardware sin contexto explícito',
    'concepto.s6.lim2.desc': 'No puede optimizar para una arquitectura ARM, una FPGA o restricciones de memoria embebida sin que se lo expliques. El contexto físico es tuyo.',
    'concepto.s6.lim3.heading': 'No reemplaza a un arquitecto sénior',
    'concepto.s6.lim3.desc': 'Puede ayudarte a implementar una decisión arquitectónica, pero no debería tomarla por ti. Las decisiones de diseño siguen siendo responsabilidad humana.',
    'concepto.s6.lim4.heading': 'Límite de ventana de contexto',
    'concepto.s6.lim4.desc': 'Hay un límite en cuánto código puede entender en una sola sesión. En repositorios muy grandes, el agente trabaja con porciones relevantes, no el repo completo.',
    'concepto.s6.lim5.heading': 'Los cambios necesitan revisión humana',
    'concepto.s6.lim5.desc': 'Un agente propone; un humano aprueba. Nunca despliegues código generado por un agente sin haberlo revisado, especialmente en sistemas de producción.',
    'concepto.s7.heading': 'Cómo elegir uno para tu equipo',
    'concepto.s7.intro': 'No existe una herramienta universal. Cuatro preguntas te ayudan a descartar opciones y llegar a las que realmente encajan con tu contexto.',
    'concepto.s7.q1.label': 'Pregunta 1',
    'concepto.s7.q1.heading': '¿Cuál es tu lenguaje primario?',
    'concepto.s7.q1.desc': 'Algunos agentes son mejores con Python, otros con JavaScript/TypeScript, otros agnósticos. Elige uno que domine tu stack. Si trabajas en un monorepo multilenguaje, prioriza herramientas agnósticas de modelo.',
    'concepto.s7.q2.label': 'Pregunta 2',
    'concepto.s7.q2.heading': '¿Privacidad o velocidad?',
    'concepto.s7.q2.desc': '¿Necesitas que el código nunca salga de tu infraestructura? Herramientas con Ollama permiten modelos locales. ¿O prefieres velocidad y calidad máxima? Entonces una API en la nube (Anthropic, OpenAI, Google).',
    'concepto.s7.q3.label': 'Pregunta 3',
    'concepto.s7.q3.heading': '¿Un agente solo o orquestación?',
    'concepto.s7.q3.desc': '¿Necesitas un agente para tareas simples en tu flujo individual? Un CLI agent. ¿O necesitas coordinar varios agentes especializados en paralelo en el mismo proyecto? Un orquestador.',
    'concepto.s7.q4.label': 'Pregunta 4',
    'concepto.s7.q4.heading': '¿Presupuesto?',
    'concepto.s7.q4.desc': 'Algunos son gratuitos (Gemini CLI con 1.000 req/día, Aider con Ollama). Otros cobran por suscripción o por token de API. El costo por token importa mucho cuando trabajas con repositorios grandes.',
    'concepto.cta.heading': '¿Listo para explorar las herramientas?',
    'concepto.cta.body': 'Con los conceptos claros, es el momento de ver qué herramientas existen y cuál encaja mejor en tu flujo de trabajo.',
    'concepto.cta.btnCli': 'Ver agentes CLI',
    'concepto.cta.btnCasos': 'Ver casos de uso',

    /* ---- ruta-aprendizaje.html ---- */
    'rutaAprendizaje.meta.title': 'Ruta de Aprendizaje — Guía de Agentes IA',
    'rutaAprendizaje.meta.desc': 'Ruta de aprendizaje de 6 pasos para dominar los agentes de código IA: de los conceptos básicos a la orquestación avanzada con múltiples agentes en paralelo.',
    'rutaAprendizaje.hero.h1': 'Ruta de <span class="text-gradient">aprendizaje</span>',
    'rutaAprendizaje.hero.desc': '¿Por dónde empiezo? Esta es tu hoja de ruta: desde conceptos básicos hasta orquestación avanzada de agentes. Sigue los pasos en orden; cada uno te prepara para el siguiente. Haz clic en cualquier herramienta para ver sus detalles completos.',
    'rutaAprendizaje.objLabel': 'Objetivo',
    'rutaAprendizaje.toolsLabelEmpezar': 'Herramientas para empezar',
    'rutaAprendizaje.toolsLabelPracticar': 'Herramientas para practicar',
    'rutaAprendizaje.s1.heading': 'Entiende qué es un agente IA',
    'rutaAprendizaje.s1.desc': 'Un agente IA es software que percibe su entorno, planifica acciones y las ejecuta de forma autónoma para alcanzar un objetivo, sin necesidad de instrucciones manuales en cada paso. A diferencia de los chatbots que responden preguntas, los agentes entienden una tarea, deciden qué hacer, lo hacen y evalúan si lo lograron.',
    'rutaAprendizaje.s1.obj': 'Entender la idea fundamental de los agentes IA, cómo piensan, qué pueden hacer, y por qué son diferentes de los chatbots.',
    'rutaAprendizaje.s2.heading': 'Prueba un agente CLI en tu primer proyecto',
    'rutaAprendizaje.s2.desc': 'Los agentes CLI viven en tu terminal. Configuras una clave de API, le das una instrucción, y el agente planifica y ejecuta cambios en tu código. Aprendes a escribir prompts claros: las instrucciones exactas que el agente necesita para entender qué hacer.',
    'rutaAprendizaje.s2.obj': 'Cómo instalar, configurar y usar un agente IA en la línea de comandos. La experiencia «manos en el teclado» de trabajar con un agente.',
    'rutaAprendizaje.s3.heading': 'Automatiza tareas específicas de desarrollo',
    'rutaAprendizaje.s3.desc': 'Ya tienes un agente funcionando; ahora aprendes a pedirle tareas reales. Un bug que necesita investigación. Una función que hay que refactorizar. Un issue de GitHub que resolver. El agente no solo entiende tu código, sino el contexto del proyecto, las convenciones del equipo, la historia de las decisiones.',
    'rutaAprendizaje.s3.obj': 'Usar agentes para tareas concretas: corregir bugs, refactorizar código, resolver issues de GitHub, escribir tests.',
    'rutaAprendizaje.s4.heading': 'Coordina múltiples agentes en paralelo',
    'rutaAprendizaje.s4.desc': 'Un agente es potente. Varios agentes trabajando en paralelo son exponencialmente más productivos. Aprendes a dividir el trabajo: un agente refactoriza el módulo A, otro escribe tests, otro revisa, todo al mismo tiempo en ramas git independientes.',
    'rutaAprendizaje.s4.obj': 'Ejecutar varios agentes simultáneamente en el mismo proyecto. Trabajo de equipo entre máquinas: cada agente en su tarea, al mismo tiempo.',
    'rutaAprendizaje.s5.heading': 'Automatiza el backlog completo sin supervisión',
    'rutaAprendizaje.s5.desc': 'El siguiente nivel: no supervisas a los agentes; confías en que iteren hasta completar. Los agentes trabajan por la noche, durante el fin de semana, de forma autónoma. Requiere buena definición de tareas, puertas de calidad automáticas (tests, lint) que el agente respeta, y bucles que iteren hasta pasar todas las comprobaciones.',
    'rutaAprendizaje.s5.obj': 'Dejar agentes trabajando de forma completamente autónoma. Diseñar bucles que iteren hasta completar tareas sin intervención humana.',
    'rutaAprendizaje.s6.heading': 'Orquesta enjambres de agentes especializados',
    'rutaAprendizaje.s6.desc': 'En lugar de agentes genéricos que lo hacen todo, diseñas equipos: un agente que planifica la arquitectura, otro que implementa, otro que revisa, otro que prueba. La coordinación entre ellos es inteligente: cada uno sabe qué sabe y qué no sabe, y pide ayuda o delega cuando es necesario.',
    'rutaAprendizaje.s6.obj': 'La arquitectura avanzada: múltiples agentes especializados (arquitecto, implementador, testero) que colaboran como un equipo de ingenieros.',
    'rutaAprendizaje.cta.heading': '¿Listo para el siguiente nivel?',
    'rutaAprendizaje.cta.body': 'Consulta los casos de uso reales para saber qué herramienta encaja mejor en tu proyecto específico.',
    'rutaAprendizaje.cta.button': 'Ver casos de uso →',

    /* ---- glosario-faq.html ---- */
    'glosarioFaq.meta.title': 'Glosario y FAQ — Guía de Agentes IA',
    'glosarioFaq.meta.desc': 'Diccionario de términos y preguntas frecuentes sobre agentes de código CLI y orquestadores de IA. Todo lo que necesitas saber para empezar.',
    'glosarioFaq.hero.badge': 'Referencia rápida',
    'glosarioFaq.hero.h1': 'Glosario y <span class="text-gradient">preguntas frecuentes</span>',
    'glosarioFaq.hero.desc': 'Todos los términos del ecosistema de agentes IA explicados con claridad, más las respuestas a las dudas que surgen siempre al empezar.',
    'glosarioFaq.hero.ctaGlosario': 'Ver glosario',
    'glosarioFaq.hero.ctaFaq': 'Preguntas frecuentes',
    'glosarioFaq.stats.terminosLabel': 'términos definidos',
    'glosarioFaq.stats.preguntasLabel': 'preguntas respondidas',
    'glosarioFaq.stats.tiempoLabel': 'para leer todo',
    'glosarioFaq.glosario.heading': 'Glosario',
    'glosarioFaq.glosario.subtitle': 'Los 20 términos esenciales del ecosistema de agentes IA',
    'glosarioFaq.glosario.sidebar.index': 'Índice del glosario',
    'glosarioFaq.glosario.sidebar.ctaHeading': '¿Quieres más detalle?',
    'glosarioFaq.glosario.sidebar.ctaBody': 'Lee el artículo completo sobre cómo funcionan los agentes IA por dentro.',
    'glosarioFaq.glosario.sidebar.ctaButton': 'Leer artículo →',
    'glosarioFaq.glosario.header.count': '20 términos',
    'glosarioFaq.glosario.header.updated': 'Actualizado junio 2026',
    'glosarioFaq.faq.heading': 'Preguntas frecuentes',
    'glosarioFaq.faq.subtitle': 'Las 14 dudas más comunes al empezar con agentes IA',
    'glosarioFaq.faq.q1': '¿Qué diferencia hay entre un CLI agent y un orquestador?',
    'glosarioFaq.faq.a1': 'Un agente CLI ejecuta una tarea de principio a fin: un solo agente trabaja en el problema. Un orquestador coordina múltiples agentes trabajando en paralelo o en cadena. Los agentes CLI son más sencillos de empezar; los orquestadores escalan para proyectos grandes donde un agente solo no basta.',
    'glosarioFaq.faq.q2': '¿Cuál es la herramienta más barata para empezar?',
    'glosarioFaq.faq.a2': 'Gemini CLI es la más accesible: Google ofrece 1.000 peticiones diarias gratis. Si quieres totalmente gratuito incluyendo sin costes de API, Ollama te deja ejecutar modelos locales en tu ordenador: combinado con herramientas de código abierto como Aider o Goose, cuesta cero euros.',
    'glosarioFaq.faq.q3': '¿Necesito suscripción a Claude para usar Claude Code?',
    'glosarioFaq.faq.a3': 'Claude Code tiene un plan Free limitado, pero para uso serio necesitas Claude Pro ($20/mes) o Claude Max ($100–200/mes). Si prefieres no pagar, Gemini CLI, Aider con Ollama, o Open Interpreter con modelos locales son opciones gratuitas.',
    'glosarioFaq.faq.q4': '¿Cuál es el agente más poderoso en 2026?',
    'glosarioFaq.faq.a4': 'Claude Code (basado en Claude 3.7 Opus) y OpenCode (soporta 75+ proveedores) son los más potentes en raw capability. Para casos de uso específicos: SWE-agent para resolver issues de GitHub, OpenHands para automatizar flujos completos de ingeniería, Plandex para planificación estratégica.',
    'glosarioFaq.faq.q5': '¿Puedo usar estos agentes sin suscripción?',
    'glosarioFaq.faq.a5': 'Sí. Opciones completamente gratuitas: Gemini CLI (1.000 peticiones/día), cualquier herramienta de código abierto (Aider, OpenCode, Goose, gptme) combinada con modelos locales vía Ollama, y herramientas propias como Open Interpreter con modelos accesibles.',
    'glosarioFaq.faq.q6': '¿Qué es el «Ralph Wiggum Loop» que veo mencionado?',
    'glosarioFaq.faq.a6': 'Es un patrón de bucle autónomo donde el agente itera indefinidamente: intenta, falla, aprende, reintenta, hasta completar la tarea. Llamado así por un chiste interno; herramientas como ralph-orchestrator, wreckit y kodo lo implementan.',
    'glosarioFaq.faq.q7': '¿Cómo elijo entre múltiples agentes si tengo pocas peticiones gratis?',
    'glosarioFaq.faq.a7': 'Empieza con Gemini CLI (1.000 diarias) para familiarizarte. Luego, elige según tu proveedor preferido: si usas Anthropic, Claude Code; si OpenAI, Codex CLI; si Google, Gemini CLI. O usa Aider con Ollama (completamente local, sin coste de API).',
    'glosarioFaq.faq.q8': '¿Es seguro dejar agentes trabajando de forma autónoma por la noche?',
    'glosarioFaq.faq.a8': 'Es seguro si defines bien tus tareas, tienes tests que el agente respeta, y el agente solo modifica lo que debería modificar. Herramientas como wreckit usan modo sandbox con microVM Firecracker para mayor aislamiento. Siempre revisa el primer resultado antes de confiar en ejecuciones largas desatendidas.',
    'glosarioFaq.faq.q9': '¿Puedo usar varios agentes a la vez en el mismo proyecto?',
    'glosarioFaq.faq.a9': 'Sí, así funciona la orquestación. Cada agente trabaja en una rama git aislada (worktree), evitando conflictos. Herramientas como claude-squad y cmux hacen esto automáticamente. Los agentes se coordinan a través del código: uno lee lo que escribió el otro, lo mejora, etc.',
    'glosarioFaq.faq.q10': '¿Cuál es el benchmark más fiable para comparar agentes?',
    'glosarioFaq.faq.a10': 'SWE-bench es el estándar: evalúa agentes en resolver issues reales de repositorios de código abierto en GitHub. Los porcentajes publicados (84,8% para claude-flow, 74% para mini-SWE-agent) son comparables entre herramientas y reflejan desempeño real.',
    'glosarioFaq.faq.q11': '¿Necesito saber programar para usar agentes IA?',
    'glosarioFaq.faq.a11': 'No es obligatorio, pero ayuda. Herramientas como Open Interpreter son muy accesibles para principiantes: das instrucciones en lenguaje natural. Pero entender código básico te permite escribir mejores prompts y revisar lo que el agente produce.',
    'glosarioFaq.faq.q12': '¿Puedo usar agentes IA para tareas que no sean programación?',
    'glosarioFaq.faq.a12': 'La mayoría están diseñadas para ingeniería de software. Pero algunos como gptme y Open Interpreter pueden ejecutar código en tu ordenador para análisis de datos, automatización, etc. Herramientas más generales como Hermes Agent o Warp van más allá de la programación.',
    'glosarioFaq.faq.q13': '¿Cómo gestiono el coste si dejo agentes trabajando autónomamente?',
    'glosarioFaq.faq.a13': 'Establece límites de presupuesto con tu proveedor de IA (Anthropic, OpenAI, Google lo permiten). Alterna entre BYOK (pagas directamente al proveedor) si quieres control fino. O usa Ollama con modelos locales para operaciones extensas sin coste de API.',
    'glosarioFaq.faq.q14': '¿Qué herramienta me recomiendan para mi primer proyecto con agentes?',
    'glosarioFaq.faq.a14': 'Empieza con Claude Code o Cline (VS Code): tienes contexto del repositorio y comprensión de calidad alta. O Gemini CLI si prefieres ahorrar dinero. Una vez cómodo, explora orquestadores como claude-squad para múltiples agentes.',
    'glosarioFaq.tip.heading': '¿Tienes una pregunta que no está aquí?',
    'glosarioFaq.tip.body': 'Lee el artículo conceptual completo o visita la página de créditos y fuentes donde encontrarás los repositorios originales con documentación extensa.',
    'glosarioFaq.tip.btnConcepto': 'Artículo conceptual →',
    'glosarioFaq.tip.btnFuentes': 'Fuentes y créditos →',
    'glosarioFaq.cta.heading': '¿Listo para empezar?',
    'glosarioFaq.cta.body': 'Consulta el catálogo de herramientas disponibles o sigue la ruta de aprendizaje paso a paso.',
    'glosarioFaq.cta.btnCli': 'Ver agentes CLI →',
    'glosarioFaq.cta.btnRuta': 'Ruta de aprendizaje →',

    /* ---- acerca.html ---- */
    'acerca.meta.title': 'Acerca — Guía de Agentes IA',
    'acerca.meta.desc': 'Qué es la Guía de Agentes IA, a quién va dirigida, sus fuentes y cómo contribuir a este proyecto de comunidad abierta.',
    'acerca.hero.h1': 'Acerca de <span class="text-gradient">esta guía</span>',
    'acerca.hero.desc': 'Una guía abierta para desarrolladores que quieren entender agentes de código CLI y orquestadores. No es un tutorial paso a paso; es un mapa mental. Explica conceptos, categorías y cómo elegir herramientas.',
    'acerca.s1.heading': 'Qué es esto',
    'acerca.s1.p1': 'Una guía abierta para desarrolladores que quieren entender agentes de código CLI y orquestadores. No es un tutorial paso a paso; es un mapa mental. Explica conceptos, categorías y cómo elegir herramientas en un ecosistema que evoluciona rápidamente.',
    'acerca.s1.p2': 'Las herramientas que cubre esta guía transforman la forma en que se escribe software: permiten que un único desarrollador trabaje con la velocidad de un equipo, o que un equipo trabaje con la escala de una organización. Entender cuándo y cómo usarlas es la competencia clave de 2026.',
    'acerca.s2.heading': 'A quién va dirigida',
    'acerca.s2.intro': 'Desarrolladores que:',
    'acerca.s2.li1': 'Ya saben programar y quieren entender cómo la IA puede ampliar lo que pueden hacer solos',
    'acerca.s2.li2': 'Están curiosos sobre IA en el desarrollo de software sin querer convertirse en expertos en modelos',
    'acerca.s2.li3': 'Quieren entender la diferencia entre un chatbot y un agente CLI, y por qué esa diferencia importa en la práctica',
    'acerca.s2.li4': 'Necesitan decidir si adoptar estas herramientas en su equipo y quieren comparar opciones sin jerga técnica innecesaria',
    'acerca.s2.closing': 'No necesitas saber cómo entrenar un modelo o cómo funcionan los transformers. Solo necesitas estar abierto a nuevas formas de trabajar.',
    'acerca.s3.heading': 'Créditos y fuentes',
    'acerca.s3.intro': 'Esta guía se inspira en investigación comunitaria de dos repositorios clave de GitHub, mantenidos por la comunidad de desarrolladores interesados en el ecosistema de agentes de código:',
    'acerca.s3.repo1.desc': 'Catálogo comunitario de herramientas para orquestar agentes de código. Incluye categorías, comparativas y ejemplos de uso de los principales orquestadores del ecosistema.',
    'acerca.s3.repo2.desc': 'Lista comunitaria de agentes de código CLI existentes, con descripciones, licencias y métricas de adopción. La referencia principal del catálogo de agentes CLI de esta guía.',
    'acerca.s3.closing': 'Ambos son proyectos comunitarios donde puedes ver categorías, comparativas y ejemplos de uso actualizados por la comunidad.',
    'acerca.s4.heading': '¿Cómo contribuir?',
    'acerca.s4.intro': 'Si encuentras un error, quieres añadir una sección, o tienes una pregunta que no está respondida, esta guía es tuya también:',
    'acerca.s4.step1.heading': 'Abre un issue en el repositorio',
    'acerca.s4.step1.desc': 'Describe el error, la sección faltante o la pregunta sin respuesta. Los issues son la forma más rápida de señalar algo que mejorar.',
    'acerca.s4.step2.heading': 'Contribuye con un pull request',
    'acerca.s4.step2.desc': 'Si tienes la corrección o el contenido nuevo, abre directamente un PR. Incluye el contexto del cambio y las fuentes si aplica.',
    'acerca.s4.step3.heading': 'Sugiere mejoras a través de una discusión',
    'acerca.s4.step3.desc': 'Para cambios grandes o ideas de dirección, abre una discusión antes de implementar. Es más rápido alinear antes de escribir.',
    'acerca.community.heading': 'Esta guía es comunidad.',
    'acerca.community.body': 'Esperamos tus aportaciones.'
  };

  /* ─── Diccionario EN (esqueleto). Andy rellena cada clave espejo. ─────────── */
  /* Si una clave falta aquí, el loader cae al ES (nunca se ve la clave cruda). */
  window.I18N_EN = window.I18N_EN || {
    'nav.brand': 'Agents Guide',
    'nav.inicio': 'Home',
    'nav.agentesCli': 'CLI Agents',
    'nav.orquestadores': 'Orchestrators',
    'nav.comparativa': 'Comparison',
    'nav.aprender': 'Learn',
    'nav.casosUso': 'Use cases',
    'nav.ruta': 'Learning path',
    'nav.conceptos': 'Concepts',
    'nav.glosarioFaq': 'Glossary & FAQ',
    'nav.acerca': 'About',
    'nav.menu': 'Menu',
    'nav.catalogo': 'Catalog',
    'nav.navegacion': 'Navigation',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.principalLabel': 'Main navigation',
    'nav.drawerLabel': 'Navigation menu',
    'nav.langGroup': 'Idioma / Language',
    'footer.title': 'AI Agents Guide',
    'footer.tagline': 'An open guide for developers who want to understand CLI coding agents and orchestrators.',
    'footer.fecha': 'Data as of June 2026',
    'common.cerrar': 'Close',
    'ui.verDetalle': 'View details',
    'ui.repo': 'Repo ↗',
    'ui.comoEmpezarFallback': 'Check the project’s official documentation.',
    'ui.desconocido': 'Unknown',
    'ui.col.herramienta': 'Tool',
    'ui.col.categoria': 'Category',
    'ui.col.estrellas': 'Stars',
    'ui.col.precio': 'Price',
    'ui.col.lenguaje': 'Language',
    'ui.col.primerPaso': 'First step',
    'index.meta.title': 'AI Agents Guide — CLI & Orchestrators',
    'index.meta.desc': 'A complete guide to CLI coding agents and AI orchestrators. Discover the 30 most popular tools, compare them, and learn which one to use.',
    'index.hero.badge': '30 tools · updated June 2026',
    'index.hero.title': 'Automate your coding workflow with <span class="text-gradient">AI agents</span>',
    'index.hero.subtitle': 'Discover how CLI coding agents and orchestrators are transforming the way you write, debug, and ship your software.',
    'index.hero.ctaPrimary': 'Explore CLI Agents',
    'index.hero.ctaSecondary': 'Learning path',
    'index.intro.body': 'Coding agents are artificial-intelligence tools that understand your repository, read errors, propose changes, and run complex tasks from the command line. Instead of writing step-by-step instructions, you describe what you need and the agent does it. This guide teaches you what they are, how they work, and which one to choose for your team.',
    'index.routes.heading': 'Two paths, one goal'
  };

  /* ─── Núcleo del loader ───────────────────────────────────────────────────── */
  var STORE_KEY = 'guia_lang';

  function dict(lang) { return lang === 'en' ? window.I18N_EN : window.I18N_ES; }

  function resolveLang() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q === 'es' || q === 'en') return q;
      var stored = localStorage.getItem(STORE_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch (e) { /* file:// puede restringir storage; cae a navigator */ }
    var nav = ((navigator && navigator.language) || 'es').toLowerCase();
    return nav.indexOf('es') === 0 ? 'es' : 'en';
  }

  function translate(key, lang) {
    var d = dict(lang);
    if (d && Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    var es = window.I18N_ES; /* fallback al idioma origen */
    if (es && Object.prototype.hasOwnProperty.call(es, key)) return es[key];
    return key; /* último recurso: la clave (señal visible de string sin sembrar) */
  }

  function selectData(lang) {
    if (window.GUIA_DATA_EN || window.GUIA_DATA_ES) {
      window.GUIA_DATA = (lang === 'en' && window.GUIA_DATA_EN) ? window.GUIA_DATA_EN
                       : (window.GUIA_DATA_ES || window.GUIA_DATA);
    }
    if (window.GUIA_V3_EN || window.GUIA_V3_ES) {
      window.GUIA_V3 = (lang === 'en' && window.GUIA_V3_EN) ? window.GUIA_V3_EN
                     : (window.GUIA_V3_ES || window.GUIA_V3);
    }
  }

  function applyDom(root, lang) {
    root = root || document;
    /* textContent */
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = translate(el.getAttribute('data-i18n'), lang);
    });
    /* innerHTML (texto con HTML interno permitido) */
    root.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = translate(el.getAttribute('data-i18n-html'), lang);
    });
    /* atributos: "aria-label:clave;title:otraClave" */
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var attr = pair.slice(0, i).trim();
        var key = pair.slice(i + 1).trim();
        if (attr) el.setAttribute(attr, translate(key, lang));
      });
    });
    /* <title> especial: nodo <title data-i18n="..."> ya cubierto por textContent.
       Si se prefiere mantener un title fijo + clave aparte, usar data-i18n en <title>. */
  }

  function markToggle(lang) {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  var I18N = {
    lang: 'es',
    t: function (key) { return translate(key, I18N.lang); },
    apply: function (root) { applyDom(root, I18N.lang); },
    set: function (lang) {
      if (lang !== 'es' && lang !== 'en') return;
      I18N.lang = lang;
      try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
      document.documentElement.lang = lang;
      selectData(lang);
      applyDom(document, lang);
      markToggle(lang);
      if (typeof window.rerenderDynamic === 'function') window.rerenderDynamic();
    }
  };
  window.I18N = I18N;

  /* ─── Arranque: corre antes del render de app.js ──────────────────────────── */
  var lang = resolveLang();
  I18N.lang = lang;
  document.documentElement.lang = lang;
  selectData(lang);                 /* datos activos listos para app.js */
  function boot() {
    applyDom(document, lang);
    markToggle(lang);
    /* Delegación del toggle (funciona aunque Pam lo inserte en varios sitios) */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.lang-toggle [data-lang]');
      if (!btn) return;
      e.preventDefault();
      I18N.set(btn.getAttribute('data-lang'));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
