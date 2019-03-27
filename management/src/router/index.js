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
      component: pmsMain,
      hidden: true,
      children:[
        {
          path: '/',
          name: '人员档案',
          iconCls: 'ma-icon-file',
          component: pmsMain,
          children:[
            {
              path: '/b',
              name: '管理人员档案',
              component: pmsMain,
            },
            {
              path: '/c',
              name: '查询人员档案',
              component: pmsMain,
            }
          ]
        },
        {
          path: '/',
          name: '人员调动',
          iconCls: 'ma-icon-transfer',
          component: pmsMain,
          children:[
            {
              path: '/',
              name: '管理人员调动',
              component: pmsMain,
            },
            {
              path: '/',
              name: '查询人员调动',
              component: pmsMain,
            }
          ]
        },
        {
          path: '/',
          name: '奖罚管理',
          iconCls: 'ma-icon-sanction',
          component: pmsMain,
          children:[
            {
              path: '/',
              name: '管理人员调动',
              component: pmsMain,
            },
            {
              path: '/',
              name: '查询人员调动',
              component: pmsMain,
            }
          ]
        },
        {
          path: '/',
          name: '考核评定',
          iconCls: 'ma-icon-appraisal',
          component: pmsMain,
          children:[
            {
              path: '/',
              name: '管理考核评定',
              component: pmsMain,
            },
            {
              path: '/',
              name: '查询考核评定',
              component: pmsMain,
            }
          ]
        },
      ]
    },
  ]
})
