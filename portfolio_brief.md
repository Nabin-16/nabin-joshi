# Portfolio Website: Build Brief for Coding Agent

Owner: **Nabin Joshi**. CS Engineering undergraduate (6th semester, IOE Purwanchal Campus). 2 years of robotics (club member, then Secretary of the campus Robotics Club), hackathon participant and winner, currently focused on Data Science, AI/ML and LLMs, with some web dev.

Build a static personal site that doubles as a technical blog. Hosted on GitHub Pages with a `.np` custom domain.

---

## 1. Goal and audience

**Primary goal:** help land an AI/ML internship. **Secondary:** a lasting home for technical writing and projects.

Audiences, in order of priority:
1. **Recruiters / hiring engineers** who skim for 30-60 seconds. They need: who, what he builds, proof (projects, results, links), CV, contact.
2. **Technical peers / hackathon and research people** who read the blog and project write-ups in depth.
3. **Campus supervisors/examiners** who may look at project work.

**Tone:** a capable student engineer with a personal voice. Not a corporate agency site, not a diary-style personal blog. Honest, specific, understated. No inflated claims.

---

## 2. Design references (what to take, what to avoid)

| Reference | Take | Avoid |
|---|---|---|
| **erafellowship.org** | Structure and credibility: a mission-first headline, a numbered "portfolio" of work (01, 02, 03...), a strip of affiliations/recognition as proof, clear hierarchy, generous whitespace, editorial headings, consistent section rhythm | Corporate/institutional feel, long marketing paragraphs, logo walls, heavy imagery |
| **scientiac.space/more** | Minimalism: text-first, tiny index-style pages (bold link + one-line description), small nav (Main / Blog / More), warm cream background, Atom/RSS feeds, honest short footer, almost no chrome | Making the whole site a link list; too sparse for recruiters to find proof quickly |
| **karkikaruna1.com.np** | Generalised student-portfolio shape: Hero, About, Projects, Contact, with project descriptions that say what the thing does and its stack | Skill-badge grids, template look, social-icon clutter, a contact form (needs a backend; do not build one), placeholder links such as `mailto:yourgmail@gmail.com` |

**Net direction:** a calm, text-forward, editorial site (ERA's structure + scientiac's restraint) with proof-of-work surfaced early (recruiter-friendly). Slightly more personality than a template, but nothing decorative that competes with content.

---

## 3. Visual direction (commit to this; tweak after seeing it in the browser)

- **Background:** warm paper light theme by default, with a proper dark theme. Both themes first-class.
- **Palette (tokens only, never hard-coded in components):**
  - `--bg` paper `#F5F2EB` (dark: `#111318`)
  - `--fg` ink `#111318` (dark: `#ECE9E1`)
  - `--muted` stone `#6B675F` (dark: `#9A968E`), must pass AA contrast
  - `--accent` blue `#315EFB` (dark: lighten for contrast)
  - `--border` low-contrast hairline
- **Type:** one serif for display headings (e.g. Fraunces or Newsreader), one clean sans for body (e.g. Inter or Geist), one mono for metadata/code (e.g. JetBrains Mono or Geist Mono). Load via `next/font` (self-hosted at build). Max 3 families, few weights, good fallbacks.
- **Layout:** single narrow-ish content column (~65-72ch for reading, wider for project grids), hairline dividers, numbered section labels in mono (`01 / Projects`), minimal shadows and radii. Cards are flat with borders, not floating glass.
- **Avoid:** gradients, glassmorphism, glow, neon, bento-grid SaaS look, skill-percentage bars, stock 3D/neural-net art, emoji headings, scroll-jacking, custom cursors, loading screens.

### Signature graphic (optional, small, personal)
A **robotics-flavoured** motif instead of a generic wireframe: a thin-line 2-link planar arm (inverse kinematics) or a linkage drawn in SVG, placed beside the hero text.
- Static SVG composition first; it must look good with no animation.
- Optional: the end effector slowly follows the pointer on pointer-capable devices (small client component, pure SVG + a few lines of JS, no WebGL, no animation library).
- Disabled under `prefers-reduced-motion`, on touch, and before hydration (static fallback).
- `aria-hidden="true"`, decorative.
- If it looks gimmicky after review, remove it. The site must stand without it.

---

## 4. Tech stack

**Framework and language**
- **Next.js (latest stable, App Router)** with `output: 'export'` (static export only)
- **TypeScript** (strict)
- **React** only where needed; prefer server components (they render at build time)

**Styling / UI**
- **Tailwind CSS** (latest stable) + `@tailwindcss/typography` for prose
- CSS variables for design tokens (palette, radius, spacing)
- **shadcn/ui** only for primitives actually needed (e.g. dropdown/sheet for mobile nav). Do not install the whole kit.
- **lucide-react** for a handful of icons
- **next-themes** for light/dark (system default, persisted choice, no flash)
- Animation: CSS transitions first. Add `motion` only if one specific interaction needs it. No GSAP, Three.js, or Lottie.

**Content**
- **MDX** files in the repo, validated by **Velite** (typed collections with Zod schemas; build fails on invalid frontmatter)
- Collections: `projects`, `posts`, plus a single `now.md`
- **remark-gfm**, **remark-math** + **rehype-katex** (LaTeX for ML posts), **rehype-slug** + **rehype-autolink-headings**
- **rehype-pretty-code** (Shiki) for syntax highlighting; copy-to-clipboard button on code blocks (small client component)
- Reading time computed at build (simple words/200)
- Jupyter notebooks: convert to Markdown with `jupyter nbconvert --to markdown`, then place in `content/posts/`

**Features (static-compatible)**
- **RSS/Atom** feed generated by a build script (`scripts/generate-feed.ts`) into `public/` or `out/`
- **sitemap.xml** and **robots.txt** via `app/sitemap.ts` / `app/robots.ts` with `export const dynamic = 'force-static'`
- **Pagefind** for search, run after build over `out/` (add after the blog has content; not a launch blocker)
- **Giscus** comments on posts (optional; needs GitHub Discussions enabled on the repo)
- Static default OG image in `public/`; per-post OG images are optional, not required
- **No** analytics, database, auth, CMS, API routes, or contact form at launch. (Optional later: privacy-friendly analytics.)

**Tooling**
- npm or pnpm (pick one, document it), ESLint, Prettier, `tsc --noEmit` in CI
- **GitHub Actions** workflow for Pages: checkout, setup-node, install, `next build`, `actions/upload-pages-artifact` with `path: ./out`, `actions/deploy-pages`

### Static-export rules (the agent must follow these)
- `next.config.mjs`: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`
- No API routes, route handlers that need runtime, middleware, server actions, ISR/`revalidate`, or the `next/image` optimizer
- Every dynamic route (`/blog/[slug]`, `/projects/[slug]`) uses `generateStaticParams` and `export const dynamicParams = false`
- Pre-optimise images before commit (WebP/AVIF, sensible dimensions); use `<Image>` with explicit width/height
- Add `public/.nojekyll`
- Never put secrets in the repo. If an LLM demo is ever needed, host the backend elsewhere (Hugging Face Spaces, Modal, Cloud Run) and link or call it from the client
- Run `next build` locally and inspect `out/` before claiming anything works

---

## 5. Information architecture

| Route | Purpose |
|---|---|
| `/` | Home |
| `/projects` | Project index |
| `/projects/[slug]` | Project / case study |
| `/blog` | Writing index |
| `/blog/[slug]` | Article |
| `/about` | Background, interests, direction |
| `/more` | Small index of links, feeds, CV, other places (scientiac-style: bold link + one-line description) |
| `/now` | What I'm building/learning now, with "last updated" date |
| `/404` | Friendly not-found page |

**Primary nav:** Home, Projects, Blog, About, More, plus the theme toggle. `/now` is linked from More and the homepage. Mobile: simple accessible menu (button with `aria-expanded`, Esc to close, focus handled).

**Footer:** name, one short human line, GitHub / LinkedIn / email, RSS link, auto-generated year. No duplicated nav dump.

---

## 6. Homepage (in order)

1. **Hero.** Left: small mono label (`Nabin Joshi / Computer Engineering`), a clear human headline, 2-3 sentence intro mentioning AI/ML, LLMs and robotics, two actions only: **Projects** (primary) and **CV / Email** (secondary). Right (desktop) or below (mobile): the signature graphic, compact. Starter headline (edit freely): *"I build things to understand how they work."* No "expert / revolutionary" language.
2. **Recognition strip** (ERA-style proof, but modest): one quiet line/row of verified facts, e.g. Robotics Club Secretary, hackathon wins, IOE Purwanchal Campus. Use real names/dates only; placeholders until supplied.
3. **Selected projects** (3-4 max, numbered `01-04`): each shows title, one-line problem/purpose, his contribution, stack in mono, outcome/status, links. Real screenshot/diagram when available, else a typographic placeholder. No fake art.
4. **Recent writing** (latest 3): title, date, short description. If no posts yet, omit the section or show a considered empty state. Never fabricate posts.
5. **Currently exploring**: pulled from `content/now.md` (single source of truth), a few lines.
6. **Closing**: a low-pressure line + email and social links. No contact form.

---

## 7. Page details

### Projects
- Index: two-column grid on desktop, one on mobile. Flat bordered cards or rows. Works without images. No filters until there are enough projects (then simple tag filter, optional).
- Project types to expect: AI/ML, LLM, robotics/hardware, web, hackathon, academic.
- **Detail template, all fields optional except title and summary; render only sections that have content:**
  summary, role/contribution (and collaborators), problem/motivation, constraints, approach/architecture (diagram), implementation and key decisions, evaluation/results (measured results clearly distinguished from goals or plans), limitations, lessons learned/next steps, links (repo, demo, paper/report, related post), media.
- Hackathon entries: event, date, team size, his role, what was built, result. Only verified results.
- Robotics entries: hardware, sensors/controllers, software stack, photo/video link, what worked and what didn't.
- Never invent metrics, awards, collaborators, or links. Never present planned work as done.

### Blog
- Index: simple chronological list (title, date, description, tags, reading time). No sidebar.
- Article: ~68ch reading width, good vertical rhythm, heading anchors, optional table of contents for long posts (h2/h3), code blocks with horizontal scroll and copy button, KaTeX math, images with captions and alt text, blockquotes, footnotes. Prev/next links. Giscus optional.
- Frontmatter: `title`, `description`, `date`, `updated?`, `tags[]`, `draft` (default true; drafts excluded from production and from feed/sitemap), `cover?`.
- Post ideas for the owner (not to be fabricated by the agent): a paper reimplementation, a project write-up, an LLM experiment, a robotics build log.

### About
Short and personal: current studies, what he's curious about (AI/ML, LLMs, robotics), how he learns/builds, where he's heading (internship search, research interest). Not a duplicate CV and not a tech-badge list. If a skills mention is needed, a single sentence or a quiet mono line (e.g. `Python, PyTorch, ...`), only real ones.

### More (scientiac-style index)
Bold link + one-line description each: GitHub, LinkedIn, Email, CV (PDF in `public/cv/`), RSS feed, Now page, other blog (as a separate space, not merged into this feed), any other profiles (Kaggle, Hugging Face, Devpost) if the owner provides them.

### Now
One Markdown file, `content/now.md`, with `updated` date in frontmatter, rendered on `/now` and excerpted on the homepage. Sections: building, learning, thinking about.

---

## 8. Content data and placeholders

- All external links and identity facts live in **one file**: `src/data/site.ts` (name, tagline, email, GitHub, LinkedIn, CV path, social links, domain/site URL).
- Unknown values must be obvious placeholders (`TODO_`-prefixed) that **fail a lint/build check or render nothing** rather than ship as broken links. Add a script `npm run check:placeholders` that lists any remaining `TODO_` values; CI should warn on them for production.
- Example/sample projects used for layout testing must carry `example: true` and be excluded from production builds.
- Do not invent email, usernames, repo URLs, demos, awards, collaborator names, or numbers.

### Owner-provided facts the agent may use
- Name: Nabin Joshi
- CS Engineering undergraduate, 6th semester, IOE Purwanchal Campus
- 2 years robotics: club member, then Secretary of the campus Robotics Club
- Participates in hackathons and has won some (event names and results to be supplied)
- Past ~6 months: Data Science, AI/ML, LLMs; some web dev
- Seeking an AI/ML internship; building a semester project

---

## 9. Deployment and domain (GitHub Pages + `.np`)

- Repo: `<username>.github.io` (no `basePath` needed). With a custom domain, no `basePath` is needed even for a project repo. Pages source: **GitHub Actions**.
- Put the domain in `src/data/site.ts` and use it for canonical URLs, sitemap, and RSS. Do not set the `.np` domain as canonical until DNS works; until then use the `github.io` URL.
- `public/CNAME` containing only the domain (e.g. `yourname.com.np`), added only once the domain is registered and DNS configured.
- DNS (set at the `.np` registrar): apex domain uses A records to GitHub Pages IPs (verify the current list in GitHub's docs before documenting; at time of writing `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`); `www` uses a CNAME to `<username>.github.io`. If the registrar's DNS panel is limited, use a `www` or other subdomain.
- Enable "Enforce HTTPS" after the certificate is provisioned.
- README must document: setup, dev, build, adding a post, adding a project, updating Now, DNS records, Pages settings, placeholder check.
- Do not claim a deployment succeeded unless it was actually run and the URL checked.

---

## 10. Accessibility, performance, quality

- Semantic landmarks, logical headings, visible focus, accessible names on all controls, contrast AA in both themes, not relying on colour alone.
- Respect `prefers-reduced-motion`. No hover-only essential info.
- Minimal client JS: only theme toggle, mobile menu, copy-code, optional arm graphic, optional Pagefind UI.
- Images: explicit dimensions, lazy-load below the fold, modern formats. Fonts: `next/font`, `display: swap`.
- No horizontal overflow on mobile; code blocks and tables scroll within their own container.
- Checks to run and report honestly (no invented scores): `next build` passes, `tsc --noEmit`, lint, no broken internal links, all routes render, theme persists and follows system, reduced-motion verified, RSS and sitemap valid, keyboard-only navigation works, build works for the intended base/domain, Lighthouse (only report if actually run).

---

## 11. Build phases

1. **Skeleton:** Next.js export config, Tailwind, tokens, fonts, layout, header/footer, theme toggle, all routes with honest placeholders, Velite collections, CI workflow. Site builds.
2. **Home + signature graphic:** hero, recognition strip, sections; static SVG first, motion last. Review in browser, adjust palette/type/spacing.
3. **Projects + blog:** templates, MDX pipeline (math, code, anchors, copy), RSS, sitemap.
4. **Supporting pages + content:** About, More, Now, real screenshots/diagrams, verified links.
5. **Deploy + verify:** Pages workflow, domain/DNS docs, full checks, README.

After each phase, show a working result and ask only about decisions that block progress.

---

## 12. Instructions to the agent

1. Read this entire brief before coding. Visual details (exact palette, fonts, graphic) are a committed starting point, adjustable after review. Do not stall on them.
2. Propose a short plan, then build phase 1 without a questionnaire unless something truly blocks you.
3. Static export only. Do not use any server feature. If a request seems to need one, say so and propose a static alternative.
4. Keep it simple: no backend, DB, CMS, analytics, or heavy animation libraries. Prefer small, typed, reusable components.
5. Never invent facts, links, metrics, or deployment status. Use marked placeholders.
6. Run the build and checks; report real results, including failures.
7. Explain meaningful trade-offs in a sentence or two. Avoid scope creep.

## Owner review checklist (before public launch)
- [ ] Name, bio, homepage copy in my own voice
- [ ] Project descriptions, my contribution, results, links
- [ ] Hackathon names/results and robotics club details
- [ ] Email, GitHub, LinkedIn, CV file, other profiles
- [ ] Palette, fonts, hero graphic, motion level
- [ ] `.np` domain registered, DNS set, `CNAME` added, HTTPS enforced
- [ ] No `TODO_` placeholders or example content in production
