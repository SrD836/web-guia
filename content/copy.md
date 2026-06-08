# Web Guía — Contenido Completo

## SECCIÓN 1: Página de Inicio (index)

### Hero Headline
Automatiza tu flujo de código con agentes de IA

### Subheadline
Descubre cómo los agentes de código CLI y orquestadores transforman la forma en que escribes, debugueas y despliega tu software.

### Párrafo Introducción
Los agentes de código son herramientas de inteligencia artificial que entienden tu repositorio, leen errores, proponen cambios y ejecutan tareas complejas desde la línea de comandos. En lugar de escribir instrucciones paso a paso, describes qué necesitas y el agente lo hace. Esta guía te enseña qué son, cómo funcionan y cuál elegir para tu equipo.

### Tarjeta Ruta 1: Agentes de Código CLI
Herramientas autónomas que corren en tu terminal y pueden leer código, entender errores y escribir soluciones. Perfectas para desarrolladores que quieren automatizar tareas repetitivas sin dejar el terminal.

### Tarjeta Ruta 2: Orquestadores
Plataformas que coordinan múltiples agentes en paralelo, con loops autónomos y decisiones inteligentes. Para equipos que necesitan orquestar workflows complejos donde un solo agente no es suficiente.

### Ruta de Aprendizaje — 3 Pasos

**Paso 1: Entender los conceptos**
Aprende qué es un agente de código CLI, por qué es diferente de un chatbot normal y cuáles son los casos de uso reales.

**Paso 2: Explorar categorías**
Descubre cuatro tipos de orquestadores: runners paralelos para ejecutar tareas independientes rápidamente, swarms multi-agente que coordinan agentes especializados, loops autónomos que repiten estrategias hasta lograr el objetivo, y asistentes personales que aprenden tu estilo.

**Paso 3: Elegir tu herramienta**
Con los conceptos claros, decides cuál utilizar: ¿necesitas un agente simple para tu equipo? ¿Un orquestador que escale? Aquí te contamos qué preguntas hacer.

### Nota de Pie
Una guía abierta para desarrolladores que quieren entender la IA en ingeniería de software. Última actualización: junio de 2026.

---

## SECCIÓN 2: Página Agentes CLI (agentes-cli)

### Headline
¿Qué es un agente de código CLI?

### Contenido Principal

Un agente de código CLI es un programa que corre en tu terminal y usa inteligencia artificial para entender y modificar código. A diferencia de los chatbots tradicionales, un agente CLI lee tu proyecto, interpreta errores, propone cambios concretos y, si se lo pides, los aplica directamente a tus archivos.

Por ejemplo: escribes `claude fix-this-bug`. El agente lee tu código, busca el error, entiende el contexto del proyecto, escribe una solución y te la muestra. Tú la revisas y apruebas. Sin intermediarios, sin copiar y pegar entre ventanas.

**¿Por qué usarlo?**

Porque ahorra el paso más lento de la programación: traducir una idea vaga en código específico. Un agente CLI lee errores que un buscador de Google no entiende. Sabe dónde va el código en tu proyecto, respeta tu estilo de escritura y pregunta cuando hay ambigüedad.

**¿Cómo empezar?**

Instalas la herramienta en tu terminal. Luego abres tu proyecto y ejecutas comandos. No necesitas saber cómo funciona la IA por dentro; solo necesitas describir qué quieres: "añade tests para esta función", "refactoriza este módulo", "corrige este tipo en TypeScript". El agente hace el trabajo y tu equipo revisa el código antes de merge.

**Casos reales:**

- Un desarrollador arregla un bug en cinco minutos en lugar de una hora.
- Un equipo pequeño añade tests sin necesidad de un QA dedicado.
- Documentación desactualizada se regenera automáticamente.
- Migraciones de código (ej. cambiar de librería) se automatizan.

La mayoría de agentes CLI hoy funcionan con Claude, GPT-4 u otros modelos grandes. Algunos corren localmente; otros necesitan una conexión a una API. La diferencia está en la privacidad, el costo y la velocidad.

---

## SECCIÓN 3: Página Orquestadores (orquestadores)

### Headline
Orquestar múltiples agentes: 4 patrones

### Contenido Principal

Cuando un solo agente no es suficiente, necesitas coordinar varios agentes especializados. Aquí hay cuatro formas de hacerlo:

**1. Runners paralelos**

Un orquestador lanza N agentes al mismo tiempo, cada uno con una tarea independiente. Por ejemplo: ejecuta tests, analiza cobertura, revisa seguridad, y genera documentación, todo en paralelo. Cuando todos terminan, el orquestador combina los resultados. Es rápido y eficiente para tareas que no dependen una de la otra.

**2. Swarms multi-agente**

Varios agentes especializados trabajan en secuencia. Uno revisa la arquitectura, otro escribe el código, otro lo prueba, otro lo documenta. Cada agente es un experto en su rol. El orquestador pasa el trabajo de uno al siguiente y asegura que cada paso sea validado antes de continuar.

**3. Loops autónomos**

Un orquestador ejecuta un ciclo: el agente identifica un problema, propone una solución, la prueba, y si falla, lo intenta de nuevo. Sin intervención humana entre intentos. Útil para refactorings complejos o migraciones donde la solución correcta no es obvia desde el inicio.

**4. Asistentes personales**

Un agente que aprende tu código base, tu estilo, tus preferencias y tus atajos. Conforme lo usas, se adapta. Entiende tu arquitectura sin que tengas que explicarla cada vez. Es como tener un desarrollador sénior que se toma el tiempo de entender antes de trabajar.

---

## SECCIÓN 4: Artículo Concepto — ¿Qué es un agente de código CLI?

### Headline
¿Qué es un agente de código CLI y por qué está cambiando la ingeniería de software?

### Tabla de Contenidos
1. La frustración de explicar código a una máquina
2. Entrada de los agentes CLI
3. Cómo funciona bajo el capó
4. Por qué un agente CLI es diferente de un chatbot
5. Los casos de uso que funcionan hoy
6. Las limitaciones reales (qué no hace)
7. Cómo elegir uno para tu equipo

### Contenido

**1. La frustración de explicar código a una máquina**

Todos hemos pasado por esto: buscas una solución en Stack Overflow, la encuentras en JavaScript, pero tu proyecto usa Rust. La copias, la adaptas, ajustas los tipos, buscas documentación de la librería, y después de veinte minutos tienes algo que funciona—o casi funciona.

Un buscador no entiende tu contexto. Un tutorial asume que tu estructura de carpetas es igual a la del ejemplo. Un colega freelance que contrataste necesita una semana para entender tu arquitectura antes de contribuir algo útil.

**2. Entrada de los agentes CLI**

Un agente de código CLI es un programa que corre en tu terminal y usa inteligencia artificial para leer, entender y escribir código específico a tu proyecto. No es un chatbot que escribe ejemplos genéricos. Lee tu repositorio, interpreta tus convenciones, busca en tus archivos, y entiende relaciones entre módulos.

Escribes un comando como:

```
claude add-validation to AuthModule
```

El agente:
- Navega tu repo
- Encuentra AuthModule
- Lee su código actual
- Entiende su estructura y dependencias
- Propone dónde añadir validación
- Te muestra el cambio
- (Opcionalmente) lo aplica

**3. Cómo funciona bajo el capó**

El agente no es solo una API de chat. Por detrás:

- Lee archivos de tu proyecto (respetando .gitignore)
- Mantiene un modelo mental de la estructura del código
- Entiende dependencias entre módulos
- Lee mensajes de error del compilador o tests
- Usa razonamiento para elegir dónde trabajar
- Genera código que respeta tu estilo

La diferencia con un chatbot es que el agente está anclado en la realidad de tu código, no en ejemplos de internet.

**4. Por qué un agente CLI es diferente de un chatbot**

**Chatbot tradicional (ej. ChatGPT):**
- Contesta preguntas generales
- No tiene acceso a tu código
- No sabe dónde ponerlo
- Escribe ejemplos—tú tienes que integrarlos
- Cada pregunta es nueva; no recuerda contexto

**Agente CLI (ej. Claude Code):**
- Lee tu proyecto completo
- Entiende tu arquitectura y convenciones
- Sabe exactamente dónde poner el código
- Edita archivos directamente
- Recuerda el contexto mientras trabaja
- Prueba cambios antes de terminar

Un chatbot es un asistente consultivo. Un agente CLI es un desarrollador junior que conoce tu código.

**5. Los casos de uso que funcionan hoy**

- **Refactoring**: "Migra este módulo de CommonJS a ES modules."
- **Bugfixes**: "El test `auth.spec.ts` falla. Diagnostica y arregla."
- **Feature development**: "Añade un endpoint POST `/api/users` que valide email."
- **Testing**: "Escribe tests unitarios para esta función."
- **Documentación**: "Regenera el README basándote en el código actual."
- **Migraciones**: "Actualiza todas las importaciones de React 17 a React 18."
- **Security scanning**: "Busca hardcoded secrets o vulnerabilidades comunes."

Estos funcionan porque tienen reglas claras y verificabilidad (tests pasan o no, el código compila o no).

**6. Las limitaciones reales (qué no hace)**

No es magia. Un agente CLI tiene límites:

- No inventa requisitos si no son claros. Si le pides algo ambiguo, pregunta.
- No entiende hardware (no puede optimizar para una arquitectura ARM sin decírselo).
- No reemplaza un arquitecto sénior. Puede ayudarte a implementar una decisión arquitectónica, pero no debería tomarla por ti.
- No escala infinitamente. Hay un límite en cuánto código puede entender en una sola conversación (depende del modelo).
- Los cambios necesitan revisión humana. Un agente propone; un humano aprueba.

**7. Cómo elegir uno para tu equipo**

**Pregunta 1**: ¿Cuál es tu lenguaje primario?
Algunos agentes son mejores con Python, otros con JavaScript, otros agnósticos. Elige uno que domine tu stack.

**Pregunta 2**: ¿Privacidad o velocidad?
¿Necesitas que el código nunca salga de tu infra (local)? ¿O prefieres algo rápido que use una API?

**Pregunta 3**: ¿Un agente solo o orquestación?
¿Necesitas un agente para tareas simples? ¿O necesitas coordinar varios agentes especializados en paralelo?

**Pregunta 4**: ¿Presupuesto?
Algunos son gratuitos, otros por API calls, otros por suscripción. El costo por token importa cuando trabajas con repos grandes.

---

## SECCIÓN 5: Página Acerca (acerca)

### Headline
Acerca de esta guía

### Contenido

**Qué es esto**

Una guía abierta para desarrolladores que quieren entender agentes de código CLI y orquestadores. No es un tutorial paso a paso; es un mapa mental. Explica conceptos, categorías y cómo elegir herramientas.

**A quién va dirigido**

Desarrolladores que:
- Ya saben programar
- Están curiosos sobre IA en desarrollo
- Quieren entender la diferencia entre un chatbot y un agente CLI
- Necesitan decidir si adoptar estas herramientas en su equipo
- Quieren comparar opciones sin jargón técnico innecesario

No necesitas saber cómo entrenar un modelo o cómo funcionan los transformers. Solo necesitas estar abierto a nuevas formas de trabajar.

**Créditos y fuentes**

Esta guía se inspira en investigación comunitaria de dos repositorios clave:

- **[andyrewlee/awesome-agent-orchestrators](https://github.com/andyrewlee/awesome-agent-orchestrators)** — Catálogo de herramientas para orquestar agentes.
- **[bradAGI/awesome-cli-coding-agents](https://github.com/bradAGI/awesome-cli-coding-agents)** — Lista de agentes de código CLI existentes.

Ambos son proyectos comunitarios donde puedes ver categorías, comparativas y ejemplos de uso.

**¿Cómo contribuir?**

Si encuentras un error, quieres añadir una sección, o tienes una pregunta:

- Abre un issue en el repositorio correspondiente (arriba).
- Contribuye directamente con un pull request.
- Sugiere mejoras a través de una discusión.

Esta guía es comunidad. Esperamos tus aportaciones.

---

**Datos a fecha de junio de 2026**

---

# COPY v3

---

# Página: Comparativa

## Encabezado
En esta página encontrarás una comparación lado a lado de los 30 agentes CLI y orquestadores disponibles actualmente. Filtra por categoría, ordena por estrellas en GitHub, y usa cada herramienta para decidir cuál se ajusta mejor a tus necesidades.

---

# Página: Casos de Uso

## Encabezado
¿Qué herramienta me conviene para mi necesidad? Esta página responde esa pregunta con ejemplos prácticos y recomendaciones.

---

## Caso de uso 1: Corregir un bug en mi código

Tienes un error concreto en tu proyecto y necesitas ayuda para entenderlo y solucionarlo rápidamente, sin modificar el código que funciona correctamente.

**Herramientas recomendadas:** Aider, Claude Code, Cline

Aider destaca por sus ediciones precisas mediante parches: no reescribe archivos completos, solo los cambios necesarios para corregir el bug. Claude Code entiende el repositorio completo para encontrar la causa raíz del problema. Cline integra todo esto directamente en VS Code si ese es tu editor.

---

## Caso de uso 2: Programar sin pagar suscripciones

Buscas herramientas completamente gratuitas para aprender o trabajar sin comprometer tu presupuesto.

**Herramientas recomendadas:** Gemini CLI, Goose, Aider, OpenCode, gptme

Gemini CLI es el más accesible: Google ofrece 1.000 peticiones diarias gratis con tu cuenta personal. Goose y Aider son código abierto Apache 2.0 y funcionan con Ollama, que te deja usar modelos de IA locales sin pagar API. OpenCode y gptme también son gratuitos y soportan múltiples proveedores, incluyendo modelos locales.

---

## Caso de uso 3: Quiero IA integrada en VS Code sin abandonar mi editor

No quieres abrir otra ventana o terminal para interactuar con el agente IA, prefieres que funcione donde ya escribes código.

**Herramientas recomendadas:** Cline, GitHub Copilot CLI

Cline es la extensión de VS Code más popular del ecosistema con 3,85 millones de instalaciones, completamente gratuita y multiproveedor. Si tu equipo ya usa GitHub, GitHub Copilot CLI complementa el flujo desde el mismo editor con integración nativa.

---

## Caso de uso 4: Aprender a programar con asistencia IA

Eres principiante y necesitas un asistente paciente que explique qué hace en cada paso y cómo funciona el código.

**Herramientas recomendadas:** Open Interpreter, Claude Code, Gemini CLI

Open Interpreter usa lenguaje natural puro: describes qué quieres en español y ejecuta el código explicándote cada paso. Claude Code tiene una calidad de razonamiento superior y es muy accesible para principiantes. Gemini CLI es gratis para explorar sin complicaciones de API.

---

## Caso de uso 5: Implementar una funcionalidad grande que afecta múltiples archivos

La tarea es compleja: requiere cambios en varios módulos, coordinar esos cambios y asegurar que todo encaja.

**Herramientas recomendadas:** Plandex, Claude Code, OpenHands

Plandex planifica antes de actuar: diseña un plan paso a paso antes de tocar el código, con una ventana de contexto de 2 millones de tokens. Claude Code mantiene el contexto del repositorio completo para entender cómo tus cambios afectan al proyecto. OpenHands ejecuta tareas completas de ingeniería de software de forma autónoma.

---

## Caso de uso 6: Resolver issues de GitHub de forma automática

Tienes un backlog de bugs o mejoras reportados en GitHub y quieres automatizar su resolución.

**Herramientas recomendadas:** SWE-agent, OpenHands

SWE-agent está especializado exactamente en esto, presentado en NeurIPS 2024 como referencia académica para resolver issues de repositorios de código abierto. OpenHands también lo hace de forma completamente autónoma, con opción de usar su interfaz cloud con créditos gratuitos iniciales.

---

## Caso de uso 7: Ejecutar varios agentes en paralelo para acelerar el trabajo

Quieres que múltiples agentes trabajen simultáneamente en diferentes tareas del mismo proyecto para terminar más rápido.

**Herramientas recomendadas:** claude-squad, cmux, vibe-kanban

claude-squad es el más sencillo de instalar: un solo comando y tienes múltiples sesiones de agentes coordinadas. cmux ofrece más control si ya usas tmux. vibe-kanban tiene la interfaz visual más intuitiva para ver el progreso de todos en un Kanban.

---

## Caso de uso 8: Automatizar el backlog del proyecto sin supervisión

Quieres que los agentes trabajen de forma completamente autónoma mientras no estás: por la noche, durante el fin de semana, sin que tú tengas que intervenir.

**Herramientas recomendadas:** wreckit, ralph-orchestrator, kodo

wreckit ejecuta el flujo completo: idea → investigación → plan → implementación → pull request → entrega, todo de forma autónoma. ralph-orchestrator mantiene agentes en bucles automáticos con puertas de calidad que bloquean trabajo incompleto. kodo puede mantener el trabajo autónomo hasta 8 horas seguidas sin intervención.

---

## Caso de uso 9: Terminal moderno con IA sin configuración adicional

Quieres reemplazar tu terminal antiguo con uno que ya venga con capacidades de IA integradas desde el primer arranque.

**Herramientas recomendadas:** Warp, Crush

Warp reescribió el terminal desde cero con renderizado GPU y agente IA integrado: no necesitas configurar nada extra. Crush ofrece una interfaz elegante con contexto LSP que le permite al agente entender tipos y referencias del código con precisión de compilador.

---

## Caso de uso 10: Coordinar agentes a escala empresarial

Tu equipo completo quiere aprovechar múltiples agentes en proyectos grandes y necesita infraestructura que escale.

**Herramientas recomendadas:** AgentsMesh, gastown, claude-flow

AgentsMesh proporciona infraestructura empresarial: puedes traer tus propias claves de API (BYOK) y escalar con "empleados IA" especializados. gastown es el más maduro para proyectos de larga duración donde los agentes deben recordar estado entre sesiones. claude-flow / Ruflo coordina enjambres de agentes especializados con inteligencia colectiva.

---

# Página: Ruta de Aprendizaje

## Encabezado
¿Por dónde empiezo? Esta es tu hoja de ruta: desde conceptos básicos hasta orquestación avanzada de agentes. Sigue los pasos en orden; cada uno te prepara para el siguiente.

---

## Paso 1: Entiende qué es un agente IA
**Qué aprenderás:** La idea fundamental de los agentes IA, cómo piensan, qué pueden hacer, y por qué son diferentes de los chatbots.

Un agente IA es software que percibe su entorno, planifica acciones y las ejecuta de forma autónoma para alcanzar un objetivo, sin necesidad de instrucciones manuales en cada paso. A diferencia de los chatbots que responden preguntas, los agentes entienden una tarea, deciden qué hacer, lo hacen y evalúan si lo lograron.

**Herramientas de esta etapa:** Gemini CLI, Open Interpreter

Empieza con Gemini CLI (1.000 peticiones diarias gratis) para ver un agente en acción. Open Interpreter te muestra cómo el agente entiende tus instrucciones en lenguaje natural y ejecuta código en tu ordenador.

---

## Paso 2: Prueba un agente CLI en tu primer proyecto
**Qué aprenderás:** Cómo instalar, configurar y usar un agente IA en la línea de comandos. La experiencia "manos en el teclado" de trabajar con un agente.

Los agentes CLI viven en tu terminal. Configuras una clave de API, le das una instrucción, y el agente planifica y ejecuta cambios en tu código. Aprendes a escribir prompts claros: las instrucciones exactas que el agente necesita para entender qué hacer.

**Herramientas de esta etapa:** Cline (VS Code), Aider, Claude Code

Cline es el punto de entrada más suave si usas VS Code: instala la extensión, configura tu clave de API, y listo. Aider te muestra cómo el agente hace ediciones precisas sin reescribir archivos completos. Claude Code es la referencia de calidad: entiende repositorios completos y ejecuta refactorizaciones complejas.

---

## Paso 3: Automatiza tareas específicas de desarrollo
**Qué aprenderás:** Cómo usar agentes para tareas concretas: corregir bugs, refactorizar código, resolver issues de GitHub, escribir tests.

Ya tienes un agente funcionando; ahora aprendes a pedirle tareas reales. Un bug que necesita investigación. Una función que hay que refactorizar. Un issue de GitHub que resolver. El agente no solo entiende tu código, sino el contexto del proyecto, las convenciones del equipo, la historia de las decisiones.

**Herramientas de esta etapa:** SWE-agent, Plandex, Aider, OpenHands

SWE-agent está especializado en resolver issues de GitHub. Plandex planifica antes de actuar en tareas complejas. Aider excela en ediciones precisas. OpenHands maneja tareas completas de ingeniería de software.

---

## Paso 4: Coordina múltiples agentes en paralelo
**Qué aprenderás:** Cómo ejecutar varios agentes simultáneamente en el mismo proyecto. Trabajo de equipo entre máquinas: cada agente en su tarea, al mismo tiempo.

Un agente es potente. Varios agentes trabajando en paralelo son exponencialmente más productivos. Aprendes a dividir el trabajo: un agente refactoriza el módulo A, otro escribe tests, otro revisa, todo al mismo tiempo en ramas git independientes.

**Herramientas de esta etapa:** claude-squad, cmux, vibe-kanban

claude-squad es el más directo: lanza múltiples sesiones de Claude Code coordinadas. cmux te da control fino con tmux. vibe-kanban visualiza el progreso de todos los agentes en un Kanban.

---

## Paso 5: Automatiza el backlog completo sin supervisión
**Qué aprenderás:** Cómo dejar agentes trabajando de forma completamente autónoma. Cómo diseñar bucles que iteren hasta completar tareas sin intervención humana.

El siguiente nivel: no supervisas a los agentes; confías en que iteren hasta completar. Los agentes trabajan por la noche, durante el fin de semana, de forma autónoma. Requiere buena definición de tareas, puertas de calidad automáticas (tests, lint) que el agente respeta, y bucles que iteren hasta pasar todas las comprobaciones.

**Herramientas de esta etapa:** wreckit, ralph-orchestrator, kodo, gastown

wreckit es el más orientado al flujo completo: de idea a pull request. ralph-orchestrator usa puertas de calidad para garantizar que el trabajo completado es de confianza. kodo extiende el trabajo autónomo hasta 8 horas. gastown añade persistencia de estado para proyectos de larga duración.

---

## Paso 6: Orquesta enjambres de agentes especializados
**Qué aprenderás:** La arquitectura avanzada: múltiples agentes especializados (arquitecto, implementador, testero) que colaboran como un equipo de ingenieros.

En lugar de agentes genéricos que lo hacen todo, diseñas equipos: un agente que planifica la arquitectura, otro que implementa, otro que revisa, otro que prueba. La coordinación entre ellos es inteligente: cada uno sabe qué sabe y qué no sabe, y pide ayuda o delega cuando es necesario.

**Herramientas de esta etapa:** claude-flow (Ruflo), AgentsMesh, gastown

claude-flow/Ruflo coordina enjambres con inteligencia de colmena: una "reina" dirige trabajadores especializados. AgentsMesh proporciona infraestructura empresarial para escalar estos equipos. gastown persiste el estado del equipo a través de sesiones.

---

# Página: Glosario y FAQ

## Glosario de términos clave

**Agente IA**
Software que percibe su entorno, planifica y ejecuta acciones de forma autónoma para alcanzar un objetivo, sin necesidad de instrucción manual en cada paso.

**CLI (Command-Line Interface)**
La interfaz de línea de comandos: la ventana de terminal donde escribes comandos de texto para interactuar con el ordenador y sus herramientas.

**Orquestador**
Sistema que coordina y dirige el trabajo de múltiples agentes IA, asignándoles tareas, monitorizando su progreso y sintetizando sus resultados en un trabajo cohesivo.

**LLM (Large Language Model)**
Modelo de lenguaje grande: el "cerebro" que impulsa los agentes IA. Modelos como Claude, GPT-4, Gemini o Llama entienden y generan texto, y pueden razonar sobre problemas complejos.

**MCP (Model Context Protocol)**
Estándar abierto creado por Anthropic para conectar agentes IA con herramientas externas: bases de datos, APIs, servicios web. Permite que los agentes usen cualquier herramienta de forma estandarizada.

**Token**
Unidad básica de texto que procesan los modelos de lenguaje. Aproximadamente 4 caracteres en inglés o 3 en español. Los costes de API se calculan en millones de tokens consumidos.

**API (Application Programming Interface)**
Interfaz de programación de aplicaciones: el canal técnico mediante el que las herramientas se comunican con los modelos de IA en la nube (Anthropic, OpenAI, Google).

**Clave de API**
Contraseña secreta que te proporciona el proveedor de IA (Anthropic, OpenAI, Google...) para identificarte y autorizar el acceso a sus modelos. Nunca debe compartirse públicamente.

**BYOK (Bring Your Own Key)**
Modelo en el que pagas directamente al proveedor de IA con tu cuenta, en lugar de pagar una tarifa fija a la herramienta intermediaria. Útil si quieres controlar exactamente qué gastas.

**TUI (Text User Interface)**
Interfaz de usuario de texto: una aplicación visual que funciona completamente en el terminal, con menús y paneles en caracteres de texto, sin necesidad de ventanas gráficas.

**Worktree (rama de trabajo aislada)**
Copia de trabajo aislada de un repositorio git. Permite que varios agentes trabajen en el mismo proyecto simultáneamente en ramas independientes sin interferirse.

**LSP (Language Server Protocol)**
Estándar que permite a los editores (y agentes IA) obtener información precisa del código en tiempo real: tipos, definiciones, referencias, y errores. Le da al agente "visión de compilador" del código.

**SWE-bench**
Benchmark de referencia para evaluar agentes IA en tareas reales de ingeniería de software: resolver issues de repositorios de código abierto en GitHub. Mayor porcentaje = mejor desempeño.

**Loop autónomo**
Patrón en el que el agente itera automáticamente: ejecuta, evalúa el resultado, aprende del error, corrige y repite, hasta completar la tarea sin intervención del usuario.

**Código abierto**
Software cuyo código fuente está disponible públicamente para que cualquiera lo use, modifique y distribuya. Licencias comunes: MIT, Apache-2.0, GPL. Opuesto a software propietario.

**MIT / Apache-2.0**
Las dos licencias de código abierto más permisivas. Permiten usar el software para cualquier propósito, incluyendo comercial, con pocas restricciones legales.

**FSL / BSL**
Licencias de código fuente disponible (source-available) con restricciones comerciales. El código es visible, pero su uso en producción comercial puede requerir una licencia de pago.

**Prompt**
La instrucción o mensaje que escribes al agente para indicarle qué debe hacer. Un buen prompt es claro, específico y proporciona el contexto necesario para que el agente produzca el resultado deseado.

**Swarm (enjambre)**
Patrón de múltiples agentes especializados que trabajan en paralelo y coordinan sus resultados, inspirado en el comportamiento colectivo de insectos como las abejas.

**Ollama**
Herramienta gratuita y de código abierto para ejecutar modelos de lenguaje localmente en tu ordenador, sin coste de API ni envío de datos a la nube.

---

## Preguntas frecuentes

**¿Qué diferencia hay entre un CLI agent y un orquestador?**

Un agente CLI ejecuta una tarea de principio a fin: un solo agente trabaja en el problema. Un orquestador coordina múltiples agentes trabajando en paralelo o en cadena. Los agentes CLI son más sencillos de empezar; los orquestadores escalan para proyectos grandes donde un agente solo no basta.

---

**¿Cuál es la herramienta más barata para empezar?**

Gemini CLI es la más accesible: Google ofrece 1.000 peticiones diarias gratis. Si quieres totalmente gratuito incluyendo sin costes de API, Ollama te deja ejecutar modelos locales en tu ordenador: combinado con herramientas de código abierto como Aider o Goose, cuesta cero euros.

---

**¿Necesito suscripción a Claude para usar Claude Code?**

Claude Code tiene un plan Free limitado, pero para uso serio necesitas Claude Pro ($20/mes) o Claude Max ($100–200/mes). Si prefieres no pagar, Gemini CLI, Aider con Ollama, o Open Interpreter con modelos locales son opciones gratuitas.

---

**¿Cuál es el agente más poderoso en 2026?**

Claude Code (basado en Claude 3.7 Opus) y OpenCode (soporta 75+ proveedores) son los más potentes en raw capability. Para casos de uso específicos: SWE-agent para resolver issues de GitHub, OpenHands para automatizar flujos completos de ingeniería, Plandex para planificación estratégica.

---

**¿Puedo usar estos agentes sin suscripción?**

Sí. Opciones completamente gratuitas: Gemini CLI (1.000 peticiones/día), cualquier herramienta de código abierto (Aider, OpenCode, Goose, gptme) combinada con modelos locales vía Ollama, y herramientas propias como Open Interpreter con modelos accesibles.

---

**¿Qué es el "Ralph Wiggum Loop" que veo mencionado?**

Es un patrón de bucle autónomo donde el agente itera indefinidamente: intenta, falla, aprende, reintenta, hasta completar la tarea. Llamado así por un chiste interno; herramientas como ralph-orchestrator, wreckit y kodo lo implementan.

---

**¿Cómo elijo entre múltiples agentes si tengo pocas peticiones gratis?**

Empieza con Gemini CLI (1.000 diarias) para familiarizarte. Luego, elige según tu proveedor preferido: si usas Anthropic, Claude Code; si OpenAI, Codex CLI; si Google, Gemini CLI. O usa Aider con Ollama (completamente local, sin coste de API).

---

**¿Es seguro dejar agentes trabajando de forma autónoma por la noche?**

Es seguro si defines bien tus tareas, tienes tests que el agente respeta, y el agente solo modifica lo que debería modificar. Herramientas como wreckit usan modo sandbox con microVM Firecracker para mayor aislamiento. Siempre revisa el primer resultado antes de confiar en ejecuciones largas desatendidas.

---

**¿Puedo usar varios agentes a la vez en el mismo proyecto?**

Sí, así funciona la orquestación. Cada agente trabaja en una rama git aislada (worktree), evitando conflictos. Herramientas como claude-squad y cmux hacen esto automáticamente. Los agentes se coordinan a través del código: uno lee lo que escribió el otro, lo mejora, etc.

---

**¿Cuál es el benchmark más fiable para comparar agentes?**

SWE-bench es el estándar: evalúa agentes en resolver issues reales de repositorios de código abierto en GitHub. Los porcentajes publicados (84,8% para claude-flow, 74% para mini-SWE-agent) son comparables entre herramientas y reflejan desempeño real.

---

**¿Necesito saber programar para usar agentes IA?**

No es obligatorio, pero ayuda. Herramientas como Open Interpreter son muy accesibles para principiantes: das instrucciones en lenguaje natural. Pero entender código básico te permite escribir mejores prompts y revisar lo que el agente produce.

---

**¿Puedo usar agentes IA para tareas que no sean programación?**

La mayoría están diseñadas para ingeniería de software. Pero algunos como gptme y Open Interpreter pueden ejecutar código en tu ordenador para análisis de datos, automatización, etc. Herramientas más generales como Hermes Agent o Warp van más allá de la programación.

---

**¿Cómo gestiono el coste si dejo agentes trabajando autónomamente?**

Establece límites de presupuesto con tu proveedor de IA (Anthropic, OpenAI, Google lo permiten). Alterna entre BYOK (pagas directamente al proveedor) si quieres control fino. O usa Ollama con modelos locales para operaciones extensas sin coste de API.

---

**¿Qué herramienta me recomiendan para mi primer proyecto con agentes?**

Empieza con Claude Code o Cline (VS Code): tienes contexto del repositorio y comprensión de calidad alta. O Gemini CLI si prefieres ahorrar dinero. Una vez cómodo, explora orquestadores como claude-squad para múltiples agentes.

---**
