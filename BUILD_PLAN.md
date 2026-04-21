# Good People Only — Build Plan

> Last updated: 2026-04-21
> Engineer: Dino
> Status: IN PROGRESS

---

## Architecture Overview

- **Framework:** Next.js 15, App Router, TypeScript (no .js files)
- **Styling:** Tailwind CSS 4 + design tokens (see below)
- **CMS:** Contentful (Space ID: `4ymxhkzggf2x`) — future state; placeholder data for now
- **Fonts:** Space Grotesk (headings), Inter (body), Instrument Serif (accent display)
- **Images:** next/image, WebP/AVIF, lazy, responsive
- **Animation:** Framer Motion (subtle: fade-in, scale on hover, no parallax)
- **Contact form:** API route + Resend
- **Deployment:** Vercel (preview on PR, prod on merge to main)

---

## Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| Void | `#0A0A0A` | Primary background |
| Charcoal | `#141414` | Cards, surfaces |
| Bone | `#E8E4DF` | Primary text |
| Smoke | `#9A9590` | Secondary text |
| Ember | `#D4603A` | Accent, CTAs |
| Gold Dust | `#C9A84C` | Awards, premium moments |
| Slate Blue | `#5B7A8A` | Links, info states |

---

## Artist Placeholder Data (8 slots, expandable)

| # | Name | Division | Genre |
|---|------|----------|-------|
| 1 | Good Kid | Management | Indie Pop |
| 2 | Jeremie Albino | Management | Folk / Soul |
| 3 | Rare Americans | Management | Alternative Rock |
| 4 | Glitter Party | Management | Pop |
| 5 | BDR | Label | Hip-Hop |
| 6 | NSP | Label | Comedy Rock |
| 7 | Starbomb | Label | Comedy |
| 8 | Sister Ray | Label | Indie Rock |

> Slot 9 (Benja) held in reserve. Crispin to confirm final roster before Contentful population.

---

## Routes

| Route | Type | Status |
|-------|------|--------|
| `/` | Homepage | Stub exists — needs polish |
| `/roster` | Artist grid (filter: Management/Label) | NOT BUILT |
| `/roster/[slug]` | Individual artist page | NOT BUILT |
| `/about` | Company story, team, philosophy | Stub only |
| `/services` | Management, label, consulting | Stub only |
| `/contact` | Contact form + info | Stub only |
| `404` | Custom error page | NOT BUILT |
| `/store` | Redirect to external merch | NOT BUILT |
| `/careers` | Static or redirect | Stub only |

Redirects to add: `/management` and `/label` → `/roster`, `/consulting` → `/services`

---

## Phase 1: Foundation (CURRENT)

**Goal:** Clean, production-ready base. Everything a page needs to build on.

- [ ] Shared layout: Nav component (responsive, mobile hamburger)
- [ ] Shared layout: Footer component
- [ ] Design tokens wired into Tailwind config
- [ ] Fonts: switch from Google CDN link to `next/font/google` (Space Grotesk, Inter, Instrument Serif)
- [ ] Artist data module: `lib/artists.ts` — typed placeholder array (8 artists, expandable)
- [ ] `next build` passes clean

**Acceptance criteria:**
- Build passes with zero errors
- Nav and footer render correctly on mobile and desktop
- Fonts load via next/font (no FOUT)

---

## Phase 2: Core Pages

**Goal:** All routes functional with real layout and placeholder content.

- [ ] `/` Homepage: hero (video bg), featured artists strip (3-4), services overview, CTA
- [ ] `/roster`: artist grid, filter tabs (All / Management / Label), links to slug pages
- [ ] `/roster/[slug]`: artist detail page (hero image, bio, social links, genre tag)
- [ ] `/about`: company story, Crispin bio, philosophy
- [ ] `/services`: Management, Record Label, Label Services — detail cards
- [ ] `/contact`: form (name, email, message) + API route + Resend integration
- [ ] `404`: Custom not-found page
- [ ] Redirects: `/management`, `/label` → `/roster`; `/consulting` → `/services`
- [ ] `/careers`: static "no current openings" or redirect (Crispin to decide)

**Acceptance criteria:**
- All routes return 200 (or correct redirect/404)
- Roster grid filters work client-side
- Contact form submits and returns success state
- `next build` passes clean

---

## Phase 3: Polish

**Goal:** Feels premium. Passes Lighthouse 90+ on all metrics.

- [ ] Framer Motion: scroll-reveal on sections (fade + 20px up, 400ms ease-out)
- [ ] Hover states: artist cards scale(1.02), 300ms ease-out
- [ ] `prefers-reduced-motion` respected everywhere
- [ ] next/image on all images (responsive sizes, priority on above-fold)
- [ ] SEO: metadata API on all routes (title, description, OG image)
- [ ] `sitemap.xml` and `robots.txt` via Next.js route handlers
- [ ] Accessibility audit: keyboard nav, focus states, aria labels, color contrast
- [ ] Lighthouse: target 90+ Performance, Accessibility, Best Practices, SEO
- [ ] Mobile QA: test on 375px, 390px, 414px breakpoints

---

## Phase 4: CMS + Launch

**Goal:** Real content, live site.

- [ ] Contentful client: `lib/contentful.ts` (typed, cached)
- [ ] Artist data pulled from Contentful (replace placeholder array)
- [ ] Artist images served via Contentful CDN through next/image
- [ ] Vercel project connected to GitHub repo
- [ ] Preview deploys on PRs working
- [ ] Staging review with Crispin
- [ ] DNS cutover: Namecheap → Vercel
- [ ] Production smoke test

---

## Open Questions (need Crispin's answers)

1. Final artist roster — confirm 8 names and division splits
2. Merch store URL (for `/store` redirect)
3. Contact form destination email (info@goodpeopleonly.com?)
4. About page: just Crispin or full team?
5. Analytics: Vercel Analytics, GA, or none?
6. Careers: static message or remove entirely?

---

## Branch Strategy

- `rebuild` — active development (Dino works here)
- `main` — production (only after Crispin staging approval)
- PRs from `rebuild` → `main` for each phase completion
