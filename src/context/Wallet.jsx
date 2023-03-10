import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import { toast } from "react-toastify";
import {
  config,
  GETADMINBANKLIST,
  GETALLCOINTRANSACTION,
  GETUSERBANK,
} from "../constants/constants";
export const WallteContext = createContext({
  setDespositePage: () => {},
  depositePage: "INR",
  callAdminBankList: () => {},
  adminbankList: [],
  setverifyWallet: () => {},
  verifyWallet: false,
  verifyDepositeReciept: {},
  setVerifyDepositeReciept: () => {},
  callUserBank: () => {},
  userBank: [],
  walletTransaction: [],
  callWalletTransactionReport: () => {},
});
const WalletState = ({ children }) => {
  const navigate = useNavigate();
  const callAdminBankList = async () => {
    const res = await getFetch(GETADMINBANKLIST);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setAdminbankList(res.message);
    }
  };
  const [adminbankList, setAdminbankList] = useState([]);
  const [depositePage, setDespositePage] = useState({ symbol: "INR" });
  const [verifyWallet, setverifyWallet] = useState(false);
  const [verifyDepositeReciept, setVerifyDepositeReciept] = useState({});
  const [userBank, setUserBank] = useState([]);
  const callUserBank = async (data) => {
    const res = await postFetch(GETUSERBANK, { email: data.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setUserBank(res.message);
    }
  };
  const [walletTransaction, setWalletTransaction] = useState([]);
  const callWalletTransactionReport = async (symbol, email) => {
    const res = await postFetch(GETALLCOINTRANSACTION, { email, symbol });
    if (res.success) {
      setWalletTransaction(res.message);
    } else {
      return res.message;
    }
  };
  return (
    <WallteContext.Provider
      value={{
        depositePage,
        setDespositePage,
        callAdminBankList,
        adminbankList,
        verifyWallet,
        setverifyWallet,
        verifyDepositeReciept,
        setVerifyDepositeReciept,
        callUserBank,
        userBank,
        walletTransaction,
        setWalletTransaction,
        callWalletTransactionReport,
      }}
    >
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
