/**
 * Created by mephisto on 2017/5/3.
 */

import Vue from 'vue'
import Vuerouter from 'vue-router'

const home = r => require.ensure([], () => r(require('../page/home')), 'home');


const bindBankcard = r => require.ensure([], () => r(require('../page/bindBankcard')), 'bindBankcard');

const testPage = r => require.ensure([], () => r(require('../packages/example/test.vue')), 'testPage');


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
    path: '/bindBankcard',
    component: bindBankcard,
    name: '绑定银行卡'
  },
  {
    path: '/test',
    component: testPage,
    name: '组件测试'
  }

]


const router = new Vuerouter({
  routes
})


export default router;
