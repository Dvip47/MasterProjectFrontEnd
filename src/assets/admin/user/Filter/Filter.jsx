import React from "react";
import "./css.css";
const Filter = ({ setPage, page }) => {
  return (
    <>
      <div className="box1">
        <div className="box">
          <select value={page} onChange={(e) => setPage(() => e.target.value)}>
            <option value="deposite">Deposites</option>
            <option value="user">Users</option>
            <option value="kyc">KYC</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
