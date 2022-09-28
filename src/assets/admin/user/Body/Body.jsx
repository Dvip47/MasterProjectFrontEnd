import React, { useState } from "react";
import Card from "../../Card/Card";
import { updateDeposite } from "../../../../components/Admin/Logic";
import { toast } from "react-toastify";
import {
  ADMINAMOUNTTRANSFFER,
  config,
  GETWALLET,
  UPDATEKYC,
  UPDATEUSERSTATUS,
} from "../../../../constants/constants";
import { postFetch } from "../../../../api/api";
import { useContext } from "react";
import { AdminContext } from "../../../../context/AdminC";
import { useNavigate } from "react-router-dom";
const Body = ({ body = [], type, action, actionValue, call }) => {
  const navigate = useNavigate();
  const { callDepositeAmountData, callAllUser } = useContext(AdminContext);
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  // deposite
  const handleChangeAndSubmit = async (e) => {
    action(e.target.value);
    const res = await updateDeposite({
      utr: currentDespositeDataForUpdate.utr,
      status: e.target.value,
      email: currentDespositeDataForUpdate.email,
      balance: currentDespositeDataForUpdate.deposite,
      currency: currentDespositeDataForUpdate.currency,
      type: currentDespositeDataForUpdate.type,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      setTimeout(() => {
        callDepositeAmountData();
      }, 1000);
    } else {
      toast.error(res.message, config);
    }
  };
  const [currentDespositeDataForUpdate, setCurrentDespositeDataForUpdate] =
    useState();
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
  // deposite over
  // user
  const [inputAmount, setInputAmount] = useState({
    amount: "",
    utr: "",
    action: "debit",
    description: "",
  });
  const [currentUserFormAmount, setCurrentUserForAmount] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputAmount((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleUserChange = async (e, dataa) => {
    const { name, value } = e.target;
    let data = {
      [name]: value == "on" ? true : false,
      email: dataa.email,
    };
    const res = await postFetch(UPDATEUSERSTATUS, data);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      call();
    } else {
      toast.error(res.message, config);
    }
  };
  const amountAction = async (e) => {
    e.preventDefault();
    const res = await postFetch(ADMINAMOUNTTRANSFFER, {
      ...inputAmount,
      email: currentUserFormAmount.email,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      setRecieptImg((prev) => {
        return {
          ...prev,
          status: false,
        };
      });
    } else {
      toast.error(res.message, config);
    }
  };
  // user over
  // kyc
  const handleKyc = async (type, data) => {
    const res = await postFetch(UPDATEKYC, { kyc: type, email: data.email });
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
  // kyc over
  return (
    <tbody>
      {type == "deposite" && (
        <>
          {recieptImg.status && (
            <Card closeModal={setRecieptImg}>
              <div>
                <img
                  src={recieptImg.data}
                  alt="pic"
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </div>
            </Card>
          )}
          {body?.map((data, index) => {
            return (
              <tr
                key={index}
                onClick={() => setCurrentDespositeDataForUpdate(data)}
              >
                <td>{data?._id}</td>
                <td>{data?.bankName}</td>
                <td>{data?.utr}</td>
                <td>{data?.email}</td>
                <td>{data?.deposite}</td>
                <td>{(data?.status).toUpperCase()}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td
                  onClick={() =>
                    setRecieptImg({ status: true, data: data.reciept })
                  }
                >
                  <i className="fa fa-eye"></i>
                </td>
                {data?.status == "pending" ? (
                  <td>
                    <select
                      onChange={handleChangeAndSubmit}
                      className="form-group"
                      style={{
                        backgroundColor: "#24a0ed",
                        color: "white",
                        padding: "3px 11px",
                        fontSize: "15px",
                        marginLeft: "6px",
                        width: "110px",
                      }}
                    >
                      <option value="select">Select</option>
                      <option value="approve">Approve</option>
                      <option value="reject">Reject</option>
                    </select>
                  </td>
                ) : data?.status == "approve" ? (
                  <td>Approved</td>
                ) : (
                  <td>Rejected</td>
                )}
              </tr>
            );
          })}
        </>
      )}
      {type == "user" && (
        <>
          {recieptImg.status &&
            (recieptImg.type == "wallet" ? (
              <Card closeModal={setRecieptImg}>
                <div>
                  <>
                    <h4 className="fontW-700 mt-2">Bank Details</h4>
                    <div className="">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Currency</th>
                            <th>Balance</th>
                            <th>Freeze Balance</th>
                            <th>Total</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recieptImg.type == "wallet" && (
                            <>
                              {recieptImg?.data?.wallet?.map(
                                (mapData, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>
                                        {(mapData?.currency).toUpperCase()}
                                      </td>
                                      <td>{mapData?.balance}</td>
                                      <td>{mapData?.freezeBalance}</td>
                                      <td>{mapData?.total}</td>
                                      <td>
                                        {new Date(
                                          mapData?.date
                                        ).toLocaleDateString()}
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </>
                </div>
              </Card>
            ) : (
              <Card closeModal={setRecieptImg}>
                <div>
                  <h4 className="fontW-700 mt-2">Debit / Credit</h4>
                  <form onSubmit={amountAction}>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="currentPass">Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter Amount"
                          name="amount"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="newPass">UTR</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter UTR"
                          name="utr"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="selectLanguage">Action</label>
                        <select
                          id="selectLanguage"
                          className="custom-select"
                          name="action"
                          onChange={handleChange}
                        >
                          <option value="debit">Debit</option>
                          <option value="credit">Credit</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="newPass">Remark</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Remark"
                          name="description"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <input type="submit" />
                      </div>
                    </div>
                  </form>
                </div>
              </Card>
            ))}
          {body?.map((data, index) => {
            return (
              <tr key={index} onClick={() => setCurrentUserForAmount(data)}>
                <td>{data?.email}</td>
                <td>{data?.name}</td>
                <td>{data?.mobile}</td>
                <td>{new Date(data?.updatedAt).toLocaleTimeString()}</td>
                <td>{data?.balance} Rs</td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.active}
                      onChange={(e) => handleUserChange(e, data)}
                      name="active"
                    />
                  </div>
                </td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.canDeposite}
                      onChange={(e) => handleUserChange(e, data)}
                      name="canDeposite"
                    />
                  </div>
                </td>
                <td>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      style={{ zIndex: -99 }}
                      checked={data.canWithdraw}
                      onChange={(e) => handleUserChange(e, data)}
                      name="canWithdraw"
                    />
                  </div>
                </td>
                <td onClick={() => handleClickuser(data, "wallet")}>
                  <i className="fa fa-wallet"></i>
                </td>
                <td onClick={() => handleClickuser(data, "action")}>
                  <i className="fa fa-money"></i>
                </td>
              </tr>
            );
          })}
        </>
      )}
      {type == "kyc" && (
        <>
          {recieptImg.status && (
            <Card closeModal={setRecieptImg}>
              <div>
                <img
                  src={recieptImg.data}
                  alt="pic"
                  style={{
                    height: "100px",
                    width: "100px",
                  }}
                />
              </div>
            </Card>
          )}
          {body?.map((data, index) => {
            if (data.kyc == "pending") {
              return (
                <tr
                  key={index}
                  onClick={() => setCurrentDespositeDataForUpdate(data)}
                >
                  <td>{data?._id?.slice(-5)}</td>
                  <td>{data?.email}</td>
                  <td>{data?.name}</td>
                  <td>{data?.kyc}</td>
                  <td
                    onClick={() =>
                      setRecieptImg({ status: true, data: data.pan })
                    }
                  >
                    <fa className="fa fa-eye"></fa>
                  </td>
                  <td>{data.panNumber}</td>
                  <td
                    onClick={() =>
                      setRecieptImg({ status: true, data: data.adharBack })
                    }
                  >
                    <fa className="fa fa-eye"></fa>
                  </td>
                  <td
                    onClick={() =>
                      setRecieptImg({ status: true, data: data.adharFront })
                    }
                  >
                    <fa className="fa fa-eye"></fa>
                  </td>
                  <td>{data.adharNumber}</td>
                  <td
                    onClick={() =>
                      setRecieptImg({ status: true, data: data.uniqueNumber })
                    }
                  >
                    <fa className="fa fa-eye"></fa>
                  </td>
                  <td>
                    <button onClick={() => handleKyc("approve", data)}>
                      Accept
                    </button>
                    <button onClick={() => handleKyc("reject", data)}>
                      Reject
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </>
      )}
    </tbody>
  );
};

export default Body;
