import { useEffect } from "react";
import { useState, createContext } from "react";
import { getFetch } from "../api/api";
import { GETADMINBANKLIST } from "../constants/constants";
export const WallteContext = createContext({
  setDespositePage: () => {},
  depositePage: "INR",
  callAdminBankList: () => {},
  adminbankList: [],
  setverifyWallet: () => {},
  verifyWallet: false,
  verifyDepositeReciept: {},
  setVerifyDepositeReciept: () => {},
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
      }}
    >
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
