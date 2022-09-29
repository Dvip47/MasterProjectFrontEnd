import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";

const Header = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  return (
    <header className="border-bottom">
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
            <li className="nav-item ">
              <a className="nav-link " href="#" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#"
                onClick={() => navigate("/exchange")}
              >
                Exchange
              </a>
            </li>

            {userData?.email && (
              <>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link "
                    href="#"
                    onClick={() => navigate("/assets")}
                  >
                    Assets
                  </a>
                </li>
                <li
                  className="nav-item dropdown"
                  onClick={() => navigate("/transaction")}
                >
                  <a
                    className="nav-link "
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Transactions
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
                    Dashboard
                  </a>
                  <div className="dropdown-menu">
                    <a
                      className="dropdown-item"
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="settings-wallet-light.html"
                    >
                      Wallet
                    </a>
                    <a className="dropdown-item" href="settings-light.html">
                      Settings
                    </a>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
