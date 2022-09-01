import React from "react";

const Balance = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Balances</h5>
        <ul>
          <li className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="icon ion-md-cash"></i>
              <h2>Total Equity</h2>
            </div>
            <div>
              <h3>5.5894 BTC</h3>
            </div>
          </li>
          <li className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="icon ion-md-checkmark"></i>
              <h2>Available Margin</h2>
            </div>
            <div>
              <h3>2.480 BTC</h3>
            </div>
          </li>
        </ul>
        <button className="btn green">Deposit</button>
        <button className="btn red">Withdraw</button>
      </div>
    </div>
  );
};

export default Balance;
