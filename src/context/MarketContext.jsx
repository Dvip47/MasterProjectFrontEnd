import { createContext, useState } from "react";
import { getFetch } from "../api/api";
export const MarketContext = createContext({
  currentCurrency: {},
  setCurrentCurrency: () => {},
  callOrders: () => {},
  orders: [],
});
const MarketState = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState({});
  const [orders, setOrders] = useState([]);
  const callOrders = async (symbol = "BNBINR") => {
    const res = await getFetch(
      `https://api.polobix.com:3007/api/order/get_orders?symbol=${symbol}&fiat=INR`
    );
    console.log(res);
  };
  return (
    <MarketContext.Provider
      value={{ currentCurrency, setCurrentCurrency, orders, callOrders }}
    >
      {children}
    </MarketContext.Provider>
  );
};
export default MarketState;
