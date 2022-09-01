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
        <a
          className="nav-link active"
          id="settings-profile-tab"
          data-toggle="pill"
          href="#settings-profile"
          role="tab"
          aria-controls="settings-profile"
          aria-selected="true"
        >
          <i className="icon ion-md-person"></i> Profile
        </a>
        <a
          className="nav-link"
          id="settings-wallet-tab"
          data-toggle="pill"
          href="#settings-wallet"
          role="tab"
          aria-controls="settings-wallet"
          aria-selected="false"
        >
          <i className="icon ion-md-wallet"></i> Wallet
        </a>
        <a
          className="nav-link"
          id="settings-tab"
          data-toggle="pill"
          href="#settings"
          role="tab"
          aria-controls="settings"
          aria-selected="false"
        >
          <i className="icon ion-md-settings"></i> Settings
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
