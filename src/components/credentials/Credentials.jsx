import React from "react";
import { useLocation } from "react-router-dom";
import Forget from "./Forget/Forget";
import Login from "./login/Login";
import Signup from "./Signup/Signup";
const Credentials = () => {
  const location = useLocation();
  return (
    <div id="credential">
      {location?.state === "login" && <Login />}
      {location?.state === "signup" && <Signup />}
      {location?.state === "forget" && <Forget />}
    </div>
  );
};

export default Credentials;
