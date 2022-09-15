import React from "react";
import { useNavigate } from "react-router-dom";
const AdminHeader = () => {
  const navigate = useNavigate();
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
            <li className="nav-item dropdown">
              <p
                className="nav-link "
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => navigate("/")}
              >
                Home
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link "
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => navigate("/users")}
              >
                Users
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => navigate("/")}
              >
                Transactions
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => navigate("/addbank")}
              >
                Bank
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
