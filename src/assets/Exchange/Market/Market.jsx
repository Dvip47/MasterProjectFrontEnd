import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth";
import { MarketContext } from "../../../context/MarketContext";

const Market = () => {
  const { crypto, setChartSymbol, callcryptoOrder, setCryptoOrderSymbol } =
    useContext(AuthContext);
  const { setCurrentCurrency } = useContext(MarketContext);
  const header = ["INR"];
  const [currentSymbol, setCurrentSybmol] = useState("INR");
  const [input, setInput] = useState("");
  let BodyResult = (data, index) => (
    <tr
      key={index}
      onClick={() => {
        setChartSymbol(data.symbol.replace(currentSymbol, "BTC"));
        setCryptoOrderSymbol({
          symbol: data.symbol.replace(currentSymbol, ""),
          currency: currentSymbol,
          data: data,
        });
        setCurrentCurrency(data);
        callcryptoOrder(data.symbol.replace(currentSymbol, "").toLowerCase());
      }}
    >
      <td>
        <i className="icon ion-md-star"></i>
        {data.symbol?.replace(currentSymbol, "")}
      </td>
      <td>{Number(data?.closePrice)?.toFixed(3)}</td>
      {data?.priceChange > 0 ? (
        <td style={{ color: "green" }}>+{data?.priceChange || 0}</td>
      ) : data?.priceChange == 0 || data?.priceChange == undefined ? (
        <td>{data?.priceChange || 0}</td>
      ) : (
        <td style={{ color: "red" }}>{data?.priceChange || 0}</td>
      )}
    </tr>
  );
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
          onChange={(e) => setInput(e.target.value.toUpperCase())}
        />
      </div>
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <p
            className="nav-link"
            data-toggle="pill"
            role="tab"
            aria-selected="true"
          >
            <i className="icon ion-md-star"></i>
          </p>
        </li>
        {header?.map((data, index) => {
          return (
            <li
              key={index}
              className="nav-item"
              onClick={() => setCurrentSybmol(data)}
            >
              <p
                className="nav-link active"
                data-toggle="pill"
                role="tab"
                aria-selected="true"
              >
                {data}
              </p>
            </li>
          );
        })}
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
                if (data?.symbol?.includes(currentSymbol)) {
                  if (input == "") {
                    return BodyResult(data, index);
                  } else if (data?.symbol.includes(input)) {
                    return BodyResult(data, index);
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Market;
