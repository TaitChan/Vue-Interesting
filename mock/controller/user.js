const accessTokens = {
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  test: 'test-accessToken',
}

module.exports = [
  /**
   * 登录
   */
  {
    url: '/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const accessToken = accessTokens[username]
      if (!accessToken) {
        return {
          code: 500,
          msg: '帐户或密码不正确。',
        }
      }
      return {
        code: 200,
        msg: 'success',
        data: { accessToken },
      }
    },
  },
  /**
   * 模拟注册
   */
  {
    url: '/user/register',
    type: 'post',
    response: () => {
      return {
        code: 200,
        msg: '模拟注册成功',
      }
    },
  },
  /**
   * 获取用户信息
   */
  {
    url: '/user/userInfo',
    type: 'post',
    response: (config) => {
      const { accessToken } = config.body
      let roles = ['admin']
      let ability = ['READ']
      let username = 'admin'
      if ('admin-accessToken' === accessToken) {
        roles = ['admin']
        ability = ['READ', 'WRITE', 'DELETE']
        username = 'admin'
      }
      if ('editor-accessToken' === accessToken) {
        roles = ['editor']
        ability = ['READ', 'WRITE']
        username = 'editor'
      }
      if ('test-accessToken' === accessToken) {
        roles = ['admin', 'editor']
        ability = ['READ']
        username = 'test'
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          roles,
          ability,
          username,
          'avatar|1': [
            'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
            'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
          ],
        },
      }
    },
  },
  /**
   * 退出登录
   */
  {
    url: '/logout',
    type: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
      }
    },
  },
]
