<template>
  <div class="input">
    <el-form :model="inputForm">
      <el-form-item label="机器名称">
        <el-select v-model="inputForm.machineId" placeholder="请选择">
          <el-option name="机器1" label="机器1" value="0"></el-option>
          <el-option name="机器2" label="机器2" value="1"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'input',
    data () {
      return {
        inputForm: {
          machineId: null
        }
      }
    }
  }
</script>

<style scoped>

</style>