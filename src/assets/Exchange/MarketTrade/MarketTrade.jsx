import React, { useContext, useEffect, useState } from "react";
import { MarketContext } from "../../../context/MarketContext";

const MarketTrade = () => {
  const { currentCurrency, callOrders } = useContext(MarketContext);
  useEffect(() => {
    console.log(currentCurrency);
    callOrders();
  }, [currentCurrency]);
  const [input, setInput] = useState({
    amount: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="market-trade">
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <p
            className="nav-link active"
            data-toggle="pill"
            role="tab"
            aria-selected="true"
          >
            Limit
          </p>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-trade-limit"
          role="tabpanel"
        >
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-market" role="tabpanel">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-stop-limit" role="tabpanel">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-stop-market" role="tabpanel">
          <div className="d-flex justify-content-between">
            <div className="market-trade-buy">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                  value={currentCurrency?.closePrice}
                />
                <div className="input-group-append">
                  <span className="input-group-text">INR</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  readOnly
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {currentCurrency.symbol?.replace("INR", "")}
                  </span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <p>25%</p>
                </li>
                <li>
                  <p>50%</p>
                </li>
                <li>
                  <p>75%</p>
                </li>
                <li>
                  <p>100%</p>
                </li>
              </ul>
              <p>
                Available: <span>0 INR</span>
              </p>
              <p>
                Est. Final Amount:
                <span>{input.amount * currentCurrency.closePrice} INR</span>
              </p>

              <button className="btn sell">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrade;
