import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";

const Market = () => {
  // /history?symbol=GASBTC&resolution=1D&from=1650931200&to=1662163200&countback=130&currencyCode=BTC
  const { crypto } = useContext(AuthContext);
  useEffect(() => {
    console.log(crypto);
  }, []);
  const compare = function (a, b) {
    if (a.c < b.c) return 1;
    if (a.c > b.c) return -1;
    return 0;
  };
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
              {crypto?.sort(compare)?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <i className="icon ion-md-star"></i> {data.s}
                    </td>
                    <td>{Number(data?.c)?.toFixed(3)}</td>
                    <td className="red">
                      {(((data?.o - data?.c) * 100) / data?.c).toFixed(2)}%
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
