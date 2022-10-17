import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { CoinContext } from "../../context/CoinsContext";
import TVChartContainer from "../TVChartContainer/TVChartContainer";
import { useNavigate } from "react-router-dom";
import InnerHeader from "../../assets/Header/InnerHeader";
import InnerSideBar from "../../assets/Sidebar/InnerSideBar";
import InnerFooter from "../../assets/Footer/InnerFooter";
import { postFetch } from "../../api/api";
import { config, PLACE } from "../../constants/constants";
import { toast } from "react-toastify";
import { MarketContext } from "../../context/MarketContext";

const Exchange = () => {
  const { userData } = useContext(AuthContext);
  const {
    getMyOrders,
    myOrders,
    getActiveOrderWithBalance,
    filterSymbolDataWithBalance,
  } = useContext(MarketContext);
  const {
    getAllOrder,
    allOrder,
    tradeHistroy,
    callCoinBalance,
    coinBalance,
    totalUserBalance,
    coinList,
    setChartSymbol,
    orderList,
    chartSymbol,
  } = useContext(CoinContext);
  const navigate = useNavigate();
  useEffect(() => {
    callCoinBalance(userData);
    getMyOrders(userData);
    getActiveOrderWithBalance({
      ...userData,
      symbol: chartSymbol?.title?.replace("BTC", "INR"),
    });
  }, [userData]);
  const [range, setRange] = useState(0);
  useEffect(() => {
    if (chartSymbol?.data?.closePrice !== undefined) {
      setInput((prev) => {
        return {
          ...prev,
          price: chartSymbol?.data?.closePrice,
        };
      });
    }
  }, [chartSymbol]);
  const currencies = ["INR", "USDT"];
  const [input, setInput] = useState({
    price: chartSymbol?.data?.closePrice,
    quantity: 0,
    orderType: "",
  });
  const [searchCoin, setSearchCoin] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let coinBalance = 200;
    if (
      (input.orderType == "buy" &&
        totalUserBalance >= input.quantity * input.price) ||
      (input.orderType == "sell" && input.quantity <= coinBalance)
    ) {
      try {
        const data = {
          email: userData?.email,
          symbol: chartSymbol?.title,
          pair: chartSymbol.currency,
          quantity: input.quantity,
          bidPrice: input.price,
          marketPrice: chartSymbol?.data?.closePrice,
          total: input.quantity * input.price,
          status: "placed",
          orderType: input.orderType,
        };
        const res = await postFetch(PLACE, data);
        if (res.success) {
          toast.success(res.message, config);
          setTimeout(() => {
            getMyOrders(userData);
          }, 400);
        } else {
          toast.error(res.message, config);
        }
      } catch (error) {
        return error;
      }
    } else {
      toast.error("Insuficient Fund", config);
    }
  };
  const [orderListType, setOrderListType] = useState("open");
  let orderListComponent = (data, index) => {
    return (
      <tr key={index}>
        <th scope="row">
          <i className="cc BTC"></i>
        </th>
        <td>{data?.pair}</td>
        <td>{data?.quantity}</td>
        <td>{data?.bidPrice}</td>
        <td>{Number(data?.marketPrice)?.toFixed(3)}</td>
        <td>{data?.total}</td>
        <td>{data?.orderType?.toUpperCase()}</td>
        <td>
          <i className="la la-close btnDelete"></i>
        </td>
      </tr>
    );
  };
  return (
    <div id="main-wrapper" className="show">
      {/* header */}
      <InnerHeader />
      {/* sidebar */}
      <InnerSideBar />
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            {/* coin detail */}
            <div className="col-xl-6 col-xxl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">
                    {chartSymbol.title?.replace("BTC", "")}
                  </h4>
                  <span>
                    24h Change
                    <strong
                      className={
                        chartSymbol?.data?.priceChange > 0
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {" "}
                      {"("}
                      {chartSymbol?.data?.priceChange || 0} {")"}%
                    </strong>
                  </span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">24h Volume</p>
                      <h6>
                        {Number(chartSymbol?.data?.quoteVolume).toFixed(2)} USD
                      </h6>
                    </div>
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Index Price</p>
                      <h6>
                        {Number(chartSymbol?.data?.askPrice).toFixed(2)} USD
                      </h6>
                    </div>
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Market Price</p>
                      <h6>
                        {Number(chartSymbol?.data?.bidPrice).toFixed(2)} USD
                      </h6>
                    </div>
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Last Price</p>
                      <h6>
                        {Number(chartSymbol?.data?.closePrice).toFixed(2)} USD
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* wallet section */}
            <div className="col-xl-6 col-xxl-6 col-lg-6 col-xxl-6 col-md-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Your Wallet</h4>
                  <span>
                    Update <span>1</span> minutes ago
                  </span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Symbol</p>
                      <h6>{chartSymbol?.title}</h6>
                    </div>
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Total Balance</p>
                      <h6>{filterSymbolDataWithBalance?.totalBalance}</h6>
                    </div>

                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Active Orders</p>
                      <h6>{filterSymbolDataWithBalance?.activeOrder || 0}</h6>
                    </div>
                    <div className="col-xl col-lg col-md col-sm-auto col-6">
                      <p className="mb-0">Avaliable Balance</p>
                      <h6>{filterSymbolDataWithBalance?.avaliableBalance}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* coin  */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ps ps--active-y">
              <div className="card">
                {/* header */}
                <div className="card-header">
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#STAR"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="mdi mdi-star"></i>
                      </a>
                    </li>
                    {currencies.map((data, index) => {
                      return (
                        <li
                          key={index}
                          className="nav-item"
                          onClick={() => {
                            setChartSymbol((prev) => {
                              return {
                                ...prev,
                                currency: data,
                              };
                            });
                          }}
                        >
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#BTC"
                            role="tab"
                            aria-selected="true"
                          >
                            {data}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* coin list  */}
                <div className="card-body">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span
                        id="inputGroup-sizing-sm"
                        className="input-group-text"
                      >
                        <i _ngcontent-gda-c97="" className="fa fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      aria-describedby="inputGroup-sizing-sm"
                      className="form-control ng-untouched ng-pristine ng-valid"
                      onChange={(e) => setSearchCoin(e.target.value)}
                    />
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Trading Pair</th>
                        <th>Price</th>
                        <th>24H Value</th>
                      </tr>
                    </thead>
                  </table>
                  <div className="price-pair">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="USDT"
                        role="tabpanel"
                      >
                        <table className="table">
                          <tbody>
                            {coinList?.map((data, index) => {
                              if (
                                data?.symbol
                                  ?.toLowerCase()
                                  ?.includes(searchCoin)
                              ) {
                                return (
                                  <tr
                                    key={index}
                                    onClick={() => {
                                      setChartSymbol((prev) => {
                                        return {
                                          ...prev,
                                          title: data.symbol.replace(
                                            "INR",
                                            "BTC"
                                          ),
                                          data: data,
                                        };
                                      });
                                      getAllOrder(
                                        data?.symbol
                                          ?.replace("INR", "")
                                          ?.toLowerCase()
                                      );
                                      getActiveOrderWithBalance({
                                        ...userData,
                                        symbol: data.symbol,
                                      });
                                    }}
                                  >
                                    <td>
                                      <i className="mdi mdi-star"></i>
                                      {data?.symbol?.replace("INR", "")}
                                    </td>
                                    <td>
                                      {Number(data?.closePrice)?.toFixed(3)}
                                    </td>
                                    <td
                                      className={
                                        data?.priceChange > 0
                                          ? "text-success"
                                          : "text-danger"
                                      }
                                    >
                                      {data?.priceChange || 0}%
                                    </td>
                                  </tr>
                                );
                              }
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* chart */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-xxl-6">
              <div className="tradingview-widget-container card">
                <div id="tradingview_e8053">
                  <TVChartContainer />
                </div>
              </div>
            </div>
            {/* buy and sell */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ps ps--active-y">
              <div className="card">
                <div className="card-header">
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#limit"
                        role="tab"
                        aria-selected="true"
                      >
                        Spot Trading
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body market-limit">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="limit"
                      role="tabpanel"
                    >
                      <form
                        name="myform"
                        className="currency_limit"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                {chartSymbol?.title?.replace("BTC", "")}
                              </span>
                            </div>
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control text-right"
                              value={input.price}
                              onChange={(e) =>
                                setInput((prev) => {
                                  return {
                                    ...prev,
                                    price: e.target.value,
                                  };
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                {chartSymbol.currency}
                              </span>
                            </div>
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control text-right"
                              placeholder="501458"
                              onChange={(e) =>
                                setInput((prev) => {
                                  return {
                                    ...prev,
                                    quantity: e.target.value,
                                  };
                                })
                              }
                              value={input.quantity}
                            />
                          </div>
                        </div>

                        <ul className="list-group limit-nested">
                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                            Wallet
                            <strong className="strong">
                              {chartSymbol.currency == "INR"
                                ? totalUserBalance
                                : totalUserBalance / 80}
                              {chartSymbol.currency == "INR" ? "₹" : "$"}
                            </strong>
                          </li>
                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center mt-2">
                            <input
                              type="range"
                              name="range"
                              min={0}
                              max={100}
                              step={25}
                              style={{ zIndex: 9 }}
                              value={range}
                              onChange={(e) => {
                                setRange(Number(e.target.value));
                              }}
                            />
                            {range}%
                          </li>
                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                            Size in {chartSymbol?.title?.replace("BTC", "")}
                            <strong className="strong">0</strong>
                          </li>
                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                            Order Value
                            <strong className="strong">
                              {(input.price * input.quantity)?.toFixed(3)}
                              {chartSymbol.currency == "INR" ? "₹" : "$"}
                            </strong>
                          </li>

                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                            Market Fee @0.25%
                            <strong className="strong">0.00 USD</strong>
                          </li>
                          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                            Taker Fee @0.25%
                            <strong className="strong">0.00 USD</strong>
                          </li>
                        </ul>

                        <div className="btn-group btn-block mt-3">
                          <button
                            type="submit"
                            className="btn btn-success"
                            onClick={() =>
                              setInput((e) => {
                                return { ...e, orderType: "buy" };
                              })
                            }
                          >
                            Buy Now
                          </button>
                          <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={() =>
                              setInput((e) => {
                                return { ...e, orderType: "sell" };
                              })
                            }
                          >
                            Sell Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* order book */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ">
              <div className="card ps ps--active-y">
                <div className="card-header">
                  <h4 className="card-title">Order Book</h4>
                </div>
                <div className="card-body order-book">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Volume</th>
                        <th scope="col">Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrder?.bid?.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-success">
                              {Number(data[0])?.toFixed(5)}
                            </td>
                            <td>{Number(data[1])?.toFixed(3)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="order-book-divider">
                    <h6 className="text-danger">
                      <i className="la la-arrow-down"></i> 6587.35
                    </h6>
                    <span>6520.220 / 4835.00</span>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Volume</th>
                        <th scope="col">Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrder?.ask?.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td className="text-danger">
                              {Number(data[0])?.toFixed(3)}
                            </td>
                            <td>{Number(data[1])?.toFixed(3)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* trade history */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3">
              <div className="row">
                <div className="col-12">
                  <div className="card  ps ps--active-y">
                    <div className="card-header">
                      <h4 className="card-title">Trade History</h4>
                    </div>
                    <div className="card-body trade-history">
                      <div className="table-responsive">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <th scope="col">Price</th>
                              <th scope="col">Size</th>
                              <th scope="col">Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tradeHistroy?.length ? (
                              tradeHistroy?.map((data, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="text-danger">10393.50</td>
                                    <td>0.010</td>
                                    <td>14.109</td>
                                  </tr>
                                );
                              })
                            ) : (
                              <h4>No Records Found</h4>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio */}
            {userData?.email ? (
              <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ">
                <div className="card ps ps--active-y">
                  <div className="card-header">
                    <h4 className="card-title">Your Portfolio </h4>
                  </div>
                  <div className="card-body balance-widget">
                    <div className="total-balance">
                      <h3>
                        {chartSymbol.currency == "INR" ? "₹" : "$"}
                        {chartSymbol.currency == "INR"
                          ? totalUserBalance
                          : totalUserBalance / 80}
                      </h3>
                      <h6>Total Balance</h6>
                    </div>

                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Size</th>
                            <th>USD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {coinBalance
                            ?.sort((a, b) => b?.total - a?.total)
                            ?.map((data, index) => {
                              return (
                                <tr key={index}>
                                  <td>
                                    {data?.symbol?.replace("INR", "") || "INR"}
                                  </td>
                                  <td>{data?.balance}</td>
                                  <td>{data?.total} INR</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ">
                <div className="card ps ps--active-y">
                  <div className="card-header">
                    <h4 className="card-title">You are not Logged In </h4>
                  </div>
                  <div className="card-body balance-widget">
                    <div className="pt-5 pb-5">
                      <button
                        height="44px"
                        width="192px"
                        className="btn/ btn-primary sc-dlfnuX gvpiih"
                      >
                        <span color="#ffffff" className="sc-gsTEea bgjKsV">
                          Login
                        </span>
                      </button>
                      <span
                        className="sc-gsTEea lfvhZI"
                        style={{ textAlign: "center" }}
                      >
                        OR
                      </span>
                      <button
                        height="44px"
                        width="192px"
                        className="btn btn-default sc-dlfnuX lgeLPf"
                      >
                        <span
                          color="rgb(72, 81, 86)"
                          className="sc-gsTEea jlXtCG"
                        >
                          Create an account
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* market news */}
            <div className="col-xl-3 col-lg-3 col-md-3 col-xxl-3 ">
              <div className="card ps ps--active-y">
                <div className="card-header">
                  <h4 className="card-title">Market News</h4>
                </div>
                <div className="card-body market-news">
                  <div className="row">
                    <div className="col-xl-12">
                      <img
                        className="img-fluid"
                        src="images/blog/1.jpg"
                        alt="..."
                        height="100"
                      />
                      <a href="#" className="news-content">
                        <h6 className="mt-2 mb-3">
                          The Cryptocurrency Act of
                          <script>
                            var CurrentYear = new Date().getFullYear()
                            document.write(CurrentYear)
                          </script>
                          Is ‘Dead on Arrival,’ Washington Tells Sponsors
                        </h6>
                      </a>
                    </div>
                    <div className="col-xl-12">
                      <img
                        className="img-fluid"
                        src="images/blog/2.jpg"
                        alt="..."
                      />
                      <a href="#" className="news-content">
                        <h6 className="mt-2 mb-3">
                          UK Trade Negotiators Eye Blockchain Provisions in
                          Coming US Trade Talks
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* position */}
            <div className="col-xl-12 col-lg-12 col-xxl-12">
              <div className="card">
                {/* header */}
                <div className="card-header">
                  <ul className="nav nav-pills" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#open-orders"
                        role="tab"
                        aria-selected="true"
                        onClick={() => setOrderListType("open")}
                      >
                        Open Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#active-orders"
                        role="tab"
                        aria-selected="false"
                        onClick={() => setOrderListType("complete")}
                      >
                        Complete Orders
                      </a>
                    </li>
                  </ul>
                </div>
                {/* body */}
                <div className="card-body open-position-table ps ps--active-y">
                  <div className="market-history market-order">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="open-orders"
                        role="tabpanel"
                      >
                        <div className="table-responsive">
                          <table className="table" id="tbUser">
                            <thead>
                              <tr>
                                <th scope="col">Symbol</th>
                                <th scope="col">Pair</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Bid Price</th>
                                <th scope="col">Market Price</th>
                                <th scope="col">Total</th>
                                <th scope="col">Type</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {myOrders?.length ? (
                                myOrders?.map((data, index) => {
                                  if (orderListType == "open") {
                                    if (data?.status == "placed") {
                                      return orderListComponent(data, index);
                                    }
                                  } else {
                                    if (data?.status == "completed") {
                                      return orderListComponent(data, index);
                                    }
                                  }
                                })
                              ) : (
                                <h4>No Records Found</h4>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <InnerFooter />
    </div>
  );
};

export default Exchange;
