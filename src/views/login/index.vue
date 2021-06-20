<template>
  <div class="login-container">
    <div class="login-form">
      <div><h1>Hello!</h1></div>
      <div>
        <h2>欢迎使用{{ title }}：)</h2>
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        size="medium"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-unlock"
          />
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            prefix-icon="el-icon-circle-check"
          />
          <el-button
            style="width: 90px"
            type="primary"
            size="mini"
            class="login-btn-code"
            @click="handleGetPermCode()"
            :disabled="!show"
          >
            {{ show ? '获取验证码' : '' + count + ' 秒' }}
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            round
            type="primary"
            :loading="loading"
            class="login-btn"
            @click="handleLogin()"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { title } from '@/config'
  export default {
    name: 'Login',
    components: {},
    data() {
      return {
        title,
        count: 60,
        show: true,
        timer: null,
        /**
         *登录表单
         */
        loginForm: {
          username: 'admin',
          password: '111111',
          code: '123',
        },
        /**
         *登录规则
         */
        loginRules: {
          username: [{ required: true, trigger: 'blur' }],
          password: [{ required: true, trigger: 'blur' }],
          code: [{ required: true, trigger: 'blur' }],
        },
        /**
         *加载效果
         */
        loading: false,
        /**
         *重定向地址
         */
        redirect: undefined,
        otherQuery: {},
      }
    },
    watch: {
      /**
       * 监听路由重定向
       */
      $route: {
        handler: function (route) {
          const query = route.query
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true,
      },
    },
    mounted() {
      if (this.loginForm.username === '') {
        this.$refs.username.focus()
      } else if (this.loginForm.password === '') {
        this.$refs.password.focus()
      }
    },
    unmounted() {
      // window.removeEventListener('storage', this.afterQRScan)
    },
    methods: {
      /**
       * 点击获取验证码按钮
       */
      handleGetPermCode() {
        console.log('获取验证码')
        const TIME_COUNT = 60
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      },
      /**
       * 点击登录按钮
       */
      handleLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.loading = true
            /**
             * 跳转
             * 当auth=true时，开启登录验证
             * 当auth=false时，关闭登录验证
             */
            this.goto(true)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      /**
       * 获取页面的查询参数
       * @param query
       * @returns {{}}
       */
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      },
      /**
       * 跳转
       * 当auth=true时，开启登录验证
       * 当auth=false时，关闭登录验证
       */
      goto(auth = false) {
        if (auth) {
          this.login().then(() => {
            this.$router.push({
              path: this.redirect || '/dashboard',
              query: this.otherQuery,
            })
          })
        } else {
          this.$router.push({
            path: this.redirect || '/dashboard',
            query: this.otherQuery,
          })
        }
      },
      async login() {
        try {
          await this.$store.dispatch('user/login', this.loginForm)
        } catch (e) {
          this.loading = false
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  /**
  scss变量的赋值使用举例
  $bg: red;
  .container {
    background-color: $bg;
  }
  */
  /**
  登录容器
   */
  .login-container {
    height: 100vh;
    background: url('~@/assets/login_images/background.jpg') center center fixed
      no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  /**
  登录表单
   */
  .login-form {
    background: -webkit-linear-gradient(
      rgba(32, 44, 104, 0.5),
      rgba(116, 251, 253, 0.2)
    );
    border-radius: 10px;
    color: white;
    padding: 61.8 * 0.5px;
    margin-right: 61.8 * 2px;
    width: 61.8 * 6px;
  }
  /**
  获取验证码按钮
   */
  .login-btn-code {
    position: absolute;
    right: 6px;
    top: 4px;
  }
  /**
  登录按钮
   */
  .login-btn {
    width: 100%;
    letter-spacing: 12px;
  }
  /**
  在页面小于768px时，居中登录容器，768/992/1200/1920
   */
  @media screen and (max-width: 768px) {
    .login-container {
      justify-content: center;
    }
    .login-form {
      margin: 0;
      animation: aaa 0.2s;
    }
  }
</style>
