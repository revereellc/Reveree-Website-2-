# Reveree — React + TypeScript + Tailwind

This is the Reveree freelance marketplace, converted from plain HTML/CSS/JS to
**React 18 + TypeScript + Vite**, with **Tailwind CSS** configured. The design
and behavior are unchanged — same pages, same links, same interactions.

## Run it

```bash
npm install
npm run dev      # start the dev server (Vite)
npm run build    # type-check (tsc -b) + production build
npm run preview  # preview the production build
```

Then open the URL Vite prints (usually http://localhost:5173).

## How the original maps to this project

| Original file            | Now lives in                                  |
|--------------------------|-----------------------------------------------|
| `index.html`             | `src/pages/Home.tsx`                           |
| `services.html`          | `src/pages/Services.tsx`                       |
| `service.html`           | `src/pages/Service.tsx`                        |
| `creators.html`          | `src/pages/Creators.tsx`                       |
| `creator.html`           | `src/pages/Creator.tsx`                        |
| `how-it-works.html`      | `src/pages/HowItWorks.tsx`                     |
| `post-request.html`      | `src/pages/PostRequest.tsx`                    |
| `login.html`             | `src/pages/Login.tsx`                          |
| `signup.html`            | `src/pages/Signup.tsx`                         |
| `partials.js` (header/footer) | `src/components/Header.tsx`, `Footer.tsx` |
| `main.js` (search, toast, menus) | `src/components/SearchForm.tsx`, `src/toast.tsx`, dropdown logic in `Header.tsx` |
| `data.js`                | `src/data.ts` (now typed)                      |
| `icons.js`               | `src/icons.tsx` (SVG as React elements)        |
| `style.css`              | `src/index.css` (copied verbatim)              |

## Routing

The original linked between pages with query strings, e.g.
`creator.html?id=elena-v` or `service.html?cat=coding-development#Hash`.
React Router preserves these exactly: the paths are `/creator?id=elena-v`,
`/service?cat=coding-development#Hash`, etc. Every button points where it did
before. `src/routes.ts` contains a helper that converts any original-style
`href` (used by the search index data) into the matching router path.

## About the styling

Your original `style.css` is ~1200 lines of finely tuned custom CSS. To
guarantee the design stays **byte-for-byte identical**, that CSS is kept as the
source of truth (copied verbatim into `src/index.css`) and the components use
the same class names. Tailwind is fully wired up (`tailwind.config.js`,
`postcss.config.js`, the `@tailwind` directives at the top of `index.css`) and
the original color palette + fonts are exposed as Tailwind tokens, so you can
build any *new* UI with Tailwind utilities (`bg-navy`, `text-teal-dark`,
`font-display`, etc.) without touching the existing look.
