import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'

Vue.use(Router)

export const constantRouteMap = [
  {path: '/login', component: Login},
  {path: '/dashboard', component: Layout}
]

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Layout
    }
  ]
})
