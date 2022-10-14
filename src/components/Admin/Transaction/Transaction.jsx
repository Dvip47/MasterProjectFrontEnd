import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AllDeposite from "../../../assets/admin/AllDeposite";
import AllLedger from "../../../assets/admin/AllLedger";
import CardModal from "../../../assets/card/CardModal";
import InnerFooter from "../../../assets/Footer/InnerFooter";
import InnerHeader from "../../../assets/Header/InnerHeader";
import AdminSideBar from "../../../assets/Sidebar/AdminSidebar";
import { AuthContext } from "../../../context/Auth";
import { TransactionContext } from "../../../context/Transaction";
const User = () => {
  const { userData } = useContext(AuthContext);
  const { paginationData } = useContext(TransactionContext);
  const subDashboard = [
    { title: "Deposite", state: "deposite", icon: "mdi mdi-pentagon" },
    { title: "Withdraw", state: "withdraw", icon: "mdi mdi-pentagon" },
    { title: "Order", state: "order", icon: "mdi mdi-pentagon" },
    { title: "Ledger", state: "ledger", icon: "mdi mdi-pentagon" },
  ];
  const depositeHeader = [
    "Wallet ID",
    "UTR",
    "Amount",
    "Description",
    "Date",
    "Reciept",
    "Action By",
    "Status",
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
  const LedgerHeader = [
    "ID",
    "Email",
    "Symbol",
    "Amount",
    "Status",
    "Charge",
    "Final Amount",
    "Old Balance",
    "New Balance",
    "UTR",
    "Mode",
    "Type",
    "Date",
  ];
  const [pagination, setpagination] = useState({
    start: 0,
    end: 6,
    limit: 6,
  });
  const handlePagination = (type) => {
    if (type == "next") {
      if (pagination.end < paginationData) {
        setpagination((prev) => {
          return {
            ...prev,
            start: prev.start + prev.limit,
            end: prev.end + prev.limit,
          };
        });
      }
    } else {
      if (pagination.start > 0) {
        setpagination((prev) => {
          return {
            ...prev,
            start: prev.start - prev.limit,
            end: prev.end - prev.limit,
          };
        });
      }
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  return (
    <>
      {recieptImg.status && (
        <CardModal closeModal={setRecieptImg} myStyle={{ width: "50%" }}>
          <div className="card profile_card ">
            <div className="card-body ">
              <img
                src={recieptImg.data}
                alt="info"
                height="200px"
                width="200px"
              />
            </div>
          </div>
        </CardModal>
      )}
      <InnerHeader />
      <AdminSideBar />
      <div style={{ height: "50px" }}></div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card sub-menu">
                <div className="card-body">
                  <ul className="d-flex">
                    {subDashboard.map((data, index) => {
                      return (
                        <li
                          className="nav-item"
                          key={index}
                          onClick={() =>
                            navigate("/transaction", { state: data.state })
                          }
                        >
                          <a className="nav-link">
                            <i class={data.icon}></i>
                            <span>{data.title}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            {/* filter */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row justify-content-between">
                    {location.state == "deposite" ||
                    location.state == "withdraw" ? (
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
                    ) : location.state == "ledger" ? (
                      <>
                        <div className="col-sm-4 col-sm-4">
                          <label for="inputEmail3" className="col-form-label">
                            Mode
                            <br />
                          </label>
                          <div className="input-group mb-3">
                            <select className="form-control" name="mode">
                              <option value="">All</option>
                              <option value="buy">Deposite</option>
                              <option value="sell">Withdraw</option>
                              <option value="sell">Order</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-4 col-sm-4">
                          <label for="inputEmail3" className="col-form-label">
                            Type
                            <br />
                          </label>
                          <div className="input-group mb-3">
                            <select className="form-control" name="mode">
                              <option value="">All</option>
                              <option value="sell">Money</option>
                              <option value="sell">Crypto</option>
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
                  <h4 className="card-title">
                    {location.state?.toUpperCase()} TRANSACTIONS
                  </h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        {location.state == "deposite" && (
                          <tr>
                            {depositeHeader.map((data, index) => (
                              <th key={index}>{data}</th>
                            ))}
                          </tr>
                        )}
                        {location.state == "withdraw" && (
                          <tr>
                            {WithdrawHeader.map((data, index) => (
                              <th key={index}>{data}</th>
                            ))}
                          </tr>
                        )}
                        {location.state == "order" && (
                          <tr>
                            {OrderHeader.map((data, index) => (
                              <th key={index}>{data}</th>
                            ))}
                          </tr>
                        )}
                        {location.state == "ledger" && (
                          <tr>
                            {LedgerHeader.map((data, index) => (
                              <th key={index}>{data}</th>
                            ))}
                          </tr>
                        )}
                      </thead>
                      <tbody>
                        {location.state == "deposite" && (
                          <AllDeposite
                            setRecieptImg={setRecieptImg}
                            userData={userData}
                          />
                        )}
                        {location.state == "ledger" && (
                          <AllLedger
                            setRecieptImg={setRecieptImg}
                            userData={userData}
                          />
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {paginationData?.length > 5 && (
                <div className="col-6 d-flex  align-center justify-center">
                  <div
                    className=" col-3"
                    onClick={() => handlePagination("prev")}
                  >
                    <button
                      className="btn btn-success px-4"
                      disabled={pagination.start == 0}
                    >
                      Prev
                    </button>
                  </div>

                  <div
                    className="col-3"
                    onClick={() => handlePagination("next")}
                  >
                    <button className="btn btn-success px-4" type="submit">
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default User;
