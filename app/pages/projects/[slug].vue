<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const slug = computed(() => String(route.params.slug))
const { data: project, error, status } = await useProject(slug)
const { data: all } = await useProjects()

if (error.value) throw error.value
if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

// A slug change can reuse this page instance during client-side navigation.
watch(status, (value) => {
  if (value === 'error' && error.value) showError(error.value)
  if (value === 'success' && !project.value) {
    showError(createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true }))
  }
})

const siblings = computed(() => (all.value ?? []).filter(p => p.tier === project.value?.tier))
const idx = computed(() => siblings.value.findIndex(p => p.code === project.value?.code))
const prev = computed(() => (idx.value > 0 ? siblings.value[idx.value - 1] : undefined))
const next = computed(() => (idx.value >= 0 ? siblings.value[idx.value + 1] : undefined))
const backTo = computed(() => (project.value?.tier === 'archive' ? localePath('/archive') : localePath('/') + '#departures'))

useSeoMeta({
  title: () => project.value?.title,
  description: () => project.value?.summary,
  ogTitle: () => `${project.value?.title} · ${t('siteOwner')}`,
  ogDescription: () => project.value?.summary,
  ogImage: () => new URL(project.value?.cover || '/og/default.png', config.public.siteUrl).href,
  ogLocale: () => t('ogLocale'),
})
</script>

<template>
  <article v-if="project" class="wrap flight">
    <NuxtLink :to="backTo" class="back">
      <AppIcon name="left" /> {{ project.tier === 'archive' ? t('nav.arrivals') : t('backHome') }}
    </NuxtLink>

    <header class="ticket">
      <div class="ticket-main">
        <div class="ticket-top">
          <b class="latin">Boarding pass</b>
          <span class="status-dot" :class="`tone-${project.status.tone}`">{{ project.status.label }}</span>
        </div>
        <h1>{{ project.title }}</h1>
        <p class="summary">
          {{ project.summary }}
        </p>
        <dl class="fields">
          <div v-if="project.period">
            <dt>{{ t('project.period') }}</dt><dd class="mono">{{ project.period.start === project.period.end ? fmtMonth(project.period.start) : fmtPeriod(project.period) }}</dd>
          </div>
          <div><dt>{{ t('project.gate') }}</dt><dd class="mono">{{ gateOf(project.platforms) }}</dd></div>
          <div><dt>{{ t('project.seat') }}</dt><dd>{{ project.role }}</dd></div>
          <div><dt>{{ t('project.class') }}</dt><dd>{{ t(`kind.${project.kind}`) }}</dd></div>
        </dl>
      </div>
      <div class="stub">
        <span class="stub-label latin">{{ t('project.flight') }}</span>
        <SplitFlap class="stub-flap" :text="project.code" />
        <ul class="stub-stack">
          <li v-for="s in project.stack" :key="s">
            {{ s }}
          </li>
        </ul>
      </div>
    </header>

    <ul v-if="project.metrics?.length" class="metrics">
      <li v-for="m in project.metrics" :key="m.label">
        <b class="mono">{{ m.value }}</b><span>{{ m.label }}</span>
      </li>
    </ul>

    <section v-if="project.images?.length" class="claim" aria-labelledby="claim">
      <div class="sec-title">
        <span class="pict"><AppIcon name="bag" /></span>
        <div><small>{{ t('project.gallerySub') }}</small><h2 id="claim">{{ t('project.gallery') }}</h2></div>
      </div>
      <ul class="belt">
        <li v-for="img in project.images" :key="img.src">
          <figure>
            <img :src="img.src" :alt="img.alt" loading="lazy" decoding="async">
            <figcaption>{{ img.caption || img.alt }}</figcaption>
          </figure>
        </li>
      </ul>
    </section>

    <div class="body">
      <div class="prose">
        <ContentRenderer :value="project" />
      </div>
      <aside class="side">
        <div v-if="project.links?.length">
          <h2 class="side-h latin">
            {{ t('project.links') }}
          </h2>
          <ul class="links">
            <li v-for="l in project.links" :key="l.url">
              <a :href="l.url" target="_blank" rel="noopener">{{ l.label }} <AppIcon name="external" /></a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <nav class="pager" :aria-label="t('projects')">
      <NuxtLink v-if="prev" :to="localePath(`/projects/${slugOf(prev.path)}`)" class="pg">
        <small><AppIcon name="left" /> {{ t('project.prev') }} · <span class="mono">{{ prev.code }}</span></small>
        <b>{{ prev.title }}</b>
      </NuxtLink>
      <span v-else />
      <NuxtLink v-if="next" :to="localePath(`/projects/${slugOf(next.path)}`)" class="pg nx">
        <small><span class="mono">{{ next.code }}</span> · {{ t('project.next') }} <AppIcon name="right" /></small>
        <b>{{ next.title }}</b>
      </NuxtLink>
    </nav>
  </article>
</template>

<style scoped>
.flight { padding-top: 32px; }
.back { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; color: var(--color-ink-2); text-decoration: none; }
.back:hover { color: var(--color-ink); }

.ticket { margin-top: 20px; display: grid; grid-template-columns: 1fr 280px; background: var(--color-paper); color: var(--color-paper-ink); border-radius: 16px; box-shadow: 0 30px 60px -40px rgb(0 0 0 / 0.9); }
.ticket-main { padding: clamp(24px, 3.5vw, 44px); }
.ticket-top { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding-bottom: 16px; border-bottom: 1px solid var(--color-paper-rule); }
.ticket-top b { font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; }
.ticket-top .status-dot { font-size: 14px; }
.ticket-top .tone-go { color: #11804a; }
.ticket-top .tone-wait { color: #9a6a00; }
.ticket-top .tone-hold { color: var(--color-paper-ink-2); }
.ticket h1 { margin-top: 24px; font-size: clamp(36px, 5.4vw, 72px); font-weight: 800; letter-spacing: -0.045em; line-height: 1.05; }
.summary { margin-top: 14px; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.6; color: var(--color-paper-ink-2); max-width: 52ch; }
.fields { margin: 28px 0 0; display: grid; grid-template-columns: repeat(4, auto); justify-content: start; gap: 12px 40px; }
.fields dt { font-family: var(--font-latin); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-paper-ink-2); }
.fields dd { margin: 4px 0 0; font-size: 16px; font-weight: 800; }
.stub { position: relative; border-left: 2px dashed var(--color-paper-rule); background: #ebe8e1; border-radius: 0 16px 16px 0; padding: 28px; display: flex; flex-direction: column; gap: 14px; }
.stub::before, .stub::after { content: ""; position: absolute; left: -13px; width: 24px; height: 24px; border-radius: 50%; background: var(--color-concourse); }
.stub::before { top: -12px; } .stub::after { bottom: -12px; }
.stub-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-paper-ink-2); }
.stub-flap { font-size: 30px; --flap-w: 1.02em; --flap-h: 1.45em; --flap-bg: #1c2127; }
.stub-stack { list-style: none; margin: 8px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 6px; }
.stub-stack li { font-size: 13px; font-weight: 600; padding: 4px 8px; border-radius: 4px; background: var(--color-paper); border: 1px solid var(--color-paper-rule); }

.metrics { list-style: none; margin: 28px 0 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--color-seam); border-radius: 12px; background: var(--color-board); }
.metrics li { padding: 22px 26px; display: grid; gap: 4px; }
.metrics li + li { border-left: 1px solid var(--color-seam); }
.metrics b { font-size: clamp(30px, 3.6vw, 44px); color: var(--color-flap); letter-spacing: -0.03em; line-height: 1.1; }
.metrics span { font-size: 14px; color: var(--color-ink-2); }

.claim { margin-top: clamp(64px, 8vw, 96px); }
.claim .sec-title { margin-bottom: 24px; }
.belt { list-style: none; margin: 0 calc(-1 * clamp(18px, 4vw, 40px)); padding: 4px clamp(18px, 4vw, 40px) 16px; display: flex; gap: 18px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: thin; }
.belt li { flex: none; scroll-snap-align: start; }
.belt figure { margin: 0; }
.belt img { display: block; height: clamp(260px, 44vw, 560px); width: auto; max-width: 88vw; object-fit: contain; border-radius: 10px; border: 1px solid var(--color-seam); background: var(--color-cell); }
.belt figcaption { margin-top: 10px; font-size: 13px; color: var(--color-ink-2); max-width: 60ch; }

.body { margin-top: clamp(64px, 8vw, 96px); display: grid; grid-template-columns: minmax(0, 70ch) 1fr; gap: 64px; }
.side { display: grid; align-content: start; gap: 28px; }
.side-h { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-ink-3); margin-bottom: 10px; }
.links { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.links a { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; color: var(--color-sign); }

.prose :deep(h2) { font-size: 24px; font-weight: 800; letter-spacing: -0.02em; margin: 48px 0 14px; padding-top: 18px; border-top: 1px solid var(--color-seam); }
.prose :deep(h2:first-child) { margin-top: 0; }
.prose :deep(p), .prose :deep(li) { font-size: 17px; line-height: 1.85; color: #d5dadf; }
.prose :deep(p + p) { margin-top: 14px; }
.prose :deep(ul) { margin: 12px 0 0; padding-left: 0; list-style: none; display: grid; gap: 12px; }
.prose :deep(li) { position: relative; padding-left: 20px; }
.prose :deep(li)::before { content: ""; position: absolute; left: 0; top: 0.85em; width: 8px; height: 2px; background: var(--color-flap); }
.prose :deep(strong) { color: var(--color-ink); font-weight: 800; }
.prose :deep(code) { background: var(--color-cell); padding: 2px 6px; border-radius: 4px; color: var(--color-flap); }
.prose :deep(small) { display: block; margin-top: 32px; font-size: 13px; color: var(--color-ink-3); }
.prose :deep(a) { color: var(--color-sign); }
.prose :deep(h2 a) { color: inherit; text-decoration: none; }

.pager { margin-top: clamp(72px, 9vw, 112px); display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.pg { display: grid; gap: 6px; padding: 20px 22px; border: 1px solid var(--color-seam); border-radius: 12px; background: var(--color-board); text-decoration: none; color: inherit; transition: border-color 0.2s, background 0.2s; }
.pg:hover { border-color: var(--color-ink-3); background: var(--color-board-2); }
.pg small { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--color-ink-3); font-weight: 700; }
.pg b { font-size: 18px; font-weight: 800; letter-spacing: -0.02em; }
.nx { text-align: right; justify-items: end; }

@media (max-width: 960px) {
  .ticket { grid-template-columns: 1fr; }
  .stub { border-left: 0; border-top: 2px dashed var(--color-paper-rule); border-radius: 0 0 16px 16px; }
  .stub::before, .stub::after { display: none; }
  .fields { grid-template-columns: repeat(2, auto); }
  .body { grid-template-columns: 1fr; gap: 40px; }
  .side { order: -1; }
}
@media (max-width: 620px) {
  .metrics { grid-template-columns: 1fr; }
  .metrics li + li { border-left: 0; border-top: 1px solid var(--color-seam); }
  .fields { grid-template-columns: 1fr 1fr; gap: 14px 20px; }
  .pager { grid-template-columns: 1fr; }
  .nx { text-align: left; justify-items: start; }
}
</style>
