import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { WallteContext } from "../../context/Wallet";
import CardModal from "../card/CardModal";
const Table = ({ header, body }) => {
  const { callWalletTransactionReport } = useContext(WallteContext);
  const { userData } = useContext(AuthContext);
  const handlePagination = (type) => {
    if (type == "next") {
      if (pagination.end < body.length) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start + pagination.limit,
            end: pagination.end + pagination.limit,
          };
        });
      }
    } else {
      if (pagination.start >= 10) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start - pagination.limit,
            end: pagination.end - pagination.limit,
          };
        });
      }
    }
  };
  const [pagination, setPagination] = useState({
    start: 0,
    end: 10,
    limit: 10,
  });
  const [modal, setModal] = useState({
    status: false,
  });
  return (
    <div id="table">
      {modal.status && (
        <CardModal closeModal={setModal}>
          <div className="settings-profile">
            <h1 className="text-center">Withdraw</h1>
            <form>
              <div className="form-row mt-4">
                <div className="col-md-6">
                  <label htmlFor="formFirst">Destination</label>
                  <input
                    id="formFirst"
                    type="text"
                    className="form-control"
                    placeholder="Enter Destination"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailAddress">Network</label>
                  <input
                    id="emailAddress"
                    type="text"
                    className="form-control"
                    placeholder="Enter Network"
                    disabled
                    value="BEP20"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phoneNumber">Amount</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn-primary">Withdraw</button>
                </div>
              </div>
            </form>
          </div>
        </CardModal>
      )}
      <table className="table">
        <thead>
          <tr>
            {header?.map((data, index) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body
            ?.sort((a, b) => b.balance - a.balance)
            ?.slice(pagination.start, pagination.end)
            ?.map((data, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() =>
                      callWalletTransactionReport(data.symbol, userData.email)
                    }
                  >
                    {data.symbol}
                  </td>
                  <td>{data.balance}</td>
                  <td>{data.total}</td>
                  <td onClick={() => setModal({ status: true, data: data })}>
                    <i className="fa fa-wallet"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handlePagination("prev")}
        >
          Prev
        </button>
        <button
          className="btn btn-primary mx-3"
          onClick={() => handlePagination("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Table;
