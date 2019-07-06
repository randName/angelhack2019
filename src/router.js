import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '@/views/Main')
  },
  {
    path: '/room/:id',
    name: 'Room',
    component: () => import(/* webpackChunkName: "room" */ '@/views/Room')
  },
  {
    path: '*',
    redirect: '/main'
  }
]

export default new Router({
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})
