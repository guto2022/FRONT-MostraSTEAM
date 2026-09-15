/**
 * Uma atividade/projeto da Mostra STEAM.
 *
 * IMPORTANTE — regra do desafio: as atividades não possuem horários
 * individuais. Elas acontecem de forma contínua durante o evento.
 * `availability` é sempre 'continuous' hoje; o campo existe para que,
 * no futuro, outros modos (ex: 'scheduled') possam ser suportados
 * sem quebrar a arquitetura.
 */
export type ActivityAvailability = 'continuous'

export interface Activity {
  id: string
  title: string
  description: string
  isDescriptionProvisional: boolean
  teachers: string[]
  /** códigos de Room, ex: ['F01', 'F02'] */
  rooms: string[]
  classes: string[]
  isClassesProvisional: boolean
  participants: string[]
  isParticipantsProvisional: boolean
  category: string
  image: string
  hasRealImage: boolean
  isFeatured: boolean
  availability: ActivityAvailability
}
