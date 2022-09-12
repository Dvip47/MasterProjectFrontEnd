import { useEffect } from "react";
import { useState, createContext } from "react";
import { getFetch } from "../api/api";
import { GETADMINBANKLIST } from "../";
export const WallteContext = createContext({
  setDespositePage: () => {},
  depositePage: "INR",
});
const WalletState = ({ children }) => {
  // useEffect(() => {}, []);
  // const callAdminBankList = async () => {
  //   const res = await getFetch(GETADMINBANKLIST);
  // };
  const [adminbankList, setAdminbankList] = useState([]);
  const [depositePage, setDespositePage] = useState({ symbol: "INR" });
  return (
    <WallteContext.Provider value={{ depositePage, setDespositePage }}>
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
