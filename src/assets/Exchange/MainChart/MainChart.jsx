import React from "react";
import TVChartContainer from "../../../components/TVChartContainer/TVChartContainer";

const MainChart = () => {
  return (
    <div className="main-chart">
      <div className="tradingview-widget-container">
        <div id="tradingview_e8053"></div>
        <TVChartContainer />
      </div>
    </div>
  );
};

export default MainChart;
