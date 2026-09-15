<script setup lang="ts">
withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    <template v-if="name === 'home'">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
    </template>
    <template v-else-if="name === 'map'">
      <path d="M9 4 3 6.5v13L9 17l6 3 6-2.5v-13L15 7 9 4Z" />
      <path d="M9 4v13" /><path d="M15 7v13" />
    </template>
    <template v-else-if="name === 'grid'">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </template>
    <template v-else-if="name === 'building'">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 7h1M8 11h1M8 15h1M15 7h1M15 11h1M15 15h1" />
      <path d="M10 21v-4h4v4" />
    </template>
    <template v-else-if="name === 'heart'">
      <path d="M12 20.5s-7.5-4.6-9.9-9.3C.7 8 2.1 4.7 5.4 4c2.2-.4 4.2.6 5.6 2.5l1 1.3 1-1.3C14.4 4.6 16.4 3.6 18.6 4c3.3.7 4.7 4 3.3 7.2C19.5 15.9 12 20.5 12 20.5Z" />
    </template>
    <template v-else-if="name === 'heart-filled'">
      <path d="M12 20.5s-7.5-4.6-9.9-9.3C.7 8 2.1 4.7 5.4 4c2.2-.4 4.2.6 5.6 2.5l1 1.3 1-1.3C14.4 4.6 16.4 3.6 18.6 4c3.3.7 4.7 4 3.3 7.2C19.5 15.9 12 20.5 12 20.5Z" fill="currentColor" />
    </template>
    <template v-else-if="name === 'search'">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.5-4.5" />
    </template>
    <template v-else-if="name === 'x'"><path d="M6 6l12 12M18 6 6 18" /></template>
    <template v-else-if="name === 'chevron-right'"><path d="m9 5 7 7-7 7" /></template>
    <template v-else-if="name === 'chevron-left'"><path d="m15 5-7 7 7 7" /></template>
    <template v-else-if="name === 'check'"><path d="m5 12.5 4.5 4.5L19 7" /></template>
    <template v-else-if="name === 'filter'"><path d="M4 5h16M7 12h10M10.5 19h3" /></template>
    <template v-else-if="name === 'compass'">
      <circle cx="12" cy="12" r="9" /><path d="m15 9-4.5 1.5L9 15l4.5-1.5L15 9Z" />
    </template>
    <template v-else-if="name === 'pin'">
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.4" />
    </template>
    <template v-else-if="name === 'arrow-left'"><path d="M19 12H5M11 6l-6 6 6 6" /></template>
    <template v-else-if="name === 'palette'">
      <path d="M12 3a9 8.5 0 1 0 0 17c1.4 0 2-1 2-2 0-.7-.4-1.2-.9-1.7-.4-.4-.7-.9-.7-1.4 0-.9.7-1.6 1.6-1.6H16a4 4 0 0 0 4-4C20 5.7 16.4 3 12 3Z" />
      <circle cx="7.5" cy="11" r="1" fill="currentColor" /><circle cx="9.5" cy="7.3" r="1" fill="currentColor" /><circle cx="14.5" cy="7.3" r="1" fill="currentColor" />
    </template>
    <template v-else-if="name === 'flask'">
      <path d="M9.5 3h5" /><path d="M10.5 3v6l-5 9.5A1.5 1.5 0 0 0 6.8 21h10.4a1.5 1.5 0 0 0 1.3-2.5L13.5 9V3" /><path d="M8.5 15h7" />
    </template>
    <template v-else-if="name === 'cog'">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3.5 5 6v6c0 4.5 3 7.5 7 8.5 4-1 7-4 7-8.5V6l-7-2.5Z" /><path d="m9 12 2 2 4-4" />
    </template>
    <template v-else-if="name === 'camera'">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13.5" r="3.3" />
    </template>
    <template v-else-if="name === 'spark'">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
    </template>
    <template v-else-if="name === 'menu'"><path d="M4 7h16M4 12h16M4 17h16" /></template>
    <template v-else-if="name === 'zoom-in'">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.5-4.5M10.5 7.5v6M7.5 10.5h6" />
    </template>
    <template v-else-if="name === 'zoom-out'">
      <circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.5-4.5M7.5 10.5h6" />
    </template>
    <template v-else-if="name === 'reset'">
      <path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v4.5h4.5" />
    </template>
    <template v-else-if="name === 'arrow-up'"><path d="M12 19V5M6 11l6-6 6 6" /></template>
    <template v-else-if="name === 'arrow-down'"><path d="M12 5v14M6 13l6 6 6-6" /></template>
    <template v-else><circle cx="12" cy="12" r="8" /></template>
  </svg>
</template>
