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
const accountProtocol = r => require.ensure([], () => r(require('../page/accountProtocol')), 'accountProtocol');
const helpCenter = r => require.ensure([], () => r(require('../page/helpCenter')), 'helpCenter');
const modifyPayPassword = r => require.ensure([], () => r(require('../page/modifyPayPassword')), 'modifyPayPassword');
const turnIn = r => require.ensure([], () => r(require('../page/turnIn')), 'turnIn');
const turnInTime = r => require.ensure([], () => r(require('../page/turnInTime')), 'turnInTime');
const set = r => require.ensure([], () => r(require('../page/set')), 'set');
const findPayPassword = r => require.ensure([], () => r(require('../page/findPayPassword')), 'findPayPassword');
const myWallet = r => require.ensure([], () => r(require('../page/myWallet')), 'myWallet');


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
    path: '/accountProtocol',
    component: accountProtocol
  },
  {
    path: '/helpCenter',
    component: helpCenter
  },
  {
    path: '/modifyPayPassword',
    component: modifyPayPassword
  },
  {
    path: '/turnIn',
    component: turnIn
  },
  {
    path: '/turnInTime',
    component: turnInTime
  },
  {
    path: '/set',
    component: set
  },
  {
    path: '/findPayPassword',
    component: findPayPassword
  },
  {
    path: '/bindBankcard',
    component: bindBankcard,
    name: '绑定银行卡'
  },
  {
    path: '/myWallet',
    component: myWallet
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
