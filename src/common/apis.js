let apis = {
  'allBanks': '/transaction/allBanks',
  'signingUp': '/transaction/signingUp',
  'walletBalance': '/transaction/walletBalance',
  'yieldRate': '/transaction/yieldRate',
  'billDetails':'/transaction/billDetails',
  'userInfo':'/user/userInfo'

}

let mockUrls = {

  'allBanks': '/api/transaction/allBanks',
  'signingUp': '/api//transaction/signingUp',
  'walletBalance': '/api/transaction/walletBalance',
  'yieldRate': '/api/transaction/yieldRate',
  'billDetails':'/api/transaction/billDetails',
  'userInfo':'/api/user/userInfo'
}


export default process.env == "development" ? mockUrls : apis;
