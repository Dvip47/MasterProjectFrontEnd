import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="exchange-light.html">
          <img src="assets/img/logo-dark.svg" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#headerMenu"
          aria-controls="headerMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="icon ion-md-menu"></i>
        </button>

        <div class="collapse navbar-collapse" id="headerMenu">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link "
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
            <li class="nav-item dropdown">
              <a
                class="nav-link "
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Exchange
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Markets
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="markets-light.html">
                  Markets
                </a>
                <a class="dropdown-item" href="market-capital-light.html">
                  Markets Line
                </a>
                <a class="dropdown-item" href="market-capital-bar-light.html">
                  Markets Bar
                </a>
                <a class="dropdown-item" href="market-overview-light.html">
                  Market Overview
                </a>
                <a class="dropdown-item" href="market-screener-light.html">
                  Market Screener
                </a>
                <a class="dropdown-item" href="market-crypto-light.html">
                  Market Crypto
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dashboard
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="settings-profile-light.html">
                  Profile
                </a>
                <a class="dropdown-item" href="settings-wallet-light.html">
                  Wallet
                </a>
                <a class="dropdown-item" href="settings-light.html">
                  Settings
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Others
              </a>
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  onClick={() => navigate("/transaction")}
                >
                  Transaction History
                </a>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item header-custom-icon">
              <a class="nav-link" href="#" id="clickFullscreen">
                <i class="icon ion-md-expand"></i>
              </a>
            </li>
            <li class="nav-item dropdown header-custom-icon">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="icon ion-md-notifications"></i>
                <span class="circle-pulse"></span>
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-header d-flex align-items-center justify-content-between">
                  <p class="mb-0 font-weight-medium">6 New Notifications</p>
                  <a href="#!" class="text-muted">
                    Clear all
                  </a>
                </div>
                <div class="dropdown-body">
                  <a href="#!" class="dropdown-item">
                    <div class="icon">
                      <i class="icon ion-md-lock"></i>
                    </div>
                    <div class="content">
                      <p>Account password change</p>
                      <p class="sub-text text-muted">5 sec ago</p>
                    </div>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <div class="icon">
                      <i class="icon ion-md-alert"></i>
                    </div>
                    <div class="content">
                      <p>Solve the security issue</p>
                      <p class="sub-text text-muted">10 min ago</p>
                    </div>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <div class="icon">
                      <i class="icon ion-logo-android"></i>
                    </div>
                    <div class="content">
                      <p>Download android app</p>
                      <p class="sub-text text-muted">1 hrs ago</p>
                    </div>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <div class="icon">
                      <i class="icon ion-logo-bitcoin"></i>
                    </div>
                    <div class="content">
                      <p>Bitcoin price is high now</p>
                      <p class="sub-text text-muted">2 hrs ago</p>
                    </div>
                  </a>
                  <a href="#!" class="dropdown-item">
                    <div class="icon">
                      <i class="icon ion-logo-usd"></i>
                    </div>
                    <div class="content">
                      <p>Payment completed</p>
                      <p class="sub-text text-muted">4 hrs ago</p>
                    </div>
                  </a>
                </div>
                <div class="dropdown-footer d-flex align-items-center justify-content-center">
                  <a href="#!">View all</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown header-img-icon">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="assets/img/avatar.svg" alt="avatar" />
              </a>
              <div class="dropdown-menu">
                <div class="dropdown-header d-flex flex-column align-items-center">
                  <div class="figure mb-3">
                    <img src="assets/img/avatar.svg" alt="" />
                  </div>
                  <div class="info text-center">
                    <p class="name font-weight-bold mb-0">Vashudev</p>
                    <p class="email text-muted mb-3">vashu@gmail.com</p>
                  </div>
                </div>
                <div class="dropdown-body">
                  <ul class="profile-nav">
                    <li class="nav-item" onClick={() => navigate("/profile")}>
                      <a class="nav-link">
                        <i class="icon ion-md-person"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="settings-wallet-light.html" class="nav-link">
                        <i class="icon ion-md-wallet"></i>
                        <span>My Wallet</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="settings-light.html" class="nav-link">
                        <i class="icon ion-md-settings"></i>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li class="nav-item" id="changeThemeLight">
                      <a href="#!" class="nav-link">
                        <i class="icon ion-md-sunny"></i>
                        <span>Theme</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="exchange-light.html" class="nav-link red">
                        <i class="icon ion-md-power"></i>
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
