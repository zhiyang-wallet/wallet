/**
 * Created by mephisto on 2017/9/26.
 */

import $ from 'jquery'

export default (url = '', type = "get" , data = {})=> {

    var type = type.toUpperCase();

    return new Promise((resolve,reject)=>{

        $.ajax({type, url, dataType:'json', data,
            success:resolve
        })


    })


}