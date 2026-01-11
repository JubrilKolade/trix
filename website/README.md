# Trix Website — Docs & Community 🌐

This repository contains the Trix documentation website (built with Next.js and MDX) used for the official docs, examples, and community pages for the Trix CLI project.

This README covers how to run the site locally, add documentation and examples, and deploy updates.

---

## 🔧 Quick start (local development)

1. Install dependencies:

```bash
# from the website directory
npm install
```

2. Run the dev server (hot reload):

```bash
npm run dev
```

3. Open http://localhost:3000 in your browser.

Notes:
- The site uses the App Router and MDX for docs. Page files live under `src/app/`.
- Components live in `src/components/` and styles are in `src/app/globals.css`.

---

## 🛠️ Build and preview (production)

```bash
npm run build
npm run start
```

This runs Next.js production build and serves the site locally.

---

## 🧾 Adding or editing documentation

- Docs are implemented inside `src/app/docs/` and as React/MDX pages.
- To add a new docs page, create `src/app/docs/<slug>/page.mdx` or `page.tsx`.
- Use the existing layouts (`src/app/docs/layout.tsx`) and components (`src/components/*`) to keep style and navigation consistent.

Workflow:
1. Create or edit a page. 2. Run `npm run dev` to preview locally. 3. Open a pull request.

---

## 🎨 Design tokens & theming

- Global design tokens and theme variables are defined in `src/app/globals.css` (CSS variables and Tailwind config).
- Use theme-aware classes like `text-foreground`, `bg-card`, `border-border` to ensure light/dark compatibility.

---

## ✅ Contributing & content guidelines

- Add a clear title, short description, and example snippet where relevant.
- Keep copy concise and focused on how to use the CLI or feature.
- For API/CLI docs, include commands and expected outputs.
- Ensure accessibility (`alt` text for images, semantic headings) and test on both light and dark themes.

---

## 🚀 Deployment

Recommended: Deploy on Vercel (first-class Next.js support).
- Connect the repository in Vercel, set the root to the `website` project (if monorepo), and use `npm run build` as the build command.

Alternatively, you can deploy any Node-compatible hosting by building (`npm run build`) and running `npm run start`.

---

## 🧪 Tests & linting

- Linting is available via `npm run lint` (project uses ESLint). Add tests where appropriate and run them in CI.

---

## 🗂️ Notable files

- `src/app/page.tsx` — landing page
- `src/app/docs/` — docs index, pages, and layout
- `src/components/` — UI components used across the site
- `src/app/globals.css` — theme variables & Tailwind integration
- `package.json` — scripts: `dev`, `build`, `start`, `lint`

---

## 📣 Want me to do this for you?
- I can add a CONTRIBUTING.md for docs, set up a PR template, or add a GitHub Action to build and preview preview deployments automatically.

---

© 2026 Trix Labs — built with ❤️

