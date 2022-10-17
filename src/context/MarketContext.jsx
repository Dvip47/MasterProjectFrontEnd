import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getFetch, postFetch } from "../api/api";
import {
  config,
  GETFILTERSYMBOLDATA,
  GETMYORDERS,
} from "../constants/constants";
export const MarketContext = createContext({
  setCurrentCurrency: () => {},
  currentCurrency: {},
  callOrders: () => {},
  orders: [],
  getMyOrders: () => {},
  myOrders: [],
  getActiveOrderWithBalance: () => {},
  filterSymbolDataWithBalance: {},
});
const MarketState = ({ children }) => {
  const navigate = useNavigate();
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [orders, setOrders] = useState([]);
  const [filterSymbolDataWithBalance, setFilterSymbolDataWithBalance] =
    useState({});
  const [myOrders, setMyOrders] = useState([]);
  const callOrders = async (symbol = "BNBINR") => {
    const res = await getFetch(
      `https://api.polobix.com:3007/api/order/get_orders?symbol=${symbol}&fiat=INR`
    );
    console.log(res);
  };

  const getMyOrders = async (data) => {
    const res = await postFetch(GETMYORDERS, { email: data?.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res?.success) {
      setMyOrders(res?.message);
    }
  };
  const getActiveOrderWithBalance = async (data) => {
    console.log(data);
    const res = await postFetch(GETFILTERSYMBOLDATA, {
      email: data.email,
      symbol: data.symbol,
    });
    console.log(res);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res?.success) {
      setFilterSymbolDataWithBalance(res?.message);
    }
  };
  return (
    <MarketContext.Provider
      value={{
        currentCurrency,
        setCurrentCurrency,
        orders,
        callOrders,
        getMyOrders,
        myOrders,
        getActiveOrderWithBalance,
        filterSymbolDataWithBalance,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};
export default MarketState;
