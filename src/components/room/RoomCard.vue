<script setup lang="ts">
import type { Room } from '@/types'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder.vue'
import RoomBadge from './RoomBadge.vue'
import FloorBadge from './FloorBadge.vue'

defineProps<{ room: Room }>()
</script>

<template>
  <router-link :to="{ name: 'room-detail', params: { id: room.id } }" class="group flex items-center gap-3.5 py-3.5">
    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0">
      <PhotoPlaceholder :src="room.image" :alt="room.name" :label="room.code" :has-real-image="room.hasRealImage" aspect="aspect-square" />
    </div>
    <div class="min-w-0 flex-1">
      <div class="flex items-center gap-1.5 flex-wrap">
        <RoomBadge :code="room.code" />
        <FloorBadge :floor="room.floor" />
      </div>
      <h3 class="font-bold text-ink-900 leading-snug group-hover:text-sesiBlue-700 truncate mt-1">{{ room.name }}</h3>
      <p class="text-sm text-ink-500 mt-0.5">
        {{ room.activityIds.length }} {{ room.activityIds.length === 1 ? 'atividade' : 'atividades' }}
      </p>
    </div>
    <AppIcon name="chevron-right" :size="18" class="text-ink-300 shrink-0" />
  </router-link>
</template>
