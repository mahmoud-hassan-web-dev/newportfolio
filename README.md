# Mahmoud Hassan — Portfolio (React)

Built with React + Vite. No Tailwind — plain CSS with custom properties, split by component in `src/components`.

## Structure

```
src/
  components/   Header, Hero, About, Skills, Projects, Contact, Footer
  data/         projects.js, skills.js, timeline.js — edit these to update content
  hooks/        useReveal.js — scroll-reveal animation hook
  index.css     all styles (design tokens live in :root at the top)
  App.jsx       assembles the sections
  main.jsx      React entry point
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deploy that folder anywhere (Vercel, Netlify, GitHub Pages).

## Deploy to Vercel

Import this repo/folder in Vercel — it auto-detects Vite, no config needed.
