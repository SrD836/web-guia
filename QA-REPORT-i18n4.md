# QA Report — i18n-4: Bilingual EN/ES QA — All 9 Pages

**Spec:** `tests/wg-i18n-4.spec.js`  
**Run date:** 2026-06-08  
**Agent:** Angela (angela-mq3yzcp1)  
**Verdict: ❌ FAIL — 2 pages have Spanish leaks in EN mode**

---

## Summary

| Requirement | Result | Notes |
|---|---|---|
| 1. Detection precedence (?lang= > localStorage > navigator > es) | ✅ PASS | All 3 DET tests pass |
| 2. ES↔EN live toggle — no Spanish leak in EN mode | ❌ FAIL | 2 pages: filter pills untranslated |
| 3. localStorage persistence (set EN → reload → still EN) | ✅ PASS | |
| 4. rerenderDynamic (casos-uso 10 cards, agentes-cli filters) | ✅ PASS | All DYN tests pass |
| 5. 0 console JS errors in both langs, all 9 pages | ✅ PASS | |
| 6. Responsive 360px no overflow in EN mode | ✅ PASS | All 9 pages |

**32/34 tests pass. 2 tests fail due to untranslated filter pills (Spanish leaks).**

---

## Bugs Found

### BUG-i18n-1 — `agentes-cli.html`: Filter pills "Código abierto" / "Cerrado / comercial" not translated

**Severity:** BLOCKER (Spanish leaks in EN mode)

The two category filter buttons lack `data-i18n` attributes. They always display Spanish text regardless of language.

| Button text (current) | Spanish stays? | Should be in EN |
|---|---|---|
| `Código abierto` | ✅ yes — stuck in Spanish | `Open source` |
| `Cerrado / comercial` | ✅ yes — stuck in Spanish | `Closed / commercial` |

**Note:** The `Todos` button on this page IS correctly wired (`data-i18n="ui.filter.todos"`) and translates to "All". ✓

**Fix:** Add `data-i18n` to two buttons — keys already exist in the dictionary:

```html
<!-- Line 164 — before: -->
<button data-filter="open-source" ...>Código abierto</button>
<!-- Fix: -->
<button data-filter="open-source" data-i18n="ui.cat.openSource" ...>Código abierto</button>

<!-- Line 165 — before: -->
<button data-filter="closed" ...>Cerrado / comercial</button>
<!-- Fix: -->
<button data-filter="closed" data-i18n="ui.cat.closed" ...>Cerrado / comercial</button>
```

---

### BUG-i18n-2 — `orquestadores.html`: All 5 filter pills not translated

**Severity:** BLOCKER (Spanish leaks in EN mode)

All category filter buttons, including the "All/Todos" button, lack `data-i18n` attributes.

| Button | data-filter value | Current text (stuck) | EN translation |
|---|---|---|---|
| `Todos` | `todos` | Todos | All |
| `Ejecutores en paralelo` | `runners-paralelos` | Ejecutores en paralelo | Parallel runners |
| `Enjambres` | `swarms` | Enjambres | Swarms |
| `Bucles autónomos` | `loops-autonomos` | Bucles autónomos | Autonomous loops |
| `Asistentes` | `asistentes` | Asistentes | Assistants |

**Fix:** Add `data-i18n` to each button — all keys already exist in the dictionary:

```html
<!-- Lines 158–162 — before: -->
<button data-filter="todos" ...>Todos</button>
<button data-filter="runners-paralelos" ...>Ejecutores en paralelo</button>
<button data-filter="swarms" ...>Enjambres</button>
<button data-filter="loops-autonomos" ...>Bucles autónomos</button>
<button data-filter="asistentes" ...>Asistentes</button>

<!-- Fix: -->
<button data-filter="todos" data-i18n="ui.filter.todos" ...>Todos</button>
<button data-filter="runners-paralelos" data-i18n="ui.cat.runnersParalelos" ...>Ejecutores en paralelo</button>
<button data-filter="swarms" data-i18n="ui.cat.swarms" ...>Enjambres</button>
<button data-filter="loops-autonomos" data-i18n="ui.cat.loopsAutonomos" ...>Bucles autónomos</button>
<button data-filter="asistentes" data-i18n="ui.cat.asistentes" ...>Asistentes</button>
```

---

## Per-page Results

| Page | EN Mode | Live Toggle | 360px | Spanish Leaks |
|---|---|---|---|---|
| `index.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `agentes-cli.html` | ❌ FAIL | ✅ PASS* | ✅ PASS | "Código abierto", "Cerrado / comercial" |
| `orquestadores.html` | ❌ FAIL | ✅ PASS* | ✅ PASS | 5 filter pills (see BUG-i18n-2) |
| `comparativa.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `casos-uso.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `ruta-aprendizaje.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `concepto.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `glosario-faq.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |
| `acerca.html` | ✅ PASS | ✅ PASS | ✅ PASS | none |

*Toggle tests check nav/footer chrome only — filter pills not re-checked during toggle (they are not `data-i18n` elements).

---

## Notes on Scope

- **No new JS errors found.** Both languages, all 9 pages, 0 console errors.
- **Dynamic content (rerenderDynamic) works correctly.** casos-uso cards re-render in EN with correct EN labels; agentes-cli `[data-filter="todos"]` translates to "All".
- **Detection precedence verified.** `?lang=en` > localStorage > navigator > es default, all working.
- **TC-8 risk from wg-qa-v5.spec.js** (noted in prior session): the existing spec's TC-8 ("no English patterns in Spanish prose") may fail after i18n was wired because Playwright's `navigator.language = 'en-US'` causes pages to load in EN without `?lang=es`. That spec predates i18n cabling. Fix: scope TC-8 to explicitly force `?lang=es`.

---

## Next Steps

1. **Pam/Dwight:** Apply the two HTML fixes above (7 `data-i18n` attribute additions across 2 files, dictionary keys already exist — no dictionary changes needed).
2. **Angela:** Re-run `npx playwright test tests/wg-i18n-4.spec.js` after fix. Expect 34/34 PASS.
3. **Stanley:** Deploy once Angela reports PASS.

---

*Spec: `tests/wg-i18n-4.spec.js` — 34 tests, 32 passed, 2 failed.*
