# Nabin Joshi — portfolio

A static personal site and technical blog for Nabin Joshi. It is designed for GitHub Pages and uses Next.js App Router with a static export.

## Setup

This project uses npm and requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

The static site is written to `out/`. Inspect that directory after a build before deploying.

## Content

- Add posts as structured records in `src/data/blog.ts`. The reusable blog renderer supports sections, lists, tables, notes, and external resource links.
- Add, update, or remove projects in the clearly marked `projects` array in `src/lib/content.ts`. Each project object drives the homepage card, Projects index, generated detail route, image, stack, status, and repository link.
- Update `content/now.md` for the `/now/` page.
- Replace every `TODO_REPLACE_*` value in `src/data/site.ts` and page content before launch.

Velite validates the typed content collections and remains available for a future MDX migration. The current blog uses a typed, explicit data array and reusable article renderer so posts remain easy to add, remove, and review.

## GitHub Pages and domain

Set the repository Pages source to **GitHub Actions**. The workflow in `.github/workflows/deploy.yml` builds and deploys `out/`.

The canonical URL is configured as `https://nabin-joshi.com.np` in `src/data/site.ts`, and `public/CNAME` contains the requested custom domain. DNS and GitHub Pages custom-domain settings still need to be configured and verified manually.

For a custom domain, configure the apex A records to the current GitHub Pages IPs from GitHub's documentation and point `www` to `<username>.github.io`. Verify DNS, then enable **Enforce HTTPS** in Pages settings.

No deployment or domain configuration is claimed until it has been run and checked.
