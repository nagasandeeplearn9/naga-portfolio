# Naga Sandeep Metla — Portfolio

Personal portfolio site built with React 18, Vite, and TypeScript. Dark/light theme, responsive, no UI libraries.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build
```

## Edit content (no component changes needed)

All text lives in `src/data/`:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, headline, pitch, summary, socials, stats, `photo`, `resumeUrl` |
| `skills.ts` | Skill groups shown as chip cards |
| `projects.ts` | Case studies (problem / approach / impact / stack / links) |
| `experience.ts` | Timeline roles (first 4 highlights shown, rest behind "Show more") |
| `certifications.ts`, `education.ts` | Credentials section |
| `sections.ts` | Page order, nav labels, enable/disable sections |

Search for `TODO` in `src/data/` for spots that would benefit from your input (metrics, cert links).

**Common updates**
- **Photo:** put `photo.jpg` in `public/` and set `photo: 'photo.jpg'` in `profile.ts`.
- **Resume download:** put `resume.pdf` in `public/` and set `resumeUrl: 'resume.pdf'`; a "Resume" button appears in the hero.
- **GitHub:** uncomment the GitHub entry in `profile.socials`.
- **New project:** add an object to `projects.ts`. Category filters appear automatically once a category has 2+ projects.

## Add a new section (Blog, Talks, Testimonials…)

1. Create `src/components/MySection.tsx` that renders `<Section id="my-section" eyebrow="07 · …" title="…">…</Section>`.
2. Add `{ id: 'my-section', label: 'Label', component: MySection, enabled: true }` to `src/data/sections.ts`.

The nav and active-link highlighting pick it up automatically.

**Per-project pages later:** each project has a `slug`. Add `react-router-dom` with `HashRouter` (works on GitHub Pages without 404 workarounds) and route `#/projects/:slug` to a detail component.

## Deploy to GitHub Pages

1. Create a GitHub repo and push this folder's contents to the `main` branch.
   - Repo named `<username>.github.io` → site at `https://<username>.github.io/`
   - Any other name → `https://<username>.github.io/<repo>/`
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes `dist/`.

`vite.config.ts` uses `base: './'`, so the same build works at either URL.

## Structure

```
src/
  components/   Section shells and UI (Hero, About, Skills, Projects, Experience, Credentials, Contact…)
  data/         All content + section registry
  hooks/        useTheme (persisted), useActiveSection (nav highlight)
  styles/       tokens.css (theme variables), global.css, components.css
  types.ts      Typed content models
```
# naga-portfolio
# naga-portfolio
