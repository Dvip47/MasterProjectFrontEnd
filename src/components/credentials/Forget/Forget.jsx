import React, { useContext, useState } from "react";
import { config } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
import { forget, forgetValidation } from "../Logic";
const Forget = () => {
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
    const validate = forgetValidation(input);
    if (validate.result) {
      const res = await forget(input);
      if (res?.success) {
        toast.success(res.message, config);
        localStorage.setItem("token", res.token);
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
  ];
  return (
    <>
      <Card
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={title}
        inputData={inputData}
        type="forget"
      />
    </>
  );
};

export default Forget;
