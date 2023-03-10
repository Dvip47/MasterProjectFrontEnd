import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../../api/api";
import {
  bankDeatils,
  bankValidation,
  utrSubmit,
  utrValidation,
  verify,
} from "../../../components/Profile/Logic";
import { config, REMOVEBANK } from "../../../constants/constants";
import { AuthContext } from "../../../context/Auth";
import { WallteContext } from "../../../context/Wallet";
const Bank = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  const { userBank, callUserBank } = useContext(WallteContext);
  useEffect(() => {
    callUserBank(userData);
  }, [userBank, userData]);
  const [input, setInput] = useState({
    bankName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
  });
  const [utr, setUtr] = useState("");
  const [beneName, setBeneName] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = bankValidation(input);
    if (validate.result) {
      const res = await bankDeatils({
        bankName: input.bankName,
        accountNumber: input.accountNumber,
        ifscCode: input.ifscCode.toUpperCase(),
        email: userData.email,
      });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res?.success) {
        toast.success("Please click on verify button to verify", config);
        setProcess({ utr: false, verify: true });
        setDisable({ submit: true });
      } else {
        toast.error(res.message, config);
      }
    } else {
      toast.error(validate.message, config);
    }
  };
  const handleSubmitVerify = async () => {
    const res = await verify({
      email: userData.email,
      mobile: userData.mobile,
      accountNumber: input.accountNumber,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res?.success) {
      toast.success("2nd step completed", config);
      setBeneName(res.message.accountHolderName);
      setProcess({ verify: false, utr: true });
      setDisable({ submit: false });
    } else {
      toast.error(res.message, config);
    }
  };
  const handleSubmitUtr = async (e) => {
    e.preventDefault();
    const validate = utrValidation(input);
    if (validate.result) {
      const res = await utrSubmit({
        utr: utr,
        email: userData.email,
        accountNumber: input.accountNumber,
      });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res?.success) {
        setProcess({ utr: false, verify: false });
        toast.success("Bank Added Successfully", config);
        setInput({
          bankName: "",
          accountNumber: "",
          confirmAccountNumber: "",
          ifscCode: "",
        });
      } else {
        toast.error(res.message, config);
      }
    } else {
      toast.error(validate.message, config);
    }
  };
  const [process, setProcess] = useState({
    verify: false,
    utr: false,
  });
  const removebank = async (data) => {
    const res = await postFetch(REMOVEBANK, {
      email: userData.email,
      accountNumber: data.accountNumber,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      toast.success(res.message, config);
      callUserBank(userData);
    } else {
      toast.error(res.message, config);
    }
  };
  const [disable, setDisable] = useState({ submit: false });
  return (
    <div
      className="tab-pane fade"
      id="settings-bank"
      role="tabpanel"
      aria-labelledby="kyc-tab"
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Bank Information</h5>
          <div className="settings-profile">
            <form onSubmit={process.utr ? handleSubmitUtr : handleSubmit}>
              <div className="form-row mt-4">
                <div className="col-md-6">
                  <label htmlFor="formFirst">Bank Name</label>
                  <input
                    id="formFirst"
                    type="text"
                    className="form-control"
                    placeholder="Bank Name"
                    name="bankName"
                    onChange={handleChange}
                    value={input.bankName}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="emailAddress">Account Number</label>
                  <input
                    id="formFirst"
                    type="text"
                    className="form-control"
                    placeholder="Account Number"
                    onChange={handleChange}
                    name="accountNumber"
                    maxLength={14}
                    value={input.accountNumber}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phoneNumber">Confirm Account Number</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="Confirm Account Number"
                    name="confirmAccountNumber"
                    maxLength={14}
                    onChange={handleChange}
                    value={input.confirmAccountNumber}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phoneNumber">IFSC Code</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="IFSC Code"
                    onChange={handleChange}
                    name="ifscCode"
                    maxLength={11}
                    style={{ textTransform: "uppercase" }}
                    value={input.ifscCode}
                  />
                </div>
                <div className="col-md-12">
                  {process.verify && (
                    <input
                      type="button"
                      value="Verify"
                      className="w-100 btn-sm"
                      onClick={handleSubmitVerify}
                    />
                  )}
                  {process.utr && (
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          {beneName}
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="UTR Number"
                        aria-label="UTR Number"
                        aria-describedby="basic-addon1"
                        onChange={(e) => setUtr(e.target.value)}
                      />
                    </div>
                  )}
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="Submit"
                    disabled={disable.submit}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <thead>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>IFSC CODE</th>
              <th>Bene Name</th>
              <th>Action</th>
            </thead>
            <tbody>
              {userBank?.map((data, index) => {
                if (data.bankActive) {
                  return (
                    <tr key={index}>
                      <td>{data.bankName}</td>
                      <td>{data.accountNumber}</td>
                      <td>{data.ifscCode}</td>
                      <td>{data.accountHolderName}</td>
                      <td onClick={() => removebank(data)}>
                        <i
                          className="fa fa-times"
                          style={{
                            fontWeight: "900",
                            color: "red",
                            fontSize: "22px",
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Bank;
