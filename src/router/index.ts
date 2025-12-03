import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: CategoryView,
    },
    {
      path: "/products/:productId",
      name: "product",
      component: ProductView
    }
  ],
})

export default router
