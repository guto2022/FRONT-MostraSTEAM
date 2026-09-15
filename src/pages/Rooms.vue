<script setup lang="ts">
import { computed } from 'vue'
import { rooms } from '@/data'
import RoomCard from '@/components/room/RoomCard.vue'
import PageHeader from '@/components/ui/PageHeader.vue'

const terreoRooms = computed(() => rooms.filter((r) => r.floor === 'terreo'))
const superiorRooms = computed(() => rooms.filter((r) => r.floor === 'superior'))
</script>

<template>
  <div>
    <PageHeader title="Salas" description="Conheça os locais da escola onde acontecem as atividades da Mostra." />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
      <section>
        <h2 class="text-xs font-bold uppercase tracking-wide text-ink-400 mb-1 flex items-center gap-1.5">
          <AppIcon name="arrow-down" :size="13" /> Térreo
        </h2>
        <div class="divide-y divide-ink-100">
          <RoomCard v-for="room in terreoRooms" :key="room.id" :room="room" />
        </div>
      </section>

      <section class="mt-6">
        <h2 class="text-xs font-bold uppercase tracking-wide text-ink-400 mb-1 flex items-center gap-1.5">
          <AppIcon name="arrow-up" :size="13" /> Andar de cima
        </h2>
        <div class="divide-y divide-ink-100">
          <RoomCard v-for="room in superiorRooms" :key="room.id" :room="room" />
        </div>
      </section>
    </div>
  </div>
</template>
