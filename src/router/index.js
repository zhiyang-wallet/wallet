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
const billDetail = r => require.ensure([], () => r(require('../page/billDetail')), 'billDetail');
const chooseBank = r => require.ensure([], () => r(require('../page/chooseBank')), 'chooseBank');


const bindBankcard = r => require.ensure([], () => r(require('../page/bindBankcard')), 'bindBankcard');

const login = r => require.ensure([], () => r(require('../page/login')), 'login');

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
    path: '/billDetail',
    component: billDetail
  },
  {
    path: '/chooseBank',
    component: chooseBank
  },
  {
    path: '/bindBankcard',
    component: bindBankcard,
    name: '绑定银行卡'
  },
  {
    path:'/login',
    component:login,
    name:'登陆'
  }

]


const router = new Vuerouter({
  routes,
  mode: 'history'
})


export default router;
