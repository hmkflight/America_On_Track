# AMERICA ON TRACK — COMPLETE CREATIVE RECONSTRUCTION

Local production preview: **http://127.0.0.1:3026**

## Timing and scope

- Started: 2026-10-08 07:51:46 UTC (00:51:46 Pacific).
- Finished: 2026-10-08 08:31:37 UTC.
- Elapsed continuous session work: 39 minutes 51 seconds (wall-clock measurement; no separate CPU/active-time profiler).
- Sole-agent research, design, implementation and QA in the existing Desktop repository.
- No deployment, public publishing, commit or Git push performed for this reconstruction.

## Research that changed the design

Retrieved all 21 current published first-party pages through the official WordPress API, plus sitemap index/page sitemap; inspected the live public homepage in isolated Chromium. Preserved dated raw JSON and readable page text. Twenty pages match the October 7 HTML captures; golf differs in generated countdown content. Rechecked programs/audiences, founders, all three boards, published results, awards, policy work, participation/giving paths, contact and the October 26, 2026 golf event.

The central finding is organizational breadth: AOT works with personal relationships and with the environments around people. Mentoring, civic leadership, education, physical activity, nutrition and public-health policy should be understood together without conflating their audiences or methods. The new site makes that breadth visible in one exhibition and puts detailed reading on explicit routes.

Peer research: BBBS role clarity; MENTOR's separation of participation, program support and advocacy; BGCA's audience/program/safety pathways; Olive Crest's distinction between getting and giving help. No peer outcome claims were transferred.

Adjacent research: House of Honey, Floema, Cerebrium, Farm Minerals, Aimee's Papercraft World, Oryzo, 21 Hrs on the Moon and Longbow. Live browser captures for Honey/Floema/Cerebrium; text, creator accounts or attempted access for others are explicitly distinguished in EXTERNAL_REFERENCES.md. Adopted coherent visual premises, tangible information, persistent orientation and contextual categories. Rejected loading gates, cinematic dependence on unavailable media, automatic camera motion and complex rendering requirements.

Technical references: MDN CSS 3D/View Transitions, WAI interaction guidance, current bundled Next 16.3 documentation, React best-practices skill.

## Preserved and retired

Preserved factual source records, all 13 authentic client images, provenance and unresolved conflicts, contact/form URLs, accurate program content/board rosters, useful Next/TypeScript/ESLint configuration and adaptable QA utilities. The previously untracked `scripts/check-links.mjs` is untouched.

Recoverability: previous production is Git commit `056ed04`; earlier editorial build is `371a131`. Historical documentation/screenshots remain outside the production app.

Removed all five previous visual components (`aperture`, `elements`, `footer`, `navigation`, `program-gallery`), replaced the entire stylesheet and every content route, replaced favicon/metadata, removed DM Sans and Instrument Serif dependencies, and archived old design-specific scripts/fonts/documentation. No old route or alternate design is served. Prior creative headlines were removed from program data.

## Three architectures explored

1. **The Whole Picture — selected:** a photographic exhibition with focus/overview states and paired exhibit/reader routes. Best fit for the breadth of AOT's work and the authentic asset set; strong architectural distance at low runtime cost.
2. **The Community Edition — rejected:** a civic newspaper/publication. Strong reading clarity, but too close to the retired editorial grammar and weak differentiation.
3. **A Day, Held Together — rejected:** cinematic scenes across a day. Existing photographs cannot honestly document a continuous day; discoverability and media costs outweigh the benefit.

Full pre-implementation reasoning: research/CREATIVE_DIRECTIONS.md.

## Big idea and visual world

**Every side of growing up belongs in the same picture.** A young person is more than one need. Visitors can see six areas together, focus a program, and understand who it serves and how to participate.

The opening is one explorable canvas, not a sequence of mission/program/impact/history bands. Authentic photographs form a dimensional assembly. A persistent header and a full site index provide orientation. Internal pages pair an exhibit with a readable document; the visual side stays present while desktop readers explore the content.

Typography: locally hosted **Unbounded Variable** for broad geometric display, **Public Sans Variable** for clear text. SIL licenses included. No condensed or italic-serif formula.

Palette: ultramarine `#2341df`, cool silver `#edf0ed`, near-black `#1d2224`, signal red `#b72d23`/deep red field, restrained mint for the evidence view. Color distinguishes contexts rather than alternating homepage bands.

Imagery is genuine first-party material, arranged as display planes. No generated people, invented participants or fictional results. Native asset limitations guide display size; the small archive image remains modest.

## Spatial and motion work

- CSS perspective, rotateX/rotateY, transform origins, layered planes and shadows form the program assembly. No WebGL, scene download or animation render loop.
- Signature: choosing a program separates its photograph from the assembly while showing audience, format and a direct detail link. The overview restores all six areas.
- Responsive interpretation: compact photographic fan and two-column named controls on mobile; program information sits above controls. Ordinary scrolling remains available on short screens.
- Founder portraits use a related focus interaction; history uses native dated chapter disclosures; resources use immediate text search.
- React/Next ViewTransition keeps the selected photograph continuous into its program page. Browser inspection rejected the initial double-image crossfade; the final transition shows one image cropped within the moving frame.
- Utility motion is short and controlled. Compositional motion gathers/refocuses. No autoplay, mouse-follow camera, scroll hijacking, counter animation, sound or ornamental parallax.
- Reduced motion removes spatial transitions while preserving every state. Missing View Transition support falls back to normal navigation. Core content is server rendered; no-JS program/site links and disclosures work.

## Information architecture and rebuilt pages

18 content routes: Home; Programs; six details (Emerging Leaders, Brighter Futures, Fitness & Active Play, Nutrition, Drug-Use Prevention, Tobacco-Free Communities); About; People & Boards; History & Recognition; Impact & Evidence; Get Involved; Donate; Kids On Track Golf; Contact; Resources; Privacy. Also custom 404, icon and robots.

Tobacco detail retains prevention, youth-access and policy strands with original source links. Leadership includes both founders, 10 directors, 4 honorary members and 4 advisers. History/recognition has dated chapters and the full awards archive. Giving/volunteering/event actions lead to official services. No fake forms, accounts, applications, processing or success messages.

Historical context is explicit: 2019 service contacts are duplicated, not unique current people; school and policy totals remain dated. Undated reach/spending ratios were not promoted. The 1998/1999 award discrepancy and differing tobacco totals remain documented. Board affiliations are the published listing, not independently verified current employment.

## Browser review and revisions

Four reviews covered architecture, visual experience, whole-site coherence and presentation. Changes from actual screenshots included:

- Loosened overly tight display spacing and separated mobile image/text zones.
- Moved program context near the mobile selection experience.
- Replaced a rejected oversized founding-year treatment with a photographic archive.
- Replaced the initial founder diptych/grid with portrait selection and a governance table.
- Corrected small red labels and faint captions to pass contrast checks.
- Removed duplicate archive imagery and reduced decorative geometry near summaries.
- Put phone/email directly into Contact's opening exhibit.
- Reworked shared-image transitions to remove ghosting from changing crops.

The similarity audit compared actual screenshots of both prior builds. The new canvas/index architecture, wide type, photographic assembly, focus interaction and paired reading system are clearly distinct. Shared photographs/facts are intentional. No claim is made to have inspected unrelated projects unavailable in this repository.

## Validation evidence

- Clean `npm ci`: passed. Restored missing local Next declaration files encountered before the clean install.
- ESLint, TypeScript, production build and `git diff --check`: passed.
- All 18 content routes statically generated; custom 404/robots/icon generated too.
- Main production suite: **54 route/viewport checks** (1440, 1024, 390), **32 interaction checks**, **18 internal destinations**, zero detected WCAG A/AA violations, runtime errors, image failures or horizontal overflow.
- Actual interaction coverage: six focuses/reset, audience filters, resource search/empty state, founder selection, honorary/advisory disclosures, history chapters, modal keyboard trap/Escape/focus restoration, no-JS links/detail/disclosures and reduced motion.
- Short mobile: 390×568 and 320×568.
- Shared-image navigation: running animation and settled states inspected at 1440/1024/390; zero runtime errors; no running animation in reduced motion.
- Five resilience checks passed: touch selection/navigation, keyboard selection/focus with images unavailable, navigation without images/View Transitions.
- External: 30 first-party/form URLs returned HTTP 200; all nine forms matched fresh source links. Map destination separately returned HTTP 200. No forms were submitted.
- Final focused contact/resource/history polish checks: **9 passed**, with no overflow or detected accessibility violations; recorded in `qa/reconstruction/final-polish.json`.

## Performance and dependency health

Measured locally against the production server in fresh Chromium contexts, without throttling. Latest measured resource transfer: approximately **339 KB desktop / 311 KB mobile**; scripts approximately **157 KB / 151 KB**. Observed CLS approximately 0.0015 desktop / 0.00008 mobile. These are local observations, not field Core Web Vitals or a Lighthouse score. Original photographs total 2.1 MB on disk; responsive image derivatives are requested as needed.

Production dependency audit: **0 vulnerabilities**. Full audit: **5 high-severity development-chain findings** associated with the braces stack-exhaustion advisory through Next's ESLint plugin. npm's proposed fix downgrades eslint-config-next to an incompatible major version; no forced downgrade applied. This is recorded, not presented as a clean full audit.

## Known limitations and launch questions

- Browser verification used isolated Chromium with emulated viewport/touch states, not physical devices or a Safari/Firefox certification. Unsupported transition behavior was explicitly tested.
- Automated accessibility checks plus keyboard/reduced-motion/no-JS review are not a formal conformance certification or exhaustive screen-reader audit.
- Confirm photography/participant permissions, final branding and current board affiliations with the organization before public launch. Public availability is not unrestricted reuse permission.
- Historical source conflicts and missing current outcome/reporting periods cannot be resolved by design; contact the client for current reporting.
- External forms and event capacity remain controlled by America On Track. Event content needs maintenance after October 26, 2026.
- No CMS/backend was requested or added. This remains an intentionally noindex local proposal.

All research deliverables are in `research/`; browser evidence, audits, performance and interaction reports are in `qa/reconstruction/`.

## Content migration and release — October 8, 2026 (Pacific)

User authorized replacing every old-site informational link, committing/pushing the complete reconstruction and publishing to the existing Vercel project.

Freshly retrieved all 21 original WordPress pages on October 9 UTC; only the golf countdown content differed from the prior capture. Added eight detail routes (two biographies, awards, results, three community-health articles, SMS) and transferred the complete privacy policy to `/privacy`. All 26 substantive routes use the same visual world. Added article contents navigation, historical results including recovered counter values, contextual related links and searchable library entries. Removed old-site outbound dependencies and redundant links to the same page. Source material is preserved in research rather than sent to visitors as “read the original” links.

Twenty old page paths permanently redirect to replacements; `/donate` already retains its URL. The original golf PDF path also redirects. Locally preserved the original 388 KB schedule PDF and 20 sponsor graphics (112 KB combined after optimization). Reviewed a contact sheet to verify sponsor names and kept the original 2025 acknowledgment label. Wufoo forms and Google Maps remain external services. SMS consent/preferences use a real executive-support contact pathway; no fake form was introduced.

Validation completed before release:
- ESLint, TypeScript and production build pass; all pages statically generated.
- Production dependency audit: zero vulnerabilities.
- 54 baseline route/viewport checks and 32 interaction checks pass.
- 33 additional migration route/viewport checks, 20 permanent page redirects, 27 internal links and four article/search/no-JS/short-mobile checks pass.
- Zero axe WCAG A/AA violations, horizontal overflow, missing headings, broken article anchors, old-site informational links or JavaScript page errors in the migration checks.
- Visually reviewed desktop awards, mobile biography and sponsor composition. Tests cover 1440, 1024, 390 and short mobile states; baseline also covers 320 pixels and reduced motion.
- No new client-side visual library or runtime content fetch introduced. Article data remains in statically rendered server components.

Release target verified: GitHub `hmkflight/America_On_Track`, `main`; Vercel `america-on-track`, project `prj_o0qnporonsODguksjbPS3lX6L7P7`, team `hudsonmyung-1714s-projects`. Existing Git integration deploys main to production at `america-on-track.vercel.app`. No custom-domain or DNS changes; noindex remains appropriate until client-domain cutover. Publication status is reported in the handoff after the exact deployment is verified.
