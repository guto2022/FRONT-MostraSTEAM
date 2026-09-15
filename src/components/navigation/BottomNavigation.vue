<script setup lang="ts">
import { useFavorites } from '@/composables/useFavorites'

const sideLinks = [
  { to: { name: 'home' }, label: 'Início', icon: 'home' },
  { to: { name: 'activities' }, label: 'Atividades', icon: 'grid' },
  { to: { name: 'rooms' }, label: 'Salas', icon: 'building' },
  { to: { name: 'my-show' }, label: 'Minha Mostra', icon: 'heart' },
]
const { favoriteCount } = useFavorites()
</script>

<template>
  <nav class="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-ink-100 pb-[env(safe-area-inset-bottom)]" aria-label="Navegação principal">
    <ul class="relative flex items-stretch justify-between px-1">
      <li v-for="link in sideLinks.slice(0, 2)" :key="link.label" class="flex-1">
        <router-link :to="link.to" class="relative flex flex-col items-center justify-center gap-0.5 h-16 text-[11px] font-semibold text-ink-400" active-class="!text-sesiBlue-700">
          <AppIcon :name="link.icon" :size="21" /> {{ link.label }}
        </router-link>
      </li>

      <!-- Mapa: destacado no centro — é o coração da experiência
           (Atividade → Sala → Mapa), não só mais um item de menu. -->
      <li class="flex-1 flex items-center justify-center">
        <router-link :to="{ name: 'map' }" class="flex flex-col items-center gap-1 -translate-y-4" active-class="[&_.map-fab]:bg-sesiBlue-900">
          <span class="map-fab w-14 h-14 rounded-full bg-sesiBlue-700 text-white flex items-center justify-center shadow-float ring-4 ring-white">
            <AppIcon name="map" :size="24" />
          </span>
          <span class="text-[11px] font-bold text-sesiBlue-700">Mapa</span>
        </router-link>
      </li>

      <li v-for="link in sideLinks.slice(2)" :key="link.label" class="flex-1">
        <router-link :to="link.to" class="relative flex flex-col items-center justify-center gap-0.5 h-16 text-[11px] font-semibold text-ink-400" active-class="!text-sesiBlue-700">
          <AppIcon :name="link.icon" :size="21" /> {{ link.label }}
          <span v-if="link.icon === 'heart' && favoriteCount > 0" class="absolute top-1.5 right-[22%] min-w-[16px] h-[16px] px-1 rounded-full bg-sesiGreen-600 text-white text-[9px] font-bold flex items-center justify-center">
            {{ favoriteCount }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
