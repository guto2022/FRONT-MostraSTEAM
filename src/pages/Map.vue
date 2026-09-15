<script setup lang="ts">
import { computed } from 'vue'
import { getRoomByCode, getActivityById } from '@/data'
import { useMapHighlight } from '@/composables/useMapHighlight'
import SchoolMap from '@/components/map/SchoolMap.vue'
import MapLegend from '@/components/map/MapLegend.vue'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import FloorBadge from '@/components/room/FloorBadge.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import RoomBadge from '@/components/room/RoomBadge.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const { highlightedRoomCode, highlight, clear } = useMapHighlight()

const selectedRoom = computed(() => (highlightedRoomCode.value ? getRoomByCode(highlightedRoomCode.value) : undefined))
const selectedActivities = computed(() =>
  selectedRoom.value
    ? selectedRoom.value.activityIds.map((id) => getActivityById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
    : [],
)
</script>

<template>
  <div>
    <PageHeader title="Mapa da Mostra" description="Toque em um marcador para descobrir o que acontece em cada sala." />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 pb-10">
      <SchoolMap :highlighted-room-code="highlightedRoomCode" @select="highlight" />
      <MapLegend />

      <transition name="fade-up" mode="out-in">
        <div v-if="selectedRoom" :key="selectedRoom.id" class="bg-white rounded-lg ring-1 ring-ink-100 p-4">
          <div class="flex items-start justify-between gap-3">
            <div>
              <div class="flex items-center gap-1.5 flex-wrap">
                <RoomBadge :code="selectedRoom.code" />
                <FloorBadge :floor="selectedRoom.floor" />
              </div>
              <h2 class="font-bold text-ink-900 text-lg mt-1.5">{{ selectedRoom.name }}</h2>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <router-link :to="{ name: 'room-detail', params: { id: selectedRoom.id } }" class="text-sm font-semibold text-sesiBlue-700 hover:text-sesiBlue-900 px-2 py-1">
                Ver sala
              </router-link>
              <button type="button" class="w-8 h-8 flex items-center justify-center rounded-full text-ink-400 hover:bg-ink-100" aria-label="Fechar destaque da sala" @click="clear">
                <AppIcon name="x" :size="16" />
              </button>
            </div>
          </div>

          <div v-if="selectedActivities.length" class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ActivityCard v-for="activity in selectedActivities" :key="activity.id" :activity="activity" />
          </div>
          <p v-else class="text-sm text-ink-500 mt-3">Nenhuma atividade cadastrada aqui ainda.</p>
        </div>
      </transition>
    </div>
  </div>
</template>
