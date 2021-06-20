/**
 * @description 通用配置
 */
const setting = {
  //默认的接口地址
  baseURL: process.env.NODE_ENV === 'development' ? 'mock-server' : '',
  //标题名称
  title: 'Vue Interesting',
  //token名称
  tokenName: 'accessToken',
}
module.exports = setting
