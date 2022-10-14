import axios from "axios";
import { useState } from "react";
import { useEffect, createContext } from "react";
import { getFetch, postFetch } from "../api/api";
import { GETCOINBALANCE, GETCOINS } from "../constants/constants";
export const CoinContext = createContext({
  coinList: [],
  getAllOrder: () => {},
  allOrder: [],
  getAllTradeHistory: () => {},
  tradeHistroy: [],
  callCoinBalance: () => {},
  coinBalance: [],
  totalUserBalance: 0,
  chartSymbol: {},
  setChartSymbol: () => {},
  callOrderList: () => {},
  orderList: [],
});
const CoinState = ({ children }) => {
  let orderSocket = {};
  useEffect(() => {
    callCoinsList();
    getAllOrder("bnb");
  }, []);
  const [coinList, setCoinList] = useState([]);
  const [allOrder, setAllOrder] = useState({});
  const [coinBalance, setCoinBalance] = useState([]);
  const [totalUserBalance, setTotalUserBalance] = useState(0);
  const [chartSymbol, setChartSymbol] = useState({
    title: "BNBBTC",
    data: {},
    currency: "INR",
  });
  const [orderList, setOrderList] = useState([]);
  const callOrderList = async () => {
    const res = await postFetch("", "");
    if (res?.success) {
      setOrderList(res.message);
    }
  };
  const callCoinsList = async () => {
    const res = await getFetch(GETCOINS);
    if (res?.success) {
      setCoinList(res?.message);
      updateCoins(res?.message);
      let currentCoin = res?.message?.filter(
        (data) => data?.symbol == "BNBINR"
      );
      setChartSymbol({
        title: "BNBBTC",
        data: currentCoin[0],
        currency: "INR",
      });
    }
  };
  const updateCoins = (cry) => {
    const socket = new WebSocket(
      "wss://api.polobix.com:8080/coin_listener?symbol=INR"
    );
    let newArray = [...cry];
    socket.onmessage = (data) => {
      let parsedData = JSON.parse(data.data);
      for (let i = 0; i < newArray.length; i++) {
        if (parsedData["s"] == newArray[i]["symbol"]) {
          if (
            newArray[i]["closePrice"] != parsedData["c"] ||
            newArray[i]["priceChange"] != parsedData["P"]
          ) {
            newArray[i]["closePrice"] = parsedData["c"];
            newArray[i]["priceChange"] = parsedData["P"];
          }
        }
        setCoinList(() => [...newArray]);
      }
    };
  };
  const [oldOrderSymbol, setOldOrderSymbol] = useState("");
  const getAllOrder = async (symbol) => {
    let orderSocket = new WebSocket(`wss://stream.binance.com:9443/ws`);
    orderSocket.onopen = () => {
      const msg1 = {
        method: "UNSUBSCRIBE",
        params: [`${oldOrderSymbol}usdt@depth20@1000ms`],
        id: 312,
      };
      setOldOrderSymbol(symbol);
      orderSocket.send(JSON.stringify(msg1));
      const msg2 = {
        method: "SUBSCRIBE",
        params: [`${symbol}usdt@depth20@1000ms`],
        id: 3,
      };
      orderSocket.send(JSON.stringify(msg2));
    };
    orderSocket.onmessage = (data) => {
      let parsedData = JSON.parse(data.data);
      setAllOrder(() => {
        return {
          ask: parsedData?.asks,
          bid: parsedData?.bids,
        };
      });
    };
  };
  const [tradeHistroy, setTradeHistory] = useState([]);
  const getAllTradeHistory = async () => {
    const res = await postFetch("", "");
    if (res?.success) {
      setTradeHistory(res.message);
    }
  };
  const callCoinBalance = async (data) => {
    const res = await postFetch(GETCOINBALANCE, { email: data.email });
    if (res.success) {
      setCoinBalance(res.message);
      setTotalUserBalance(
        res?.message?.reduce((a, b) => a?.total || 0 + b?.total || 0)
      );
    } else {
      return res;
    }
  };
  return (
    <CoinContext.Provider
      value={{
        coinList,
        allOrder,
        getAllOrder,
        getAllTradeHistory,
        tradeHistroy,
        callCoinBalance,
        coinBalance,
        totalUserBalance,
        chartSymbol,
        setChartSymbol,
        callOrderList,
        orderList,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
export default CoinState;

// if (res == 401) {
//     toast.error("Session Over", config);
//     localStorage.removeItem("token");
//     navigate("/credential", { state: "login" });
//   }
