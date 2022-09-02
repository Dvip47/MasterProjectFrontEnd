import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export const AuthContext = createContext({
  crypto: [],
});
const Auth = ({ children }) => {
  useEffect(() => {
    const client = new W3CWebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );
    client.onmessage = (event) => {
      setCrypto(JSON.parse(event?.data));
    };
  }, []);
  const [crypto, setCrypto] = useState([]);
  return (
    <AuthContext.Provider value={{ crypto }}>{children}</AuthContext.Provider>
  );
};

export default Auth;
