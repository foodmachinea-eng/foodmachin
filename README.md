# Aksar Food Machine — Website Redesign (Demo)

A frontend-only redesign preview of [aksarfoodmachine.com](https://www.aksarfoodmachine.com/), built with
**Next.js 15, React 19, TypeScript, Tailwind CSS 3 and Lucide icons**. No backend, database, login or admin panel.

## Requirements

- Node.js **18.18+** (20 or 22 recommended)
- npm 9+

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build      # outputs a fully static site to ./out
npm start          # serves ./out at http://localhost:3000 (uses `npx serve`)
```

The site is a static export (`output: "export"` in `next.config.mjs`), so `./out` can be hosted anywhere.

## Deploy

### Netlify
1. Push this folder to a GitHub/GitLab repo (or drag-and-drop `out/` on https://app.netlify.com/drop).
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: `npm run build` · Publish directory: `out`
4. Deploy.

CLI alternative:
```bash
npm i -g netlify-cli
npm run build
netlify deploy --dir=out --prod
```

### Vercel
1. Import the repo at https://vercel.com/new — the Next.js preset is detected automatically.
2. Keep the defaults and deploy (Vercel reads `output: "export"` and serves `out/`).

CLI alternative:
```bash
npm i -g vercel
vercel --prod
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, intro, categories, featured machines, why us, process, quality, applications, CTA |
| `/products/` | Catalogue with working search, category filter, empty state and reset (filters sync to the URL, e.g. `/products/?category=peda-moulding`) |
| `/products/[slug]/` | 24 product pages — gallery, overview, features, applications, published specs, related machines |
| `/about/` | Company profile, facility photos, strengths, product overview |
| `/manufacturing/` | Facility and process overview |
| `/quality/` | Construction and quality approach |
| `/contact/` | Contact details + enquiry form (validation + simulated success). `?product=<slug>` pre-selects a machine |

`sitemap.xml` and `robots.txt` are generated at build time.

## Project structure

```
src/
  app/                 routes (App Router), metadata, sitemap, robots
  components/          Header, Footer, ProductCard, Catalogue, Gallery, EnquiryForm, ui helpers
  data/site.ts         company details, contact info, facility photos, navigation
  data/products.ts     categories + product catalogue (typed local data)
```

To add or edit a machine, edit `src/data/products.ts`. The `Product` type is ready to be swapped for a CMS or API later.

## Content sources & what to confirm with the client

All content comes from Aksar's own published material — the existing website (title/meta) and the company's
catalogue profile on IndiaMART (description, address, partner, GSTIN, product listings, specifications and photos).
Nothing was invented; where information was missing it is omitted or clearly labelled.

Please confirm before going live:
- **Logo & brand colour** — the logo is the 120×120 version from the company's catalogue. Get a high-resolution / vector
  logo and set the exact brand colour in `src/app/globals.css` (`--brand`, `--brand-dark`, `--brand-soft`).
- **Heritage year** — the old site says Shri Sahajanand Industries was founded in 1970; the catalogue says "since 1972".
  The demo says "in the 1970s".
- **Email address and WhatsApp number** — not published, so they are not shown. Add to `src/data/site.ts`.
- **Manufacturing process** — the step-by-step process is marked *illustrative* until confirmed.
- **Product photos** — 6 machines (Multipurpose Rounder, Rasgulla, Rasmalai, Peda Pressing, Kaju Katli Cutting,
  Double Head Namkeen) have no published photo and show a "photo to be supplied" panel.
- **Specifications** — shown as published; a few listings had conflicting figures, which were left out.
- **Images are hot-linked** from the company's catalogue CDN (`5.imimg.com`). For production, download the originals
  into `public/images/` and update the URLs.

## Enquiry form

The form validates on the client and simulates a successful submission — **nothing is stored or sent**.
To go live, replace `submitEnquiry()` in `src/components/EnquiryForm.tsx` with a call to Netlify Forms, Formspree,
an email API or your own endpoint.

## Accessibility & motion

Semantic landmarks, skip link, labelled form fields with `aria-invalid` / error descriptions, keyboard-accessible
mobile menu (Escape closes), visible focus styles. Scroll reveals and page fades are disabled for users who prefer
reduced motion.
