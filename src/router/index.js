import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import input from '@/view/water/input'
import Dashboard from '@/view/dashboard'

Vue.use(Router)

export const constantRouteMap = [
  {path: '/login', component: Login},
  // {path: '/dashboard', component: Layout},
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [{path: 'dashboard', component: Dashboard, name: 'dashboard'}]
  },
  {
    path: '/water',
    component: Layout,
    children: [{path: '/input', component: input, name: '数据输入'}]
  }
]

export const asyncRouteMap = [
  {
    path: '/water',
    component: Layout,
    children: [{path: '/input', component: input, name: '数据输入'}]
  }
]

export default new Router({
  routes: constantRouteMap
})
