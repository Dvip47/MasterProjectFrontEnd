import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const AdminSideBar = () => {
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
                  title="Home"
                >
                  <span>
                    <i className="mdi mdi-view-dashboard"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/user", { state: "user" })}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="User"
                >
                  <span>
                    <i className="mdi mdi-face-profile"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() =>
                    navigate("/transaction", { state: "deposite" })
                  }
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Transaction"
                >
                  <span>
                    <i className="mdi mdi-database-plus"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/bank", { state: "bank" })}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Bank"
                >
                  <span>
                    <i className="mdi mdi-bank"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => navigate("/coin")}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Coin"
                >
                  <span>
                    <i className="mdi mdi-bullseye"></i>
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

export default AdminSideBar;
