<template>
  <div class="ct-header-container">
    <slot></slot>
    <el-dropdown
      size="medium"
      @command="handleCommand"
      @visible-change="visiableChange"
    >
      <span class="ct-header-user">
        <el-avatar :src="avatar"></el-avatar>
        <span>Admin</span>
        <i
          class="el-icon-arrow-down"
          :class="visiable ? 'ct-dropdown-active' : ''"
        ></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-user" command="goto">
            个人中心
          </el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" command="logout">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
  import avatar from '@/assets/user_images/avatar.png'
  export default {
    name: 'CtHeader',
    props: {},
    data() {
      return {
        avatar,
        visiable: false,
      }
    },
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
      handleCommand(command) {
        if (command === 'logout') {
          this.logout()
        }
        if (command === 'goto') {
          this.goto()
        }
      },
      logout() {
        console.log('退出登录')
        const fullPath = this.$route.fullPath
        this.$router.push(`/login?redirect=${fullPath}`)
      },
      goto() {
        this.$router.push('/user-page')
      },
      visiableChange(visiable) {
        this.visiable = visiable
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ct-header-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ct-header-user {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
    .ct-dropdown-active {
      transform: rotateZ(180deg);
    }
    .el-icon-arrow-down {
      transition: transform 0.3s, -webkit-transform 0.3s;
    }
  }
</style>
