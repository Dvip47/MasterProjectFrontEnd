import { useEffect } from "react";
import { useState, createContext } from "react";
import { getFetch, postFetch } from "../api/api";
import {
  ADMINDEPOSITEDATA,
  GETADMINBANKLIST,
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
});
const WalletState = ({ children }) => {
  useEffect(() => {
    callAdminBankList();
  }, []);

  const callAdminBankList = async () => {
    const res = await getFetch(GETADMINBANKLIST);
    setAdminbankList(res.message);
  };
  const [adminbankList, setAdminbankList] = useState([]);
  const [depositePage, setDespositePage] = useState({ symbol: "INR" });
  const [verifyWallet, setverifyWallet] = useState(false);
  const [verifyDepositeReciept, setVerifyDepositeReciept] = useState({});
  const [userBank, setUserBank] = useState([]);
  const callUserBank = async (data) => {
    const res = await postFetch(GETUSERBANK, { email: data.email });
    if (res.success) {
      setUserBank(res.message);
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
      }}
    >
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
