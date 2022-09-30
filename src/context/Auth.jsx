import React, { createContext, useEffect, useState } from "react";
import jwt from "jwt-decode";
import { GETCOINS } from "../constants/constants";
import { getFetch } from "../api/api";
export const AuthContext = createContext({
  crypto: [],
  chartSymbol: "",
  setChartSymbol: () => {},
  userData: "",
  setUserData: () => {},
  login: "",
  setLogin: () => {},
  setLoader: () => {},
  loader: false,
  setKycPage: () => {},
  kycPage: "",
  findUser: "",
  setFindUser: () => {},
  callcryptoOrder: () => {},
  cryptoOrder: {},
  cryptoOrderSubmol: {},
  setCryptoOrderSymbol: () => {},
});
const Auth = ({ children }) => {
  const [crypto, setCrypto] = useState([]);
  const [cryptoOrder, setCryptoOrder] = useState({
    ask: [],
    bid: [],
  });
  const [cryptoOrderSubmol, setCryptoOrderSymbol] = useState({
    symbol: "BTC",
    currency: "INR",
  });
  useEffect(() => {
    call();
    getUserDataIFLogin();
    callcryptoOrder();
  }, []);
  const call = async () => {
    const res = await getFetch(GETCOINS);
    setCrypto(res?.message);
    updateCoins(res?.message);
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
        setCrypto(() => [...newArray]);
      }
    };
  };
  const getUserDataIFLogin = () => {
    let res = localStorage.getItem("token");
    if (res) {
      let user = jwt(res);
      setUserData(user?.data);
      setLogin(true);
    }
  };
  const callcryptoOrder = async (symbol = "btc") => {
    let socket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}usdt@depth20@1000ms`
    );
    socket.onmessage = (data) => {
      let parsedData = JSON.parse(data.data);
      setCryptoOrder({
        ask: parsedData?.asks,
        bid: parsedData?.bids,
      });
    };
    socket?.close(0);
  };
  const [kycPage, setKycPage] = useState("");
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [chartSymbol, setChartSymbol] = useState("BTCUSDT");
  const [findUser, setFindUser] = useState(localStorage.getItem("findUser"));
  return (
    <AuthContext.Provider
      value={{
        crypto,
        chartSymbol,
        setChartSymbol,
        userData,
        setUserData,
        login,
        setLogin,
        loader,
        setLoader,
        kycPage,
        setKycPage,
        findUser,
        setFindUser,
        callcryptoOrder,
        cryptoOrder,
        cryptoOrderSubmol,
        setCryptoOrderSymbol,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;

// function rangeOfNumbers(startNum, endNum) {
//   if(startNum > endNum){
//     return []
//   }else{
//  let arr = rangeOfNumbers(startNum,endNum-1);
//  arr.push(endNum)
//  return arr
//   }
//  };
//   rangeOfNumbers(1,5)

// email
// ip
// narration
