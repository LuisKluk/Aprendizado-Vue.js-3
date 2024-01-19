import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/fechamento',
    name: 'fechamento',
    component: () => import('../views/FechamentoAba.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
