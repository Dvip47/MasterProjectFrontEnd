import React, { useState, useContext } from "react";
import { config } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
import { login, loginValidation, verifyOtp } from "../Logic";
import jwt from "jwt-decode";
import { AuthContext } from "../../../context/Auth";
const Login = () => {
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    passward: "",
    otp: "##",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showOtp) {
      const res = await verifyOtp(input);
      if (res?.success) {
        toast.success("Logged in successfully", config);
        setUserData(jwt(res.token)?.data);
        localStorage.setItem("token", res.token);
        if (res.message.role != "user") {
          return navigate("/", { state: "admin", replace: true });
        } else {
          return navigate("/", { replace: true });
        }
      } else {
        toast.error(res?.message, config);
      }
    } else {
      const validate = loginValidation(input);
      if (validate.result) {
        const res = await login(input);
        if (res?.success) {
          if (res.message.security == "none") {
            toast.success("Logged in successfully", config);
            setUserData(jwt(res.token)?.data);
            localStorage.setItem("token", res.token);
            if (res.message.role !== "user") {
              return navigate("/", { state: "admin", replace: true });
            } else {
              return navigate("/", { replace: true });
            }
          } else {
            toast.success(res?.message, config);
            setShowOtp(true);
          }
        } else {
          toast.error(res?.message, config);
        }
      } else {
        toast.error(validate.message, config);
      }
    }
  };
  const title = "Welcome Back to TravelRx";
  const inputData = [
    {
      type: "email",
      name: "email",
      placeholder: "Enter a valid email",
      label: "Email Address",
    },
    {
      type: "password",
      name: "passward",
      placeholder: "Enter Password",
      label: "Password",
    },
  ];
  const [showOtp, setShowOtp] = useState(false);
  return (
    <>
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={title}
        inputData={inputData}
        type="login"
        showOtp={showOtp}
      />
    </>
  );
};

export default Login;
