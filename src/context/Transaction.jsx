import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import {
  config,
  GETALLDEPOSITETRANSACTION,
  GETCOINBALANCE,
  GETCOINS,
} from "../constants/constants";
import { toast } from "react-toastify";
export const TransactionContext = createContext({
  deposites: [],
  callDeposite: () => {},
  callCoins: () => {},
  coinList: [],
  type: "money",
  setType: () => {},
  status: "all",
  setStatus: () => {},
  callCoinBalance: () => {},
  coinBalance: [],
});
const TrasactionState = ({ children }) => {
  const navigate = useNavigate();
  const [deposites, setDeposite] = useState([]);
  const [coinList, setCoinsList] = useState([]);
  const [type, setType] = useState("money");
  const [status, setStatus] = useState("all");
  const [coinBalance, setCoinBalance] = useState([]);
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
      console.log(res.message);
      return res.message;
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        deposites,
        callDeposite,
        callCoins,
        coinList,
        type,
        setType,
        status,
        setStatus,
        callCoinBalance,
        coinBalance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TrasactionState;
