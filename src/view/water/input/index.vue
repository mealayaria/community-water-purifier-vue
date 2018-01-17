<template>
  <div class="water-input">
    <el-col :span="10">
      <el-form :model="inputForm" label-position="left" label-width="120px">
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
      </el-form>
    </el-col>
    <el-col :span="14">
      <compare-table :lastRecord="lastRecord" :currentRecord="currentRecord"></compare-table>
    </el-col>
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
          coins: 200,
          card: 100,
          water: 20.8,
          power: 30.2,
          time: new Date()
        },
        currentRecord: {

        }
      }
    },
    methods: {
      onSubmit () {
        this.currentRecord = {
          coins: 200,
          card: 100,
          water: 20.8,
          power: 30.2,
          time: new Date()
        }
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