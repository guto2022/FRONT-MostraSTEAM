<script setup lang="ts">
withDefaults(defineProps<{ title: string; description?: string; showBack?: boolean }>(), { showBack: false })
</script>
<template>
  <header class="px-4 sm:px-6 pt-6 pb-4 max-w-3xl mx-auto w-full">
    <button v-if="showBack" type="button" class="inline-flex items-center gap-1 text-sm font-semibold text-ink-500 hover:text-sesiBlue-700 mb-3 -ml-1 px-1 py-1 rounded-lg" @click="$router.back()">
      <AppIcon name="arrow-left" :size="18" /> Voltar
    </button>
    <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">{{ title }}</h1>
    <p v-if="description" class="text-ink-500 mt-1.5 text-[15px] leading-relaxed">{{ description }}</p>
    <slot />
  </header>
</template>
