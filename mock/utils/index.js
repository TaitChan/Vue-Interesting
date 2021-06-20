const { Random } = require('mockjs')
const { join } = require('path')
const fs = require('fs')

/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 *
 * @description 随机生成图片url。
 * @param width
 * @param height
 * @returns {string}
 */
function handleRandomImage(width = 50, height = 50) {
  return `https://picsum.photos/${width}/${height}?random=${Random.guid()}`
}

/**
 *
 * @description 处理所有 controller 模块，npm run serve时在node环境中自动输出controller文件夹下Mock接口。
 * @returns {[]}
 */
function handleMockArray() {
  const mockArray = []
  const getFiles = (jsonPath) => {
    const jsonFiles = []
    const findJsonFile = (path) => {
      const files = fs.readdirSync(path)
      // 该方法将返回一个包含“指定目录下所有文件名称”的数组对象。
      files.forEach((item) => {
        const fPath = join(path, item)
        const stat = fs.statSync(fPath)
        if (stat.isDirectory() === true) findJsonFile(item)
        if (stat.isFile() === true) jsonFiles.push(item)
      })
    }
    findJsonFile(jsonPath)
    jsonFiles.forEach((item) => mockArray.push(`./controller/${item}`))
  }
  getFiles('mock/controller')
  return mockArray
}
module.exports = {
  handleRandomImage,
  handleMockArray,
}
