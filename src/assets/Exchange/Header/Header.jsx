import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="edgtf-page-header">
      <div className="edgtf-menu-area edgtf-menu-right">
        <div className="container">
          <div className="edgtf-vertical-align-containers">
            <div className="edgtf-position-left-inner">
              <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0 pt-1 pb-1">
                <div className="edgtf-logo-wrapper">
                  <a
                    className="navbar-brand"
                    href="#"
                    style={{ height: "37px" }}
                  >
                    <img
                      src="assets/images/header-logo-dark.png"
                      width="182"
                      height="54"
                      alt="logo"
                    />
                  </a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav4"
                  aria-controls="navbarNav4"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav4">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" onClick={() => navigate("/")}>
                        Market
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate("/")}>
                        Fee
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate("/")}>
                        Resolution
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate("/")}>
                        Exchange
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Buy / Sell
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={() => navigate("/")}>
                        Docs
                      </a>
                    </li>
                  </ul>

                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={() =>
                          navigate("/credential", { state: "login" })
                        }
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link sign-btn"
                        onClick={() =>
                          navigate("/credential", { state: "signup" })
                        }
                      >
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-bullhorn"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
