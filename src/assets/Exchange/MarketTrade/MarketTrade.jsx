import React from "react";

const MarketTrade = () => {
  return (
    <div class="market-trade">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="pill"
            href="#pills-trade-limit"
            role="tab"
            aria-selected="true"
          >
            Limit
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="pill"
            href="#pills-market"
            role="tab"
            aria-selected="false"
          >
            Market
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="pill"
            href="#pills-stop-limit"
            role="tab"
            aria-selected="false"
          >
            Stop Limit
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="pill"
            href="#pills-stop-market"
            role="tab"
            aria-selected="false"
          >
            Stop Market
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane fade show active"
          id="pills-trade-limit"
          role="tabpanel"
        >
          <div class="d-flex justify-content-between">
            <div class="market-trade-buy">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn buy">Buy</button>
            </div>
            <div class="market-trade-sell">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-market" role="tabpanel">
          <div class="d-flex justify-content-between">
            <div class="market-trade-buy">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn buy">Buy</button>
            </div>
            <div class="market-trade-sell">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-stop-limit" role="tabpanel">
          <div class="d-flex justify-content-between">
            <div class="market-trade-buy">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn buy">Buy</button>
            </div>
            <div class="market-trade-sell">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn sell">Sell</button>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pills-stop-market" role="tabpanel">
          <div class="d-flex justify-content-between">
            <div class="market-trade-buy">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn buy">Buy</button>
            </div>
            <div class="market-trade-sell">
              <div class="input-group">
                <input type="number" class="form-control" placeholder="Price" />
                <div class="input-group-append">
                  <span class="input-group-text">BTC</span>
                </div>
              </div>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Amount"
                />
                <div class="input-group-append">
                  <span class="input-group-text">ETH</span>
                </div>
              </div>
              <ul class="market-trade-list">
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
              <button class="btn sell">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketTrade;
