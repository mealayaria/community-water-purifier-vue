<template>
<div class="app-wrapper">
  <el-container>
    <el-aside width="20vh">
      <sidebar></sidebar>
     </el-aside>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main><div></div></el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
</div>
 <!-- <div class="app-wrapper"> -->
    <!-- <sidebar></sidebar> -->
    <!-- <div class="main-container"> -->
      <!-- <nav-menu></nav-menu> -->
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Sidebar from '@/components/Sidebar'
export default {
  name: 'layout',
  components: {
    NavMenu,
    Sidebar
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.app-wrapper {
  display: -webkit-flex;
  display: flex;
  flex: auto
}
.main-container {
  margin-left: 200px;
  top: 0;
  bottom: 0;
  overflow-y: auto;
}
</style>
