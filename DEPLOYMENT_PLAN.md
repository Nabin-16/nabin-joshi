# Portfolio Production and Deployment Plan

Status: **Phase 1 — Audit and local preparation**

This document tracks the final production-readiness, GitHub Pages, custom-domain,
and verification work for the Nabin Joshi portfolio. It is intentionally
stepwise. Do not push, create a remote repository, change DNS, change
repository visibility, or perform destructive Git operations without explicit
owner approval.

## Project facts

- Framework: Next.js App Router with TypeScript.
- Hosting target: GitHub Pages.
- Build mode: static export (`output: "export"`).
- Build output: `out/`.
- Deployment workflow: `.github/workflows/deploy.yml`.
- Intended custom domain: `nabin-joshi.com.np`.
- Canonical production URL target: `https://nabin-joshi.com.np`.
- Current repository state: local folder is not currently a Git repository and
  has no configured remote.

## Phase 1 — Production-readiness audit

- [x] Inspect the current source structure and deployment configuration.
- [x] Run typecheck.
- [x] Run lint and record existing warnings separately from new errors.
- [x] Run a clean production build.
- [x] Review generated routes, assets, metadata, sitemap, and `robots.txt`.
- [ ] Check internal links and direct navigation to nested routes.
- [ ] Review browser console errors at desktop and mobile widths.
- [ ] Review responsive layout and image rendering.
- [ ] Check dependency age and vulnerabilities without performing broad upgrades.
- [ ] Identify oversized assets, unused dependencies, and dead code.
- [ ] Fix only genuine production issues that preserve the finalized design.

## Phase 2 — Domain and metadata preparation

- [x] Update `src/data/site.ts` canonical URL to
  `https://nabin-joshi.com.np`.
- [x] Add `public/CNAME` containing exactly `nabin-joshi.com.np`.
- [x] Confirm sitemap and `robots.txt` use the canonical HTTPS URL.
- [x] Add canonical and Open Graph metadata.
- [ ] Do not modify DNS from this environment.

Domain records to review with the DNS provider:

- Apex/root `@`: GitHub Pages apex A records from the current official GitHub
  Pages documentation.
- `www`: optional CNAME to the GitHub Pages hostname for the repository.
- Preserve existing mail, verification, and unrelated DNS records.
- Do not change nameservers unless the owner explicitly requests it.

The exact GitHub Pages hostname cannot be written until the repository owner
and repository name are known. DNS changes require owner approval and should be
performed manually in the domain provider dashboard.

## Phase 3 — Git repository preparation

- [ ] Confirm the intended GitHub account, repository name, and visibility.
- [x] Review `.gitignore` against the actual Next.js project.
- [x] Check for secrets, `.env` files, credentials, private documents, and
  generated artifacts.
- [x] Initialize Git after owner approval; the local branch is `main`.
- [x] Create the first focused commit:
  `Prepare portfolio for production deployment`.
- [x] Inspect the staged diff before committing.
- [x] Add the approved GitHub remote:
  `https://github.com/Nabin-16/nabin-joshi.git`.
- [x] Push after GitHub authentication was completed.

## Phase 4 — GitHub Pages deployment

- [ ] Use the existing GitHub Actions workflow.
- [x] Configure GitHub Pages source as **GitHub Actions** in the repository
  settings.
- [ ] Confirm the deployment branch is `main`.
- [ ] Confirm workflow permissions are limited to contents read, Pages write,
  and identity-token write.
- [ ] Push the approved commit.
- [ ] Inspect workflow status and logs.
- [x] Verify the Pages deployment URL:
  `https://nabin-16.github.io/nabin-joshi/`.

## Phase 5 — Custom-domain activation

- [ ] Add the approved `public/CNAME` configuration.
- [ ] Configure DNS manually with the domain provider.
- [ ] Add the custom domain in GitHub Pages settings.
- [ ] Wait for DNS propagation and certificate issuance.
- [ ] Confirm `https://nabin-joshi.com.np` works without certificate warnings.
- [ ] Decide whether `www.nabin-joshi.com.np` should redirect or remain
  unsupported; do not assume this without owner confirmation.

## Phase 6 — Live verification and handover

- [ ] Verify homepage.
- [ ] Verify `/projects/`, every project detail route, `/blog/`, every blog
  detail route, `/about/`, and `/now/`.
- [ ] Verify direct navigation and refreshes on nested routes.
- [ ] Verify images, internal links, external links, and new-tab behavior.
- [ ] Verify responsive layout at desktop and mobile widths.
- [ ] Verify canonical metadata, sitemap, `robots.txt`, and HTTPS.
- [ ] Record checks that were actually performed versus checks requiring owner
  action.
- [ ] Document the normal future workflow:

  ```text
  git pull
  make the change
  npm run typecheck
  npm run lint
  npm run build
  git add <intended files>
  git diff --cached
  git commit -m "Describe the focused change"
  git push origin main
  ```

## Approval gates

Owner approval is required before:

1. Creating or connecting a GitHub repository.
2. Changing repository visibility.
3. Adding a Git remote.
4. Committing or pushing to GitHub.
5. Changing DNS or nameservers.
6. Enabling paid services.
7. Deleting or overwriting existing remote history.

## Current audit notes

- The project is configured for static GitHub Pages deployment.
- The workflow uses Node.js 22, `npm ci`, typecheck, lint, build, and
  `actions/deploy-pages`.
- The canonical URL is now configured for `https://nabin-joshi.com.np`; DNS and
  HTTPS remain unverified.
- The local folder is now a Git repository on `main`; the approved `origin`
  remote is configured, but the first push is still pending authentication.
- DNS resolution for the supplied domain could not be verified from the
  available environment during initial inspection.
- Typecheck passed.
- Lint passed with two existing configuration warnings.
- The clean production build passed and generated all 19 expected static pages.
- Generated output includes all project/blog routes, `CNAME`, `robots.txt`, and
  `sitemap.xml`; canonical tags point to the HTTPS custom domain.
- The repository-wide Prettier check still reports pre-existing formatting
  differences in 23 files; this was not expanded into an unrelated formatting
  rewrite.
- `npm audit --omit=dev` reports vulnerabilities in the current dependency
  tree, including the pinned Next.js patch and transitive build packages.
  No forced or breaking dependency upgrade was applied.
- No token or password was entered, stored, or exposed during the blocked push.
- The first GitHub Actions build job passed, including `npm ci`, typecheck,
  lint, build, and artifact upload. The deploy job failed because GitHub Pages
  is not enabled for the repository; no workflow code change is required.
- Workflow run `38688426287` succeeded for both build and deploy jobs. The
  default Pages URL serves the homepage, `robots.txt`, and `sitemap.xml`.
- The custom domain still does not resolve from this environment. DNS records,
  the custom-domain setting, certificate issuance, and HTTPS enforcement remain
  manual steps.
