# Project Progress Log

This file is the persistent progress record for the Nabin Joshi portfolio and technical blog. It is intentionally kept separate from the product README so that implementation history, decisions, validation, and next steps remain easy to follow throughout the project.

## Instructions for every agent

Before making changes:

1. Read this file and the full [`portfolio_brief.md`](./portfolio_brief.md).
2. Check the current repository state and do not assume that entries below are still accurate.
3. Preserve the brief's constraints: static export only, no backend, no invented personal facts, accessible UI, and no secrets in the repository.
4. Before any UI change, attempt to load the requested `ui-ux-pro-max-skill` from `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`. In this VS Code session the skill is currently unavailable through the installed skill registry, so use the documented design research and constraints in this file as the fallback rather than claiming the skill was loaded.

After making changes:

1. Update this file in the same change as the implementation.
2. Add a dated entry under **Timeline** describing:
   - what changed;
   - why it changed;
   - files or areas affected;
   - validation performed and its result;
   - any remaining risks, placeholders, or follow-up work.
3. Update **Current state**, **Next trajectory**, and **Open decisions / blockers** when the change affects them.
4. Keep entries factual and concise. Do not claim a deployment, browser review, Lighthouse score, domain configuration, or user approval unless it actually happened.
5. Never record API keys, tokens, passwords, or other secrets in this file.

When work is incomplete, clearly mark it as `In progress` or `Blocked` rather than presenting it as finished.

## Project motive

Build a calm, text-forward personal portfolio and technical blog for Nabin Joshi. The primary audience is AI/ML recruiters and hiring engineers who need to understand the person, see proof of work, find a CV, and make contact quickly. The secondary audience is technical peers and campus supervisors who may read project case studies and technical writing in depth.

The intended product is:

- an editorial, recruiter-friendly portfolio rather than a generic template;
- a lasting home for verified project write-ups and technical notes;
- a static site deployable to GitHub Pages;
- dark theme with accessible contrast;
- honest about unfinished content and personal details that still need verification.

## Current state

### Phase

**Phase 3 — Projects and content: in progress.**

The project has a working Next.js static-export skeleton, a reviewed personal “working notebook / field log” homepage, and its first real project case study. It is not ready for public launch because writing, CV, canonical URL, domain, and deployment repository details remain to be supplied and verified.

### Implemented

- Next.js App Router with `output: "export"`.
- Static image configuration and trailing slashes.
- Strict TypeScript setup.
- Tailwind CSS v4 with CSS design tokens.
- Deep green-black dark theme with warm orange accent.
- Responsive header, footer, desktop navigation, and mobile navigation.
- Keyboard-oriented mobile navigation behavior with `aria-expanded`, `aria-controls`, and Escape handling.
- Homepage hero with a static decorative robotics arm SVG.
- Project and blog index pages.
- Static dynamic routes for project and blog slugs using `generateStaticParams` and `dynamicParams = false`.
- About, Now, and not-found pages.
- Typed project and post data, with project cards and case-study routes driven by one clearly marked projects array.
- Velite schemas for future MDX `projects`, `posts`, and `now` collections.
- Static sitemap and robots metadata routes.
- GitHub Pages workflow using `actions/upload-pages-artifact` and `actions/deploy-pages`.
- `public/.nojekyll`.
- README setup, content, Pages, and domain documentation.
- Homepage visual pass with an editorial hero, responsive robotics mark, practice-area strip, tightened typography tokens, and hover treatment for the theme control.
- Homepage redesign around the approved personal field-log direction: personal voice, workbench artifact, annotated note, numbered practice strip, warm orange accent, and deep green-black dark theme.

### Deliberate placeholders

The following must be replaced before launch:

- `TODO_REPLACE_EMAIL`
- `TODO_REPLACE_USERNAME`
- `TODO_REPLACE_LINKEDIN`
- `TODO_REPLACE_CV_URL`
- remaining project contribution and results details that are not verified in the PRISM README;
- placeholder `/now/` update date and content;
- canonical URL in [`src/data/site.ts`](./src/data/site.ts);
- custom domain and `public/CNAME`, only after DNS is configured.

## Validation record

Latest completed checks:

- `npm install` — completed.
- `npm run build` — passed; static output generated in `out/`.
- `npm run typecheck` — passed.
- `npm run lint` — passed with two non-blocking `import/no-anonymous-default-export` warnings in configuration files.
- `out/feed.xml` — generated and present.
- `out/sitemap.xml` — generated and present.
- `out/robots.txt` — generated and present.
- Local browser review — homepage checked at desktop and 390px mobile viewport.
- Mobile navigation — opened successfully and exposed accessible navigation links.
- Render recovery — stale `.next` cache was removed and the restarted dev server returned HTTP 200 for `/`.
- Homepage redesign — checked in the browser at mobile and desktop navigation states; theme toggle remained available and the mobile layout stacked correctly.
- Profile image integration — checked at desktop and 390px mobile widths; image loaded from `/profile.jpeg` with explicit dimensions.
- Portrait overlay removal — removed the annotation card that obscured the supplied profile image.
- Organic portrait treatment — checked the masked image and its responsive workbench bounds in the browser.
- Header mark — replaced the `NJ` wordmark with the requested `ᓚᘏᗢ` cat figure.
- Header mark styling — changed the cat figure to a lighter, thinner treatment.
- Footer identity — replaced the footer name with the cat figure and added the owner-provided tagline and social links.
- Footer external links — configured GitHub, LinkedIn, and email links to open in a new tab with `noopener noreferrer`.
- PRISM project — added the first real project record, supplied image, repository link, README-derived description, and case-study details.
- PRISM routes — browser-checked the homepage, Projects index, and `/projects/prism-prompt-reliability/` at the local development server; image, metadata, case-study sections, and repository link rendered successfully.
- Case-study reuse — separated dynamic route lookup from presentation and added reusable `ProjectCaseStudy` and `ProjectSection` components. The title now spans the case-study canvas, with the image and description in the primary column and an overview aside followed by structured sections.
- Case-study composition — repositioned the reusable intro layout so the description is on the left, the project image is on the right, and technology/repository metadata sits below the description. Mobile order remains image first, then description and metadata.
- RobolineX project — added the second project from the verified private repository README, copied the supplied team image to `public/robolinex-team.png`, and reused the same typed data and case-study component.
- Saveika project — added the third project from the verified public README, copied the supplied hackathon team image to `public/saveika-team.png`, and reused the same typed data and case-study component. Demo credentials and secret configuration names were intentionally excluded.
- Sanjaya project — added the fourth project from the verified README, copied the supplied hackathon team image to `public/sanjaya-team.png`, and reused the same typed data and case-study component. Added an explicit `featuredProjects` projection so the homepage shows only two projects while the Projects page and header remain full-collection entry points.
- Project visibility — clean static build generated all four project routes; browser review confirmed the homepage shows exactly PRISM and RobolineX while `/projects/` shows all four entries.
- Robotic Arm project — added the fifth project from the verified README. Because no image was supplied with this request, the shared project schema now supports an optional image with a reusable visual-pending fallback rather than reusing an unrelated asset.
- Robotic Arm image — replaced the Project 5 visual fallback with the supplied demonstration photo at `public/robotic-arm-demo.png` and added verified alt text to the project record.
- Artemis project — inserted the fifth project from the verified README, copied the supplied team image to `public/artemis-team.png`, and shifted Saveika, Sanjaya, and Robotic Arm to Projects 4, 5, and 6 respectively through the canonical array order. README sample credentials were not copied into the portfolio.
- Skills section — replaced the homepage interest strip with a reusable `SkillsSection` component backed by typed data in `src/data/skills.ts`, emphasizing AI/ML, data and evaluation, computer vision, and practical systems skills. Typecheck, lint, clean static build, and browser review passed; the existing two lint warnings remain non-blocking.
- Skills heading — removed the large “Skills I use to make things.” copy while retaining the reusable categorized toolkit and its accessible section label.
- Hero greeting — replaced the field-note eyebrow with a quiet lowercase `hi!` greeting and a prominent “I’m Nabin Joshi” introduction, preserving the existing description and actions.
- Hero line break — made `I’m` and `Nabin Joshi` explicit separate lines in the heading rather than relying on automatic text wrapping.
- Blog canvas layout — widened the homepage writing section and blog index to use the full site canvas. Removed the unused thumbnail column from blog cards, added a full-width blog index header, and preserved readable text measures inside the expanded layout.
- Source organization — formatted the source tree with the existing Prettier script, removed incidental whitespace from JSX, and centralized repeated project/blog card markup in [`src/components/content-card.tsx`](./src/components/content-card.tsx).
- Robotics Club article — added the second blog post with the supplied first-person account, June 15, 2026 publication date, Robotics Club website link, and supplied team photograph.
- Blog media support — extended the reusable blog post model and renderer with optional hero images, post-specific link section titles, and valid machine-readable publication dates.
- Sanjaya story — added the third blog post about X-Hack 3.0, its team, pitch, NPR 50,000 win, and the confidence gained from the experience.
- Inline blog imagery — added reusable section-level image support and copied the supplied Sanjaya photos to `public/img-1.jpg`, `public/img-2.jpg`, and `public/img-3.jpg`.
- Featured writing — added a `featuredPosts` projection so the homepage shows exactly PRISM and Sanjaya while the Blog index retains all three posts.
- Navigation cleanup — removed the More item from the primary navigation, removed RSS links from visible UI, and changed the homepage “A little from me” link to the Bear Blog site.
- Feature removal — deleted the unused More route and RSS generation path, including the feed script, package script/dependency, sitemap entries, and generated feed artifact.
- Contact page — reshaped About into a contact-focused page with the requested introduction, connection invitation, and GitHub, LinkedIn, email, Kaggle, and Bear Blog links.
- Blog article — replaced the placeholder post with the supplied PRISM narrative, dated September 9, 2026, and added the requested research, app, website, download, and Kaggle links.
- Blog architecture — added typed structured post data in [`src/data/blog.ts`](./src/data/blog.ts) and a reusable [`BlogPost`](./src/components/blog-post.tsx) renderer with semantic lists, tables, notes, metadata, and external-link behavior.
- Blog presentation — added a narrow Medium-style reading column, article typography, responsive overflow-safe tables, and mobile rules while retaining the dark portfolio theme.

Not yet performed:

- keyboard-only review in a browser;
- reduced-motion review in a browser;
- broken-link audit;
- Lighthouse measurement;
- real GitHub Pages deployment;
- DNS, custom domain, and HTTPS verification.

## Next trajectory

### Phase 2 — Home and visual review

1. Replace the temporary type choices with the selected self-hosted `next/font` families from the brief.
2. Review the homepage in a browser at desktop and mobile widths.
3. Tune palette, typography, spacing, borders, and responsive behavior.
4. Decide whether the robotics arm improves the page; remove it if it feels gimmicky.
5. Verify theme persistence, system preference behavior, focus states, contrast, and reduced-motion behavior.

### Phase 3 — Projects and blog

1. Decide whether the structured blog data should later migrate to Velite-generated MDX after more posts justify the added pipeline.
2. Add MDX rendering with GFM, math, KaTeX, heading slugs, autolinks, and Shiki highlighting if that migration is approved.
3. Add reading-time calculation.
4. Add a small copy-code client component.
5. Add more real, verified projects and articles only.
6. Consider Pagefind after the blog has enough content to justify search.
7. Add Giscus only if GitHub Discussions is enabled and comments are wanted.

### Phase 4 — Supporting content

1. Replace Now placeholders with owner-approved facts.
2. Add verified project screenshots, diagrams, contribution details, results, and links.
3. Add the final CV and other profile links.
4. Remove all launch-time placeholders and `TODO_` markers.

### Phase 5 — Deployment and release verification

1. Set the actual repository and canonical GitHub Pages URL.
2. Configure GitHub Pages to use GitHub Actions.
3. Run the workflow and verify the deployed URL.
4. Register and configure the `.np` domain.
5. Add `public/CNAME` only after DNS is working.
6. Verify HTTPS, redirects, sitemap, internal links, and all routes.
7. Report only checks that were actually run.

## Open decisions / blockers

- The owner's actual GitHub username, LinkedIn URL, email, CV URL, and final domain are unknown.
- The GitHub repository name and deployment target are unknown.
- Project names, contributions, results, hackathon details, and robotics club details require owner verification.
- Final font families need to be selected from the brief's serif, sans, and mono options.
- The custom `.np` domain must not be treated as canonical until DNS and HTTPS are confirmed.
- No public deployment has been performed.
- The homepage dark theme is the only supported theme. The original brief requested both themes, but the owner explicitly chose to remove light-theme code.

## Visual research and direction

### Why the first theme missed the goal

The first pass followed the brief's warm paper/editorial language too literally. It was calm and technically clean, but the result read as a generic editorial template rather than a personal webpage. The next pass should make Nabin visible as a person first and a collection of categories second.

### ERA Fellowship observations

The live ERA homepage was inspected on 2026-10-13. Useful principles to adapt, not copy:

- **Strong entry composition:** the first screen uses a large human image on one side and a direct, current message on the other. For this site, that could become a real portrait, desk/robotics photograph, or personal artifact rather than a generic SVG.
- **High-contrast color chapters:** the page alternates white and dark sections with a decisive red accent. We can use a personal accent color and one dark “evidence” chapter rather than keeping every section visually identical.
- **Full-bleed sections:** sections feel like distinct moments instead of a single narrow column repeated down the page. The portfolio can use full-width bands for recognition, selected work, or a short personal statement while keeping reading content narrow.
- **Numbered editorial navigation:** numbered modules and strong section labels create an unfolding argument. This fits the portfolio, but labels should describe Nabin’s story rather than imitate an institution.
- **Motion as atmosphere:** the site uses marquees, vector-field/geometry language, and superposition-style transitions. For this project, motion should be sparse: a slow geometric field or orbit around a robotics/data artifact, with static fallback and reduced-motion support.
- **Typography and proof:** the message is oversized and confident, but supporting copy remains readable and concrete. The portfolio should pair one expressive display face with a personal sans or mono detail system.
- **Risk to avoid:** ERA is an institutional fellowship site with campaign-like calls to action, event banners, and high-impact promotional blocks. Nabin’s site should not inherit that corporate voice, dense announcements, or repeated red buttons.

### Proposed personal direction: “working notebook / field log”

Recommended next homepage direction:

- warm off-white or lightly tinted gray base, with a deep ink mode;
- one distinctive personal accent, selected after preview rather than defaulting to generic blue;
- an actual portrait or personal robotics/work image when supplied;
- asymmetrical but quiet composition: identity and statement on the left, a personal artifact or annotated image on the right;
- a small “currently” or “working on” line that feels like a real person’s status, not a marketing tagline;
- project proof presented as dated/numbered field notes with contribution and outcome, not generic cards;
- one restrained geometric animation only if it supports the robotics/data identity;
- no gradients, glow, glass, floating SaaS cards, stock AI imagery, or corporate logo wall;
- theme toggle retained as a compact, accessible control.

### Skill availability note

The requested `ui-ux-pro-max-skill` repository was located and reviewed, but the skill could not be loaded because it is not present in this session’s available skill registry. Future agents must attempt the load before UI work, then use this section and the original brief as the source of truth if the load remains unavailable.

## Timeline

### 2026-10-13 — Phase 1 skeleton created

**Change:** Read [`portfolio_brief.md`](./portfolio_brief.md) and created the initial static portfolio/blog structure.

**Trajectory:** Chose Next.js App Router, TypeScript, Tailwind CSS, `next-themes`, Velite foundations, MDX content directories, RSS generation, sitemap/robots metadata, and GitHub Pages Actions as the implementation baseline.

**Key files and areas:**

- project manifest and tooling: [`package.json`](./package.json), [`next.config.mjs`](./next.config.mjs), [`tsconfig.json`](./tsconfig.json), [`eslint.config.mjs`](./eslint.config.mjs);
- global design and shell: [`src/app/globals.css`](./src/app/globals.css), [`src/app/layout.tsx`](./src/app/layout.tsx), shared components in [`src/components/`](./src/components/);
- routes under [`src/app/`](./src/app/);
- site data and temporary typed content in [`src/data/site.ts`](./src/data/site.ts) and [`src/lib/content.ts`](./src/lib/content.ts);
- future MDX content under [`content/`](./content/);
- Velite foundation in [`velite.config.ts`](./velite.config.ts);
- RSS script in [`scripts/generate-feed.ts`](./scripts/generate-feed.ts);
- Pages deployment in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml);
- setup and deployment notes in [`README.md`](./README.md).

**Validation:** `npm install`, `npm run build`, and `npm run typecheck` completed successfully. `npm run lint` completed with two non-blocking configuration warnings. Static artifacts were confirmed in `out/`.

**Remaining:** owner content, browser review, real MDX rendering, final fonts, Pagefind, deployment, DNS, and launch verification.

### 2026-10-13 — Homepage visual pass started

**Change:** Refined the homepage-only composition and visual system for local review.

**Visual direction:** Reduced the oversized hero treatment, introduced a more balanced two-column desktop hero, moved the robotics mark into a deliberate visual block with a caption, added a restrained practice-area strip, improved mobile stacking, and tokenized display/body/mono font stacks. The theme toggle remains visible on desktop and mobile and now has a stronger hover state.

**Accessibility:** Marked the robotics SVG as decorative with `aria-hidden="true"`. Retained semantic headings, visible focus styles, an accessible theme button, and the existing keyboard-aware mobile menu.

**Validation:** Started the local Next.js dev server and checked the homepage in a browser at desktop and 390px mobile sizes. Switched the theme from dark to light and back, and opened the mobile menu successfully. `npm run build` and `npm run typecheck` pass after the visual change; `npm run lint` passes with the two existing non-blocking configuration warnings.

**Remaining:** Decide whether the robotics mark feels personal or gimmicky, perform a more detailed keyboard/contrast/reduced-motion review, and continue only after the homepage direction is approved.

### 2026-10-13 — Recovered homepage render error

**Issue:** The browser reported `Cannot find module './195.js'`, accompanied by missing `.next/routes-manifest.json` and `Unexpected end of JSON input`.

**Cause:** The Next.js development cache had become inconsistent, likely because a production build and the development server had shared the generated `.next` directory during the visual review.

**Fix:** Stopped the development server, deleted only the generated `.next` directory, and restarted `npm run dev`. No application source change was required.

**Validation:** The homepage compiled successfully, returned HTTP 200, and rendered the expected `Building systems I can explain.` heading in the browser.

**Process note:** Do not run `npm run build` while `npm run dev` is using the same workspace. Stop the dev server first, or restart it after the production build so the generated cache is clean.

### 2026-10-13 — UI skill and visual research

**Request:** The owner asked for the `ui-ux-pro-max-skill` to be loaded for all future UI changes and asked for ERA Fellowship to be studied as a visual reference.

**Finding:** The skill repository exists at `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`, but it is not available in the session's installed skill registry and therefore could not be loaded through the skill tool. Its documented design-intelligence intent was noted without claiming activation.

**Research:** Inspected the live ERA Fellowship homepage and identified its split human-image/message entry, alternating high-contrast sections, full-bleed chapters, numbered structure, vector-field/geometric atmosphere, and restrained marquee/superposition motion. Recorded what to adapt and what to avoid for a personal portfolio.

**Decision:** Do not modify the homepage yet. The current theme is explicitly not approved. The recommended replacement direction is a personal “working notebook / field log” with human evidence, stronger chapter contrast, personal artifacts, and only sparse geometry-based motion.

### 2026-10-13 — Homepage field-log redesign

**Change:** Replaced the rejected generic editorial hero treatment with the approved personal “working notebook / field log” direction.

**Homepage changes:** Updated [`src/app/page.tsx`](./src/app/page.tsx) with a more personal headline and copy, field-note labels, a workbench artifact, current-focus note, annotated geometric orbit, project/work-note language, and a marginalia label for writing. Updated [`src/app/globals.css`](./src/app/globals.css) with paper/ink tokens, a warm orange accent, deep green-black dark mode, workbench grid and note styling, responsive layout, and a quieter secondary link treatment.

**Accessibility:** Kept the workbench as a labelled descriptive region, retained semantic headings and links, preserved the theme toggle, and kept the mobile navigation behavior unchanged. The geometry is CSS-only and has no required motion.

**Validation:** `npm run typecheck` passed. `npm run lint` passed with the two existing non-blocking configuration warnings. `npm run build` passed and generated the static routes. Browser review confirmed the redesigned homepage at mobile size and confirmed the theme toggle remained usable.

**Remaining:** The workbench is currently an abstract CSS artifact. Replace or supplement it with a real owner-approved photograph, sketch, robotics artifact, or project image when available. The accent color and exact typography still need owner approval.

### 2026-10-13 — Profile image added to homepage

**Change:** Added the supplied [`profile.jpeg`](./profile.jpeg) to the homepage workbench and copied it to [`public/profile.jpeg`](./public/profile.jpeg) for static export.

**Treatment:** Used `next/image` with explicit source dimensions and priority loading. The photo is cropped toward the upper body, desaturated slightly, darkened with a theme-compatible overlay, and placed beneath the existing grid and annotation note. This keeps the personal photograph integrated with the working-notebook visual language instead of presenting it as a separate corporate profile card.

**Validation:** Browser review confirmed the portrait at desktop and 390px mobile widths. `npm run typecheck` passed, `npm run lint` passed with the two existing non-blocking configuration warnings, and `npm run build` passed with the static image included in the output.

**Remaining:** Confirm whether this crop and the “Currently” note feel natural. The source image remains a supplied asset and may be replaced or re-cropped after owner review.

### 2026-10-13 — Added PRISM project

**Change:** Added PRISM: Prompt Reliability Through Semantic Multiplexing as the first real project in [`src/lib/content.ts`](./src/lib/content.ts). The project record includes a slug, title, summary, description, local image, image alt text, stack, status, repository URL, and structured case-study details.

**Content source:** Description and details were derived from the project's README: CPU-only Ollama inference, ARC-Challenge and SciQ frozen samples, four SLMs, five controlled prompt conditions, and measurements for correctness, instruction adherence, consistency, sensitivity, and unreliable response patterns.

**Presentation:** Added the supplied PRISM image to the project index and generated case-study page. Future projects can be added or removed by editing the clearly marked `projects` array in [`src/lib/content.ts`](./src/lib/content.ts); the homepage, index, dynamic routes, and static params consume that same list.

**Remaining:** Verify the exact owner contribution and final research results before public launch. The current status is `active` because the README describes an ongoing research phase.

### 2026-10-13 — Removed portrait-blocking annotation

**Change:** Removed the dark “Currently” note card from the workbench because it obscured the profile image.

**Result:** The supplied portrait is now unobstructed. The subtle grid, image shade, and small bottom caption remain to preserve the notebook/workbench treatment without covering the subject.

### 2026-10-13 — Blended portrait treatment

**Request:** The owner felt the rectangular portrait did not blend with the homepage theme and asked for alternative representations.

**Research:** Reviewed CSS masking and blend-mode patterns using MDN references. Considered a hard ellipse, cutout, duotone treatment, and framed collage. Chose a soft radial CSS mask because it preserves the supplied photograph while dissolving the garden background into the page and remains static-export friendly with no image-editing dependency.

**Change:** Replaced the hard rectangular visual treatment with a feathered organic portrait. The image now uses a radial `mask-image`, a restrained saturation/contrast adjustment, a subtle grid behind it, and a thin irregular contour ring. Removed the hard workbench border so the portrait reads as a personal artifact rather than a card.

**Validation:** Browser review confirmed the blended treatment at desktop and mobile layout sizes. `npm run typecheck` passed, `npm run lint` passed with the two existing non-blocking configuration warnings, and `npm run build` passed.

### 2026-10-13 — Removed light theme

**Request:** The owner decided the light theme was unnecessary and asked for its source code to be removed.

**Change:** Made the deep green-black palette the sole `:root` theme, removed the light token set and `.dark` override, removed `next-themes`, deleted the theme provider and theme toggle components, removed the theme control from the header, and removed hydration suppression that was only needed for theme switching.

**Trade-off:** This intentionally narrows the original brief's two-theme requirement to a single dark visual system. The dark theme now loads deterministically with no theme-switching client code or flash handling.

**Validation:** Source search found no remaining theme-switching references in `src/`, `package.json`, or `README.md`. `npm run typecheck` passed, `npm run lint` passed with the two existing non-blocking configuration warnings, and `npm run build` passed with the dark-only static site exported successfully.

### 2026-10-13 — Replaced header wordmark

**Change:** Replaced the top-left `NJ` wordmark with the requested `ᓚᘏᗢ` cat figure in [`src/components/site-header.tsx`](./src/components/site-header.tsx). Kept the existing home link and accessible `Nabin Joshi home` label. Adjusted the wordmark spacing so the cat glyph is rendered as a single figure rather than compressed initials.

**Remaining:** Confirm the glyph renders consistently in the target browser and preferred font environment.

### 2026-10-13 — Refined cat mark weight

**Change:** Reduced the header cat figure to `font-weight: 300`, increased its size slightly, and softened it with controlled opacity so it reads as a light navigation mark rather than a bold logo.

**Validation:** Styling-only change; no functional behavior changed.

### 2026-10-13 — Updated footer identity and contact links

**Change:** Updated [`src/components/site-footer.tsx`](./src/components/site-footer.tsx) to use `ᓚᘏᗢ` instead of the text name and added the requested tagline: `[M.SON] — Compiling the future, one segfault at a time.` Updated [`src/data/site.ts`](./src/data/site.ts) with the supplied GitHub, LinkedIn, and email values so the footer links are real rather than placeholders.

**Validation:** The footer remains shared across routes and keeps the existing accessible social navigation label. Typecheck and lint should be run after the next grouped UI/content change.

### 2026-10-13 — Opened external footer links in new tabs

**Change:** Updated the GitHub, LinkedIn, and email anchors in [`src/components/site-footer.tsx`](./src/components/site-footer.tsx) with `target="_blank"` and `rel="noopener noreferrer"`. The internal RSS link remains same-tab navigation.

**Reason:** Preserve the portfolio page while visitors follow external contact links.

### 2026-10-13 — Progress log established

**Change:** Added this file as the persistent project timeline and maintenance contract for future agents.

**Reason:** Keep the implementation trajectory, current state, validation evidence, known placeholders, and release blockers visible across the entire project.

### 2026-10-14 — Modular PRISM blog article

**Change:** Replaced the placeholder blog route with the supplied PRISM article. The publication date is displayed as September 9, 2026, with reading time and topic tags available in the typed post record.

**Architecture:** Added [`src/data/blog.ts`](./src/data/blog.ts) as the canonical blog content source and [`src/components/blog-post.tsx`](./src/components/blog-post.tsx) as a reusable renderer. Article sections can contain paragraphs, lists, semantic tables, notes, and external resource links without changing the route. Updated the RSS generator to use the new source.

**Presentation:** Added Medium-inspired narrow reading width, editorial typography, article metadata, table scrolling on small screens, source-note styling, and new-tab behavior for all external article links.

**Validation:** `npm run typecheck` passed after updating the feed import. Lint and clean production build remain to be run after this blog change. Browser review of the article at desktop and mobile widths remains follow-up work.

**Final validation:** `npm run lint` passed with the two existing non-blocking configuration warnings. A clean `npm run build` passed and generated the blog route and RSS feed. Browser review confirmed the article title, one semantic results table, five new-tab external links, and a readable narrow article column. At a 390px viewport the page did not introduce horizontal document overflow; the wide table remains intentionally scrollable inside its wrapper.

### 2026-10-14 — Expanded blog canvas

**Change:** Updated the homepage writing section and `/blog/` index to use the full 1120px site canvas instead of presenting blog content as a narrow left-aligned column. Blog cards now use their available width directly without the unused project-thumbnail column.

**Presentation:** Added a full-width blog index header and larger article-list rows while keeping the individual post page intentionally readable through its narrower editorial measure.

**Validation:** `npm run typecheck` passed. `npm run lint` passed with the two existing non-blocking configuration warnings. A clean `npm run build` passed after stopping the development server to avoid `.next` cache contention. Browser review at desktop width confirmed the blog index and homepage writing section occupy the full 1120px site canvas; mobile review confirmed the layout remains within the viewport.

### 2026-10-14 — Source readability and card reuse

**Change:** Formatted the source tree with the existing Prettier tooling so route files are readable and consistently navigable rather than compressed into one-line JSX. Removed incidental whitespace artifacts from the blog and projects pages.

**Refactor:** Added [`src/components/content-card.tsx`](./src/components/content-card.tsx) to own the repeated project-card and blog-card markup used by the homepage, Projects page, and Blog page. The data arrays remain the single content source; the shared components only handle presentation.

**Validation:** TypeScript validation passed after the refactor. Lint and clean production build remain to be run.

**Final validation:** `npm run lint` passed with the two existing non-blocking configuration warnings. A clean `npm run build` passed, regenerated the static `out/` export, and confirmed all routes still prerender successfully. The generated HTML remains minified by Next.js as expected; the source tree is now the readable maintenance surface.

### 2026-10-14 — Added Robotics Club blog post

**Change:** Added “My journey with the Robotics Club” as the second structured post in [`src/data/blog.ts`](./src/data/blog.ts). The displayed publication date is June 15, 2026, and its canonical machine-readable value is `2026-06-15`.

**Media and link:** Copied the supplied team image to [`public/robotics-club-team.png`](./public/robotics-club-team.png), added accessible alt text, and linked the article to the Robotics Club website at `https://robotics.ioepc.edu.np/`.

**Architecture:** Added optional post images and configurable resource-section headings to [`src/components/blog-post.tsx`](./src/components/blog-post.tsx), keeping the route and renderer reusable for future posts.

**Validation:** Typecheck passed. Lint passed with the two existing non-blocking configuration warnings. Browser review confirmed the title, June 15 date, image, nine article sections, external club link, and mobile no-overflow behavior. A clean production build passed and generated both blog routes.

### 2026-10-14 — Simplified homepage navigation

**Change:** Removed the More item from [`src/data/site.ts`](./src/data/site.ts), which removes it from both desktop and mobile primary navigation. Removed visible RSS links from the footer and More index while retaining the feed generation infrastructure for possible later reuse.

**Link update:** The homepage “A little from me” action now opens `https://mson.bearblog.dev/` in a new tab with `noopener noreferrer`.

**Validation:** Typecheck passed. Lint passed with the two existing non-blocking configuration warnings. A clean production build passed and regenerated all static routes. A source search confirmed that RSS and More no longer appear in visible navigation/footer UI; the unused `/more/` route remains available only by direct URL.

### 2026-10-14 — Removed More and RSS source code

**Change:** Permanently removed the unused `/more/` page and RSS implementation. Deleted the More route, `scripts/generate-feed.ts`, the `feed` and `prebuild` package scripts, the unused `tsx` dependency, the `/more/` sitemap entry, and generated `public/feed.xml`.

**Validation:** Typecheck passed. Lint passed with the two existing non-blocking configuration warnings. A clean production build passed and generated 18 routes with no More or RSS route. Targeted source search found no feature references; ordinary prose occurrences of the word “more” remain in article content.

### 2026-10-14 — Reworked About as contact page

**Change:** Replaced the placeholder About content with a contact-focused page using the supplied introduction and invitation to connect. The page now presents email, GitHub, LinkedIn, Kaggle, and Bear Blog as a consistent, accessible link list.

**Presentation:** Added contact-specific layout and styles that reuse the site’s serif, sans, mono, muted-border, and warm-accent system. External links open in new tabs; email remains a mail link.

**Validation:** Browser review confirmed all five contact links and the responsive layout at a 390px viewport without document overflow. Typecheck passed after Next generated route types, lint passed with the two existing non-blocking configuration warnings, and a clean production build passed.

### 2026-10-15 — Added Sanjaya hackathon blog post

**Change:** Added “The first time I pitched an idea, and accidentally won a hackathon” as the third structured article in [`src/data/blog.ts`](./src/data/blog.ts), with the supplied Sanjaya repository link and the current publication date of October 15, 2026.

**Media:** Converted the three supplied images into stable static JPEG assets and placed them at relevant points in the article using reusable section-level image metadata. Image dimensions are stored with the content so portrait photos render without distortion.

**Homepage behavior:** Added [`featuredPosts`](./src/data/blog.ts) and updated the homepage to show exactly two posts: PRISM and Sanjaya. The full Blog page and static params still include all three articles.

**Validation:** Typecheck passed. Lint passed with the two existing non-blocking configuration warnings. Browser review confirmed the Sanjaya title, date, three inline images, project link, and seven sections. A clean production build passed and generated all three blog routes.

### 2026-10-15 — Prepared custom-domain metadata

**Change:** Updated the canonical site URL to `https://nabin-joshi.com.np`,
added canonical and Open Graph metadata, and added `public/CNAME` with the
requested apex domain. Updated the deployment README and `.gitignore` for
release preparation.

**Content cleanup:** Replaced the visible `TODO_REPLACE_DATE` placeholder on
the Now page with its current dated update and removed the publish-time
instruction text.

**Validation:** A clean `npm run build` passed and generated 19 static pages.
The generated `out/` output contains `CNAME`, `robots.txt`, and `sitemap.xml`;
canonical metadata points to the `.np` domain. GitHub repository, DNS, HTTPS,
and live-site checks remain pending approval and account access.
