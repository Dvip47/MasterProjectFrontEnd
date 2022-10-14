import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Deposite from "../../assets/Account/Deposite";
import Overview from "../../assets/Account/Overview";
import Transaction from "../../assets/Account/Transaction";
import Withdraw from "../../assets/Account/Withdraw";
import InnerFooter from "../../assets/Footer/InnerFooter";
import InnerHeader from "../../assets/Header/InnerHeader";
import InnerSideBar from "../../assets/Sidebar/InnerSideBar";
import { AuthContext } from "../../context/Auth";

const Account = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const subDashboard = [
    {
      title: "Overview",
      state: "overview",
      icon: "mdi mdi-bullseye",
    },
    { title: "Deposite", state: "deposite", icon: "mdi mdi-heart" },
    { title: "Withdraw", state: "withdraw", icon: "mdi mdi-pentagon" },
    { title: "Transaction", state: "transaction", icon: "mdi mdi-database" },
  ];
  return (
    <>
      <InnerHeader />
      <InnerSideBar />
      <div style={{ height: "50px" }}></div>
      <div className="page-title dashboard">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="page-title-content">
                <p>
                  Welcome Back,
                  <span>{userData?.name}</span>
                </p>
              </div>
            </div>
            <div className="col-6">
              <ul className="text-right breadcrumbs list-unstyle">
                <li>
                  <a href="settings.html">Settings </a>
                </li>
                <li className="active">
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                            navigate("/account", { state: data.state })
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
            {location.state == "overview" && <Overview />}
            {location.state == "deposite" && <Deposite />}
            {location.state == "withdraw" && <Withdraw />}
            {location.state == "transaction" && <Transaction />}
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default Account;
