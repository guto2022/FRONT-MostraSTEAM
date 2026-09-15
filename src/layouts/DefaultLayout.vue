<script setup lang="ts">
import DesktopNavigation from '@/components/navigation/DesktopNavigation.vue'
import BottomNavigation from '@/components/navigation/BottomNavigation.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-ink-50">
    <a href="#main-content" class="sr-only-focusable fixed top-2 left-2 z-50 bg-white px-4 py-2 rounded-lg shadow-float font-semibold">
      Pular para o conteúdo
    </a>
    <DesktopNavigation />
    <main id="main-content" class="flex-1 pb-24 md:pb-10">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-up" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <BottomNavigation />
  </div>
</template>

<style scoped>
.fade-up-enter-active { animation: fade-up 0.25s ease-out both; }
</style>
