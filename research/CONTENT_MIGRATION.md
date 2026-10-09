# Content migration — October 8, 2026 (Pacific)

## Purpose and source

The replacement website must continue to work after the original WordPress site is retired. Re-fetched all 21 published pages from the first-party WordPress REST API on October 9 UTC. Raw HTML and extracted text are preserved in `research/raw/2026-10-09/`. No production page fetches from the original website.

## Destinations

- Founder biographies → `/resources/terry-thompson`, `/resources/claire-braeburn`.
- Full awards and grant archive → `/resources/awards`.
- Historical results, counter values, evaluation context and participant accounts → `/resources/results`.
- Three distinct tobacco topics → corresponding `/resources/` articles (overview, youth access, community policy).
- Existing privacy-policy wording → `/privacy`; SMS disclosure and real contact pathway → `/privacy/sms`.
- Existing program, organization, board, volunteer, giving and event routes retain their respective substantive content. Added the nine Emerging Leaders components and historical fitness context.
- Resource directory and contextual links now point to these internal destinations. Removed redundant “full information” links that would otherwise link a page to itself.
- All 20 renamed WordPress page paths have permanent redirects, with `/donate` retained at its existing path. Original golf PDF path also redirects to its locally preserved file.
- Golf schedule/map PDF and all 20 sponsor logos are served locally. Sponsor attribution follows the original page's **2025** heading even where uploaded logo filenames contain 2026.

## Editorial decisions

Readability is preserved through page summaries, in-page contents navigation, ordinary headings, semantic lists and contextual next steps. Articles are statically rendered and accessible without JavaScript. No original WordPress HTML, scripts or CSS enter the production application.

2019 activity totals remain dated; 259,452 is explicitly duplicated service contacts. Counter numbers were recovered from `data-end` attributes, not inferred from text extraction. Outcomes lacking measurement periods/methodology are labeled historical reported outcomes. The 79-property/5,294-home results snapshot and 95-property/6,018-home policy snapshot remain distinct and must not be added. The President’s Service Award date discrepancy (1998 vs. 1999) remains disclosed. Participant stories are respectfully condensed, with no claim about participants' circumstances today. General tobacco economics and epidemiology are not recast as current facts.

Privacy wording is preserved, not replaced with a newly invented legal policy. The old WordPress SMS form has no available backend in this application; the new SMS page provides the disclosure and executive-support email/phone to arrange consent or preferences. It does not pretend to submit an opt-in. Wufoo donation, registration, newsletter and participation forms remain genuine external services independent of the retired site.

## Deployment target

Authorized by the user: commit and push all current website updates to `hmkflight/America_On_Track`, branch `main`, and deploy the existing Vercel `america-on-track` project, team `hudsonmyung-1714s-projects`. No custom-domain or DNS changes. Search indexing remains disabled for the redesign's Vercel URL; the client-domain launch is a separate cutover.
