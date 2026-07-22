# Model Dossier — Claude Family vs. Kimi K3

A static React + TypeScript site comparing Anthropic's Claude family against
Moonshot AI's Kimi K3. No backend — pure static HTML/CSS/JS after build.

Built with Vite, React, TypeScript, Tailwind CSS, and Recharts.

## Run locally

```bash
npm install
npm run dev       # dev server with hot reload
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally
```

## Deploy it

The `dist/` folder (after `npm run build`) is a fully static site — any static
host works. Three easy options:

### Option A — Netlify Drop (fastest, no account needed to try)
1. Run `npm run build`.
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder onto the page. You get a live URL immediately.
4. (Optional) Create a free account to keep the URL permanently and get a custom domain.

### Option B — Vercel
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`.
4. Click Deploy.

### Option C — GitHub Pages
1. Push this project to a GitHub repo.
2. `npm install -D gh-pages`
3. Add to `package.json` scripts: `"deploy": "npm run build && gh-pages -d dist"`
4. Set `base: '/your-repo-name/'` in `vite.config.ts`.
5. Run `npm run deploy`.

## Project structure

```
src/
  data.ts                 — all comparison content, typed
  vendorStyles.ts          — accent-color helpers
  App.tsx                  — page assembly + vendor filter state
  components/
    Header.tsx              — title + vendor-lens toggle (signature control)
    SectionHeading.tsx       — shared "§N" section label
    ComparisonTable.tsx      — full attribute table (ledger + mobile cards)
    PricingSection.tsx       — why Kimi K3 is cheaper
    ArchitectureSection.tsx  — attention mechanism comparison
    DecisionSection.tsx      — should-we-switch reasoning
    BenchmarkSection.tsx     — Recharts bar charts
    KimiSpecSheet.tsx        — full Kimi K3 spec insert
    Footer.tsx
```

## Content source

All content is drawn from the two documents provided: an internal model
comparison memo and Moonshot's Kimi K3 spec sheet. Benchmark figures are
attributed to Artificial Analysis (artificialanalysis.ai).
