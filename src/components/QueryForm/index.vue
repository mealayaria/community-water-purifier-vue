<template>
  <div class="query-form">
    <div>
      <span class="choose-label">机器名称</span>
      <el-cascader :options="options" :props="props" ></el-cascader>
    </div>
    <div>
      <span class="choose-label">起止日期</span>
      <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" :default-value="monthStart"></el-date-picker>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [{
          addr: '水苑长桥',
          machine: [{label: '01'}]
        }],
        props: {
          value: 'addr',
          label: 'addr',
          children: 'machine'
        }
      }
    },
    computed: {
      monthStart () {
        return new Date()
      }
    }
  }
</script>

<style scoped>
.query-form {
  display: flex;
  justify-content: space-around;
}
.choose-label {
  margin-right: 20px;
}
</style>