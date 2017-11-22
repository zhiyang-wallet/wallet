/**
 * Created by mephisto
 */

const mutations = {

  GET_SIGNINGUP(state,{res}){

      state.SIGNINGUP = res;

  },
  GET_AllBANKS(state, {res}){

        state.AllBANKS = res;

    }


}

export {mutations}
