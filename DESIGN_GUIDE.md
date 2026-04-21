# Good People Only — Design Guide

Reference document for the rebuild. Extracted directly from goodpeopleonly.com via browser inspection of all pages (home, management, label, about, contact).

---

## Fonts

### Montserrat (sole typeface)

Loaded via Google Fonts. One font, one import, all pages.

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700");
```

| Weight | Name    | Where used                                              |
|--------|---------|----------------------------------------------------------|
| 400    | Regular | Nav links, headings (h2), body text (fallback), side labels |
| 500    | Medium  | Body paragraphs, section labels (Good Spaces), list items |
| 700    | Bold    | Available but not explicitly observed in current live site |

**No display font, no serif, no secondary font.** The entire site is Montserrat.

Font smoothing: `antialiased` (`-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`)

---

## Typography Scale

| Element | Size | Weight | Transform | Letter-spacing | Line-height | Notes |
|---|---|---|---|---|---|---|
| Nav links (open menu) | 75px | 400 | uppercase | 8px | — | Absolute overlay, full-screen |
| Page headings (h2) | 35px | 400 | none | normal | — | Text written in uppercase in HTML |
| Section description title | 35px | 400 | none | normal | — | Same as h2 |
| Body paragraphs | 18px | 500 | none | normal | 1.6 | `.About_flexTwo p` |
| Section label (Good Spaces) | 18px | 500 | uppercase | normal | — | Border-top/-bottom lines |
| Artist name captions | 28px | 400 | none | normal | — | Below artist photo squares |
| Side text label (rotated) | 20px | 400 | none | normal | — | Vertical text, left edge of page |
| Good Spaces list links | 14px | 400 | none | normal | — | Underlined, hover opacity 0.7 |
| Contact h3 | — | 400 | none | normal | — | Email address below envelope icon |

**Key insight:** Uppercase presentation is achieved by writing text in uppercase in the HTML/CMS content, not via `text-transform`. Only nav links use `text-transform: uppercase` in CSS.

---

## Color Palette

| Token | Hex | RGB | Usage |
|---|---|---|---|
| Background | `#000000` | rgb(0, 0, 0) | `body` background, nav overlay, all pages |
| Primary text | `#D8D8D8` | rgb(216, 216, 216) | `body color`, nav links, headings, body text |
| Border / divider | `#D8D8D8` | rgb(216, 216, 216) | Section divider lines, Good Spaces list borders |
| SVG circle stroke | `#D8D8D8` | rgb(216, 216, 216) | Hand-drawn circle hover decoration on nav links |
| Hamburger icon | `#D8D8D8` | rgb(216, 216, 216) | `.hamburger-react { color: #d8d8d8 }` |
| Transparent | `rgba(0,0,0,0)` | — | Nav menu items, card backgrounds |

**Two colors.** Black background, one gray for everything else. No accent color anywhere on the live site.

---

## Layout Patterns

### Homepage (`/`)

- Full viewport hero: `width: 100vw; height: 100vh`
- Three.js canvas fills the viewport: `canvas { height: 100vh !important }`
- Center of page: animated "GOOD PEOPLE ONLY" circle logo (white on black, rendered via Three.js)
- Hamburger menu: top-left corner, `position: absolute; top: 36px; left: 32px`
- No scrolling on homepage — purely a loading/splash experience
- 3-second fade-in on all content: `animation: fadein 3s`
- Max-width cap: 1600px on the hero div

### Inner page shell (management, label, about, contact)

- Hamburger (burger icon): `position: absolute; top: 36px; left: 32px`
- GPO circle logo button: `position: absolute; top: 43px; right: 80px` — 32px × 32px
- Content area: `max-width: 1024px; margin: 0 auto; width: 100%`
- Content begins 120px from top (`margin-top: 120px`) — 239px on contact page
- Vertical side label: `position: absolute; left: -400px; top: 108px`, rotated 90° via `transform: matrix(0, -1, -1, 0, 0, 0)`, `font-size: 20px`

### Navigation overlay

- Opens from hamburger button
- Full-screen overlay: `position: absolute; background-color: #000`
- Nav links stacked vertically at 75px / weight 400 / uppercase / letter-spacing 8px
- Each nav link has an SVG hand-drawn underline circle that appears on hover (path stroke `#D8D8D8`)
- Links: Management, Label, About, Store, Consulting, Contact

### Management & Label pages (`/management`, `/label`)

- Artist image grid: `display: flex; flex-wrap: wrap; gap: 10px; margin-top: 120px; max-width: 1024px`
- Each image cell: `padding: 20px; max-width: 450px; max-height: 450px`
- Artist name caption: `font-size: 28px; text-align: center; margin: 0 auto`
- Mobile (<1200px): grid stacks to single column, `justify-content: center`

### About page (`/about`)

- Left column (33%): "GOOD SPACES" section with studio links
- Right column (66%): body copy, margin-left 70px
- Heading: `font-size: 35px; font-weight: 400; margin-bottom: 43px`
- Body text: `font-size: 18px; font-weight: 500; line-height: 1.6; margin-bottom: 26px`
- Good Spaces label: `font-size: 18px; font-weight: 500; text-transform: uppercase`, with border-top and border-bottom `1px solid #D8D8D8`
- Good Spaces links: `font-size: 14px; underline; margin-bottom: 26px; hover: opacity 0.7; transition: all 0.3s ease-in-out`
- Horizontal divider rule: `2px height; border: 1px solid #D8D8D8; width ~325px`
- Desktop padding: `0 120px`; mobile: `0 20px`

### Contact page (`/contact`)

- Full viewport, content centered
- Envelope SVG icon centered at ~60% viewport height
- Email address below icon: Montserrat, weight 400
- Desktop margin-top: 239px; mobile: 160px

---

## Spacing System

| Token | Value | Context |
|---|---|---|
| Content margin-top | 120px | Inner pages (management, label, about) |
| Content margin-top | 239px | Contact page |
| Page horizontal padding | 120px | About page desktop |
| Page horizontal padding | 20px | Mobile (≤768px) |
| Section heading margin-bottom | 43px | Between heading and content |
| List item spacing | 26px | Good Spaces links, section gaps |
| Image cell padding | 20px | Artist image squares |
| Image grid gap | 10px | Between artist squares |
| Body line-height | 1.6 | All body paragraphs |
| Nav letter-spacing | 8px | Open-menu nav links |
| Burger position | 36px top, 32px left | Fixed across all pages |
| Logo position | 43px top, 80px right | Inner pages only |

---

## Design Motifs

### 1. Circle motif
The primary brand symbol. The homepage hero shows "GO / OD" arranged in a 2×2 grid inside a white circle outline — the wordmark for "GOOD PEOPLE ONLY." The circle appears in three contexts:
- Homepage: large animated Three.js canvas render, centered viewport
- Top-right on inner pages: small (32px) circular GPO logo button
- Nav hover effect: hand-drawn SVG circle path traces around each nav link text

### 2. Hand-drawn SVG nav decoration
Each nav link contains an inline SVG (`373×84px`) showing an organic, irregular circle path. It traces around the link text on hover. The path is a single `<path>` element, stroke `#D8D8D8`, no fill. This is what makes the navigation feel artistic rather than mechanical.

### 3. Vertical side label
On management and label pages, a rotated text label floats along the left edge of the content area. It names the section ("Good People Artists Management", "Good People Record Co.") and uses 20px Montserrat weight 400. It is rotated 90° counterclockwise and positioned absolutely at far left.

### 4. Horizontal rule dividers
1px solid `#D8D8D8` lines are used to bracket section headings (before and after "GOOD SPACES") and as list separators. No decorative weight — purely structural.

### 5. Artist photo squares
Square-cropped artist photography, max 450×450px, black and white or muted tones. Each photo sits on a black background with 20px padding. Captions in 28px Montserrat centered below.

### 6. Fade-in entrance
Every page fades in from opacity 0 to 1 over 3 seconds:
```css
@keyframes fadein { 0% { opacity: 0; } to { opacity: 1; } }
animation: fadein 3s;
```

### 7. Minimal iconography
Only two icons used sitewide: the hamburger (3 lines, top-left) and the envelope (contact page, line-art SVG). No icon libraries — both appear to be custom SVG.

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| ≤768px | Homepage hides 3D card wrap (`#wrap { display: none }`), hero gets `-15px` left margin. About layout stacks to single column. Padding drops to 20px. Artist grid centers to single column. |
| ≤1200px | Artist grid stacks to column, captions drop to 24px |
| >1200px | Full desktop layout, 33/66 column split on About, 3-column artist grid |

---

## Tech Stack

- **Framework:** Next.js (React) — SSG pages
- **CSS:** Combination of CSS Modules (`.About_container`, `.ImageSquares_squares`) and styled-components (nav, burger, logo, side text)
- **Animations:** Three.js for homepage hero canvas
- **CMS:** Contentful (artist data, store URL)
- **Font delivery:** Google Fonts CDN

---

## Design Principles (observed)

1. **Black as ground.** Pure black (#000000) is the only background. No off-black, no dark gray — pure black.
2. **One gray.** A single gray (#D8D8D8) handles all text, borders, icons, and decorative strokes.
3. **One font.** Montserrat in three weights. No display fonts, no serifs.
4. **Restraint over decoration.** The only ornament is the hand-drawn SVG circle on nav links and the animated hero. Everything else is stripped bare.
5. **Uppercase as status.** Nav links and section headings are all-caps, but achieved through content (not CSS) on headings — the text IS uppercase.
6. **Photography over illustration.** Artist content is large black-and-white or muted photography. No graphics, no illustrations.
7. **Spacing is generous.** 120px top margins, 120px horizontal gutters — the site breathes.
8. **No color hierarchy.** No accent colors, no CTA colors, no hover color changes — hover states use opacity reduction (0.7) instead.
