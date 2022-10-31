import * as React from "react";
import { useContext, useState } from "react";
import { widget } from "../../charting_library";
import { AuthContext } from "../../context/Auth";
import { CoinContext } from "../../context/CoinsContext";

const getLanguageFromURL = () => {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};
const TVChartContainer = () => {
  const ref = React.useRef();
  const { chartSymbol } = useContext(CoinContext);

  const { theme } = useContext(AuthContext);
  React.useEffect(() => {
    const widgetOptions = {
      symbol: chartSymbol.title,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
        "https://ws.torentx.in:3006"
      ),
      interval: "D",
      container: ref.current,
      library_path: "/charting_library/",
      locale: getLanguageFromURL() || "en",
      disabled_features: ["use_localstorage_for_settings"],
      enabled_features: ["study_templates"],
      charts_storage_url: "https://saveload.tradingview.com",
      charts_storage_api_version: "1.1",
      client_id: "tradingview.com",
      user_id: "public_user_id",
      theme: localStorage.getItem("theme"),
      fullscreen: false,
      autosize: true,
      studies_overrides: {},
    };
    let tvWidget = new widget(widgetOptions);
    tvWidgett = tvWidget;
    tvWidgett.onChartReady(() => {
      tvWidget.changeTheme(
        localStorage.getItem("theme") == "dark" ? "Dark" : "Light"
      );
      tvWidgett.headerReady().then(() => {
        const button = tvWidgett.createButton();
        button.setAttribute("title", "Click to show a notification popup");
        button.classList.add("apply-common-tooltip");
        button.addEventListener("click", () =>
          tvWidgett.showNoticeDialog({
            title: "Notification",
            body: "TradingView Charting Library API works correctly",
            callback: () => {
              console.log("Noticed!");
            },
          })
        );
        button.innerHTML = "Check API";
      });
    });

    return () => {
      if (tvWidgett !== null) {
        tvWidgett.remove();
        tvWidgett = null;
      }
    };
  }, [chartSymbol?.title, theme]);

  let tvWidgett = null;
  return <div ref={ref} className="TVChartContainer" />;
};

export default TVChartContainer;
