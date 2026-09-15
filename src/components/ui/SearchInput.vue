<script setup lang="ts">
defineProps<{ modelValue: string; placeholder?: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <label class="relative block">
    <span class="sr-only">Buscar</span>
    <AppIcon name="search" :size="18" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none" />
    <input
      :value="modelValue" type="search" :placeholder="placeholder ?? 'Buscar atividade, professor, sala...'"
      class="w-full h-12 rounded-lg bg-white border border-ink-200 pl-11 pr-11 text-[15px] placeholder:text-ink-400 focus:border-sesiBlue-500 outline-none"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <button v-if="modelValue" type="button" aria-label="Limpar busca" class="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full text-ink-400 hover:bg-ink-100 hover:text-ink-700" @click="$emit('update:modelValue', '')">
      <AppIcon name="x" :size="16" />
    </button>
  </label>
</template>
