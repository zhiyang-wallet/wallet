/**
 * Created by mephisto on 2017/5/3.
 */

import Vue from 'vue'
import Vuerouter from 'vue-router'

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const addCardMsg = r => require.ensure([], () => r(require('../page/addCardMsg')), 'addCardMsg');


const bindBankcard = r => require.ensure([], () => r(require('../page/bindBankcard')), 'bindBankcard');


Vue.use(Vuerouter);


const routes = [
  //  home
  {
    path: '/',
    component: home,
    redirect: 'home',
    name: 'index'
  },
  {
    path: '/home',
    component: home,
    name: 'index'
  },
  {
    path: '/addCardMsg',
    component: addCardMsg,
    name: '填写信息'
  },
  {
    path: '/bindBankcard',
    component: bindBankcard,
    name: '绑定银行卡'
  }
]


const router = new Vuerouter({
  routes
})


export default router;
