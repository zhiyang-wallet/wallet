/**
 * Created by mephisto on 2017/9/26.
 */

import {APIS} from '../common/apis';
import $ajax from '../fetch/fetch';


//8.查询账户信息接口

export const getUserInfo = () => $ajax(APIS.userInfo, 'POST');


/*--------------------------------------------------*/

//1.用户签约接口
export const getSigningUp = (data = {}) => $ajax(APIS.signingUp, 'POST', data)


//2.选择所属银行接口
export const getAllBanks = () => $ajax(APIS.allBanks, 'POST');

//3.钱包余额接口
export const getWalletBalance = () => $ajax(APIS.walletBalance, 'POST');

//4.七日年化率
export const getYieldRate = () => $ajax(APIS.yieldRate, 'POST');

//7.账单明细
export const getBillDetails = () => $ajax(APIS.billDetails, 'POST');


//9.用户登录接口
export const getLogin = (data = {}) => $ajax(APIS.login, 'POST', data);

//10.用户注册接口
export const register = (data = {}) => $ajax(APIS.register, 'POST', data);

//11.密码接口
export const passwordManage = (data = {}) => $ajax(APIS.passwordManage, 'POST', data);
