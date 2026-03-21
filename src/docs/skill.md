---
name: responsive-design
description: >
  Make any website fully responsive across all devices — mobile, tablet, and desktop.
  Use this skill when the user asks to make a site responsive, fix layout issues on
  mobile, add breakpoints, audit responsive behavior, refactor CSS for fluid layouts,
  or improve touch-friendliness. Triggers on phrases like "make it responsive",
  "fix mobile layout", "add media queries", "responsive for all devices",
  "hamburger menu", "fluid grid", "doesn't look right on phone/tablet".
argument-hint: "[file or component to make responsive]"
---

# Responsive Web Design Skill

This skill gives your agent a complete playbook for auditing and implementing
responsive design across any website or component — HTML/CSS, Tailwind, Bootstrap,
React, Vue, or plain CSS.

---

## Step 1 — Understand Before Touching

Before writing a single line of CSS, the agent MUST:

1. **Read all relevant files** — identify the CSS architecture (plain CSS, SCSS,
   Tailwind, Bootstrap, CSS-in-JS, etc.)
2. **Check for an existing viewport meta tag** in `<head>`:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
   If missing, add it. This is the single most important line for responsive design.
3. **Identify layout type**: Is it using floats, Flexbox, Grid, or a framework?
4. **Note all fixed pixel widths** — `width: 800px`, `margin-left: 350px`, etc.
   These are the primary culprits of broken mobile layouts.

---

## Step 2 — Mobile-First Strategy (ALWAYS)

Always design and refactor **mobile-first**:
- Write base styles for the **smallest screen first** (≥320px)
- Use `min-width` media queries to progressively enhance for larger screens
- Never use `max-width` media queries as the primary strategy (it leads to
  "desktop-first" thinking and messy overrides)

**Wrong (desktop-first):**
```css
.container { width: 1200px; }
@media (max-width: 768px) { .container { width: 100%; } }
```

**Right (mobile-first):**
```css
.container { width: 100%; padding: 0 1rem; }
@media (min-width: 768px) { .container { max-width: 1200px; margin: 0 auto; } }
```

---

## Step 3 — Breakpoint System

Use **content-driven breakpoints**, not device-specific ones. However, these
standard tiers are a solid baseline:

| Breakpoint | Min-width | Target              |
|------------|-----------|---------------------|
| xs         | 320px     | Small phones        |
| sm         | 480px     | Large phones        |
| md         | 768px     | Tablets (portrait)  |
| lg         | 1024px    | Tablets (landscape) / small laptops |
| xl         | 1280px    | Desktops            |
| 2xl        | 1440px+   | Wide screens        |

**Rules:**
- Always use **at least 3 breakpoints**: mobile (base), tablet (768px), desktop (1024px+)
- Store breakpoints as CSS custom properties or SCSS variables — never hardcode the
  same value in 10 places
- Add a custom breakpoint only when the layout visually breaks, not to match a device

```css
/* Store breakpoints centrally */
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```

---

## Step 4 — Fluid Layouts

### Use Flexbox for 1D layouts (rows or columns)
```css
.nav { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; }
```

### Use CSS Grid for 2D layouts
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

### Replace all fixed widths with fluid alternatives

| Instead of       | Use                              |
|------------------|----------------------------------|
| `width: 800px`   | `width: 100%; max-width: 800px`  |
| `margin: 0 320px`| `margin: 0 auto; padding: 0 1rem`|
| `font-size: 24px`| `font-size: clamp(1.2rem, 4vw, 1.5rem)` |
| `height: 600px`  | `min-height: 600px` or `aspect-ratio: 16/9` |

### Fluid Typography with `clamp()`
```css
h1 { font-size: clamp(1.8rem, 5vw + 1rem, 3.5rem); }
h2 { font-size: clamp(1.4rem, 3vw + 0.5rem, 2.5rem); }
p  { font-size: clamp(1rem, 2vw + 0.25rem, 1.125rem); }
```
This eliminates the need for separate font-size declarations at every breakpoint.

---

## Step 5 — Responsive Images & Media

```css
/* Universal responsive image rule */
img, video, iframe {
  max-width: 100%;
  height: auto;
  display: block;
}
```

For art-direction (different crops on mobile vs desktop), use `<picture>`:
```html
<picture>
  <source media="(min-width: 768px)" srcset="hero-desktop.webp">
  <img src="hero-mobile.webp" alt="Hero image" loading="lazy">
</picture>
```

Always add `loading="lazy"` to below-the-fold images for performance.

---

## Step 6 — Navigation Patterns

On mobile (< 768px), navigation must be accessible without a horizontal scroll:

**Hamburger menu pattern (HTML + CSS only):**
```html
<nav class="navbar">
  <a class="logo" href="/">Brand</a>
  <input type="checkbox" id="nav-toggle" class="nav-toggle" hidden>
  <label for="nav-toggle" class="nav-burger" aria-label="Toggle menu">☰</label>
  <ul class="nav-links">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```
```css
.nav-links { display: none; flex-direction: column; width: 100%; }
.nav-toggle:checked ~ .nav-links { display: flex; }
@media (min-width: 768px) {
  .nav-links { display: flex !important; flex-direction: row; width: auto; }
  .nav-burger { display: none; }
}
```

---

## Step 7 — Touch-Friendly Design

Mobile users tap with fingers, not a precise mouse cursor:

- **Minimum tap target size**: 44×44px (Apple HIG + WCAG 2.5.5)
- **Spacing between tap targets**: at least 8px
- **No hover-only interactions** — always provide a tap/click fallback
- Avoid `cursor: pointer` as the only visual feedback; add `:active` states too

```css
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
  padding: 0.5rem 1rem;
  touch-action: manipulation; /* removes 300ms tap delay */
}
```

---

## Step 8 — Spacing & Sizing with Relative Units

| Use case         | Recommended unit            |
|------------------|-----------------------------|
| Font sizes       | `rem` (relative to root)    |
| Component padding/margin | `em` or `rem`       |
| Layout widths    | `%`, `vw`, `ch`, `fr`       |
| Viewport-filling | `100dvh` (dynamic viewport height, handles mobile browser chrome) |
| Media query breakpoints | `px` (most consistent across browsers) |

**Avoid**: Fixed `px` for font sizes (breaks user font-size preferences) and layout
widths. Never use `100vh` for mobile hero sections — use `100dvh` instead to account
for browser chrome on iOS/Android.

---

## Step 9 — Performance (Responsive ≠ Just Layout)

Responsive design includes performance. On mobile, users are on slower networks:

- **Lazy-load images**: `loading="lazy"` on `<img>` tags
- **Use `srcset`** to serve different image sizes to different viewports
- **Avoid large JS bundles** that block rendering on mobile
- **Optimize CSS**: Remove unused styles, avoid complex selectors
- **Use `prefers-reduced-motion`** for animations:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```

---

## Step 10 — Testing Checklist

After making changes, verify:

- [ ] Viewport meta tag is present
- [ ] No horizontal scrollbar on mobile (320px wide)
- [ ] Text is readable without zooming (min 16px base font)
- [ ] All buttons/links are ≥44px tap targets
- [ ] Navigation is usable on mobile
- [ ] Images don't overflow their containers
- [ ] Tables are scrollable or reflowed for small screens
- [ ] Forms are usable on mobile (inputs don't zoom on iOS — use `font-size: 16px`)
- [ ] Test portrait AND landscape orientation
- [ ] Test at: 320px, 375px, 480px, 768px, 1024px, 1280px, 1440px

### Quick DevTools test
Open Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M) → Test at iPhone SE
(375px), iPad (768px), and full desktop (1440px).

---

## Common Anti-Patterns to Fix

| Anti-pattern                        | Fix                                              |
|-------------------------------------|--------------------------------------------------|
| `overflow: hidden` on `<body>`      | Remove — it hides content on small screens       |
| `position: absolute` everywhere     | Use Flexbox/Grid for layout instead              |
| Fixed sidebar widths like `300px`   | Use `min-width: 250px` + `flex-shrink: 0`        |
| Tables without overflow handling    | Wrap in `<div style="overflow-x: auto">`         |
| Inputs with `font-size < 16px`      | Set to `font-size: 16px` to prevent iOS zoom     |
| `100vh` for hero sections           | Replace with `100dvh`                            |
| Z-index stacking on mobile          | Audit and simplify z-index layers                |

---

## Framework-Specific Notes

### Tailwind CSS
Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
```html
<div class="flex flex-col md:flex-row gap-4">
  <aside class="w-full md:w-64">Sidebar</aside>
  <main class="w-full md:flex-1">Content</main>
</div>
```

### Bootstrap
Use grid classes: `col-12 col-md-6 col-lg-4`
Ensure `.container-fluid` or `.container` wraps content.

### React / Vue
Use CSS Modules or styled-components with the same mobile-first media query strategy.
Consider `useMediaQuery` hook only for JS-level changes (prefer CSS for everything
that can be done in CSS).

---

## Output Expectations

When making a site responsive, the agent should:

1. **Report what was changed** — list every file modified and what was fixed
2. **Flag anything that needs manual review** — complex components, third-party
   embeds, or layouts that require design decisions
3. **Never change visual design** — only layout, sizing, and spacing
4. **Preserve existing class names and IDs** — only add/modify CSS, don't restructure
   HTML unless unavoidable
5. **Test edge cases**: empty states, long text strings, missing images
