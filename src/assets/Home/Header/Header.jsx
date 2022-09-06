import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const navList = [
    { title: "Market", location: "/", state: "login" },
    { title: "Fee", location: "/", state: "login" },
    { title: "Exchange", location: "/exchange", state: "exchange" },
    { title: "Docs", location: "/", state: "login" },
    { title: "List token", location: "/", state: "login" },
    { title: "Login", location: "/credential", state: "login" },
  ];
  return (
    <header className="header-section clearfix">
      {/* <div id="preloder">
        <div className="loader"></div>
      </div> */}
      <div className="container-fluid">
        <a
          href="javascript:void(0)"
          className="site-logo"
          onClick={() => navigate("/")}
        >
          <img src="img/logo.png" alt="" />
        </a>
        <div className="responsive-bar" onClick={() => navigate("/")}>
          <i className="fa fa-bars"></i>
        </div>
        <a
          href="javascript:void(0)"
          className="user"
          onClick={() => navigate("/")}
        >
          <i className="fa fa-user"></i>
        </a>
        <a
          href="javascript:void(0)"
          className="site-btn"
          onClick={() => navigate(`/credential`, { state: "signup" })}
        >
          Sign Up Free
        </a>
        <nav className="main-menu">
          <ul className="menu-list">
            {navList.map((data, index) => {
              return (
                <li key={index}>
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      navigate(`${data.location}`, { state: data.state })
                    }
                  >
                    {data.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
