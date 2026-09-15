<script setup lang="ts">
defineProps<{ code: string }>()
</script>
<template>
  <span class="inline-block text-[11px] font-bold tracking-wide text-sesiBlue-700 bg-sesiBlue-50 rounded px-1.5 py-0.5">
    {{ code }}
  </span>
</template>
