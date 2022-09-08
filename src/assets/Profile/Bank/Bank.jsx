import React, { useContext, useLayoutEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { bankValidation } from "../../../components/Profile/Logic";
import { config } from "../../../constants/constants";
const Bank = () => {
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
      // const res = await kyc(formData);
      // if (res?.success) {
      //   toast.success("Details uploaded", config);
      // } else {
      //   toast.error(res.message, config);
      // }
    } else {
      toast.error(validate.message, config);
    }
  };
  return (
    <div
      className="tab-pane fade"
      id="settings-bank"
      role="tabpanel"
      aria-labelledby="kyc-tab"
    >
      <div className="card">
        <ToastContainer />
        <div className="card-body">
          <h5 className="card-title">General Information</h5>
          <div className="settings-profile">
            <form onSubmit={handleSubmit}>
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
                  />
                </div>
                {/* new */}
                <div className="col-md-12">
                  {/* 1 */}
                  <input
                    type="submit"
                    value="Verify"
                    className="w-100 btn-sm"
                  />
                  {/* 2 */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        vashudev
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="UTR Number"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                {/* new */}
                <div className="col-md-12">
                  <input type="submit" value="Update" />
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
