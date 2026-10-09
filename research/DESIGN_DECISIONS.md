# Design decisions — reconstruction

- **Architecture:** one home exhibition with an explicit program index; no mission/program/impact/history bands. Dedicated routes carry depth. Internal reading spreads retain a visual panel and navigation frame.
- **World:** photographic assembly against saturated ultramarine, cool silver reading surfaces, black text and signal-red punctuation. Natural photographs keep people more prominent than decorative geometry.
- **Typography:** Unbounded geometric wide display + Public Sans text, locally hosted. No condensed font, italic serif or previous fonts.
- **Interaction:** overview → selected photographic plane; six named controls and ordinary links. No autoplay. On mobile, same selected plane plus compact fan and explicit controls.
- **Motion:** gathering, separating, refocusing; transform-only, user-initiated. No scroll hijack, ambient loop, counters or mouse-follow camera.
- **History:** dated archive reader; **Leadership:** founder portraits and semantic governance rosters; **Impact:** dated evidence ledger.
- **Progressive enhancement:** all routes/content server-rendered; no-JS index exposes direct program links; CSS 3D is decorative, never the only access path.
- **Recoverability:** previous production is commit 056ed04, earlier version 371a131. Preserve source photographs, provenance, factual data, configuration and user-created untracked scripts/check-links.mjs. Retire all prior visual components and styles.

## Decisions after browser review
- Keep program images continuous across route navigation using React/Next ViewTransition. Default two-snapshot crossfade rejected for mismatched crops; final single-image crop morph inspected at three widths. Unsupported browsers use ordinary navigation. Reduced motion completes immediately.
- Contact phone/email are functional links within the opening exhibit, avoiding a decorative first screen before the useful information.
- History photograph replaces the rejected large founding-year experiment; founders become a portrait selection, directors a semantic governance table.
- Final type spacing and contrast were changed based on screenshots and axe measurements. Abstract geometry scaled down to keep summaries clear.
