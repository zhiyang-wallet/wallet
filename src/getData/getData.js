/**
 * Created by mephisto on 2017/9/26.
 */

import APIS from '../common/apis';
import $ajax from '../fetch/fetch';


//1.用户签约接口




/*--------------------------------------------------*/
//2.选择所属银行接口
export const getAllBanks = ()=> $ajax(APIS.allBanks, 'POST');

//3.钱包余额接口
export const getWalletBalance = ()=> $ajax(APIS.walletBalance, 'POST');

