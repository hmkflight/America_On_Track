# America On Track — The Whole Picture

A complete reconstruction built with Next.js, React and TypeScript. The opening is a photographic exhibition with six program focuses; deeper routes pair visual exhibits with readable documents. No previous visual system is active.

## Local preview

```sh
npm ci
npm run build
npm run start -- --port 3026
```

Open http://127.0.0.1:3026. Development: `npm run dev -- --port 3026`.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npm run qa
npm run qa:visual
node scripts/external-links.mjs
node scripts/performance.mjs
npm audit --omit=dev
```

Browser checks require a running local server and Playwright Chromium. `QA_BASE` can override the main suite’s default URL. Evidence is in `qa/reconstruction/`. The suite covers 18 pages at 1440/1024/390px, short 390/320px states, program focus, audience filters, menu keyboard behavior, archive/board disclosures, portraits, resource search, no-JS and reduced-motion behavior, internal destinations, images, overflow, console errors and axe WCAG A/AA checks.

## Structure

- `src/components/exhibition.tsx`: photographic assembly and audience/program discovery.
- `src/components/reader.tsx`: server-rendered reading/exhibit composition.
- `src/components/people-exhibit.tsx`: founder portrait selection.
- `src/components/shell.tsx`: navigation, modal index, no-JS links and compact footer.
- `src/components/resources.tsx`: searchable resource directory.
- `src/lib/content.ts`: verified program descriptions, source links, boards and milestones.
- `research/`: current evidence, synthesis, directions, decisions and asset provenance.
- `research/previous`, `qa/previous`, `qa/rebuild`, `scripts/previous`: historical evidence only.

Original first-party images are preserved. New fonts are Unbounded and Public Sans, served locally with SIL licenses. CSS perspective is an enhancement; there is no WebGL dependency, render loop, analytics, backend, fake form or payment handler. Participation and giving use official external forms. This private proposal is noindex.

The earlier builds are recoverable at commits `056ed04` and `371a131`. The user-created `scripts/check-links.mjs` remains untouched. See `BUILD_REPORT.md` for actual validation and known limitations.

Additional focused checks: `node scripts/transition-review.mjs` and `node scripts/resilience-review.mjs` exercise shared-image motion, touch, keyboard, missing images and unavailable View Transitions. Full dependency audit currently reports five high-severity development-chain findings associated with one braces advisory; production dependency audit is clear. No forced major-version downgrade was applied.

## Content ownership and retirement of the original site

All informational links now resolve inside this app. Eight additional detail routes cover biographies, awards, results, community health and SMS; `/privacy` contains the transferred full policy. Historical URLs redirect via `src/lib/legacy-routes.json`. The golf PDF and sponsor images are stored in `public/`. Wufoo remains the real external form/payment service.

Run `node scripts/content-migration-qa.mjs` against the running production server to verify migrated pages, accessibility, local links, anchor navigation and legacy redirects. See `research/CONTENT_MIGRATION.md` for the migration and provenance record.
