# homesbylance.com — Setup

## What's built
- Next.js 16 (App Router) + Tailwind v4, brand tokens wired to your palette
- Homepage = Local with Lance hub (hero, series grid, authority section, valuation CTA)
- `/series/[slug]` — one dynamic template drives all 7 series pages
- `/realestate/*` — hub, homes (placeholder → IDX later), Traverse Mountain guide,
  buyer/seller guides, contact
- `/realestate/market-report` — index + `/market-report/[area]` dynamic pages for
  Traverse Mountain, Lehi, Eagle Mountain, Saratoga Springs, Tooele, Stansbury Park
- Lead capture: `LeadForm` component → `/api/lead` → forwards to `LEAD_WEBHOOK_URL`
  (point this at a GAS Web App `doPost` that writes to a Sheet, or a Supabase endpoint later)
- SEO/AEO: per-page metadata, `RealEstateAgent` JSON-LD in the root layout,
  `sitemap.ts`, `robots.ts`, `public/llms.txt`

## Run locally
```
npm install
npm run dev
```

## Deploy (Vercel)
1. Push this folder to a new GitHub repo
2. Import the repo in Vercel
3. Add env var `LEAD_WEBHOOK_URL` (your GAS Web App exec URL) in Vercel project settings
4. Add both domains in Vercel → Domains: `homesbylance.com` (primary),
   `localwithlance.com` and `utahlance.com` (redirect to homesbylance.com — Vercel has
   a redirect option when adding a secondary domain)
5. Update DNS at your registrar (Domains4Less panel) with the records Vercel gives you

## Next build passes
- Wire `/realestate/homes` + `/realestate/market-report/[area]` stats to your
  MLS RESO Web API once that pipeline is built
- Replace `console.log` fallback in `/api/lead` with your GAS webhook
- Add real blog posts under `/blog`
- Swap series "Coming Soon" blocks for embedded YouTube/Instagram once content is live
