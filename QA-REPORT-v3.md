# QA Report v3 — web-guia

**Author:** Angela (wg-16 initial + wg-19 re-QA)  
**Date:** 2026-06-08 (re-QA: 2026-06-08)  
**Playwright:** 1.60.0 · Chromium · file:// protocol  
**Verdict: FAIL** (1 blocker remaining)  
**Blocker count:** 1 (F-1 index.html — partial fix)  
**Test run (wg-19 re-QA):** 25 passed, 1 failed (26 total)

---

## wg-19 Re-QA Summary (Dwight's F-1..F-4 fixes)

| Fix | Status | Notes |
|-----|--------|-------|
| F-1 agentes-cli.html overflow | **FIXED** ✓ | bodyScrollWidth=360 (was 384) |
| F-1 index.html overflow | **STILL FAILING** ✗ | bodyScrollWidth=443, +83px. See below. |
| F-2 SVG aria-hidden | **FIXED** ✓ | 0 untagged SVGs across all 9 pages |
| F-3 Modal heading DOM order | **FIXED** ✓ | `#toolModal` has `hidden` class, h1 precedes modal h2 on all 6 modal pages |
| F-4 renderMiniCards h4→p | **FIXED** ✓ | h4 count = 0 on casos-uso + ruta-aprendizaje |
| REG TC-1 nav/links | PASS ✓ | Desktop nav + mobile drawer all 9 pages |
| REG TC-3 filters | PASS ✓ | CLI (16 cards, 3 pills) + Orch (14 cards, 5 pills) |
| REG TC-2 modal | PASS ✓ | open/close/ESC/overlay/focus-trap |
| REG TC-7 JS errors | PASS ✓ | Zero real errors all 9 pages |

---

## REMAINING FAILURE — F-1b: index.html horizontal overflow

**Measured (wg-19):** `bodyScrollWidth=443`, `innerWidth=360` → **+83px overflow** (unchanged from wg-16)

**Root cause (diagnosed via `getBoundingClientRect` sweep):**

```
<a href="comparativa.html" class="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
  Ver comparativa completa →
</a>
```

Location: `index.html` line 216, inside:
```html
<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 reveal-target">
```

**Why it overflows:** At exactly 360px viewport, the Tailwind `sm:` breakpoint activates, switching the parent div from `flex-col` to `flex-row`. The `<a>` has `shrink-0` (won't shrink) and natural width ≈195px. Combined with the h2 div on the left, the total row exceeds 360px - 32px (padding) = 328px available width, causing 83px overflow.

**The `<a>` measurements:** left=248, right=443, width=195

**Fix needed (Pam/Dwight):** One of:
- Remove `shrink-0` from the `<a>` and allow text to wrap
- Change `sm:flex-row` to `md:flex-row` so the row layout only activates above 768px (not at 360px)
- Add `flex-wrap` to the parent div so the link wraps to a new line when space is insufficient
- Add `overflow-x: clip` or `overflow-hidden` to the section wrapper (quick containment fix)

Note: Dwight's fix on agentes-cli.html used `overflow-hidden` on the CTA section and grid breakpoint adjustments — a similar approach could work here, but the specific overflowing element is the `sm:flex-row` header row of the "Herramientas destacadas" section, not the CTA.

---

## Executive Summary

TC-1, TC-2 (with note), TC-3, TC-4, TC-7 pass cleanly. TC-8 and TC-9 pass with minor notes.  
TC-5 and TC-6 are genuine fails that need Pam to fix before shipping.

---

## Results by TC

| TC | Result | Notes |
|----|--------|-------|
| TC-1 | PASS | 9 pages × all links verified; mobile drawer open/close/ESC; .nav-active confirmed |
| TC-2 | PASS-with-notes | Modal works; ESC/overlay/focus-trap correct; 1 LOW finding (see below) |
| TC-3 | PASS | CLI 3 pills + 16 cards; Orch 5 pills + 14 cards; filter state survives modal |
| TC-4 | PASS | Counts exact; featured grid 6; badges correct; stars/dash logic correct; noopener on all links |
| TC-5 | **FAIL** | Horizontal overflow at 360px — index.html +83px, agentes-cli.html +24px |
| TC-6 | **FAIL** | 3 sub-issues: SVG aria-hidden missing, modal heading DOM order, h2→h4 skip |
| TC-7 | PASS | Zero real JS errors across all 9 pages; Tailwind CDN warning correctly excluded |
| TC-8 | PASS-with-notes | Spanish prose intact; 1 minor title-case inconsistency |
| TC-9 | PASS | Comparativa table renders; FAQ accordion toggles; glosario renders; ruta 6 steps as h2s |

---

## Failures (FAIL)

### F-1 · TC-5 · Horizontal overflow at 360px viewport

**Severity: HIGH** (users on mobile see unwanted horizontal scroll)

**Measured:**
- `index.html`: `document.body.scrollWidth = 443`, `window.innerWidth = 360` → **+83px overflow**
- `agentes-cli.html`: `document.body.scrollWidth = 384`, `window.innerWidth = 360` → **+24px overflow**
- Other pages not checked individually but likely same root cause.

**Repro:** Open `index.html` in Chrome DevTools at 360×812. Drag horizontal scrollbar — page scrolls.

**Fix needed (Pam):** Identify and constrain the overflowing element. Most likely candidates:
- Hero section badge or CTA buttons not wrapping at `<360px` (the Tailwind `sm:` breakpoint is set to `360px` so at exactly 360px all `sm:` variants apply — test at 359px to confirm)
- A pre-`sm` element with fixed or min-width that exceeds the viewport
- The `.hero-grid` background or a flex/grid container not respecting viewport width

Quick check: add `overflow-x: clip` to `body` and see what disappears to locate the culprit.

---

### F-2 · TC-6 · A11y — SVGs missing aria-hidden

**Severity: MEDIUM** (WCAG 2.1 SC 4.1.2 — fails AA)

**Affected:** All pages containing the nav hamburger, mobile drawer close button, modal close button, or section icon SVGs.

**Confirmed on index.html** (9 SVGs without aria-hidden):
1. Mobile hamburger SVG (inside `<button aria-label="Abrir menú">`)
2. Mobile drawer close SVG (inside `<button aria-label="Cerrar menú">`)
3. Modal close SVG (inside `<button id="modalClose" aria-label="Cerrar">`)
4. Arrow SVG inside "Explorar Agentes CLI" CTA link (has visible text)
5. Icon SVG in "Agentes de Código CLI" route card div
6. Arrow SVG inside "Ver catálogo" span
7. Icon SVG in "Orquestadores" route card div
8. Arrow SVG inside "Ver catálogo" span (Orquestadores)
9. Arrow SVG inside "Empezar la ruta de aprendizaje" button

All are decorative (parent element has visible text label). Screen readers will announce them as unnamed images.

**Fix needed (Pam):** Add `aria-hidden="true"` to every decorative `<svg>` element in all 9 pages. Applies to:
- All `<svg>` inside `<button>` or `<a>` that already have visible text
- All icon `<svg>` in cards/sections that are purely decorative
- Pattern: `<svg ... aria-hidden="true">` — simple attribute addition

---

### F-3 · TC-6 · Modal heading DOM order — h2 before page h1

**Severity: MEDIUM** (WCAG 2.1 SC 1.3.1 heading structure)

**Affected:** All pages that include `#toolModal` in DOM: `index.html`, `agentes-cli.html`, `orquestadores.html`, `comparativa.html`, `casos-uso.html`, `ruta-aprendizaje.html`

**Root cause:** The `#toolModal` div is placed in the HTML body BEFORE the main page sections. It contains:
- `<h2 id="modalToolName">` (empty when modal closed)
- `<h3>Ventajas</h3>`
- `<h3>Limitaciones</h3>`
- `<h3>Cómo empezar</h3>`

These headings appear in DOM order BEFORE the page's `<h1>`, creating an invalid heading sequence (h2 → h1). The modal is visually hidden (`.hidden` class) but these elements are NOT aria-hidden, so screen readers parse them as part of the page structure.

**Verified by:** `querySelectorAll('h1,h2,h3,h4,h5,h6')` on index.html returns `[H2, H3, H3, H3, H1, ...]` — empty H2 is first.

**Fix needed (Pam):** One of two approaches:
- **Option A (simplest):** Add `aria-hidden="true"` to the heading elements inside `#toolModal`:
  ```html
  <h2 id="modalToolName" aria-hidden="true"></h2>
  ```
  Then in `fillModal()` in `app.js`, set `textContent` and remove `aria-hidden` before opening. Restore on close.
- **Option B (cleaner):** Change `<h2 id="modalToolName">` to `<p>` or `<div>` styled as heading. Use `aria-labelledby` referencing a `<p>` — `role="dialog"` only needs any labelling element, not a semantic heading.

---

### F-4 · TC-6 · Heading skip h2 → h4 on casos-uso and ruta-aprendizaje

**Severity: LOW** (WCAG 2.1 SC 1.3.1 — common pattern but technically non-compliant)

**Affected:**
- `casos-uso.html`: Each scenario section uses `<h2>Quiero corregir un bug…</h2>` followed immediately by `<h4>Aider</h4>`, `<h4>Claude Code</h4>` etc. (rendered by `renderMiniCards()` which uses `<h4>`)
- `ruta-aprendizaje.html`: Same pattern — `<h2>Entiende qué es un agente IA</h2>` → `<h4>Gemini CLI</h4>`

**Root cause:** `renderMiniCards()` in `assets/app.js` (line ~353) emits `<h4>` for tool names. When used inside sections that use h2 as the section heading, this creates a h2→h4 jump (no h3 in between).

**Fix needed (Pam):** In `renderMiniCards()`, change `<h4>` to `<p>` (or `<span>`) since these tool names inside mini-cards are labels, not document section headings. The `.mini-card` button styling already provides visual prominence:
```js
// Change:
'<h4 class="font-display text-base font-semibold text-ink mb-1">' + esc(tool.name) + '</h4>'
// To:
'<p class="font-display text-base font-semibold text-ink mb-1">' + esc(tool.name) + '</p>'
```

---

## Notes (PASS-with-notes)

### N-1 · TC-2 · Tool card button missing aria-expanded

**Severity: LOW** (modal has correct ARIA, this is supplementary)

The `[data-tool]` buttons that open the tool modal do not set `aria-expanded="true"` when the modal is open. The modal itself has `role="dialog"` + `aria-modal="true"` which is the primary mechanism — `aria-expanded` on the trigger is a secondary pattern but recommended for better screen reader UX.

**Suggested fix (non-blocking):** In `openToolModal()` in `app.js`, set `trigger.setAttribute('aria-expanded', 'true')` on open and `'false'` on close.

### N-2 · TC-8 · Page title case inconsistency

**Severity: INFO** (style consistency, not functional)

Nav labels use sentence case: "Casos de uso", "Ruta de aprendizaje"  
Page `<title>` elements use title case: "Casos de Uso", "Ruta de Aprendizaje"

Inconsistency — choose one convention and apply consistently. Nav labels are user-facing; title case in `<title>` is fine for SEO but should match the H1.

---

## TC-1: Navigation Detail

**All 9 pages verified:**
- Desktop nav (`nav[aria-label="Navegación principal"]`): 5 direct links + 1 "Aprender" dropdown with 4 sub-links. All hrefs resolve to real files. ✓
- Mobile drawer (`#mobileDrawer nav`): 9 direct links, all resolve to real files. ✓
- Footer sitemap (`nav[aria-label="Mapa del sitio"]`): 9 links. ✓
- Active page: `.nav-active` class applied correctly via `setActiveNavLinks()`. ✓
- Note: Implementation uses `.nav-active` CSS class, not `aria-current="page"` (QA-PLAN referenced `aria-current` but actual impl is class-based — both are valid patterns, class is simpler). 

**Mobile drawer:**
- Hamburger visible at 360px, desktop nav hidden. ✓
- Drawer opens/closes via click, ESC. ✓
- Drawer has `role="dialog"` + `aria-modal="true"`. ✓

---

## TC-2: Expandable Cards Detail

**Passed:**
- Modal opens on card click, correct `data-tool` routing. ✓
- `role="dialog"` + `aria-modal="true"` + `aria-labelledby="modalToolName"`. ✓
- Close button has `aria-label="Cerrar"`. ✓
- ESC key closes modal via keydown listener. ✓
- Overlay click closes modal (verified via mouse.click at offset coordinates). ✓
- Focus trap: Tab stays within `#modalPanel`. ✓
- `body.modal-open` added on open, removed on close (scroll lock). ✓
- Modal content: no raw key names (`long_desc`, `pros`, `contras`, `como_empezar`, `undefined`). ✓
- Precio and Lenguaje fields render Spanish content. ✓
- Pros section header: "Ventajas" ✓; Contras section header: "Limitaciones" ✓

---

## TC-3: Filters Detail

- CLI: 3 pills (Todos, Código abierto, Cerrado / comercial). ✓
- CLI: All 16 cards visible on Todos. ✓
- CLI: open-source + closed filters work correctly. ✓
- Orch: 5 pills (Todos + 4 category). ✓
- Orch: All 14 cards visible on Todos. ✓
- Orch: Each category filter shows correct subset. ✓
- Filter state survives modal open/close (count unchanged). ✓

---

## TC-4: Data Integrity Detail

- CLI: 16 cards. ✓
- Orquestadores: 14 cards. ✓
- Featured grid (index.html): 6 named tools (Claude Code, Gemini CLI, Aider, claude-squad, claude-flow, gastown) — hardcoded by name, not by badge. ✓
- CLI badge chips: 5 cards with "Popular" badge (Hermes Agent, OpenCode, Claude Code, Gemini CLI, Codex CLI). ✓
- Stars: `rowboat` (stars=0) shows "—" correctly. ✓
- Card links: `target="_blank"` + `rel="noopener"`. ✓
- Footer links: `target="_blank"` + `rel="noopener"` on all 9 pages. ✓
- No `undefined` or `null` text in any card grid. ✓

---

## TC-7: Console Errors Detail

Zero real JavaScript errors on all 9 pages. Tailwind CDN production warning was detected and correctly excluded from failure counts per QA-PLAN. ✓

---

## TC-8: Spanish Prose Detail

**Passed:**
- All page `<title>` elements contain Spanish text. ✓
- All `<h1>` elements contain Spanish headings. ✓
- No raw JS schema keys (`long_desc`, `como_empezar`, `casos_uso`) visible in body text. ✓
- Modal prose: long_desc, pros, contras, como_empezar all render Spanish content. ✓
- Section labels: "Ventajas" / "Limitaciones" / "Cómo empezar". ✓
- New pages (comparativa, casos-uso, ruta-aprendizaje, glosario-faq): all h1s are Spanish. ✓

**Note (N-2):** Title case inconsistency — see Notes section above.

---

## TC-9: Feature Checks Detail

- **comparativa.html:** Table body renders with 30 rows (16 CLI + 14 orch, sorted by stars). ✓
- **glosario-faq.html:** FAQ accordion toggles correctly:
  - Click to open → `.open` class added, `aria-expanded="true"`. ✓
  - Click again to close → `.open` removed, `aria-expanded="false"`. ✓
  - Accordion behavior: opening second item closes first. ✓
  - 14+ FAQ items present. ✓
- **glosario-faq.html:** Glosario terms rendered from `GUIA_V3.glosario` data. ✓
- **ruta-aprendizaje.html:** 6 learning steps present as `<h2>` sections (different structure than QA-PLAN assumed — no `.step-rail` class used, but content and count correct). ✓
- **casos-uso.html:** 10 scenario sections present as `<h2>` headings. ✓

---

## Fix Routing for Pam

| # | File(s) | Fix |
|---|---------|-----|
| F-1 | All pages (esp. index.html) | Fix horizontal overflow at 360px — investigate hero/CTA area |
| F-2 | All 9 pages | Add `aria-hidden="true"` to all decorative `<svg>` elements |
| F-3 | index, agentes-cli, orquestadores, comparativa, casos-uso, ruta-aprendizaje | Add `aria-hidden="true"` to `<h2 id="modalToolName">` and the 3 `<h3>` inside modal; remove on open, restore on close |
| F-4 | `assets/app.js` (renderMiniCards) | Change `<h4>` to `<p>` for tool names in mini-cards |
| N-1 | `assets/app.js` (openToolModal) | Set `aria-expanded` on trigger button (non-blocking) |
| N-2 | All 9 `<title>` tags OR nav labels | Align title case convention |
