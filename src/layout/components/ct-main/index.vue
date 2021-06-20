<template>
  <div class="ct-main-container">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
  export default {
    name: 'CtMain',
    props: {},
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .ct-main-container {
    //background: white;
  }
</style>
