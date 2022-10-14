import React, { createContext, useEffect, useState } from "react";
import jwt from "jwt-decode";
import { config, PROFILEDATA } from "../constants/constants";
import { postFetch } from "../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({
  userData: {},
  setUserData: () => {},
  login: "",
  setLogin: () => {},
  setLoader: () => {},
  loader: false,
  setKycPage: () => {},
  kycPage: "",
  callProfile: () => {},
});
const Auth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getUserDataIFLogin();
  }, []);
  const getUserDataIFLogin = () => {
    let res = localStorage.getItem("token");
    if (res) {
      let user = jwt(res);
      setUserData(user?.data);
      setLogin(true);
    }
  };
  const [kycPage, setKycPage] = useState("");
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const callProfile = async () => {
    let resp = localStorage.getItem("token");
    if (resp) {
      let user = jwt(resp);
      const res = await postFetch(PROFILEDATA, { email: user?.data?.email });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res.success) {
        setUserData(res.message[0]);
      } else {
        toast.error(res.message, config);
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        login,
        setLogin,
        loader,
        setLoader,
        kycPage,
        setKycPage,
        callProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Auth;
