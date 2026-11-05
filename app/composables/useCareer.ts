import type { Collections } from '@nuxt/content'

type CareerCollection = Extract<keyof Collections, `career_${string}`>

export function useCareer() {
  const { locale } = useI18n()
  return useAsyncData(computed(() => `career:${locale.value}`), async () => {
    const localized = await queryCollection(`career_${locale.value}` as CareerCollection).all()
    const fallback = locale.value === 'ko' ? [] : await queryCollection('career_ko').all()
    const careers = new Map(fallback.map(career => [career.path, career]))
    for (const career of localized) careers.set(career.path, career)
    return [...careers.values()].sort((a, b) => a.order - b.order)
  })
}
