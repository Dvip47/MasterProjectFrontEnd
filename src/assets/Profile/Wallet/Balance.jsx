import React, { useState, useContext } from "react";
import { WallteContext } from "../../../context/Wallet";

const Balance = () => {
  const {
    depositePage,
    adminbankList,
    setverifyWallet,
    setVerifyDepositeReciept,
  } = useContext(WallteContext);
  const [showBankDetails, setShowBankDetails] = useState({
    status: false,
    type: "",
  });
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
                {depositePage.amt1} {depositePage?.symbol}
              </h3>
            </div>
          </li>
        </ul>
        <button
          className="btn green"
          onClick={() => {
            setShowBankDetails((prev) => {
              return { ...prev, status: !prev.status };
            });

            setVerifyDepositeReciept((prev) => {
              return { ...prev, status: !prev.status };
            });
          }}
        >
          Deposite
        </button>
        <button className="btn red">Withdraw</button>
      </div>
      {showBankDetails.status && (
        <>
          <h4 className="fontW-700 mt-2">Bank Details</h4>
          <div className="">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>A/C Number</th>
                  <th>IFSC Code</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {adminbankList?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.bankName}</td>
                      <td>{data.accountNumber}</td>
                      <td>{data.ifscCode}</td>
                      <td
                        onClick={() => {
                          setverifyWallet(true);
                          setVerifyDepositeReciept((prev) => {
                            return { ...prev, bankName: data.bankName };
                          });
                          setShowBankDetails((prev) => {
                            return { ...prev, status: false };
                          });
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        Submit Reciept
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};
export default Balance;
