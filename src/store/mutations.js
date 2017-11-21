/**
 * Created by mephisto on 2017/9/21.
 */

const mutations = {


    getCompanyInfo(state, {res}){

        state.companyData = res;

    },
    getUserInfo(state, {res}){

        state.userInfo = res;

    }


}

export {mutations}