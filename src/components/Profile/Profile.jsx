import React from "react";
import { useContext } from "react";
import InnerHeader from "../../assets/Header/InnerHeader";
import InnerSideBar from "../../assets/Sidebar/InnerSideBar";
import { AuthContext } from "../../context/Auth";
import InnerFooter from "../../assets/Footer/InnerFooter";
import UserProfile from "../../assets/UserProfile/UserProfile";
import { useLocation, useNavigate } from "react-router-dom";
import UserBank from "../../assets/UserProfile/UserBank";
import UserKyc from "../../assets/UserProfile/UserKyc";
import UserSecurity from "../../assets/UserProfile/UserSecurity";

const Profile = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const subDashboard = [
    {
      title: "Edit Profile",
      state: "profile",
      icon: "mdi mdi-account-settings-variant",
    },
    { title: "Bank", state: "bank", icon: "mdi mdi-bank" },
    { title: "KYC", state: "kyc", icon: "mdi mdi-lock" },
    { title: "Security", state: "security", icon: "mdi mdi-lock" },
  ];
  return (
    <div id="main-wrapper" className="show">
      {/* header */}
      <InnerHeader />
      <InnerSideBar />
      {/* welcome */}
      <div className="page-title dashboard">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="page-title-content">
                <p>
                  Welcome Back,
                  <span> {userData?.name}</span>
                </p>
              </div>
            </div>
            <div className="col-6">
              <ul className="text-right breadcrumbs list-unstyle">
                <li>
                  <a>Settings </a>
                </li>
                <li className="active">
                  <a>Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* sub dashboard */}
      <div className="content-body">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="card sub-menu">
                <div className="card-body">
                  <ul className="d-flex">
                    {subDashboard.map((data, index) => {
                      return (
                        <li className="nav-item" key={index}>
                          <a
                            onClick={() =>
                              navigate("/profile", { state: data.state })
                            }
                            className="nav-link"
                          >
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
            {location.state == "profile" && <UserProfile />}
            {location.state == "bank" && <UserBank />}
            {location.state == "kyc" && <UserKyc />}
            {location.state == "security" && <UserSecurity />}
          </div>
        </div>
      </div>
      <InnerFooter />
    </div>
  );
};

export default Profile;
