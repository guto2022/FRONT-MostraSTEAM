<script setup lang="ts">
import { computed } from 'vue'
import { getRoomByCode, getActivityById } from '@/data'
import SchoolMap from './SchoolMap.vue'
import FloorBadge from '@/components/room/FloorBadge.vue'

const props = defineProps<{ roomCode: string }>()
defineEmits<{ 'open-room': [id: string] }>()

const room = computed(() => getRoomByCode(props.roomCode))
const roomActivities = computed(() =>
  room.value
    ? room.value.activityIds.map((id) => getActivityById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
    : [],
)
</script>

<template>
  <div v-if="room" class="space-y-4">
    <SchoolMap :highlighted-room-code="room.code" @select="() => {}" />

    <div class="flex items-center gap-2.5">
      <span class="w-9 h-9 rounded-lg bg-sesiBlue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
        {{ room.code.slice(0, 2) }}
      </span>
      <div class="min-w-0 flex-1">
        <p class="font-bold text-ink-900 truncate">{{ room.name }}</p>
        <p class="text-xs text-ink-400">{{ roomActivities.length }} {{ roomActivities.length === 1 ? 'atividade' : 'atividades' }} nesta sala</p>
      </div>
      <FloorBadge :floor="room.floor" />
    </div>

    <ul v-if="roomActivities.length" class="divide-y divide-ink-100 rounded-lg border border-ink-100 overflow-hidden">
      <li v-for="activity in roomActivities" :key="activity.id">
        <router-link :to="{ name: 'activity-detail', params: { id: activity.id } }" class="flex items-center justify-between gap-3 px-3.5 py-3 hover:bg-ink-50">
          <span class="text-sm font-semibold text-ink-800">{{ activity.title }}</span>
          <AppIcon name="chevron-right" :size="16" class="text-ink-300 shrink-0" />
        </router-link>
      </li>
    </ul>

    <button type="button" class="w-full text-sm font-semibold text-sesiBlue-700 hover:text-sesiBlue-900 text-center py-1" @click="$emit('open-room', room.id)">
      Ver página completa da sala
    </button>
  </div>
</template>
