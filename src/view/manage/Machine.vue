<template>
<el-col :span="24">
  <el-form :model="QueryForm">
    <el-form-item label="小区">
      <el-select v-model="QueryForm.addressId"></el-select>
    </el-form-item>
  </el-form>
  <el-table :data="MachineList">
    <el-table-column prop="name" label="机器名称"></el-table-column>
    <el-table-column prop="address" label="所在小区"></el-table-column>
  </el-table>
</el-col>
</template>

<script>
  export default {
    data () {
      return {
        QueryForm: {
          addressId: null
        },
        MachineList: []
      }
    }
  }
</script>

<style scoped>

</style>