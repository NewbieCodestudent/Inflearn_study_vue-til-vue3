import store from "@/store"
import { createRouter, createWebHistory } from "vue-router"
// import LoginPage from '@/views/LoginPage.vue'
// import SignupPage from '@/views/SignupPage.vue'

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    // 코드 스플리팅 방법
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404Name",
    component: () => import("@/views/NotFoundPage.vue"),
  },
  {
    path: '/main',
    component: () => import("@/views/MainPage.vue"),
    meta: {auth:true},
  },
  {
    path: '/add',
    component: () => import("@/views/PostAddPage.vue"),
    meta: {auth:true},
  },
  {
    path: '/post/:id',
    component: () => import('@/views/PostEditPage.vue'),
    meta: {auth:true},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin){
    console.log('인증이 필요합니다.')
    next('/login')
    return
  }
  next()
})

export default router
