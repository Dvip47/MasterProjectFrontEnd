import React from "react";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
=======
import { useContext } from "react";
<<<<<<< HEAD
import CardModal from "../../assets/card/CardModal";
=======
>>>>>>> 3ad73f96e0791cbf2e1707dce704d2fe3341d394
>>>>>>> dbac4058d43c772fd6f3f30cc82b5fcfc20b44a8
import Header from "../../assets/Exchange/Header/Header";
import Bank from "../../assets/Profile/Bank/Bank";
import Footer from "../../assets/Profile/Footer/Footer";
import Kyc from "../../assets/Profile/Kyc/Kyc";
import ProfileCard from "../../assets/Profile/Profile/ProfileCard";
import Sidebar from "../../assets/Profile/Profile/Sidebar";
import ResetPassward from "../../assets/Profile/Resetpassward/ResetPassward";
import SettingCard from "../../assets/Profile/Setting/SettingCard";
import Balance from "../../assets/Profile/Wallet/Balance";
import Card from "../../assets/Profile/Wallet/Card";
import Deposite from "../../assets/Profile/Wallet/Deposite";
import { WallteContext } from "../../context/Wallet";

const Profile = () => {
  const { depositePage } = useContext(WallteContext);
  return (
    <>
      <Header />
      <ToastContainer />
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
                  <ResetPassward />
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
                            {depositePage.symbol !== "INR" && <Deposite />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SettingCard />
                <Kyc />
                <Bank />
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
