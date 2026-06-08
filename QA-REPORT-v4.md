# QA Report v4 — web-guia

**Author:** Angela (wg-23)  
**Date:** 2026-06-08  
**Spec:** `tests/wg-qa-v4.spec.js`  
**Result: 82/82 PASS ✅**

---

## Summary

| Area | Tests | Result |
|------|-------|--------|
| V4 dark palette contrast (WCAG AA) | 7 | ✅ PASS |
| V4 terminal component visibility | 3 | ✅ PASS |
| F-1 horizontal overflow 360px (all 9 pages) | 9 | ✅ PASS |
| F-2 decorative SVG aria-hidden (all 9 pages) | 9 | ✅ PASS |
| F-3 modal hidden by default + heading order | 6 | ✅ PASS |
| F-4 no `<h4>` from renderMiniCards | 2 | ✅ PASS |
| TC-1 nav links (desktop xl + mobile drawer) | 3 | ✅ PASS |
| TC-2 modal open/close/ESC/focus trap/content | 3 | ✅ PASS |
| TC-3 filters (CLI 16 cards, Orch 14 cards) | 2 | ✅ PASS |
| TC-5 responsive overflow 768px + 1280px | 18 | ✅ PASS |
| TC-6 exactly one h1 per page | 9 | ✅ PASS |
| TC-7 zero real JS errors (all 9 pages) | 1 | ✅ PASS |
| TC-8 Spanish prose (no English leak/raw keys) | 9 | ✅ PASS |
| TC-9 dark theme body bg (#080810) all pages | 1 | ✅ PASS |

---

## V4 Dark Palette — Contrast Ratios (WCAG AA = 4.5:1)

| Token | Color | Background | Ratio | AA? |
|-------|-------|------------|-------|-----|
| ink | #E8E6FF | paper #080810 | **16.34:1** | ✅ AAA |
| ink | #E8E6FF | surface #0F0F1C | **15.55:1** | ✅ AAA |
| brand | #818CF8 | paper #080810 | **6.69:1** | ✅ AA |
| brand | #818CF8 | surface #0F0F1C | **6.37:1** | ✅ AA |
| muted | #8888B4 | paper #080810 | **5.92:1** | ✅ AA |
| muted | #8888B4 | surface #0F0F1C | **5.63:1** | ✅ AA |

### Category Colors on Soft Backgrounds

| Category | Strong | Soft bg | Ratio | AA? |
|----------|--------|---------|-------|-----|
| open-source | #10B981 | #052014 | **6.77:1** | ✅ |
| closed | #818CF8 | #1A1840 | **5.64:1** | ✅ |
| openclaw-eco | #FBBF24 | #1C1400 | **10.94:1** | ✅ |
| runners-paralelos | #60A5FA | #08152A | **7.18:1** | ✅ |
| swarms | #A78BFA | #1A1030 | **6.65:1** | ✅ |
| loops-autonomos | #F87171 | #200C0C | **6.78:1** | ✅ |
| asistentes | #34D399 | #062518 | **8.50:1** | ✅ |

All 7 category color pairs pass AA with comfortable margins.

---

## V4 Terminal Component

- **index.html @ 1280px:** 1 terminal visible ✅
- **index.html @ 360px:** terminal not rendered (parent `hidden md:block`) ✅  
- **agentes-cli.html @ 1280px:** 1 terminal visible ✅

Terminal class now used as primary graphic device in hero sections, correctly hidden on mobile.

---

## Regression Checks (v3 26/26 preserved)

- **F-1 360px overflow:** 9/9 pages `bodyScrollWidth = 360` ✅
- **F-2 aria-hidden:** 0 untagged decorative SVGs across all 9 pages ✅
- **F-3 modal default state:** `hidden` class present on load, h1 precedes modal h2 on all 6 modal pages ✅
- **F-4 renderMiniCards:** 0 `<h4>` elements on casos-uso.html and ruta-aprendizaje.html ✅
- **TC-1 nav:** Desktop xl nav has 9 hrefs; mobile drawer has exactly 9 links; hamburger open/close works ✅
- **TC-2 modal:** open/close/ESC/overlay-click/focus-trap all pass; Spanish content with no `undefined`/`null` ✅
- **TC-3 filters:** CLI 16 cards, Orch 14 cards; subset filter + restore "Todos" correct ✅
- **TC-5 responsive:** No overflow at 768px or 1280px across all 9 pages ✅
- **TC-6 headings:** Exactly 1 `<h1>` per page across all 9 pages ✅
- **TC-7 JS errors:** 0 real errors across all 9 pages (modal open/close exercised) ✅
- **TC-8 Spanish:** No English body copy patterns, no raw schema keys visible ✅
- **TC-9 dark bg:** `rgb(8, 8, 16)` confirmed on body across all 9 pages ✅

---

## Verdict: SHIP ✅

v4 fully QA-clear. 82/82 tests pass. Dark palette exceeds WCAG AA across all color pairings. All v3 regression checks preserved. No blockers.
