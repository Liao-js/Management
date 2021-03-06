import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import pmsMain from '@/view/pmsMain'
import operationFile from '@/view/pmsfile/operationFile'
import queryFile from '@/view/pmsfile/queryFile'
import operationTransfer from '@/view/pmstransfer/operationTransfer'
import queryTransfer from '@/view/pmstransfer/queryTransfer'
import operationSanction from '@/view/pmssanction/operationSanction'
import querySanction from '@/view/pmssanction/querySanction'
import operationAppraisal from '@/view/pmsappraisal/operationAppraisal'
import queryAppraisal from '@/view/pmsappraisal/queryAppraisal'

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
      path: '/main',
      name: '人员档案',
      iconCls: 'ma-icon-file',
      component: pmsMain,
      children:[
        {
          path: '/main/operationfile',
          name: '管理人员档案',
          component: operationFile,
        },
        {
          path: '/main/queryfile',
          name: '查询人员档案',
          component: queryFile,
        }
      ]
    },
    {
      path: '/main',
      name: '人员调动',
      iconCls: 'ma-icon-transfer',
      component: pmsMain,
      children:[
        {
          path: '/main/operationtransfer',
          name: '管理人员调动',
          component: operationTransfer,
        },
        {
          path: '/main/querytransfer',
          name: '查询人员调动',
          component: queryTransfer,
        }
      ]
    },
    {
      path: '/main',
      name: '奖罚管理',
      iconCls: 'ma-icon-sanction',
      component: pmsMain,
      children:[
        {
          path: '/main/operationsanction',
          name: '管理人员调动',
          component: operationSanction,
        },
        {
          path: '/main/querysanction',
          name: '查询人员调动',
          component: querySanction,
        }
      ]
    },
    {
      path: '/main',
      name: '考核评定',
      iconCls: 'ma-icon-appraisal',
      component: pmsMain,
      children:[
        {
          path: '/main/operationappraisal',
          name: '管理考核评定',
          component: operationAppraisal,
        },
        {
          path: '/main/queryappraisal',
          name: '查询考核评定',
          component: queryAppraisal,
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true,
    },
  ]
})
