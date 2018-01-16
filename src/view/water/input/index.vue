<template>
  <div class="water-input">
    <el-form :model="inputForm" label-position="right" label-width="80px">
      <el-col :span="8">
        <el-form-item label="机器名称">
          <el-cascader :options="options" :props="props" ></el-cascader>
        </el-form-item>
        <el-form-item label="刷卡金额" prop="card">
          <el-input v-model="inputForm.card" placeholder="请输入刷卡金额"></el-input>
        </el-form-item>
        <el-form-item label="投币金额" prop="coins">
          <el-input v-model="inputForm.coins" placeholder="请输入投币金额"></el-input>
        </el-form-item>
        <el-form-item label="用水量" prop="water">
          <el-input v-model="inputForm.water" placeholder="请输入用水量"></el-input>
        </el-form-item>
        <el-form-item label="用电量" prop="power">
          <el-input v-model="inputForm.power" placeholder="请输入用电量"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-col>
    </el-form>
    <compare-table></compare-table>
    <!-- <el-table data="">
      <el-table-column prop="" label=""></el-table-column>
      <el-table-column prop="machineId" label="机器名称"></el-table-column>
      <el-table-column prop="card" label="刷卡金额"></el-table-column>
      <el-table-column prop="coins" label="投币金额"></el-table-column>
      <el-table-column prop="water" label="用水量"></el-table-column>
      <el-table-column prop="power" label="用电量"></el-table-column>
    </el-table> -->
  </div>
</template>

<script>
  import QueryForm from '@/components/QueryForm'
  import CompareTable from '@/components/CompareTable'
  export default {
    name: 'water-input',
    components: {
      QueryForm,
      CompareTable
    },
    data () {
      return {
        inputForm: {
          machineId: null,
          card: null,
          coins: null,
          water: null,
          power: null
        },
        options: [],
        props: null,
        lastRecord: {

        },
        currentRecord: {

        }
      }
    },
    methods: {
      onSubmit () {

      }
    }
  }
</script>

<style scoped>
/* .el-form {
  display: flex;
  flex: auto;
} */
.el-table {
}

</style>