import { useEffect } from "react";
import { useState, createContext } from "react";
import { getFetch } from "../api/api";
import { GETADMINBANKLIST } from "../constants/constants";
export const WallteContext = createContext({
  setDespositePage: () => {},
  depositePage: "INR",
  callAdminBankList: () => {},
  adminbankList: [],
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
  return (
    <WallteContext.Provider
      value={{
        depositePage,
        setDespositePage,
        callAdminBankList,
        adminbankList,
      }}
    >
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
