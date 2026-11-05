<script setup lang="ts">
// One stroke family (2px, round joins) drawn for this site's wayfinding pictograms.
defineProps<{ name: 'depart' | 'arrive' | 'pass' | 'info' | 'mail' | 'bag' | 'right' | 'left' | 'external' | 'gate' | 'globe' }>()
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <template v-if="name === 'depart'">
      <path d="M2.5 20.5h19" /><path d="M3.6 13.6 6 12.2l3 1.2 7.2-4.3a2 2 0 0 1 2.6.6l.4.6-12 6.9-3.2-1.6z" /><path d="m9 13.4-2.6-4.4 1.6-.9 4.6 3" />
    </template>
    <template v-else-if="name === 'arrive'">
      <path d="M2.5 20.5h19" /><path d="M4 9.5 6 9l2.8 2.3 8-.6a2 2 0 0 1 2.1 1.6l.1.7-13.6 1.2L4 12z" /><path d="m8.8 11.3-.9-5 1.8-.3 3.3 5" />
    </template>
    <template v-else-if="name === 'pass'">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M15 5v14" stroke-dasharray="2 2" /><path d="M6 10h6M6 14h4" />
    </template>
    <template v-else-if="name === 'info'">
      <circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.5" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </template>
    <template v-else-if="name === 'bag'">
      <rect x="5" y="7" width="14" height="13" rx="2" /><path d="M9 7V4h6v3M9 20v1M15 20v1M9 11v5M15 11v5" />
    </template>
    <template v-else-if="name === 'right'">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'left'">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </template>
    <template v-else-if="name === 'external'">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </template>
    <template v-else-if="name === 'gate'">
      <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" /><path d="M2.5 20h19M9 20v-6h6v6" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </template>
  </svg>
</template>

<style scoped>
.icon { width: 1em; height: 1em; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; flex: none; }
</style>
