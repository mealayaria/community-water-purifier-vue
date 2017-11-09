<template>
  <div class="menu-item">
    <template v-for="item in routers">
      <template v-if="item.children && item.children.length > 0" >
        <el-submenu :index="item.path" :key="item.name">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span>{{item.name}}</span>
          </template>
          <template v-for="child in item.children">
            <el-menu-item :index="item.path + '/' + child.path" :key="child.name">
              <template slot="title">
                <i class="el-icon-menu"><span>{{child.name}}</span></i>
              </template>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.path" :key="item.name">
          <template slot="title">
            <i class="el-icon-menu"><span> {{item.name}} </span></i>
          </template>
        </el-menu-item>
      </template>
     </template>
  </div>
</template>

<script>
  export default {
    props: {
      routers: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>