import type { Collections } from '@nuxt/content'

type ProjectCollection = Extract<keyof Collections, `projects_${string}`>
type ProjectTier = 'featured' | 'more' | 'archive'

export function useProjects(options: { tier?: ProjectTier } = {}) {
  const { locale } = useI18n()
  return useAsyncData(computed(() => `projects:${locale.value}:${options.tier ?? 'all'}`), async () => {
    const localized = await queryCollection(`projects_${locale.value}` as ProjectCollection).all()
    const fallback = locale.value === 'ko' ? [] : await queryCollection('projects_ko').all()
    // Paths are shared across localized collections; localized entries override Korean ones.
    const projects = new Map(fallback.map(project => [project.path, project]))
    for (const project of localized) projects.set(project.path, project)
    return [...projects.values()]
      .filter(project => !options.tier || project.tier === options.tier)
      .sort((a, b) => a.order - b.order)
  })
}
