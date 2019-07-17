import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/user/login'
import manage from '@/view/page/manage'
import home from '@/view/page/home'
import userList from '@/view/page/userList'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/manage',
      component: manage,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: [],
      },{
        path: '/userList',
        component: userList,
        meta: ['数据管理', '用户列表'],
      }

      ]
    }
  ]
})
