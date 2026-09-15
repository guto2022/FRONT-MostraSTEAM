<script setup lang="ts">
import { useFavorites } from '@/composables/useFavorites'
const props = defineProps<{ activityId: string; activityTitle: string }>()
const { isFavorite, toggleFavorite } = useFavorites()
</script>
<template>
  <button
    type="button"
    class="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
    :class="isFavorite(props.activityId) ? 'bg-sesiGreen-600 text-white' : 'bg-white/90 text-ink-600 hover:text-sesiGreen-700'"
    :aria-pressed="isFavorite(props.activityId)"
    :aria-label="isFavorite(props.activityId) ? `Remover ${props.activityTitle} da Minha Mostra` : `Salvar ${props.activityTitle} na Minha Mostra`"
    @click.stop.prevent="toggleFavorite(props.activityId)"
  >
    <AppIcon :name="isFavorite(props.activityId) ? 'heart-filled' : 'heart'" :size="19" />
  </button>
</template>
