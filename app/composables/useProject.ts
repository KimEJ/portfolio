import type { Collections } from '@nuxt/content'
import type { MaybeRefOrGetter } from 'vue'

type ProjectCollection = Extract<keyof Collections, `projects_${string}`>

export function useProject(slug: MaybeRefOrGetter<string>) {
  const { locale } = useI18n()
  const currentSlug = computed(() => toValue(slug))
  return useAsyncData(computed(() => `project:${locale.value}:${currentSlug.value}`), async () => {
    if (!currentSlug.value || currentSlug.value.includes('/')) return null
    const path = `/projects/${currentSlug.value}`
    const project = await queryCollection(`projects_${locale.value}` as ProjectCollection).path(path).first()
    if (project || locale.value === 'ko') return project
    return queryCollection('projects_ko').path(path).first()
  })
}
