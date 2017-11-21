let urlApi = {
  'getUserInfo': '/haojihr/anon/getUserInfo.do',
}

let testApi = {

  'getUserInfo': '/api/loginData',
}


export default process.env == "development" ? testApi : urlApi;
