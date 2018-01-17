import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import Input from '@/view/water/input'
import Query from '@/view/water/query'
import Dashboard from '@/view/dashboard'
import Machine from '@/view/manage/Machine'

Vue.use(Router)

export const constantRouteMap = [
  {path: '/login', component: Login, name: '登录'},
  // {path: '/dashboard', component: Layout},
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {path: '/dashboard', component: Dashboard, name: '首页'},
      // {
        // path: '/water',
        // component: Layout,
        // name: '净水管理',
        // children: [
          {path: '/water/input', component: Input, name: '数据输入'},
          {path: '/water/query', component: Query, name: '数据查询'},
          {path: '/machine', component: Machine, name: '设备管理'},
          {path: '/address', component: Input, name: '小区管理'}
        // ]
      // }
    ],
    name: '首页'
  }

]

export const asyncRouteMap = [
  {
    path: '/water',
    component: Layout,
    children: [
      {path: '/input', component: Input, name: '数据输入'},
      {path: '/query', component: Input, name: '数据查询'}
    ]
  }
]

export default new Router({
  routes: constantRouteMap
})
