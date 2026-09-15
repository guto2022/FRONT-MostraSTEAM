import type { Category } from '@/types'

/**
 * Categorias com cor STEAM associada (usada só em detalhes pequenos:
 * ponto indicador, tag, filtro). Ciência e Matemática compartilham o
 * verde por definição da identidade visual fornecida. "Outras
 * Atividades" não corresponde a uma disciplina STEAM específica, por
 * isso usa tom neutro em vez de forçar uma cor que não se aplica.
 */
export const categories: Category[] = [
  { id: 'arte', label: 'Arte e Cultura', icon: 'palette', color: '#46B8B9' },
  { id: 'ciencias', label: 'Ciências', icon: 'flask', color: '#2EA436' },
  { id: 'matematica', label: 'Matemática', icon: 'grid', color: '#2EA436' },
  { id: 'engenharia', label: 'Engenharia', icon: 'cog', color: '#CD3729' },
  { id: 'cidadania', label: 'Cidadania e Direitos', icon: 'shield', color: '#0C748D' },
  { id: 'midia', label: 'Mídia e Audiovisual', icon: 'camera', color: '#F1B813' },
  { id: 'diversos', label: 'Outras Atividades', icon: 'spark', color: '#848da0' },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}
