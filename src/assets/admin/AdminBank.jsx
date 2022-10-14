import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addBank,
  addBankValidation,
  updateBank,
} from "../../components/Admin/Bank/Logic";
import { config } from "../../constants/constants";
import { WallteContext } from "../../context/Wallet";
import CardModal from "../card/CardModal";

const AdminBank = () => {
  useEffect(() => {
    callAdminBankList();
  }, []);
  const bank = ["Bank Name", "Account Number", "IFSC Code", "Status", "Edit"];
  const navigate = useNavigate();
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
        }
        console.log("---", res?.message);
        if (res.success) {
          toast.success(res.message, config);
          setTimeout(() => {
            callAdminBankList();
          }, 400);
        }
      } else {
        toast.error("Invalid Details", config);
      }
    } catch (error) {
      return error;
    }
  };
  const [recieptImg, setRecieptImg] = useState({
    status: false,
    data: "",
    type: "",
  });
  return (
    <>
      {recieptImg?.status && (
        <CardModal closeModal={setRecieptImg}>
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edit Bank Details</h4>
              </div>
              <div className="card-body">
                <form
                  className="personal_validate"
                  onSubmit={handleSubmitUpdate}
                >
                  <div className="form-row">
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Bank Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Bank Name"
                        value={input.bankName}
                        name="bankName"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">Account Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Account Number"
                        name="accountNumber"
                        value={input.accountNumber}
                        onChange={handleChange}
                        required
                        maxLength={16}
                      />
                    </div>

                    <div className="form-group col-xl-6 col-md-6">
                      <label className="mr-sm-2">IFSC Code</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter IFSC Code"
                        value={input.ifscCode}
                        name="ifscCode"
                        onChange={handleChange}
                        required
                        maxLength={10}
                      />
                    </div>
                    <div className="col-6 d-flex  align-center justify-center">
                      <div
                        className=" col-3"
                        onClick={() => setRecieptImg({ status: false })}
                      >
                        <button className="btn btn-success px-4">Back</button>
                      </div>

                      <div className="col-3">
                        <button className="btn btn-success px-4" type="submit">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardModal>
      )}
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Admin Bank List</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {bank.map((data, index) => (
                      <th key={index}>{data}</th>
                    ))}
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
                          <label className="toggle">
                            <input
                              className="toggle-checkbox"
                              type="checkbox"
                              checked={data?.bankStatus}
                              onChange={() =>
                                handleSubmitUpdate(data, "status")
                              }
                              name="active"
                            />
                            <span className="toggle-switch"></span>
                          </label>
                        </td>
                        <td
                          onClick={() => {
                            setInput({
                              accountNumber: data.accountNumber,
                              ifscCode: data.ifscCode,
                              bankName: data.bankName,
                              ACNO: data.accountNumber,
                            });
                            setRecieptImg({ status: true });
                          }}
                        >
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

export default AdminBank;
