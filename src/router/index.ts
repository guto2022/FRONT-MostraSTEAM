import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('@/pages/Home.vue'), meta: { title: 'Início' } },
    { path: '/atividades', name: 'activities', component: () => import('@/pages/Activities.vue'), meta: { title: 'Atividades' } },
    // Rota preparada para QR Code físico em cada sala/projeto.
    { path: '/atividades/:id', name: 'activity-detail', component: () => import('@/pages/ActivityDetail.vue'), props: true, meta: { title: 'Atividade' } },
    { path: '/salas', name: 'rooms', component: () => import('@/pages/Rooms.vue'), meta: { title: 'Salas' } },
    { path: '/salas/:id', name: 'room-detail', component: () => import('@/pages/RoomDetail.vue'), props: true, meta: { title: 'Sala' } },
    { path: '/mapa', name: 'map', component: () => import('@/pages/Map.vue'), meta: { title: 'Mapa' } },
    { path: '/minha-mostra', name: 'my-show', component: () => import('@/pages/MyShow.vue'), meta: { title: 'Minha Mostra' } },
    { path: '/sobre', name: 'about', component: () => import('@/pages/About.vue'), meta: { title: 'Sobre' } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/pages/NotFound.vue'), meta: { title: 'Página não encontrada' } },
  ],
})

router.afterEach((to) => {
  const base = 'Mostra STEAM · SESI SENAI Chapecó'
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} · ${base}` : base
})

export default router
