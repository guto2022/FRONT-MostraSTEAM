<script setup lang="ts">
import EmptyState from '@/components/ui/EmptyState.vue'
import AppButton from '@/components/ui/AppButton.vue'
</script>
<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 pt-12">
    <EmptyState icon="compass" title="Página não encontrada" description="O link acessado não existe ou foi movido.">
      <template #action><AppButton as="router-link" :to="{ name: 'home' }" variant="primary">Voltar ao início</AppButton></template>
    </EmptyState>
  </div>
</template>
