import React from "react";

const MarketOrder = () => {
  return (
    <div className="col-md-9">
      <div className="market-history market-order">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <p
              className="nav-link active"
              data-toggle="pill"
              role="tab"
              aria-selected="true"
            >
              Open Orders
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link"
              data-toggle="pill"
              role="tab"
              aria-selected="false"
            >
              Closed Orders
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link"
              data-toggle="pill"
              role="tab"
              aria-selected="false"
            >
              Order history
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link"
              data-toggle="pill"
              role="tab"
              aria-selected="false"
            >
              Balance
            </p>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="open-orders"
            role="tabpanel"
          >
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </div>
          <div className="tab-pane fade" id="stop-orders" role="tabpanel">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </div>
          <div className="tab-pane fade" id="order-history" role="tabpanel">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </div>
          <div className="tab-pane fade" id="trade-history" role="tabpanel">
            <ul className="d-flex justify-content-between market-order-item">
              <li>Time</li>
              <li>All pairs</li>
              <li>All Types</li>
              <li>Buy/Sell</li>
              <li>Price</li>
              <li>Amount</li>
              <li>Executed</li>
              <li>Unexecuted</li>
            </ul>
            <span className="no-data">
              <i className="icon ion-md-document"></i>
              No data
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketOrder;
