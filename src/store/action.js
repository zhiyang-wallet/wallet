/**
 * Created by mephisto on 2017/9/21.
 */

import $ from 'jquery'

import {getUserInfo} from '../getData/getData'

const actions = {

  //8.查询账户信息接口
  async getUserInfoAPI({commit}, data = {}) {

    let response = await getUserInfo(data);

    return new Promise((resolve, reject) => {

      if (response.retCod == 0) {
        commit('GET_USERINFO', {res: response.data});
        resolve();
      } else if (response.retCod == 1) {
        reject(response.message);
      }

    })


  }
}

export {actions}
