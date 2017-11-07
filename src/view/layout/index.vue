<template>
<div class="app-wrapper">
  <el-container>
    <el-aside width="15vw">
      <sidebar></sidebar>
     </el-aside>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main><app-content></app-content></el-main>
      <el-footer>Footer</el-footer>
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
import NavMenu from './NavMenu'
import Sidebar from './Sidebar'
import AppContent from './AppContent'
export default {
  name: 'layout',
  components: {
    NavMenu,
    Sidebar,
    AppContent
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.app-wrapper {
  display: flex;
  flex: auto;
  min-height: 98vh;
}
.main-container {
  /* margin-left: 15vw; */
  top: 0;
  bottom: 0;
  overflow-y: auto;
}
</style>