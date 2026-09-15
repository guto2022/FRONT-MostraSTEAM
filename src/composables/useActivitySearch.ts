import { ref, computed, type Ref } from 'vue'
import type { Activity } from '@/types'
import { getRoomByCode } from '@/data'

export interface ActivityFilters {
  category: string | null
  roomCode: string | null
}

function normalize(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function useActivitySearch(source: Ref<Activity[]>) {
  const query = ref('')
  const filters = ref<ActivityFilters>({ category: null, roomCode: null })

  const results = computed<Activity[]>(() => {
    let list = source.value
    if (filters.value.category) list = list.filter((a) => a.category === filters.value.category)
    if (filters.value.roomCode) list = list.filter((a) => a.rooms.includes(filters.value.roomCode as string))

    const q = normalize(query.value.trim())
    if (!q) return list

    return list.filter((activity) => {
      const haystacks: string[] = [
        activity.title,
        ...activity.teachers,
        ...activity.rooms,
        ...activity.rooms.map((code) => getRoomByCode(code)?.name ?? ''),
        activity.category,
      ]
      return haystacks.some((h) => normalize(h).includes(q))
    })
  })

  function clearQuery(): void { query.value = '' }
  function clearFilters(): void { filters.value = { category: null, roomCode: null } }
  function clearAll(): void { clearQuery(); clearFilters() }

  const hasActiveFilters = computed(
    () => Boolean(filters.value.category) || Boolean(filters.value.roomCode),
  )

  return { query, filters, results, clearQuery, clearFilters, clearAll, hasActiveFilters }
}
