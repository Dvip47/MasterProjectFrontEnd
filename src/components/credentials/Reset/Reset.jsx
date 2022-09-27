import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
import { config } from "../../../constants/constants";
import { reset, resetValidation } from "../Logic";
const Reset = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    passward: "",
    cpassward: "",
  });
  const location = useLocation();
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
    const validate = resetValidation(input);
    if (validate.result) {
      const res = await reset({
        token: location.pathname.replace("/travelRxReset", ""),
        passward: input.passward,
      });
      if (res?.success) {
        toast.success("Password changed successfully successfully", config);
        return navigate("/");
      } else {
        toast.error(res?.message, config);
      }
    } else {
      toast.error(validate.message, config);
    }
  };
  const title = "Reset your password";
  const inputData = [
    {
      type: "password",
      name: "passward",
      placeholder: "Set your password",
      label: "Password",
    },
    {
      type: "password",
      name: "cpassward",
      placeholder: "Confirm your password",
      label: "Confirm Password",
    },
  ];
  return (
    <>
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={title}
        inputData={inputData}
        type="reset"
      />
    </>
  );
};
export default Reset;
