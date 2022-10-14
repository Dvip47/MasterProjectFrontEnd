import React, { useEffect, useContext, useState } from "react";
import { TransactionContext } from "../../../context/Transaction";
import { AuthContext } from "../../../context/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import InnerHeader from "../../../assets/Header/InnerHeader";
import AdminSideBar from "../../../assets/Sidebar/AdminSidebar";
import InnerFooter from "../../../assets/Footer/InnerFooter";
import AdminCoin from "../../../assets/admin/AdminCoin";
import CardModal from "../../../assets/card/CardModal";
import { dblClick } from "@testing-library/user-event/dist/click";
const Coins = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const subDashboard = [
    {
      title: "Coins",
      state: "coin",
      icon: "mdi mdi-bullseye",
    },
    { title: "List Your Coin", state: "add", icon: "mdi mdi-pentagon" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("List Process in in progress");
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      {location.state == "add" && (
        <CardModal>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">List Your Token</h4>
              </div>
              <div className="card-body">
                <form className="personal_validate" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Symbol</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Symbol"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Open Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Open Price"
                      />
                    </div>

                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Close Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Close Price"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">High Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter High Price"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Low Price</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Low Price"
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Contract Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Contract Address"
                      />
                    </div>
                    <div className="col-6 d-flex  align-center justify-center">
                      <div
                        className=" col-3"
                        onClick={() => navigate("/coin", { state: "bank" })}
                      >
                        <button className="btn btn-success px-4">Back</button>
                      </div>

                      <div className="col-3">
                        <button className="btn btn-success px-4" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardModal>
      )}
      <InnerHeader />
      <AdminSideBar />
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
                            navigate("/coin", { state: data.state })
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
            <AdminCoin />
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};
export default Coins;
