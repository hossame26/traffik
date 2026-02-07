# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React app source. Entry points are `src/main.jsx` (bootstraps React) and `src/App.jsx` (top-level layout).
- `src/components/` contains reusable UI, organized by purpose (`layout/`, `sections/`).
- `src/assets/` stores imported static assets (e.g., SVGs).
- `public/` is for static files served as-is by Vite.
- Styling lives in `src/index.css` (Tailwind directives + custom utilities) and `src/App.css` for app-specific styles.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server with HMR.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across the project.

## Coding Style & Naming Conventions
- Use ES modules and React function components in `*.jsx` files.
- Component and file names are PascalCase (e.g., `Hero.jsx`); variables use camelCase.
- Indentation is 2 spaces; use single quotes; keep semicolon usage consistent within a file.
- Tailwind utility classes are applied in `className`; custom utilities are defined under `@layer utilities` in `src/index.css`.
- ESLint is configured in `eslint.config.js` with React Hooks/Refresh rules and a strict unused-vars rule.

## Testing Guidelines
- No automated test runner or coverage targets are configured yet.
- If you add tests, use `*.test.jsx` or `src/__tests__/` and add a `test` script to `package.json` (e.g., Vitest or Jest).

## Commit & Pull Request Guidelines
- No Git history is present here, so there is no established commit message convention.
- If introducing one, prefer clear, imperative messages (e.g., `feat: add hero animation`).
- PRs should include a concise description, list commands run (e.g., `npm run lint`), and provide screenshots for UI changes.

## Comparatif: Votre Agence vs Nuvix
- Positionnement: [votre angle principal] vs [angle de Nuvix]. Garder factuel et vérifiable.
- Offres: [services clés] vs [services annoncés]. Exemple: sites vitrines, e‑commerce, SEO, maintenance.
- Processus: [étapes et délais typiques] vs [processus public].
- Stack & qualité: [stack, perf, accessibilité, SEO] vs [stack affichée].
- Preuves: [études de cas, chiffres, avis] vs [preuves disponibles].
- Tarifs & support: [fourchettes/prévisions] vs [conditions publiques].

## Configuration & Environment
- Vite environment variables must be prefixed with `VITE_` and accessed via `import.meta.env`.
- The build output lives in `dist/`; avoid committing it unless required.
