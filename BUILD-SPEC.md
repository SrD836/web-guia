# BUILD-SPEC — web-guia

Contract everyone builds against. Static visual prototype: a beginner-friendly guide to
AI coding-agent CLIs and orchestrators. **Stack is LOCKED:** static HTML + Tailwind (CDN)
+ vanilla JS, no build step. Scope is LOCKED: visual prototype only, no backend/CMS.

All user-facing strings (nav, titles, labels, copy) are in **natural Spanish**. This spec is
the technical contract; Andy owns the prose, Oscar owns the data, Pam owns the markup.

---

## 1. Design tokens

Style is **minimalist editorial + modern**: light warm-paper base, one dark accent, strong
typography, generous whitespace, subtle motion.

### Fonts (Google Fonts)
- **Display:** `Fraunces` (serif, editorial) — headings, hero, page titles.
- **Body:** `Inter` (sans) — body copy, UI, cards.

Load in every `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Color palette (light base + ONE dark accent)
| Token | Hex | Use |
|-------|-----|-----|
| `paper` | `#FAFAF7` | page background |
| `surface` | `#FFFFFF` | cards, header |
| `ink` | `#16161A` | primary text, headings |
| `muted` | `#6B6B73` | secondary text, captions |
| `line` | `#E6E5DF` | borders, dividers |
| `accent` | `#4338CA` | links, active state, buttons, focus ring |
| `accent-soft` | `#EEF0FF` | accent-tinted fills, active pill bg |

Dark accent is `accent` (indigo-700). Use it sparingly — links, active filter, primary CTA,
hover borders. No second accent color.

### Type scale (modular, ~1.25)
| Token | rem | px |
|-------|-----|----|
| `xs` | 0.8 | ~13 |
| `sm` | 0.9 | ~14 |
| `base` | 1.0 | 16 |
| `lg` | 1.125 | 18 |
| `xl` | 1.25 | 20 |
| `2xl` | 1.563 | 25 |
| `3xl` | 1.953 | 31 |
| `4xl` | 2.441 | 39 |
| `5xl` | 3.052 | 49 |

Body text `base`/`lg`, line-height 1.6. Headings use `Fraunces`, weight 600–700, line-height 1.15.

### Spacing scale
Use Tailwind's default 4px base scale. Section vertical rhythm: `py-20` (5rem) mobile,
`py-28` (7rem) desktop. Max content width: `max-w-6xl` (1152px), centered, `px-6` gutters.

### Tailwind CDN config
Place **before** any Tailwind classes are used, in every page `<head>` after the CDN script:
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          paper: '#FAFAF7', surface: '#FFFFFF', ink: '#16161A',
          muted: '#6B6B73', line: '#E6E5DF',
          accent: '#4338CA', 'accent-soft': '#EEF0FF',
        },
        fontFamily: {
          display: ['Fraunces', 'serif'],
          body: ['Inter', 'sans-serif'],
        },
        screens: { sm: '360px', md: '768px', xl: '1280px' },
        maxWidth: { content: '1152px' },
      },
    },
  };
</script>
```
`styles.css` holds only what Tailwind can't: `@keyframes` for scroll-reveal, `line-clamp`
fallback, focus-visible ring, and `scroll-behavior: smooth` on `html`.

---

## 2. Nav + page set

5 pages, flat structure, all at repo root:

| File | Purpose | Nav label (ES) |
|------|---------|----------------|
| `index.html` | Home / hero + intro + featured | Inicio |
| `agentes-cli.html` | CLI agents listing (cards + filter) | Agentes CLI |
| `orquestadores.html` | Orchestrators listing (cards + filter) | Orquestadores |
| `concepto.html` | Article template (single long-form concept) | Conceptos |
| `acerca.html` | About the project + sources | Acerca |

### Shared header/nav (identical markup on every page)
Sticky top, `surface` bg, `line` bottom border. Brand left, nav right. On the current page,
that nav link gets `aria-current="page"` and the `text-accent font-semibold` treatment.
Mobile (<768): nav collapses to a hamburger toggling a vanilla-JS dropdown.

```html
<header class="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-line">
  <div class="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
    <a href="index.html" class="font-display text-xl font-bold text-ink">Guía IA</a>
    <nav aria-label="Principal" class="hidden md:flex gap-8 text-sm">
      <a href="index.html">Inicio</a>
      <a href="agentes-cli.html">Agentes CLI</a>
      <a href="orquestadores.html">Orquestadores</a>
      <a href="concepto.html">Conceptos</a>
      <a href="acerca.html">Acerca</a>
    </nav>
    <button id="navToggle" class="md:hidden" aria-label="Abrir menú" aria-expanded="false">☰</button>
  </div>
  <nav id="navMobile" aria-label="Móvil" class="hidden md:hidden border-t border-line px-6 py-4 flex-col gap-4">
    <!-- same 5 links, stacked -->
  </nav>
</header>
```
Default nav links: `text-muted hover:text-ink transition-colors`. Active link overrides to accent.

### Shared footer (identical on every page)
```html
<footer class="border-t border-line mt-24">
  <div class="max-w-content mx-auto px-6 py-12 text-sm text-muted flex flex-col md:flex-row justify-between gap-4">
    <p>Guía IA — prototipo educativo. Hecho con datos de listas abiertas de la comunidad.</p>
    <nav aria-label="Fuentes" class="flex gap-6">
      <a href="https://github.com/andyrewlee/awesome-agent-orchestrators" class="hover:text-accent">Orquestadores (fuente)</a>
      <a href="https://github.com/bradAGI/awesome-cli-coding-agents" class="hover:text-accent">CLIs (fuente)</a>
    </nav>
  </div>
</footer>
```

---

## 3. Data schema — `assets/data.js`

Plain JS, no module system. Attaches one global the listing pages read. **Tool object shape is
LOCKED:**

```js
// assets/data.js
window.GUIA_DATA = {
  cli: [
    {
      name: "string",        // tool name, e.g. "Aider"
      desc: "string",        // one-sentence Spanish description, ≤140 chars
      url: "https://…",      // canonical link (repo or site)
      stars: 0,              // GitHub stars as integer (0 if unknown/closed)
      badge: "string|null",  // short optional label, e.g. "Popular" | "Nuevo" | null
      category: "open-source" // see enum below
    }
    // …more CLI tools
  ],
  orquestadores: [
    { name, desc, url, stars, badge, category } // category from orchestrator enum
  ]
};
```

### Category enums (exact string values — do not invent others)
- **`cli[].category`** ∈ `"open-source"` · `"closed"` · `"openclaw-eco"`
- **`orquestadores[].category`** ∈ `"runners-paralelos"` · `"swarms"` · `"loops-autonomos"` · `"asistentes"`

### Spanish display labels for each enum (Pam uses these for filter pills + card chips)
```js
window.GUIA_LABELS = {
  "open-source": "Código abierto",
  "closed": "Cerrado / comercial",
  "openclaw-eco": "Ecosistema OpenClaw",
  "runners-paralelos": "Ejecutores en paralelo",
  "swarms": "Enjambres",
  "loops-autonomos": "Bucles autónomos",
  "asistentes": "Asistentes"
};
```

Rules for Oscar: every entry must come from the two source awesome-lists (no invention).
`stars` is the real GitHub count or `0`. `desc` is natural Spanish, ≤140 chars. `badge` is
optional — use only for genuinely notable items (`"Popular"`, `"Nuevo"`), else `null`.

---

## 4. Card component + filter UX + responsive

### Card component spec
One card per tool. Markup contract (Pam renders this from a JS template):
```html
<article class="tool-card group bg-surface border border-line rounded-xl p-6 flex flex-col gap-3
                transition-all hover:border-accent hover:-translate-y-1 hover:shadow-lg"
         data-category="open-source">
  <div class="flex items-start justify-between gap-3">
    <h3 class="font-display text-xl font-semibold text-ink">{name}</h3>
    <!-- badge chip, only if badge != null -->
    <span class="text-xs px-2 py-0.5 rounded-full bg-accent-soft text-accent font-medium">{badge}</span>
  </div>
  <p class="text-muted text-sm leading-relaxed line-clamp-3">{desc}</p>
  <div class="mt-auto pt-2 flex items-center justify-between text-sm">
    <span class="text-muted">★ {stars}</span>
    <a href="{url}" target="_blank" rel="noopener"
       class="text-accent font-medium group-hover:underline">Ver →</a>
  </div>
  <!-- category chip (Spanish label) at bottom-left, muted -->
</article>
```
- Hover: 1px translate-up + accent border + soft shadow. Transition 150–200ms.
- `data-category` carries the raw enum value for the filter to match against.
- `★ {stars}` hidden (or shows `—`) when `stars === 0`.

### Filter UX spec
Above the card grid, a row of filter pills: `Todos` + one pill per category enum (Spanish
label from `GUIA_LABELS`). Vanilla JS:
- Click a pill → set it active (`bg-accent text-white`), reset others (`bg-surface border-line text-muted`).
- Show only cards whose `data-category` matches; `Todos` shows all. Toggle via `hidden` class.
- Default state on load: `Todos` active, all cards visible.
- Optional (nice-to-have, not required): a text input that filters cards by name/desc substring,
  combined with the active pill (AND). Ship pills first; add search only if time allows.
- No results → show a `text-muted` "Sin resultados" message.

### Responsive breakpoints (360 / 768 / 1280)
Card grid:
- `< 768` (mobile, base ≥360): **1 column**, `gap-4`.
- `768–1279` (`md`): **2 columns**.
- `≥ 1280` (`xl`): **3 columns**.
```html
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">…cards…</div>
```
Header nav collapses to hamburger `< 768`. Hero/section type steps down one scale step on mobile.
Everything fluid between breakpoints; content never exceeds `max-w-content` (1152px).

### Motion (subtle, per locked style)
- `html { scroll-behavior: smooth; }`.
- Scroll-reveal: sections fade+rise on enter via `IntersectionObserver` toggling a `.revealed`
  class (keyframe in `styles.css`). Respect `prefers-reduced-motion: reduce` → no transforms.
- Hover transitions on links, cards, pills only. Nothing flashy.

---

## File layout (what Pam ships in W2)
```
web-guia/
├── index.html  agentes-cli.html  orquestadores.html  concepto.html  acerca.html
├── assets/
│   ├── data.js     (Oscar — W1)
│   ├── styles.css  (Pam — keyframes, line-clamp, focus, smooth-scroll)
│   └── app.js      (Pam — nav toggle, filter, scroll-reveal, card render)
└── content/copy.md (Andy — W1, source prose Pam pastes into pages)
```

**Contract is locked. Pam builds against this exactly. Questions or conflicts → report god, don't guess.**

---
---

# BUILD-SPEC v3 — extension (greenlit by David, 2026-06-07)

Everything in §1–§4 above still holds **except** where this v3 section overrides it. v3 is
additive: richer color, 4 new pages (→ 9-item nav), an expandable-card/modal pattern, and 7
new per-tool data fields. Stack unchanged (static HTML + Tailwind CDN + vanilla JS, no build).
Scope unchanged (visual prototype, no backend).

Override map (read this first):
- **§1 color palette** → replaced by **v3 §A** (one accent → per-category accent system + depth).
- **§2 nav (5 links)** → replaced by **v3 §B** (9 links + mobile grouping).
- **§3 data shape** → extended by **v3 §D** (7 new fields; old 6 fields unchanged).
- **§4 card** → extended by **v3 §C** (card gains a trigger that opens the modal).
Anything not named here is inherited verbatim from v2.

---

## v3 §A. Color system — per-category accent + depth

v2's "one indigo accent" is retired. v3 keeps the warm-paper base and AA text, but gives **each
tool category its own accent** plus a neutral brand accent for chrome (nav, focus ring, generic
CTA). Gradients and an elevation scale add depth.

### A.1 Base (unchanged from v2, restated for one source of truth)
| Token | Hex | Use |
|-------|-----|-----|
| `paper` | `#FAFAF7` | page background |
| `surface` | `#FFFFFF` | cards, header, modal |
| `ink` | `#16161A` | primary text, headings |
| `muted` | `#6B6B73` | secondary text |
| `line` | `#E6E5DF` | borders, dividers |

### A.2 Brand accent (chrome only — nav active, focus ring, generic buttons)
| Token | Hex | Use |
|-------|-----|-----|
| `brand` | `#4338CA` | nav active link, focus-visible ring, non-category CTAs |
| `brand-soft` | `#EEF0FF` | brand-tinted fills |

### A.3 Category accents (one per category enum — used on cards, chips, modals, filters)
Each category gets a **strong** hue (text/icon/border/active-pill, ≥4.5:1 on `surface`/`paper`)
and a **soft** tint (chip & modal-header background, with the strong hue as its text → AA).

| Category enum | `*-strong` | `*-soft` | Spanish label (from v2 `GUIA_LABELS`) |
|---------------|-----------|----------|----------------------------------------|
| `open-source`        | `#047857` (emerald-700) | `#ECFDF5` | Código abierto |
| `closed`             | `#4338CA` (indigo-700)  | `#EEF0FF` | Cerrado / comercial |
| `openclaw-eco`       | `#B45309` (amber-700)   | `#FEF3C7` | Ecosistema OpenClaw |
| `runners-paralelos`  | `#1D4ED8` (blue-700)    | `#EFF6FF` | Ejecutores en paralelo |
| `swarms`             | `#6D28D9` (violet-700)  | `#F5F3FF` | Enjambres |
| `loops-autonomos`    | `#BE123C` (rose-700)    | `#FFF1F2` | Bucles autónomos |
| `asistentes`         | `#0F766E` (teal-700)    | `#F0FDFA` | Asistentes |

**AA rule (non-negotiable):** body/label text is always `ink`/`muted` on `paper`/`surface`,
or a `*-strong` hue on its own `*-soft` tint or on white. Never strong-on-strong, never put body
copy on a gradient. White text is allowed **only** on a fully-saturated `*-strong` fill (active
pill, primary CTA) — all seven `*-strong` values clear 4.5:1 against white.

### A.4 Depth — elevation/shadow scale (gives the "deep, polished" feel David wants)
| Token | Box-shadow value | Use |
|-------|------------------|-----|
| `elev-0` | `none` | flush surfaces |
| `elev-1` | `0 1px 2px rgba(22,22,26,.06)` | resting card |
| `elev-2` | `0 4px 12px rgba(22,22,26,.08)` | card hover, sticky header when scrolled |
| `elev-3` | `0 12px 28px rgba(22,22,26,.12)` | popovers, nav overflow dropdown |
| `elev-4` | `0 24px 60px rgba(22,22,26,.18)` | modal dialog |

### A.5 Gradients (decor only — never behind body text)
- `grad-hero`: `linear-gradient(135deg, #EEF0FF 0%, #F5F3FF 50%, #ECFDF5 100%)` — home hero panel bg.
- `grad-accent` (per category, generated, not a token): a 2px top bar / underline on cards and
  modal headers, `linear-gradient(90deg, <cat-strong> 0%, <cat-strong> 70%, transparent 100%)`.
  Implement as an inline style or a `data-category`-driven CSS rule; do **not** hard-code 7 classes
  if a single CSS custom property `--cat` set per card is cleaner.

### A.6 Tailwind CDN config — v3 replacement block
Use this in every `<head>` (supersedes v2 §1 config):
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          paper: '#FAFAF7', surface: '#FFFFFF', ink: '#16161A',
          muted: '#6B6B73', line: '#E6E5DF',
          brand: '#4338CA', 'brand-soft': '#EEF0FF',
          cat: {
            'open-source':       { strong: '#047857', soft: '#ECFDF5' },
            'closed':            { strong: '#4338CA', soft: '#EEF0FF' },
            'openclaw-eco':      { strong: '#B45309', soft: '#FEF3C7' },
            'runners-paralelos': { strong: '#1D4ED8', soft: '#EFF6FF' },
            'swarms':            { strong: '#6D28D9', soft: '#F5F3FF' },
            'loops-autonomos':   { strong: '#BE123C', soft: '#FFF1F2' },
            'asistentes':        { strong: '#0F766E', soft: '#F0FDFA' },
          },
        },
        fontFamily: { display: ['Fraunces','serif'], body: ['Inter','sans-serif'] },
        boxShadow: {
          'elev-1': '0 1px 2px rgba(22,22,26,.06)',
          'elev-2': '0 4px 12px rgba(22,22,26,.08)',
          'elev-3': '0 12px 28px rgba(22,22,26,.12)',
          'elev-4': '0 24px 60px rgba(22,22,26,.18)',
        },
        backgroundImage: {
          'grad-hero': 'linear-gradient(135deg,#EEF0FF 0%,#F5F3FF 50%,#ECFDF5 100%)',
        },
        screens: { sm: '360px', md: '768px', xl: '1280px' },
        maxWidth: { content: '1152px' },
      },
    },
  };
</script>
```
Pam: because Tailwind CDN can't JIT-compile a class built from a runtime `data-category` value,
drive the per-card category color through a **CSS custom property** set on the card
(`style="--cat:#047857"`) and reference it in `styles.css` (`.tool-card{border-color:var(--cat)}`
on hover, chip text `color:var(--cat)`, top bar `background:linear-gradient(90deg,var(--cat),transparent)`).
The static `cat.*` Tailwind tokens above are for places where the category is known at author time
(e.g. the comparativa legend). Keep both paths; don't try to template 7 Tailwind class names.

---

## v3 §B. Nav + 4 new pages (9 items total)

### B.1 Page set (5 existing + 4 new = 9, all flat at repo root)
| File | Purpose | Nav label (ES) | Group |
|------|---------|----------------|-------|
| `index.html` | Home / hero + intro + featured | Inicio | — |
| `agentes-cli.html` | CLI agents listing (cards + filter + **modal**) | Agentes CLI | Catálogo |
| `orquestadores.html` | Orchestrators listing (cards + filter + **modal**) | Orquestadores | Catálogo |
| `comparativa.html` | **NEW** — side-by-side comparison table of tools | Comparativa | Catálogo |
| `casos-uso.html` | **NEW** — "qué herramienta para qué tarea" scenarios | Casos de uso | Aprender |
| `ruta-aprendizaje.html` | **NEW** — ordered learning path, beginner→advanced | Ruta de aprendizaje | Aprender |
| `concepto.html` | Article template (single long-form concept) | Conceptos | Aprender |
| `glosario-faq.html` | **NEW** — glossary terms + FAQ accordion | Glosario y FAQ | Aprender |
| `acerca.html` | About + sources | Acerca | — |

The two groups (**Catálogo**, **Aprender**) are the v3 information architecture: catalog =
"what exists", learn = "how to start". They drive both the desktop overflow grouping and the
mobile drawer sections below.

### B.2 New-page content contracts (so Andy/Oscar know what to fill; Pam renders)
- **comparativa.html** — a responsive comparison table reading `window.GUIA_DATA`. Columns:
  Herramienta · Categoría · Estrellas · Precio · Lenguaje/Licencia · Cómo empezar (short). Rows
  from both `cli` and `orquestadores`. `<480px`: collapse to stacked "key: value" cards, never a
  horizontally-scrolling table that clips. Sortable by stars is nice-to-have, not required.
- **casos-uso.html** — 5–8 scenario blocks. Each: a Spanish task title ("Refactorizar un proyecto
  grande", "Automatizar revisiones de PR", …), 2–3 sentence explanation, and 1–3 recommended tools
  rendered as mini-cards that **open the same modal** (§C) via tool `name` lookup in `GUIA_DATA`.
- **ruta-aprendizaje.html** — an ordered, numbered vertical path (4–6 steps), beginner→advanced.
  Each step: title, what-you-learn paragraph, and the tool(s) for that step (mini-card → modal).
  Visual: a left rail with numbered nodes; on `<480px` the rail stacks above each step.
- **glosario-faq.html** — two sections on one page: (1) **Glosario**, an alphabetized term list
  (`<dl>` of término/definición), and (2) **FAQ**, a vanilla-JS accordion (`<button aria-expanded>`
  toggling a `<div role="region">`). Both authored by Andy in `content/copy.md`. Content lives in
  markup (not data.js) — these are prose, not tool records.

### B.3 Shared 9-item nav — grouping + overflow (must not break <480px)
Replaces v2 §2 header. Three layouts off the **same** link list:

- **Desktop ≥1280 (`xl`):** show the 4 ungrouped-priority links flat — `Inicio · Agentes CLI ·
  Orquestadores · Comparativa` — then two dropdown triggers **Aprender ▾** (Casos de uso, Ruta de
  aprendizaje, Conceptos, Glosario y FAQ) and the `Acerca` link last. Dropdowns: `button
  aria-expanded`/`aria-haspopup="menu"` opening a `elev-3` panel, closing on outside-click + ESC.
  (Flat-9 overflows 1152px with Fraunces nav — grouping is required, not cosmetic.)
- **Tablet 768–1279 (`md`):** brand + a single **Menú ▾** button → one `elev-3` dropdown listing
  all 9 links under the two group headings (Catálogo / Aprender) + the standalone Inicio/Acerca.
- **Mobile <768:** hamburger → full-height drawer (`surface`, `elev-4`), links stacked and
  **sectioned** under `Catálogo` and `Aprender` headings (`text-xs uppercase text-muted`), with
  Inicio at top and Acerca at bottom. Drawer is a focus-trapped overlay (same a11y as the modal,
  §C.4): ESC closes, focus returns to the hamburger, `aria-expanded` on the toggle. At `<480px`
  the drawer is full-width — no horizontal scroll, no clipped labels (labels wrap if needed).

Active link on the current page keeps the v2 rule: `aria-current="page"` + `text-brand
font-semibold`. Group dropdown whose child is active also gets the `font-semibold` cue on its
trigger. The link list is authored **once** and reused on all 9 pages identically.

Example nav labels (Spanish, final): `Inicio`, `Agentes CLI`, `Orquestadores`, `Comparativa`,
`Casos de uso`, `Ruta de aprendizaje`, `Conceptos`, `Glosario y FAQ`, `Acerca`. Group headings:
`Catálogo`, `Aprender`.

---

## v3 §C. Expandable-card / modal contract (core v3 pattern)

The card (v2 §4) stays a card, but the whole card becomes a **trigger** that opens a modal
dialog with the tool's full v3 writeup. One modal element per page, reused for every card
(content injected on open). This is the make-or-break interaction — spec it exactly.

### C.1 Card trigger (extends v2 card markup)
- The card's primary action is "open detail". Make the **card itself** a `<button type="button">`
  OR keep `<article>` but add an explicit `<button class="card-more">Ver detalle</button>`.
  **Chosen contract: explicit button** (keeps the external `Ver →` repo link separate from the
  detail action, and keeps the card a non-nested landmark). Markup:
```html
<article class="tool-card group relative bg-surface border border-line rounded-xl p-6
                flex flex-col gap-3 shadow-elev-1 transition-all hover:shadow-elev-2 hover:-translate-y-1"
         data-category="open-source" style="--cat:#047857">
  <!-- 2px category top bar -->
  <span class="card-bar" aria-hidden="true"></span>
  <div class="flex items-start justify-between gap-3">
    <h3 class="font-display text-xl font-semibold text-ink">{name}</h3>
    <span class="text-xs px-2 py-0.5 rounded-full font-medium chip-cat">{badge}</span><!-- if badge -->
  </div>
  <p class="text-muted text-sm leading-relaxed line-clamp-3">{desc}</p>
  <div class="mt-auto pt-2 flex items-center justify-between text-sm">
    <span class="text-muted">★ {stars}</span>
    <div class="flex items-center gap-4">
      <button type="button" class="card-more font-medium text-[color:var(--cat)]"
              aria-haspopup="dialog" data-tool="{name}">Ver detalle</button>
      <a href="{url}" target="_blank" rel="noopener" class="text-muted hover:text-ink">Repo ↗</a>
    </div>
  </div>
</article>
```
- `data-tool="{name}"` is the lookup key the JS uses to find the record in `GUIA_DATA` (names are
  unique across `cli`+`orquestadores`; if a collision ever appears, Oscar disambiguates the name).
- `.chip-cat` / `.card-bar` colored via `--cat` in `styles.css` (see §A.6).

### C.2 Modal markup (one per page, hidden until opened)
```html
<div id="toolModal" class="modal-overlay hidden fixed inset-0 z-[100] bg-ink/40 backdrop-blur-sm
     flex items-end md:items-center justify-center p-0 md:p-6" >
  <div role="dialog" aria-modal="true" aria-labelledby="modalTitle"
       class="modal-panel bg-surface w-full md:max-w-2xl max-h-[90vh] overflow-y-auto
              rounded-t-2xl md:rounded-2xl shadow-elev-4" style="--cat:#047857">
    <header class="modal-head sticky top-0 bg-surface border-b border-line px-6 py-4
                   flex items-start justify-between gap-4">
      <div>
        <span class="text-xs px-2 py-0.5 rounded-full chip-cat font-medium">{categoria_label}</span>
        <h2 id="modalTitle" class="font-display text-2xl font-bold text-ink mt-1">{name}</h2>
      </div>
      <button type="button" class="modal-close text-muted hover:text-ink" aria-label="Cerrar">✕</button>
    </header>
    <div class="modal-body px-6 py-5 flex flex-col gap-5 text-ink">
      <p class="text-lg leading-relaxed">{long_desc}</p>
      <div class="grid sm:grid-cols-2 gap-4">
        <section><h3 class="font-semibold text-sm mb-1">Ventajas</h3>
          <ul class="list-disc pl-5 text-muted text-sm space-y-1"><!-- pros[] --></ul></section>
        <section><h3 class="font-semibold text-sm mb-1">Inconvenientes</h3>
          <ul class="list-disc pl-5 text-muted text-sm space-y-1"><!-- contras[] --></ul></section>
      </div>
      <section><h3 class="font-semibold text-sm mb-1">Cómo empezar</h3>
        <p class="text-muted text-sm leading-relaxed">{como_empezar}</p></section>
      <section><h3 class="font-semibold text-sm mb-1">Casos de uso</h3>
        <ul class="list-disc pl-5 text-muted text-sm space-y-1"><!-- casos_uso[] --></ul></section>
      <dl class="grid grid-cols-2 gap-3 text-sm border-t border-line pt-4">
        <div><dt class="text-muted">Precio</dt><dd class="text-ink">{precio}</dd></div>
        <div><dt class="text-muted">Lenguaje / Licencia</dt><dd class="text-ink">{lenguaje}</dd></div>
        <div><dt class="text-muted">Estrellas</dt><dd class="text-ink">★ {stars}</dd></div>
      </dl>
      <a href="{url}" target="_blank" rel="noopener"
         class="inline-flex w-fit px-4 py-2 rounded-lg text-white font-medium"
         style="background:var(--cat)">Ir al repositorio ↗</a>
    </div>
  </div>
</div>
```
On open, JS sets `--cat` on `.modal-panel` to the tool's category color and fills every `{…}` slot
+ the `pros[]`/`contras[]`/`casos_uso[]` lists from the record. Empty/absent optional fields →
hide that whole `<section>`, don't render an empty heading.

### C.3 States
- **Closed (default):** overlay has `hidden`; `body` scroll normal; triggers `aria-expanded` n/a
  (they use `aria-haspopup="dialog"`, not expanded — the dialog is the state owner).
- **Open:** remove `hidden`; add `overflow-hidden` to `<body>` (scroll-lock); move focus to the
  `.modal-close` button (or the dialog); record the trigger element to restore focus on close.
- **Transition:** overlay fades (`opacity`), panel rises (`translate-y` from `8px`/from bottom on
  mobile). 150–200ms. Respect `prefers-reduced-motion: reduce` → no transform, instant show.

### C.4 Accessibility (mandatory — same engine reused by the mobile nav drawer)
- Dialog container: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modalTitle"`.
- **Focus trap:** Tab/Shift+Tab cycles only within the dialog while open.
- **ESC** closes. **Outside-click** (on `.modal-overlay`, not the panel) closes.
- On close: remove scroll-lock, `hidden` back on, **return focus to the triggering button**.
- Close button has `aria-label="Cerrar"`. Title is the labelled element.
- One shared `app.js` helper (`openDialog(el, trigger)` / `closeDialog()`) powers both the tool
  modal and the mobile nav drawer — build the trap once, reuse twice.

### C.5 Source of the long-form text
All modal long-form content comes from the **v3 data fields in §D** (`long_desc`, `pros`,
`contras`, `como_empezar`, `casos_uso`, `precio`, `lenguaje`). No long-form prose lives in the
card markup. Oscar fills these per tool; Pam renders them; Andy may polish the Spanish but the
canonical store is `data.js`.

---

## v3 §D. Data schema extension — `assets/data.js`

The v2 6-field shape `{name, desc, url, stars, badge, category}` is **unchanged and still
required**. v3 **adds 7 fields** to every tool object in both `cli[]` and `orquestadores[]`. All
strings are **natural Spanish prose** (never caveman, never English placeholders).

```js
{
  // ── v2 fields (unchanged) ──
  name: "string",
  desc: "string",          // ≤140 chars, one-sentence card summary
  url: "https://…",
  stars: 0,
  badge: "string|null",
  category: "open-source", // v2 enums unchanged
  // ── v3 fields (NEW, all required unless marked optional) ──
  long_desc: "string",     // 2–4 sentence Spanish paragraph for the modal body. What it is,
                           //   who it's for, what makes it distinct. ≤600 chars. No markdown.
  pros: ["string"],        // 2–4 short Spanish phrases. Each a concrete strength. ≤80 chars each.
  contras: ["string"],     // 1–3 short Spanish phrases. Honest limitations. ≤80 chars each.
  como_empezar: "string",  // 1–2 Spanish sentences: the first concrete step (install cmd in prose
                           //   or "instala con npm…", link to docs). ≤240 chars. Plain text.
  casos_uso: ["string"],   // 2–4 Spanish phrases naming real tasks the tool fits. ≤80 chars each.
  precio: "string",        // Spanish: "Gratis", "Gratis (código abierto)", "De pago", 
                           //   "Freemium", "Gratis con límites · planes de pago". Never null;
                           //   use "Desconocido" if the source doesn't say.
  lenguaje: "string"       // For OSS: primary language OR license, e.g. "Python", "Rust",
                           //   "MIT", "Apache-2.0". For closed tools: the license/terms label,
                           //   e.g. "Propietario". Never null; "Desconocido" if unknown.
}
```

### D.1 Field rules (binding on Oscar)
- Every v3 string is **derived from the two source awesome-lists or the tool's own repo/site** —
  no invented features, no invented prices. If a fact isn't in a source, write `"Desconocido"`
  (`precio`/`lenguaje`) or omit the item from the array (`pros`/`contras`/`casos_uso`) rather
  than guess. `long_desc`/`como_empezar` must always be filled (paraphrase the source, don't fabricate).
- Arrays are **never empty for `pros`** (≥2) — if you can't find 2 honest strengths, flag the
  tool to god. `contras`/`casos_uso` ≥1.
- Char limits are soft guidance for layout consistency, not validated — but keep modal scannable.
- Spanish only, full natural prose. No English, no caveman, no placeholder lorem.

### D.2 Backward compatibility
Adding fields does not break the v2 listing/filter (it reads only the old 6). Pages that don't
open modals (index featured, acerca) keep working untouched. `GUIA_LABELS` (v2 §3) is unchanged
and is the single source for category display names in cards, chips, modals, filters, comparativa.

### D.3 New derived read for comparativa.html
`comparativa.html` reads the same `GUIA_DATA` — no new data store. It surfaces
`name · category(label) · stars · precio · lenguaje · como_empezar(truncated)` per row. If a tool
lacks v3 fields at render time, show `—`; don't crash.

---

## v3 file layout (delta on v2)
```
web-guia/
├── (v2) index.html agentes-cli.html orquestadores.html concepto.html acerca.html
├── (v3 NEW) comparativa.html  casos-uso.html  ruta-aprendizaje.html  glosario-faq.html
├── assets/
│   ├── data.js     (Oscar — adds 7 v3 fields per tool)
│   ├── styles.css  (Pam — adds: --cat rules, modal/drawer styles, elevation, gradients)
│   └── app.js      (Pam — adds: openDialog/closeDialog focus-trap engine, modal fill, nav groups)
└── content/copy.md (Andy — adds: glosario terms, FAQ Q&A, casos-uso + ruta-aprendizaje prose)
```

## v3 ownership (who fills what)
- **Oscar:** 7 new `data.js` fields per tool (§D), Spanish, sourced.
- **Andy:** Spanish prose for `glosario-faq`, `casos-uso`, `ruta-aprendizaje` in `content/copy.md`;
  may polish `long_desc` wording.
- **Pam:** all markup/CSS/JS — v3 color system (§A), 9-item grouped nav (§B.3), 4 new pages (§B.2),
  modal + focus-trap engine (§C), comparativa render (§B.2). Builds to this contract exactly.
- **Angela:** QA against this contract — AA contrast on all 7 category accents, modal a11y
  (focus trap / ESC / focus-return), nav unbroken <480px, no crash on missing v3 fields.

**v3 contract locked. Build to it exactly. Conflict or ambiguity → report god, don't guess.**
