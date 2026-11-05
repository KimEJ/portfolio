<script setup lang="ts">
type Row = {
  path: string
  code: string
  title: string
  summary: string
  period?: { start: string, end?: string }
  platforms: string[]
  status: { label: string, tone: 'go' | 'wait' | 'hold' }
}
type Group = { label: string, note?: string, rows: Row[] }

const props = withDefaults(defineProps<{
  groups: Group[]
  mode?: 'departures' | 'arrivals'
  headingLevel?: 'h1' | 'h2'
}>(), { mode: 'departures', headingLevel: 'h2' })

const { t } = useI18n()
const localePath = useLocalePath()
const replay = ref<Record<string, number>>({})
const bump = (code: string) => { replay.value[code] = (replay.value[code] ?? 0) + 1 }

const clock = ref('--:--')
let tick: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  const set = () => {
    clock.value = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit' })
  }
  set()
  tick = setInterval(set, 15000)
})
onBeforeUnmount(() => clearInterval(tick))

const isDep = computed(() => props.mode === 'departures')
const order = computed(() => Object.fromEntries(props.groups.flatMap(g => g.rows).map((r, i) => [r.code, i])))
const delayFor = (code: string, extra = 0) => (order.value[code] ?? 0) * 140 + extra
</script>

<template>
  <section class="fids" :aria-labelledby="`board-${mode}`">
    <header class="fids-head">
      <component :is="headingLevel" :id="`board-${mode}`" class="fids-title">
        <AppIcon :name="isDep ? 'depart' : 'arrive'" class="fids-pict" />
        <span>{{ isDep ? t('board.departures') : t('board.arrivals') }}</span>
        <small class="latin">{{ isDep ? t('board.departuresSub') : t('board.arrivalsSub') }}</small>
      </component>
      <div class="clock mono" aria-hidden="true">
        {{ clock }} <span>KST</span>
      </div>
    </header>

    <div class="cols" aria-hidden="true">
      <span>{{ t('board.flight') }}</span>
      <span>{{ t('board.destination') }}</span>
      <span class="hide-sm">{{ isDep ? t('board.time') : t('board.arrivedAt') }}</span>
      <span class="hide-sm">{{ t('board.gate') }}</span>
      <span>{{ t('board.status') }}</span>
    </div>

    <div v-for="group in groups" :key="group.label" class="group">
      <h3 v-if="groups.length > 1" class="group-label">
        {{ group.label }}<small v-if="group.note"> · {{ group.note }}</small>
      </h3>
      <ol>
        <li v-for="row in group.rows" :key="row.code">
          <NuxtLink
            :to="localePath(`/projects/${slugOf(row.path)}`)"
            class="row"
            @mouseenter="bump(row.code)"
            @focus="bump(row.code)"
          >
            <span class="code">
              <SplitFlap :text="row.code" :delay="delayFor(row.code)" />
            </span>
            <span class="dest">
              <SplitFlap class="dest-flap" :text="row.title" :delay="delayFor(row.code, 90)" :trigger="replay[row.code]" :min-steps="3" />
              <span class="dest-plain">{{ row.title }}</span>
              <small>{{ row.summary }}</small>
            </span>
            <span class="when mono hide-sm">{{ isDep ? fmtMonth(row.period?.start) : (row.period?.end ?? row.period?.start ?? '—').slice(0, 4) }}</span>
            <span class="gate mono hide-sm">{{ gateOf(row.platforms) }}</span>
            <span class="status-dot" :class="`tone-${row.status.tone}`">{{ row.status.label }}</span>
          </NuxtLink>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.fids {
  background: var(--color-board); border-radius: 14px; overflow: hidden;
  box-shadow: 0 40px 80px -50px rgb(0 0 0 / 0.9), inset 0 1px 0 rgb(255 255 255 / 0.04);
  border: 1px solid var(--color-seam);
}
.fids-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 28px; background: var(--color-concourse-2); border-bottom: 1px solid var(--color-seam); }
.fids-title { display: flex; align-items: center; gap: 14px; font-size: clamp(22px, 2.6vw, 30px); font-weight: 800; letter-spacing: -0.02em; }
.fids-title small { font-size: 14px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-ink-3); }
.fids-pict { font-size: 1.15em; color: var(--color-sign); }
.clock { font-size: clamp(18px, 2vw, 24px); font-weight: 700; color: var(--color-flap); letter-spacing: 0.04em; }
.clock span { font-size: 0.6em; color: var(--color-ink-3); }

.cols, .row {
  display: grid; align-items: center; gap: 20px;
  grid-template-columns: 7.2em minmax(0, 1fr) 6em 7.5em 9.5em;
  padding-inline: 28px;
}
.cols { padding-block: 12px; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-ink-3); border-bottom: 1px solid var(--color-seam); }
.group-label { padding: 18px 28px 8px; font-size: 13px; font-weight: 700; color: var(--color-ink-2); letter-spacing: 0.02em; border-top: 1px solid var(--color-seam); }
.group:first-of-type .group-label { border-top: 0; }
.group-label small { font-weight: 400; color: var(--color-ink-3); }
ol { list-style: none; margin: 0; padding: 0; }
li + li .row, .group-label + ol li:first-child .row { border-top: 1px solid var(--color-seam); }
.row { padding-block: 16px; text-decoration: none; color: inherit; transition: background 0.15s; }
.row:hover, .row:focus-visible { background: var(--color-board-2); }
.row:hover .dest-plain, .row:hover small { color: var(--color-ink); }
.code { font-size: 15px; --flap-w: 1.05em; --flap-h: 1.55em; }
.dest { display: grid; gap: 6px; min-width: 0; }
.dest-flap { font-size: 19px; --flap-w: 1.08em; --flap-h: 1.5em; --flap-gap: 2px; --flap-color: var(--color-ink); flex-wrap: wrap; row-gap: 3px; }
.dest-plain { display: none; font-size: 18px; font-weight: 750; letter-spacing: -0.02em; }
.dest small { font-size: 14px; color: var(--color-ink-2); line-height: 1.45; transition: color 0.15s; }
.when, .gate { font-size: 15px; font-weight: 700; color: var(--color-ink); }
.status-dot { font-size: 14px; }

@media (max-width: 960px) {
  .cols, .row { grid-template-columns: 5.6em minmax(0, 1fr) auto; gap: 14px; padding-inline: 16px; }
  .hide-sm { display: none; }
  .fids-head { padding: 16px; }
  .group-label { padding-inline: 16px; }
  .code { font-size: 12px; }
  .dest-flap { display: none; }
  .dest-plain { display: block; }
  .status-dot { font-size: 13px; }
}
@media (max-width: 520px) {
  .cols, .row { grid-template-columns: 1fr auto; }
  .cols span:first-child, .code { display: none; }
}
</style>
