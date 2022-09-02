import React from "react";

const MarketHistory = () => {
  return (
    <div className="market-history">
      <ul className="nav nav-pills" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="pill"
            href="#recent-trades"
            role="tab"
            aria-selected="true"
          >
            Recent Trades
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="pill"
            href="#market-depth"
            role="tab"
            aria-selected="false"
          >
            Market Depth
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade" id="recent-trades" role="tabpanel">
          <table className="table">
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
        <div
          className="tab-pane fade show active"
          id="market-depth"
          role="tabpanel"
        >
          <div className="depth-chart-container">
            <div className="depth-chart-inner">
              <div id="lightDepthChart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketHistory;
