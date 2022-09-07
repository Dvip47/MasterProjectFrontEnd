import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import jwt from "jwt-decode";
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
});
const Auth = ({ children }) => {
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    let time = setInterval(() => {
      call();
    }, 2000);
    return () => {
      clearInterval(time);
    };
  }, []);
  useEffect(() => {
    getUserDataIFLogin();
  }, []);
  const call = async () => {
    const res = await axios("https://api.binance.com/api/v3/ticker/24hr");
    setCrypto(res?.data);
  };
  const getUserDataIFLogin = () => {
    let res = localStorage.getItem("token");
    if (res) {
      let user = jwt(res);
      setUserData(user?.data);
      setLogin(true);
    }
  };
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const [chartSymbol, setChartSymbol] = useState("BTCUSDT");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
