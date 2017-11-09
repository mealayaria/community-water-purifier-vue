<template>
  <div class="input">
    <query-form></query-form>
  </div>
</template>

<script>
  import QueryForm from '@/components/QueryForm'
  export default {
    name: 'input',
    components: {QueryForm},
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