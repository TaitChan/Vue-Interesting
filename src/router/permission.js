import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/router/utils'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  let hasToken = store.getters['user/accessToken']
  console.log(hasToken)
  document.title = getPageTitle(to.meta.title)
  next()
})
router.afterEach((to) => {
  NProgress.done()
})
