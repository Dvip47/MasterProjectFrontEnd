import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import { toast } from "react-toastify";
import { config, GETADMINBANKLIST, GETUSERBANK } from "../constants/constants";
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
  const navigate = useNavigate();
  useEffect(() => {
    callAdminBankList();
  }, []);
  const callAdminBankList = async () => {
    const res = await getFetch(GETADMINBANKLIST);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    setAdminbankList(res.message);
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
