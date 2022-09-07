import React, { useState, useContext } from "react";
import { config } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
import { login, loginValidation } from "../Logic";
import jwt from "jwt-decode";
import { AuthContext } from "../../../context/Auth";
const Login = () => {
  const { setUserData, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    passward: "",
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
    const validate = loginValidation(input);
    if (validate.result) {
      const res = await login(input);
      if (res?.success) {
        toast.success("Logged in successfully", config);
        setUserData(jwt(res.token)?.data);
        localStorage.setItem("token", res.token);
        setLogin(true);
        return navigate("/");
      } else {
        toast.error(res?.message, config);
      }
    } else {
      toast.error(validate.message, config);
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
      type: "passward",
      name: "passward",
      placeholder: "Enter Password",
      label: "Password",
    },
  ];
  return (
    <>
      <ToastContainer />
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={title}
        inputData={inputData}
        type="login"
      />
    </>
  );
};

export default Login;
