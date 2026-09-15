<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getRoomById, getActivityById } from '@/data'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder.vue'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import BottomSheet from '@/components/ui/BottomSheet.vue'
import MapPreviewSheet from '@/components/map/MapPreviewSheet.vue'
import RoomBadge from '@/components/room/RoomBadge.vue'
import FloorBadge from '@/components/room/FloorBadge.vue'

const props = defineProps<{ id: string }>()
const router = useRouter()

const room = computed(() => getRoomById(props.id))
const roomActivities = computed(() =>
  room.value
    ? room.value.activityIds.map((id) => getActivityById(id)).filter((a): a is NonNullable<typeof a> => Boolean(a))
    : [],
)
const sheetOpen = ref(false)
</script>

<template>
  <div v-if="room" class="max-w-3xl mx-auto pb-10">
    <div class="px-4 sm:px-6 pt-4">
      <button type="button" class="inline-flex items-center gap-1 text-sm font-semibold text-ink-500 hover:text-sesiBlue-700 mb-3 -ml-1 px-1 py-1 rounded-lg" @click="router.back()">
        <AppIcon name="arrow-left" :size="18" /> Voltar
      </button>
    </div>

    <div class="px-4 sm:px-6">
      <div class="rounded-lg overflow-hidden">
        <PhotoPlaceholder :src="room.image" :alt="room.name" :label="room.code" :has-real-image="room.hasRealImage" aspect="aspect-[16/9]" />
      </div>
    </div>

    <div class="px-4 sm:px-6 pt-5">
      <div class="flex items-center gap-1.5 flex-wrap">
        <RoomBadge :code="room.code" />
        <FloorBadge :floor="room.floor" />
      </div>
      <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900 leading-tight mt-2">{{ room.name }}</h1>
      <p class="text-[15px] text-ink-600 leading-relaxed mt-3">{{ room.description }}</p>
      <p v-if="room.isDescriptionProvisional" class="text-xs text-ink-500 bg-ink-100 rounded-lg px-3 py-2 mt-3 inline-block">
        Informação a confirmar — será atualizada com a descrição oficial da equipe.
      </p>

      <AppButton variant="primary" class="mt-5" @click="sheetOpen = true">
        <template #icon-left><AppIcon name="map" :size="17" /></template>
        Ver no mapa
      </AppButton>

      <section class="mt-8 pt-6 border-t border-ink-100">
        <h2 class="text-lg font-bold text-ink-900 mb-3">
          Atividades nesta sala <span class="text-ink-400 font-medium text-sm">({{ roomActivities.length }})</span>
        </h2>
        <EmptyState v-if="roomActivities.length === 0" icon="compass" title="Nenhuma atividade cadastrada aqui ainda" />
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ActivityCard v-for="activity in roomActivities" :key="activity.id" :activity="activity" />
        </div>
      </section>
    </div>

    <BottomSheet v-model="sheetOpen" title="Localização">
      <MapPreviewSheet :room-code="room.code" @open-room="sheetOpen = false" />
    </BottomSheet>
  </div>

  <div v-else class="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
    <EmptyState icon="search" title="Sala não encontrada" description="Ela pode ter sido removida ou o link está incorreto.">
      <template #action><AppButton as="router-link" to="/rooms" variant="outline">Ver todas as salas</AppButton></template>
    </EmptyState>
  </div>
</template>
