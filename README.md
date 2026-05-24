# TRG Digital — Marketing Website

Next.js 16 App Router · TypeScript · Tailwind CSS v4 · MDX · Resend

## Local development

```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev                  # http://localhost:3000
```

`ALLOW_PLACEHOLDERS=true` is set in `.env.example` so the dev build is not blocked by missing placeholder content.

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Production** | Full domain, no trailing slash. e.g. `https://trgdigital.co.uk` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional | Plausible site key (e.g. `trgdigital.co.uk`). Omit to disable analytics. |
| `RESEND_API_KEY` | **Production** | Resend API key — contact form emails |
| `CONTACT_INBOX` | **Production** | Email address that receives enquiries |
| `ACKNOWLEDGEMENT_FROM` | **Production** | Verified Resend sender address |
| `ALLOW_PLACEHOLDERS` | Staging only | Set `true` to skip the domain build guard |

## Deploying to Vercel

1. Import the repo in the Vercel dashboard
2. Add all environment variables above under **Settings → Environment Variables**
3. Set `ALLOW_PLACEHOLDERS` to `true` on Preview deployments, leave unset on Production
4. Production builds will fail fast if `NEXT_PUBLIC_SITE_URL` is missing or still set to `trgdigital.example`

### Pre-launch checklist

Before setting `ALLOW_PLACEHOLDERS` to false on production, confirm every item in `CONTENT-TODO.md` is resolved.

## Content

Blog posts live in `content/blog/*.mdx`. Author profiles in `content/authors/*.mdx`.

Frontmatter schema for posts:

```yaml
---
title: string          # required
description: string    # required — used for meta description and article card
publishedAt: YYYY-MM-DD
author: slug           # matches content/authors/<slug>.mdx
tags: [string]
featured: false        # set true to pin to top of blog index
draft: false           # set true to hide in production builds
---
```

## Architecture

```
app/
  (marketing)/        # public-facing pages — all statically generated
  actions/contact.ts  # Server Action — contact form → Resend
  sitemap.ts          # auto-generated sitemap
  robots.ts           # robots.txt
  opengraph-image.tsx # default OG image (1200×630)
components/
  chrome/             # header, footer, mobile menu
  cards/              # article card, team member card
  sections/           # hero, feature block, etc.
  mdx/                # MDX custom components (PullQuote, Callout, Figure, Stat)
  primitives/         # Section, Container layout wrappers
lib/
  mdx.ts              # content layer — reads/parses MDX files
  seo.ts              # SITE config, buildMetadata(), schema builders
  contact.ts          # Zod schema + types for contact form
```
