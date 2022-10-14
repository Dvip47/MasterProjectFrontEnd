import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import { CoinContext } from "../../context/CoinsContext";

const InnerHeader = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const { totalUserBalance } = useContext(CoinContext);
  return (
    <div className="header dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
              <a className="navbar-brand" href="dashboard.html">
                <img src="images/logo.png" alt="" />
              </a>
              <div className="header-right d-flex my-2 align-items-center">
                <div className="language">
                  <button className="theme-button" id="themeSelector"></button>
                </div>
                {userData?.email ? (
                  <div className="dashboard_log">
                    <div className="profile_log dropdown">
                      <div className="user" data-toggle="dropdown">
                        <span className="thumb">
                          <i className="mdi mdi-account"></i>
                        </span>
                      </div>

                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="user-email">
                          <div className="user">
                            <span className="thumb">
                              <i className="mdi mdi-account"></i>
                            </span>
                            <div className="user-info">
                              <h6>{userData?.name}</h6>
                              <span>{userData?.email}</span>
                            </div>
                          </div>
                        </div>

                        <div className="user-balance">
                          <div className="available">
                            <p>INR Balance</p>
                            <span>{totalUserBalance} ₹</span>
                          </div>
                          <div className="total">
                            <p>USD Balance</p>
                            <span>{totalUserBalance / 80} $</span>
                          </div>
                        </div>
                        <a
                          onClick={() => navigate("/profile")}
                          className="dropdown-item"
                        >
                          <i className="mdi mdi-account"></i> Account
                        </a>
                        <a
                          onClick={() => navigate("/transaction")}
                          className="dropdown-item"
                        >
                          <i className="mdi mdi-history"></i> History
                        </a>

                        <a
                          onClick={() =>
                            navigate("/credential", { state: "login" })
                          }
                          className="dropdown-item logout"
                        >
                          <i className="mdi mdi-logout"></i> Logout
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    className="btn"
                    onClick={() =>
                      navigate("/credential", {
                        state: "login",
                      })
                    }
                  >
                    Login
                  </button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerHeader;
