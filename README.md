# America On Track — redesign proposal

A complete, locally hosted, 18-page Next.js / React / TypeScript redesign. No backend, tracking, account system, or payment collection. Official action forms remain with the organization.

## Run

```sh
npm ci
npm run build
npm run start -- --port 3000
```

Preview: http://127.0.0.1:3000

For development: `npm run dev -- --port 3000`.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
npm run qa
npm audit --omit=dev
```

`npm run qa` expects the site running on port 3000 and a Playwright Chromium installation. If needed: `npx playwright install chromium`. The suite checks 18 routes at three viewports, axe accessibility rules, image loading, overflow, internal links, navigation, filters, disclosures, reduced motion and essential no-JS content. It writes screenshots and JSON evidence to `qa/`.

## Project map

- `src/app/`: 18 content routes, metadata, not-found, robots, favicon and design system CSS.
- `src/lib/content.ts`: program content, official form URLs, boards and history milestones.
- `src/components/`: shared UI, header/footer, program filters and the connection explorer.
- `public/`: first-party imagery and locally hosted licensed fonts.
- `research/`: actual source inventory, factual decisions, content audit and asset provenance.
- `qa/`: rendered screenshots and machine-readable test reports.
- `BUILD_REPORT.md`: final handoff and limitations.

The proposal is intentionally noindex and robots-disallowed. It has not been deployed or committed. Before a real launch, confirm current program availability, roster/affiliations, source conflicts, image permissions and official form configuration with the organization; then update domain metadata and indexing settings.
# America_On_Track
