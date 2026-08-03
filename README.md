# Verdance

React + TypeScript + Vite.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server with HMR     |
| `npm run build`   | Type-check and build to `dist/`   |
| `npm run preview` | Serve the production build        |
| `npm run lint`    | Run ESLint                        |

## Structure

```
public/            Static files served as-is at the site root
src/
  assets/          Images and fonts imported by components
  components/      Reusable UI components
  hooks/           Custom React hooks
  lib/             Helpers, API clients, non-React logic
  pages/           Route-level components
  styles/          Global CSS
  App.tsx          Route definitions
  main.tsx         App entry point
```

## Environment variables

Local config lives in `.env`, which is gitignored. Vite only exposes variables
prefixed with `VITE_` to client code.
