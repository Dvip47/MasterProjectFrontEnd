import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="exchange-light.html">
          <img src="assets/img/logo-dark.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#headerMenu"
          aria-controls="headerMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="icon ion-md-menu"></i>
        </button>

        <div className="collapse navbar-collapse" id="headerMenu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Exchange
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Markets
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="markets-light.html">
                  Markets
                </a>
                <a className="dropdown-item" href="market-capital-light.html">
                  Markets Line
                </a>
                <a
                  className="dropdown-item"
                  href="market-capital-bar-light.html"
                >
                  Markets Bar
                </a>
                <a className="dropdown-item" href="market-overview-light.html">
                  Market Overview
                </a>
                <a className="dropdown-item" href="market-screener-light.html">
                  Market Screener
                </a>
                <a className="dropdown-item" href="market-crypto-light.html">
                  Market Crypto
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dashboard
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="settings-profile-light.html">
                  Profile
                </a>
                <a className="dropdown-item" href="settings-wallet-light.html">
                  Wallet
                </a>
                <a className="dropdown-item" href="settings-light.html">
                  Settings
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Others
              </a>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  onClick={() => navigate("/transaction")}
                >
                  Transaction History
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item header-custom-icon">
              <a className="nav-link" href="#" id="clickFullscreen">
                <i className="icon ion-md-expand"></i>
              </a>
            </li>
            <li className="nav-item dropdown header-custom-icon">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="icon ion-md-notifications"></i>
                <span className="circle-pulse"></span>
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header d-flex align-items-center justify-content-between">
                  <p className="mb-0 font-weight-medium">6 New Notifications</p>
                  <a href="#!" className="text-muted">
                    Clear all
                  </a>
                </div>
                <div className="dropdown-body">
                  <a href="#!" className="dropdown-item">
                    <div className="icon">
                      <i className="icon ion-md-lock"></i>
                    </div>
                    <div className="content">
                      <p>Account password change</p>
                      <p className="sub-text text-muted">5 sec ago</p>
                    </div>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <div className="icon">
                      <i className="icon ion-md-alert"></i>
                    </div>
                    <div className="content">
                      <p>Solve the security issue</p>
                      <p className="sub-text text-muted">10 min ago</p>
                    </div>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <div className="icon">
                      <i className="icon ion-logo-android"></i>
                    </div>
                    <div className="content">
                      <p>Download android app</p>
                      <p className="sub-text text-muted">1 hrs ago</p>
                    </div>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <div className="icon">
                      <i className="icon ion-logo-bitcoin"></i>
                    </div>
                    <div className="content">
                      <p>Bitcoin price is high now</p>
                      <p className="sub-text text-muted">2 hrs ago</p>
                    </div>
                  </a>
                  <a href="#!" className="dropdown-item">
                    <div className="icon">
                      <i className="icon ion-logo-usd"></i>
                    </div>
                    <div className="content">
                      <p>Payment completed</p>
                      <p className="sub-text text-muted">4 hrs ago</p>
                    </div>
                  </a>
                </div>
                <div className="dropdown-footer d-flex align-items-center justify-content-center">
                  <a href="#!">View all</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown header-img-icon">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="assets/img/avatar.svg" alt="avatar" />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header d-flex flex-column align-items-center">
                  <div className="figure mb-3">
                    <img src="assets/img/avatar.svg" alt="" />
                  </div>
                  <div className="info text-center">
                    <p className="name font-weight-bold mb-0">Vashudev</p>
                    <p className="email text-muted mb-3">vashu@gmail.com</p>
                  </div>
                </div>
                <div className="dropdown-body">
                  <ul className="profile-nav">
                    <li
                      className="nav-item"
                      onClick={() => navigate("/profile")}
                    >
                      <a className="nav-link">
                        <i className="icon ion-md-person"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="settings-wallet-light.html" className="nav-link">
                        <i className="icon ion-md-wallet"></i>
                        <span>My Wallet</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="settings-light.html" className="nav-link">
                        <i className="icon ion-md-settings"></i>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li className="nav-item" id="changeThemeLight">
                      <a href="#!" className="nav-link">
                        <i className="icon ion-md-sunny"></i>
                        <span>Theme</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="exchange-light.html" className="nav-link red">
                        <i className="icon ion-md-power"></i>
                        <span>Log Out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
