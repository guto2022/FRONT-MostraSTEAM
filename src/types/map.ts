/**
 * Estrutura do mapa da Mostra — planta aérea do campus. As posições
 * (x, y) são percentuais (0–100) relativas à imagem. A maioria das
 * salas fica dentro do mesmo prédio (Bloco F) visível na planta;
 * como ainda não temos a planta interna room a room, as posições
 * abaixo são uma aproximação dentro/perto desse prédio — ajustáveis
 * a qualquer momento sem mexer em componentes.
 */
export interface MapRoomMarker {
  id: string
  /** código da Room associada, ex: 'F08' */
  roomCode: string
  label: string
  x: number
  y: number
}

export interface MapData {
  image: string
  isImageProvisional: boolean
  width: number
  height: number
  markers: MapRoomMarker[]
}
