<template>
<!-- <div class="side-bar-container"> -->
  <el-menu class="side-bar" default-active="2" mode="vertical" :collapse="open">
      <el-menu-item index="1"><i class="el-icon-menu"></i><span slot="title">首页</span></el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>净水管理</span>
        </template>
        <el-menu-item index="2-1">数据输入</el-menu-item>
        <el-menu-item index="2-2">数据查询</el-menu-item>
      </el-submenu>
      <router-link to="input">
        <el-menu-item index="3"><i class="el-icon-menu"></i><span slot="title">数据输入</span></el-menu-item>
      </router-link>
      <el-menu-item index="4"><i class="el-icon-setting"></i><span slot="title">数据查询</span></el-menu-item>
  </el-menu>
<!-- </div> -->
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {

    }
  },
  computed: {
    open: function () {
      return this.$store.state.app.sidebar.isCollapse
    }
  }
}
</script>

<style>
.side-bar-container {
  height: 100%;
}
</style>
