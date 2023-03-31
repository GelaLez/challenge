import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/postView.vue'),
      meta: {
        title: 'post'
      }
    }
  ]
})

export default router