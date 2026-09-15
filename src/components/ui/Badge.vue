<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ tone?: 'sesiBlue' | 'sesiGreen' | 'neutral' }>(), { tone: 'neutral' })
const toneClasses = computed(() => {
  switch (props.tone) {
    case 'sesiBlue': return 'bg-sesiBlue-50 text-sesiBlue-700 ring-1 ring-inset ring-sesiBlue-200'
    case 'sesiGreen': return 'bg-sesiGreen-50 text-sesiGreen-700 ring-1 ring-inset ring-sesiGreen-200'
    default: return 'bg-ink-100 text-ink-600 ring-1 ring-inset ring-ink-200'
  }
})
</script>
<template>
  <span class="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold whitespace-nowrap" :class="toneClasses">
    <slot />
  </span>
</template>
