<script setup lang="ts">
import { ref, watch } from 'vue'
import { initialsFrom } from '@/utils/text'

/**
 * Mostra a foto real quando existe; caso contrário, um placeholder
 * discreto — nunca finge ser uma foto real da escola. Controlado por
 * `hasRealImage`, definido explicitamente nos dados.
 */
const props = withDefaults(
  defineProps<{ src: string; alt: string; label?: string; hasRealImage?: boolean; aspect?: string }>(),
  { hasRealImage: true, aspect: 'aspect-[4/3]' },
)
const failed = ref(!props.hasRealImage)
watch(() => props.src, () => { failed.value = !props.hasRealImage })
</script>
<template>
  <div class="relative w-full overflow-hidden bg-ink-100" :class="aspect">
    <img v-if="!failed" :src="src" :alt="alt" class="w-full h-full object-cover" loading="lazy" @error="failed = true" />
    <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-400">
      <div class="w-11 h-11 rounded-lg bg-white border border-ink-200 flex items-center justify-center text-sm font-bold text-ink-500">
        {{ initialsFrom(label ?? alt) }}
      </div>
      <span class="sr-only">Foto ainda não disponível para {{ alt }}</span>
    </div>
  </div>
</template>
