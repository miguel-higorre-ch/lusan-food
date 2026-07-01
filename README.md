# Lusan Food — Landing Page

React + Vite + Tailwind CSS landing page for Lusan Food ("Hecho para antojar").

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build` — Output directory: `dist` (auto-detected).
5. Click **Deploy**.

Or with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Editing content

- Menu items, value props, and testimonials: `src/data.js`
- WhatsApp number/link: `WA_LINK` in `src/data.js`
- Colors and fonts: `tailwind.config.js`
- Logo: `src/components/FlameLogo.jsx`
