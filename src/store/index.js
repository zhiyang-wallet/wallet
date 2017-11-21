/**
 * Created by mephisto on 2017/6/1.
 */

import Vuex from 'vuex'
import Vue from 'vue'



import getters from './getters'
import {mutations} from './mutations'
import  state  from './state'
import {actions} from './action'



Vue.use(Vuex)

const  store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions
})


export {store}