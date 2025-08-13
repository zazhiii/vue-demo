import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/login',
      component: () => import('@/views/login'),
    },
    {
      path: '/',
      component: () => import('@/views/layout'),
    },
    {
        path: '/search',
        component: () => import('@/views/search'),
    },
    {
        path: '/search/list',
        component: () => import('@/views/search/list'),
    },
    {
        path: '/prodetail/:id',
        component: () => import('@/views/prodetail'),
    },
    {
        path: '/pay',
        component: () => import('@/views/pay'),
    },
    {
        path: '/myorder',
        component: () => import('@/views/myorder'),
    }
  ]

const router = new VueRouter({
  routes
})

export default router
