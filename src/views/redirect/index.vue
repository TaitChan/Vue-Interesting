<template>
  <div>我是重定向redirect页面</div>
</template>
<script>
  export default {
    created() {
      const { params, query } = this.$route
      console.log(params)
      console.log(query)
      const { path } = params
      console.log(path)
      this.$router.replace({ path: '/' + path, query })
    },
  }
</script>
