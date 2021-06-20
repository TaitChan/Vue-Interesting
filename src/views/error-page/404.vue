<template>
  <div>
    404，找不到该页面
    <el-button @click="back">返回首页</el-button>
    <el-button @click="go">返回上一页</el-button>
  </div>
</template>

<script>
  export default {
    name: '404',
    methods: {
      back() {
        this.$router.push({ path: '/dashboard' })
        // if (this.$route.query.noGoBack) {
        //   this.$router.push({ path: '/dashboard' })
        // } else {
        //   this.$router.go(-1)
        // }
      },
      go() {
        this.$router.go(-1)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
