import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  updatePassward,
  updatePasswardValidation,
} from "../../../components/Profile/Logic";
import { AuthContext } from "../../../context/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { config } from "../../../constants/constants";
const ResetPassward = () => {
  const { userData } = useContext(AuthContext);
  const [input, setInput] = useState({
    opassward: "",
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
    const validate = updatePasswardValidation(input);
    if (validate.result) {
      const res = await updatePassward({ ...input, email: userData.email });
      if (res?.success) {
        setInput({
          opassward: "",
          passward: "",
        });
        toast.success("passward updated", config);
      } else {
        toast.error(res.message, config);
      }
    } else {
      toast.error(validate.message, config);
    }
  };
  return (
    <div className="card">
      <ToastContainer />
      <div className="card-body">
        <h5 className="card-title">Security Information</h5>
        <div className="settings-profile">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-md-6">
                <label htmlFor="currentPass">Current password</label>
                <input
                  id="currentPass"
                  type="text"
                  className="form-control"
                  placeholder="Enter your password"
                  name="opassward"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="newPass">New password</label>
                <input
                  id="newPass"
                  type="text"
                  className="form-control"
                  placeholder="Enter new password"
                  name="passward"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12">
                <input type="submit" defaultValue="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassward;
