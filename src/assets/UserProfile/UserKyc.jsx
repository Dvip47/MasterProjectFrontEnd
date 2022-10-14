import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../../api/api";
import { kyc, kycValidation } from "../../components/Profile/Logic";
import { config, PROFILEDATA } from "../../constants/constants";
import { AuthContext } from "../../context/Auth";
import CardModal from "../card/CardModal";

const UserKyc = () => {
  const { setKycPage, kycPage, userData, setUserData } =
    useContext(AuthContext);
  useEffect(() => {
    setKycPage(userData?.kyc);
    callProfile();
  }, [kycPage]);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    pan: "",
    panNumber: "",
    adharFront: "",
    adharNumber: "",
    adharBack: "",
    uniqueNumber: "",
  });
  const callProfile = async () => {
    const res = await postFetch(PROFILEDATA, { email: userData?.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setUserData(res.message[0]);
      setKycPage(res.message[0]?.kyc);
    } else {
      toast.error(res.message, config);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = kycValidation(input);
    if (validate.result) {
      toast.success("Details uploaded", config);
      setOpenKycForm({ status: false });
      setKycPage("pending");
      const formData = new FormData();
      formData.append("pan", input.pan);
      formData.append("adharFront", input.adharFront);
      formData.append("adharBack", input.adharBack);
      formData.append("uniqueNumber", input.uniqueNumber);
      formData.append("adharNumber", input.adharNumber);
      formData.append("panNumber", input.panNumber.toUpperCase());
      formData.append("email", userData?.email);
      const res = await kyc(formData);
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res?.success) {
        toast.success("Details uploaded", config);
        setInput({
          pan: "",
          panNumber: "",
          adharFront: "",
          adharNumber: "",
          adharBack: "",
          uniqueNumber: "",
        });

        callProfile();
      } else {
        toast.error(res.message, config);
      }
    } else {
      toast.error(validate.message, config);
    }
  };
  const [openKycFrom, setOpenKycForm] = useState({ status: false });
  return (
    <>
      {openKycFrom.status && (
        <CardModal closeModal={setOpenKycForm}>
          <div className="verification section-padding">
            <div className="container h-100">
              <div className="row justify-content-center h-100 align-items-center">
                <div className="col-xl-5 col-md-6">
                  <div className="auth-form card">
                    <div className="card-body">
                      <form onSubmit={handleSubmit} className="identity-upload">
                        <div className="identity-content">
                          <h4>Upload your ID cards</h4>

                          <p>
                            Uploading your IDs helps as ensure the safety and
                            security of your founds
                          </p>
                        </div>

                        <div className="form-group">
                          <label className="mr-sm-2">Upload PAN Card</label>
                          <span className="float-right">
                            Maximum file size is 2mb
                          </span>
                          <div className="file-upload-wrapper" data-text="Pan">
                            <input
                              name="file-upload-field"
                              type="file"
                              className="file-upload-field"
                              onChange={(e) =>
                                setInput({ ...input, pan: e.target.files[0] })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mr-sm-2">Upload Adhar Front </label>
                          <span className="float-right">
                            Maximum file size is 2mb
                          </span>
                          <div
                            className="file-upload-wrapper"
                            data-text="Adhar Front"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              className="file-upload-field"
                              onChange={(e) =>
                                setInput({
                                  ...input,
                                  adharFront: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mr-sm-2">Upload Unique ID</label>
                          <span className="float-right">
                            Maximum file size is 2mb
                          </span>
                          <div
                            className="file-upload-wrapper"
                            data-text="Your Unique ID"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              className="file-upload-field"
                              onChange={(e) =>
                                setInput({
                                  ...input,
                                  uniqueNumber: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mr-sm-2">Upload Adhar Back</label>
                          <span className="float-right">
                            Maximum file size is 2mb
                          </span>
                          <div
                            className="file-upload-wrapper"
                            data-text="Adhar Back"
                          >
                            <input
                              name="file-upload-field"
                              type="file"
                              className="file-upload-field"
                              onChange={(e) =>
                                setInput({
                                  ...input,
                                  adharBack: e.target.files[0],
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mr-sm-2">
                            Enter PAN Card Number
                          </label>
                          <input
                            name="file-upload-field"
                            type="text"
                            className="file-upload-field"
                            onChange={(e) =>
                              setInput({
                                ...input,
                                panNumber: e.target.value,
                              })
                            }
                            maxLength={12}
                            value={input.panNumber}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mr-sm-2">
                            Enter Adhar Card Number
                          </label>
                          <input
                            name="file-upload-field"
                            type="text"
                            className="file-upload-field"
                            maxLength={16}
                            onChange={(e) =>
                              setInput({
                                ...input,
                                adharNumber: e.target.value,
                              })
                            }
                            value={input.adharNumber}
                          />
                        </div>

                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-success pl-5 pr-5"
                          >
                            Submit
                          </button>
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
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">KYC Verification</h4>
          </div>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="id_card">
                  <img src="images/id.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="id_info">
                  <h4>{userData?.name}</h4>
                  <p className="mb-1 mt-3">ID: {userData?._id}</p>
                  <p className="mb-1">
                    Status:
                    <span className="font-weight-bold">
                      {kycPage == "pending"
                        ? " Pending"
                        : kycPage == "verified"
                        ? " Verified"
                        : " Verify"}
                    </span>
                  </p>
                  {kycPage == "" && (
                    <a
                      className="btn btn-success mt-3"
                      onClick={() => setOpenKycForm({ status: true })}
                    >
                      Verify
                    </a>
                  )}
                  {kycPage == undefined && (
                    <a
                      className="btn btn-success mt-3"
                      onClick={() => setOpenKycForm({ status: true })}
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserKyc;
