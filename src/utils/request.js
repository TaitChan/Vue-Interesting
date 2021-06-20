import axios from 'axios'
import { baseURL, requestTimeout, tokenName } from '@/config'
import store from '@/store'
import { ElMessage } from 'element-plus'

/**
 *
 * @description axios初始化
 */
const service = axios.create({
  baseURL,
  timeout: requestTimeout,
})

/**
 *
 * @description axios请求拦截器
 */
service.interceptors.request.use(
  (config) => {
    if (store.getters['user/accessToken']) {
      config.headers[tokenName] = store.getters['user/accessToken']
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 *
 * @description axios响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // const { data, config } = response
    // const { code, msg } = data
    const { data } = response
    return data
  },
  (error) => {
    ElMessage.error({
      message: 'error' + error,
    })
  }
)

export default service
