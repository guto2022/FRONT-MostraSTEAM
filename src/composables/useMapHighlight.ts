import { ref } from 'vue'

/**
 * Estado compartilhado (singleton) da sala atualmente destacada no
 * mapa — usado dentro da página do Mapa, entre a seleção de um
 * marcador e o cartão de detalhe exibido abaixo dele.
 */
const highlightedRoomCode = ref<string | null>(null)

export function useMapHighlight() {
  function highlight(roomCode: string | null): void { highlightedRoomCode.value = roomCode }
  function clear(): void { highlightedRoomCode.value = null }
  return { highlightedRoomCode, highlight, clear }
}
