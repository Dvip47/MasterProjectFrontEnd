import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth";

const Market = () => {
  const { crypto, setChartSymbol } = useContext(AuthContext);
  const header = ["BTC", "ETH", "USDT"];
  const [currentSymbol, setCurrentSybmol] = useState("BTC");
  const [input, setInput] = useState("");
  let BodyResult = (data, index) => (
    <tr key={index} onClick={() => setChartSymbol(data.symbol)}>
      <td>
        <i className="icon ion-md-star"></i>{" "}
        {data.symbol?.replace(currentSymbol, "")}
      </td>
      <td>{Number(data?.lastPrice)?.toFixed(5)}</td>
      {Number(data?.priceChangePercent) > 0 ? (
        <td style={{ color: "green" }}>
          {Number(data?.lastPrice)?.toFixed(3)}
        </td>
      ) : Number(data?.priceChangePercent) == 0 ? (
        <td>{Number(data?.lastPrice)?.toFixed(5)}</td>
      ) : (
        <td style={{ color: "red" }}>{Number(data?.lastPrice)?.toFixed(5)}</td>
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
        {header?.map((data, index) => {
          return (
            <li
              key={index}
              className="nav-item"
              onClick={() => setCurrentSybmol(data)}
            >
              <a
                className="nav-link active"
                data-toggle="pill"
                href="#"
                role="tab"
                aria-selected="true"
              >
                {data}
              </a>
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
                  } else if (
                    data?.symbol?.replace(currentSymbol, "") == input
                  ) {
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
