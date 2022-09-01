import React from "react";
import Header from "../../assets/Exchange/Header/Header";
import MainChart from "../../assets/Exchange/MainChart/MainChart";
import Market from "../../assets/Exchange/Market/Market";
import MarketHistory from "../../assets/Exchange/MarketHistory/MarketHistory";
import MarketNew from "../../assets/Exchange/MarketNews/MarketNew";
import MarketOrder from "../../assets/Exchange/MarketOrder/MarketOrder";
import MarketTrade from "../../assets/Exchange/MarketTrade/MarketTrade";
import OrderBook from "../../assets/Exchange/OrderBook/OrderBook";

const Exchange = () => {
  return (
    <>
      <Header />
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-md-3">
            <Market />
          </div>
          <div class="col-md-6">
            <MainChart />
            <MarketTrade />
          </div>
          <div class="col-md-3">
            <OrderBook />
            <MarketHistory />
          </div>
          <MarketNew />
          <MarketOrder />
        </div>
      </div>
    </>
  );
};

export default Exchange;
