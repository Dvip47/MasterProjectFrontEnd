import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBank from "../../../assets/admin/AdminBank";
import UserKyc from "../../../assets/admin/UserKyc";
import CardModal from "../../../assets/card/CardModal";
import InnerFooter from "../../../assets/Footer/InnerFooter";
import InnerHeader from "../../../assets/Header/InnerHeader";
import AdminSideBar from "../../../assets/Sidebar/AdminSidebar";
import { config } from "../../../constants/constants";
import { AuthContext } from "../../../context/Auth";
import { WallteContext } from "../../../context/Wallet";
import { addBank, addBankValidation } from "./Logic";

const Bank = () => {
  const { userData } = useContext(AuthContext);
  const { callAdminBankList } = useContext(WallteContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    bankStatus: true,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const subDashboard = [
    {
      title: "Bank",
      state: "bank",
      icon: "mdi mdi-bullseye",
    },
    { title: "Add Bank", state: "add", icon: "mdi mdi-pentagon" },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let validate = addBankValidation(input);
      if (validate.result) {
        const res = await addBank(input);
        if (res == 401) {
          toast.error("Session Over", config);
          localStorage.removeItem("token");
          navigate("/credential", { state: "login" });
        }
        if (res.success) {
          toast.success(res.message, config);
          navigate("/bank", { state: "bank" });
          setInput({
            bankName: "",
            accountNumber: "",
            ifscCode: "",
            bankStatus: true,
          });
          setTimeout(() => {
            callAdminBankList();
          }, 400);
        } else {
          toast.error(res.message, config);
        }
      } else {
        toast.error(validate.message, config);
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <>
      {location?.state == "add" && (
        <CardModal>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add New Bank</h4>
              </div>
              <div className="card-body">
                <form className="personal_validate" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Bank Name"
                        value={input.bankName}
                        name="bankName"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Account Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Account Number"
                        name="accountNumber"
                        value={input.accountNumber}
                        onChange={handleChange}
                        required
                        maxLength={16}
                      />
                    </div>

                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">IFSC Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter IFSC Code"
                        value={input.ifscCode}
                        name="ifscCode"
                        onChange={handleChange}
                        required
                        maxLength={10}
                      />
                    </div>
                    <div className="col-6 d-flex  align-center justify-center">
                      <div
                        className=" col-3"
                        onClick={() => navigate("/bank", { state: "bank" })}
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
                            navigate("/bank", { state: data.state })
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

            <AdminBank />
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default Bank;
