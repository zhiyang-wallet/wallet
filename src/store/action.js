/**
 * Created by mephisto on 2017/9/21.
 */

import $ from 'jquery'

import {getAllBanks, getSigningUp} from '../getData/getData'

const actions = {
  //1.用户签约接口
  async getSigningUp({commit}, data = {}) {


  },
  //2.选择所属银行接口
  async getAllBanksAPI({commit}, data = {}) {

    let response = await getAllBanks(data);

    return new Promise((resolve, reject) => {

      if (response.retCod == 0) {
        commit('GET_AllBANKS', {res: response.data});
        resolve();
      } else if (response.retCod == 1) {
        reject(response.message);
      }

    })


  }
}

export {actions}
