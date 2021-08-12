import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    props: true,
    component: () => import('@/pages/Main.vue'),
    meta: {
      title: 'Search users',
    },
  },
  {
    path: '/id=:id',
    name: 'profile',
    props: true,
    component: () => import('@/pages/TheProfile.vue'),
    meta: {
      title: 'User profile',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const DEFAULT_TITLE = 'Search service'
  Vue.nextTick(() => {
    to.meta === undefined
      ? (document.title = DEFAULT_TITLE)
      : (document.title = to.meta.title)
  })
  next()
})
export default router
