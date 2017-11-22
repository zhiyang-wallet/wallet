let apis = {
  'allBanks': '/transaction/allBanks',
  'signingUp': '/transaction/signingUp',
  'walletBalance': '/transaction/walletBalance',
  'yieldRate': '/transaction/yieldRate',
  'billDetails':'/transaction/billDetails'

}

let mockUrls = {

  'allBanks': '/api/transaction/allBanks',
  'signingUp': '/api//transaction/signingUp',
  'walletBalance': '/api/transaction/walletBalance',
  'yieldRate': '/api/transaction/yieldRate',
  'billDetails':'/api/transaction/billDetails'
}


export default process.env == "development" ? mockUrls : apis;
