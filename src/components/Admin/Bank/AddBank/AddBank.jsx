import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Header from "../../../../assets/Exchange/Header/Header";
import Footer from "../../../../assets/Profile/Footer/Footer";
import { config } from "../../../../constants/constants";
import { WallteContext } from "../../../../context/Wallet";
import "./addBank.css";
import { addBank, addBankValidation, updateBank } from "../Logic";

function AddBank() {
  const { adminbankList, callAdminBankList } = useContext(WallteContext);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let validate = addBankValidation(input);
      if (validate.result) {
        const res = await addBank(input);
        if (res.success) {
          toast.success(res.message, config);
          callAdminBankList();
          setInput({
            bankName: "",
            accountNumber: "",
            ifscCode: "",
            bankStatus: true,
          });
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
  const handleSubmitUpdate = async (data, type) => {
    try {
      let validate = true;
      let res = {};
      if (validate) {
        if (type === "status") {
          res = await updateBank({
            bankStatus: !data.bankStatus,
            ACNO: data.accountNumber,
          });
        } else {
          res = await updateBank(input);
          setMode("create");
        }
        if (res.success) {
          setCheckBoxLogic(false);
          toast.success(res.message, config);
          callAdminBankList();
        }
      } else {
        toast.error("Invalid Details", config);
      }
    } catch (error) {
      return error;
    }
  };
  const [checkBoxLogic, setCheckBoxLogic] = useState(true);
  const [mode, setMode] = useState("create");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped border mt-5">
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Status</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {adminbankList?.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.bankName}</td>
                      <td>{data.accountNumber}</td>
                      <td>{data.ifscCode}</td>
                      <td>
                        <div className="custom-control custom-switch">
                          <input
                            type="checkbox"
                            style={{ zIndex: -99 }}
                            checked={
                              checkBoxLogic ? data.bankStatus : data.bankStatus
                            }
                            onChange={() => handleSubmitUpdate(data, "status")}
                          />
                        </div>
                      </td>
                      <td
                        onClick={() => {
                          setMode("");
                          setInput({
                            accountNumber: data.accountNumber,
                            ifscCode: data.ifscCode,
                            bankName: data.bankName,
                            ACNO: data.accountNumber,
                          });
                        }}
                      >
                        {data.ifscCode}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-0">
            <form
              id="adddBankForm"
              className="mt-5"
              onSubmit={mode === "create" ? handleSubmit : false}
            >
              <div className="col-md-3">
                <label htmlFor="formFirst">Bank Name</label>
                <input
                  id="formFirst"
                  type="text"
                  className="form-control"
                  placeholder="Bank name"
                  value={input.bankName}
                  name="bankName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="formFirst">Account Number</label>
                <input
                  id="formFirst"
                  type="number"
                  className="form-control"
                  placeholder="Account Number"
                  value={input.accountNumber}
                  name="accountNumber"
                  onChange={handleChange}
                  required
                  maxLength={16}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="formFirst">IFSC Code</label>
                <input
                  id="formFirst"
                  type="text"
                  className="form-control"
                  placeholder="IFSC Code"
                  value={input.ifscCode}
                  name="ifscCode"
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </div>
              <div className="col-md-3">
                {mode === "create" ? (
                  <input
                    onClick={
                      mode !== "create"
                        ? () => handleSubmitUpdate("", "")
                        : null
                    }
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  />
                ) : (
                  <div style={{ display: "flex" }}>
                    <input
                      onClick={() => handleSubmitUpdate("", "")}
                      type="submit"
                      value="Update"
                      className="btn btn-primary"
                      onSubmit={(e) => e.preventDefault()}
                    />
                    <button
                      onSubmit={(e) => e.preventDefault()}
                      className="btn btn-primary m-1"
                      onClick={() => {
                        setInput({
                          bankName: "",
                          accountNumber: "",
                          ifscCode: "",
                          bankStatus: true,
                        });
                        setMode("create");
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AddBank;
