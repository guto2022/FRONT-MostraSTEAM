<script setup lang="ts">
/**
 * Logo oficial do SESI.
 * Aponta hoje para um PLACEHOLDER em /public/assets/branding/. Quando
 * o arquivo real chegar: (1) coloque-o em
 * public/assets/branding/sesi-logo.svg (ou .png) e (2) troque o `src`
 * abaixo. Nenhum outro componente precisa mudar.
 */
withDefaults(defineProps<{ variant?: 'full' | 'mark'; size?: number }>(), { variant: 'full', size: 28 })
</script>
<template>
  <img
    v-if="variant === 'full'"
    src="/assets/branding/sesi-logo.png"
    alt="SESI SENAI Chapecó"
    :style="{ height: `${size}px` }"
    class="w-auto"
  />
  <span
    v-else
    class="inline-flex items-center justify-center rounded-md bg-sesiBlue-700 text-white font-extrabold shrink-0"
    :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.42}px` }"
  >
    S
  </span>
</template>
