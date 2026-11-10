import { readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { contentLocales } from './locales'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://portfolio-sage-two-91.vercel.app'
const slugs = new Set<string>()
for (const locale of contentLocales) {
  const directory = join(process.cwd(), 'content', locale, 'projects')
  if (existsSync(directory)) {
    for (const file of readdirSync(directory)) {
      if (file.endsWith('.md')) slugs.add(file.slice(0, -3))
    }
  }
}
const projectRoutes = contentLocales.flatMap(locale =>
  [...slugs].map(slug => `${locale === 'ko' ? '' : `/${locale}`}/projects/${slug}`),
)

export default defineNuxtConfig({
  compatibilityDate: '2026-11-05',
  modules: ['@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  runtimeConfig: { public: { siteUrl } },
  site: { url: siteUrl },
  i18n: {
    baseUrl: siteUrl,
    locales: contentLocales.map(code => ({ code, language: code, file: `${code}.json` })),
    defaultLocale: 'ko',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: { useCookie: true, cookieKey: 'i18n_redirected', redirectOn: 'root' },
  },
  nitro: { prerender: { routes: projectRoutes } },
  sitemap: { urls: projectRoutes },
  app: { head: { link: [{ rel: 'icon', href: '/favicons/favicon.ico' }] } },
})
