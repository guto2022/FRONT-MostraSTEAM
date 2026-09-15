<script setup lang="ts">
import type { Activity } from '@/types'
import { joinRoomCodes } from '@/utils/text'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder.vue'
import Badge from '@/components/ui/Badge.vue'
import FavoriteButton from './FavoriteButton.vue'
import ActivityBadge from './ActivityBadge.vue'

const props = defineProps<{ activity: Activity }>()
</script>

<template>
  <router-link
    :to="{ name: 'activity-detail', params: { id: activity.id } }"
    class="group block bg-white rounded-lg overflow-hidden ring-1 ring-ink-100 hover:ring-sesiBlue-300 transition-colors"
  >
    <div class="relative">
      <PhotoPlaceholder :src="activity.image" :alt="activity.title" :label="activity.title" :has-real-image="activity.hasRealImage" />
      <div class="absolute top-2.5 right-2.5">
        <FavoriteButton :activity-id="activity.id" :activity-title="activity.title" />
      </div>
      <div v-if="activity.isFeatured" class="absolute top-2.5 left-2.5">
        <Badge tone="sesiGreen">Destaque</Badge>
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-center gap-1.5 flex-wrap mb-2">
        <Badge tone="neutral">Atividade contínua</Badge>
        <ActivityBadge :category-id="activity.category" />
      </div>
      <h3 class="font-bold text-ink-900 leading-snug group-hover:text-sesiBlue-700">{{ activity.title }}</h3>
      <p class="text-sm text-ink-500 mt-1.5 flex items-center gap-1.5">
        <AppIcon name="pin" :size="15" class="shrink-0 text-ink-400" />
        {{ joinRoomCodes(activity.rooms) }}
      </p>
      <p v-if="activity.teachers.length" class="text-sm text-ink-400 mt-1 truncate">{{ activity.teachers.join(', ') }}</p>
    </div>
  </router-link>
</template>
