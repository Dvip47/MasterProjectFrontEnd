import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext({
  crypto: [],
  chartSymbol: "",
  setChartSymbol: () => {},
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
  const call = async () => {
    const res = await axios("https://api.binance.com/api/v3/ticker/24hr");
    setCrypto(res?.data);
  };

  const [chartSymbol, setChartSymbol] = useState("BTCUSDT");
  return (
    <AuthContext.Provider value={{ crypto, chartSymbol, setChartSymbol }}>
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
