<script setup lang="ts">
const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const localeHead = useLocaleHead({ seo: true })

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta,
  titleTemplate: title => (title ? `${title} · ${t('siteOwner')}` : t('siteOwner')),
}))

const nav = computed(() => [
  { to: localePath('/') + '#departures', icon: 'depart' as const, label: t('nav.departures'), sub: t('nav.departuresSub') },
  { to: localePath('/') + '#itinerary', icon: 'pass' as const, label: t('nav.itinerary'), sub: t('nav.itinerarySub') },
  { to: localePath('/archive'), icon: 'arrive' as const, label: t('nav.arrivals'), sub: t('nav.arrivalsSub') },
  { to: localePath('/') + '#contact', icon: 'info' as const, label: t('nav.info'), sub: t('nav.infoSub') },
])
</script>

<template>
  <div class="shell">
    <a class="skip" href="#main">{{ t('skip') }}</a>
    <header class="way">
      <div class="wrap way-inner">
        <NuxtLink :to="localePath('/')" class="id">
          <span class="badge mono">EJK</span>
          <span>{{ t('siteOwner') }}</span>
        </NuxtLink>
        <nav :aria-label="t('navigation')" class="links">
          <NuxtLink v-for="item in nav" :key="item.icon" :to="item.to" class="link">
            <AppIcon :name="item.icon" class="link-pict" />
            <span class="link-text">{{ item.label }}<small>{{ item.sub }}</small></span>
          </NuxtLink>
        </nav>
        <nav :aria-label="t('language')" class="lang mono">
          <NuxtLink
            v-for="language in locales"
            :key="language.code"
            :to="switchLocalePath(language.code)"
            :lang="language.language"
            :aria-current="locale === language.code ? 'true' : undefined"
          >
            {{ language.code.toUpperCase() }}
          </NuxtLink>
        </nav>
      </div>
    </header>
    <main id="main">
      <slot />
    </main>
    <footer class="wrap foot">
      <span>© 2026 {{ t('footer.rights') }}</span>
      <span class="mono">EJK · ICN</span>
    </footer>
  </div>
</template>

<style scoped>
.skip { position: absolute; left: 12px; top: -60px; z-index: 50; background: var(--color-sign); color: var(--color-sign-ink); padding: 10px 16px; border-radius: 6px; font-weight: 700; }
.skip:focus { top: 12px; }
.way { position: sticky; top: 0; z-index: 20; background: rgb(10 12 15 / 0.92); backdrop-filter: blur(10px); border-bottom: 1px solid var(--color-seam); }
.way-inner { display: flex; align-items: stretch; justify-content: space-between; height: 64px; }
.id { display: flex; align-items: center; gap: 12px; font-weight: 800; font-size: 17px; text-decoration: none; color: var(--color-ink); }
.badge { display: inline-grid; place-items: center; height: 32px; padding: 0 9px; border-radius: 4px; background: var(--color-sign); color: var(--color-sign-ink); font-size: 14px; font-weight: 700; letter-spacing: 0.04em; }
.links { display: flex; margin-left: auto; }
.link { display: flex; align-items: center; gap: 10px; padding: 0 18px; text-decoration: none; color: var(--color-ink); font-weight: 700; font-size: 15px; border-left: 1px solid var(--color-seam); transition: background 0.15s; }
.link:hover { background: var(--color-board-2); }
.link-pict { font-size: 20px; color: var(--color-sign); }
.link-text small { display: block; font-size: 11px; font-weight: 500; color: var(--color-ink-3); margin-top: 1px; }
.lang { display: flex; align-items: center; gap: 4px; padding-left: 16px; border-left: 1px solid var(--color-seam); font-size: 13px; font-weight: 700; }
.lang a { padding: 6px 8px; border-radius: 4px; color: var(--color-ink-3); text-decoration: none; }
.lang a[aria-current] { color: var(--color-sign-ink); background: var(--color-ink); }
.lang a:not([aria-current]):hover { color: var(--color-ink); }
.foot { display: flex; justify-content: space-between; padding-block: 32px 56px; font-size: 13px; color: var(--color-ink-3); }
@media (max-width: 860px) {
  .link-text { display: none; }
  .link { padding: 0 13px; }
  .link-pict { font-size: 22px; }
  .id > span:last-child { display: none; }
}
</style>
