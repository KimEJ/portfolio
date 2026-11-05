# Portfolio

A static portfolio built with Nuxt 4, TypeScript, Nuxt Content v3, Nuxt i18n, and Tailwind CSS v4. It targets Vercel and uses npm.

## Scripts

```sh
npm install
npm run dev       # local development
npm run lint      # ESLint
npm run build     # production server build
npx nuxi typecheck
npm run generate  # static output in .output/public
```

Set `NUXT_PUBLIC_SITE_URL` to the deployed site URL when generating; it defaults to `https://portfolio-kimej.vercel.app`.

## Content

```text
content/
  ko/                        en/
    profile.yml                profile.yml
    projects/<slug>.md         projects/<slug>.md
    career/<slug>.md           career/<slug>.md
```

Content v3 uses separate collections per locale with shared schemas, following its i18n integration guidance. Missing localized entries fall back to Korean. Project and career slugs should match across locales.

To add a project, create a Markdown file under `content/ko/projects/` with frontmatter matching the project schema in `content.config.ts`; add the same slug under `content/en/projects/` when translated. Project pages are generated for each locale.

## Add a locale

Add the locale to the `contentLocales` array in `locales.ts`, create its translation file, and add localized content under `content/<locale>/`. The array drives i18n, collections, and routes. Existing Korean entries serve as fallbacks when translations are missing.
