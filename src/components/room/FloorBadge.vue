<script setup lang="ts">
import { computed } from 'vue'
import type { Floor } from '@/types'

/**
 * Indicador de andar (baixo / térreo / superior) — usado em cards de
 * sala, no detalhe da sala e nos chips de "onde acontece" da
 * atividade. Não usa cor de categoria STEAM (não é disciplina); usa
 * cores neutras próprias pra não ser confundido com categorias.
 */
const props = defineProps<{ floor: Floor }>()

const config = computed(() => {
  switch (props.floor) {
    case 'baixo':
      return { label: 'Andar de baixo', icon: 'arrow-down', classes: 'bg-ink-100 text-ink-600' }
    case 'superior':
      return { label: 'Andar de cima', icon: 'arrow-up', classes: 'bg-steam-teal/10 text-steam-teal' }
    default:
      return { label: 'Térreo', icon: 'compass', classes: 'bg-sesiBlue-50 text-sesiBlue-700' }
  }
})
</script>

<template>
  <span class="inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-semibold" :class="config.classes">
    <AppIcon :name="config.icon" :size="12" />
    {{ config.label }}
  </span>
</template>
