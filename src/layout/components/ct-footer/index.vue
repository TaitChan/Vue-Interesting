<template>
  <div class="ct-footer-container">
    About {{ title }}：Base On Vue3.0 & Element-Plus
  </div>
</template>

<script>
  import { title } from '@/config'
  export default {
    name: 'CtFooter',
    props: {},
    data() {
      return {
        title,
      }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>

<style lang="scss" scoped>
  .ct-footer-container {
    background: white;
    min-height: 55px;
    line-height: 55px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    border-top: 1px dashed #dcdfe6;
  }
</style>
