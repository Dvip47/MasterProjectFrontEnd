import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";

const Market = () => {
  const { crypto, setChartSymbol } = useContext(AuthContext);

  return (
    <div className="market-pairs">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            <i className="icon ion-md-search"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#STAR"
            role="tab"
            aria-selected="true"
          >
            <i className="icon ion-md-star"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#BTC"
            role="tab"
            aria-selected="true"
          >
            BTC
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#ETH"
            role="tab"
            aria-selected="false"
          >
            ETH
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#NEO"
            role="tab"
            aria-selected="false"
          >
            NEO
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#USDT"
            role="tab"
            aria-selected="false"
          >
            USDT
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#DAI"
            role="tab"
            aria-selected="false"
          >
            DAI
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#PAX"
            role="tab"
            aria-selected="false"
          >
            PAX
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="BTC" role="tabpanel">
          <table className="table">
            <thead>
              <tr>
                <th>Pairs</th>
                <th>Last Price</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {crypto?.map((data, index) => {
                return (
                  <tr key={index} onClick={() => setChartSymbol(data.symbol)}>
                    <td>
                      <i className="icon ion-md-star"></i> {data.symbol}
                    </td>
                    <td>{Number(data?.lastPrice)?.toFixed(5)}</td>
                    <td className="red">
                      {(
                        ((data?.openPrice - data?.lastPrice) * 100) /
                        data?.lastPrice
                      ).toFixed(2)}
                      %
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Market;
