import React from "react";

const MarketHistory = () => {
  return (
    <div class="market-history">
      <ul class="nav nav-pills" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="pill"
            href="#recent-trades"
            role="tab"
            aria-selected="true"
          >
            Recent Trades
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active"
            data-toggle="pill"
            href="#market-depth"
            role="tab"
            aria-selected="false"
          >
            Market Depth
          </a>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade" id="recent-trades" role="tabpanel">
          <table class="table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Price(BTC)</th>
                <th>Amount(ETH)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="green">0.020191</td>
                <td>0.2155045</td>
              </tr>
              <tr>
                <td>13:03:53</td>
                <td class="red">0.020191</td>
                <td>0.2155045</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          class="tab-pane fade show active"
          id="market-depth"
          role="tabpanel"
        >
          <div class="depth-chart-container">
            <div class="depth-chart-inner">
              <div id="lightDepthChart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketHistory;
