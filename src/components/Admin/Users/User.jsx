import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserDetail from "../../../assets/admin/UserDetail";
import UserKyc from "../../../assets/admin/UserKyc";
import InnerFooter from "../../../assets/Footer/InnerFooter";
import InnerHeader from "../../../assets/Header/InnerHeader";
import AdminSideBar from "../../../assets/Sidebar/AdminSidebar";
import { AuthContext } from "../../../context/Auth";

const User = () => {
  const { userData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const subDashboard = [
    {
      title: "User",
      state: "user",
      icon: "mdi mdi-bullseye",
    },
    { title: "KYC", state: "kyc", icon: "mdi mdi-pentagon" },
  ];
  return (
    <>
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
                            navigate("/user", { state: data.state })
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
            {location.state == "user" && <UserDetail />}
            {location.state == "kyc" && <UserKyc />}
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default User;
