import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const InnerSideBar = () => {
  const navigate = useNavigate();
  const { userData } = useContext(AuthContext);
  return (
    <>
      {userData?.email ? (
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <a
                  onClick={() => navigate("/")}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Trade"
                >
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/exchange")}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Exchange"
                >
                  <span>
                    <i className="mdi mdi-tumblr-reblog"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/profile", { state: "profile" })}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Setting"
                >
                  <span>
                    <i className="mdi mdi-face-profile"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/account", { state: "overview" })}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Account"
                >
                  <span>
                    <i className="mdi mdi-face-profile"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="menu">
            <ul>
              <li>
                <a
                  onClick={() => navigate("/")}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Home"
                >
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/exchange")}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Exchange"
                >
                  <span>
                    <i className="mdi mdi-tumblr-reblog"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default InnerSideBar;
