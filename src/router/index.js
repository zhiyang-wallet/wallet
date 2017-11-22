/**
 * Created by mephisto on 2017/5/3.
 */

import Vue from 'vue'
import Vuerouter from 'vue-router'


const testapi = r => require.ensure([], () => r(require('../page/testapi')), 'testapi');

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const addCardMsg = r => require.ensure([], () => r(require('../page/addCardMsg')), 'addCardMsg');
const setPayPassword = r => require.ensure([], () => r(require('../page/setPayPassword')), 'setPayPassword');
const turnOutTime = r => require.ensure([], () => r(require('../page/turnOutTime')), 'turnOutTime');


const bindBankcard = r => require.ensure([], () => r(require('../page/bindBankcard')), 'bindBankcard');


Vue.use(Vuerouter);


const routes = [
  //testapi
  {
    path:'/testapi',
    component:testapi,
    name:'接口测试'

  },
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
    component: addCardMsg
  },
  {
    path: '/setPayPassword',
    component: setPayPassword
  },
  {
    path: '/turnOutTime',
    component: turnOutTime
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
