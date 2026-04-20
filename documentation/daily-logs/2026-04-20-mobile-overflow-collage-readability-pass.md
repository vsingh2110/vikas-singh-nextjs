# Daily Work Log - 2026-04-20

## Objective
Resolve residual mobile x-scroll and collage readability issues on the bilingual tree article, and harden the blog rendering pipeline for MDX-driven collage layout behavior.

## Active Scope
- Trace unknown horizontal overflow on mobile and small devices.
- Fix collage stacking behavior on mobile.
- Add additional section-relevant visuals in EN and HI tree articles.
- Run a focused tuning pass for 414px and 375px screens.
- Validate with diagnostics and production build.

## Work Completed Today

### 1) Context and Root-Cause Tracing
- Reviewed project documentation and recent handovers related to blog image behavior, collage patterns, and mobile responsiveness.
- Inspected blog post renderer, global blog CSS, blur background selector logic, and EN/HI tree MDX content.
- Confirmed two main causes:
  - Tailwind scan scope did not include `content` MDX files, so utility classes from MDX were not guaranteed in build output.
  - Broad `.prose figure` selectors were also targeting collage items, forcing unintended full-height/single-image treatment.

### 2) Mobile Overflow and Layout Hardening
- Added `overflow-x: hidden` on `html` and `body`.
- Added safer word wrapping for blog text and links to reduce long-URL overflow risk.
- Hardened code block overflow handling.
- Fixed breadcrumb shrink behavior on narrow widths (`min-w-0`, `flex-1` for post title segment).
- Enabled wrapping for top share icon row on smaller screens.

### 3) Collage Behavior Stabilization
- Introduced dedicated `.blog-collage` and `.blog-collage-item` CSS system.
- Excluded collage items from single-center-image blur/height selectors.
- Updated blur script selector to skip collage items.
- Preserved compact responsive collage behavior:
  - mobile: 2 columns
  - `sm`: 3 columns
  - `lg+`: 4 columns

### 4) EN/HI Article Visual Improvements
- Added additional in-section relevant visuals in both EN and HI tree posts:
  - India conflict map context
  - heat corridor vs shaded avenue context
  - Miyawaki context
- Replaced utility-heavy collage wrapper classes with stable `blog-collage`/`blog-collage-item` classes in both languages.

### 5) Focused Mobile Readability Pass (375px and 414px)
- Applied dedicated caption typography and spacing adjustments for `max-width: 414px` and `max-width: 375px`.
- Slightly improved dark-mode caption contrast for collage captions.

## Key Files Updated (Session)
- `app/globals.css`
- `tailwind.config.ts`
- `app/components/BlurBackgroundScript.tsx`
- `app/blog/[lang]/[slug]/page.tsx`
- `app/components/TopShareButtons.tsx`
- `content/blog/en/save-old-dying-trees-in-urban-concrete-cities.mdx`
- `content/blog/hi/urban-concrete-shehron-me-purane-ped-kaise-bachayen.mdx`

## Verification
- Diagnostics on edited files: clean.
- Production build: successful.
- Latest verified build result: `EXIT:0`.

## Final Status
- Mobile x-scroll issue has been mitigated in the blog post flow.
- Collage now remains a compact grid on mobile instead of vertical full-width stacking.
- EN and HI tree articles include additional relevant visuals and improved small-screen caption readability.
- Changes are build-verified and ready for device-level QA.
