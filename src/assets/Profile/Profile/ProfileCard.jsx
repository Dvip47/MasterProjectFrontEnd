import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  config,
  PROFILEDATA,
  UPDATEPROFILE,
} from "../../../constants/constants";
import "react-toastify/dist/ReactToastify.css";
import {
  updateProfile,
  updateProfileValidation,
} from "../../../components/Profile/Logic";
import { postFetch, postFetchbByImg } from "../../../api/api";
import jwt from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import { useNavigate } from "react-router-dom";
const ProfileCard = () => {
  const { setUserData, setLoader } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    callProfile();
  }, []);
  const callProfile = async () => {
    let token = localStorage.getItem("token");
    let user = jwt(token);
    const res = await postFetch(PROFILEDATA, { email: user.data.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setInput({
        name: res.message[0].name,
        profileImg: res.message[0].profileImg,
        mobile: res.message[0].mobile,
        email: res.message[0].email,
      });
      setUserData(res.message[0]);
    } else {
      toast.error(res.message, config);
    }
  };
  const [input, setInput] = useState({
    name: "",
    email: "",
    profileImg: "",
    mobile: "",
  });
  const [file, setFile] = useState({});
  const [getExactImage, setGetExactImage] = useState(false);
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
    setLoader(true);
    const validate = updateProfileValidation(input);
    if (validate.result) {
      if (getExactImage) {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("name", input.name);
        formData.append("mobile", input.mobile);
        formData.append("email", input.email);
        const res = await postFetchbByImg(UPDATEPROFILE, formData);
        if (res == 401) {
          toast.error("Session Over", config);
          localStorage.removeItem("token");
          navigate("/credential", { state: "login" });
        }
        if (res?.success) {
          toast.success("Profile updated", config);
          callProfile();
        } else {
          toast.error(res.message, config);
        }
      } else {
        const res = await updateProfile(input);
        if (res == 401) {
          toast.error("Session Over", config);
          localStorage.removeItem("token");
          navigate("/credential", { state: "login" });
        }
        if (res?.success) {
          toast.success("Profile updated", config);
          callProfile();
        } else {
          toast.error(res.message, config);
        }
      }
    } else {
      toast.error(validate.message, config);
    }
    setLoader(false);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">General Information</h5>
        <div className="settings-profile">
          <form onSubmit={handleSubmit}>
            <img
              src={input.profileImg}
              alt="avatar"
              style={{ width: "100px", height: "100px", borderRadius: "50px" }}
            />
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="fileUpload"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setGetExactImage(true);
                }}
              />
              <label className="custom-file-label" htmlFor="fileUpload">
                Choose avatar
              </label>
            </div>
            <div className="form-row mt-4">
              <div className="col-md-6">
                <label htmlFor="formFirst">First name</label>
                <input
                  id="formFirst"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="emailAddress">Email</label>
                <input
                  id="emailAddress"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  defaultValue={input?.email}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber">Phone</label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={input?.mobile}
                  name="mobile"
                  onChange={handleChange}
                  maxLength={10}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="selectLanguage">Language</label>
                <select id="selectLanguage" className="custom-select">
                  <option defaultValue="Vashu">English</option>
                </select>
              </div>

              <div className="col-md-12">
                <input type="submit" value="Update" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
