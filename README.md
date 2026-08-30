# Viraat Nellutla — Portfolio

Dark "editorial terminal" personal portfolio. Single-page scroll home with numbered
`Archive_00X` sections, a typing-effect terminal hero, an auto-scrolling tech marquee,
and scroll-reveal animations, plus `/about` and `/projects` routes.

Built per the companion **PRD** and **SRD**.

## Stack

- **Next.js 16** (App Router, static export — every route prerenders)
- **TypeScript**
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** — scroll reveals (marquee + caret are CSS-only)
- **lucide-react** — icons
- **@vercel/analytics**
- Fonts self-hosted via `next/font`: Space Grotesk (display) + JetBrains Mono

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing content (no layout code required)

All content lives in typed files under `src/data/`:

| File | Controls |
|---|---|
| `site-config.ts` | Name, initials, role, positioning line, availability chip, hero terminal text, meta tags, social/contact links |
| `education.ts` | Bio paragraphs + education entries (About) |
| `experience.ts` | Work history (Archive_004) |
| `skills.ts` | Grouped skills with auto counts (Archive_003) |
| `tech-stack.ts` | Hero marquee items |
| `projects.ts` | All projects; `featured: true` also shows on the home page (Archive_005) |
| `awards.ts` | Awards & Recognition (Archive_006); `AWARDS_VISIBLE_COUNT` sets the "Show all" threshold |
| `involvement.ts` | Involvement blocks (Archive_007) |

> **Before publishing:** the content in `src/data/` is a best-effort draft assembled
> from the PRD. Confirm every claim — titles, dates, metrics, handles, and URLs —
> and set `siteConfig.url` to the real domain (also used by the sitemap, robots,
> canonical tags, and OG image).

## Deploy

Push to GitHub and import into Vercel. `main` → production, PRs → preview deploys.
No environment variables are required for v1.

## Decisions taken on the PRD's open questions

These were chosen to unblock the build and are easy to revise in `src/data/`:

1. **Hero identity:** "Hello, I am VKN." · role chip "Builder / AI & Health-Tech"
2. **Featured projects:** F\*\*\* Cancer Foundation, Salus, MLHC 2026 Paper, Primer — with a full `/projects` archive
3. **Certifications:** replaced with **Awards & Recognition**
4. **Core Services:** dropped, replaced with an **Involvement** section (FBLA/DECA/TSA/Science Olympiad/Mu Alpha Theta)
5. **Availability:** "Open to Internships"
6. **Contact links:** GitHub, LinkedIn, email (`vkn889@gmail.com`)
