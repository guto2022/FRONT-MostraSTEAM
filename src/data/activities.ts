import type { Activity } from '@/types'

/**
 * Atividades/projetos reais da Mostra STEAM.
 * Títulos, professores e salas são dados REAIS. Descrições, turmas,
 * participantes e imagens ainda não foram coletados — marcados como
 * "a confirmar" via `isDescriptionProvisional` / `isClassesProvisional` /
 * `isParticipantsProvisional` / `hasRealImage`. Nenhum horário é
 * atribuído: todas são `availability: 'continuous'`.
 */
export const activities: Activity[] = [
  {
    id: 'galeria-de-arte', title: 'Galeria de arte',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Carla'], rooms: ['F08'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'arte', image: '/assets/photos/atividades/galeria-de-arte.jpg', hasRealImage: false,
    isFeatured: true, availability: 'continuous',
  },
  {
    id: 'globalizacao-em-arte', title: 'Globalização em Arte: Arte, Geografia e Inglês',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Carla', 'Bruno', 'Rhaabe'], rooms: ['F13'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'arte', image: '/assets/photos/atividades/globalizacao-em-arte.jpg', hasRealImage: false,
    isFeatured: false, availability: 'continuous',
  },
  {
    id: 'jogos-desafios-charadas-enigmas-matematicos', title: 'Jogos, desafios, charadas e enigmas matemáticos',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Daniela', 'Tatiana', 'César'], rooms: ['F01', 'F02', 'F03'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'matematica', image: '/assets/photos/atividades/jogos-desafios-enigmas-matematicos.jpg', hasRealImage: false,
    isFeatured: true, availability: 'continuous',
  },
  {
    id: 'engenheiro-por-um-dia', title: 'Engenheiro por um dia',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Juliane'], rooms: ['F05'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'engenharia', image: '/assets/photos/atividades/engenheiro-por-um-dia.jpg', hasRealImage: false,
    isFeatured: true, availability: 'continuous',
  },
  {
    id: 'o-caminho-dos-direitos', title: 'O Caminho dos Direitos',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Cristiano'], rooms: ['F20'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'cidadania', image: '/assets/photos/atividades/o-caminho-dos-direitos.jpg', hasRealImage: false,
    isFeatured: false, availability: 'continuous',
  },
  {
    id: 'experimentos-no-laboratorio', title: 'Experimentos no Laboratório',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Bruna', 'Valéria', 'Daniele'], rooms: ['B04', 'B03'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'ciencias', image: '/assets/photos/atividades/experimentos-no-laboratorio.jpg', hasRealImage: false,
    isFeatured: true, availability: 'continuous',
  },
  {
    id: 'oficina-fotografia-e-audiovisual', title: 'Oficina de fotografia e audiovisual (foto e podcast)',
    description: 'Informação a confirmar.', isDescriptionProvisional: true,
    teachers: ['Sávio'], rooms: ['CORREDOR-F'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'midia', image: '/assets/photos/atividades/oficina-fotografia-e-audiovisual.jpg', hasRealImage: false,
    isFeatured: false, availability: 'continuous',
  },
  {
    id: 'projeto-sem-titulo', title: 'Projeto sem título',
    description: 'Informação a confirmar. Título definitivo também a confirmar.', isDescriptionProvisional: true,
    teachers: ['Daniele'], rooms: ['F18'],
    classes: [], isClassesProvisional: true,
    participants: [], isParticipantsProvisional: true,
    category: 'diversos', image: '/assets/photos/atividades/projeto-sem-titulo.jpg', hasRealImage: false,
    isFeatured: false, availability: 'continuous',
  },
]

export function getActivityById(id: string): Activity | undefined {
  return activities.find((a) => a.id === id)
}

export function getActivitiesByRoomCode(code: string): Activity[] {
  return activities.filter((a) => a.rooms.includes(code))
}

export function getFeaturedActivities(): Activity[] {
  return activities.filter((a) => a.isFeatured)
}
