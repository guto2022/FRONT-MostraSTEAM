<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'

const props = defineProps<{ modelValue: boolean; title?: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

function close() { emit('update:modelValue', false) }
function onKeydown(e: KeyboardEvent) { if (e.key === 'Escape' && props.modelValue) close() }

watch(() => props.modelValue, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

window.addEventListener('keydown', onKeydown)
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <teleport to="body">
    <transition name="sheet-fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-end justify-center">
        <div class="absolute inset-0 bg-ink-950/45" @click="close" />
        <transition name="sheet-slide" appear>
          <div v-if="modelValue" class="relative w-full sm:max-w-lg bg-white rounded-t-xl sm:rounded-xl sm:mb-8 shadow-float max-h-[86vh] flex flex-col" role="dialog" aria-modal="true" :aria-label="title">
            <div class="flex items-center justify-center pt-2.5 sm:hidden">
              <span class="w-9 h-1 rounded-full bg-ink-200" />
            </div>
            <div class="flex items-center justify-between px-4 pt-3 pb-2 shrink-0">
              <h2 v-if="title" class="font-bold text-ink-900">{{ title }}</h2>
              <span v-else />
              <button type="button" class="w-9 h-9 flex items-center justify-center rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-700 -mr-1" aria-label="Fechar" @click="close">
                <AppIcon name="x" :size="18" />
              </button>
            </div>
            <div class="overflow-y-auto px-4 pb-5"><slot /></div>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.sheet-fade-enter-active, .sheet-fade-leave-active { transition: opacity 0.2s ease; }
.sheet-fade-enter-from, .sheet-fade-leave-to { opacity: 0; }
.sheet-slide-enter-active { transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1); }
.sheet-slide-leave-active { transition: transform 0.18s ease-in; }
.sheet-slide-enter-from, .sheet-slide-leave-to { transform: translateY(100%); }
@media (prefers-reduced-motion: reduce) {
  .sheet-slide-enter-active, .sheet-slide-leave-active, .sheet-fade-enter-active, .sheet-fade-leave-active { transition: none; }
}
</style>
