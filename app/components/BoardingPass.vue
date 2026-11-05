<script setup lang="ts">
type Leg = { code: string, company: string, role: string, period: { start: string, end?: string }, summary: string, highlights: string[] }
const props = defineProps<{
  passenger: string
  legs: Leg[]
  education: { school: string, status: string }[]
}>()
const { t } = useI18n()
const ordered = computed(() => [...props.legs].reverse())
</script>

<template>
  <div class="pass">
    <div class="main">
      <div class="top">
        <b>{{ t('itinerary.pass') }} · Boarding pass</b>
        <span class="mono">{{ t('itinerary.passenger') }} {{ passenger }}</span>
      </div>
      <ol class="legs">
        <li v-for="(leg, i) in ordered" :key="leg.code" class="leg" :class="{ now: i === ordered.length - 1, last: i === ordered.length - 1 }">
          <span class="ap mono">{{ leg.code }}</span>
          <h3>{{ leg.company }}</h3>
          <span class="yr mono">{{ fmtPeriod(leg.period, t('itinerary.present')) }}</span>
          <span class="role">{{ leg.role }}</span>
        </li>
      </ol>
    </div>
    <aside class="stub">
      <dl>
        <div><dt>{{ t('itinerary.class') }}</dt><dd>{{ t('itinerary.classValue') }}</dd></div>
        <div><dt>{{ t('itinerary.years') }}</dt><dd class="mono">{{ t('itinerary.yearsValue') }}</dd></div>
        <div class="wide"><dt>{{ t('itinerary.edu') }}</dt><dd>{{ education[0]?.school }} <small>{{ education[0]?.status }}</small></dd></div>
      </dl>
    </aside>
  </div>
</template>

<style scoped>
.pass { display: grid; grid-template-columns: 1fr 300px; background: var(--color-paper); color: var(--color-paper-ink); border-radius: 16px; box-shadow: 0 30px 60px -40px rgb(0 0 0 / 0.9); }
.main { padding: 28px 34px 32px; }
.top { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding-bottom: 16px; border-bottom: 1px solid var(--color-paper-rule); }
.top b { font-family: var(--font-latin); font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; }
.top span { font-size: 13px; color: var(--color-paper-ink-2); }
.legs { list-style: none; margin: 24px 0 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); }
.leg { position: relative; padding-right: 20px; display: grid; align-content: start; gap: 4px; }
.leg:not(.last)::after { content: ""; position: absolute; top: 22px; left: 96px; right: 16px; border-top: 2px dashed var(--color-paper-rule); }
.ap { font-size: clamp(32px, 4vw, 44px); font-weight: 700; letter-spacing: -0.03em; line-height: 1; justify-self: start; }
.now .ap { background: var(--color-sign); padding: 2px 8px; border-radius: 4px; margin-left: -8px; }
.leg h3 { font-size: 18px; font-weight: 800; margin-top: 12px; letter-spacing: -0.02em; }
.yr { font-size: 13px; color: var(--color-paper-ink-2); }
.role { font-size: 14px; color: var(--color-paper-ink-2); }
.stub { position: relative; border-left: 2px dashed var(--color-paper-rule); padding: 28px; background: #ebe8e1; border-radius: 0 16px 16px 0; }
.stub::before, .stub::after { content: ""; position: absolute; left: -13px; width: 24px; height: 24px; border-radius: 50%; background: var(--color-concourse); }
.stub::before { top: -12px; } .stub::after { bottom: -12px; }
dl { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin: 0; }
dl .wide { grid-column: 1 / -1; }
dt { font-family: var(--font-latin); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-paper-ink-2); font-weight: 700; }
dd { margin: 4px 0 0; font-size: 17px; font-weight: 800; }
dd small { display: block; font-size: 13px; font-weight: 500; color: var(--color-paper-ink-2); margin-top: 2px; }
@media (max-width: 860px) {
  .pass { grid-template-columns: 1fr; }
  .main { padding: 22px; }
  .legs { grid-template-columns: 1fr; gap: 20px; }
  .leg::after { display: none; }
  .stub { border-left: 0; border-top: 2px dashed var(--color-paper-rule); border-radius: 0 0 16px 16px; }
  .stub::before, .stub::after { display: none; }
}
</style>
