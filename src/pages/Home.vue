<script setup lang="ts">
import { schoolInfo, getFeaturedActivities } from '@/data'
import ActivityCard from '@/components/activity/ActivityCard.vue'
import AppButton from '@/components/ui/AppButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const featured = getFeaturedActivities()

const shortcuts = [
  { to: '/map', label: 'Mapa', icon: 'map' },
  { to: '/activities', label: 'Atividades', icon: 'grid' },
  { to: '/rooms', label: 'Salas', icon: 'building' },
]
</script>

<template>
  <div>
    <section class="bg-sesiBlue-700 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-9">
        <p class="text-sesiBlue-200 font-semibold text-sm tracking-wide uppercase">{{ schoolInfo.shortName }}</p>
        <h1 class="text-3xl sm:text-4xl font-extrabold mt-1 leading-tight">{{ schoolInfo.event }}</h1>
        <p class="text-sesiBlue-100/90 mt-3 text-[15px] leading-relaxed max-w-md">
          Seu guia digital para explorar a Mostra: descubra atividades, encontre onde fica cada
          sala e circule pela escola com autonomia — mesmo que seja sua primeira visita.
        </p>
        <AppButton as="router-link" to="/activities" variant="secondary" size="lg" class="mt-6">
          Explorar a Mostra
          <template #icon-right><AppIcon name="chevron-right" :size="18" /></template>
        </AppButton>
      </div>
    </section>

    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <section class="pt-6">
        <SectionHeader title="Descubra a Mostra" />
        <div class="grid grid-cols-3 gap-3">
          <router-link
            v-for="s in shortcuts" :key="s.label" :to="s.to"
            class="flex flex-col items-center justify-center gap-2 rounded-lg bg-white ring-1 ring-ink-100 py-5 hover:ring-sesiBlue-300 hover:bg-sesiBlue-50/40 transition-colors"
          >
            <span class="w-11 h-11 rounded-lg bg-sesiBlue-50 text-sesiBlue-700 flex items-center justify-center">
              <AppIcon :name="s.icon" :size="22" />
            </span>
            <span class="text-sm font-semibold text-ink-800">{{ s.label }}</span>
          </router-link>
        </div>
      </section>

      <section class="pt-9">
        <SectionHeader title="Atividades em destaque" action-label="Ver todas" action-to="/activities" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ActivityCard v-for="activity in featured" :key="activity.id" :activity="activity" />
        </div>
      </section>

      <section class="pt-9">
        <SectionHeader title="Explore pelo mapa" />
        <router-link :to="{ name: 'map' }" class="group flex items-center justify-between gap-4 rounded-lg bg-white ring-1 ring-ink-100 p-5 hover:ring-sesiBlue-300 transition-colors">
          <div>
            <p class="font-bold text-ink-900">Onde fica cada atividade?</p>
            <p class="text-sm text-ink-500 mt-1 max-w-xs">Veja a planta da Mostra, encontre as salas e descubra o que acontece em cada uma.</p>
          </div>
          <span class="shrink-0 w-11 h-11 rounded-full bg-sesiBlue-700 text-white flex items-center justify-center group-hover:bg-sesiBlue-800">
            <AppIcon name="compass" :size="20" />
          </span>
        </router-link>
      </section>

      <section class="py-9">
        <SectionHeader title="Minha Mostra" />
        <router-link :to="{ name: 'my-show' }" class="group flex items-center justify-between gap-4 rounded-lg bg-ink-900 text-white p-5 hover:bg-ink-800 transition-colors">
          <div>
            <p class="font-bold">Monte seu roteiro</p>
            <p class="text-sm text-ink-300 mt-1 max-w-xs">Salve as atividades que você quer visitar e acesse tudo em um só lugar.</p>
          </div>
          <span class="shrink-0 w-11 h-11 rounded-full bg-sesiGreen-600 text-white flex items-center justify-center">
            <AppIcon name="heart" :size="19" />
          </span>
        </router-link>
      </section>
    </div>
  </div>
</template>
