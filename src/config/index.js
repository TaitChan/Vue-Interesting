/**
 * @description 3个子配置，通用配置|主题配置|网络配置
 */
//默认配置
const { setting, theme, network } = require('./default/index')
//自定义配置
const config = require('./config')
//导出配置（以自定义配置为主）
module.exports = {
  ...setting,
  ...theme,
  ...network,
  ...config,
}
