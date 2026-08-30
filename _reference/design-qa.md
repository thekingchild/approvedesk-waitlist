**Comparison target**

- Source visual truth: `public/source-desktop.png`, captured from `https://ovo-waiting.webflow.io/waiting-list-02`.
- Implementation: `public/implementation-desktop.png`, captured from `http://localhost:4173/`.
- Viewport and normalization: both desktop captures are 1872 CSS px wide in the same external browser session; source is 1872 × 877 px and implementation is 1872 × 884 px at 1× density. The difference in height is browser chrome/available viewport, so the comparison uses the shared above-the-fold content region.
- State: initial waiting-list state, before form submission.
- Full-view evidence: the two captures were loaded together in `public/qa-comparison.html` and reviewed in the browser. A separate local 390 × 844 capture checked the mobile hero and footer layout.
- Focused comparison: hero title, right-hand form/social-proof group, backdrop image, and footer grid were inspected; those regions contain the design-critical typography, form affordance, and image treatment.

**Findings**

- No actionable P0/P1/P2 differences.
- Intentional adaptation: the implementation uses ApproveDesk-specific copy, a small ApproveDesk mark, updated social-proof text, and product footer labels. The overall source composition is retained: black full-height hero, supplied purple artwork, oversized white heading, rounded email capture, overlapping avatars, and compact footer.
- [P3] The source uses a custom display face (Tasa Orbiter); the implementation uses Inter because the source font asset was not available in the captured asset inventory. The weight, tracking, and responsive scale have been tuned to preserve the visual hierarchy.

**Required fidelity surfaces**

- Fonts and typography: white heavy display type, compact body copy, and small footer type match the source hierarchy. Inter is the documented open font fallback.
- Spacing and layout rhythm: full-height hero, generous desktop gutters, bottom-aligned action group, 54px pill field, and two-column mobile footer were verified.
- Colors and visual tokens: black base, white primary text, muted-white supporting text, translucent field border, and the copied purple artwork retain the reference palette.
- Image quality and asset fidelity: the reference’s three avatar images and purple SVG artwork are copied locally and rendered as native image assets; no hotlinks are used.
- Copy and content: all product-facing wording is original to ApproveDesk; no reference placeholder copy remains.

**Interactions checked**

- Required-email validation is provided by the browser.
- Pressing Enter in a filled local form replaces the form with the visible confirmation: “You’re on the list — we’ll be in touch soon.”
- Footer links remain non-navigating anchors because no destination routes were supplied.

**Implementation checklist**

- [x] Capture and locally copy visible reference assets.
- [x] Build responsive desktop and mobile waiting-list layout.
- [x] Verify local form confirmation state.
- [x] Compare browser-rendered source and implementation.

**Follow-up polish**

- Replace the Inter fallback with an approved ApproveDesk brand display font if one becomes available.

final result: passed
