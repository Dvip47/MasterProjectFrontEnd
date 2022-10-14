import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Auth from "./context/Auth";
import WalletState from "./context/Wallet";
import AdminState from "./context/AdminC";
import TrasactionState from "./context/Transaction";
import MarketState from "./context/MarketContext";
import CoinState from "./context/CoinsContext";
import UserState from "./context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TrasactionState>
      <UserState>
        <CoinState>
          <AdminState>
            <WalletState>
              <MarketState>
                <Auth>
                  <App />
                </Auth>
              </MarketState>
            </WalletState>
          </AdminState>
        </CoinState>
      </UserState>
    </TrasactionState>
  </BrowserRouter>
);
reportWebVitals();
