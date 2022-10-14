import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../api/api";
import {
  bankDeatils,
  bankValidation,
  utrSubmit,
  utrValidation,
  verify,
} from "../../components/Profile/Logic";
import { config, REMOVEBANK } from "../../constants/constants";
import { AuthContext } from "../../context/Auth";
import { UserContext } from "../../context/UserContext";
import CardModal from "../card/CardModal";

const UserBank = () => {
  const { userBank, callUserBank } = useContext(UserContext);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    callUserBank(userData);
  }, [userData]);
  const [addBankForm, setAddBankForm] = useState({
    status: false,
  });
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
        setAddBankForm({ status: false });
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
  const [beneName, setBeneName] = useState("");
  const [disable, setDisable] = useState({ submit: false });

  return (
    <div className="col-xl-12">
      {addBankForm.status && (
        <CardModal closeModal={setAddBankForm}>
          <div className="verification section-padding mb-5 ">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center  my-5">
                <div className="col-xl-5 col-md-6">
                  <div className="auth-form card">
                    <div className="card-header">
                      <h4 className="card-title">Link a bank account</h4>
                    </div>
                    <div className="card-body">
                      <form
                        onSubmit={process.utr ? handleSubmitUtr : handleSubmit}
                        className="identity-upload"
                      >
                        <div className="form-row">
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">Bank Name </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Bank Name"
                              name="bankName"
                              onChange={handleChange}
                              value={input.bankName}
                            />
                          </div>
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">Account Number </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Account Number"
                              onChange={handleChange}
                              name="accountNumber"
                              maxLength={14}
                              value={input.accountNumber}
                            />
                          </div>
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">
                              Confirm Account Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Confirm Account Number"
                              name="confirmAccountNumber"
                              maxLength={14}
                              onChange={handleChange}
                              value={input.confirmAccountNumber}
                            />
                          </div>
                          <div className="form-group col-xl-12">
                            <label className="mr-sm-2">IFSC Code</label>
                            <input
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
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
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

                          <div className="text-center col-12">
                            <a
                              className="btn btn-primary mx-2"
                              onClick={() => setAddBankForm({ status: false })}
                            >
                              Back
                            </a>
                            <button
                              type="submit"
                              className="btn btn-success mx-2"
                              disabled={disable.submit}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardModal>
      )}
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Linked Account or Card</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table linked_account ">
              <tbody>
                {userBank?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="media">
                          <span className="mr-3">
                            <i className="fa fa-bank"></i>
                          </span>
                          <div className="media-body">
                            <h5 className="mt-0 mb-1">{data?.bankName}</h5>
                            <p>
                              Bank **************
                              {String(data?.accountNumber)?.slice(10)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="edit-option">
                          <a onClick={() => removebank(data)}>
                            <i className="fa fa-trash"></i>
                          </a>
                        </div>
                      </td>
                      <td>
                        <div className="verify">
                          <div className="verified">
                            <span>
                              <i className="la la-check"></i>
                            </span>
                            <a>Verified</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-3">
              <a
                onClick={() => setAddBankForm({ status: true })}
                className="btn btn-primary px-4 py-2 mr-3 my-2"
              >
                Add Bank Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBank;
