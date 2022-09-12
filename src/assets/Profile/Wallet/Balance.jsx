import React from "react";
import { useContext } from "react";
import { WallteContext } from "../../../context/Wallet";

const Balance = () => {
  const { deposite } = useContext(WallteContext);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Balances</h5>
        <ul>
          <li className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="icon ion-md-cash"></i>
              <h2>Total Amount</h2>
            </div>
            <div>
              <h3>
                {deposite.amt1} {deposite?.symbol}
              </h3>
            </div>
          </li>
        </ul>
        <button className="btn green">Deposite</button>
        <button className="btn red">Withdraw</button>
      </div>
    </div>
  );
};

export default Balance;
