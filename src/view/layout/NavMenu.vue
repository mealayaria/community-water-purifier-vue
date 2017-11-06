<template>
  <el-menu mode="horizontal" backgroud-color="#545c64">
    <el-button type="primary" @click="toogle">点击就送</el-button>
    <!-- <el-submenu index="1">
      <template slot="title">
          <i class="el-icon-message"></i>
          <span>菜单1</span>
      </template>
      <el-menu-item index="1-1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>菜单1</span>
        </template>
      </el-menu-item>
    </el-submenu> -->
  </el-menu>
</template>

<<script>
export default {
  name: 'nav-menu',
  data () {
    return {
    }
  },
  methods: {
    toogle: function () {
      this.$store.commit('TOGGLE_SIDEBAR')
    }
  }
}
</script>

<style>
</style>
