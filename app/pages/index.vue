<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const [{ data: profile, error: profileError }, { data: projects, error: projectsError }, { data: career, error: careerError }] = await Promise.all([
  useProfile(),
  useProjects(),
  useCareer(),
])
if (profileError.value || projectsError.value || careerError.value) {
  throw profileError.value || projectsError.value || careerError.value
}

const featured = computed(() => (projects.value ?? []).filter(p => p.tier === 'featured' || (p.tier === 'more' && p.kind === 'personal')))
const company = computed(() => (projects.value ?? []).filter(p => p.tier === 'more' && p.kind !== 'personal'))
const groups = computed(() => [
  { label: t('board.featured'), rows: featured.value },
  { label: t('board.company'), rows: company.value },
])
const gates = computed(() => [...featured.value, ...company.value].filter(p => p.cover))

const AIRPORT: Record<string, string> = { wonderslab: 'WDL', interpass: 'IPS', techplex: 'TPX' }
const legs = computed(() => (career.value ?? []).map(c => ({ ...c, code: AIRPORT[slugOf(c.path)] ?? 'EJK' })))
const latest = computed(() => legs.value[0])
const github = computed(() => profile.value?.links.find(l => l.label === 'GitHub'))

useSeoMeta({
  title: () => t('portfolio'),
  description: () => profile.value?.intro,
  ogTitle: () => `${t('portfolio')} · ${t('siteOwner')}`,
  ogDescription: () => profile.value?.intro,
  ogImage: () => new URL('/og/default.png', config.public.siteUrl).href,
  ogLocale: () => t('ogLocale'),
})
</script>

<template>
  <div v-if="profile" class="wrap home">
    <section class="hero">
      <div class="hero-copy">
        <h1>{{ profile.headline }}</h1>
        <p class="who latin">
          {{ profile.name }} <span aria-hidden="true">·</span> {{ t('checkin.careerValue') }}
        </p>
        <p class="intro">
          {{ profile.intro }}
        </p>
      </div>
      <aside class="checkin" :aria-label="t('checkin.title')">
        <h2 class="latin">
          {{ t('checkin.title') }}
        </h2>
        <dl>
          <dt>{{ t('checkin.career') }}</dt><dd>{{ t('checkin.careerValue') }}</dd>
          <dt>{{ t('checkin.last') }}</dt><dd>{{ latest?.company }} <span class="mono dim">{{ fmtPeriod(latest?.period) }}</span></dd>
          <dt>{{ t('checkin.main') }}</dt><dd>{{ t('checkin.mainValue') }}</dd>
          <dt>{{ t('checkin.recent') }}</dt><dd>{{ t('checkin.recentValue') }}</dd>
          <dt>{{ t('checkin.contact') }}</dt><dd><a :href="`mailto:${profile.email}`">{{ profile.email }}</a></dd>
        </dl>
      </aside>
    </section>

    <div id="departures" class="anchor">
      <DepartureBoard :groups="groups" />
    </div>

    <section v-if="gates.length" class="block" aria-labelledby="gates">
      <div class="sec-title">
        <span class="pict"><AppIcon name="gate" /></span>
        <div><small>{{ t('gates.sub') }}</small><h2 id="gates">{{ t('gates.title') }}</h2></div>
      </div>
      <ul class="gates">
        <li v-for="p in gates" :key="p.code">
          <NuxtLink :to="localePath(`/projects/${slugOf(p.path)}`)" class="gate">
            <span class="shot"><img :src="p.cover" :alt="p.images?.[0]?.alt ?? ''" loading="lazy" decoding="async"></span>
            <span class="gate-meta"><b>{{ p.title }}</b><span class="mono">{{ p.code }}</span></span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <section id="itinerary" class="block anchor" aria-labelledby="itin">
      <div class="sec-title">
        <span class="pict"><AppIcon name="pass" /></span>
        <div><small>{{ t('itinerary.sub') }}</small><h2 id="itin">{{ t('itinerary.title') }}</h2></div>
      </div>
      <BoardingPass :passenger="profile.name" :legs="legs" :education="profile.education ?? []" />
      <div class="legs-detail">
        <article v-for="leg in legs" :key="leg.code" class="leg">
          <header>
            <span class="mono code">{{ leg.code }}</span>
            <h3>{{ leg.company }}</h3>
            <span class="mono period">{{ fmtPeriod(leg.period, t('itinerary.present')) }}</span>
          </header>
          <p class="summary">
            {{ leg.summary }}
          </p>
          <ul>
            <li v-for="h in leg.highlights" :key="h">
              {{ h }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="block two" aria-label="stack and documents">
      <div>
        <div class="sec-title">
          <span class="pict"><AppIcon name="bag" /></span>
          <div><small>{{ t('stack.sub') }}</small><h2>{{ t('stack.title') }}</h2></div>
        </div>
        <dl class="stack">
          <div v-for="g in profile.skills" :key="g.group">
            <dt>{{ g.group }}</dt>
            <dd><span v-for="s in g.items" :key="s" class="tag">{{ s }}</span></dd>
          </div>
        </dl>
      </div>
      <div>
        <div class="sec-title">
          <span class="pict"><AppIcon name="globe" /></span>
          <div><small>{{ t('credentials.sub') }}</small><h2>{{ t('credentials.title') }}</h2></div>
        </div>
        <ul class="docs">
          <li v-for="e in profile.education ?? []" :key="e.school">
            <span class="mono when">{{ fmtPeriod(e.period, '') }}</span>
            <span><b>{{ e.school }}</b> <small>{{ e.major }} · {{ e.status }}</small></span>
          </li>
          <li v-for="c in profile.certifications ?? []" :key="c.title">
            <span class="mono when">{{ fmtMonth(c.date) }}</span>
            <span><b>{{ c.title }}</b> <small>{{ c.issuer }}</small></span>
          </li>
        </ul>
      </div>
    </section>

    <section id="contact" class="block anchor">
      <a class="sign" :href="`mailto:${profile.email}`">
        <span class="sign-pict"><AppIcon name="mail" /></span>
        <span class="sign-text">
          <small>{{ t('contact.label') }} · {{ t('contact.lead') }}</small>
          <strong>{{ profile.email }}</strong>
        </span>
        <AppIcon name="right" class="sign-arrow" />
      </a>
      <p v-if="github" class="also">
        <a :href="github.url" rel="noopener" target="_blank">{{ t('contact.github') }} <AppIcon name="external" /></a>
      </p>
    </section>
  </div>
</template>

<style scoped>
.home { padding-top: clamp(40px, 7vw, 88px); }
.anchor { scroll-margin-top: 84px; }
.hero { display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 48px; align-items: end; margin-bottom: 44px; }
.hero h1 { font-size: clamp(40px, 6.2vw, 84px); font-weight: 800; line-height: 1.04; letter-spacing: -0.045em; max-width: 15ch; }
.who { margin-top: 18px; font-size: clamp(16px, 1.6vw, 20px); font-weight: 700; color: var(--color-ink-2); }
.intro { margin-top: 20px; max-width: 62ch; font-size: 17px; line-height: 1.8; color: var(--color-ink-2); }
.checkin { background: var(--color-board); border: 1px solid var(--color-seam); border-radius: 12px; padding: 22px 24px; }
.checkin h2 { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-ink-3); }
.checkin dl { display: grid; grid-template-columns: auto 1fr; gap: 12px 18px; margin: 16px 0 0; font-size: 15px; }
.checkin dt { color: var(--color-ink-3); }
.checkin dd { margin: 0; font-weight: 700; }
.checkin a { color: var(--color-sign); }
.checkin .dim { font-size: 13px; font-weight: 500; color: var(--color-ink-3); margin-left: 4px; }

.block { margin-top: clamp(80px, 10vw, 128px); }
.block > .sec-title, .two .sec-title { margin-bottom: 28px; }

.gates { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.gate { display: block; text-decoration: none; color: inherit; border-radius: 10px; overflow: hidden; background: var(--color-board); border: 1px solid var(--color-seam); transition: transform 0.4s var(--ease-out-expo), border-color 0.2s; }
.gate:hover { transform: translateY(-4px); border-color: var(--color-ink-3); }
.shot { display: block; aspect-ratio: 16 / 10; overflow: hidden; background: var(--color-cell); }
.shot img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }
.gate-meta { display: flex; justify-content: space-between; align-items: center; gap: 10px; padding: 12px 14px; }
.gate-meta b { font-size: 15px; font-weight: 750; line-height: 1.35; }
.gate-meta span { font-size: 12px; font-weight: 700; padding: 3px 7px; border-radius: 4px; background: var(--color-cell); color: var(--color-flap); flex: none; }

.legs-detail { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; margin-top: 36px; }
.leg header { display: grid; grid-template-columns: auto 1fr; column-gap: 12px; align-items: baseline; }
.leg .code { grid-row: span 2; font-size: 14px; font-weight: 700; color: var(--color-sign-ink); background: var(--color-flap); padding: 2px 7px; border-radius: 4px; align-self: center; }
.leg h3 { font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
.leg .period { font-size: 13px; color: var(--color-ink-3); }
.leg .summary { margin-top: 14px; font-size: 15px; line-height: 1.7; color: var(--color-ink); }
.leg ul { margin: 14px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.leg li { position: relative; padding-left: 16px; font-size: 14px; line-height: 1.65; color: var(--color-ink-2); }
.leg li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 6px; height: 2px; background: var(--color-flap); }

.two { display: grid; grid-template-columns: 1.2fr 1fr; gap: 64px; }
.stack { margin: 0; display: grid; gap: 18px; }
.stack div { display: grid; grid-template-columns: 9em 1fr; gap: 16px; align-items: baseline; border-top: 1px solid var(--color-seam); padding-top: 14px; }
.stack dt { font-size: 13px; font-weight: 700; color: var(--color-ink-3); letter-spacing: 0.04em; }
.stack dd { margin: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.tag { font-size: 14px; font-weight: 600; padding: 5px 10px; border-radius: 5px; background: var(--color-board-2); border: 1px solid var(--color-seam); }
.docs { list-style: none; margin: 0; padding: 0; display: grid; }
.docs li { display: grid; grid-template-columns: 9.5em 1fr; gap: 16px; padding: 14px 0; border-top: 1px solid var(--color-seam); font-size: 15px; line-height: 1.5; }
.docs .when { font-size: 13px; color: var(--color-ink-3); padding-top: 2px; }
.docs small { display: block; color: var(--color-ink-2); font-size: 13px; margin-top: 2px; }

.sign { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 28px; padding: clamp(24px, 3vw, 38px) clamp(22px, 3.5vw, 44px); background: var(--color-sign); color: var(--color-sign-ink); border-radius: 12px; text-decoration: none; transition: filter 0.2s; }
.sign:hover { filter: brightness(1.05); }
.sign:hover .sign-arrow { transform: translateX(6px); }
.sign-pict { display: grid; place-items: center; width: 72px; height: 72px; border-radius: 8px; background: var(--color-sign-ink); color: var(--color-sign); font-size: 36px; }
.sign-text small { display: block; font-size: 15px; font-weight: 700; }
.sign-text strong { display: block; margin-top: 6px; font-family: var(--font-latin); font-size: clamp(26px, 4.4vw, 52px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.05; overflow-wrap: anywhere; }
.sign-arrow { font-size: 52px; transition: transform 0.4s var(--ease-out-expo); }
.also { margin-top: 18px; font-size: 15px; font-weight: 700; }
.also a { display: inline-flex; align-items: center; gap: 6px; color: var(--color-ink-2); }
.also a:hover { color: var(--color-ink); }

@media (max-width: 1080px) {
  .gates { grid-template-columns: repeat(2, 1fr); }
  .legs-detail { grid-template-columns: 1fr; gap: 28px; }
}
@media (max-width: 860px) {
  .hero { grid-template-columns: 1fr; gap: 28px; }
  .two { grid-template-columns: 1fr; gap: 72px; }
  .stack div, .docs li { grid-template-columns: 1fr; gap: 8px; }
  .sign { grid-template-columns: auto 1fr; gap: 18px; }
  .sign-pict { width: 52px; height: 52px; font-size: 26px; }
  .sign-arrow { display: none; }
}
@media (max-width: 520px) {
  .gates { grid-template-columns: 1fr; }
}
</style>
