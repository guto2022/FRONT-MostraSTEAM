import type { MapData } from '@/types'

/**
 * Planta aérea oficial do campus. Quase todas as salas ficam no
 * mesmo prédio (Bloco F, faixa superior da imagem); B03/B04 ficam no
 * prédio comprido à direita (Bloco B). Como ainda não temos a planta
 * interna sala a sala, as posições abaixo são uma aproximação dentro
 * desses prédios — ajuste x/y à vontade, sem mexer em componentes.
 */
export const mapData: MapData = {
  image: '/assets/mapa/mapa-blocos.png',
  isImageProvisional: false,
  width: 889,
  height: 1769,
  markers: [
    { id: 'marker-corredor-f', roomCode: 'CORREDOR-F', label: 'Corredor F', x: 64, y: 25 },
    { id: 'marker-f01', roomCode: 'F01', label: 'F01', x: 28, y: 12 },
    { id: 'marker-f02', roomCode: 'F02', label: 'F02', x: 28, y: 8 },
    { id: 'marker-f03', roomCode: 'F03', label: 'F03', x: 34, y: 6 },
    { id: 'marker-f05', roomCode: 'F05', label: 'F05', x: 34, y: 12 },
    { id: 'marker-f08', roomCode: 'F08', label: 'F08', x: 42, y: 6 },
    { id: 'marker-f13', roomCode: 'F13', label: 'F13', x: 80, y: 6 },
    { id: 'marker-f18', roomCode: 'F18', label: 'F18', x: 70, y: 6 },
    { id: 'marker-f20', roomCode: 'F20', label: 'F20', x: 60, y: 6 },
    { id: 'marker-b03', roomCode: 'B03', label: 'B03', x: 70, y: 83 },
    { id: 'marker-b04', roomCode: 'B04', label: 'B04', x: 75, y: 83 },
  ],
}
