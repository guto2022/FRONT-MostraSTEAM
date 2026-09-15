# Mostra STEAM · SESI SENAI Chapecó

Guia digital da Mostra STEAM. Ajuda qualquer visitante — mesmo alguém
que nunca esteve na escola — a descobrir atividades, encontrar salas
e se localizar durante o evento, usando só o celular.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build / Vercel

```bash
npm run build
npm run preview
```

Suba o repositório e importe na Vercel (Vite é detectado automaticamente).
Build command `npm run build`, output `dist`. `vercel.json` já cobre
o roteamento de SPA.

## Decisões de identidade visual

- **Azul SESI** (`sesiBlue`, ancorado em `#164192`) é a cor estrutural:
  navegação, botões primários, identidade. Não domina a tela inteira.
- **Verde SESI** (`sesiGreen`, ancorado em `#65B12E`) é o acento
  secundário: favoritos, confirmações, botão "Explorar".
- **Cores STEAM** (`steam.*` no `tailwind.config.js`) aparecem só em
  detalhes pequenos — o ponto colorido do `ActivityBadge`, nunca como
  fundo de card ou tela inteira.
- Sem gradientes, sem glassmorphism, sem sombra decorativa em cards
  comuns — sombra (`shadow-float`) só em elementos que realmente
  flutuam: bottom sheet, botão do mapa no menu, controles de zoom.

## Navegação: "Ver no mapa" não troca de página

"Ver no mapa" (na Atividade e na Sala) abre um **painel deslizando de
baixo pra cima** (`BottomSheet` + `MapPreviewSheet`), por cima da
página atual — não navega para outra rota. Fechar o painel devolve o
usuário exatamente onde estava. A página `/mapa` continua existindo
para quem quer explorar livremente a partir do menu inferior.

## Trocando MOCK → REAL

| O que chegar | O que editar |
|---|---|
| Logo oficial do SESI | `public/assets/branding/sesi-logo.svg` + trocar o `src` em `src/components/branding/SesiLogo.vue` |
| Planta oficial | `public/assets/mapa/` (novo arquivo) + `src/data/map.ts` (`image`, posições `x`/`y`) |
| Fotos das atividades | `public/assets/photos/atividades/<slug>.jpg` + marque `hasRealImage: true` em `src/data/activities.ts` |
| Fotos das salas | `public/assets/photos/salas/<codigo>.jpg` + `hasRealImage: true` em `src/data/rooms.ts` |
| Descrições oficiais | `description` em `src/data/activities.ts` / `src/data/rooms.ts` |
| Turmas / participantes | `classes` / `participants` em `src/data/activities.ts` |
| Textos institucionais | `src/data/school.ts` |

Nenhum horário foi inventado — as atividades são todas contínuas
(`availability: 'continuous'`).

## Estrutura

```
src/
├── components/
│   ├── ui/          # AppButton, Badge, SearchInput, FilterChip, EmptyState, BottomSheet...
│   ├── navigation/  # DesktopNavigation, BottomNavigation
│   ├── activity/    # ActivityCard, ActivityBadge, FavoriteButton, FilterBar
│   ├── room/        # RoomCard, RoomBadge
│   ├── map/         # SchoolMap, MapRoom, MapLegend, MapPreviewSheet
│   └── branding/    # SesiLogo
├── composables/     # useFavorites, useActivitySearch, useMapHighlight
├── data/            # única fonte de verdade do conteúdo (mocks marcados "a confirmar")
├── layouts/
├── pages/
├── router/
├── styles/
├── types/
└── utils/
```

## Fluxo principal

```
Atividade → Sala(s) → "Ver no mapa" (painel) → Sala destacada no mapa
```

E o inverso: Mapa → Sala → Atividades daquela sala → Detalhe da atividade.

## O que ainda é mock

Descrições, turmas, participantes, fotos, a planta da escola e a logo
são placeholders explicitamente identificados na interface ("Informação
a confirmar"). Títulos de atividades, professores e códigos de sala
(F01, F08, B03...) são dados reais fornecidos pela organização.
