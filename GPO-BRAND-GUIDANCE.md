# GPO Brand Guidance
## Good People Only: Website Rebrand

**Version:** 1.0  
**Date:** February 15, 2026  
**Prepared by:** Tamara Bennett  
**For:** Developer handoff, Notion reference, design team

---

## 1. Brand Positioning Statement

Good People Only is a boutique artist management company founded by Crispin Day in Toronto. GPO is not an agency. It is not a service provider. It is a curated collective of artists, producers, and creative operators who share a single belief: put the music first, surround yourself with good people, and the rest follows.

**What makes GPO different:**
- Founder-led with a decade of production and engineering experience before management
- Genre-agnostic roster spanning indie rock, folk, comedy rock, and electronic
- Multi-service operation: management, label, two recording studios, media collective
- Small by design. Selective. Every artist on the roster is a deliberate choice.

**Positioning line:** "We don't chase trends. We build artists."

**Brand personality in three words:** Confident. Selective. Real.

**GPO is not:** corporate, flashy, template-driven, desperate to impress, or trying to look bigger than it is. The brand should feel like walking into a room where the person running it clearly has taste and doesn't need to explain it.

---

## 2. Color Palette

The dark aesthetic is correct for GPO. Pure black communicates authority. But the current palette is too flat: just #000000 and #d8d8d8 with nothing in between. The rebrand keeps the darkness but adds depth and intentional warmth.

### Primary Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Void | `#0A0A0A` | Primary background. Not pure black: slightly warm, easier on screens, avoids OLED smearing |
| Surface | Charcoal | `#141414` | Cards, elevated surfaces, nav backgrounds |
| Text Primary | Bone | `#E8E4DF` | Body text, headings. Warm white, not clinical |
| Text Secondary | Smoke | `#9A9590` | Captions, metadata, secondary info |

### Accent Colors

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Accent Primary | Ember | `#D4603A` | CTAs, active states, artist highlights. Used sparingly: 5-10% of any page |
| Accent Secondary | Gold Dust | `#C9A84C` | Awards, achievements, premium moments |
| Cool Accent | Slate Blue | `#5B7A8A` | Links, info states, secondary interactive elements |

### Semantic Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success | `#4A7C59` | Form confirmations, positive states |
| Warning | `#C9A84C` | Shares Gold Dust. Alerts, cautions |
| Error | `#B54A4A` | Form errors, destructive actions |
| Info | `#5B7A8A` | Shares Slate Blue. Informational notices |

### Contrast Ratios (WCAG AA Compliance)

All ratios calculated against Void (`#0A0A0A`):

| Combination | Ratio | Grade |
|-------------|-------|-------|
| Bone on Void | 14.8:1 | AAA |
| Smoke on Void | 5.2:1 | AA |
| Ember on Void | 4.7:1 | AA (large text only) |
| Bone on Charcoal | 13.1:1 | AAA |
| Smoke on Charcoal | 4.6:1 | AA (large text only) |

**Rules:**
- Ember is never used for body text. Large headings or interactive elements only.
- Smoke is only for text 16px or larger.
- Never place text directly on photography without a scrim overlay (minimum 60% opacity Void).
- Pure white (`#FFFFFF`) is reserved for the logo lockup in specific contexts. Never for text.

---

## 3. Typography System

Montserrat was fine. It's also on every third website in the music industry. GPO deserves something with more character.

### Font Stack

| Role | Font | Fallback | Weight | Google Fonts |
|------|------|----------|--------|-------------|
| Headings | **Space Grotesk** | system-ui, sans-serif | 500, 700 | [Yes](https://fonts.google.com/specimen/Space+Grotesk) |
| Body | **Inter** | system-ui, sans-serif | 400, 500 | [Yes](https://fonts.google.com/specimen/Inter) |
| Accent/Display | **Instrument Serif** | Georgia, serif | 400 | [Yes](https://fonts.google.com/specimen/Instrument+Serif) |

**Why these:**
- **Space Grotesk** has geometric confidence without being cold. Technical but human. Distinctive without being decorative.
- **Inter** is the best screen-optimized body font available. Invisible in the right way.
- **Instrument Serif** adds editorial weight for pull quotes, artist names in hero contexts, and moments where GPO needs to feel like a magazine, not a dashboard.

### Type Scale

Based on a 1.250 (Major Third) ratio, base 16px:

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `--text-xs` | 12px / 0.75rem | 1.5 | 0.04em | Labels, legal, metadata |
| `--text-sm` | 14px / 0.875rem | 1.5 | 0.02em | Captions, helper text |
| `--text-base` | 16px / 1rem | 1.6 | 0 | Body copy |
| `--text-lg` | 20px / 1.25rem | 1.5 | -0.01em | Lead paragraphs, intros |
| `--text-xl` | 25px / 1.563rem | 1.3 | -0.02em | Section headings (h3) |
| `--text-2xl` | 31px / 1.953rem | 1.2 | -0.02em | Page headings (h2) |
| `--text-3xl` | 39px / 2.441rem | 1.1 | -0.03em | Hero headings (h1) |
| `--text-4xl` | 49px / 3.052rem | 1.05 | -0.03em | Display, hero moments |
| `--text-5xl` | 61px / 3.815rem | 1.0 | -0.04em | Statement text, splash |

**Rules:**
- Headings are always Space Grotesk, uppercase tracking at -0.02em or tighter.
- Body copy never goes below 16px on any viewport.
- Instrument Serif is used for emphasis moments only: pull quotes, hero artist names, the word "Only" in specific brand lockups. Never for body text.
- Maximum line length for body copy: 65 characters (roughly 600px at base size).

---

## 4. Visual Language

### Photography Style

GPO's current artist photography is a genuine strength. The management page images feel real, candid, lived-in. This is the right direction. Formalize it:

**Do:**
- Candid over posed. Backstage over studio. Between-moments over performance shots.
- Natural or available light. Warm tones. Film grain is welcome.
- Environment tells a story: green rooms, rehearsal spaces, studios, diners, vans.
- Crop tight when it serves the artist. Don't be afraid of unusual framing.
- Color photography for artist features. The warmth of the photos contrasts the dark UI.

**Don't:**
- No corporate headshots. No one standing against a seamless backdrop.
- No heavy color grading or Instagram-filter energy.
- No stock photography. Ever. If you don't have a real photo, use typography instead.
- No composites, no collages, no "creative" Photoshop treatments on artist images.

### Image Treatment

- Artist images sit on the dark background without borders or frames
- Hover state: subtle scale (1.02x) with 300ms ease-out
- Optional desaturation at rest (90% saturation), full color on hover
- All images must have descriptive alt text (critical accessibility fix from audit)

### Grid & Layout

12-column grid. This is non-negotiable for responsive flexibility.

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| Mobile (< 768px) | 4 | 16px | 20px |
| Tablet (768-1024px) | 8 | 24px | 40px |
| Desktop (1025-1440px) | 12 | 24px | 60px |
| Wide (> 1440px) | 12 | 32px | 80px |

**Max content width:** 1280px. Centered. The site should never feel like it's stretching to fill a 4K monitor.

### Whitespace Philosophy

The current site uses vast emptiness as an aesthetic choice, but it reads as emptiness, not intention. Fix:

- Use generous vertical rhythm (multiples of 8px base unit)
- Sections breathe with 120-160px vertical padding on desktop
- But every section must earn its space. Empty because it's elegant, not because there's nothing there.
- Asymmetric layouts preferred. Content doesn't have to be centered. Left-aligned blocks with generous right margins feel more editorial.

---

## 5. Mood Board Direction

Three concepts to explore. These are not mutually exclusive: the final direction will likely blend elements.

### Concept A: "The Green Room"

**Vibe:** Intimate, backstage, insider access. You're in the room where it happens.

**Visual references:** Think dim hallway lighting in a venue. Warm tungsten. Peeling show posters on concrete walls. A guitar leaning against an amp. The moment before the lights go up.

**Color emphasis:** Heavier on Ember and warm tones. Photography dominates. Type is restrained.

**Layout feel:** Magazine editorial. Generous photography with tight captions. Content reveals itself as you scroll, like walking deeper into a venue.

**Best for:** Artist-first storytelling. Emotional connection. Making visitors feel like insiders.

### Concept B: "The Record Wall"

**Vibe:** Curated collection. Gallery. Every artist is a deliberate selection on display.

**Visual references:** A vinyl collection organized with intention. Clean shelving. Negative space between records. The kind of collection that tells you everything about the owner's taste.

**Color emphasis:** More restrained. Bone and Charcoal do the heavy lifting. Ember only for current/featured content. Gold Dust for milestones.

**Layout feel:** Grid-forward. Artist cards as the primary UI pattern. Clean taxonomy. Sort by artist, by project, by date. Functional but beautiful.

**Best for:** Showcasing the full roster. Industry professionals who want to see the catalogue. Navigability.

### Concept C: "The Letterpress"

**Vibe:** Typography-dominant. Statement-driven. Words carry as much weight as images.

**Visual references:** Swiss poster design meets independent music zines. Bold type at scale. Stark contrast. Occasional serif interruptions that feel hand-set.

**Color emphasis:** Near-monochrome with strategic Ember punctuation. Instrument Serif gets more play here.

**Layout feel:** Large type blocks. Artist names as visual elements. Scrolling text that feels like reading liner notes. Photography appears in unexpected crops and placements.

**Best for:** Making GPO feel like a brand, not just a roster page. Strong first impression. Memorable.

---

## 6. Logo Usage

The current GPO logo (the stacked "GO" mark visible in the top-right of the site) is compact and functional. These rules apply to any refinement or the existing mark.

### Clear Space

Minimum clear space around the logo: equal to the height of the "G" character in the mark on all sides. Nothing enters this zone.

### Minimum Sizes

| Context | Minimum Width |
|---------|--------------|
| Digital (screen) | 32px |
| Print | 12mm |
| Favicon | 16px (simplified mark) |

### Color Variants

| Variant | Usage |
|---------|-------|
| Bone on Void | Primary. Default for dark backgrounds. |
| Void on Bone | Inverted. For light contexts (print, partner decks, press kits). |
| Single-color Bone | Watermark, subtle placement on photography. |
| Ember mark | Special use only: album releases, event branding. Never as the default. |

### Do's and Don'ts

**Do:**
- Use the logo at approved sizes with proper clear space
- Place on solid dark backgrounds or solid light backgrounds
- Use the simplified mark for small contexts (favicons, app icons)

**Don't:**
- Place the logo on busy photography without a scrim
- Rotate, stretch, skew, or add effects (drop shadows, glows, outlines)
- Recreate the logo in a different font
- Use Ember or Gold Dust as the primary logo color in standard contexts
- Lock the logo up with other brand logos without approval

---

## 7. Iconography & Graphics

### Icon Style

- Line icons, 1.5px stroke weight, rounded caps
- Bone color by default, Ember on active/hover states
- 24px base size grid (scale in multiples: 16, 24, 32, 48)
- Consistent corner radius: 2px where applicable
- Source: [Lucide](https://lucide.dev/) as the base icon set. Custom icons follow the same stroke/grid rules.

### Dividers & Separators

- No horizontal rules. Use whitespace and typography hierarchy to separate sections.
- If a visual break is absolutely needed: a single 1px line in `#1A1A1A` (barely visible, just enough structure).
- Alternatively: a short 40px line in Ember, left-aligned, as a section accent. Used sparingly (max 2-3 per page).

### Decorative Elements

The current site uses oversized decorative typography (visible on the label page with text running off-screen). This is a strong instinct executed poorly. Refine it:

- Large-scale type as background texture: allowed, but at 5-8% opacity max
- Text must be fully intentional, not clipped by viewport accidentally
- No geometric patterns, no gradients, no abstract shapes
- The only decorative elements are: photography, typography at scale, and whitespace

---

## 8. Motion & Animation

### Philosophy

Motion should feel like confidence, not performance. Every animation earns its place. Nothing moves just because it can.

### Page Transitions

- Crossfade between pages: 250ms ease-in-out
- Content enters with a subtle upward shift (translateY 20px to 0) with staggered timing per element (50ms delay between items)
- No page-level wipes, slides, or theatrical transitions

### Hover States

- Links: color shift to Ember, 150ms ease
- Artist cards: scale(1.02) with subtle shadow lift, 300ms ease-out
- Buttons: background color shift, 150ms ease. No size change.
- Navigation items: underline slides in from left, 200ms ease

### Scroll Effects

- Parallax: prohibited. It rarely works and always feels dated.
- Lazy image reveal: fade-in + subtle upward shift as images enter viewport. 400ms ease-out.
- Sticky navigation: header becomes translucent with backdrop-filter blur on scroll. Transition: 200ms.
- No scroll-jacking. The user controls their scroll speed. Always.

### Loading States

- Skeleton screens with Charcoal (#141414) pulse animation (0.8s ease-in-out infinite)
- No spinners. No progress bars unless genuinely tracking a process.

### Reduced Motion

- Respect `prefers-reduced-motion: reduce`. All animations collapse to instant state changes.
- This is not optional. It's an accessibility requirement.

---

## 9. Tone of Voice

The visual identity and the verbal identity are the same person. GPO's brand voice, written or visual, follows these principles:

### Voice Attributes

| Attribute | Meaning | Not This |
|-----------|---------|----------|
| Confident | States things plainly. No hedging. | Arrogant, dismissive |
| Selective | Quality over quantity. Every word/element earns its place. | Elitist, exclusionary |
| Warm | Cares about artists and community genuinely. | Sentimental, soft |
| Direct | Says what it means. Short sentences. | Blunt, rude |
| Insider | Speaks the language of the industry without explaining it. | Jargon-heavy, gatekeeping |

### Copy Guidelines

- Headlines are short. 3-6 words. Declarative.
- Body copy is conversational but not casual. No exclamation marks. No "we're so excited."
- Artist descriptions lead with the music, not the metrics. Spotify numbers come second to what makes the artist compelling.
- CTAs are direct: "Listen," "Get in touch," "See the roster." Not "Discover our amazing artists!"
- The word "curated" is banned. So is "synergy," "leverage," "ecosystem," and "disrupt."

### How Voice Maps to Visual

| Voice Trait | Visual Expression |
|-------------|-------------------|
| Confident | Generous whitespace. Nothing is crammed. |
| Selective | Limited color palette. Few UI elements per page. |
| Warm | Photography with natural light. Warm white text, not blue-white. |
| Direct | Clear typography hierarchy. No decorative noise. |
| Insider | Editorial layout. Feels like a publication, not a brochure. |

---

## 10. Developer Handoff Notes

### CSS Custom Properties

```css
:root {
  /* Colors: Primary */
  --color-void: #0A0A0A;
  --color-charcoal: #141414;
  --color-bone: #E8E4DF;
  --color-smoke: #9A9590;

  /* Colors: Accent */
  --color-ember: #D4603A;
  --color-gold: #C9A84C;
  --color-slate: #5B7A8A;

  /* Colors: Semantic */
  --color-success: #4A7C59;
  --color-warning: #C9A84C;
  --color-error: #B54A4A;
  --color-info: #5B7A8A;

  /* Colors: Surface */
  --color-surface-0: #0A0A0A;
  --color-surface-1: #141414;
  --color-surface-2: #1A1A1A;
  --color-surface-3: #222222;

  /* Typography: Families */
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-accent: 'Instrument Serif', Georgia, serif;

  /* Typography: Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
  --text-4xl: 3.052rem;
  --text-5xl: 3.815rem;

  /* Typography: Line Heights */
  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;

  /* Typography: Letter Spacing */
  --tracking-tight: -0.03em;
  --tracking-snug: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;
  --tracking-wider: 0.04em;

  /* Spacing: 8px base unit */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.5rem;    /* 24px */
  --space-6: 2rem;      /* 32px */
  --space-8: 3rem;      /* 48px */
  --space-10: 4rem;     /* 64px */
  --space-12: 5rem;     /* 80px */
  --space-16: 7.5rem;   /* 120px */
  --space-20: 10rem;    /* 160px */

  /* Layout */
  --max-width: 1280px;
  --grid-columns: 12;
  --grid-gutter: 1.5rem;
  --grid-margin: 3.75rem;

  /* Motion */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-out: cubic-bezier(0, 0, 0.25, 1);
  --ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  /* Borders & Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadows (subtle, for elevated surfaces) */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Design Tokens (JSON format for Figma/Style Dictionary)

```json
{
  "color": {
    "void": { "value": "#0A0A0A" },
    "charcoal": { "value": "#141414" },
    "bone": { "value": "#E8E4DF" },
    "smoke": { "value": "#9A9590" },
    "ember": { "value": "#D4603A" },
    "gold": { "value": "#C9A84C" },
    "slate": { "value": "#5B7A8A" }
  },
  "font": {
    "heading": { "value": "'Space Grotesk', system-ui, sans-serif" },
    "body": { "value": "'Inter', system-ui, sans-serif" },
    "accent": { "value": "'Instrument Serif', Georgia, serif" }
  }
}
```

### Component Patterns

**Artist Card**
- Container: `--color-surface-1` background, `--radius-md` corners
- Image: 3:4 aspect ratio, object-fit cover, lazy loaded
- Name: `--font-heading`, `--text-lg`, `--color-bone`, uppercase, `--tracking-snug`
- Hover: scale(1.02) on container, image shifts to full saturation
- Link wraps the entire card (accessible click target)

**Section Block**
- Padding: `--space-16` top and bottom (120px desktop)
- Max-width: `--max-width`, centered
- Heading: `--font-heading`, `--text-3xl`, `--color-bone`
- Subtext: `--font-body`, `--text-lg`, `--color-smoke`

**Navigation**
- Fixed top, transparent on load, `backdrop-filter: blur(12px)` + `--color-void` at 80% opacity on scroll
- Links: `--font-heading`, `--text-sm`, uppercase, `--tracking-wide`
- Active state: `--color-ember` underline, 2px
- Mobile: full-screen overlay, `--color-void` background, links at `--text-2xl`

**Button (Primary)**
- Background: `--color-ember`
- Text: `--color-bone`, `--font-heading`, `--text-sm`, uppercase, `--tracking-wide`
- Padding: `--space-3` vertical, `--space-6` horizontal
- Border-radius: `--radius-sm`
- Hover: lighten background 10%, `--duration-fast` ease
- No box-shadow. No gradient. Clean.

**Button (Secondary)**
- Background: transparent
- Border: 1px solid `--color-smoke`
- Text: `--color-bone`
- Hover: border color shifts to `--color-bone`, `--duration-fast`

### Technical Notes

- **Framework:** Keep Next.js. Move from styled-components to CSS Modules or Tailwind (developer preference, but styled-components adds unnecessary runtime).
- **CMS:** Contentful is fine. Ensure all 8 artists have entries. Add structured fields for: bio, genre tags, external links (Spotify, Instagram, YouTube, TikTok), hero image, thumbnail image.
- **Fonts:** Load via `next/font/google` for automatic optimization. No external Google Fonts stylesheet.
- **Images:** Use `next/image` with proper width/height/alt attributes. WebP format with AVIF fallback.
- **Accessibility baseline:** semantic HTML, proper heading hierarchy (one h1 per page), visible focus indicators (`outline: 2px solid var(--color-ember)`), skip-to-content link, ARIA labels on interactive elements.
- **Mobile first:** Design and build mobile-first. The current site hides content on mobile. This is the single most critical technical fix.

---

## Appendix: What We're Keeping vs. Changing

| Element | Current | Rebrand |
|---------|---------|---------|
| Dark background | #000000 | #0A0A0A (warmer, not pure black) |
| Text color | #d8d8d8 | #E8E4DF (warmer bone white) |
| Typography | Montserrat only | Space Grotesk + Inter + Instrument Serif |
| Color depth | 2 colors total | 7-color system with semantic tokens |
| Artist display | 3 of 8 artists | All 8 with individual pages |
| Photography style | Candid, warm | Keep and formalize (it's good) |
| Layout approach | Centered, sparse | Asymmetric, editorial, intentional |
| Mobile support | Broken (display:none) | Mobile-first responsive |
| Contact page | Decorative envelope icon | Real contact information, form |
| Motion | 3D homepage animation (broken) | Subtle, purposeful micro-interactions |

---

*This document is the source of truth for the GPO rebrand. Deviations require sign-off from Crispin. When in doubt, ask: "Does this feel like GPO, or does it feel like a template?" If it's the latter, start over.*
