import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error-page/404'),
  },
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    meta: {
      title: '首页',
      affix: true,
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '首页',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () => import('@/views/test1/index'),
  },
  {
    path: '/test2',
    redirect: '/test2/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Test2',
        component: () => import('@/views/test2/index'),
        meta: {
          title: '测试页2',
        },
      },
    ],
  },
  {
    path: '/test3',
    redirect: '/test3/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Test3',
        component: () => import('@/views/test3/index'),
        meta: {
          title: '测试页3',
        },
      },
    ],
  },
  {
    path: '/test4',
    redirect: '/test4/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Test4',
        component: () => import('@/views/test4/index'),
        meta: {
          title: '测试页4',
        },
      },
    ],
  },
  {
    path: '/user-page',
    redirect: '/user-page/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'UserPage',
        component: () => import('@/views/user-page/index'),
        meta: {
          title: '用户中心',
        },
      },
    ],
  },
  {
    path: '/sys',
    component: Layout,
    meta: {
      title: '系统管理',
    },
    children: [
      {
        path: 'user-mng',
        name: 'UserMng',
        component: () => import('@/views/user-mng/index'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: 'role-mng',
        name: 'RoleMng',
        component: () => import('@/views/role-mng/index'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: 'menu-mng',
        name: 'MenuMng',
        component: () => import('@/views/menu-mng/index'),
        meta: {
          title: '菜单管理',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...asyncRoutes],
})

export default router
