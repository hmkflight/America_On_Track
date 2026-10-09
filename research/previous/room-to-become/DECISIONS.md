# Decisions and factual conflicts

## Creative idea
A brighter future is a shared achievement. People should remember how a connection with one young person reaches a family and a whole community. This connects AOT's three-part mission to the interface itself.

- Condensed, assertive Barlow typography gives the organization an energetic civic/editorial voice. Manrope supports practical reading. Local font files avoid external calls.
- Midnight navy and sun-yellow preserve recognizable legacy brand equity; warm paper, muted green and burnt orange create hierarchy and a contemporary tone.
- The proposed three-rising-bars wordmark represents young people/families/communities. It is a redesign concept, not a claim to be the official organizational logo.
- Signature explorer uses three audience scales, explicit program links and a growing network illustration; dots are not data. No literal roads or rails.
- Photography stays within reasonable source dimensions, uses actual first-party material, and does not invent new portraits, testimonials, or participants.

## Conflicts and uncertainty
1. Our Story claims 44,000 annual individuals and 91 cents per dollar to programs, but page modified in 2024 gives no reporting period. Not used as current headline figures. Original homepage counters are not treated as current-year data.
2. Results page gives 79 housing complexes / 5,294 units and two trade schools. Dedicated policy page has 95 / 6,018 and five trade schools. Prefer the dedicated page for scope, but no reporting period; not promoted as current totals.
3. Awards page and White House photograph say November 1998 for President's Service Award; Emerging Leaders says a differently titled presidential award in 1999. Recognition retained with explicit source discrepancy in History. No invented reconciliation.
4. Golf page updated March 2026 has October 26, 2026 and a 2026 schedule PDF, but image metadata says 2025 and sponsor heading is 2025. Use dated 2026 PDF for date/venue/schedule; don't relabel sponsor list as 2026.
5. Board page last modified May 2025. Preserve its full roster, label it "as published" with review date. Corporate affiliations not independently asserted as current employment.
6. Program pages are publicly maintained but mostly last modified 2023–24. Describe published services and ask team for present availability, eligibility and schedules. Do not infer active grant cycles.
7. No undated percentages, current reach claims, scholarship dollar totals, or unsupported "only agency" statements.
8. Testimonials selected for agency and possibility. Do not amplify sensitive childhood trauma. Short exact excerpt retained without invented attribution.
9. Official linked third-party forms are the real action destinations. This preview collects no personal/payment information.
10. No deployment or commits. Preview is noindex and robots-disallowed, with no canonical assertion for the live client's domain. Metadata has a local preview base. A production launch would require domain metadata, robots and final client content/media approval.

## QA revisions
- Corrected tight typography in hero stamp and clarified folded corner graphic.
- Strengthened program explorer with an animated, labeled connection network, including a dedicated mobile composition.
- Swapped a text-heavy nutrition graphic for the actual first-party nutrition team photograph.
- Waiting for image decoding before full-page captures to avoid mistaking lazy-load timing for missing assets.
- Automated full-site testing found 390px overflow in the long Golf and Privacy headlines. Revised mobile headline sizing, retaining strong typographic scale with content fitting the viewport.
- Reviewed key route compositions at 1440, 1024 and 390px in saved screenshot contact sheets, plus full-page captures and the mobile navigation.
- Official form and source links were checked without submission. Node fetch had connection failures for the original domain while system curl returned HTTP 200; the checker now uses that fallback without disabling certificate validation.
- Updated vulnerable sharp 0.34 to 0.35.5. Runtime audit is clean. Full audit reports a development-only braces stack-exhaustion issue through the Next ESLint plugin; npm's proposed downgrade to Next 14 tooling is inappropriate for this Next 16 project. No patched braces release existed at check time (latest 3.0.3). Retained compatible tooling and documented the limitation.
