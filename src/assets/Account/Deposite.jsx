import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  recieptValidation,
  submitDepositeReciept,
} from "../../components/Profile/Logic";
import { config } from "../../constants/constants";
import { AuthContext } from "../../context/Auth";
import { WallteContext } from "../../context/Wallet";
import CardModal from "../card/CardModal";

const Deposite = () => {
  const { callAdminBankList, adminbankList } = useContext(WallteContext);
  useEffect(() => {
    callAdminBankList();
  }, []);
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    bankName: "",
    mode: "deposite",
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
          setVerifyDepositeModal({ status: false });
          toast.success(res.message, config);
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
  const [verifyDepositeModal, setVerifyDepositeModal] = useState({
    status: false,
  });
  return (
    <>
      {verifyDepositeModal.status && (
        <CardModal closeModal={setVerifyDepositeModal}>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Upload Details To Verify</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="form-group">
                        <label className="mr-sm-2">Bank Name</label>
                        <input
                          type="text"
                          name="usd_amount"
                          className="form-control"
                          placeholder="Enter Passphrase"
                          disabled
                          value={input?.bankName}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="form-group">
                        <label className="mr-sm-2">Amount</label>
                        <input
                          type="text"
                          name="deposite"
                          className="form-control"
                          placeholder="Enter Deposite Amount"
                          value={input?.deposite}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="form-group">
                        <label className="mr-sm-2">Enter UTR Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter UTR Number"
                          name="utr"
                          onChange={handleChange}
                          maxLength={12}
                          value={input?.utr}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="form-group">
                        <label className="mr-sm-2">Upload PIC With Reciept</label>
                        <span className="float-right">
                          Maximum file size is 2mb
                        </span>
                        <div
                          className="file-upload-wrapper"
                          data-text="Upload PIC With Reciept"
                        >
                          <input
                            name="file-upload-field"
                            type="file"
                            className="file-upload-field"
                            onChange={(e) => setFile(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-auto"
                      onClick={() => setVerifyDepositeModal({ status: false })}
                    >
                      <button className="btn btn-primary">Back</button>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardModal>
      )}
      <div className="row w-100">
        <div className="col-xl-12 ">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Deposite Amount</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Bank Name</th>
                      <th>Account Number</th>
                      <th>IFSC Code</th>
                      <th>Status</th>
                      <th>Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminbankList?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{data?.bankName}</td>
                          <td>{data?.accountNumber}</td>
                          <td>{data?.ifscCode}</td>
                          <td>{data?.bankStatus ? "Active" : "Not Active"}</td>
                          <td
                            style={{
                              backgroundColor: "#0089ff",
                              color: "#fff",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setInput((prev) => {
                                return {
                                  ...prev,
                                  bankName: data?.bankName,
                                };
                              });
                              setVerifyDepositeModal({ status: true });
                            }}
                          >
                            Verify
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
      </div>
    </>
  );
};

export default Deposite;
