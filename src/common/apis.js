
export const baseUrl = process.env == "development" ? '/api/' : '';


export const APIS =  {
  'allBanks': '/transaction/allBanks',
  'signingUp': '/transaction/signingUp',
  'walletBalance':'/transaction/walletBalance',
  'yieldRate': '/transaction/yieldRate',
  'billDetails':'/transaction/billDetails',
  'userInfo':'/user/userInfo'
}

