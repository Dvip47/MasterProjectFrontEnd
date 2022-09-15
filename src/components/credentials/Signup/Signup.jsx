import React, { useState } from "react";
import { config, CREATEWALLET } from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../../assets/Credentials/Card";
import { signup, signupValidation } from "../Logic";
import Popup from "../../../assets/Credentials/Popup";
import { postFetch } from "../../../api/api";
const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    mobile: "",
    name: "",
    email: "",
    passward: "",
    code: 91,
  });
  const [pop, setPop] = useState(false);
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
    const validate = signupValidation(input);
    if (validate.result) {
      const res = await signup(input);
      if (res?.success) {
        setPop(true);
        const wallet = await postFetch(CREATEWALLET, { email: input.email });
        if (!wallet.success) {
          toast.error(wallet.message, config);
        }
      } else {
        toast.error("Mobile number already exists", config);
      }
    } else {
      toast.error(validate.message, config);
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
      {pop && <Popup navigate={navigate} setPop={setPop} />}
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
