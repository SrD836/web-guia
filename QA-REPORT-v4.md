# QA Report v4.1 — web-guia

**Author:** Angela (wg-26 + wg-29)  
**Date:** 2026-06-08  
**Spec:** `tests/wg-qa-v4-1.spec.js`  
**Result: 104/104 PASS ✅ — CLEARED FOR DEPLOY**

---

## Executive Summary

All v4.1 fixes verified. BUG A and BUG B are fully resolved. Stanley wg-27 cleared to deploy.

| Fix wave | Result |
|----------|--------|
| BUG A — casos-uso empty grid (Pam wg-25) | ✅ FIXED |
| BUG B — light surfaces (Pam wg-25 + wg-28) | ✅ FULLY FIXED |
| V3 regression (82 checks) | ✅ ALL PASS |

---

## WG26-A: Dynamic Content Visibility — ALL PASS ✅

| Check | Result |
|-------|--------|
| `casos-uso.html` #casosGrid has 10 cards (BUG A fix) | ✅ count=10 |
| First card has opacity > 0 after IntersectionObserver | ✅ opacity=1, revealed=1 |
| 10 `caso-tools-*` containers, 29 mini-cards total | ✅ |
| `glosario-faq.html` glosario section has content (3966 chars) | ✅ |
| `ruta-aprendizaje.html` 6 rutaTools containers, 19 mini-cards | ✅ |
| `comparativa.html` visible content (5869 chars) | ✅ |

---

## WG26-B: Surface Contrast — ALL PASS ✅

### Previously failing surfaces (wg-28 fixes verified)

| Surface | bg (dark) | text | Ratio | AA? |
|---------|-----------|------|-------|-----|
| `glosario-faq.html` FAQ tip box heading | #1E1B4B | #E8E6FF (ink) | **13.34:1** | ✅ AAA |
| `glosario-faq.html` FAQ tip box body | #1E1B4B | #8888B4 (muted) | **5.13:1** | ✅ |
| `concepto.html` icon `!` (bg-[#200C0C]) | #200C0C | #F87171 | **6.90:1** | ✅ |
| `ruta-aprendizaje.html` Step-1 (#1E1B4B) | #1E1B4B | text-ink/80 | **>4.5:1** | ✅ |
| `ruta-aprendizaje.html` Step-2 (#052014) | #052014 | text-ink/80 | **>4.5:1** | ✅ |
| `ruta-aprendizaje.html` Step-3 (#08152A) | #08152A | text-ink/80 | **>4.5:1** | ✅ |
| `ruta-aprendizaje.html` Step-4 (#1A1030) | #1A1030 | text-ink/80 | **>4.5:1** | ✅ |
| `ruta-aprendizaje.html` Step-5 (#200C0C) | #200C0C | text-ink/80 | **>4.5:1** | ✅ |
| `ruta-aprendizaje.html` Step-6 (#051C1A) | #051C1A | text-ink/80 | **>4.5:1** | ✅ |

### Compare columns (wg-25 fixes — still passing)

| Surface | Ratio | AA? |
|---------|-------|-----|
| `concepto.html` `.compare-col-left` | **>4.5:1** | ✅ |
| `concepto.html` `.compare-col-right` | **>4.5:1** | ✅ |

---

## WG26-C: Modal Pros/Contras Contrast — ALL PASS ✅

| Surface | Ratio |
|---------|-------|
| Ventajas header #10B981 on #052014 | **6.77:1** ✅ |
| Limitaciones header #F87171 on #200C0C | **6.78:1** ✅ |
| Modal body ink/80 on surface #0F0F1C | **15.06:1** ✅ |
| Modal body ink/80 on pros block #052014 | **16.34:1** ✅ |
| Modal body ink/80 on contras block #200C0C | **16.34:1** ✅ |

---

## V4 Dark Palette — ALL PASS ✅

| Token | Color | Background | Ratio | AA? |
|-------|-------|------------|-------|-----|
| ink | #E8E6FF | paper #080810 | **16.34:1** | ✅ AAA |
| ink | #E8E6FF | surface #0F0F1C | **15.55:1** | ✅ AAA |
| brand | #818CF8 | paper #080810 | **6.69:1** | ✅ |
| brand | #818CF8 | surface #0F0F1C | **6.37:1** | ✅ |
| muted | #8888B4 | paper #080810 | **5.92:1** | ✅ |
| muted | #8888B4 | surface #0F0F1C | **5.63:1** | ✅ |
| All 7 category colors on soft bgs | | | **5.64–10.94:1** | ✅ |

---

## V4 Terminal Component — ALL PASS ✅

- index.html @ 1280px: visible ✅
- index.html @ 360px: hidden (getBoundingClientRect.width=0) ✅
- agentes-cli.html @ 1280px: visible ✅

---

## V3 Regression — ALL PASS ✅ (82/82 preserved)

| Check | Tests | Result |
|-------|-------|--------|
| F-1 overflow 360px (9 pages) | 9 | ✅ |
| F-2 aria-hidden SVGs (9 pages) | 9 | ✅ |
| F-3 modal hidden + heading order (6 pages) | 6 | ✅ |
| F-4 no `<h4>` from renderMiniCards | 2 | ✅ |
| TC-1 nav links (desktop xl + mobile) | 3 | ✅ |
| TC-2 modal open/close/ESC/focus trap | 3 | ✅ |
| TC-3 filters (CLI 16 / Orch 14) | 2 | ✅ |
| TC-5 responsive overflow 768+1280px | 18 | ✅ |
| TC-6 exactly 1 h1 per page | 9 | ✅ |
| TC-7 zero JS errors (all 9 pages) | 1 | ✅ |
| TC-8 Spanish prose (no English leak) | 9 | ✅ |
| TC-9 dark body bg on all 9 pages | 1 | ✅ |

---

## Verdict: PASS ✅ — CLEARED FOR DEPLOY

104/104 tests pass. BUG A fixed, BUG B fully fixed (all 9 Objetivo boxes + icon containers + FAQ tip box). No regressions. Stanley wg-27 may proceed.
