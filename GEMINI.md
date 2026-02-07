# GEMINI.md - Project Context: traffik

## Project Overview
**traffik** is a modern, high-performance landing page for a digital agency specializing in digital infrastructure, sites, and advertising. The project focuses on a premium, dark-themed aesthetic (inspired by Apple/modern SaaS designs) with smooth animations and interactive elements.

- **Main Goal:** Convert visitors into revenue by showcasing agency expertise in generating traffic.
- **Visual Style:** Minimalist, high contrast (black/white/blue), heavy use of blurs (glassmorphism), and subtle animations.

## Technologies
- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (with `darkMode: 'class'`)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Architecture
The project follows a standard React component structure:
- `src/App.jsx`: Main entry component, handles theme state and layout.
- `src/components/layout/`: Global layout components (e.g., `Navbar`).
- `src/components/sections/`: Individual page sections (e.g., `Hero`, `Solutions`).
- `src/index.css`: Global styles and Tailwind directives.

## Building and Running
- `npm run dev`: Start the development server.
- `npm run build`: Create a production build in the `dist/` directory.
- `npm run lint`: Run ESLint for code quality checks.
- `npm run preview`: Preview the production build locally.

## Development Conventions
- **Theming:** Supports Light/Dark mode. Use `dark:` prefix in Tailwind classes. Theme state is managed in `Navbar.jsx` by toggling the `dark` class on `document.documentElement`.
- **Animations:** Use `framer-motion` for entrance animations and transitions.
- **Selection:** Custom selection color defined in `App.jsx` (`selection:bg-[#0066FF]`).
- **Typography:** Uses 'Montserrat' as the primary sans-serif font (configured in `tailwind.config.js`).

## Known Issues / TODOs
- **Missing Component:** `src/components/sections/Solutions.jsx` is imported and used in `App.jsx` but does not appear to exist in the filesystem. This will cause build/runtime errors until implemented.
