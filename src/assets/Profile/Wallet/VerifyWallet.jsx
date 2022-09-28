import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  recieptValidation,
  submitDepositeReciept,
} from "../../../components/Profile/Logic";
import { config } from "../../../constants/constants";
import { AuthContext } from "../../../context/Auth";
import { WallteContext } from "../../../context/Wallet";

const VerifyWallet = () => {
  const { verifyDepositeReciept, setverifyWallet } = useContext(WallteContext);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    bankName: verifyDepositeReciept?.bankName,
    mode: verifyDepositeReciept?.mode,
    deposite: "",
    utr: "",
    name: userData?.name,
    mobile: userData?.mobile,
    email: userData?.email,
  });
  const [file, setFile] = useState("");
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
    const validate = recieptValidation(input, file);
    if (validate.result) {
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
        if (res == 401) {
          toast.error("Session Over", config);
          localStorage.removeItem("token");
          navigate("/credential", { state: "login" });
        }
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
    } else {
      toast.error(validate.message, config);
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
              maxLength={12}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber">Upload Reciepts</label>
            <div className="custom-file ">
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label className="custom-file-label" htmlFor="fileUpload">
                Choose Reciept's Pic
              </label>
            </div>
          </div>
          <div className="col-md-6">
            <input type="submit" value="Submit" />
          </div>
          <div className="col-md-6" onClick={() => setverifyWallet(false)}>
            <button className="btn btn-primary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyWallet;
