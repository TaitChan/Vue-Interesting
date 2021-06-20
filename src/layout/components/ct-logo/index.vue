<template>
  <div class="ct-logo-container">
    <el-image class="ct-logo" :src="logo" @click="goto"></el-image>
    <span class="ct-title" v-show="!isCollapse" @click="goto">{{ title }}</span>
  </div>
</template>

<script>
  import { title } from '@/config'
  import logo from '@/assets/logo.png'
  export default {
    name: 'CtLogo',
    props: {
      isCollapse: Boolean,
    },
    data() {
      return {
        title,
        logo,
      }
    },
    created() {},
    mounted() {},
    methods: {
      goto() {
        this.$router.push('/dashboard')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ct-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    overflow: hidden;
    font-size: 20px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    .ct-logo {
      height: 30px;
      width: 30px;
      &:hover {
        cursor: pointer;
      }
    }
    .ct-title {
      margin-left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
