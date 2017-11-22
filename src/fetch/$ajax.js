/**
 * Created by mephisto on 2017/9/26.
 */

import $ from 'jquery'
import {baseUrl} from "../common/apis";


export default (url = '', type = "get" , data = {})=> {

    var type = type.toUpperCase();
    var url = baseUrl+url;
    
    return new Promise((resolve,reject)=>{

        $.ajax({type, url, dataType:'json', data,
            success:resolve
        })


    })


}
