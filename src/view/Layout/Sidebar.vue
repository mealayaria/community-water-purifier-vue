<template>
<!-- <div class="side-bar-container"> -->
  <el-menu class="side-bar" default-active="2" mode="vertical" :collapse="open" router="true">
    <sidebar-item :routers="routers"></sidebar-item>
      <!-- <el-menu-item index="1" :route="path1"><i class="el-icon-menu"></i><span slot="title">首页</span></el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>净水管理</span>
        </template>
        <el-menu-item index="2-1">数据输入</el-menu-item>
        <el-menu-item index="2-2">数据查询</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" :route="path"><template slot="title"><i class="el-icon-menu"></i><span>数据输入</span></template></el-menu-item>
      <el-menu-item index="4" route="{path:'input1'}"><i class="el-icon-setting"></i><span slot="title">数据查询</span></el-menu-item>
 -->  </el-menu>
<!-- </div> -->
</template>

<script>
import { constantRouteMap } from '@/router/index'
import SidebarItem from './SidebarItem'
export default {
  name: 'side-bar',
  components: { SidebarItem },
  data () {
    return {
    }
  },
  computed: {
    open: function () {
      return this.$store.state.app.sidebar.isCollapse
    },
    routers: function () {
      return constantRouteMap
    }
  }
}
</script>

<style>
.side-bar-container {
  height: 100%;
}
</style>
