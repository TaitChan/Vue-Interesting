import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '@/styles/element-variables.scss' //自定义配置，解决字体样式丢失

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import '@/router/permission' // permission control

const app = createApp(App)
app.use(ElementPlus, { locale, size: 'mini' })
app.use(store)
app.use(router)
app.mount('#app')
