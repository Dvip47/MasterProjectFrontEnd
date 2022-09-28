import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import {
  config,
  GETALLDEPOSITETRANSACTION,
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
});
const TrasactionState = ({ children }) => {
  const navigate = useNavigate();
  const [deposites, setDeposite] = useState([]);
  const [coinList, setCoinsList] = useState([]);
  const [type, setType] = useState("money");
  const [status, setStatus] = useState("all");
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
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TrasactionState;
