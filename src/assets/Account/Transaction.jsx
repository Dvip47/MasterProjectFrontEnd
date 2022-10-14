import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { TransactionContext } from "../../context/Transaction";

const Transaction = () => {
  const { callDeposite, deposites } = useContext(TransactionContext);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    callDeposite(userData);
  }, [userData]);
  const depositeHeader = [
    "Wallet ID",
    "UTR",
    "Amount",
    "Status",
    "Description",
    "Date",
  ];
  const WithdrawHeader = [
    "ID",
    "Symbol",
    "Amount",
    "Status",
    "UTR/ID",
    "Charge",
    "Final Amount",
    "Created At",
  ];
  const OrderHeader = [
    "ID",
    "Symbol",
    "Price",
    "Quantity",
    "Total Quantity",
    "Status",
    "Created",
    "Action",
  ];
  const [curentPage, setCurrentPage] = useState("deposite");
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Deposite History</h4>
          </div>
          <div className="card-body">
            <div className="row justify-content-between">
              <div className="col-sm-4 col-sm-4">
                <label for="inputEmail3" className="col-form-label">
                  Type
                  <br />
                </label>
                <div className="input-group mb-3">
                  <select
                    className="form-control"
                    name="mode"
                    onChange={(e) => setCurrentPage(e.target.value)}
                  >
                    <option value="deposite">Deposite</option>
                    <option value="withdraw">Withdraw</option>
                    <option value="order">Order</option>
                  </select>
                </div>
              </div>
              {curentPage == "deposite" || curentPage == "withdraw" ? (
                <>
                  <div className="col-sm-4 col-sm-4">
                    <label for="inputEmail3" className="col-form-label">
                      Currency
                      <br />
                    </label>
                    <div className="input-group mb-3">
                      <select className="form-control" name="mode">
                        <option value="INR">INR</option>
                        <option value="CRYPTO">Crypto</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4 col-sm-4">
                    <label for="inputEmail3" className="col-form-label">
                      Status
                      <br />
                    </label>
                    <div className="input-group mb-3">
                      <select className="form-control" name="mode">
                        <option value="">All</option>
                        <option value="success">Success</option>
                        <option value="pending">Pending</option>
                        <option value="reject">Reject</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-sm-4 col-sm-4">
                    <label for="inputEmail3" className="col-form-label">
                      Mode
                      <br />
                    </label>
                    <div className="input-group mb-3">
                      <select className="form-control" name="mode">
                        <option value="">All</option>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4 col-sm-4">
                    <label for="inputEmail3" className="col-form-label">
                      Status
                      <br />
                    </label>
                    <div className="input-group mb-3">
                      <select className="form-control" name="mode">
                        <option value="">All</option>
                        <option value="success">Success</option>
                        <option value="pending">Pending</option>
                        <option value="reject">Reject</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Transactions</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  {curentPage == "deposite" && (
                    <tr>
                      {depositeHeader.map((data, index) => (
                        <th key={index}>{data}</th>
                      ))}
                    </tr>
                  )}
                  {curentPage == "withdraw" && (
                    <tr>
                      {WithdrawHeader.map((data, index) => (
                        <th key={index}>{data}</th>
                      ))}
                    </tr>
                  )}
                  {curentPage == "order" && (
                    <tr>
                      {OrderHeader.map((data, index) => (
                        <th key={index}>{data}</th>
                      ))}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {curentPage == "deposite" && (
                    <>
                      {deposites?.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>#{data?._id?.slice(8, 16)}</td>
                            <td>{data?.utr}</td>
                            <td>{data?.amount}</td>
                            <td>
                              {data?.Status == "approve" ? (
                                <i className="la la-check text-success"></i>
                              ) : data?.Status == "reject" ? (
                                <i className="la la-close text-danger"></i>
                              ) : (
                                <i className="la la-clock text-warning"></i>
                              )}
                            </td>
                            <td>{data?.description}</td>
                            <td>
                              {new Date(data?.updatedAt)?.toLocaleDateString()}
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
