# America On Track — Room to become.

A new 18-page local website built with Next.js, React, and TypeScript. The retired visual implementation has been replaced completely. Authentic organizational content and photographs remain; all transactions and applications link to official forms.

## Run locally

```sh
npm ci
npm run build
npm run start -- --port 3017
```

Open **http://127.0.0.1:3017**. For development: `npm run dev -- --port 3017`.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npm run qa
node scripts/edge-review.mjs
node scripts/external-links.mjs
node scripts/performance.mjs
npm audit --omit=dev
```

Browser scripts expect a running server on port 3017 and Playwright Chromium (`npx playwright install chromium` if missing). QA uses 18 pages at 1440, 1024, and 390px, plus a 390×600 state. It checks axe WCAG A/AA rules, console errors, image loading, overflow, navigation, program filtering, disclosures, reduced motion, focus restoration, internal links, and no-JavaScript content. Expanded visual states and focus trapping receive additional checks. Evidence is in `qa/rebuild/`.

## Implementation

- `src/app/`: the complete new route set and CSS visual system.
- `src/components/aperture.tsx`: interactive CSS 3D photographic environment.
- `src/components/program-gallery.tsx`: six expandable program rooms and audience filters.
- `src/components/navigation.tsx`: conventional primary links plus a native modal menu.
- `src/lib/content.ts`: factual program content, board rosters, milestones, official destinations.
- `public/images/`: authentic first-party photographs and event artwork.
- Fonts: locally bundled DM Sans Variable and Instrument Serif from Fontsource; licenses in `public/fonts/`.
- `research/`: original evidence, fresh verification, provenance, creative divergence, and review notes.
- `research/previous/` and `qa/previous/`: historical documentation and comparison evidence; no prior application is served.
- `BUILD_REPORT.md`: full handoff, QA results, and known limitations.

No public deployment, push, backend, payment processor, analytics, or fake submission handler. This local proposal intentionally blocks indexing. Reduced motion preserves every interaction and all essential content is server rendered. CSS perspective and optional scroll-driven transforms need no WebGL.
