<script setup lang="ts">
import { useFavorites } from '@/composables/useFavorites'
import SesiLogo from '@/components/branding/SesiLogo.vue'

const links = [
  { to: { name: 'home' }, label: 'Início', icon: 'home' },
  { to: { name: 'map' }, label: 'Mapa', icon: 'map' },
  { to: { name: 'activities' }, label: 'Atividades', icon: 'grid' },
  { to: { name: 'rooms' }, label: 'Salas', icon: 'building' },
]
const { favoriteCount } = useFavorites()
</script>

<template>
  <header class="hidden md:block sticky top-0 z-30 bg-white border-b border-ink-100">
    <nav class="max-w-5xl mx-auto flex items-center justify-between h-16 px-6" aria-label="Navegação principal">
      <router-link :to="{ name: 'home' }" class="flex items-center gap-2.5">
        <SesiLogo :size="26" />
        <span class="font-extrabold text-ink-900">Mostra STEAM</span>
      </router-link>
      <div class="flex items-center gap-1">
        <router-link
          v-for="link in links" :key="link.label" :to="link.to"
          class="flex items-center gap-1.5 px-3.5 h-10 rounded-lg text-sm font-semibold text-ink-600 hover:bg-ink-100"
          active-class="!text-sesiBlue-700 !bg-sesiBlue-50"
        >
          <AppIcon :name="link.icon" :size="17" /> {{ link.label }}
        </router-link>
        <router-link
          :to="{ name: 'my-show' }"
          class="relative flex items-center gap-1.5 px-3.5 h-10 rounded-lg text-sm font-semibold text-ink-600 hover:bg-ink-100 ml-1"
          active-class="!text-sesiBlue-700 !bg-sesiBlue-50"
        >
          <AppIcon name="heart" :size="17" /> Minha Mostra
          <span v-if="favoriteCount > 0" class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-sesiGreen-600 text-white text-[10px] font-bold flex items-center justify-center">
            {{ favoriteCount }}
          </span>
        </router-link>
      </div>
    </nav>
  </header>
</template>
