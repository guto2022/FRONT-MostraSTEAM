import { ref, computed } from 'vue'

const STORAGE_KEY = 'mostra-steam:favorites'

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeStorage(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // localStorage indisponível — falha silenciosa, o app continua
    // funcional apenas sem persistência.
  }
}

const favoriteIds = ref<string[]>(readStorage())

export function useFavorites() {
  function isFavorite(activityId: string): boolean {
    return favoriteIds.value.includes(activityId)
  }

  function toggleFavorite(activityId: string): void {
    if (isFavorite(activityId)) {
      favoriteIds.value = favoriteIds.value.filter((id) => id !== activityId)
    } else {
      favoriteIds.value = [...favoriteIds.value, activityId]
    }
    writeStorage(favoriteIds.value)
  }

  const favoriteCount = computed(() => favoriteIds.value.length)

  return {
    favoriteIds: computed(() => favoriteIds.value),
    favoriteCount,
    isFavorite,
    toggleFavorite,
  }
}
