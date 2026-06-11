# The Jet Wash Team — Website

Production-ready marketing site for The Jet Wash Team (Exterior Cleaning
Services, UK nationwide). Built from real brand research on
[@jetwashteam](https://www.instagram.com/jetwashteam).

## Stack
Next.js 15 (App Router, fully static) · TypeScript · Tailwind CSS ·
GSAP + ScrollTrigger · Lenis smooth scroll · Framer Motion · Swiper ·
react-compare-slider · react-countup · self-hosted fonts (Fontsource:
Anton / Archivo / IBM Plex Mono).

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static production build
```

## Conversion architecture
Every CTA routes to the funnel the business already uses: phone and
WhatsApp (0796 333 4447). The quote form has **no backend** — it composes
a structured WhatsApp message and opens the chat. Nothing to host, nothing
to maintain, zero data stored.

## Editing content
All copy, services, process steps, testimonials, stats, phone numbers and
Instagram post IDs live in **`src/lib/site.ts`**. Edit there; the site
updates everywhere.

## Instagram
The social wall embeds real posts via Instagram's permanent
`/p/{shortcode}/embed/captioned` endpoint — no API keys, no expiring CDN
URLs. To rotate featured posts, replace the shortcodes in
`INSTAGRAM_POSTS` (the code from any post URL `instagram.com/p/XXXX/`).

## Before/after photography (action required)
`src/components/BeforeAfter.tsx` ships with procedural placeholder
textures (`/public/surfaces/`). Replace with real job photo pairs:
drop files in `/public/results/` and update the `COMPARISONS` array.
Export stills from the team's reels — first frame vs last frame works well.

## Pre-launch checklist
- [ ] Set production domain in `src/lib/site.ts` (`BUSINESS.url`) — drives canonical URL, sitemap, robots, OG tags
- [ ] Replace before/after placeholders with real job photos
- [ ] Confirm testimonials with real customer reviews (current ones are representative drafts — swap in verified quotes)
- [ ] Confirm stats in `STATS` (surfaces restored count, rating) against reality
- [ ] Add an OG image: `src/app/opengraph-image.png` (1200×630)
- [ ] Deploy (Vercel: zero config — `vercel deploy`)

## Performance
Fully static output, no server runtime. Instagram iframes lazy-mount only
when scrolled near. All scroll animation uses GPU-only properties
(clip-path / transform / opacity). `prefers-reduced-motion` disables
Lenis, GSAP pinning and entrance animation site-wide with static
fallbacks. Local fonts = no third-party font requests.

## Accessibility
Semantic landmarks, labelled forms and nav, visible focus rings,
44px+ touch targets, reduced-motion support, alt text on comparison media.
"# Jet-wash-" 
