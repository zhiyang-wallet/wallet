/**
 * Created by mephisto
 */

const mutations = {

  GET_USERINFO(state,{res}){

      state.userInfo = res;

  },
  GET_SENDCODE(state,{res}){

      state.sendCode = res;

  }

}

export {mutations}
