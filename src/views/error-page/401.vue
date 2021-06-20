<template>
  <div>
    <h2>你没有权限去该页面</h2>
    <el-button @click="back">返回首页</el-button>
  </div>
</template>

<script>
  export default {
    name: '401',
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.push({ path: '/dashboard' })
        // if (this.$route.query.noGoBack) {
        //   this.$router.push({ path: '/dashboard' })
        // } else {
        //   this.$router.go(-1)
        // }
      },
    },
  }
</script>

<style lang="scss" scoped></style>
