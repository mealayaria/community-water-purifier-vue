<template>
<!-- <div class="side-bar-container"> -->
  <el-menu class="side-bar" default-active="2" mode="vertical" :collapse="open">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>净水管理</span>
        </template>
        <el-menu-item index="1-1">数据输入</el-menu-item>
        <el-menu-item index="1-2">数据查询</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">数据输入</el-menu-item>
      <el-menu-item index="3">数据查询</el-menu-item>
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
      console.log(this.$store)
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
