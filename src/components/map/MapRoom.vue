<script setup lang="ts">
import { computed } from 'vue'
import type { MapRoomMarker } from '@/types'
import { getRoomByCode } from '@/data'

const props = defineProps<{ marker: MapRoomMarker; isHighlighted: boolean; isDimmed: boolean }>()
defineEmits<{ select: [roomCode: string] }>()

const style = computed(() => ({ left: `${props.marker.x}%`, top: `${props.marker.y}%` }))

// Cor do marcador segue o andar da sala — mesma paleta do FloorBadge,
// pra não criar um segundo sistema de cores pro mesmo conceito.
const floorClasses = computed(() => {
  const floor = getRoomByCode(props.marker.roomCode)?.floor
  if (floor === 'baixo') return 'bg-ink-700'
  if (floor === 'superior') return 'bg-steam-teal'
  return 'bg-sesiBlue-700'
})
</script>

<template>
  <button
    type="button"
    class="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-200"
    :class="isDimmed ? 'opacity-40' : 'opacity-100'"
    :style="style"
    :aria-pressed="isHighlighted"
    :aria-label="`Sala ${marker.label}`"
    @click="$emit('select', marker.roomCode)"
  >
    <span
      class="flex items-center justify-center rounded-full font-bold text-[11px] text-white shadow-float border-2 transition-all"
      :class="[floorClasses, isHighlighted ? 'w-11 h-11 scale-110 border-sesiGreen-500 ring-2 ring-sesiGreen-300' : 'w-8 h-8 border-white']"
    >
      {{ marker.label.length > 3 ? marker.label.slice(0, 2) : marker.label }}
    </span>
    <span class="mt-1 text-[11px] font-semibold px-1.5 py-0.5 rounded bg-white/90 text-ink-700 shadow-sm whitespace-nowrap" :class="isHighlighted ? 'block' : 'hidden sm:block'">
      {{ marker.label }}
    </span>
  </button>
</template>
