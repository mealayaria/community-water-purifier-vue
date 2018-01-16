import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import Layout from '@/view/layout'
import Input from '@/view/water/input'
import Dashboard from '@/view/dashboard'

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
          {path: '/water/query', component: Input, name: '数据查询'}
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
