import { createRouter, createWebHistory } from 'vue-router'
import appRoutes from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...appRoutes],
})

export default router
