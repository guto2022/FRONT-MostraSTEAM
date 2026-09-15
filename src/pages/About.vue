<script setup lang="ts">
import { schoolInfo } from '@/data'
import PageHeader from '@/components/ui/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader title="Sobre a Mostra" show-back />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 pb-10 space-y-4">
      <section class="bg-white rounded-lg ring-1 ring-ink-100 p-4">
        <h2 class="text-sm font-bold text-ink-800 uppercase tracking-wide mb-2">{{ schoolInfo.name }}</h2>
        <p class="text-[15px] text-ink-600 leading-relaxed">{{ schoolInfo.about }}</p>
        <p v-if="schoolInfo.isAboutProvisional" class="text-xs text-ink-500 bg-ink-100 rounded-lg px-3 py-2 mt-3">
          Informação a confirmar — será substituída pela apresentação oficial da escola.
        </p>
      </section>
      <section class="bg-white rounded-lg ring-1 ring-ink-100 p-4">
        <h2 class="text-sm font-bold text-ink-800 uppercase tracking-wide mb-2">Endereço</h2>
        <p class="text-[15px] text-ink-600">{{ schoolInfo.address }}</p>
        <p v-if="schoolInfo.isAddressProvisional" class="text-xs text-ink-500 bg-ink-100 rounded-lg px-3 py-2 mt-3">
          Informação a confirmar — será substituída pelo endereço oficial.
        </p>
      </section>
    </div>
  </div>
</template>
