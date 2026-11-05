<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const localeHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
  titleTemplate: title => title
    ? `${title} · ${t('siteOwner')}`
    : t('siteOwner'),
}))

useSeoMeta({
  title: () => t('error'),
  description: () => t('errorDescription'),
  ogImage: () => new URL('/og/default.png', config.public.siteUrl).href,
  ogLocale: () => t('ogLocale'),
})
</script>

<template>
  <main class="err wrap">
    <SplitFlap class="err-flap" :text="error.statusCode === 404 ? 'GATE 404' : `ERR ${error.statusCode}`" />
    <h1>{{ error.statusCode === 404 ? t('notFound') : t('errorDescription') }}</h1>
    <NuxtLink :to="localePath('/')" class="err-link">
      <AppIcon name="left" /> {{ t('backHome') }}
    </NuxtLink>
  </main>
</template>

<style scoped>
.err { min-height: 100vh; display: grid; place-content: center; justify-items: start; gap: 24px; }
.err-flap { font-size: clamp(32px, 7vw, 72px); }
.err h1 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; letter-spacing: -0.03em; }
.err-link { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: var(--color-sign); }
</style>
