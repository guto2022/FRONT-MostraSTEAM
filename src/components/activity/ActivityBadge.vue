<script setup lang="ts">
import { computed } from 'vue'
import { getCategoryById } from '@/data'

/**
 * Tag de categoria — ponto colorido (cor STEAM da disciplina) + texto
 * neutro. A cor nunca vira o fundo inteiro do badge.
 */
const props = defineProps<{ categoryId: string }>()
const category = computed(() => getCategoryById(props.categoryId))
</script>
<template>
  <span v-if="category" class="inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-semibold text-ink-700 bg-ink-100 ring-1 ring-inset ring-ink-200">
    <span class="w-2 h-2 rounded-full shrink-0" :style="{ backgroundColor: category.color }" />
    {{ category.label }}
  </span>
</template>
