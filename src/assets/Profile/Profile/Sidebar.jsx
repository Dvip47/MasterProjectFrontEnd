import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-12 col-lg-3">
      <div
        className="nav flex-column nav-pills settings-nav"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <p
          className="nav-link active"
          id="settings-profile-tab"
          data-toggle="pill"
          href="#settings-profile"
          role="tab"
          aria-controls="settings-profile"
          aria-selected="true"
        >
          <i className="icon ion-md-person"></i> Profile
        </p>
        <p
          className="nav-link"
          id="settings-wallet-tab"
          data-toggle="pill"
          href="#settings-wallet"
          role="tab"
          aria-controls="settings-wallet"
          aria-selected="false"
        >
          <i className="icon ion-md-wallet"></i> Wallet
        </p>
        <p
          className="nav-link"
          id="settings-kyc-tab"
          data-toggle="pill"
          href="#settings-kyc"
          role="tab"
          aria-controls="kyc-wallet"
          aria-selected="false"
        >
          <i className="icon ion-md-wallet"></i> KYC
        </p>
        <p
          className="nav-link"
          id="settings-wallet-tab"
          data-toggle="pill"
          href="#settings-bank"
          role="tab"
          aria-controls="settings-wallet"
          aria-selected="false"
        >
          <i className="icon ion-md-wallet"></i> Bank
        </p>
        <p
          className="nav-link"
          id="settings-tab"
          data-toggle="pill"
          href="#settings"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          <i className="icon ion-md-settings"></i> Settings
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
