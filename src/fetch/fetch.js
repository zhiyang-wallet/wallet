/**
 * Created by mephisto on 2017/9/26.
 */

export default  (u = "", t = 'get', d = {}) =>{

    let type = t.toUpperCase();
    let url = u;
    let data = d;

    if (type == 'GET') {

        let dataStr = "";

        Object.keys(data).forEach(function (val, index) {
            dataStr += val + '=' + data[val] + '&';
        })


        if (dataStr != '') {
            dataStr.substring(0, dataStr.lastIndexOf('&'));
            url += '?' + dataStr;
        }

    }


    if (window.fetch) {

        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            cache: "force-cache"
        }

        if (type == 'POST') {

          Object.getOwnPropertyNames(data).length != 0 && Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }

        try {
            return fetch(url, requestConfig).then(function(response){

                return response.json();

            })

        } catch (e) {

            throw new Error(e)
        }


    } else {

        return new Promise((resolve ,reject) => {

            let requestObj = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
            let sendData = "";

            type == 'POST' && (sendData = JSON.stringify(data));

            requestObj.open(type, url);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = function () {


                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {

                        typeof requestObj.response != 'object' ?  resolve(JSON.parse(requestObj.response)) : resolve(requestObj.response);

                    }else {

                        reject(requestObj)
                    }

                }


            }
        })

    }


}
