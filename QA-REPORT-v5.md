# QA Report v5 — web-guia

**Author:** Angela (wg-33 initial / wg-36 re-run)  
**Date:** 2026-06-08  
**Spec:** `tests/wg-qa-v5.spec.js`  
**Result: 105/105 PASS ✅ — deploy cleared (wg-36)**

---

## Executive Summary

v5 palette, fonts, contrast, functional regression: all PASS. One F-1 overflow regression on `orquestadores.html` at 360px introduced by v5 redesign. Stanley wg-27 HOLD — do not deploy.

| Check | Result |
|-------|--------|
| WG26-A Dynamic content (6 checks) | ✅ PASS |
| WG26-B Surface contrast v5 (10 checks) | ✅ PASS |
| WG26-C Modal contrast v5 (5 checks) | ✅ PASS |
| V5-CONTRAST Palette math (6 checks) | ✅ PASS |
| V5-TOKENS Old token sweep (1 check) | ✅ 0 hits |
| V5-FONTS JetBrains Mono + IBM Plex Sans (1 check) | ✅ PASS |
| V5-TERMINAL (3 checks) | ✅ PASS |
| F-1 overflow 360px (9 pages) | ✅ PASS (wg-36: min-w-0 fix applied) |
| F-2 aria-hidden SVGs (9 pages) | ✅ PASS |
| F-3 modal hidden + headings (6 pages) | ✅ PASS |
| F-4 no h4 (2 pages) | ✅ PASS |
| TC-1 nav links (3 checks) | ✅ PASS |
| TC-2 modal interactions (3 checks) | ✅ PASS |
| TC-3 filters (2 checks) | ✅ PASS |
| TC-5 responsive 768+1280px (18 checks) | ✅ PASS |
| TC-6 exactly 1 h1 (9 pages) | ✅ PASS |
| TC-7 zero JS errors (1 check) | ✅ PASS |
| TC-8 Spanish prose (9 pages) | ✅ PASS |
| TC-9 body bg = #0F172A (1 check) | ✅ PASS |
| TC-10 FAQ accordion (1 check) | ✅ PASS |

---

## DEFECT — F-1: orquestadores.html scrollWidth 366px at 360px viewport

**Severity:** Blocking (same category as prior F-1 fixes)  
**Page:** `orquestadores.html`  
**Viewport:** 360px wide  
**Measured:** `document.body.scrollWidth = 366` (6px over)

### Overflowing element

```
SPAN.flex-shrink-0.px-2.5.py-0.5.rounded-full.bg-brand-soft.text-[...]
right: 366px  width: 63px
```

This is the "Popular" badge rendered by `renderTool()` in `assets/app.js`.

### Root cause

`assets/app.js` line 324 — card header template:

```javascript
'<div class="flex items-start justify-between gap-3">' +
  '<p class="font-display text-lg font-semibold text-ink leading-snug transition-colors">' + esc(tool.name) + '</p>' +
  badge +
'</div>'
```

The `<p>` has no `min-w-0`. In flexbox, `min-width: auto` (default) prevents the element from shrinking below its content size. Combined with `flex-shrink-0` on the badge and `gap-3` (12px), long tool names cause overflow.

### Fix (surgical — 1 word)

**File:** `assets/app.js`, line 324  
Add `min-w-0` to the `<p>` class:

```javascript
'<p class="font-display text-lg font-semibold text-ink leading-snug transition-colors min-w-0">'
```

This allows the flex item to shrink below its content size, letting text wrap normally.

---

## V5 Palette — ALL PASS ✅

| Check | Result |
|-------|--------|
| 0 old tokens (#818CF8, #1E1B4B, #6D28D9, #1A1030, #A78BFA, #4338CA, #1D4ED8, #08152A, #F5F3FF, #ECFDF5) | ✅ 0 hits |
| JetBrains Mono loaded (all 9 pages) | ✅ |
| IBM Plex Sans loaded (all 9 pages) | ✅ |
| ink #F8FAFC on paper #0F172A | ✅ AAA |
| ink #F8FAFC on surface #1E293B | ✅ AAA |
| brand #F97316 on paper #0F172A | ✅ 6.35:1 |
| muted #94A3B8 on paper #0F172A | ✅ 6.93:1 |
| muted #94A3B8 on surface #1E293B | ✅ 5.39:1 |
| All 7 semantic category colors on soft bgs | ✅ |

## Per-surface Contrast — ALL PASS ✅

| Surface | Measured ratio | AA? |
|---------|---------------|-----|
| ruta Step-1 #431407 (ink/80) | 9.91:1 | ✅ |
| ruta Step-2 #052014 (ink/80) | 10.75:1 | ✅ |
| ruta Step-3/4 #0A1628 (ink/80) | 11.24:1 | ✅ |
| ruta Step-5 #200C0C (ink/80) | 11.54:1 | ✅ |
| ruta Step-6 #051C1A (ink/80) | 11.08:1 | ✅ |
| glosario FAQ tip heading (ink on #431407) | 14.96:1 | ✅ AAA |
| glosario FAQ tip body (muted on #431407) | 6.10:1 | ✅ |
| concepto compare-col-left #200C0C | 11.54:1 | ✅ |
| concepto compare-col-right #052014 | 10.75:1 | ✅ |
| concepto icon "!" #F87171 on #200C0C | 6.78:1 | ✅ |

---

## Verdict: PASS ✅ — deploy cleared

105/105 tests pass (wg-36 re-run after Pam's wg-35 fix). Stanley wg-27 unblocked.

**Fix applied (Pam/wg-35):** Added `min-w-0` to `<p>` in `renderTool()` template, `assets/app.js` line 324. F-1 overflow resolved.

**Note on MASTER.md:** The MASTER.md in design-system/web-guia/ appears to be a stale auto-generated template (light theme, Fredoka/Nunito fonts, #FFF7ED background) that does not match the actual v5 implementation. The pages themselves correctly implement the v5 spec as described in the dispatch. MASTER.md should be regenerated to reflect the actual dark-theme web-guia design system.
