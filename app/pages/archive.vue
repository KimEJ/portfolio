<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const { data: projects, error } = await useProjects({ tier: 'archive' })
if (error.value) throw error.value

const company = computed(() => (projects.value ?? []).filter(p => p.kind !== 'personal'))
const personal = computed(() => (projects.value ?? []).filter(p => p.kind === 'personal'))
const groups = computed(() => [
  { label: t('kind.company'), rows: company.value },
  { label: t('kind.personal'), rows: personal.value },
].filter(g => g.rows.length))

useSeoMeta({
  title: () => t('archive'),
  description: () => t('archiveDescription'),
  ogTitle: () => `${t('archive')} · ${t('siteOwner')}`,
  ogDescription: () => t('archiveDescription'),
  ogImage: () => new URL('/og/default.png', config.public.siteUrl).href,
  ogLocale: () => t('ogLocale'),
})
</script>

<template>
  <div class="wrap arrivals">
    <p class="lead">
      {{ t('archiveDescription') }}
    </p>
    <DepartureBoard :groups="groups" mode="arrivals" heading-level="h1" />
  </div>
</template>

<style scoped>
.arrivals { padding-top: clamp(40px, 6vw, 72px); }
.lead { font-size: 17px; color: var(--color-ink-2); margin-bottom: 24px; max-width: 60ch; }
</style>
