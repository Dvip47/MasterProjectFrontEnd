import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import {
  config,
  GETALLDEPOSITEDATA,
  GETALLDEPOSITETRANSACTION,
  GETALLLEDGERDATA,
  GETCOINBALANCE,
  GETCOINS,
} from "../constants/constants";
import { toast } from "react-toastify";
export const TransactionContext = createContext({
  callDeposite: () => {},
  deposites: [],
  callCoins: () => {},
  coinList: [],
  callCoinBalance: () => {},
  coinBalance: [],
  callAllDeposite: () => {},
  allDeposite: [],
  callAllLedger: () => {},
  allLedger: [],
  setPaginationData: () => {},
  paginationData: [],
});
const TrasactionState = ({ children }) => {
  const navigate = useNavigate();
  const [deposites, setDeposite] = useState([]);
  const [coinList, setCoinsList] = useState([]);
  const [coinBalance, setCoinBalance] = useState([]);
  const [allDeposite, setAllDeposite] = useState([]);
  const [allLedger, setAllLedger] = useState([]);
  const [paginationData, setPaginationData] = useState(10);
  const callDeposite = async (data) => {
    const res = await postFetch(GETALLDEPOSITETRANSACTION, {
      email: data.email,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setDeposite(() => res.message);
    }
  };
  const callCoins = async () => {
    const res = await getFetch(GETCOINS);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setCoinsList(res.message);
    }
  };
  const callCoinBalance = async (data) => {
    const res = await postFetch(GETCOINBALANCE, { email: data.email });
    if (res.success) {
      setCoinBalance(res.message);
    } else {
      return res;
    }
  };
  const callAllDeposite = async () => {
    const res = await getFetch(GETALLDEPOSITEDATA);
    if (res.success) {
      setAllDeposite(res.message);
    }
  };
  const callAllLedger = async () => {
    const res = await getFetch(GETALLLEDGERDATA);
    if (res.success) {
      setAllLedger(res.message);
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        callDeposite,
        deposites,
        callCoins,
        coinList,
        callCoinBalance,
        coinBalance,
        callAllDeposite,
        allDeposite,
        callAllLedger,
        allLedger,
        setPaginationData,
        paginationData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TrasactionState;
