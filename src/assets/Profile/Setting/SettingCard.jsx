import React, { useState, useContext } from "react";
import { security } from "../../../components/Profile/Logic";
import { AuthContext } from "../../../context/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { config } from "../../../constants/constants";
const SettingCard = () => {
  const { userData } = useContext(AuthContext);
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
      title: "Nome",
      data: "Not secure",
    },
  ];
  const handleClick = async (data) => {
    setOn(data.security);
    const res = await security({
      security: data.security,
      email: userData.email,
    });
    console.log(res);
    toast.success(`${data.title} enable`, config);
  };
  const [on, setOn] = useState("none");
  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <ToastContainer />
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
