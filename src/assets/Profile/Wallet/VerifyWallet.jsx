import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { postFetch } from "../../../api/api";
import { submitDepositeReciept } from "../../../components/Profile/Logic";
import { config } from "../../../constants/constants";
import { AuthContext } from "../../../context/Auth";
import { WallteContext } from "../../../context/Wallet";

const VerifyWallet = () => {
  const { verifyDepositeReciept, setverifyWallet } = useContext(WallteContext);
  const { userData } = useContext(AuthContext);
  const [input, setInput] = useState({
    bankName: verifyDepositeReciept?.bankName,
    mode: verifyDepositeReciept?.mode,
    deposite: "",
    utr: "",
    name: userData?.name,
    mobile: userData?.mobile,
    email: userData?.email,
  });
  const [file, setFile] = useState({});
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
    try {
      let formData = new FormData();
      formData.append("bankName", input.bankName);
      formData.append("mode", input.mode);
      formData.append("deposite", input.deposite);
      formData.append("utr", input.utr);
      formData.append("name", input.name);
      formData.append("mobile", input.mobile);
      formData.append("email", input.email);
      formData.append("reciept", file);
      formData.append("status", "pending");
      const res = await submitDepositeReciept(formData);
      if (res.success) {
        toast.success(res.message, config);
        setverifyWallet(false);
        setInput((prev) => {
          return {
            ...prev,
            utr: "",
            deposite: "",
          };
        });
      } else {
        toast.error(res.message, config);
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-row mt-4">
          <div className="col-md-6">
            <label htmlFor="formFirst">Bank Name</label>
            <input
              id="formFirst"
              type="text"
              className="form-control"
              placeholder="Bank Name"
              value={verifyDepositeReciept?.bankName}
              disabled
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="emailAddress">Deposited Amount</label>
            <input
              id="emailAddress"
              type="text"
              className="form-control"
              placeholder="Deposited Amount"
              name="deposite"
              defaultValue={input?.deposite}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">UTR Number</label>
            <input
              id="phoneNumber"
              type="text"
              className="form-control"
              placeholder="UTR Number"
              value={input?.utr}
              name="utr"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <div className="custom-file ">
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="custom-file-label" htmlFor="fileUpload">
                Upload Reciepts
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <input type="submit" value="Update" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyWallet;
