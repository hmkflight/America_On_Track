# America On Track — Website Redesign

Status: complete local presentation proposal. Not deployed. No git repository initialized, commits created, or changes pushed.

## Timing

- Start: October 2, 2026, 20:00:13 UTC (1:00 PM Pacific).
- End: October 3, 2026, 21:31 UTC (2:31 PM Pacific).
- Elapsed: approximately 25 hours 31 minutes wall-clock, including approval/session pauses.
- Elapsed is wall-clock session time, including long approval/session pauses; it is not a claim of continuous hands-on development time.

## Preview and implementation

http://127.0.0.1:3000 — production build, bound to the local machine.

Next.js 16.3.8, React 19.3, TypeScript 5.9. Server-rendered and statically generated content with small client boundaries for navigation and program exploration. No backend, accounts, CMS, analytics, payment collection or synthetic form submission. Responsive Next Image optimization, local fonts, page metadata, favicon, 404 and robots settings included. This proposal deliberately blocks indexing and does not claim canonical ownership of americaontrack.org.

## Research actually performed

Inspected all 21 published first-party pages through the public WordPress API, homepage HTML, the sitemap index and page sitemap, linked forms and the 2026 golf schedule PDF. Source snapshots are in `research/raw/`; exact links and source modification dates are in [SOURCES.md](research/SOURCES.md).

Coverage: Home, Our Story, both founders, Board/Honorary/Advisory lists, Emerging Leaders, Brighter Futures, Fitness, Nutrition, Drug-Use Prevention, three tobacco pages, Results, Awards, Volunteer, Donate, Contact, Golf, Privacy and SMS disclosure. Media inspection used a source contact sheet and actual images. No unrelated recursive web crawl.

Important findings: founded 1995; founders Terry Thompson and Claire Braeburn; youth, family and community mission; Emerging Leaders grades 4–12; free five-component Brighter Futures program established 2004; substantial school health and tobacco-policy work; 10 Directors plus four Honorary and four Advisory members on the published roster; Santa Ana contact details; current published golf event October 26, 2026 at The Huntington Club.

## Facts and conflicts

- 5,597 activities and 259,452 duplicated contacts belong to 2019, not 2026. The redesign labels both year and counting method.
- 44,000 annual people and 91 cents per dollar lack a reliable reporting period; neither is used as a current headline.
- Tobacco totals differ between Results and the dedicated policy page; newer dedicated figures are discussed with explicit undated context, not used as current hero statistics.
- President’s Service Award: Awards page and photo indicate November 1998, while Emerging Leaders says 1999. The history route explains the discrepancy.
- Golf page contains residual 2025 image/sponsor labels. The dated 2026 PDF controls event date, venue and schedule; no sponsors are relabeled as 2026.
- Board page was last modified May 2025. Full roster preserved as published, with source context; outside professional affiliations not independently reverified.
- Current public program descriptions are not proof of present enrollment availability. Calls to action connect people with the organization for specifics.

See [FACTS.md](research/FACTS.md) and [DECISIONS.md](research/DECISIONS.md).

## Information architecture and pages built

Four primary navigation paths: **Our work / Our impact / Our story / Get involved**, plus persistent Donate. Resources, contact, leadership, history and event routes remain one step away through relevant sections and the footer.

18 complete content pages:

1. Home `/`
2. Programs `/programs`
3. Emerging Leaders `/programs/emerging-leaders`
4. Brighter Futures `/programs/brighter-futures`
5. Fitness `/programs/fitness`
6. Nutrition `/programs/nutrition`
7. Drug-Use Prevention `/programs/drug-use-prevention`
8. Tobacco-Free Communities `/programs/tobacco-free-communities`
9. About `/about`
10. Leadership & all three boards `/about/leadership`
11. History & recognition `/about/history`
12. Impact `/impact`
13. Get involved `/get-involved`
14. Donate `/donate`
15. Kids On Track Golf `/events/golf`
16. Contact `/contact`
17. Resources `/resources`
18. Privacy & preview information `/privacy`

Plus custom 404, favicon and robots route.

## Big Idea and creative rationale

**A brighter future is a shared achievement.** People should remember how a connection with one young person reaches a family and a community. The mission’s three scales become the primary interactive story, the proposed three-bar brand mark, and the editorial progression through the site.

Strong, compressed uppercase typography gives the organization an active civic presence. Asymmetric opening composition, real photography, a folded image corner, and a yellow typographic stamp establish a distinctive invitation. Long copy becomes a deliberate rhythm of large statements, numbered program rows, concise explanations, dated ledgers, people lists, and optional depth.

Typography: locally hosted Barlow Condensed 800 and Manrope 400/700, with SIL license files retained. Palette: midnight navy #152e3d, warm paper #f5f3eb, yellow #f5d548, burnt orange #c74727, muted green #c8d9c0. Navy/gold retain recognizable source-brand equity. Orange supplies editorial emphasis; green connects health/community material.

## Assets

13 first-party images/artwork used, including program and scholarship photographs, camp group, founders, mentor activity, nutrition team, physical activity cutout, community park, archival award photo and original golf artwork. No invented participants, stock substitutions or AI portraits. Full native dimensions, source URL, purpose and limitations: [ASSETS.md](research/ASSETS.md).

Original CSS/SVG design: proposed wordmark, favicon, connection diagram and directional details. Source photos remain factually unaltered; responsive crops and optimization only. Public permission to reuse images is not established merely by public availability; confirm organization consent before a public launch.

## Signature interaction and motion

The connection explorer changes from **Young people → Families → Communities**. Each choice changes the central proposition (A voice / A circle / A future), explanatory copy, actual relevant program destinations, supporting photograph and expanding network. The network is explicitly illustrative rather than a numerical claim. It gives visitors a functional way to understand and navigate the mission.

Keyboard-operable tablist with arrows, Home and End; normal links remain available. Brief horizontal movement supports content changes, while text stays at full opacity for contrast throughout. Network connections and nodes transition to show widening relationships. Utility link arrows, image hover, menu feedback, and one-time stamp motion support the system. Reduced motion disables all animation and transitions without removing content or controls. No animation package or scroll hijacking.

## Content simplification

- Three overlapping tobacco pages consolidated into one program with distinct education, merchant and policy strands.
- Programs consistently answer what / who / format / what happens / next step without flattening their differences into a card grid.
- Full leadership and all three boards preserved in readable lists; longer bios progressively disclosed.
- Historical results converted to a dated ledger with plain-language counting definitions.
- Recognition curated into a timeline, with direct access to the full original archive.
- Sensitive trauma narratives omitted in favor of respectful summaries and a short exact testimonial excerpt.
- Separate volunteer pathways replace duplicated generic forms.
- Resource directory surfaces existing official forms, documents and original archives.
- No donation amount claims, fake payment widgets, fabricated testimonials or invented impact figures.

## Responsive strategy and meaningful revisions

Desktop: large asymmetric hero, spacious editorial columns, complete photo-plus-network explorer.
Tablet: tighter typography and spacing; network integrates with the image to retain the narrative at 1024px.
Mobile: deliberately reordered single-column hero, full-screen scrolling navigation, photo below the program explanation, network as its own horizontal block, stacked data and leadership lists. Tested at 390×844 and menu at 390×600.

Revision passes:
1. Initial rendered desktop/mobile review: refined stamp spacing and folded-corner graphic.
2. Strengthened the explorer from simple tabs to a content-linked animated connection network; retained mobile composition.
3. Replaced a dense nutrition text graphic with first-party team photography and corrected its alt text.
4. Full production scan identified long Golf and Privacy headings overflowing at 390px. Adjusted mobile heading scale; final scan has zero overflow.
5. Removed opacity changes during text entrances so transitional text retains full contrast.
6. Ensured screenshots wait for image decoding; early blank areas were lazy-loading capture timing, not accepted final output.

## Accessibility and browser QA

Automated axe-core checks for WCAG 2 A/AA and 2.1 AA across 18 pages × 3 widths (1440, 1024, 390): **54 checks, zero final violations**. No broken images, unexpected status codes, horizontal overflow, missing/duplicate H1s or captured runtime errors. This is evidence of testing, not a claim of formal WCAG certification.

Manual visual inspection: Home, program detail, About, leadership, Get Involved and Donate at all three required widths, full-page composition reviews, Golf mobile fix, mobile menu and signature explorer at all widths. Screenshots in `qa/`.

Interaction checks: explorer content changes; arrow-key navigation; mobile menu open/Escape/focus return and route navigation; family audience filter; program disclosures; reduced motion; scrolling short-height menu; no-JavaScript essential homepage and all six program links; visible skip-link focus. Real semantic headings, meaningful alt text, contact tel/mail links, native disclosures and visible focus are implemented.

Functional link validation: all internal links respond successfully. All **24 checked external organizational/form/PDF destinations returned HTTP 200**, including nine official Wufoo forms. Two Google Maps search URLs are correctly constructed, but excluded from the automated external checker. No donations, applications or messages were submitted.

## Performance and engineering validation

- Clean `npm ci --no-audit`: passed.
- ESLint: passed.
- TypeScript: passed.
- Production build: passed; content statically generated.
- Final production responsive/accessibility/interaction suite: passed.
- Browser console/error inspection: no reported errors.
- Runtime dependency audit: zero vulnerabilities.
- Full development audit: five high-severity entries trace to one unpatched `braces` stack-exhaustion advisory (GHSA-vfj7-8cjw-p6xm) through `micromatch → fast-glob → @next/eslint-plugin-next → eslint-config-next`. Latest braces was 3.0.3 at check time. This is lint-time tooling, not shipped browser/server runtime. Downgrading to incompatible Next 14 lint configuration was rejected. Exact reports are saved in `qa/dependency-audit.json` and `qa/runtime-audit.json`.
- Earlier sharp issue fixed by updating to 0.35.5.
- Local production browser observation: navigation ~192 ms, LCP ~164 ms, ~511 KB transferred over 28 resource requests. These are local, unthrottled observations—not a Lighthouse score or field performance guarantee.

## Known limitations

- Public-site research cannot confirm present program capacity, every board member’s outside employment, current grant status, or financial reporting periods. Uncertainty is preserved rather than invented away.
- Official third-party forms load and are linked accurately; completed submissions/payment processing are intentionally not exercised.
- This is a presentation proposal, not an officially approved replacement; source imagery and proposed branding need client review before public use.
- Five development-tool audit entries remain for one unpatched underlying advisory; runtime audit is clean.
- Browser verification used isolated Chromium, not physical-device Safari/Firefox or a formal assistive-technology certification suite.
- No deployment, domain configuration, CMS or public sitemap is introduced. Local noindex configuration is intentional.

## Handoff files

`research/SOURCES.md`, `FACTS.md`, `CONTENT_AUDIT.md`, `DECISIONS.md`, `ASSETS.md`; source snapshots; `README.md`; `qa/report.json`, `qa/external-links.json`, audit reports and screenshots. Run instructions and content locations are in README.
