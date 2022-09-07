import React from "react";

const SettingCard = () => {
  return (
    <div
      className="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings-tab"
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Notifications</h5>
          <div className="settings-notification">
            <ul>
              <li>
                <div className="notification-info">
                  <p>Update price</p>
                  <span>Get the update price in your dashboard</span>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="notification1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="notification1"
                  ></label>
                </div>
              </li>
              <li>
                <div className="notification-info">
                  <p>2FA</p>
                  <span>Unable two factor authentication service</span>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="notification2"
                    checked
                    onChange={() => {}}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="notification2"
                  ></label>
                </div>
              </li>
              <li>
                <div className="notification-info">
                  <p>Latest news</p>
                  <span>Get the latest news in your mail</span>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="notification3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="notification3"
                  ></label>
                </div>
              </li>
              <li>
                <div className="notification-info">
                  <p>Email Service</p>
                  <span>Get security code in your mail</span>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="notification4"
                    checked
                    onChange={() => {}}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="notification4"
                  ></label>
                </div>
              </li>
              <li>
                <div className="notification-info">
                  <p>Phone Notify</p>
                  <span>Get transition notification in your phone </span>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="notification5"
                    checked
                    onChange={() => {}}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="notification5"
                  ></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
