export type Floor = 'baixo' | 'terreo' | 'superior'

/**
 * Uma sala/local físico da escola (sala, corredor, bloco).
 * O nome amigável oficial ainda não foi coletado para todas as salas
 * — por isso `name` pode ser um rótulo genérico como "Sala F08" até
 * a informação real ser fornecida.
 */
export interface Room {
  id: string
  code: string
  name: string
  floor: Floor
  description: string
  isDescriptionProvisional: boolean
  image: string
  hasRealImage: boolean
  /** ids de Activity que acontecem nesta sala */
  activityIds: string[]
}
