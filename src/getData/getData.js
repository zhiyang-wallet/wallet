/**
 * Created by mephisto on 2017/9/26.
 */

import apis from '../common/apis';
import $ajax from '../fetch/fetch';


//
export const getLoginInfo = ( data = {} )=> $ajax(apis.getUserInfo, 'POST',data);

//
export const getCompanyInfo = ( data ={}  ) => $ajax(apis.findOrgInfo,'POST', data);
