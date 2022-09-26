import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Auth from "./context/Auth";
import WalletState from "./context/Wallet";
import AdminState from "./context/AdminC";
import TrasactionState from "./context/Transaction";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TrasactionState>
      <AdminState>
        <WalletState>
          <Auth>
            <App />
          </Auth>
        </WalletState>
      </AdminState>
    </TrasactionState>
  </BrowserRouter>
);
reportWebVitals();
