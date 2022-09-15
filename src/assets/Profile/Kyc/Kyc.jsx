import React, { useContext, useLayoutEffect, useState } from "react";
import { config, PROFILEDATA } from "../../../constants/constants";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../context/Auth";
import { kycValidation, kyc } from "../../../components/Profile/Logic";
import { postFetch } from "../../../api/api";
import "./style.css";
const Kyc = () => {
  const { setKycPage, kycPage, userData, setUserData } =
    useContext(AuthContext);
  useLayoutEffect(() => {
    setKycPage(userData?.kyc);
  }, [userData]);
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
    if (res.success) {
      setUserData(res.message[0]);
      setKycPage(res.message[0].kyc);
    } else {
      toast.error(res.message, config);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validate = kycValidation(input);
    if (validate.result) {
      toast.success("Details uploaded", config);
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
  return (
    <div
      className="tab-pane fade"
      id="settings-kyc"
      role="tabpanel"
      aria-labelledby="kyc-tab"
    >
      <div className="card">
        <ToastContainer />
        {/* new */}
        {kycPage == "pending" && (
          <div
            style={{
              position: "absolute",
              height: "75vh",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="message text-center">
              <div className="message-pop">
                <img src="img/pending.png" alt="" className="w-20" />
                <h4 className="fontW-700 mt-2"> KYC is in Verification</h4>
              </div>
            </div>
          </div>
        )}
        {kycPage == "success" && (
          <div
            style={{
              position: "absolute",
              height: "75vh",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="message text-center">
              <div className="message-pop">
                <img src="img/success.png" alt="" className="w-20" />
                <h4 className="fontW-700 mt-2">Your KYC is Verified</h4>
              </div>
            </div>
          </div>
        )}
        {/* new */}
        <div className="card-body">
          <h5 className="card-title">Verify KYC</h5>
          <div className="settings-profile">
            <form onSubmit={handleSubmit}>
              <div className="form-row mt-4">
                <div className="col-md-6 ">
                  <div className="custom-file m-0">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="fileUpload"
                      onChange={(e) =>
                        setInput({ ...input, pan: e.target.files[0] })
                      }
                    />
                    <label className="custom-file-label" htmlFor="fileUpload">
                      Pan Card
                    </label>
                    <small>uiyrtieord</small>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="custom-file m-0">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="fileUpload"
                      onChange={(e) =>
                        setInput({ ...input, adharFront: e.target.files[0] })
                      }
                    />
                    <label className="custom-file-label" htmlFor="fileUpload">
                      Aadhaar Card Front
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col-md-6 ">
                  <div className="custom-file m-0">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="fileUpload"
                      onChange={(e) =>
                        setInput({
                          ...input,
                          uniqueNumber: e.target.files[0],
                        })
                      }
                    />
                    <label className="custom-file-label" htmlFor="fileUpload">
                      123456
                    </label>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="custom-file m-0">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="fileUpload"
                      onChange={(e) =>
                        setInput({ ...input, adharBack: e.target.files[0] })
                      }
                    />
                    <label className="custom-file-label" htmlFor="fileUpload">
                      Aadhaar Card Back
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col-md-6">
                  <label htmlFor="formFirst">Pan Card Number</label>
                  <input
                    id="formFirst"
                    type="text"
                    className="form-control"
                    placeholder="Enter PAN Number"
                    name="name"
                    onChange={(e) =>
                      setInput({ ...input, panNumber: e.target.value })
                    }
                    style={{ textTransform: "uppercase" }}
                    maxLength={12}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="phoneNumber">Aadhaar Card Number</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter Aadhaar Card Number"
                    name="mobile"
                    maxLength={16}
                    onChange={(e) =>
                      setInput({ ...input, adharNumber: e.target.value })
                    }
                  />
                </div>
                <div className="col-md-12">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
