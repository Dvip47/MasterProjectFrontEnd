import React, { useContext, useState } from "react";
import { config, LOGIN } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
const Login = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [input, setInput] = useState();
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
    console.log(input);
    if (true) {
      setToken();
      return navigate("/");
    } else {
      toast.error("Invalid credentials", config);
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
