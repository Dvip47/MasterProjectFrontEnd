import React from "react";
import { useContext } from "react";
import { TransactionContext } from "../../../context/Transaction";
import "./css.css";
const Filter = ({ setPage, page }) => {
  const { setType, setStatus } = useContext(TransactionContext);
  return (
    <div className="box1">
      {page == "deposite" ? (
        <>
          <div className="box">
            <select
              value={page}
              onChange={(e) => setPage(() => e.target.value)}
            >
              <option value="withdraw">Withdraw</option>
              <option value="deposite">Deposite</option>
              <option value="order">Bank Statement/Order</option>
            </select>
          </div>
          <div className="box">
            <select onChange={(e) => setType(e.target.value)}>
              <option value="money">Money</option>
              <option value="crypto">Crypto</option>
            </select>
          </div>
          <div className="box">
            <select onChange={(e) => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="success">Success</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </>
      ) : (
        <div className="box">
          <select>
            <option>Placed</option>
            <option>Complete</option>
            <option>Placed</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Filter;
