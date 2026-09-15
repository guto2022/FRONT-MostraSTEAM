<script setup lang="ts">
defineProps<{ title: string; actionLabel?: string; actionTo?: string }>()
</script>
<template>
  <div class="flex items-end justify-between mb-3.5">
    <h2 class="text-lg font-bold text-ink-900">{{ title }}</h2>
    <router-link v-if="actionLabel && actionTo" :to="actionTo" class="text-sm font-semibold text-sesiBlue-700 hover:text-sesiBlue-900 inline-flex items-center gap-0.5 px-1 py-1">
      {{ actionLabel }} <AppIcon name="chevron-right" :size="16" />
    </router-link>
  </div>
</template>
