# America On Track — Total Creative Rebuild

Status: new implementation complete; local-only production preview. No public deployment, commit, or push.

## Timing and preview

- Work began approximately October 7, 2026, 07:22 UTC (12:22 AM Pacific).
- Completion time and final verification totals are recorded in the closeout below.
- Continuous work session; timing includes research, implementation, tool execution, browser review, and short permission waits, rather than claiming every minute was manual editing.
- Local production URL: **http://127.0.0.1:3017**.

## Research and factual continuity

Freshly retrieved all 21 published first-party pages through the public WordPress API on October 7. Compared source content to earlier snapshots and reread programs, audience definitions, founders, governance, history, results, awards, volunteering, giving, public-health work, contact details, and golf information. Twenty content objects were unchanged; the golf page retained its October 26, 2026 event details while generated countdown content changed.

The current 2026 golf page and dated schedule remain the evidence for The Huntington Club venue and 9 AM / 11 AM / 4:30 PM schedule. All nine linked official forms were matched to the fresh source capture. All 30 checked organization/form/PDF URLs returned HTTP 200.

Preserved previous raw evidence, asset provenance, content audit, factual conflicts, accurate program descriptions, names and affiliations as published, and all 13 authentic images. No invented people, results, programs, testimonials, or event sponsors. The 2019 figures remain explicitly historical and distinguish repeated service contacts from unique people. Undated annual reach and expense-ratio figures are not promoted as current facts. The 1998/1999 service-award discrepancy remains visible.

Evidence: `research/FRESH_RESEARCH.md`, `research/SOURCES.md`, `research/FACTS.md`, `research/ASSETS.md`, and `research/raw/pages-2026-10-07.json`.

## What was removed

Deleted the old application and component contents before creating the new route implementation. Removed the previous header, UI helpers, connection map, and three-scale explorer. Replaced every page composition, root layout, global CSS, footer, favicon, and navigation. Removed Barlow Condensed/Manrope font binaries and production licenses and the unused agent-browser dependency. Replaced the QA suite and obsolete link-check utility. The old asset-download utility and build report are archived as provenance; old browser images are comparison evidence under `qa/previous/`.

No retired layout, stylesheet, component, network explorer, alternative route, or creative headline is imported into the running application. The reusable factual data was kept in `src/lib/content.ts`, with the unused old short headlines removed and program headings rewritten. Next.js configuration and ordinary tooling were retained because they do not impose a visual language.

## Creative divergence

Three internally developed directions:

1. **Signal / Response** — crimson/black civic broadcasting, waveform transitions, program tuning. Rejected: it emphasizes speaking at people rather than the patient work of mentoring.
2. **The Living Commons** — procedural community garden, branching infrastructure, exploratory map. Rejected: too close to the prior connection-system metaphor, with unnecessary navigation complexity.
3. **Room to Become** — dimensional apertures, spaces opening around real people, an expanding program gallery. Selected: it makes the organization's combination of personal support and healthier environments tangible without inventing data.

Full decision record: `research/CREATIVE_DIVERGENCE.md`.

**Big Idea:** People will remember America On Track because its website makes room for the potential already inside people—opening spaces for mentoring, leadership, learning, and healthier living.

Modern-web research covered Dia's layered art/program architecture, Linear's controlled system presentation, Cooper Hewitt's participatory collection model, and dimensional experiences in Awwwards' 3D gallery. Techniques informed the solution space; no site's design or code was copied. A failed Pentagram fetch was not counted as research.

## New visual language

- Architecture rather than editorial stripes: rounded openings, dimensional frames, an environmental perspective floor, and photographic spaces.
- **Typography:** locally served DM Sans Variable and Instrument Serif italic. Wide, restrained sans-serif proportions pair with expressive human-scale italics. Licenses are included.
- **Palette:** aubergine `#352044`, lilac `#ddccee`, lavender `#cbb0e6`, rose `#f0bfd0`, near-white `#f6f2f8`, and ink `#302039`. Dark event/impact fields provide deliberate changes of pace.
- **Imagery:** authentic program, camp, founder, award, and event materials. Masks and crops change the framing; people and factual context are not altered. No generated or stock participants.
- Proposed aperture wordmark and SVG favicon are original design elements. The architecture is metaphorical, not a claim that the organization owns these physical spaces.

## Advanced visual system and motion

The hero is a CSS 3D photographic environment. “Open the space” parts the framing layers and brings learning and leadership photographs forward from behind the mentoring scene. Closing reunites the composition. The button communicates expanded state; concealed links are inert. A conventional program CTA is always present.

Perspective, `translateZ`, staggered rotations, shadows, layered masks, and gentle pointer-responsive rotation create depth. There is no WebGL requirement, animation library, continuous render loop, scroll hijacking, or randomly rotating object. Pointer movement performs bounded style updates only inside the scene. The opened mobile composition deliberately stacks the central scene above the smaller side spaces so their labels stay readable.

The signature program gallery makes six areas of work into expandable rooms. Selecting a room reallocates width on desktop and opens a vertical panel on mobile. Each exposes the program name, format, audience, image, and detail link. Audience filters give a direct alternative route into the information. Interaction is explicit click/tap, with native button keyboard behavior and stable focus.

Motion uses opening, parting, unfolding, and settling. Archive folios use optional CSS scroll-driven perspective transforms. Text is never withheld behind fade-in effects. Reduced motion disables transforms/animation transitions that depend on movement while retaining all content, states, and destinations. Unsupported scroll timelines simply show static folios.

## Information architecture and pages

Four main navigation paths: Programs, Our story, Impact, Get involved. Give remains prominent. The expanded menu and footer expose deeper destinations without a long top navigation. Summaries lead to proof, optional details, and real next actions.

18 rebuilt pages:

- Home `/`
- Program index `/programs`
- Emerging Leaders `/programs/emerging-leaders`
- Brighter Futures `/programs/brighter-futures`
- Fitness `/programs/fitness`
- Nutrition `/programs/nutrition`
- Drug prevention `/programs/drug-use-prevention`
- Tobacco-free communities `/programs/tobacco-free-communities`
- About `/about`
- Leadership and all boards `/about/leadership`
- History and awards `/about/history`
- Impact `/impact`
- Get involved `/get-involved`
- Donate `/donate`
- Kids On Track Golf `/events/golf`
- Contact `/contact`
- Resources `/resources`
- Privacy and site information `/privacy`

Plus custom 404, icon and robots routes. Program details answer who, what, how, and next; native disclosures preserve deeper information. Tobacco education, youth access, and policy work remain distinct within one clear program page. Leadership preserves all 10 Directors, four Honorary members and four Advisory members. History uses archive folios and recognition context rather than a dot-line timeline.

## Browser review and revisions

1. **Initial visual system:** inspected desktop/mobile full-page composition. Confirmed substantial distance from the retired layout and type system. Judged the first depth treatment too restrained.
2. **Advanced experience:** removed the initial three-state hero selector; prototyped and inspected the parting-frame photographic environment. Revised mobile depth to prevent side labels being obscured.
3. **Whole-site coherence:** inspected internal pages at the required sizes: program details, archive, leadership, giving, impact, contact, and event. Kept different compositions within the aperture vocabulary. Changed gallery behavior from hover/focus activation to explicit toggles.
4. **Final polish:** corrected muted-text contrast and a decorative floor intercepting clicks. Removed a QA image-attribute mutation that caused test-induced hydration warnings. Strengthened modal keyboard cycling and no-JavaScript navigation/gallery presentation. Visually caught and fixed clipped static-gallery content, then added explicit content-width assertions. Formatted the source and removed unused prototype styles.

Screenshots and machine-readable results are in `qa/rebuild/`. Detailed review record: `research/CREATIVE_REVIEWS.md`.

## Similarity audit

Direct visual comparison with `qa/previous/home-1440.png` confirms a different composition, palette, typographic personality, spatial rhythm, image framing, program navigation, and motion vocabulary. The old condensed headline, left/right hero, folded corner, stamp, numbered rows, and three-scale network do not survive. This implementation cannot be obtained through a recolor of the retired CSS. Authentic photographs intentionally overlap because they are the client's legitimate materials.

**Result:** passes comparison with the retired America On Track build and the requested anti-reference. Other unspecified recent projects were not supplied as comparison references; no claim is made to have inspected them.

## Accessibility and responsive strategy

Semantic server-rendered content, one H1 per page, meaningful image alternatives, visible keyboard focus, skip link, native disclosures, labeled controls, state semantics, normal anchor destinations, and a modal menu with Escape/focus return/cycling. No synthetic form-success states or payment collection.

Desktop uses a wide dimensional scene and horizontally expanding rooms. Tablet reduces scene scale while preserving the spatial experience. Mobile gets stacked typography, a compact depth composition, vertically opening rooms, simplified archive columns, and a scrollable menu. No-JavaScript visitors receive direct navigation and all program links, with the gallery expanded into a static grid. Reduced-motion visitors retain the whole experience.

Main suite: 18 pages × 1440 / 1024 / 390px = **54 passing checks**, zero axe WCAG A/AA violations, zero horizontal overflow, no broken visible images, one H1 each, successful internal links, and no runtime/console errors. A 390×600 short-height menu is checked. Additional expanded-state and focus tests are recorded at closeout. Automated checks are not formal WCAG certification.

## Engineering and performance

- Clean `npm ci --no-audit`: passed.
- ESLint, TypeScript, production build: passed.
- All content routes statically generated.
- Production runtime audit: **zero vulnerabilities**.
- Full audit: **five high-severity entries** in the lint-only `braces → micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next` chain. npm's proposed fix is an incompatible downgrade to Next 14 lint configuration; not applied. These are not shipped application dependencies. Exact audit reports are retained.
- Local Chromium observations: ~368 KB transferred on desktop, ~330 KB on mobile; ~165 KB script transfer. Observed LCP 48 ms / 128 ms and CLS ~0.016 / ~0.007. These unthrottled local measurements are not field results or a Lighthouse score.
- First-party original images total about 2.1 MB on disk; responsive Next Image derivatives are served to visitors. Fonts are bundled locally. No third-party analytics or WebGL engine.

## Known limitations

- Source dates establish publication, not current program capacity, current grant awards, or board members' independently verified outside employment.
- Photographs include historical materials of varying native quality; no current-participant claim is made. Public launch would require client authorization and confirmation of image permissions.
- Official forms were verified as linked and reachable; donations, registrations, and applications were not submitted.
- Browser evidence is Chromium desktop/device emulation, not physical-device Safari/Firefox or an assistive-technology certification audit.
- The five lint-tool audit entries remain. Runtime dependencies are clean.
- This is a local presentation proposal with no CMS/backend; noindex and robots-disallow are intentional. No public deploy or push was performed.

## Final closeout

Completed October 7, 2026, approximately **08:10 UTC (1:10 AM Pacific)**. Approximately **48 minutes** of continuous active work-session time, including tool execution and verification.

The final production regression suite passed **54/54** page-and-width checks with **zero violations, zero overflow, zero runtime/console errors**, and all interaction assertions passing. Six additional axe scans of the opened aperture and modal menu across 1440/1024/390 also passed. Full audience-filter checks, all six program openings, 22-step modal keyboard cycling, and desktop/mobile no-JavaScript gallery checks passed. Final static-gallery screenshots were visually inspected; settled program panels were captured and measured with no internal content clipping. The final build and lint/type checks passed, and `git diff --check` is clean.

The website remains running as a **production server bound to 127.0.0.1:3017**. No deployment or push occurred.
