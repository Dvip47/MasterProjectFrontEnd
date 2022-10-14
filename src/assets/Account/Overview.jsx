import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { TransactionContext } from "../../context/Transaction";

const Overview = () => {
  const { userData, callProfile } = useContext(AuthContext);
  const { callDeposite, deposites } = useContext(TransactionContext);
  useEffect(() => {
    callProfile();
  }, []);
  useEffect(() => {
    callDeposite(userData);
  }, [userData]);
  const navigate = useNavigate();
  return (
    <>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card profile_card">
          <div className="card-body">
            <div className="media">
              <img
                className="mr-3 rounded-circle mr-0 mr-sm-3"
                src={userData?.profileImg}
                width="60"
                height="60"
                alt=""
              />
              <div className="media-body">
                <span>Hello</span>
                <h4 className="mb-2">{userData?.name}</h4>
                <p className="mb-1">
                  <span>
                    <i className="fa fa-phone mr-2 text-primary"></i>
                  </span>
                  +{userData?.code} {userData?.mobile}
                </p>
                <p className="mb-1">
                  <span>
                    <i className="fa fa-envelope mr-2 text-primary"></i>
                  </span>
                  {userData?.email}
                </p>
              </div>
            </div>

            <ul className="card-profile__info">
              <li>
                <h5 className="mr-4">Website</h5>
                <span className="text-muted">TravelRx.com</span>
              </li>
              <li className="mb-1">
                <h5 className="mr-4">Total Log</h5>
                <span>103 Time (Today 5 Times)</span>
              </li>
              <li>
                <h5 className="text-danger mr-4">Last Log</h5>
                <span className="text-danger">
                  3 February,
                  <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>
                  , 10:00 PM
                </span>
              </li>
            </ul>
            <div className="social-icons">
              <a className="facebook text-center" href="#">
                <span>
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
              <a className="twitter text-center" href="#">
                <span>
                  <i className="fa fa-twitter"></i>
                </span>
              </a>
              <a className="youtube text-center" href="#">
                <span>
                  <i className="fa fa-youtube"></i>
                </span>
              </a>
              <a className="googlePlus text-center" href="#">
                <span>
                  <i className="fa fa-google"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="card acc_balance">
          <div className="card-header">
            <h4 className="card-title">Wallet</h4>
          </div>
          <div className="card-body">
            <span>Available Balance</span>
            <h3>{userData?.balance} INR</h3>

            <div className="d-flex justify-content-between my-3">
              <div>
                <p className="mb-1">Total Equity</p>
                <h4>78950.35 USD</h4>
              </div>
              <div>
                <p className="mb-1">Available Margin</p>
                <h4>56845.25 USD</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between my-3">
              <div>
                <p className="mb-1">Buy this month</p>
                <h4>3.0215485 BTC</h4>
              </div>
              <div>
                <p className="mb-1">Sell this month</p>
                <h4>3.0215485 BTC</h4>
              </div>
            </div>

            <div className="btn-group mb-3">
              <button
                className="btn btn-success"
                onClick={() => navigate("/exchange")}
              >
                Buy
              </button>
              <button
                className="btn btn-danger"
                onClick={() => navigate("/exchange")}
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Transactions History</h4>
          </div>
          <div className="card-body">
            <div className="transaction-table">
              <div className="table-responsive">
                <table className="table table-striped mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Old Balance</th>
                      <th>New Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deposites?.slice(0, 5)?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>#{data?._id?.slice(8, 16)}</td>
                          <td>
                            {new Date(data?.createdAt).toLocaleDateString()}
                          </td>
                          <td>{data?.mode?.toUpperCase()}</td>
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
                          <td>{data?.oldBalance}</td>
                          <td>{data?.newBalance}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
