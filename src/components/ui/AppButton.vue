<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    as?: 'button' | 'a' | 'router-link'
    to?: string
    href?: string
    type?: 'button' | 'submit'
    fullWidth?: boolean
  }>(),
  { variant: 'primary', size: 'md', as: 'button', type: 'button', fullWidth: false },
)

const tag = computed(() => {
  if (props.as === 'router-link') return 'router-link'
  if (props.as === 'a') return 'a'
  return 'button'
})

// PrimaryButton/SecondaryButton expressos como variantes de um único
// componente, evitando duplicar markup idêntico em dois arquivos.
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-sesiGreen-600 text-white hover:bg-sesiGreen-700 active:bg-sesiGreen-800'
    case 'ghost':
      return 'bg-transparent text-ink-700 hover:bg-ink-100 active:bg-ink-200'
    case 'outline':
      return 'bg-white text-sesiBlue-700 border border-ink-200 hover:border-sesiBlue-400 hover:bg-sesiBlue-50'
    default:
      return 'bg-sesiBlue-700 text-white hover:bg-sesiBlue-800 active:bg-sesiBlue-900'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'h-9 px-3.5 text-sm gap-1.5'
    case 'lg': return 'h-[3.25rem] px-6 text-base gap-2.5'
    default: return 'h-11 px-5 text-sm gap-2'
  }
})
</script>

<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :to="tag === 'router-link' ? to : undefined"
    :href="tag === 'a' ? href : undefined"
    class="inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none select-none"
    :class="[variantClasses, sizeClasses, fullWidth ? 'w-full' : '']"
  >
    <slot name="icon-left" /><slot /><slot name="icon-right" />
  </component>
</template>
