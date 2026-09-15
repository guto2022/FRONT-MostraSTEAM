<script setup lang="ts">
withDefaults(defineProps<{ active?: boolean; icon?: string }>(), { active: false })
defineEmits<{ click: [] }>()
</script>
<template>
  <button
    type="button"
    class="shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 h-9 text-sm font-semibold border transition-colors"
    :class="active ? 'bg-sesiBlue-700 text-white border-sesiBlue-700' : 'bg-white text-ink-600 border-ink-200 hover:border-sesiBlue-300'"
    :aria-pressed="active"
    @click="$emit('click')"
  >
    <AppIcon v-if="icon" :name="icon" :size="15" /><slot />
  </button>
</template>
