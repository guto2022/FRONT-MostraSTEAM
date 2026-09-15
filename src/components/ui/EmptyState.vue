<script setup lang="ts">
withDefaults(defineProps<{ icon?: string; title: string; description?: string }>(), { icon: 'compass' })
</script>
<template>
  <div class="flex flex-col items-center text-center py-14 px-6" role="status">
    <div class="w-14 h-14 rounded-lg bg-sesiBlue-50 text-sesiBlue-700 flex items-center justify-center mb-4">
      <AppIcon :name="icon" :size="26" />
    </div>
    <p class="font-semibold text-ink-800 text-base">{{ title }}</p>
    <p v-if="description" class="text-sm text-ink-500 mt-1.5 max-w-xs">{{ description }}</p>
    <div v-if="$slots.action" class="mt-5"><slot name="action" /></div>
  </div>
</template>
