<script setup lang="ts">
import { categories, rooms } from '@/data'
import type { ActivityFilters } from '@/composables/useActivitySearch'
import FilterChip from '@/components/ui/FilterChip.vue'

const props = defineProps<{ modelValue: ActivityFilters }>()
const emit = defineEmits<{ 'update:modelValue': [value: ActivityFilters] }>()

function setCategory(id: string | null) {
  const next = { ...props.modelValue, category: props.modelValue.category === id ? null : id }
  emit('update:modelValue', next)
}
function setRoom(code: string) {
  const value = props.modelValue.roomCode === code ? null : code
  emit('update:modelValue', { ...props.modelValue, roomCode: value })
}
</script>

<template>
  <div class="space-y-3">
    <div>
      <p class="text-xs font-bold uppercase tracking-wide text-ink-400 mb-2 px-0.5">Categoria</p>
      <div class="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="group" aria-label="Filtrar por categoria">
        <FilterChip v-for="cat in categories" :key="cat.id" :active="modelValue.category === cat.id" :icon="cat.icon" @click="setCategory(cat.id)">
          {{ cat.label }}
        </FilterChip>
      </div>
    </div>
    <div>
      <p class="text-xs font-bold uppercase tracking-wide text-ink-400 mb-2 px-0.5">Sala</p>
      <div class="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1" role="group" aria-label="Filtrar por sala">
        <FilterChip v-for="room in rooms" :key="room.id" :active="modelValue.roomCode === room.code" @click="setRoom(room.code)">
          {{ room.code }}
        </FilterChip>
      </div>
    </div>
  </div>
</template>
