export const BASEURL = "http://localhost:5000/";
// user
export const LOGIN = "user/v1/login";
export const SIGNUP = "user/v1/signup";
export const FORGET = "user/v1/forget";
export const RESET = "user/v1/reset";
export const VERIFYOTP = "user/v1/verifyloginotp";
export const UPDATEPROFILE = "user/v1/updateProfile";
export const UPDATEPASSWARD = "user/v1/updatePassward";
export const UPDATEUSERSTATUS = "user/v1/updateUserStatus";
export const VERIFYSECURITY = "user/v1/verifysecurity";
export const SECURITY = "user/v1/security";
// query
export const PROFILEDATA = "query/v1/profile";
export const ADMINDEPOSITEDATA = "query/v1/getDepositeData";
export const GETALLUSER = "query/v1/getAllUser";
export const GETUSERBANK = "query/v1/getUserBank/";
export const GETWALLET = "query/v1/getWallet";
export const GETADMINBANKLIST = "query/v1/getbanklist/";
export const GETCOINS = "query/v1/getAllCoin";
export const UPDATECOINPERMISSION = "query/v1/updatePermission/";
export const GETALLDEPOSITETRANSACTION = "query/v1/getAllDepositeTransaction/";
export const GETCOINBALANCE = "query/v1/getCoinBalance/";
export const GETALLCOINTRANSACTION = "query/v1/getAllCoinTransaction/";
// kyc
export const KYC = "kyc/v1/kyc";
export const UPDATEKYC = "kyc/v1/updateKyc";
// bank
export const BANKDETAIL = "bank/v1/bank";
export const CREATEWALLET = "bank/v1/createWallet";
export const UTR = "bank/v1/utr";
export const VERIFY = "bank/v1/verify";
export const ADDADMINBANK = "bank/v1/addAdminBank/";
export const UPDATEADMINBANK = "bank/v1/updateAdminBank/";
export const REMOVEBANK = "bank/v1/removeBank/";
export const VERIFYDEPOSITERECIEPT = "bank/v1/verifyDepositeReciept/";
export const UPDATEDEPOSITERECIEPT = "bank/v1/updateDepositeReciept/";
export const ADMINAMOUNTTRANSFFER = "bank/v1/transfferAmountFromAdmin/";
export const config = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
