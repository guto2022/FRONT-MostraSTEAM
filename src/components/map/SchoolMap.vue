<script setup lang="ts">
import { ref, reactive } from 'vue'
import { mapData } from '@/data'
import MapRoom from './MapRoom.vue'

defineProps<{ highlightedRoomCode: string | null }>()
defineEmits<{ select: [roomCode: string] }>()

const scale = ref(1)
const pan = reactive({ x: 0, y: 0 })
const MIN_SCALE = 1
const MAX_SCALE = 2.5

function zoomIn() { scale.value = Math.min(MAX_SCALE, +(scale.value + 0.35).toFixed(2)) }
function zoomOut() {
  scale.value = Math.max(MIN_SCALE, +(scale.value - 0.35).toFixed(2))
  if (scale.value === MIN_SCALE) resetPan()
}
function resetView() { scale.value = 1; resetPan() }
function resetPan() { pan.x = 0; pan.y = 0 }

const dragging = ref(false)
let start = { x: 0, y: 0, panX: 0, panY: 0 }

function onPointerDown(e: PointerEvent) {
  if (scale.value <= MIN_SCALE) return
  dragging.value = true
  start = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y }
  ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
}
function onPointerMove(e: PointerEvent) {
  if (!dragging.value) return
  pan.x = start.panX + (e.clientX - start.x)
  pan.y = start.panY + (e.clientY - start.y)
}
function onPointerUp() { dragging.value = false }
</script>

<template>
  <div class="relative">
    <div
      class="relative w-full aspect-[889/1769] rounded-lg overflow-hidden bg-sesiBlue-50 ring-1 ring-ink-200 touch-none select-none"
      :class="scale > 1 ? (dragging ? 'cursor-grabbing' : 'cursor-grab') : ''"
      @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp" @pointerleave="onPointerUp"
    >
      <div class="absolute inset-0 origin-center transition-transform duration-150 ease-out" :style="{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})` }">
        <img :src="mapData.image" alt="Planta aérea da escola, com os blocos marcados" class="absolute inset-0 w-full h-full object-contain pointer-events-none" draggable="false" />
        <MapRoom
          v-for="marker in mapData.markers" :key="marker.id" :marker="marker"
          :is-highlighted="highlightedRoomCode === marker.roomCode"
          :is-dimmed="highlightedRoomCode !== null && highlightedRoomCode !== marker.roomCode"
          @select="(code) => $emit('select', code)"
        />
      </div>
    </div>

    <div class="absolute right-2.5 top-2.5 flex flex-col gap-1.5 bg-white/95 rounded-lg p-1 shadow-float">
      <button type="button" class="w-9 h-9 flex items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100 disabled:opacity-30" aria-label="Aproximar mapa" :disabled="scale >= MAX_SCALE" @click="zoomIn">
        <AppIcon name="zoom-in" :size="18" />
      </button>
      <button type="button" class="w-9 h-9 flex items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100 disabled:opacity-30" aria-label="Afastar mapa" :disabled="scale <= MIN_SCALE" @click="zoomOut">
        <AppIcon name="zoom-out" :size="18" />
      </button>
      <button type="button" class="w-9 h-9 flex items-center justify-center rounded-lg text-ink-600 hover:bg-ink-100" aria-label="Restaurar visualização do mapa" @click="resetView">
        <AppIcon name="reset" :size="17" />
      </button>
    </div>
  </div>
</template>
