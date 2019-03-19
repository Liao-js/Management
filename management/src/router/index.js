import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import pmsMain from '@/view/pmsMain'

Vue.use(Router)

export default new Router({
  /*
  **Vue-router中有hash模式和history模式
  **vue的路由默认是hash模式，一般开发的单页应用的URL都会带有#号的hash模式
  **history模式，可以去掉#
   */

  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'pmsMain',
      component: pmsMain
    },
  ]
})
