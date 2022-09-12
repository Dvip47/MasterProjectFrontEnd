import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Auth from "./context/Auth";
import WalletState from "./context/Wallet";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WalletState>
      <Auth>
        <App />
      </Auth>
    </WalletState>
  </BrowserRouter>
);
reportWebVitals();
