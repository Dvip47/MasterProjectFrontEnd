import * as React from "react";
import { widget } from "../../charting_library";

const getLanguageFromURL = () => {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};
const TVChartContainer = () => {
  const ref = React.useRef();
  React.useEffect(() => {
    const widgetOptions = {
      symbol: "BTCUSDT",
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
        "http://localhost:80"
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
      fullscreen: false,
      autosize: true,
      studies_overrides: {},
    };
    const tvWidget = new widget(widgetOptions);
    tvWidgett = tvWidget;
    tvWidgett.onChartReady(() => {
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
  }, []);
  let tvWidgett = null;
  return <div ref={ref} className={"TVChartContainer"} />;
};

export default TVChartContainer;
