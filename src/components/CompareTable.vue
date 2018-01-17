<template>
  <table width="100%" align="center">
    <template v-if="lastRecord != null && Object.keys(lastRecord).length !== 0">
        <tr>
          <el-row type="flex" justify="center">
            <el-col :span="6"><th class="header"></th></el-col>
            <el-col :span="6"><td>上期采集数据</td></el-col>
            <template v-if="currentRecord != null && Object.keys(currentRecord).length !== 0">
              <el-col :span="6"><td>本期采集数据</td></el-col>
              <el-col :span="6"><td>本期结果</td></el-col>
            </template>
          </el-row>
        </tr>
      <template v-for="label in labels">
        <tr>
          <el-row type="flex" justify="center">
            <el-col :span="6"><th class="header">{{label.name}}</th></el-col>
            <el-col :span="6"><td class="last">{{lastRecord[label.key]}}</td></el-col>
            <template v-if="currentRecord != null && Object.keys(currentRecord).length !== 0">
              <el-col :span="6"><td class="current">{{currentRecord[label.key]}}</td></el-col>
              <el-col :span="6"><td class="current">{{currentRecord[label.key] - lastRecord[label.key]}}</td></el-col>
            </template>
          </el-row>
        </tr>
      </template>
    </template>
  </table>
      <!-- <tr>
        <td class="header">刷卡金额</td>
        <td class="last">{{lastRecord.card}}</td>
        <td class="current">{{currentRecord.card}}</td>
      </tr>
      <tr>
        <td class="header">投币金额</td>
        <td class="last">{{lastRecord.coins}}</td>
        <td class="current">{{currentRecord.coins}}</td>
      </tr>
      <tr>
        <td class="header">用水量</td>
        <td class="last">{{lastRecord.water}}</td>
        <td class="current">{{currentRecord.water}}</td>
      </tr>
      <tr>
        <td class="header">用电量</td>
        <td class="last">{{lastRecord.card}}</td>
        <td class="current">{{currentRecord.power}}</td>
      </tr>
      <tr>
        <td class="header">时间</td>
        <td class="last">{{lastRecord.time}}</td>
        <td class="current">{{currentRecord.time}}</td>
      </tr> -->
</template>

<script>
   export default {
     props: {
       lastRecord: {
         type: Object
       },
       currentRecord: {
         type: Object
       },
       labels: {
         type: Array,
         default: () => [
           {
             name: '刷卡金额',
             key: 'card'
           },
           {
             name: '投币金额',
             key: 'coins'
           },
           {
             name: '用水量',
             key: 'water'
           },
           {
             name: '用电量',
             key: 'power'
           },
           {
             name: '时间',
             key: 'time'
           }
         ]
       }
     },
     mounted () {
     }
  // render (h) {
  //      console.log(Object.keys(this.lastRecord))
  //      console.log(Object.entries(this.lastRecord))
  //      let that = this
  //      if (this.lastRecord) {
  //        return h('table', {}, [
  //          h('tr', {}, [h('th', {}, ''), h('td', {}, '上期采集数据')]),
  //          ...that.labels.map(label => {
  //            return h('tr', {}, [
  //              h('th', {class: 'header'}, label.name),
  //              h('td', {class: 'last'}, that.lastRecord[label.key])
  //            ])
  //          })])
  //      } else if (this.currentRecord) {
  //        return h('table', {}, [
  //          h('tr', {}, [h('th', {}, ''), h('td', {}, '上期采集数据')]),
  //          ...that.labels.map(label => {
  //            return h('tr', {}, [
  //              h('th', {class: 'header'}, label.name),
  //              h('td', {class: 'last'}, that.lastRecord[label.key]),
  //              h('td', {class: 'current'}, that.currentRecord[label.key])
  //            ])
  //          })])
  //      }
  // }
}
</script>

<style scoped>
.el-col {
  display: flex;
  justify-content: center;
  margin-top: 5vh;
}
table {
  border: 10
}
</style>