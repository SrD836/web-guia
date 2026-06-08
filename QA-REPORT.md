# QA Report — web-guia prototype

**Date:** 2026-06-07  
**Reviewer:** Dwight (wg-5, reassigned from Angela)  
**Verdict:** **PASS-with-notes**  
**Browser check:** RAN — Playwright 1.60.0, Chromium, `file://` protocol

---

## Check 1 — Nav: 5 links, all pages, aria-current ✅ PASS

Browser result (Playwright):

| Page | Nav links | aria-current |
|------|-----------|--------------|
| index.html | 5 | "Inicio" |
| agentes-cli.html | 5 | "Agentes CLI" |
| orquestadores.html | 5 | "Orquestadores" |
| concepto.html | 5 | "Conceptos" |
| acerca.html | 5 | "Acerca" |

Both desktop nav and mobile nav contain all 5 links. Each page correctly marks its own link with `aria-current="page"` and `text-accent font-semibold` styling. Nav toggle JS correctly toggling `hidden`/`flex` on `#navMobile`.

---

## Check 2 — Filters ✅ PASS (with one expected note)

### agentes-cli.html
| Check | Expected | Actual |
|-------|----------|--------|
| Total cards rendered | 16 | 16 ✅ |
| `open-source` pill filter | 13 visible | 13 ✅ |
| `closed` pill (3 entries) | 3 visible | verified via static analysis ✅ |
| `openclaw-eco` pill | "Sin resultados" shown | true ✅ |
| JS errors | 0 | 0 ✅ |

### orquestadores.html
| Check | Expected | Actual |
|-------|----------|--------|
| Total cards | 14 | 14 ✅ |
| `swarms` filter | 4 visible | 4 ✅ |
| `todos` reset | 14 visible | 14 ✅ |

**Note (LOW):** The "Ecosistema OpenClaw" pill on `agentes-cli.html` always triggers "Sin resultados para este filtro." This is correct behavior — zero openclaw-eco entries were included in data.js per data curation rules (inflated/satirical star counts in the OpenClaw family). The pill is technically functional but visually dead for users. Documenting here; not a bug, but god may want to decide whether to remove the pill, add a note, or keep it as-is.

---

## Check 3 — Cards render from GUIA_DATA ✅ PASS

- 16 CLI cards rendered on `agentes-cli.html` ✓
- 14 orchestrator cards on `orquestadores.html` ✓
- 6 featured cards on `index.html` (7 Popular items sliced to 6) ✓
- Badge chip: only rendered when `badge !== null` — confirmed in `renderCards()` (app.js:63–65) ✓
- Stars hidden (`—`) when `stars === 0`: logic correct (app.js:66–69), rowboat (stars=0) shows `—` ✓
- All external links have `target="_blank" rel="noopener"` (app.js:81) ✓
- Category label (Spanish) rendered on each card via `GUIA_LABELS` ✓
- No JS errors on any page ✓

**Info (non-blocking):** Card HTML is built via string concatenation in `renderCards()` without HTML-escaping tool names or descriptions. No injection risk with current data (no `<`, `>`, `"`, `&` in any entry), but worth noting for future data updates.

---

## Check 4 — Responsive 360/768/1280 ✅ PASS (static analysis)

*Browser check performed via static analysis; layout verified via Tailwind class audit.*

- Card grid: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3` ✓ on both listing pages
- Nav collapses: desktop `hidden md:flex`, button `md:hidden` ✓
- Mobile nav JS correctly adds `flex`/removes `hidden` on toggle ✓
- Max-width `max-w-content` (1152px) applied on all sections ✓
- `px-6` gutters on all content areas ✓
- Hero/section type scales down on mobile via `text-4xl md:text-5xl` pattern ✓

*Note: Viewport-resize test not automated; recommend manual check at 360px on a real device before public launch.*

---

## Check 5 — Accessibility ✅ PASS (with two minor notes)

- **Heading order:** h1 → h2 → h3 hierarchy correct on all 5 pages ✓
- **Alt text:** No `<img>` elements; emoji icons (⌨️ 🔗) are in `<div>` elements ✓
- **Contrast:** ink (#16161A) on paper (#FAFAF7): ~15:1 ✓; muted (#6B6B73) on paper: ~5.1:1, above WCAG AA 4.5:1 threshold ✓; accent (#4338CA) on white: ~7.5:1 ✓
- **Focus-visible ring:** `outline: 2px solid #4338CA` in styles.css ✓
- **prefers-reduced-motion:** Handled in both app.js (lines 28–34) and styles.css (lines 33–40) ✓
- **ARIA labels:** `nav[aria-label]` on all navs, `aria-label` on hamburger button ✓

**Note (LOW):** Emoji decorative icons (⌨️ 🔗) in index.html route cards are not `aria-hidden="true"`. Screen readers will announce them using their Unicode description (e.g., "keyboard emoji"). Add `aria-hidden="true"` to the containing `<div>` for cleaner screen-reader output.

**Note (LOW):** concepto.html sidebar table-of-contents links all use `href="#"` instead of actual section anchor IDs (e.g., `#section-1`). The article sections have no `id` attributes, so clicking any ToC link scrolls to the page top. Functional UX issue, not a JS error.

---

## Check 6 — Console errors ✅ PASS

Zero real JS errors across all 5 pages (Playwright `pageerror` events, Tailwind CDN warning excluded per spec).

```
index.html        → jsErrors: []
agentes-cli.html  → jsErrors: []
orquestadores.html→ jsErrors: []
concepto.html     → jsErrors: []
acerca.html       → jsErrors: []
```

Tailwind CDN "should not be used in production" warning is present as expected for a prototype — not flagged.

---

## Check 7 — Spanish prose, no caveman in UI ✅ PASS

All visible text is natural full-prose Spanish. Spot-checked:
- Hero copy: "Descubre cómo los agentes de código CLI y orquestadores transforman la forma en que escribes..." ✓
- Card descriptions: all natural sentences, no fragments or caveman-style drops ✓
- Filter pill labels: "Código abierto", "Cerrado / comercial", "Ejecutores en paralelo", etc. ✓
- No caveman language detected anywhere in user-facing text ✓

---

## Summary of findings

| # | Severity | Area | Finding | Blocker? |
|---|----------|------|---------|----------|
| 1 | LOW | Filters | `openclaw-eco` pill always "Sin resultados" (0 data entries by design) | No |
| 2 | LOW | a11y | Decorative emoji not `aria-hidden` (index.html route cards) | No |
| 3 | LOW | UX | concepto.html ToC `href="#"` — links don't scroll to sections | No |
| 4 | INFO | Code | `renderCards()` innerHTML concatenation without HTML escaping | No |

No blockers. Zero JS errors. All card counts correct. All filters functional. All nav correct.

**Overall verdict: PASS-with-notes** — prototype is shippable. Findings 1–3 are cosmetic/polish; none affect core functionality.
