/**
 * Created by mephisto on 2017/9/21.
 */

import $ from 'jquery'

import {getLoginInfo , getCompanyInfo} from '../getData/getData'

const actions = {
    async getUserInfoApi({commit}, data = {}){

        let response = await getLoginInfo(data);

        return new Promise((resolve, reject)=> {

            if (response.flag == 1) {
                 commit('getUserInfo', {res: response.user});
                resolve();
            } else if (response.flag == 0) {
                reject();
            }

        })


    },
    async getCompanyInfoApi({commit}, data = {}){

        let response = await getCompanyInfo();
        return new Promise((resolve, reject)=> {

            if (response.success) {

                commit('getCompanyInfo', {res: response.data.result});
                resolve();
            } else {
                reject();
            }


        })

    }
}

export {actions}
