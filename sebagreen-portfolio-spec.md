# sebagreen.com — Portfolio Site Spec

A complete brief for Claude Code to build Sebastian Green's personal portfolio website.

---

## Overview

- **Owner:** Sebastian Green
- **Domain:** sebagreen.com
- **Goal:** Personal online presence for a CS student / full-stack developer
- **Stack:** Next.js 14 (App Router) + Tailwind CSS
- **Deployment:** Cloudflare Pages
- **Repo:** github.com/SebGreen24

---

## Design System

### Personality
Clean, minimal, precise. No decoration for decoration's sake. The site should feel like well-written code — every element has a reason to be there. Confident but not loud.

### Colour Palette
```
--color-bg:         #F8F8F7   /* off-white, light mode */
--color-bg-dark:    #0F0F0E   /* near-black, dark mode */
--color-surface:    #FFFFFF   /* card/panel bg, light */
--color-surface-dark: #1A1A19 /* card/panel bg, dark */
--color-text:       #111110   /* primary text, light */
--color-text-dark:  #EDEDED   /* primary text, dark */
--color-muted:      #6B6B68   /* secondary text, both modes */
--color-accent:     #2563EB   /* blue — links, highlights */
--color-border:     #E4E4E2   /* dividers, light */
--color-border-dark:#2A2A28   /* dividers, dark */
```

Both light and dark mode supported via `prefers-color-scheme` and a manual toggle. System default on first load.

### Typography
- **Display / headings:** `Inter` (700, 600) — clean, technical, widely trusted
- **Body:** `Inter` (400, 450) — consistent with headings, let spacing do the work
- **Monospace / code labels:** `JetBrains Mono` — used sparingly for tech stack tags, section labels, and any inline code references

Load both from Google Fonts.

### Type Scale
```
text-xs:   0.75rem  / 12px  — tags, labels
text-sm:   0.875rem / 14px  — secondary info, dates
text-base: 1rem     / 16px  — body
text-lg:   1.125rem / 18px  — lead paragraph
text-2xl:  1.5rem   / 24px  — section headings
text-4xl:  2.25rem  / 36px  — hero name
text-5xl:  3rem     / 48px  — hero headline (desktop)
```

### Signature Element
Subtle **cursor-blink animation** on the hero headline — a single blinking `|` character after the tagline text, like a terminal cursor. Implemented in pure CSS. This is the only animation on the page. Everything else is static. It's quiet, technical, and personal without being gimmicky.

### Spacing & Layout
- Max content width: `768px` centred, generous side padding
- Single column throughout — no grids, no sidebars
- Sections separated by generous whitespace (`py-24`) not horizontal rules
- Border-radius: `6px` on cards, `4px` on tags — minimal rounding

---

## Site Structure

Single page (`/`), scroll-based. No separate routes needed.

```
┌─────────────────────────┐
│         NAV             │  Fixed top, minimal
├─────────────────────────┤
│         HERO            │  Name + tagline + cursor blink
├─────────────────────────┤
│        ABOUT            │  Short bio paragraph
├─────────────────────────┤
│       PROJECTS          │  Cards for each project
├─────────────────────────┤
│        SKILLS           │  Tech stack tags, grouped
├─────────────────────────┤
│       EDUCATION         │  Timeline-style
├─────────────────────────┤
│       CONTACT           │  Email + GitHub + LinkedIn
└─────────────────────────┘
```

---

## Section Content

### NAV
- Left: `sg` — monospace, links to top of page
- Right: anchor links — `About`, `Projects`, `Skills`, `Education`, `Contact`
- On mobile: hamburger menu or just the icon links (no labels)
- Sticky, with a very subtle backdrop blur on scroll (`backdrop-blur-sm bg-bg/80`)
- No border, no shadow — just the blur

---

### HERO
```
Sebastian Green
Full-stack developer & CS student|
```
- Name in `text-4xl font-bold`
- Tagline in `text-lg text-muted` with the blinking cursor `|` in accent blue
- Below tagline: two ghost/outline buttons — `GitHub ↗` and `LinkedIn ↗`
- No profile photo
- Vertically centred in `100vh` on desktop, generous padding on mobile

**Copy:**
```
Sebastian Green
Full-stack developer & CS student|
```

---

### ABOUT
**Heading:** `About`

**Copy:**
```
I'm a second-year Computer Science student at the University of Nottingham, 
currently on track for a first. I enjoy building things end-to-end — from 
database design and API architecture to the interfaces people actually use.

I'm particularly interested in applying software to finance and cybersecurity, 
and I'm always working on something new.
```

---

### PROJECTS

Three project cards, stacked vertically. Each card contains:
- Project name (bold)
- Short description (1–2 sentences)
- Tech stack tags (monospace, small, muted background)
- Link(s) — GitHub icon + optional live link

---

#### Project 1: Ecosystem Simulation

**Name:** Ecosystem Simulation NEA

**Description:**
A simulation of real-world evolutionary processes, modelling over 5 biological characteristics across 3 distinct organism types. Built in Unity and C# with extensive technical documentation (~20,000 words, 100+ pages).

**Tags:** `C#` `Unity` `Simulation` `OOP`

**Links:**
- GitHub: https://github.com/SebGreen24/Ecosystem-Simulation-NEA-v2

---

#### Project 2: Wine Quality Prediction

**Name:** Wine Quality Prediction

**Description:**
A machine learning pipeline to predict red wine quality from physicochemical properties. Includes data cleaning, feature analysis, and a comparison of Linear Regression (R² = 0.78) vs Decision Tree models.

**Tags:** `Python` `scikit-learn` `Pandas` `Machine Learning`

**Links:**
- No public link — show card without a link button, or label it `University coursework — private`

---

#### Project 3: Observatory *(Coming Soon)*

**Name:** Observatory

**Description:**
Currently in development. Details coming soon.

**Tags:** *(leave blank or add a single tag `In Progress`)*

**Links:**
- No link yet. Show a subtle `Coming soon` badge on the card instead of a link.

> **NOTE FOR SEBA:** Once Observatory is live, replace the description and add the GitHub URL here and in the component.

---

### SKILLS

**Heading:** `Skills`

Group into three rows with a label:

**Languages**
`C` `C#` `Python` `Java` `Haskell` `TypeScript`

**Frameworks & Tools**
`React` `Expo` `Next.js` `FastAPI` `Tailwind CSS` `Git`

**Data & Infrastructure**
`SQL` `Supabase` `Render` `REST APIs`

Each tag: small pill, monospace font (`JetBrains Mono`), muted background, no border. Group label in small caps or `text-xs text-muted uppercase tracking-widest`.

---

### EDUCATION

**Heading:** `Education`

Simple list, no timeline graphics — just clean spacing.

```
University of Nottingham                          2024 – present
BSc Computer Science with Year in Industry
First year: 1st class
Notable grades: 85% Programming & Algorithms, 81% Software Engineering

Ivybridge Community College                       2017 – 2024
A Levels: Mathematics (A), Computer Science (B), Physics (B)
AS Level: Further Mathematics (B)
```

---

### CONTACT

**Heading:** `Let's connect`

**Copy:**
```
I'm always open to interesting projects or opportunities. 
Reach out via email or find me on the links below.
```

Three icon+text links, horizontally on desktop, stacked on mobile:
- `seba@sebagreen.com` (mailto link) — use `sebgreen_24@outlook.com` until custom email is set up
- `GitHub — github.com/SebGreen24`
- `LinkedIn — linkedin.com/in/sebagreen`

No contact form.

---

## Technical Requirements

### Next.js Setup
- Use **App Router** (`/app` directory)
- Single page — all sections in `app/page.tsx`
- Components folder: `components/` — one file per section (Nav, Hero, About, Projects, Skills, Education, Contact)
- No external UI libraries — Tailwind only

### Dark Mode
- Implement via Tailwind `darkMode: 'class'` in `tailwind.config.js`
- On load, check `localStorage` for saved preference, fallback to `prefers-color-scheme`
- Toggle button in nav (sun/moon icon, no label)
- Persist preference to `localStorage`

### Fonts
Add to `app/layout.tsx` via `next/font/google`:
```ts
import { Inter, JetBrains_Mono } from 'next/font/google'
```

### Cursor Blink Animation
Add to `globals.css`:
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background: var(--color-accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1.1s step-end infinite;
}
```

### Performance & Accessibility
- All images use `next/image` (none currently, but for future)
- All interactive elements keyboard accessible
- Respect `prefers-reduced-motion` — disable cursor blink if set
- Lighthouse score target: 95+ across all categories

### Deployment (Cloudflare Pages)
Add to `package.json`:
```json
"build": "next build"
```
In `next.config.js` set:
```js
output: 'export'
```
This generates a static export compatible with Cloudflare Pages. Connect the GitHub repo in the Cloudflare dashboard, set build command `npm run build`, output directory `out`.

---

## File Structure

```
sebagreen.com/
├── app/
│   ├── layout.tsx          # fonts, metadata, dark mode wrapper
│   ├── page.tsx            # imports all sections
│   └── globals.css         # base styles, cursor animation, CSS vars
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Meta / SEO

In `app/layout.tsx`:
```ts
export const metadata = {
  title: 'Sebastian Green — Full-stack Developer',
  description: 'CS student at the University of Nottingham. Full-stack developer with experience in Python, TypeScript, C#, and more.',
  openGraph: {
    title: 'Sebastian Green',
    description: 'Full-stack developer & CS student',
    url: 'https://sebagreen.com',
  }
}
```

*Last updated: June 2026. Add Observatory project details once live.*
