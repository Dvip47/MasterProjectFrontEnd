import React from "react";
import "./css.css";
const Filter = ({ setPage, page }) => {
  const defaultDisabled = page == "all";
  return (
    <>
      <div className="box1">
        <div className="box">
          <select value={page} onChange={(e) => setPage(() => e.target.value)}>
            <option value="all">All</option>
            <option value="withdraw">Withdraw</option>
            <option value="deposite">Deposite</option>
            <option value="order">Bank Statement/Order</option>
          </select>
        </div>
        <div className="box">
          <select disabled={defaultDisabled}>
            <option value="money">Money</option>
            <option value="crypto">Crypto</option>
          </select>
        </div>
        <div className="box">
          <select>
            <option>Success</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
        <div className="box">
          <select>
            <option>Placed</option>
            <option>Complete</option>
            <option>Placed</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
