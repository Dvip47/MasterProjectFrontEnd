import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../api/api";
import {
  ADMINAMOUNTTRANSFFER,
  config,
  GETWALLET,
  UPDATEUSERSTATUS,
} from "../../constants/constants";
import { AdminContext } from "../../context/AdminC";
import { AuthContext } from "../../context/Auth";
import CardModal from "../card/CardModal";
const UserDetail = () => {
  const { AllUserData, callAllUser } = useContext(AdminContext);
  const { userData, callProfile } = useContext(AuthContext);
  useEffect(() => {
    callAllUser();
  }, []);
  const navigate = useNavigate();
  const user = [
    "Email",
    "Name",
    "Phone",
    "Date",
    "Balance",
    "Active",
    "Deposite",
    "Withdrawal",
    "Wallet",
    "Action",
  ];
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  const [inputAmount, setInputAmount] = useState({
    amount: "",
    utr: "",
    action: "debit",
    description: "",
    currency: "INR",
    actionTaken: userData?.email,
  });
  const handleClickuser = async (data, type) => {
    if (type == "wallet") {
      const res = await postFetch(GETWALLET, { email: data.email });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res.success) {
        setRecieptImg({
          status: true,
          data: res?.message,
          type: "wallet",
        });
      } else {
        toast.error(res.message, config);
      }
    } else {
      const res = await postFetch();
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      setRecieptImg({
        status: true,
        data: "",
        type: "action",
      });
    }
  };
  const [currentUser, setCurrentUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputAmount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleUserChange = async (name, value, email) => {
    const res = await postFetch(UPDATEUSERSTATUS, { [name]: value, email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      callAllUser();
    } else {
      toast.error(res.message, config);
    }
  };
  const amountAction = async (e) => {
    e.preventDefault();
    const res = await postFetch(ADMINAMOUNTTRANSFFER, {
      ...inputAmount,
      email: currentUser.email,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      setRecieptImg({
        status: false,
      });
    } else {
      toast.error(res.message, config);
    }
  };
  return (
    <>
      {recieptImg.status && (
        <>
          {recieptImg.type == "wallet" ? (
            <CardModal closeModal={setRecieptImg}>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Wallet</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Balance</th>
                            <th>Frozen</th>
                            <th>Total</th>
                            <th>Active</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recieptImg?.data?.map((data, index) => {
                            return (
                              <tr
                                key={index}
                                onClick={() => setCurrentUser(data)}
                              >
                                <td>#{data?._id?.slice(8, 16)}</td>
                                <td>{data?.balance}</td>
                                <td>{data?.freezeAmount}</td>
                                <td>{data?.total}</td>
                                <td>
                                  {data?.active ? (
                                    <i className="la la-check text-success"></i>
                                  ) : (
                                    <i className="la la-close text-danger"></i>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </CardModal>
          ) : (
            <CardModal closeModal={setRecieptImg}>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Send Money</h4>
                  </div>
                  <div className="card-body">
                    <form
                      method="post"
                      name="myform"
                      className="personal_validate"
                      onSubmit={amountAction}
                    >
                      <div className="form-row">
                        <div className="form-group col-xl-6 col-md-6">
                          <label className="mr-sm-2">Amount</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={inputAmount?.name}
                            placeholder="Enter Amount"
                            name="amount"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-xl-6 col-md-6">
                          <label className="mr-sm-2">UTR</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter UTR"
                            name="utr"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group col-xl-6 col-md-6">
                          <label className="mr-sm-2">Action</label>
                          <select
                            className="form-control"
                            name="action"
                            onChange={handleChange}
                          >
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                          </select>
                        </div>
                        <div className="form-group col-xl-6 col-md-6">
                          <label className="mr-sm-2">Remark</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Remark"
                            name="description"
                            onChange={handleChange}
                          />
                        </div>

                        <div
                          className="form-group col-2"
                          onClick={() => setRecieptImg({ status: false })}
                        >
                          <button className="btn btn-success px-4">Back</button>
                        </div>
                        <div className="form-group col-1">
                          <button className="btn btn-success px-4">Send</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </CardModal>
          )}
        </>
      )}
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Transactions</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {user.map((data, index) => (
                      <th key={index}>{data}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AllUserData?.map((data, index) => {
                    return (
                      <tr key={index} onClick={() => setCurrentUser(data)}>
                        <td>#{data?._id?.slice(8, 16)}</td>
                        <td>{data?.name}</td>
                        <td>{data?.mobile}</td>
                        <td>
                          {new Date(data?.updatedAt)?.toLocaleDateString()}
                        </td>
                        <td>{data?.balance}</td>
                        <td>
                          <label className="toggle">
                            <input
                              className="toggle-checkbox"
                              type="checkbox"
                              checked={data?.active}
                              onChange={() =>
                                handleUserChange(
                                  "active",
                                  !data?.active,
                                  data?.email
                                )
                              }
                              name="active"
                            />
                            <span className="toggle-switch"></span>
                          </label>
                        </td>
                        <td>
                          <label className="toggle">
                            <input
                              className="toggle-checkbox"
                              type="checkbox"
                              checked={data.canDeposite}
                              onChange={() =>
                                handleUserChange(
                                  "canDeposite",
                                  !data?.canDeposite,
                                  data?.email
                                )
                              }
                              name="canDeposite"
                            />
                            <span className="toggle-switch"></span>
                          </label>
                        </td>
                        <td>
                          <label className="toggle">
                            <input
                              className="toggle-checkbox"
                              type="checkbox"
                              checked={data.canWithdraw}
                              onChange={() =>
                                handleUserChange(
                                  "canWithdraw",
                                  !data?.canWithdraw,
                                  data?.email
                                )
                              }
                              name="canWithdraw"
                            />
                            <span className="toggle-switch"></span>
                          </label>
                        </td>
                        <td onClick={() => handleClickuser(data, "wallet")}>
                          <i className="fa fa-money"></i>
                        </td>
                        <td onClick={() => handleClickuser(data, "action")}>
                          <i className="fa fa-money"></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
