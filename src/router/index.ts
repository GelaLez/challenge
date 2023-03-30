import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/postView.vue'),
      meta: {
        title: 'Post'
      }
    }
  ]
})

export default router