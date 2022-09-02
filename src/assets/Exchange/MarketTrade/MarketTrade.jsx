import React from "react";

const MarketTrade = () => {
  return (
    <div className="market-trade">
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#pills-trade-limit"
            role="tab"
            aria-selected="true"
          >
            Limit
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#pills-market"
            role="tab"
            aria-selected="false"
          >
            Market
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#pills-stop-limit"
            role="tab"
            aria-selected="false"
          >
            Stop Limit
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#pills-stop-market"
            role="tab"
            aria-selected="false"
          >
            Stop Market
          </a>
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
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
              </p>
              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
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
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
              </p>
              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
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
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
              </p>
              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
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
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
              </p>
              <button className="btn buy">Buy</button>
            </div>
            <div className="market-trade-sell">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
                <div className="input-group-append">
                  <span className="input-group-text">BTC</span>
                </div>
              </div>
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                />
                <div className="input-group-append">
                  <span className="input-group-text">ETH</span>
                </div>
              </div>
              <ul className="market-trade-list">
                <li>
                  <a href="#!">25%</a>
                </li>
                <li>
                  <a href="#!">50%</a>
                </li>
                <li>
                  <a href="#!">75%</a>
                </li>
                <li>
                  <a href="#!">100%</a>
                </li>
              </ul>
              <p>
                Available: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Volume: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Margin: <span>0 BTC = 0 USD</span>
              </p>
              <p>
                Fee: <span>0 BTC = 0 USD</span>
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
