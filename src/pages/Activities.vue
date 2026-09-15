<script setup lang="ts">
import { ref } from 'vue'
import { activities } from '@/data'
import { useActivitySearch } from '@/composables/useActivitySearch'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import FilterBar from '@/components/activity/FilterBar.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import PageHeader from '@/components/ui/PageHeader.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const source = ref(activities)
const { query, filters, results, clearAll, hasActiveFilters } = useActivitySearch(source)
const showFilters = ref(false)
</script>

<template>
  <div>
    <PageHeader title="Atividades e projetos" description="Explore tudo o que você pode visitar na Mostra. As atividades acontecem de forma contínua durante o evento." />

    <div class="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
      <div class="flex gap-2">
        <div class="flex-1"><SearchInput v-model="query" /></div>
        <button
          type="button"
          class="w-12 h-12 shrink-0 rounded-lg bg-white border border-ink-200 flex items-center justify-center relative"
          :class="hasActiveFilters ? 'border-sesiBlue-400 text-sesiBlue-700' : 'text-ink-500'"
          aria-label="Mostrar filtros" :aria-expanded="showFilters" @click="showFilters = !showFilters"
        >
          <AppIcon name="filter" :size="19" />
          <span v-if="hasActiveFilters" class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-sesiGreen-600" />
        </button>
      </div>

      <FilterBar v-if="showFilters" v-model="filters" />

      <p class="text-sm text-ink-500" aria-live="polite">
        {{ results.length }} {{ results.length === 1 ? 'atividade encontrada' : 'atividades encontradas' }}
      </p>

      <EmptyState v-if="results.length === 0" icon="search" title="Não encontramos nenhuma atividade" description="Tente outra palavra-chave ou remova os filtros aplicados.">
        <template #action><AppButton variant="outline" @click="clearAll">Limpar busca</AppButton></template>
      </EmptyState>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-10">
        <ActivityCard v-for="activity in results" :key="activity.id" :activity="activity" />
      </div>
    </div>
  </div>
</template>
