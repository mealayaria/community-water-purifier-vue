<!--<template>
  <table v-if="lastRecord || currentRecord">
    <tr>
      <td class="header"></td>
      <td>上期采集数据</td>
      <template v-if="currentRecord">
        <td>本期采集数据</td>
      </template>
    </tr>
    <tr>
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
    </tr>
  </table>
</template>-->

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
        type: Object,
        default: ['刷卡金额', '投币金额', '用水量', '用电量', '时间']
      }
    },
    render: h => {
      let labels = ['刷卡金额', '投币金额', '用水量', '用电量', '时间']
      // return h('div', {}, 'abcdefg')
      if (this.lastRecord) {
        return h('table', {}, labels.map(label => {
          return h('tr', {}, [
            h('td', {class: 'header'}, label),
            h('td', {class: 'last'}, 'test')
            ])
        }))
      }
    }
  }
</script>

<style scoped>

</style>