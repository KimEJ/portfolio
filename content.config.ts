import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { contentLocales } from './locales'

const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/)
const period = z.object({ start: month, end: month.optional() })
const link = z.object({ label: z.string(), url: z.string() })

const projectSchema = z.object({
  code: z.string().regex(/^EJ\d{3}$/),
  status: z.object({ label: z.string(), tone: z.enum(['go', 'wait', 'hold']) }),
  title: z.string(),
  summary: z.string().regex(/^[^\r\n]*$/),
  kind: z.enum(['personal', 'client', 'company']),
  tier: z.enum(['featured', 'more', 'archive']),
  order: z.number(),
  period: period.optional(),
  role: z.string(),
  team: z.string().optional(),
  stack: z.array(z.string()),
  platforms: z.array(z.enum(['web', 'macos', 'ios', 'android', 'desktop', 'edge', 'server'])),
  cover: z.string().optional(),
  images: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).default([]),
  links: z.array(link).default([]),
  anonymized: z.boolean().default(false),
  metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
})

const careerSchema = z.object({
  company: z.string(),
  role: z.string(),
  period,
  summary: z.string(),
  order: z.number(),
  highlights: z.array(z.string()),
  projects: z.array(z.string()).optional(),
})

const profileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  intro: z.string(),
  location: z.string(),
  email: z.string(),
  links: z.array(link),
  skills: z.array(z.object({ group: z.string(), items: z.array(z.string()) })),
  education: z.array(z.object({ school: z.string(), major: z.string(), period, status: z.string() })).default([]),
  certifications: z.array(z.object({ date: month, title: z.string(), issuer: z.string() })).default([]),
})

function projectCollection(locale: string) {
  return defineCollection({ type: 'page', source: { include: `${locale}/projects/*.md`, prefix: '/projects' }, schema: projectSchema })
}
function careerCollection(locale: string) {
  return defineCollection({ type: 'page', source: { include: `${locale}/career/*.md`, prefix: '/career' }, schema: careerSchema })
}
function profileCollection(locale: string) {
  return defineCollection({ type: 'data', source: `${locale}/profile.yml`, schema: profileSchema })
}

type Locale = typeof contentLocales[number]
type LocalizedCollections = {
  [K in `projects_${Locale}`]: ReturnType<typeof projectCollection>
} & {
  [K in `career_${Locale}`]: ReturnType<typeof careerCollection>
} & {
  [K in `profile_${Locale}`]: ReturnType<typeof profileCollection>
}

// Nuxt Content recommends a separate collection for each language.
const collections = Object.fromEntries(contentLocales.flatMap(locale => [
  [`projects_${locale}`, projectCollection(locale)],
  [`career_${locale}`, careerCollection(locale)],
  [`profile_${locale}`, profileCollection(locale)],
])) as LocalizedCollections

export default defineContentConfig({ collections })
