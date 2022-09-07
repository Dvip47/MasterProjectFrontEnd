import React from "react";
import TVChartContainer from "../../../components/TVChartContainer/TVChartContainer";

const MainChart = () => {
  return (
    <div className="main-chart mb15">
      <div className="tradingview-widget-container">
        <div id="tradingview_e8053">
          <TVChartContainer />
        </div>
      </div>
    </div>
  );
};

export default MainChart;
