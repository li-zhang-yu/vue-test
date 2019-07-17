import Vue from 'vue' //引入vue
import Vuex from 'vuex' //引入vuex

//使用vuex
Vue.use(Vuex)

//定义常量
const state = {
    adminInfo: {
      avatar: 'default.jpg'
    },
}

export default new Vuex.Store({
  state,
})
