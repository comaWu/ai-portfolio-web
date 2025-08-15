import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'landing', component: () => import('../views/Landing.vue'), meta: { title: 'AJOY' } },
  { path: '/home', name: 'home', component: () => import('../views/Home.vue'), meta: { title: '首頁｜AJOY' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router