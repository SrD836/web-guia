# i18n — Arquitectura bilingüe ES/EN para web-guia

**Autor:** Jim (arquitectura) · **Fecha:** 2026-06-08 · **Estado:** Propuesto (ADR-001)
**Tarea:** i18n-1 · **Implementa:** Pam · **Traduce:** Andy

> Este documento define **cómo** se hace el bilingüe. No incluye la implementación
> (Pam) ni las traducciones EN (Andy). Es el contrato que desbloquea a ambos en paralelo.

---

## 0. TL;DR

- **Mecanismo:** diccionarios en JavaScript (`window.I18N_ES` / `window.I18N_EN`) cargados por
  `<script>`, más atributos `data-i18n` en cada nodo de texto del HTML. Un loader
  (`assets/i18n.js`) intercambia `textContent`/atributos al cargar y al pulsar el toggle.
- **Por qué no JSON + fetch:** el sitio se abre por `file://` y **`fetch()` de ficheros locales
  está bloqueado** por la política de origen de los navegadores (`file://` no tiene origen).
  Los diccionarios DEBEN ser ficheros `.js` que asignan a `window`, cargados por `<script src>`.
  Esto descarta i18next, fetch de `/locales/*.json` y todas las librerías que asumen un servidor.
- **Datos dinámicos** (`GUIA_DATA`, `GUIA_V3`, `GUIA_LABELS`): NO usan `data-i18n` (se renderizan
  en runtime desde objetos JS, no existen en el DOM). Se traducen con **ficheros de datos
  paralelos** (`data.en.js`, `data-v3-research.en.js`) que el loader selecciona antes de render.
- **Detección:** `?lang=` (query) > `localStorage` > `navigator.language` (`es*`→ES, resto→EN) > `es` (defecto).
- **Toggle:** segmento `ES | EN` en la barra de navegación (y dentro de los menús móvil/tablet).
- **Inventario:** ~**820 strings traducibles** en total → ~**390 claves i18n** (prosa HTML + literales JS)
  + ~**460 strings de datos** que se traducen copiando los ficheros de datos. Desglose en §7.

---

## 1. Contexto y restricciones (BLOQUEADAS)

| Restricción | Implicación para i18n |
|---|---|
| HTML estático + Tailwind CDN + vanilla JS, **sin build step** | No hay extracción automática ni precompilación de catálogos. Todo se resuelve en runtime con JS plano. |
| Se abre por **`file://`** | **`fetch()`/XHR de ficheros locales bloqueado.** Diccionarios = ficheros `.js` vía `<script>`, nunca `.json` cargado por fetch. |
| Se sirve en **GitHub Pages** con rutas **relativas** + `.nojekyll` | El loader y los datos se referencian con rutas relativas (`assets/i18n.js`). Una sola URL por página sirve ambos idiomas (swap por JS). |
| Contenido en **dos sitios**: prosa hardcoded en `.html` y datos en `assets/data.js` + `assets/data-v3-research.js` inyectados por `app.js` | Hacen falta **dos mecanismos**: `data-i18n` para la prosa, datos paralelos para lo dinámico. |
| Diseño v5 aprobado (live) | El toggle y los swaps **no deben romper** el layout, los colores ni las animaciones reveal. |

**Hallazgo crítico (no estaba en el brief):** además de `data.js`, existe
`assets/data-v3-research.js` → `window.GUIA_V3`, que `app.js::mergeV3Data()` fusiona en cada tool
(`long_desc`, `pros[]`, `contras[]`, `como_empezar`, `precio`, `lenguaje`) y que también alimenta
el glosario (`GUIA_V3.glosario`) y los ejes de la comparativa (`GUIA_V3.comparativa.ejes`). **Todo
eso es prosa española traducible** y multiplica el inventario de datos. Está contabilizado en §7.

---

## 2. ADR-001 — Mecanismo de traducción

### Decisión

Adoptar un sistema propio de **diccionarios JS + `data-i18n`** con **dos canales**:

**Canal A — Prosa estática (HTML).** Cada nodo de texto lleva un atributo:

```html
<!-- texto simple (textContent) -->
<h1 data-i18n="index.hero.title">Automatiza tu flujo de código con agentes de IA</h1>

<!-- atributos (aria-label, placeholder, title, alt...) -->
<button data-i18n-attr="aria-label:nav.openMenu">…</button>

<!-- texto con HTML interno permitido (raro: enlaces, <span>, <code>) -->
<p data-i18n-html="index.hero.subtitle">…<span class="text-gradient">agentes de IA</span></p>
```

El loader recorre `[data-i18n]`, `[data-i18n-attr]`, `[data-i18n-html]` y aplica el diccionario
del idioma activo. **El texto español queda en el HTML como fallback** (si falta una clave EN,
se ve el ES, nunca una clave cruda).

**Canal B — Datos dinámicos (JS).** Se crean ficheros paralelos:

```
assets/data.js              → window.GUIA_DATA_ES   (renombrar global; ver §6)
assets/data.en.js           → window.GUIA_DATA_EN   (Andy: copia + traduce desc/labels)
assets/data-v3-research.js  → window.GUIA_V3_ES
assets/data-v3-research.en.js → window.GUIA_V3_EN   (Andy: copia + traduce campos de prosa)
```

El loader, **antes** de que `app.js` renderice, asigna el set activo:

```js
window.GUIA_DATA = (lang === 'en') ? window.GUIA_DATA_EN : window.GUIA_DATA_ES;
window.GUIA_V3   = (lang === 'en') ? window.GUIA_V3_EN   : window.GUIA_V3_ES;
```

`app.js` sigue leyendo `window.GUIA_DATA`/`window.GUIA_V3` igual que hoy: **cero cambios** en la
lógica de render salvo (a) exponer un `rerenderDynamic()` que el toggle invoca, y (b) sustituir
~14 literales españoles incrustados en `app.js` por `I18N.t()` (Canal A; ver §7.3).

### Alternativas descartadas

- **`fetch('/locales/es.json')` (i18next, Polyglot, etc.):** roto en `file://`. Descartado por la restricción dura.
- **Campos embebidos `desc: {es, en}` dentro de `data.js`:** obliga a reescribir la estructura de
  datos y a tocar todos los `render*()` de `app.js` (`tool.desc` → `pick(tool.desc)`). Más riesgo de
  regresión en el diseño v5 y diffs de traducción ilegibles. Descartado a favor de ficheros paralelos:
  Andy traduce **copiando el fichero y traduciendo in situ** (diff limpio, revisable, sin tocar estructura).
- **Páginas duplicadas `/en/index.html`:** 9 páginas × 2 = 18 ficheros a mantener en sync a mano.
  Inviable sin build. Descartado (pero ver §5 sobre el coste SEO de NO hacerlo).

### Consecuencias

- ✅ Funciona en `file://` y en Pages sin servidor ni build.
- ✅ Andy y Pam trabajan en paralelo: Andy llena los diccionarios/ficheros EN, Pam cablea `data-i18n`.
- ✅ Fallback automático ES si falta una traducción.
- ⚠️ El swap de idioma es client-side → coste SEO (los crawlers indexan el ES por defecto). Mitigación en §5.
- ⚠️ Pam debe cablear ~390 nodos a mano (no hay extracción automática). Protocolo en §6.

---

## 3. Detección de idioma y precedencia

Orden de precedencia (de mayor a menor autoridad):

```
1. Query string   ?lang=es | ?lang=en      (enlaces compartibles / crawleables)
2. localStorage    guia_lang                 (elección previa del usuario)
3. navigator.language   empieza por "es" → es ; cualquier otro → en
4. Defecto         es                        (ES es el idioma origen)
```

```js
function resolveLang() {
  var q = new URLSearchParams(location.search).get('lang');
  if (q === 'es' || q === 'en') return q;
  var stored = localStorage.getItem('guia_lang');
  if (stored === 'es' || stored === 'en') return stored;
  var nav = (navigator.language || 'es').toLowerCase();
  return nav.indexOf('es') === 0 ? 'es' : 'en';
}
```

- La **primera visita** de un navegador en inglés ve la web en EN automáticamente (requisito de David: auto-detección).
- El **toggle manual** escribe `localStorage.guia_lang` y por tanto **sobrescribe** la detección en visitas futuras.
- `?lang=en` permite compartir un enlace que fuerza inglés sin tocar el `localStorage` del receptor
  (se aplica esa visita; si además pulsa el toggle, se persiste).

---

## 4. Toggle UI

**Ubicación:** un control segmentado `ES | EN` en la barra superior (`<header>`), a la derecha,
visible en **todos** los breakpoints. Como el header tiene tres variantes de navegación (desktop ≥1280,
tablet 768–1279, móvil <768), el toggle se coloca:

- **Desktop/tablet:** en el cluster derecho del header, antes del botón de menú móvil (siempre visible, es pequeño).
- **Móvil:** además, una copia dentro del `#mobileDrawerPanel` (cabecera del drawer) por comodidad táctil.

**Markup propuesto** (Pam lo integra con clases v5; los colores ya existen: `brand`, `surface`, `line`, `muted`):

```html
<div class="lang-toggle inline-flex rounded-lg border border-line overflow-hidden text-xs font-semibold"
     role="group" aria-label="Idioma / Language">
  <button type="button" data-lang="es" aria-pressed="true"
          class="px-2.5 py-1 transition-colors">ES</button>
  <button type="button" data-lang="en" aria-pressed="false"
          class="px-2.5 py-1 transition-colors">EN</button>
</div>
```

**Comportamiento:**
- Click en `EN` → `I18N.set('en')`: persiste, swap de todos los `data-i18n`, selecciona datos EN, `rerenderDynamic()`, actualiza `<html lang>`, marca `aria-pressed`.
- El botón activo usa el color de marca (`bg-brand text-white`); el inactivo, `text-muted`.
- **Accesibilidad:** `role="group"` + `aria-label` bilingüe; cada botón con `aria-pressed`. El control es
  un par de botones reales (no un `<select>`) para que funcione con teclado y lector de pantalla sin JS extra.
- **`<html lang>`:** el loader hace `document.documentElement.lang = lang` en cada cambio (arranca en `es`).
- **Sin parpadeo:** el loader corre lo antes posible (script al final de `<head>` o `defer` con swap pre-render);
  como el ES ya está en el HTML, una visita ES no repinta. Una visita EN hace un único swap al cargar.

---

## 5. SEO / GitHub Pages / `file://`

| Tema | Resolución |
|---|---|
| `<html lang>` | Estático `es` en el HTML (idioma origen indexable); JS lo cambia a `en` en runtime si procede. |
| `<title>` y `<meta name="description">` | Llevan clave i18n (`data-i18n-attr` sobre `<meta>` para `content`, y `data-i18n` lógico para `<title>`). El loader los traduce. Por defecto el crawler ve el ES. |
| `hreflang` | **No aplica limpio**: ambos idiomas comparten la misma URL (swap client-side). Poner `hreflang` apuntando a la misma URL no aporta. Se omite. |
| Coste SEO | Los buscadores indexan la versión **ES** (contenido por defecto, sin JS). El EN no obtiene URLs propias → **no rankea de forma independiente**. **Aceptado** dada la restricción "sin build". |
| Mitigación opcional (futuro) | Si en el futuro importa el SEO en inglés, la vía es generar `/en/*.html` con un pequeño script de build (queda **fuera de scope**; lo registro como deuda). El `?lang=en` actual ya da enlaces compartibles. |
| `file://` | Sin `fetch`. Todo por `<script src>` relativo. Verificado como restricción de diseño (§2). |
| `.nojekyll` | Ya presente. Los nuevos `assets/*.en.js` y `assets/i18n.js` se sirven tal cual. |
| Rutas | Todas relativas (`assets/…`). El `?lang` se preserva en navegación sólo si Pam lo propaga en los `<a>` (opcional); con `localStorage` no es necesario para mantener el idioma entre páginas. |

**Persistencia entre páginas:** como cada página corre el loader y lee `localStorage`, el idioma se
mantiene al navegar sin necesidad de arrastrar `?lang` en cada enlace. El `?lang` es sólo para enlaces entrantes.

---

## 6. Esquema de claves

**Convención:** `ambito.seccion.elemento`, en minúsculas, `camelCase` en el último segmento si hace falta.

```
nav.*        navegación compartida (enlaces, menús, toggle aria)      [shared]
footer.*     pie compartido                                          [shared]
common.*     textos repetidos (botones, "Cerrar", "Ver más"…)        [shared]
ui.*         literales que hoy están dentro de app.js                [shared, Canal A en JS]
data.label.* etiquetas de categoría (espejo de GUIA_LABELS)          [ver nota]
<page>.<seccion>.<elemento>   prosa específica de cada página
```

Donde `<page>` ∈ `{index, agentescli, orquestadores, comparativa, casosuso, concepto, ruta, glosariofaq, acerca}`.

**Ejemplos:**
```
nav.inicio                 "Inicio"            → "Home"
nav.agentesCli             "Agentes CLI"       → "CLI Agents"
nav.aprender               "Aprender"          → "Learn"
footer.tagline             "Una guía abierta…" → "An open guide…"
ui.verDetalle              "Ver detalle"       → "View details"
ui.repo                    "Repo ↗"            → "Repo ↗"
ui.desconocido             "Desconocido"       → "Unknown"
ui.col.herramienta         "Herramienta"       → "Tool"
index.hero.badge           "30 herramientas · actualizado junio 2026"
index.hero.title           "Automatiza tu flujo de código con agentes de IA"
index.hero.subtitle        "Descubre cómo los agentes…"
index.hero.ctaPrimary      "Explorar Agentes CLI"
index.routes.heading       "Dos caminos, una meta"
```

**Anti-colisiones:**
- Un namespace por página + un namespace `shared` (nav/footer/common/ui). Nada de claves planas globales.
- **Prosa larga (párrafos):** una clave por bloque `<p>`/`<li>` completo (no se trocea por frase). El
  valor es el párrafo entero. Para párrafos con HTML interno (un `<span>`, un `<code>`, un enlace) →
  `data-i18n-html` y el valor del diccionario incluye ese HTML (Andy traduce el texto, conserva las etiquetas).
- **`data.label.*` (categorías):** son las 7 etiquetas de `GUIA_LABELS`. Dado que `GUIA_LABELS` vive en
  `data.js` y se renderiza en runtime, se traducen **en el fichero de datos** (`data.en.js` lleva su propio
  bloque `GUIA_LABELS`), no como clave i18n del DOM. Se listan en §7 dentro del inventario de datos.

**Protocolo de cableado para Pam (por página):**
1. Recorrer la página de arriba abajo. Por cada nodo de texto visible: añadir `data-i18n="<page>.<seccion>.<elemento>"`.
2. Atributos accesibles (`aria-label`, `alt`, `title`, `placeholder`, `content` de meta) → `data-i18n-attr="attr:clave"`.
3. Copiar el texto ES tal cual al bloque `<page>` de `window.I18N_ES` en `assets/i18n.js`.
4. NO tocar: code snippets de terminal, símbolos (`$`, `→`, `★`, `✓`, `✗`), nombres propios de herramientas,
   números, URLs. (Los rótulos del terminal del hero **sí** si son frases en español, p. ej. el comentario del comando.)
5. Las claves de cada página las consume Andy para producir el bloque EN espejo.

---

## 7. Inventario de strings

> Conteo por construcción (medido sobre el repo). El **bloque ES de la prosa** se completa
> durante el cableado (Pam copia cada texto a `I18N_ES` al añadir su `data-i18n`); este documento
> entrega el **esquema**, los **conteos**, y el **chrome compartido + plantilla `index` ya extraídos**
> en `assets/i18n.js`. Los **datos** no se re-extraen: se traducen copiando los ficheros existentes.

### 7.1 Prosa HTML (Canal A — claves `data-i18n`)

| Página | Fragmentos de texto (medido) | Claves únicas estimadas¹ |
|---|---:|---:|
| Chrome compartido (nav + drawer + tablet + footer) | — | **~30** |
| index.html | 81 | ~35 |
| agentes-cli.html | 66 | ~25 |
| orquestadores.html | 67 | ~25 |
| comparativa.html | 65 | ~25 |
| casos-uso.html | 58 | ~30 |
| concepto.html | 153 | ~90 |
| ruta-aprendizaje.html | 86 | ~45 |
| glosario-faq.html | 98 | ~40 |
| acerca.html | 67 | ~35 |
| **Subtotal prosa** | **741** | **~380** (≈350 de página + 30 shared) |

¹ Las claves únicas < fragmentos porque (a) el chrome se cuenta una vez aunque se repita en 9 páginas,
(b) símbolos/code/nombres propios no se traducen, (c) párrafos largos = 1 clave.

### 7.2 Literales dentro de `app.js` (Canal A en JS — claves `ui.*`)

14 strings españoles incrustados en el render que deben pasar a `I18N.t()`:

```
"Ver detalle", "Repo ↗", "Consulta la documentación oficial del proyecto.",
"Desconocido" (×2: precio y lenguaje), "Popular" (badge — viene de los datos, ver 7.3),
y los 6 encabezados de columna de la comparativa: "Herramienta", "Categoría",
"Estrellas", "Precio", "Lenguaje", "Primer paso".
```
→ ~**14 claves** `ui.*`. (Nota: las cabeceras de columna también aparecen como `data-label` en el
HTML de la tabla responsive — Pam unifica con la misma clave.)

### 7.3 Datos dinámicos (Canal B — traducir copiando ficheros)

| Fuente | Campo(s) traducible(s) | Strings |
|---|---|---:|
| `data.js` → `GUIA_DATA.cli[16]` + `orquestadores[14]` | `desc` (1 por tool) | 30 |
| `data.js` → `GUIA_LABELS` | 7 etiquetas de categoría | 7 |
| `data.js` | badge `"Popular"` (valor de datos; 1 string único) | 1 |
| `data-v3-research.js` → `GUIA_V3` por tool ×30 | `long_desc` | 30 |
| " | `pros[]` (≈3 ítems/tool) | ~90 |
| " | `contras[]` (≈3 ítems/tool) | ~90 |
| " | `como_empezar` | 30 |
| " | `precio` | 30 |
| " | `lenguaje` | 30 |
| `GUIA_V3.glosario[20]` | `termino` + `definicion` | 40 |
| `GUIA_V3.comparativa.ejes[8]` | `eje` + `cli_agent` + `orquestador` | 24 |
| **Subtotal datos** | | **~462** |

**Entrega para Andy:** el "inventario ES" de los datos **ya existe** y es el propio
`assets/data.js` + `assets/data-v3-research.js` (fuente de verdad, prosa española real). Andy crea
`assets/data.en.js` y `assets/data-v3-research.en.js` **copiando** esos ficheros y traduciendo los
campos de la tabla (deja intactos `name`, `url`, `stars`, `category`, claves de objeto, estructura).

### 7.4 Total

| Bloque | Claves / strings |
|---|---:|
| Prosa HTML (`data-i18n`) | ~380 claves |
| Literales `app.js` (`ui.*`) | ~14 claves |
| Datos (traducción en fichero) | ~462 strings |
| **TOTAL traducible** | **~856 strings** (≈394 claves i18n + ~462 datos) |

---

## 8. Loader — diseño (`assets/i18n.js`)

API pública `window.I18N`:

```
I18N.lang                      idioma activo ('es' | 'en')
I18N.t(key)                    traduce una clave (fallback: ES → key)
I18N.set(lang)                 cambia idioma: persiste, swap DOM, swap datos, rerender, <html lang>
I18N.apply(root?)              aplica data-i18n a un subárbol (para nodos inyectados en runtime)
```

Secuencia de arranque (antes del render de `app.js`):
1. `lang = resolveLang()`
2. `document.documentElement.lang = lang`
3. `selectData(lang)` → asigna `window.GUIA_DATA`/`GUIA_V3` al set activo
4. `applyDom(document)` → swap de todos los `[data-i18n*]`
5. marcar el toggle (`aria-pressed`)

En `I18N.set(lang)` se repiten 2–5 y se llama a `window.rerenderDynamic()` (expuesto por `app.js`) para
re-pintar cards/tabla/glosario/mini-cards con los datos del nuevo idioma.

**Orden de `<script>` en cada página** (importante):
```html
<script src="assets/data.js"></script>                <!-- GUIA_DATA_ES -->
<script src="assets/data.en.js"></script>             <!-- GUIA_DATA_EN -->
<script src="assets/data-v3-research.js"></script>    <!-- GUIA_V3_ES -->
<script src="assets/data-v3-research.en.js"></script> <!-- GUIA_V3_EN -->
<script src="assets/i18n.js"></script>                <!-- selecciona activo + swap DOM -->
<script src="assets/app.js"></script>                 <!-- render con datos activos -->
```

`assets/i18n.js` se entrega con el **loader funcional** + `I18N_ES` sembrado con el **chrome compartido**
y la **plantilla de `index`** (worked example). `I18N_EN` queda como esqueleto para Andy.

---

## 9. Reparto de trabajo (desbloquea en paralelo)

- **Andy (traducción):**
  - Rellenar `window.I18N_EN` en `assets/i18n.js` (espejo de cada clave de `I18N_ES`).
  - Crear `assets/data.en.js` y `assets/data-v3-research.en.js` copiando los ES y traduciendo los campos de §7.3.
  - Traducir `<title>`/`meta description` (claves `*.meta.title` / `*.meta.desc`).
- **Pam (implementación):**
  - Cablear `data-i18n`/`data-i18n-attr` en las 9 páginas (protocolo §6), copiando el ES a `I18N_ES`.
  - Insertar el toggle (§4) en header + drawer, integrado con el diseño v5.
  - Refactor de `app.js`: sustituir los 14 literales por `I18N.t()`, exponer `window.rerenderDynamic()`,
    renombrar globals de datos a `_ES` y leer el activo.
  - Añadir el bloque de `<script>` (§8) a las 9 páginas.
- **Angela (QA):** ES y EN sin claves crudas visibles; toggle persiste y re-renderiza datos; auto-detección
  por `navigator.language`; `<html lang>` correcto; sin regresión visual v5; funciona por `file://` y en Pages.

---

## 10. Riesgos

- **Parpadeo en visita EN:** mínimo (un swap al cargar). Si molesta, ocultar `<body>` hasta `applyDom` (clase `i18n-pending`).
- **Claves sin traducir:** el fallback ES evita ver claves crudas, pero QA debe detectar texto ES residual en modo EN.
- **Desincronía ficheros datos:** si Andy edita estructura en `data.en.js`, rompe el render. Regla: **sólo traducir valores de texto**, nunca claves ni estructura.
- **Coste SEO EN:** asumido (§5). Deuda registrada para un futuro build `/en/`.
