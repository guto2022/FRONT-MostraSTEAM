<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { getActivityById, getRoomByCode } from '@/data'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder.vue'
import Badge from '@/components/ui/Badge.vue'
import AppButton from '@/components/ui/AppButton.vue'
import FavoriteButton from '@/components/activity/FavoriteButton.vue'
import ActivityBadge from '@/components/activity/ActivityBadge.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import BottomSheet from '@/components/ui/BottomSheet.vue'
import MapPreviewSheet from '@/components/map/MapPreviewSheet.vue'
import FloorBadge from '@/components/room/FloorBadge.vue'

const props = defineProps<{ id: string }>()
const router = useRouter()

const activity = computed(() => getActivityById(props.id))
const relatedRooms = computed(() =>
  activity.value
    ? activity.value.rooms.map((code) => getRoomByCode(code)).filter((r): r is NonNullable<typeof r> => Boolean(r))
    : [],
)

// O mapa abre num painel por cima da página — não navega pra outra
// rota, então o usuário nunca "perde o lugar" onde estava.
const sheetOpen = ref(false)
const previewRoomCode = ref<string | null>(null)

function openMapPreview(roomCode: string) {
  previewRoomCode.value = roomCode
  sheetOpen.value = true
}
function goToFullRoomPage(roomId: string) {
  sheetOpen.value = false
  router.push({ name: 'room-detail', params: { id: roomId } })
}
</script>

<template>
  <div v-if="activity" class="max-w-3xl mx-auto pb-10">
    <div class="px-4 sm:px-6 pt-4">
      <button type="button" class="inline-flex items-center gap-1 text-sm font-semibold text-ink-500 hover:text-sesiBlue-700 mb-3 -ml-1 px-1 py-1 rounded-lg" @click="router.back()">
        <AppIcon name="arrow-left" :size="18" /> Voltar
      </button>
    </div>

    <div class="px-4 sm:px-6">
      <div class="relative rounded-lg overflow-hidden">
        <PhotoPlaceholder :src="activity.image" :alt="activity.title" :label="activity.title" :has-real-image="activity.hasRealImage" aspect="aspect-[16/10]" />
        <div class="absolute top-3 right-3"><FavoriteButton :activity-id="activity.id" :activity-title="activity.title" /></div>
      </div>
    </div>

    <div class="px-4 sm:px-6 pt-5">
      <div class="flex items-center gap-1.5 flex-wrap mb-3">
        <Badge tone="neutral">Atividade contínua</Badge>
        <ActivityBadge :category-id="activity.category" />
      </div>

      <h1 class="text-2xl sm:text-3xl font-extrabold text-ink-900 leading-tight">{{ activity.title }}</h1>
      <p v-if="activity.teachers.length" class="text-ink-500 mt-2 text-[15px]">
        Responsável{{ activity.teachers.length > 1 ? 'is' : '' }}: {{ activity.teachers.join(', ') }}
      </p>

      <section class="mt-6">
        <h2 class="text-sm font-bold text-ink-800 uppercase tracking-wide mb-3">Onde acontece</h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="room in relatedRooms" :key="room.id" type="button"
            class="flex items-center gap-2 rounded-lg border border-ink-200 hover:border-sesiBlue-400 hover:bg-sesiBlue-50 pl-3 pr-3.5 py-2 text-left"
            @click="openMapPreview(room.code)"
          >
            <span class="w-7 h-7 rounded-lg bg-sesiBlue-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0">{{ room.code.slice(0, 2) }}</span>
            <span>
              <span class="block text-sm font-semibold text-ink-800">{{ room.name }}</span>
              <span class="flex items-center gap-1.5 mt-0.5">
                <span class="text-xs text-ink-400">{{ room.code }}</span>
                <FloorBadge :floor="room.floor" />
              </span>
            </span>
          </button>
        </div>
        <AppButton variant="primary" size="md" full-width class="mt-4" @click="openMapPreview(relatedRooms[0]!.code)">
          <template #icon-left><AppIcon name="map" :size="17" /></template>
          Ver no mapa
        </AppButton>
      </section>

      <section class="mt-6 pt-5 border-t border-ink-100">
        <h2 class="text-sm font-bold text-ink-800 uppercase tracking-wide mb-2">Sobre a atividade</h2>
        <p class="text-[15px] text-ink-600 leading-relaxed">{{ activity.description }}</p>
        <p v-if="activity.isDescriptionProvisional" class="text-xs text-ink-500 bg-ink-100 rounded-lg px-3 py-2 mt-3">
          Informação a confirmar — será atualizada com a descrição oficial da equipe.
        </p>
      </section>

      <section class="mt-6 pt-5 border-t border-ink-100">
        <h2 class="text-sm font-bold text-ink-800 uppercase tracking-wide mb-2">Turmas e participantes</h2>
        <p class="text-sm text-ink-500">Informação ainda não disponível.</p>
        <p class="text-xs text-ink-500 bg-ink-100 rounded-lg px-3 py-2 mt-3">
          Informação a confirmar — turmas e participantes serão adicionados assim que coletados.
        </p>
      </section>
    </div>

    <BottomSheet v-model="sheetOpen" title="Localização">
      <MapPreviewSheet v-if="previewRoomCode" :room-code="previewRoomCode" @open-room="goToFullRoomPage" />
    </BottomSheet>
  </div>

  <div v-else class="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
    <EmptyState icon="search" title="Atividade não encontrada" description="Ela pode ter sido removida ou o link está incorreto.">
      <template #action><AppButton as="router-link" :to="{ name: 'activities' }" variant="outline">Ver todas as atividades</AppButton></template>
    </EmptyState>
  </div>
</template>
