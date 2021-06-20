<template>
  <div>
    <el-container style="height: 100vh">
      <el-aside
        class="ct-aside"
        :class="isCollapse ? 'ct-aside-fold' : 'ct-aside-unfold'"
        :width="isCollapse ? '65px' : variables['aside-bar-width']"
      >
        <ct-logo :is-collapse="isCollapse"></ct-logo>
        <ct-menu :is-collapse="isCollapse"></ct-menu>
      </el-aside>
      <el-container>
        <el-header>
          <ct-header>
            <el-button type="text" @click="isCollapse = !isCollapse">
              <i
                class="ct-header-collapse"
                :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              ></i>
            </el-button>
          </ct-header>
        </el-header>
        <el-main style="background: #f0f2f5">
          <!--          <ct-tags></ct-tags>-->
          <ct-main></ct-main>
        </el-main>
<!--        <el-footer>-->
<!--          <ct-footer></ct-footer>-->
<!--        </el-footer>-->
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import CtFooter from '@/layout/components/ct-footer'
  import CtMain from '@/layout/components/ct-main'
  import CtTags from '@/layout/components/ct-tags'
  import CtHeader from '@/layout/components/ct-header'
  import CtMenu from '@/layout/components/ct-menu'
  import CtLogo from '@/layout/components/ct-logo'
  import variables from '@/styles/variables.scss'
  export default {
    components: { CtLogo, CtMenu, CtHeader, CtTags, CtMain, CtFooter },
    data() {
      return {
        isCollapse: false,
        variables,
      }
    },
    computed: {},
    watch: {
      $route: {
        handler({ path, matched }) {
          console.log(path)
          console.log(matched)
        },
        immediate: true,
      },
    },
    beforeMount() {},
    beforeUnmount() {},
    mounted() {},
    methods: {
      logout() {
        console.log('退出登录')
        const fullPath = this.$route.fullPath
        this.$router.push(`/login?redirect=${fullPath}`)
      },
    },
  }
</script>
<style lang="scss">
  .ct-aside {
    height: 100vh;
    background-color: $aside-bar-bg;
  }
  /**
  *折叠按钮样式
  */
  .ct-header-collapse {
    color: $aside-bar-bg;
    font-size: 20px;
  }
  /**
  *折叠动画
   */
  .ct-aside-fold {
    animation: fold 0.2s;
  }
  .ct-aside-unfold {
    animation: unfold 0.2s;
  }
  @keyframes fold {
    0% {
      width: $aside-bar-width;
    }
    100% {
      width: 65px;
    }
  }
  @keyframes unfold {
    0% {
      width: 65px;
    }
    100% {
      width: $aside-bar-width;
    }
  }
</style>
