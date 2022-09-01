import React, { useState } from "react";
import { config } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({});
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
      return navigate("/");
    } else {
      toast.error("Invalid credentials", config);
    }
  };
  const title = "Welcome to the TravelRx";
  const inputData = [
    {
      type: "text",
      name: "name",
      placeholder: "Enter Name",
      label: "User Name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Enter a valid email",
      label: "Email address",
    },
    {
      type: "passward",
      name: "passward",
      placeholder: "Enter password",
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
        type="signup"
        input={input}
        setInput={setInput}
      />
    </>
  );
};

export default Signup;
