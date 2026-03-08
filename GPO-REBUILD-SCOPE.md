# GPO Website Rebuild - Full Scope

**Date:** March 6, 2026
**Repo:** `crispin-day/good-people-only`
**Domain:** goodpeopleonly.com
**Brand guidance:** `gpo-brand-guidance.md`
**Contentful Space:** `4ymxhkzggf2x` (keys in 1Password)

---

## Current State (What Exists)

| Area | Current | Problems |
|------|---------|----------|
| **Framework** | Next.js 12.1 (Pages Router) | 4 years old, deprecated patterns |
| **React** | 18.0.0-rc.0 | Release candidate, never updated to stable |
| **Styling** | styled-components + CSS Modules (mixed) | Inconsistent, runtime overhead |
| **3D/Visual** | React Three Fiber + Three.js + custom GLSL | Broken, massive bundle, overkill |
| **CMS** | Contentful (connected but underused) | Only 3 of 8+ artists displayed |
| **Mobile** | `display:none` and `overflow:hidden` hacks | Fundamentally broken |
| **Pages** | 8 routes (Home, Management, Label, About, Consulting, Contact, Careers, 404) | Sparse content, placeholder energy |
| **Deployment** | No CI/CD config, no hosting setup | `gh-pages` deploy script (unused) |
| **Deps** | 20+ packages including leva, wouter, branding lib | Bloated, many unused |

**Verdict:** Ground-up rebuild. Nothing worth preserving except the Contentful connection and artist photography.

---

## Rebuild Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 15 (App Router) | Latest stable, RSC, streaming, image optimization |
| **Styling** | Tailwind CSS 4 | Utility-first, no runtime, matches design token system |
| **CMS** | Contentful (existing) | Already paid for, has artist data |
| **Fonts** | `next/font/google` | Zero-layout-shift font loading |
| **Images** | `next/image` | WebP/AVIF, lazy loading, responsive |
| **Deployment** | Vercel | Native Next.js host, preview deploys, edge |
| **Animation** | Framer Motion (light) | Subtle micro-interactions, no 3D |
| **TypeScript** | Yes | Type safety, better DX |

---

## Site Architecture (Pages)

### Primary Pages
| Route | Purpose | Content Source |
|-------|---------|---------------|
| `/` | Homepage | Static + Contentful (featured artists) |
| `/roster` | Full artist roster | Contentful (all artists, management + label combined) |
| `/roster/[slug]` | Individual artist page | Contentful (bio, links, images, genre) |
| `/about` | Company story, team, philosophy | Static + Contentful |
| `/services` | Management, label, consulting (unified) | Static |
| `/contact` | Real contact form + info | Static + form handler |

### Secondary/Utility
| Route | Purpose |
|-------|---------|
| `/store` | Redirect to external merch store |
| `/careers` | Redirect to job board (or static page if active postings) |
| `404` | Custom error page |

### Removed/Merged
- `/management` + `/label` → merged into `/roster` with filter tags
- `/consulting` → folded into `/services`
- 3D homepage canvas → gone

---

## Content Model (Contentful)

### Existing content types (from code):
- `management` (artists)
- `label` (artists)
- `store` (URL)
- `consulting` (title, description, email)
- `contact` (email, title)
- `about` (title, subtitle, description, etc.)

### Required updates:

**Artist** (unified, replaces `management` + `label`):
| Field | Type | Notes |
|-------|------|-------|
| `name` | Short text | Required |
| `slug` | Short text | URL-safe, unique |
| `bio` | Rich text | For artist page |
| `shortBio` | Short text | For roster grid card |
| `heroImage` | Media | Full-width, 16:9 |
| `thumbnail` | Media | Square, for grid |
| `genres` | Short text (list) | Tags: indie rock, folk, comedy, etc. |
| `division` | Short text | "Management" or "Label" or both |
| `spotifyUrl` | Short text | |
| `instagramUrl` | Short text | |
| `youtubeUrl` | Short text | |
| `tiktokUrl` | Short text | |
| `websiteUrl` | Short text | |
| `featured` | Boolean | Show on homepage |
| `sortOrder` | Number | Display order |

**All 8+ current artists need entries:** Good Kid, Jeremie Albino, BDR, NSP, Starbomb, Rare Americans, Glitter Party, Sister Ray, Benja

---

## Page-by-Page Spec

### Homepage (`/`)
- Hero: Full-viewport, GPO logo or wordmark, tagline ("We don't chase trends. We build artists."), subtle scroll indicator
- Featured artists section: 3-4 highlighted artists in editorial grid layout
- Brief "what we do" block: management, label, consulting - one line each, link to `/services`
- Recent news/wins section (optional, Contentful-driven or manual)
- CTA: "Get in touch" → `/contact`
- No 3D canvas, no heavy animation
- Micro-interactions: scroll-triggered fade-ins, subtle parallax on images

### Roster (`/roster`)
- Grid of all artists (responsive: 1 col mobile, 2 col tablet, 3-4 col desktop)
- Filter by division (Management / Label / All)
- Artist card: thumbnail, name, genre tags
- Hover: scale(1.02), desaturation → full color
- Click → individual artist page

### Artist Page (`/roster/[slug]`)
- Hero image (full-width)
- Artist name (Instrument Serif, display size)
- Bio
- Streaming/social links (Spotify, Instagram, YouTube, TikTok, website)
- Photo gallery (if available)
- "Back to roster" navigation

### About (`/about`)
- Company story (editorial layout, asymmetric text + image blocks)
- Team section (Crispin + key team members, photos optional)
- Philosophy / values
- Location: Toronto

### Services (`/services`)
- Three service blocks: Management, Label (Good People Record Co.), Consulting
- Each: brief description, what's included, CTA
- Clean, information-dense, no fluff

### Contact (`/contact`)
- Contact form (name, email, subject, message)
- General inquiry email: info@goodpeopleonly.com (or whatever's current)
- Office location (Toronto, no street address needed)
- Social links
- No glitch card effect - clean and functional

---

## Design System Implementation

All tokens from `gpo-brand-guidance.md` implemented as Tailwind config:

- **Colors:** Void, Charcoal, Bone, Smoke, Ember, Gold Dust, Slate Blue + semantics
- **Typography:** Space Grotesk (headings), Inter (body), Instrument Serif (accent)
- **Type scale:** Major Third ratio, 12px-61px
- **Spacing:** 8px base unit system
- **Grid:** 12-column, responsive breakpoints (640/768/1024/1280)
- **Motion:** `prefers-reduced-motion` respected, subtle easing curves
- **Accessibility:** WCAG AA minimum, focus indicators, skip-to-content, semantic HTML

---

## Technical Requirements

1. **TypeScript throughout** - no `.js` files
2. **App Router** - layouts, loading states, error boundaries
3. **Server components by default** - client components only where interactivity needed
4. **ISR (Incremental Static Regeneration)** for Contentful pages - revalidate every 60s
5. **next/image** for all images - proper sizing, alt text, lazy loading
6. **next/font/google** for font loading - zero layout shift
7. **Metadata API** for SEO - per-page titles, descriptions, OG images
8. **Sitemap + robots.txt** auto-generated
9. **Analytics** - Vercel Analytics or Plausible (privacy-respecting)
10. **Contact form** - API route + email delivery (Resend or similar)

---

## Deployment Plan

1. **Build on branch** (`rebuild` branch, not `main`)
2. **Connect repo to Vercel** - preview deploys on PRs
3. **Environment variables** in Vercel: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`
4. **Staging review** at Vercel preview URL
5. **DNS cutover** when approved: point `goodpeopleonly.com` A record to Vercel
6. **Merge to `main`** → production deploy

---

## Build Phases

### Phase 1: Foundation (estimated: 1-2 days)
- [ ] Initialize Next.js 15 + TypeScript + Tailwind on `rebuild` branch
- [ ] Implement design tokens (colors, typography, spacing, motion)
- [ ] Build core layout: header/nav, footer, page shell
- [ ] Mobile-first responsive navigation (fixed top, blur on scroll, full-screen mobile overlay)
- [ ] Connect Contentful client with typed responses
- [ ] Set up `next/font/google` (Space Grotesk, Inter, Instrument Serif)

### Phase 2: Pages (estimated: 2-3 days)
- [ ] Homepage (hero, featured artists, services overview, CTA)
- [ ] Roster page (grid, division filters)
- [ ] Individual artist pages (dynamic `[slug]` route)
- [ ] About page
- [ ] Services page
- [ ] Contact page (form + API route)
- [ ] 404 page
- [ ] Redirects for old routes (`/management` → `/roster`, `/label` → `/roster`, `/consulting` → `/services`)

### Phase 3: Polish (estimated: 1-2 days)
- [ ] Scroll animations (Framer Motion, subtle fade-ins/parallax)
- [ ] Image optimization pass (all images through next/image, proper aspect ratios)
- [ ] SEO: metadata, OG images, sitemap, robots.txt
- [ ] Accessibility audit (heading hierarchy, focus management, alt text, contrast)
- [ ] Performance audit (Lighthouse 90+ on all metrics)
- [ ] Cross-browser/device testing

### Phase 4: Launch (estimated: 1 day)
- [ ] Connect Vercel
- [ ] Final staging review with Crispin
- [ ] DNS cutover (Namecheap → Vercel)
- [ ] Post-launch smoke test
- [ ] Old repo archived

---

## Contentful Setup Needed

Before build starts, the Contentful space needs updated content types and entries. Two options:

**Option A:** I update Contentful programmatically via their Management API (preferred - faster, type-safe)
**Option B:** Crispin/team updates manually in the Contentful dashboard

Either way, we need all artists entered with: name, slug, bio, images, genre tags, social links, division.

---

## Open Questions for Crispin

1. **Artist list** - Confirm the full roster for launch. Current known: Good Kid, Jeremie Albino, BDR, NSP, Starbomb, Rare Americans, Glitter Party, Sister Ray, Benja. Any additions or removals?
2. **Store URL** - What's the current merch store link?
3. **Contact email** - Which email should the contact form send to? (info@goodpeopleonly.com? crispin@?)
4. **Team section** - Want team bios on the About page, or just Crispin?
5. **Analytics** - Vercel Analytics (free tier, simple) or something else?
6. **Careers** - Still using the Rostr.cc job board, or remove careers page?
7. **Domain registrar access** - Who has Namecheap login for DNS cutover?

---

## Estimated Timeline

| Phase | Duration | Notes |
|-------|----------|-------|
| Contentful setup | 1 day | Can run parallel with Phase 1 |
| Phase 1: Foundation | 1-2 days | |
| Phase 2: Pages | 2-3 days | |
| Phase 3: Polish | 1-2 days | |
| Phase 4: Launch | 1 day | After Crispin approval |
| **Total** | **~6-9 days** | Dependent on content readiness and review cycles |

---

*This scope is ready for execution. On Crispin's go, I'll spin up a coding agent on the `rebuild` branch and start Phase 1.*
