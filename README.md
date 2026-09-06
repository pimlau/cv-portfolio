# Laura Pimiä — portfolio

A personal portfolio site (Shōwa-era Japanese retro character, front end / design engineer). Built from the
`PortfolioPage.dc.html` design (Claude Design project `CV Portfolio Site Project`, design system
"Shōwa Portfolio Design System").

## Stack

- [Vite](https://vitejs.dev) + TypeScript, no UI framework — components are small functions that return
  HTML strings, composed in [`src/main.ts`](src/main.ts).
- [i18next](https://www.i18next.com) for all copy. Every string lives in
  [`src/i18n/locales/en.json`](src/i18n/locales/en.json); components call `i18next.t(...)` rather than
  hardcoding text.
- Design tokens (colour, type, spacing, shape, motion) carried over from the source design system into
  [`src/styles/tokens.css`](src/styles/tokens.css).

## Structure

```
src/
  components/   Button, Tag, MediaFrame, SectionHeader, ProjectCard, Marquee, Header, Footer
  sections/     About, Work, Graphics, Hobby, CV — one file per page section
  i18n/         i18next setup + locales/en.json (all copy)
  styles/       tokens.css, base.css, layout.css, components.css
```

To add a language, drop a new locale JSON next to `en.json` and register it as a resource in
[`src/i18n/index.ts`](src/i18n/index.ts).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
