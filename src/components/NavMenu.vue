<template>
<div class="nav-menu" >
  <el-menu mode="horizontal" backgroud-color="#545c64">
    <el-submenu index="1">
      <el-menu-item index="1-1">
        <template>
          <i class="el-icon-message"></i>
          <span>菜单1</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>

<<script>
export default {
  name: 'nav-menu'
}
</script>

<style>
.nav-menu {
  margin-left: 20vh;
}
</style>
