import React from "react";

const Body = () => {
  return (
    <div className="main">
      <div className="container-fluid mtb15 no-fluid">
        <div className="row sm-gutters">
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
            <div className="market-pairs">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <nav className="nav nav-tabs" role="tablist">
                <a
                  href="#tab-1"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="star"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  ★
                </a>
                <a
                  href="#tab-2"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="btc"
                  aria-selected="true"
                  className="nav-item nav-link active"
                >
                  BTC
                </a>
                <a
                  href="#tab-3"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="eth"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  ETH
                </a>
                <a
                  href="#tab-4"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="neo"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  NEO
                </a>
                <a
                  href="#tab-5"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="usdt"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  USDT
                </a>
                <a
                  href="#tab-6"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="dai"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  DAI
                </a>
              </nav>
              <div className="c-exchange-fixedheight box-markets">
                <div className="markets-header pt-8 pb-6">
                  <div className="th th-dest ps-18 text-7d7f81">
                    <div className="th-inner items-center cursor-pointer">
                      <span className="markets-header-title align-middle">
                        Trading Pair
                      </span>
                    </div>
                  </div>
                  <div className="th th-last text-7d7f81">
                    <div className="th-inner items-center cursor-pointer">
                      <span className="markets-header-title align-middle">
                        Price
                      </span>
                    </div>
                  </div>
                  <div className="th th-deal text-7d7f81">
                    <div className="th-inner items-center cursor-pointer">
                      <span className="markets-header-title align-middle">
                        24H Value
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  id="tab-1"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <table className="table star-active">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  id="tab-2"
                  aria-hidden="false"
                  className="fade tab-pane active show"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ETH/BTC
                        </td>
                        <td>0.00020255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/BTC
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+5.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/BTC
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-1.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>EOS/BTC
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTT/BTC
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>LTC/BTC
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRX/BTC
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BSV/BTC
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>COTI/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XYT/BTC
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BNB/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XMR/BTC
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRY/BTC
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ADA/BTC
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>NEO/BTC
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XLM/BTC
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ENQ/BTC
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AVA/BTC
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AMB/BTC
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>MAP/BTC
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GO/BTC
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KICK/BTC
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DBC/BTC
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GGC/BTC
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  id="tab-3"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTC/ETH
                        </td>
                        <td>0.00020255</td>
                        <td className="green">+1.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/ETH
                        </td>
                        <td>0.00013192</td>
                        <td className="red">-0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/ETH
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/ETH
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>EOS/ETH
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTT/ETH
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>LTC/ETH
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRX/ETH
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BSV/ETH
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>COTI/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XYT/ETH
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BNB/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XMR/ETH
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRY/ETH
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ADA/ETH
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>NEO/ETH
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XLM/ETH
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ENQ/ETH
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AVA/ETH
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AMB/ETH
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>MAP/ETH
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GO/ETH
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KICK/ETH
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DBC/ETH
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GGC/ETH
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  id="tab-4"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ETH/NEO
                        </td>
                        <td>0.00350255</td>
                        <td className="red">-6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/NEO
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/NEO
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/NEO
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>EOS/NEO
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTT/NEO
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>LTC/NEO
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRX/NEO
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BSV/NEO
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>COTI/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XYT/NEO
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BNB/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XMR/NEO
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRY/NEO
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ADA/NEO
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>NEO/NEO
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XLM/NEO
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ENQ/NEO
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AVA/NEO
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AMB/NEO
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>MAP/NEO
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GO/NEO
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KICK/NEO
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DBC/NEO
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GGC/NEO
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  id="tab-5"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ETH/USDT
                        </td>
                        <td>0.00350255</td>
                        <td className="red">-2.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/USDT
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+6.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/USDT
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/USDT
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>EOS/USDT
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTT/USDT
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>LTC/USDT
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRX/USDT
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BSV/USDT
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>COTI/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XYT/USDT
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BNB/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XMR/USDT
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRY/USDT
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ADA/USDT
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>USDT/USDT
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XLM/USDT
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ENQ/USDT
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AVA/USDT
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AMB/USDT
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>MAP/USDT
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GO/USDT
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KICK/USDT
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DBC/USDT
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GGC/USDT
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  id="tab-6"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ETH/DAI
                        </td>
                        <td>0.05320255</td>
                        <td className="green">+6.58%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KCS/DAI
                        </td>
                        <td>0.00013192</td>
                        <td className="green">+0.6%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XRP/DAI
                        </td>
                        <td>0.00002996</td>
                        <td className="red">-0.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>VET/DAI
                        </td>
                        <td>0.00000103</td>
                        <td className="green">+1.8%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>EOS/DAI
                        </td>
                        <td>0.00000103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BTT/DAI
                        </td>
                        <td>0.00002303</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>LTC/DAI
                        </td>
                        <td>0.03520103</td>
                        <td className="green">+1.5%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRX/DAI
                        </td>
                        <td>0.00330103</td>
                        <td className="red">-3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BSV/DAI
                        </td>
                        <td>0.00300103</td>
                        <td className="green">+2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>COTI/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="green">+2.85%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XYT/DAI
                        </td>
                        <td>0.00003103</td>
                        <td className="green">+3.55%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>BNB/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XMR/DAI
                        </td>
                        <td>0.003500103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>TRY/DAI
                        </td>
                        <td>0.00000123</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ADA/DAI
                        </td>
                        <td>0.00050103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DAI/DAI
                        </td>
                        <td>0.00340103</td>
                        <td className="red">-1.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>XLM/DAI
                        </td>
                        <td>0.00035103</td>
                        <td className="green">+5.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>ENQ/DAI
                        </td>
                        <td>0.00354103</td>
                        <td className="green">+2.02%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AVA/DAI
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+3.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>AMB/DAI
                        </td>
                        <td>0.05335103</td>
                        <td className="green">+1.0%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>MAP/DAI
                        </td>
                        <td>0.00234103</td>
                        <td className="red">-2.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GO/DAI
                        </td>
                        <td>0.00354103</td>
                        <td className="red">-6.50%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>KICK/DAI
                        </td>
                        <td>0.02053103</td>
                        <td className="red">-6.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>DBC/DAI
                        </td>
                        <td>0.02535103</td>
                        <td className="green">+7.05%</td>
                      </tr>
                      <tr>
                        <td>
                          <i className="icon fa fa-star"></i>GGC/DAI
                        </td>
                        <td>0.00353103</td>
                        <td className="red">-4.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="main-chart mb15">
              <div className="panel-ticker bg-ffffff dark:bg-21263d">
                <div className="c-exchange-ticker ps-10 pe-15">
                  <div className="c-common-guidedialog">
                    <div className="c-common-popper">
                      <div className="">
                        <div className="wrap">
                          <i className="c-market-fllow iconfont icon-star text-12 fa fa-star cursor-pointer text-14 text-f2f2f2"></i>
                          <div className="c-common-popper">
                            <div className="pl-1">
                              <div className="flex items-center cursor-pointer">
                                <div className="dropdown">
                                  <a
                                    href="#"
                                    className="dest text-27282c ms-4 text-16 dropdown-toggle"
                                    data-toggle="dropdown"
                                  >
                                    BTC/USDT
                                  </a>
                                  <div className="dropdown-menu">
                                    <div className="popper-container">
                                      <div className="select-section rounded-4 pb-2 pt-2 bg-ffffff border-f4f6fa dark:shadow-none">
                                        <div className="c-exchange-market-info px-18 pt-10">
                                          <div className="flex text-7d7f81 mb-10 justify-between text-12 font-bold">
                                            <div className="coin-name text-start me-20">
                                              Market
                                            </div>
                                            <div className="flex-1 text-start">
                                              Latest Price
                                            </div>
                                            <div className="flex-1 text-end">
                                              24H Change
                                            </div>
                                          </div>
                                          <div className="flex flex-col">
                                            <div className="mb-8">
                                              <div className="flex items-center">
                                                <span className="line"></span>
                                                <span className="text-27282c ms-5 font-bold">
                                                  Exchange
                                                </span>
                                              </div>
                                              <div className="flex justify-between py-5">
                                                <div className="flex me-20 items-center coin-name">
                                                  <span className="text-12 text-27282c">
                                                    <a
                                                      href="/exchange/BTC-USDT"
                                                      className="text-27282c"
                                                    >
                                                      BTC/USDT
                                                    </a>
                                                  </span>{" "}
                                                  <span className="text-12 ms-05 multiple mono-letter">
                                                    10X
                                                  </span>
                                                </div>
                                                <div className="text-0ead98 flex-1 text-12 text-start text-0ead98 ">
                                                  <span
                                                    className="el-tooltip"
                                                    aria-describedby="el-tooltip-4321"
                                                    tabindex="0"
                                                  >
                                                    21683.40
                                                  </span>
                                                </div>
                                                <div
                                                  className="rounded-4 px-8 text-12 bg-f2f2f2 flex items-center justify-center text-0ead98 bg-e8f9f7 block"
                                                  style={{ minWidth: "65px" }}
                                                >
                                                  +1.51%
                                                </div>
                                              </div>
                                              <div className="flex justify-between py-5">
                                                <div className="flex me-20 items-center coin-name">
                                                  <span className="text-12 text-27282c">
                                                    <a
                                                      href="/exchange/BTC-USDC"
                                                      className="text-27282c"
                                                    >
                                                      BTC/USDC
                                                    </a>
                                                  </span>
                                                </div>
                                                <div className="text-0ead98 flex-1 text-12 text-start text-0ead98 ">
                                                  <span
                                                    className="el-tooltip"
                                                    aria-describedby="el-tooltip-9171"
                                                    tabindex="0"
                                                  >
                                                    21701.49
                                                  </span>
                                                </div>
                                                <div
                                                  className="rounded-4 px-8 text-12 bg-f2f2f2 flex items-center justify-center text-0ead98 bg-e8f9f7 block"
                                                  style={{ minWidth: "65px" }}
                                                >
                                                  +1.68%
                                                </div>
                                              </div>
                                            </div>
                                            <div>
                                              <div className="flex items-center">
                                                <span className="line"></span>
                                                <span className="text-27282c ms-5 font-bold">
                                                  Futures
                                                </span>
                                              </div>
                                              <div className="flex justify-between py-5">
                                                <div className="flex me-20 items-center coin-name">
                                                  <span className="text-12 text-27282c">
                                                    <a
                                                      href="/futures/BTC-USDT"
                                                      className="text-27282c"
                                                    >
                                                      BTCUSDT
                                                    </a>
                                                  </span>{" "}
                                                  <span className="text-12 ms-5 multiple mono-letter">
                                                    100X
                                                  </span>
                                                </div>
                                                <div className="text-0ead98 text-12 flex-1 text-start text-0ead98 ">
                                                  <span
                                                    className="el-tooltip"
                                                    aria-describedby="el-tooltip-7387"
                                                    tabindex="0"
                                                  >
                                                    21653.05
                                                  </span>
                                                </div>
                                                <div
                                                  className="rounded-4 px-8 bg-f2f2f2 text-12 flex items-center justify-center text-0ead98 bg-e8f9f7 block"
                                                  style={{ minWidth: "65px" }}
                                                >
                                                  +1.34%
                                                </div>
                                              </div>
                                              <div className="flex justify-between py-5">
                                                <div className="flex me-20 items-center coin-name">
                                                  <span className="text-12 text-27282c">
                                                    <a
                                                      href="/futures/BTC-USD"
                                                      className="text-27282c"
                                                    >
                                                      BTCUSD
                                                    </a>
                                                  </span>{" "}
                                                  <span className="text-12 ms-5 multiple mono-letter">
                                                    100X
                                                  </span>
                                                </div>
                                                <div className="text-0ead98 text-12 flex-1 text-start text-0ead98 ">
                                                  <span
                                                    className="el-tooltip"
                                                    aria-describedby="el-tooltip-8635"
                                                    tabindex="0"
                                                  >
                                                    21677.87
                                                  </span>
                                                </div>
                                                <div
                                                  className="rounded-4 px-8 bg-f2f2f2 text-12 flex items-center justify-center text-0ead98 bg-e8f9f7 block"
                                                  style={{ minWidth: "65px" }}
                                                >
                                                  +1.40%
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
                            </div>
                          </div>
                          <div className="c-exchange-token-info ms-12">
                            <span>
                              <div
                                role="tooltip"
                                id="el-popover-4442"
                                aria-hidden="true"
                                className="el-popover el-popper popper-token-info"
                                tabindex="0"
                                style={{ width: "540px", display: "none" }}
                              >
                                <div className="title-box">
                                  <div className="row-top">
                                    <div
                                      className="c-common-coin-logo flex-shrink-0 me-12"
                                      style={{ width: "32px", height: "32px" }}
                                    >
                                      <img
                                        src="https://file.coinexstatic.com/2022-04-22/F42DE6093B6AA77D268EF7B3C17ABC8E.png"
                                        alt="coin-logo"
                                      />
                                    </div>
                                    <div className="sec-name">
                                      <span className="short-name me-8">
                                        BTC
                                      </span>{" "}
                                      <span className="full-name me-20">
                                        Bitcoin
                                      </span>
                                    </div>
                                    <span className="rank">No. 1</span>
                                  </div>
                                  <div className="c-token-detail-tags mt-12 pb-8">
                                    <div
                                      className="el-dialog__wrapper"
                                      style={{ display: "none" }}
                                    >
                                      <div
                                        role="dialog"
                                        aria-modal="true"
                                        aria-label="dialog"
                                        className="el-dialog"
                                        style={{
                                          marginTop: "15vh",
                                          width: "420px",
                                        }}
                                      >
                                        <div className="el-dialog__header">
                                          <div className="tag-title">
                                            <div
                                              className="c-common-coin-logo flex-shrink-0"
                                              style={{
                                                width: "24px",
                                                height: "24px",
                                              }}
                                            >
                                              <img
                                                src="/_nuxt/img/coin_default.9954251.png"
                                                alt="coin-logo"
                                              />
                                            </div>
                                            <div className="title-text ms-8">
                                              <span></span>
                                              <span>Tag</span>
                                            </div>
                                          </div>
                                          <button
                                            type="button"
                                            aria-label="Close"
                                            className="el-dialog__headerbtn"
                                          >
                                            <i className="el-dialog__close el-icon el-icon-close"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="tag-box">
                                      <span className="tag me-8 mb-8 text-0ead98 cursor-pointer">
                                        <div className="c-common-overflowtext truncate">
                                          <div
                                            className="el-tooltip content-inner truncate"
                                            aria-describedby="el-tooltip-2787"
                                            tabindex="0"
                                          >
                                            <span>
                                              <span className="md:text-12">
                                                Coin
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </span>
                                      <span className="tag me-8 mb-8 text-0ead98 cursor-pointer">
                                        <div className="c-common-overflowtext truncate">
                                          <div
                                            className="el-tooltip content-inner truncate"
                                            aria-describedby="el-tooltip-2682"
                                            tabindex="0"
                                          >
                                            <span>
                                              <span className="md:text-12">
                                                Margin
                                              </span>
                                            </span>
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="basic-info-box mt-16">
                                  <div className="sec-title">Basic Info</div>
                                  <div className="row-box">
                                    <div className="field-name">
                                      Date of Issue
                                    </div>
                                    <div className="field-val">2008-10-31</div>
                                  </div>
                                  <div className="row-box">
                                    <div className="field-name">
                                      Total Supply
                                    </div>
                                    <div className="field-val">21.00M</div>
                                  </div>
                                  <div className="row-box">
                                    <div className="field-name">
                                      <span>Total Circulation</span>
                                    </div>
                                    <div className="field-val">19.13M</div>
                                  </div>
                                  <div className="row-box">
                                    <div className="field-name">
                                      <span>Total Market Cap</span>
                                      <span>(USD)</span>
                                    </div>
                                    <div className="field-val">455.46B</div>
                                  </div>
                                  <div className="row-box">
                                    <div className="field-name">
                                      <span>Circulating Market Cap</span>
                                      <span>(USD)</span>
                                    </div>
                                    <div className="field-val">416.84B </div>
                                  </div>
                                </div>
                                <div className="links-box mt-24">
                                  <div className="sec-title">Links</div>
                                  <div className="c-token-detail-links">
                                    <div className="c-tokendetail-dropdown rounded-4 inline-block">
                                      <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-box text-12 py-4 px-10 flex items-center"
                                      >
                                        Official Website{" "}
                                        <i className="iconfont icon-yield text-12 ms-4"></i>
                                      </a>
                                    </div>
                                    <div className="c-tokendetail-dropdown rounded-4 inline-block">
                                      <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-box text-12 py-4 px-10 flex items-center"
                                      >
                                        Whitepaper{" "}
                                        <i className="iconfont icon-yield text-12 ms-4"></i>
                                      </a>
                                    </div>
                                    <div className="c-tokendetail-dropdown rounded-4 inline-block">
                                      <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-box text-12 py-4 px-10 flex items-center"
                                      >
                                        Source Code{" "}
                                        <i className="iconfont icon-yield text-12 ms-4"></i>
                                      </a>
                                    </div>
                                    <div className="c-tokendetail-dropdown rounded-4 inline-block">
                                      <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="dropdown-box text-12 py-4 px-10 flex items-center"
                                      >
                                        Wallet{" "}
                                        <i className="iconfont icon-yield text-12 ms-4"></i>
                                      </a>
                                    </div>
                                    <div className="c-tokendetail-dropdown rounded-4 inline-block">
                                      <div className="dropdown-box el-dropdown">
                                        <span
                                          className="el-dropdown-link el-dropdown-selfdefine"
                                          aria-haspopup="list"
                                          aria-controls="dropdown-menu-9742"
                                          role="button"
                                          tabindex="0"
                                        >
                                          Block Explorer
                                          <i className="el-icon-arrow-down el-icon--right ms-4"></i>
                                        </span>
                                        <ul
                                          className="el-dropdown-menu el-popper el-dropdown-menu--mini"
                                          id="dropdown-menu-9742"
                                          style={{ display: "none" }}
                                        >
                                          <li
                                            tabindex="-1"
                                            className="el-dropdown-menu__item"
                                          >
                                            <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-161719 text-12 flex items-center"
                                            >
                                              blockchain.com
                                              <i className="iconfont icon-yield text-12 ms-4"></i>
                                            </a>
                                          </li>
                                          <li
                                            tabindex="-1"
                                            className="el-dropdown-menu__item"
                                          >
                                            <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-161719 text-12 flex items-center"
                                            >
                                              live.blockcypher.com
                                              <i className="iconfont icon-yield text-12 ms-4"></i>
                                            </a>
                                          </li>
                                          <li
                                            tabindex="-1"
                                            className="el-dropdown-menu__item"
                                          >
                                            <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-161719 text-12 flex items-center"
                                            >
                                              blockchair.com
                                              <i className="iconfont icon-yield text-12 ms-4"></i>
                                            </a>
                                          </li>
                                          <li
                                            tabindex="-1"
                                            className="el-dropdown-menu__item"
                                          >
                                            <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              className="text-161719 text-12 flex items-center"
                                            >
                                              explorer.viabtc.com
                                              <i className="iconfont icon-yield text-12 ms-4"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="coin-intro-box">
                                  <div className="sec-title">
                                    Coin Introduction
                                  </div>
                                  <div className="intro-text">
                                    Bitcoin (BTC) is a peer-to-peer
                                    cryptocurrency that aims to function as a
                                    means of exchange that is independent of any
                                    central authority.
                                  </div>
                                  <a
                                    href="/info/BTC"
                                    target="_blank"
                                    className="check-more"
                                  >
                                    View More
                                  </a>
                                </div>
                              </div>
                              <span
                                className="inline-block el-popover__reference"
                                aria-describedby="el-popover-4442"
                                tabindex="0"
                              >
                                <button
                                  type="button"
                                  className="el-button btn-info el-button--default"
                                  data-backdrop="false"
                                  data-toggle="modal"
                                  data-target="#basicExampleModal"
                                >
                                  <span>Info</span>
                                </button>
                              </span>
                            </span>
                          </div>
                          <span className="c-exchange-rank-index ms-3 ms-8"></span>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id="basicExampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="popper-container"
                        style={{
                          display: "none",
                          position: "absolute",
                          inset: "0px auto auto 0px",
                          margin: "0px",
                          transform: "translate(434px, 98px)",
                        }}
                        data-popper-placement="bottom"
                      >
                        <div
                          data-popper-arrow=""
                          className="popper-arrow"
                          style={{
                            position: "absolute",
                            left: "0px",
                            transform: "translate(6px, 0px)",
                          }}
                        ></div>
                        <div className="guide-container">
                          <i className="el-icon-close text-ffffff text-16 cursor-pointer"></i>
                          <p className="text-14 text-ffffff">(1/3)</p>
                          <p
                            className="text-14 text-ffffff mt-4"
                            style={{
                              maxWidth: "250px",
                              minWidth: "200px",
                              wordBreak: "break-word",
                            }}
                          >
                            Select trading pairs and view the latest price
                          </p>
                          <div className="flex justify-end mt-10 items-center">
                            <span className="text-12 text-ffffff cursor-pointer">
                              Next &gt;
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ticker-item pt-2">
                    <div className="price text-16 text-start text-0ead98">
                      21683.40
                    </div>
                    <div className="legal text-start">≈21,688.69 USD</div>
                  </div>
                  <div className="ticker-item">
                    <div className="name fullwidth">24H Change</div>
                    <div className="text fullwidth rtl:unicode-plain text-start text-0ead98">
                      +1.51%
                    </div>
                  </div>
                  <div className="ticker-item">
                    <div className="name fullwidth">24H Highest</div>
                    <div className="text fullwidth">21882.95</div>
                  </div>
                  <div className="ticker-item">
                    <div className="name fullwidth">24H Lowest</div>
                    <div className="text fullwidth">21268.42</div>
                  </div>
                  <div className="ticker-item" style={{ display: "none" }}>
                    <div className="name fullwidth">24H Volume</div>
                    <div className="text">211.50</div>
                  </div>
                  <div className="ticker-item">
                    <div className="name fullwidth">24H Value</div>
                    <div className="text fullwidth">4.56M</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="market-trade bg-white mt-2">
              <div className="c-exchange-trade-header p-0 dark:border-none">
                <ul
                  className="nav nav-tabs border0"
                  role="tablist"
                  id="tab-trade"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#duck2"
                      role="tab"
                      aria-controls="duck2"
                      aria-selected="true"
                    >
                      Spot Trading
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#chicken2"
                      role="tab"
                      aria-controls="chicken2"
                      aria-selected="false"
                    >
                      Margin Trading
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content p-3">
                <div
                  className="tab-pane active"
                  id="duck2"
                  role="tabpanel"
                  aria-labelledby="duck-tab"
                >
                  <ul className="nav nav-tabs border0" role="tablist" id="Ul3">
                    <li className="nav-item">
                      <a
                        type="button"
                        className="nav-link el-button via-btn-switch type-button el-button--default mr-2 active"
                        data-toggle="tab"
                        href="#kiwi2"
                        role="tab"
                        aria-controls="kiwi2"
                        aria-selected="true"
                      >
                        Limit
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link el-button via-btn-switch type-button el-button--default"
                        type="button"
                        data-toggle="tab"
                        href="#emu2"
                        role="tab"
                        aria-controls="emu2"
                        aria-selected="true"
                      >
                        Market
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="kiwi2"
                      role="tabpanel"
                      aria-labelledby="kiwi-tab"
                    >
                      <div className="section-execute flex mt-20">
                        <div className="me-15 flex-1">
                          <div className="c-exchange-placeorder-limit">
                            <div className="c-exchange-placeorder-available flex items-center justify-between">
                              <div className="availale">
                                <span>Available: </span>
                                <span className="cursor-pointer">
                                  <span className="text-27282c font-bold">
                                    0
                                  </span>{" "}
                                  USDT
                                </span>
                              </div>
                            </div>
                            <div className="c-exchange-placeorder-input mt-2">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Price
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      USDT
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-3">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>
                            <div className="c-exchange-placeorder-input mt-2">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Amount
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      BTC
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    readonly="readonly"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-2">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>
                            <div className="range-box">
                              <div className="d-flex pt-2 availale">
                                <span>Price : </span>
                                <span
                                  className="example-val pl-2"
                                  id="slider-range-value"
                                ></span>
                              </div>
                              <div id="slider-range"></div>
                            </div>
                            <div className="total text-7d7f81 text-12 mt-3">
                              <span>Est. Execution Value: </span>
                              <span>
                                <span className="font-bold text-27282c">
                                  --
                                </span>{" "}
                                USDT
                              </span>
                            </div>
                            <div
                              type="button"
                              className="c-exchange-placeorder-button rounded-4 mt-2 login buy text-14"
                            >
                              <a
                                href="/signin?redirect=%2Fexchange%23spot"
                                className="text-0ead98"
                              >
                                Log In
                              </a>{" "}
                              <span className="text-7d7f81">or </span>
                              <a href="/register" className="text-0ead98">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ms-15 flex-1">
                          <div className="c-exchange-placeorder-limit">
                            <div className="c-exchange-placeorder-available flex items-center justify-between">
                              <div className="availale">
                                <span>Available: </span>
                                <span className="cursor-pointer">
                                  <span className="text-27282c font-bold">
                                    0
                                  </span>{" "}
                                  BTC
                                </span>
                              </div>
                            </div>
                            <div className="c-exchange-placeorder-input mt-2">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Price
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      USDT
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    readonly="readonly"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-3">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>
                            <div className="c-exchange-placeorder-input mt-2">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Amount
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      BTC
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    readonly="readonly"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-2">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>
                            <div className="range-box">
                              <div className="d-flex pt-2 availale">
                                <span>Price : </span>
                                <span
                                  className="example-val pl-2"
                                  id="slider-range-value-2"
                                ></span>
                              </div>
                              <div id="slider-range-2"></div>
                            </div>
                            <div className="total text-7d7f81 text-12 mt-3">
                              <span>Est. Execution Value: </span>
                              <span>
                                <span className="font-bold text-27282c">
                                  --
                                </span>{" "}
                                USDT
                              </span>
                            </div>
                            <div
                              type="button"
                              className="c-exchange-placeorder-button rounded-4 mt-2 login sell text-14"
                            >
                              <a
                                href="/signin?redirect=%2Fexchange%23spot"
                                className="text-0ead98"
                              >
                                Log In
                              </a>{" "}
                              <span className="text-7d7f81">or </span>
                              <a href="/register" className="text-0ead98">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      id="emu2"
                      role="tabpanel"
                      aria-labelledby="emu-tab"
                    >
                      <div className="section-effect mt-12 flex items-center justify-between">
                        <div className="c-common-overflowtext truncate fit-content">
                          <span className="invisible text-transparent">-</span>
                          <div
                            className="el-tooltip content-inner truncate"
                            aria-describedby="el-tooltip-7175"
                            tabindex="0"
                          >
                            <span>
                              <span className="text-12 text-7d7f81">
                                Market (Order): A market order doesn't require a
                                limit price, and it will be executed at the
                                optimal price of the opposite side.
                              </span>
                            </span>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="section-execute flex mt-20">
                        <div className="me-15 flex-1">
                          <div className="c-exchange-placeorder-market">
                            <div className="c-exchange-placeorder-available flex items-center justify-between">
                              <div className="availale">
                                <span>Available: </span>
                                <span className="cursor-pointer">
                                  <span className="text-27282c font-bold">
                                    0
                                  </span>{" "}
                                  USDT
                                </span>
                              </div>
                            </div>
                            <div className="bg-f2f2f2 text-7d7f81 text-12 mt-2 mb-18 p-10 market-price rounded-4">
                              To buy sequentially at the best market price
                            </div>
                            <div className="c-exchange-placeorder-input mt-3">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Value
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      USDT
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    readonly="readonly"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-3">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>

                            <div
                              type="button"
                              className="c-exchange-placeorder-button rounded-4 mt-20 login text-14"
                            >
                              <a
                                href="/signin?redirect=%2Fexchange%23spot"
                                className="text-0ead98"
                              >
                                Log In
                              </a>{" "}
                              <span className="text-7d7f81">or </span>
                              <a href="/register" className="text-0ead98">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="ms-15 flex-1">
                          <div className="c-exchange-placeorder-market">
                            <div className="c-exchange-placeorder-available flex items-center justify-between">
                              <div className="availale">
                                <span>Available: </span>
                                <span className="cursor-pointer">
                                  <span className="text-27282c font-bold">
                                    0
                                  </span>{" "}
                                  BTC
                                </span>
                              </div>
                            </div>
                            <div className="bg-f2f2f2 text-7d7f81 text-12 mt-2 mb-18 p-10 market-price rounded-4">
                              To be sold sequentially at the best market price
                            </div>
                            <div className="c-exchange-placeorder-input mt-3">
                              <div className="input-warp hover:border-0ead98 readonly">
                                <label className="ps-10 number">
                                  <div className="name-wrap min-width">
                                    <span className="text-7d7f81 ms-10">
                                      Amount
                                    </span>{" "}
                                    <span className="coin ms-12 text-27282c">
                                      BTC
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    readonly="readonly"
                                    className="px-10 input text-27282c"
                                  />
                                </label>
                                <div className="control pe-1 me-5">
                                  <span className="control-action select-none dark:border-454a6b mb-2">
                                    +
                                  </span>{" "}
                                  <span className="control-action select-none dark:border-454a6b">
                                    -
                                  </span>
                                </div>
                              </div>
                              <div className="tip-wrap mt-3">
                                <div className="tip"></div>
                                <div className="text-7d7f81 p-0"></div>
                              </div>
                            </div>

                            <div
                              type="button"
                              className="c-exchange-placeorder-button rounded-4 mt-20 login text-14"
                            >
                              <a
                                href="/signin?redirect=%2Fexchange%23spot"
                                className="text-0ead98"
                              >
                                Log In
                              </a>{" "}
                              <span className="text-7d7f81">or </span>
                              <a href="/register" className="text-0ead98">
                                Sign Up
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane active"
                  id="chicken2"
                  role="tabpanel"
                  aria-labelledby="chicken-tab"
                >
                  The chicken (Gallus gallus domesticus) is a type of
                  domesticated fowl, a subspecies of the red junglefowl. It is
                  one of the most common and widespread domestic animals, with a
                  total population of more than 19 billion as of 2011. There are
                  more chickens in the world than any other bird or domesticated
                  fowl.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="order-book c-exchange-quota-depth pt-10 bg-ffffff dark:bg-1d2134 mb15">
              <div className="depth-option px-10">
                <div className="el-select options-merge">
                  <div className="el-input el-input--suffix">
                    <select className="form-select el-input__inner">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
                <div className="options-view flex">
                  <span className="view-button me-6 active">
                    <i className="view-item depth-all fa fa-filter"></i>
                  </span>
                  <span className="view-button me-6">
                    <i className="view-item depth-bid"></i>
                  </span>
                  <span className="view-button">
                    <i className="view-item depth-ask"></i>
                  </span>
                </div>
              </div>
              <div className="depth-content mt-10">
                <div className="content-thead">
                  <span className="th th-price text-7d7f81 ps-10">
                    Price(USDT)
                  </span>
                  <span className="th th-amount text-7d7f81 px-8">
                    Amount(BTC)
                  </span>
                  <span className="th th-total text-7d7f81 pe-10">
                    Total(BTC)
                  </span>
                </div>

                <div className="content-tbody">
                  <table className="table">
                    <tbody>
                      <tr className="red-bg-80">
                        <td className="red">0.022572</td>
                        <td>1.253415</td>
                        <td>15.27648</td>
                      </tr>
                      <tr className="red-bg-60">
                        <td className="red">0.020371</td>
                        <td>1.205415</td>
                        <td>15.25648</td>
                      </tr>
                      <tr className="red-bg-40">
                        <td className="red">0.023572</td>
                        <td>1.645415</td>
                        <td>15.23648</td>
                      </tr>
                      <tr className="red-bg-20">
                        <td className="red">0.032378</td>
                        <td>1.206715</td>
                        <td>15.25348</td>
                      </tr>
                      <tr className="red-bg-10">
                        <td className="red">0.022573</td>
                        <td>1.262415</td>
                        <td>15.19648</td>
                      </tr>
                      <tr className="red-bg-8">
                        <td className="red">0.154377</td>
                        <td>1.225415</td>
                        <td>15.35648</td>
                      </tr>
                      <tr className="red-bg-5">
                        <td className="red">0.120373</td>
                        <td>1.285415</td>
                        <td>15.25648</td>
                      </tr>
                      <tr className="red-bg">
                        <td className="red">0.028576</td>
                        <td>1.291415</td>
                        <td>15.26448</td>
                      </tr>
                    </tbody>
                    <tbody className="ob-heading">
                      <tr>
                        <td>
                          <span>Last Price</span>0.020367
                        </td>
                        <td>
                          <span>USD</span>148.65
                        </td>
                        <td className="red">
                          <span>Change</span>-0.51%
                        </td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr className="green-bg">
                        <td className="green">0.158373</td>
                        <td>1.209515</td>
                        <td>15.23248</td>
                      </tr>
                      <tr className="green-bg-5">
                        <td className="green">0.020851</td>
                        <td>1.206245</td>
                        <td>15.25458</td>
                      </tr>
                      <tr className="green-bg-8">
                        <td className="green">0.025375</td>
                        <td>1.205715</td>
                        <td>15.65648</td>
                      </tr>
                      <tr className="green-bg-10">
                        <td className="green">0.020252</td>
                        <td>1.205495</td>
                        <td>15.24548</td>
                      </tr>
                      <tr className="green-bg-20">
                        <td className="green">0.020373</td>
                        <td>1.205415</td>
                        <td>15.25648</td>
                      </tr>
                      <tr className="green-bg-40">
                        <td className="green">0.020156</td>
                        <td>1.207515</td>
                        <td>15.28948</td>
                      </tr>
                      <tr className="green-bg-60">
                        <td className="green">0.540375</td>
                        <td>1.205915</td>
                        <td>15.25748</td>
                      </tr>
                      <tr className="green-bg-80">
                        <td className="green">0.020372</td>
                        <td>1.205415</td>
                        <td>15.25648</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="market-history bg-white mt-2">
              <div className="market-headrt-21">
                <nav className="nav nav-tabs" role="tablist">
                  <a
                    href="#"
                    role="tab"
                    data-rb-event-key="recent-trades"
                    aria-selected="true"
                    className="nav-item nav-link text-14 text-27282c font-w500 me-18 active"
                  >
                    Recent Trades
                  </a>
                </nav>
              </div>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  aria-hidden="false"
                  className="fade tab-pane active show"
                >
                  <div className="content-thead">
                    <span className="th th-price text-7d7f81 ps-10">
                      Price(USDT)
                    </span>
                    <span className="th th-amount text-7d7f81 px-8">
                      Amount(BTC)
                    </span>
                    <span className="th th-total text-7d7f81 pe-10">
                      Total(BTC)
                    </span>
                  </div>
                  <div className="content-tbody">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="green">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                        <tr>
                          <td>13:03:53</td>
                          <td className="red">0.020191</td>
                          <td>0.2155045</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row sm-gutters mt-2">
          <div className="col-md-12">
            <div className="market-history-report market-order mt15 bg-white">
              <nav className="nav nav-tabs" role="tablist">
                <a
                  href="#Open-Orders"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="open-orders"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  Open Orders
                </a>
                <a
                  href="#Closed-Orders"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="closed-orders"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  Closed Orders
                </a>
                <a
                  href="#Order-history"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="order-history"
                  aria-selected="false"
                  className="nav-item nav-link"
                >
                  Order history
                </a>
                <a
                  href="#Balance"
                  role="tab"
                  data-toggle="tab"
                  data-rb-event-key="balance"
                  aria-selected="true"
                  className="nav-item nav-link active"
                >
                  Balance
                </a>
              </nav>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  id="Open-Orders"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Time</td>
                          <td>All pairs</td>
                          <td>All Types</td>
                          <td>Buy/Sell</td>
                          <td>Price</td>
                          <td>Amount</td>
                          <td>Executed</td>
                          <td>Unexecuted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="Closed-Orders"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Time</td>
                          <td>All pairs</td>
                          <td>All Types</td>
                          <td>Buy/Sell</td>
                          <td>Price</td>
                          <td>Amount</td>
                          <td>Executed</td>
                          <td>Unexecuted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="Order-history"
                  aria-hidden="true"
                  className="fade tab-pane"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Time</td>
                          <td>All pairs</td>
                          <td>All Types</td>
                          <td>Buy/Sell</td>
                          <td>Price</td>
                          <td>Amount</td>
                          <td>Executed</td>
                          <td>Unexecuted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  id="Balance"
                  aria-hidden="false"
                  className="fade tab-pane active show"
                >
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Time</td>
                          <td>All pairs</td>
                          <td>All Types</td>
                          <td>Buy/Sell</td>
                          <td>Price</td>
                          <td>Amount</td>
                          <td>Executed</td>
                          <td>Unexecuted</td>
                        </tr>
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
  );
};

export default Body;
