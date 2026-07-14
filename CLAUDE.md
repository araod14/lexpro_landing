# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Single-page corporate landing for **Lexpro Soluciones, C.A.** — a Venezuelan consulting, engineering and technology firm focused on the oil/industrial sector. All UI copy is in **Spanish (es_VE)**; keep new content in Spanish.

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build (Next standalone output)
npm run start   # serve the production build
npm run lint    # next lint (eslint: next/core-web-vitals + next/typescript)
```

`make help` lists Make targets. Beyond the npm wrappers, Make handles Docker: `make up`/`make down` (docker compose), `make docker-build`/`make docker-run`, and `make docker-push REGISTRY=...`. There is **no test suite**.

The image builds via a 3-stage `Dockerfile` relying on `output: "standalone"` in `next.config.mjs` — don't remove that setting or the Docker/compose runner (`node server.js`) breaks.

## Architecture

Next.js 14 App Router + TypeScript + TailwindCSS v3 + Framer Motion + lucide-react. Import alias is `@/*` → `src/*`.

The whole site is one route. `src/app/page.tsx` composes ~11 section components in order; `src/app/layout.tsx` sets up the Montserrat font, SEO metadata, and an Organization JSON-LD block. `sitemap.ts` and `robots.ts` are the only other routes.

**Content vs. presentation is deliberately separated — edit data, not JSX, for copy changes:**

- `src/lib/site.ts` — contact info (email, WhatsApp, phone, RIF, address, social) and the derived `CTA` object of pre-built `mailto:`/`wa.me` links. Change contact details or CTA link behavior here.
- `src/lib/content.ts` — all section data as typed arrays (`SERVICES`, `INDUSTRIES`, `TESTIMONIALS`, `METRICS`, `NAV_LINKS`, etc.). Each item carries an `Icon` from lucide-react. To add/edit a service, industry, testimonial, etc., mutate these arrays rather than touching components.

Section components in `src/components/` map 1:1 to these data arrays and just render them. Reusable primitives live in `src/components/ui/` (`Container`, `Button`, `SectionTitle`, `FadeIn`, `Counter`).

**Server vs. client components:** components are React Server Components by default. Only `Navbar`, `ui/FadeIn`, and `ui/Counter` are `"use client"` (they use Framer Motion / interactivity). Keep new components server-side unless they need hooks, animation, or browser APIs — and put any Framer Motion usage behind a client component.

**Styling:** use the custom Tailwind theme tokens in `tailwind.config.ts` rather than raw hex — brand colors (`teal`, `ink`, `surface`), shadows (`shadow-card`, `shadow-card-hover`, `shadow-nav`), backgrounds (`bg-hero-gradient`, `bg-grid-pattern`), and animations (`animate-fade-in-up`, `animate-float`).

**Navigation** is anchor-based: `NAV_LINKS` hrefs (`#servicios`, `#industrias`, `#empleo`, …) must match the `id` on the corresponding `<section>`. When adding a section, wire up both.

Section images live in `public/images/` and are rendered via `next/image`.
