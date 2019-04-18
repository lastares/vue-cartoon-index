import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/auth/Register')
    },
    // {
    //   path: '*',
    //   redirect: '/'
    // },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/auth/Login')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: () => import('@/views/category/Category')
    },
    {
      path: '/category/special',
      name: 'CategorySpecial',
      component: () => import('@/views/category/Special')
    },
  ]
})
