import React from "react";
import Header from "../../assets/Exchange/Header/Header";
import Footer from "../../assets/Profile/Footer/Footer";
import ProfileCard from "../../assets/Profile/Profile/ProfileCard";
import Sidebar from "../../assets/Profile/Profile/Sidebar";
import SettingCard from "../../assets/Profile/Setting/SettingCard";
import Balance from "../../assets/Profile/Wallet/Balance";
import Card from "../../assets/Profile/Wallet/Card";
import Deposite from "../../assets/Profile/Wallet/Deposite";
import Transactions from "../../assets/Profile/Wallet/Transactions";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="settings mtb15">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-md-12 col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="settings-profile"
                  role="tabpanel"
                  aria-labelledby="settings-profile-tab"
                >
                  <ProfileCard />
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Security Information</h5>
                      <div className="settings-profile">
                        <form>
                          <div className="form-row">
                            <div className="col-md-6">
                              <label htmlFor="currentPass">
                                Current password
                              </label>
                              <input
                                id="currentPass"
                                type="text"
                                className="form-control"
                                placeholder="Enter your password"
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="newPass">New password</label>
                              <input
                                id="newPass"
                                type="text"
                                className="form-control"
                                placeholder="Enter new password"
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityOne">
                                Security questions #1
                              </label>
                              <select
                                id="securityOne"
                                className="custom-select"
                              >
                                <option defaultValue="vashu">
                                  What was the name of your first pet?
                                </option>
                                <option>
                                  What's your Mother's middle name?
                                </option>
                                <option>
                                  What was the name of your first school?
                                </option>
                                <option>
                                  Where did you travel for the first time?
                                </option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityAnsOne">Answer</label>
                              <input
                                id="securityAnsOne"
                                type="text"
                                className="form-control"
                                placeholder="Enter your answer"
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityTwo">
                                Security questions #2
                              </label>
                              <select
                                id="securityTwo"
                                className="custom-select"
                              >
                                <option defaultValue="vashu">Choose...</option>
                                <option>
                                  What was the name of your first pet?
                                </option>
                                <option>
                                  What's your Mother's middle name?
                                </option>
                                <option>
                                  What was the name of your first school?
                                </option>
                                <option>
                                  Where did you travel for the first time?
                                </option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityAnsTwo">Answer</label>
                              <input
                                id="securityAnsTwo"
                                type="text"
                                className="form-control"
                                placeholder="Enter your answer"
                              />
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityThree">
                                Security questions #3
                              </label>
                              <select
                                id="securityThree"
                                className="custom-select"
                              >
                                <option defaultValue="vashu">Choose...</option>
                                <option>
                                  What was the name of your first pet?
                                </option>
                                <option>
                                  What's your Mother's middle name?
                                </option>
                                <option>
                                  What was the name of your first school?
                                </option>
                                <option>
                                  Where did you travel for the first time?
                                </option>
                              </select>
                            </div>
                            <div className="col-md-6">
                              <label htmlFor="securityFore">Answer</label>
                              <input
                                id="securityFore"
                                type="text"
                                className="form-control"
                                placeholder="Enter your answer"
                              />
                            </div>
                            <div className="col-md-12">
                              <input type="submit" defaultValue="Update" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="settings-wallet"
                  role="tabpanel"
                  aria-labelledby="settings-wallet-tab"
                >
                  <div className="wallet">
                    <div className="row">
                      <Card />
                      <div className="col-md-12 col-lg-8">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="coinBTC"
                            role="tabpanel"
                          >
                            <Balance />
                            <Deposite />
                            <Transactions />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SettingCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
