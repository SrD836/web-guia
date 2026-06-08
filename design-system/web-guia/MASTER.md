# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** web-guia
**Updated:** 2026-06-08 (v5 — dark theme, orange/blue, JetBrains Mono + IBM Plex Sans)
**Style:** Vibrant & Block-based — dark

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable / Tailwind |
|------|-----|-------------------------|
| Primary (orange) | `#F97316` | `--color-primary` / `text-orange-500` |
| Secondary (amber) | `#FB923C` | `--color-secondary` / `text-orange-400` |
| Accent / CTA (blue) | `#2563EB` | `--color-accent` / `bg-blue-600` |
| Background | `#0F172A` | `--color-bg` / `bg-slate-900` |
| Surface (cards) | `#1E293B` | `--color-surface` / `bg-slate-800` |
| Border | `#334155` | `--color-border` / `border-slate-700` |
| Text (primary) | `#F8FAFC` | `--color-ink` / `text-slate-50` |
| Text (muted) | `#94A3B8` | `--color-muted` / `text-slate-400` |
| Destructive / danger | `#EF4444` | `--color-destructive` / `text-red-500` |
| Ring / focus | `#F97316` | `--color-ring` |

**Semantic colors (preserve — do NOT remap):**
- Success / pros / open-source: `#10B981` green (`#059669` dark variant)
- Danger / cons: `#EF4444` red
- Parallel runners / info: `#2563EB` blue (`#3B82F6` lighter variant)

**Color Notes:** Dark engineering tool. Orange = energy/CTA. Blue = trust/action. Green/red = semantic meaning only.

### Typography

- **Heading Font:** JetBrains Mono (wght 400–700)
- **Body Font:** IBM Plex Sans (wght 300–600)
- **Mood:** technical, precise, developer-focused, modern
- **Google Fonts:**
  ```
  https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap
  ```

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
```

**Tailwind font config (inline per page):**
```js
fontFamily: {
  display: ['JetBrains Mono', 'monospace'],
  body: ['IBM Plex Sans', 'sans-serif'],
}
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins (minimum bento gap) |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

Dark-theme shadows use higher opacity:

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.4)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.5)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.6)` | Hero images, featured cards |

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: #F97316;
  color: #0F172A;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #FB923C;
  transform: translateY(-1px);
}

/* CTA Button (blue) */
.btn-cta {
  background: #2563EB;
  color: #F8FAFC;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-cta:hover {
  background: #3B82F6;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #F97316;
  border: 2px solid #F97316;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #431407;
  color: #FB923C;
  border-color: #FB923C;
}
```

### Cards

```css
.card {
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  border-color: #F97316;
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

/* Category-colored card bar (top accent) */
.card-bar {
  height: 3px;
  background: var(--cat, #F97316);
  border-radius: 2px 2px 0 0;
  margin: -24px -24px 16px;
}
```

### Inputs

```css
.input {
  background: #0F172A;
  color: #F8FAFC;
  padding: 12px 16px;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #F97316;
  outline: none;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
}

.modal {
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 600px;
  width: 90%;
  color: #F8FAFC;
}
```

### Navigation

```css
/* Top navbar */
.nav {
  background: rgba(15, 23, 42, 0.95); /* #0F172A with slight transparency */
  border-bottom: 1px solid #334155;
  backdrop-filter: blur(8px);
}

.nav-link {
  color: #94A3B8;
  transition: color 200ms ease;
}

.nav-link:hover,
.nav-link.active {
  color: #F97316;
}
```

---

## Per-Category Color Tokens

Cards and sections use `--cat` (strong) and `--cat-soft` (muted bg) CSS custom properties per category:

| Category | `--cat` | `--cat-soft` |
|----------|---------|--------------|
| Agente CLI | `#F97316` | `#431407` |
| Orquestador | `#2563EB` | `#0A1628` |
| Framework | `#10B981` | `#052014` |
| Paralelo | `#3B82F6` | `#0A1A3A` |
| Danger/Cons | `#EF4444` | `#200C0C` |
| Info | `#38BDF8` | `#051C2A` |
| Warning | `#FBBF24` | `#1C1400` |

---

## Style Guidelines

**Style:** Vibrant & Block-based — Dark Engineering

**Keywords:** Bold, technical, dark, block layout, geometric, high color contrast, developer-focused, modern

**Best For:** Developer tools, CLI guides, technical documentation, engineering-focused educational content

**Key Effects:**
- Large sections (48px+ gaps between blocks)
- COLOR-shift hovers (e.g. border changes from `#334155` to `#F97316`)
- Smooth transitions 200–300ms
- Large type headings (32px+) in JetBrains Mono
- Bento grid layout for feature sections

### Page Pattern

**Pattern Name:** Bento Grid Showcase (Dark)

- **Conversion Strategy:** Scannable value props. High information density without clutter. Mobile stack.
- **CTA Placement:** Hero section + floating/bottom of grid
- **Section Order:** 1. Hero, 2. Bento Grid (Key Features), 3. Detail Cards, 4. Tech Specs / Comparison, 5. CTA

---

## Anti-Patterns (Do NOT Use)

- ❌ Light backgrounds (`#FFF7ED`, `white`, `#F1F5F9`) — this is a dark-theme site
- ❌ Light-theme pastels (`#ECFDF5`, `#F5F3FF`) as backgrounds — use dark equivalents
- ❌ Purple/indigo accent colors (`#6D28D9`, `#818CF8`, `#A78BFA`) — replaced by orange/blue
- ❌ Old dark backgrounds (`#1A1840`, `#1A1030`, `#1E1B4B`) — use `#0F172A`/`#1E293B`/`#0A1628`
- ❌ Fredoka / Nunito / Fraunces / Inter fonts — use JetBrains Mono + IBM Plex Sans
- ❌ Emojis as icons — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ Missing `cursor:pointer` — all clickable elements must have it
- ❌ Layout-shifting hovers — avoid scale transforms that shift layout
- ❌ Low contrast text — maintain 4.5:1 minimum contrast ratio
- ❌ Instant state changes — always use transitions (150–300ms)
- ❌ Invisible focus states — focus states must be visible for a11y
- ❌ Remapping semantic green/red — `#10B981` (success/pros) and `#EF4444` (danger/cons) must stay

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Dark background: `#0F172A` (page) / `#1E293B` (cards) — never white or light
- [ ] Orange primary (`#F97316`) for headings, CTAs, category highlights
- [ ] Blue accent (`#2563EB`) for CTA buttons and parallel-runner labels
- [ ] JetBrains Mono for headings, IBM Plex Sans for body
- [ ] No purple/indigo tokens (`#6D28D9`, `#818CF8`) remaining
- [ ] No old dark-purple backgrounds (`#1A1840`, `#1E1B4B`) remaining
- [ ] Semantic green/red preserved where used for pros/cons meaning
- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (200–300ms)
- [ ] Contrast 4.5:1 minimum (dark bg + light text passes easily)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 360px, 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll at 360px (check flex containers have `min-w-0` where needed)
- [ ] No content hidden behind fixed navbars
