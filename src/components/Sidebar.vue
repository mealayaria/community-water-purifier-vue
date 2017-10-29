<template>
<div class="side-bar-container">
  <img src=""/>
  <el-menu class="side-bar" default-active="1" mode="vertical">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>菜单1</span>
        </template>
        <el-menu-item index="1-1">导航1</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">菜单2</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'side-bar'
}
</script>

<style>
.side-bar-container {
  width: 200px;
  height: 100%;
  position: fixed;
}
</style>
