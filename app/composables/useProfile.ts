import type { Collections } from '@nuxt/content'

type ProfileCollection = Extract<keyof Collections, `profile_${string}`>

export function useProfile() {
  const { locale } = useI18n()
  return useAsyncData(computed(() => `profile:${locale.value}`), async () => {
    const profile = await queryCollection(`profile_${locale.value}` as ProfileCollection).first()
    if (profile) return profile
    if (locale.value !== 'ko') {
      const fallback = await queryCollection('profile_ko').first()
      if (fallback) return fallback
    }
    throw new Error(`No profile found for ${locale.value} or ko`)
  })
}
