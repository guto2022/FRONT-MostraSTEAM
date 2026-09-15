import type { Room } from '@/types'

/**
 * Catálogo de salas físicas da escola.
 * Códigos (F01, F08, B03...) e andar são dados reais de localização.
 * Os nomes amigáveis oficiais ainda não foram coletados — por isso
 * usamos o rótulo genérico "Sala <código>". `activityIds` é
 * preenchido automaticamente em index.ts a partir de activities.ts.
 */
export const rooms: Room[] = [
  { id: 'f01', code: 'F01', name: 'Sala F01', floor: 'baixo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F01.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f02', code: 'F02', name: 'Sala F02', floor: 'baixo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F02.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f03', code: 'F03', name: 'Sala F03', floor: 'baixo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F03.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f05', code: 'F05', name: 'Sala F05', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F05.jpeg', hasRealImage: false, activityIds: [] },
  { id: 'f08', code: 'F08', name: 'Sala F08', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F08.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f13', code: 'F13', name: 'Sala F13', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F13.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f18', code: 'F18', name: 'Sala F18', floor: 'superior', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F18.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'f20', code: 'F20', name: 'Sala F20', floor: 'superior', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/F20.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'b03', code: 'B03', name: 'Sala B03', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/B03.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'b04', code: 'B04', name: 'Sala B04', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/B04.jpeg', hasRealImage: true, activityIds: [] },
  { id: 'corredor-f', code: 'CORREDOR-F', name: 'Corredor F', floor: 'terreo', description: 'Informação a confirmar.', isDescriptionProvisional: true, image: '/assets/photos/salas/corredor-f.jpeg', hasRealImage: false, activityIds: [] },
]

export function getRoomByCode(code: string): Room | undefined {
  return rooms.find((r) => r.code === code)
}

export function getRoomById(id: string): Room | undefined {
  return rooms.find((r) => r.id === id)
}
