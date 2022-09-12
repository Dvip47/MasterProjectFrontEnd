import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { WallteContext } from "../../../context/Wallet";
import CardModal from "../../card/CardModal";

const Balance = () => {
  const { depositePage } = useContext(WallteContext);
  const [modal, setModal] = useState(false);
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
        <button className="btn green" onClick={() => setModal(true)}>
          Deposite
        </button>
        <button className="btn red">Withdraw</button>
      </div>
      {modal && (
        <div>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setShowBankDetails({ status: true, type: "upi" });
              setModal(false);
            }}
          >
            UPI
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => {
              setShowBankDetails({ status: true, type: "bank" });
              setModal(false);
            }}
          >
            Bank Transffer
          </button>
        </div>
      )}
      {showBankDetails.status && (
        <CardModal closeModal={setShowBankDetails}>
          {showBankDetails.type == "upi" ? (
            <div className="message text-center">
              <div className="message-pop">
                <img src="img/success.png" alt="" className="w-20" />
              </div>
            </div>
          ) : (
            <>
              <h4 className="fontW-700 mt-2">Bank Details</h4>
              <div className="">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th>Bank Name</th>
                      <th>A/C Number</th>
                      <th>IFSC Code</th>
                    </tr>
                    <tr>
                      <td>trhr</td>
                      <td>tht</td>
                      <td>tht</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </CardModal>
      )}
    </div>
  );
};

export default Balance;
