# QA Plan v3 — web-guia

**Author:** Angela (wg-12)  
**Playwright:** 1.60.0 · Chromium · `file://` protocol — available, will run  
**Scope:** v2 carry-over audit + v3 test plan (9 pages, expandable cards, richer palette)

---

## Part 1 — v2 Carry-Over Audit

Dwight's QA-REPORT-v2.md verdict: **PASS**. Three items unresolved entering v3:

| # | Sev | Finding | v3 action |
|---|-----|---------|-----------|
| A | LOW | Hamburger toggle untested in browser (static analysis only, `md:hidden` hides it at Playwright's default 1280px viewport) | **Re-test in v3** at 360px viewport — click toggle, verify open/close SVG swap, aria-expanded flip, `#navMobile` flex/hidden |
| B | INFO | `renderCards()` innerHTML concatenation without HTML escaping | Monitor in v3 — if new data fields (long_desc, pros, contras) render via innerHTML, **flag as LOW if unescaped** |
| C | INFO | Footer external GitHub links missing `target="_blank" rel="noopener"` — was pre-existing from v1, status **FIXED** in v2 HTML (confirmed in index.html + agentes-cli.html) | Verify footer links on all 9 pages in v3 |

**Additional v2 observation (static read):**
- Nav header deviates from BUILD-SPEC (`bg-surface/90`) — uses `bg-[#0D0D10]` (dark). This was Pam's approved redesign. Not a bug; note for new pages.

---

## Part 2 — v3 Test Plan

### TC-1 Navigation — 9 pages × 9 links

**Scope:** All 9 pages must have all 9 nav links in header. Active page gets `aria-current="page"`.  
**Pages to verify (tentative names, adjust to actual filenames once Pam ships):**

| # | File | Nav label (ES) |
|---|------|---------------|
| 1 | `index.html` | Inicio |
| 2 | `agentes-cli.html` | Agentes CLI |
| 3 | `orquestadores.html` | Orquestadores |
| 4 | `concepto.html` | Conceptos |
| 5 | `acerca.html` | Acerca |
| 6 | `comparativa.html` | Comparativa |
| 7 | `casos-uso.html` | Casos de uso |
| 8 | `ruta-aprendizaje.html` | Ruta de aprendizaje |
| 9 | `glosario.html` | Glosario y FAQ |

**Checks per page:**
- Desktop nav: 9 `<a>` elements visible, all resolve to real files (no `href="#"` or 404)
- Mobile nav `#navMobile`: same 9 links stacked, hidden by default
- `aria-current="page"` on exactly ONE link (the current page) in BOTH desktop + mobile nav
- Active link visually distinguished (accent color or underline, per Pam's design system)
- Mobile nav: no horizontal overflow at `<480px` — wrap or stack if needed

**Playwright approach:**
```js
for (const page of PAGES) {
  await goto(page.file);
  expect(await $$('nav[aria-label="Principal"] a')).toHaveLength(9);
  expect(await $('[aria-current="page"]')).toHaveText(page.label);
}
```

**PASS:** All 9 pages × 9 links resolve, aria-current correct, no overflow.  
**FAIL:** Dead link, missing link, wrong/duplicate aria-current, mobile overflow.

---

### TC-2 Expandable Cards (new in v3)

Cards on agentes-cli.html + orquestadores.html expand to show extended detail (long_desc, pros, contras, como_empezar, casos_uso, precio, lenguaje fields from updated data.js schema).

**Open/close behavior:**
- Click card → modal/drawer opens with extended content
- Click close button (or overlay) → modal closes, focus returns to trigger card
- ESC key → modal closes, focus returns to trigger card
- Multiple rapid clicks → no double-open, no state corruption

**Keyboard navigation:**
- Tab into card → Enter/Space opens it (if card or a button is the trigger)
- Inside open modal: Tab cycles through focusable elements only inside modal (focus trap)
- No Tab leak to elements behind modal while open
- Shift+Tab works within modal (reverse cycle)
- ESC closes and returns focus to trigger

**ARIA:**
- Trigger element: `aria-expanded="true"` when open, `"false"` when closed
- Modal container: `role="dialog"` and `aria-modal="true"` (or `aria-labelledby` pointing to modal heading)
- Close button: `aria-label="Cerrar"` (or equivalent Spanish)

**Content rendered from new schema fields:**
- `long_desc` — full paragraph description (Spanish prose, not fragments)
- `pros` — list items (Spanish)
- `contras` — list items (Spanish)
- `como_empezar` — Spanish prose
- `casos_uso` — Spanish prose or list
- `precio` — shown (e.g. "Gratuito", "De pago", "Freemium")
- `lenguaje` — shown (e.g. "Python", "TypeScript")
- None of these fields should show raw JS keys or `undefined`

**PASS:** Open/close/ESC work; focus trap holds; aria-expanded + aria-modal correct; all new fields render with Spanish content.  
**FAIL:** Focus escapes modal; ESC does nothing; aria-expanded missing; any field shows `undefined` or English key name.

---

### TC-3 Filters (regression + new categories if any)

Existing behavior must survive v3:

**agentes-cli.html:**
- Pills: `Todos` + `Código abierto` + `Cerrado / comercial` (3 pills, openclaw-eco stays absent)
- Each pill filters grid; active pill gets accent bg
- `Todos` shows all 16+ cards (count may grow if new CLI tools added in v3 data)
- Empty filter → `Sin resultados` message visible

**orquestadores.html:**
- Pills: `Todos` + 4 category pills (runners-paralelos, swarms, loops-autonomos, asistentes)
- Same filter behavior

**If v3 adds expandable-card filter interaction:**
- Opening a card while a filter is active → modal still works correctly
- Closing modal → filter state unchanged

**PASS:** All filter pills work; counts correct; no-results message shown; filter state survives modal open/close.

---

### TC-4 Card Counts & Data Integrity

- agentes-cli.html: count = `GUIA_DATA.cli.length` (currently 16; may grow)
- orquestadores.html: count = `GUIA_DATA.orquestadores.length` (currently 14; may grow)
- index.html featured grid: ≤6 items with `badge === 'Popular'`
- Badge chip: shown ONLY when `badge !== null`
- Stars: shown ONLY when `stars > 0`; shows `—` when `stars === 0`
- All card links: `target="_blank"` + `rel="noopener"`
- Footer external links: `target="_blank"` + `rel="noopener"` on all 9 pages

**New v3 data fields:** no card should show `undefined`, `null` as text, or English fallback keys where Spanish label expected.

---

### TC-5 Responsive — 360 / 768 / 1280

Check at each breakpoint using Playwright `viewport`:

| Viewport | Expected |
|----------|---------|
| 360×812 | 1-col grid; hamburger visible; desktop nav hidden; no horizontal scroll; mobile modal/drawer doesn't overflow |
| 768×1024 | 2-col grid; desktop nav visible; hamburger hidden; expandable card modal fits |
| 1280×800 | 3-col grid; all sections within `max-w-content` (1152px) |

**New pages:** apply same grid + nav checks.  
**Mobile modal:** expandable card dialog at 360px must not overflow viewport horizontally; close button reachable without scroll.

**PASS:** No horizontal overflow at any breakpoint; grid columns correct; hamburger toggle works at 360px.

---

### TC-6 Accessibility — WCAG AA, headings, aria

**Contrast (critical for v3 richer palette):**
- All new color tokens must hit WCAG AA: text on background ≥ 4.5:1 (normal text), ≥ 3:1 (large text/UI)
- Specific spots to check: new accent colors on white, colored badge chips on card bg, modal overlay text, any new gradient text
- Use axe-core or manual contrast calculation for each new token

**Heading order:**
- Every page: `h1` exactly once, `h2`/`h3` in logical order, no skipped levels
- New pages (Comparativa, Casos de uso, Ruta de aprendizaje, Glosario+FAQ): verify heading structure

**Aria:**
- All SVG icons: `aria-hidden="true"` (decorative) or `aria-label` (informational)
- All interactive elements: accessible name present
- Modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` → heading inside modal
- Focus-visible ring: `:focus-visible` ring must be visible on all interactive elements (keyboard nav)

**prefers-reduced-motion:**
- With `@media (prefers-reduced-motion: reduce)` emulated: scroll-reveal targets get `.revealed` immediately (no animation); card hover transforms suppressed; modal open/close skips transition

**PASS:** All new text ≥ AA contrast; no heading skip; no decorative-SVG without aria-hidden; focus ring visible; motion disabled under reduced-motion.

---

### TC-7 Console Errors

- Zero real JS errors on all 9 pages (Playwright `pageerror` events)
- Expected/allowed: Tailwind CDN `"should not be used in production"` — NOT a failure
- Watch for: expandable-card JS errors on open/close, undefined variable errors from new data fields

---

### TC-8 Spanish Prose — No Caveman Leak

All user-facing text must be natural Spanish prose sentences. Flag as FAIL if any:
- English words in body copy (except proper nouns: "Claude Code", "GitHub", "API")
- Fragment-style text (caveman-style: no verb, no article where one is expected in Spanish)
- Raw key names from data schema (`long_desc`, `pros`, `contras`, etc.) visible in UI
- Page titles are Spanish and match nav labels

**New pages specifically:** 4 new pages are freshest risk — read all headings, intro copy, and any static text blocks.

---

### TC-9 Playwright Smoke Test Approach

**Confirmed:** Playwright 1.60.0 available. Chromium. `file://` protocol.

Run order:
1. Nav loop — all 9 pages × 9 links (TC-1)
2. Card count snapshot — agentes-cli + orquestadores (TC-4)
3. Filter interaction — click each pill, assert visible card count (TC-3)
4. Expandable card — open/close/ESC/keyboard on one sample card per listing page (TC-2)
5. Viewport sweep — repeat TC-1 nav + TC-5 grid at 360px, 768px, 1280px
6. Console errors — all 9 pages (TC-7)

For a11y contrast and heading order: augment Playwright with `axe-playwright` (`npm i -D @axe-core/playwright`) — inject axe on each page, assert `violations.length === 0` for contrast + heading rules.

---

## Summary

| TC | What | Priority |
|----|------|----------|
| TC-1 | 9-page nav + aria-current | P0 — blocker if fails |
| TC-2 | Expandable cards (open/close/ESC/focus trap/aria) | P0 — new feature, must work |
| TC-3 | Filters regression | P0 — existing behavior |
| TC-4 | Card counts + data fields | P1 |
| TC-5 | Responsive 360/768/1280 | P1 |
| TC-6 | A11y — contrast (new palette!) + headings + aria | P1 — new palette = new risk |
| TC-7 | Console zero-error | P1 |
| TC-8 | Spanish prose, no English/caveman leak | P0 — make-or-break per David |
| TC-9 | Playwright setup + smoke run | infra |

**When Pam ships v3:** run TC-9 smoke → check TC-7 → then full pass on TC-1 through TC-8. Report to god with PASS / PASS-with-notes / FAIL verdict and repro details for any failure.
