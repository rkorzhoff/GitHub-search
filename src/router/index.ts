import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'main',
        props: true,
        component: () => import('@/pages/Main.vue'),

    }
    // {
    //     path: '*',
    //     name: '404',
    //     component: () => import('@/components/PageNotFound.vue'),
    //     meta: { title: 'Страница не найдена' },
    // },

]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
    const DEFAULT_TITLE = 'Admin Panel'
    Vue.nextTick(() => {
        to.meta === undefined ? document.title = DEFAULT_TITLE : document.title = to.meta.title
    })
    next()
})
export default router
