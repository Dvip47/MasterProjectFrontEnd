import React, { useState, useContext, useEffect } from "react";
import { security, verifySecurity } from "../../../components/Profile/Logic";
import { AuthContext } from "../../../context/Auth";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { config, PROFILEDATA } from "../../../constants/constants";
import { postFetch } from "../../../api/api";
import CardModal from "../../card/CardModal";
import { useNavigate } from "react-router-dom";
const SettingCard = () => {
  const { userData, setUserData } = useContext(AuthContext);
  useEffect(() => {
    setOn(userData.security);
  }, [userData]);
  const settings = [
    {
      security: "2fa",
      title: "2FA",
      data: "Highly secure",
    },
    {
      security: "email",
      title: "Email",
      data: "Secure",
    },
    {
      security: "none",
      title: "None",
      data: "Not secure",
    },
  ];
  const navigate = useNavigate();
  const handleClick = async (data) => {
    setOn(data.security);
    if (userData.security !== data.security) {
      const res = await security({
        security: data.security,
        email: userData.email,
        previous: userData.security,
      });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res.success) {
        toast.success(`Validate OTP to change your Auth setting`, config);
        setOtpModal({
          status: true,
          page: "otp",
          url: "",
          data: data.security,
        });
      }
    }
  };
  const callProfile = async () => {
    const res = await postFetch(PROFILEDATA, { email: userData.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      return setUserData(res.message[0]);
    } else {
      toast.error(res.message, config);
    }
  };
  const handleSubmitOTP = async (e) => {
    e.preventDefault();
    const res = await verifySecurity({
      security: otpModal.data,
      email: userData.email,
      previous: userData.security,
      otp: otp,
    });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      if (otpModal.data == "2fa") {
        toast.success("Scan QR CODE To Setup OTP", config);
        setOtpModal({
          status: true,
          page: "img",
          url: res.message.url,
        });
      } else {
        toast.success(`${otpModal.data} enabled`, config);
        setOtpModal({
          status: false,
          page: "img",
          url: res.message,
        });
      }
      callProfile();
    } else {
      toast.error(res.message, config);
    }
  };
  const [on, setOn] = useState("none");
  const [otpModal, setOtpModal] = useState({
    status: false,
    page: "img",
    url: "",
    data: "",
  });
  const [otp, setOtp] = useState("");
  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      {otpModal.status && (
        <CardModal closeModal={setOtpModal}>
          {otpModal.page == "img" && (
            <div className="message-pop">
              <img src={otpModal.url} alt="QR code" className="w-20" />
              <h4 className="fontW-700 mt-2 p-2">
                Scan this QR Code with Google Authenticator
              </h4>
              <button
                onClick={(prev) => setOtpModal({ ...prev, status: false })}
              >
                Close
              </button>
            </div>
          )}
          {otpModal.page !== "img" && (
            <div className="message-pop">
              <h3>Enter OTP To Validate</h3>
              <form onSubmit={handleSubmitOTP}>
                <div className="flex">
                  <input
                    id="phoneNumber"
                    type="text"
                    className="form-control w-50"
                    placeholder="Enter OTP"
                    name="mobile"
                    maxLength={6}
                    style={{ margin: "auto" }}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <div className="col-md-3 m-auto">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          )}
        </CardModal>
      )}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <div className="settings-notification">
            <ul>
              {settings.map((data, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleClick(data)}
                    style={{ zIndex: 99 }}
                  >
                    <div className="notification-info">
                      <p>{data.title}</p>
                      <span>{data.data}</span>
                    </div>
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        style={{ zIndex: -99 }}
                        checked={data.security == on ? true : false}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="notification2"
                      ></label>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
