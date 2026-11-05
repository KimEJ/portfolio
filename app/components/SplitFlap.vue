<script setup lang="ts">
// Solari-style split-flap text. Server renders the final text; on the client each cell
// flips through a few random glyphs of the same script before landing. `trigger` replays it.
const props = withDefaults(defineProps<{
  text: string
  delay?: number
  trigger?: number
  minSteps?: number
}>(), { delay: 0, trigger: 0, minSteps: 4 })

const POOLS = {
  hangul: '가나다라마바사아자차카타파하공항출발도착탑승구편명서울인천대전부산제주',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  digit: '0123456789',
}
const STEP_MS = 150

function poolFor(ch: string) {
  if (/[가-힣]/.test(ch)) return POOLS.hangul
  if (/[A-Z]/.test(ch)) return POOLS.upper
  if (/[a-z]/.test(ch)) return POOLS.lower
  if (/\d/.test(ch)) return POOLS.digit
  return ''
}

type Cell = { cur: string, prev: string, n: number }
const target = computed(() => [...props.text])
const cells = ref<Cell[]>(target.value.map(ch => ({ cur: ch, prev: ch, n: 0 })))
let timers: ReturnType<typeof setTimeout>[] = []

function flipTo(i: number, ch: string) {
  const cell = cells.value[i]
  if (!cell) return
  cell.prev = cell.cur
  cell.cur = ch
  cell.n++
}

function play() {
  if (!import.meta.client || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timers.forEach(clearTimeout)
  timers = []
  cells.value = target.value.map(ch => ({ cur: ch, prev: ch, n: 0 }))
  target.value.forEach((ch, i) => {
    const pool = poolFor(ch)
    if (!pool) return
    const steps = props.minSteps + Math.min(i, 6) + Math.floor(Math.random() * 3)
    for (let s = 0; s <= steps; s++) {
      const glyph = s === steps ? ch : pool[Math.floor(Math.random() * pool.length)]!
      timers.push(setTimeout(() => flipTo(i, glyph), props.delay + s * STEP_MS + i * 18))
    }
  })
}

onMounted(play)
watch(() => props.trigger, play)
watch(() => props.text, () => {
  cells.value = target.value.map(ch => ({ cur: ch, prev: ch, n: 0 }))
  play()
})
onBeforeUnmount(() => timers.forEach(clearTimeout))
defineExpose({ play })
</script>

<template>
  <span class="flap" :aria-label="text" role="text">
    <span
      v-for="(cell, i) in cells"
      :key="i"
      class="cell"
      :class="{ blank: cell.cur === ' ' }"
      aria-hidden="true"
    >
      <span class="h top"><b>{{ cell.cur }}</b></span>
      <span class="h bot"><b>{{ cell.prev }}</b></span>
      <template v-if="cell.n">
        <span :key="`t${cell.n}`" class="h top leaf"><b>{{ cell.prev }}</b></span>
        <span :key="`b${cell.n}`" class="h bot leaf2"><b>{{ cell.cur }}</b></span>
      </template>
    </span>
  </span>
</template>

<style scoped>
.flap { display: inline-flex; gap: var(--flap-gap, 2px); vertical-align: middle; }
.cell {
  position: relative; display: inline-block; flex: none;
  width: var(--flap-w, 1.12em); height: var(--flap-h, 1.5em);
  perspective: 240px;
  color: var(--flap-color, var(--color-flap));
  font-family: var(--font-mono), "Pretendard Variable", sans-serif;
  font-weight: 700;
}
.cell::after {
  content: ""; position: absolute; left: 0; right: 0; top: calc(50% - 0.5px); height: 1px;
  background: rgb(0 0 0 / 0.7); z-index: 3;
}
.h {
  position: absolute; left: 0; right: 0; height: 50%; overflow: hidden;
  background: var(--flap-bg, var(--color-cell));
  backface-visibility: hidden;
}
.top { top: 0; border-radius: 3px 3px 0 0; transform-origin: 50% 100%; }
.bot { bottom: 0; border-radius: 0 0 3px 3px; transform-origin: 50% 0; background: color-mix(in oklab, var(--flap-bg, var(--color-cell)) 88%, white); }
.h b { position: absolute; left: 0; right: 0; height: 200%; display: grid; place-items: center; line-height: 1; font-weight: inherit; }
.top b { top: 0; }
.bot b { bottom: 0; }
.leaf { z-index: 2; animation: fold-top 75ms ease-in forwards; }
.leaf2 { z-index: 2; transform: rotateX(90deg); animation: fold-bot 75ms 75ms ease-out forwards; }
.blank .h b { visibility: hidden; }
@keyframes fold-top { to { transform: rotateX(-90deg); } }
@keyframes fold-bot { to { transform: rotateX(0deg); } }
</style>
