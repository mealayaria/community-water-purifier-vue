<template>
  <section>
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'app-content',
    computed: {
      key () {
        return this.$route.name
      }
    }
  }
</script>

<style scoped>

</style>