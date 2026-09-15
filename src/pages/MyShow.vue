<script setup lang="ts">
import { computed } from 'vue'
import { getActivityById } from '@/data'
import { useFavorites } from '@/composables/useFavorites'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import AppButton from '@/components/ui/AppButton.vue'
import PageHeader from '@/components/ui/PageHeader.vue'

const { favoriteIds } = useFavorites()
const favoriteActivities = computed(() => favoriteIds.value.map((id) => getActivityById(id)).filter(Boolean))
</script>

<template>
  <div>
    <PageHeader title="Minha Mostra" description="As atividades que você salvou para visitar, em um só lugar." />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
      <EmptyState v-if="favoriteActivities.length === 0" icon="heart" title="Você ainda não salvou nenhuma atividade." description="Toque no coração de uma atividade para adicioná-la aqui.">
        <template #action><AppButton as="router-link" to="/activities" variant="primary">Explorar atividades</AppButton></template>
      </EmptyState>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ActivityCard v-for="activity in favoriteActivities" :key="activity!.id" :activity="activity!" />
      </div>
    </div>
  </div>
</template>
