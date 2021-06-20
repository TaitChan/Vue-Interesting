module.exports = [
  // user list
  {
    url: '/role/list',
    type: 'get',
    response: (config) => {
      return {
        code: 200,
        data: {
          records: [
            {
              roleName: '管理员',
              roleCode: 'admin',
              createTime: '123456111',
            },
            {
              roleName: '测试',
              roleCode: 'test',
              createTime: '123456111',
            },
          ],
          total: 10,
          size: 10,
          pages: 1,
        },
      }
    },
  },
  {
    url: '/role/del',
    type: 'post',
    response: (config) => {
      return {
        code: 200,
        data: {},
      }
    },
  },
]
