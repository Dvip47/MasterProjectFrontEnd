import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  bankDeatils,
  bankValidation,
  utrSubmit,
  utrValidation,
  verify,
} from "../../../components/Profile/Logic";
import { config } from "../../../constants/constants";
import { AuthContext } from "../../../context/Auth";
const Bank = () => {
  const { userData } = useContext(AuthContext);
  const [input, setInput] = useState({
    bankName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
  });
  const [utr, setUtr] = useState("");
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
      console.log(res);
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
  const [beneName, setBeneName] = useState("");
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
          <h5 className="card-title">General Information</h5>
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
      </div>
    </div>
  );
};
export default Bank;
