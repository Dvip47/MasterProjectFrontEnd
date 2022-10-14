import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetchbByImg, postFetch } from "../../api/api";
import {
  updatePassward,
  updatePasswardValidation,
  updateProfile,
  updateProfileValidation,
} from "../../components/Profile/Logic";
import { config, PROFILEDATA, UPDATEPROFILE } from "../../constants/constants";
import { AuthContext } from "../../context/Auth";
import jwt from "jwt-decode";
const UserProfile = () => {
  const { userData, setUserData, setLoader } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    callProfile();
  }, []);
  const callProfile = async () => {
    let token = localStorage.getItem("token");
    let user = jwt(token);
    const res = await postFetch(PROFILEDATA, { email: user?.data?.email });
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
  // user data
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
  // reset password
  const [input1, setInput1] = useState({
    opassward: "",
    passward: "",
  });
  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setInput1((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const validate = updatePasswardValidation(input);
    if (validate.result) {
      const res = await updatePassward({ ...input1, email: userData.email });
      if (res == 401) {
        toast.error("Session Over", config);
        localStorage.removeItem("token");
        navigate("/credential", { state: "login" });
      }
      if (res?.success) {
        setInput1({
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
    <div className="col-xl-12">
      <div className="row">
        {/* img  */}
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">User Profile</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="+"
                      name="name"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-xl-12">
                    <div className="media align-items-center mb-3">
                      <img
                        className="mr-3 rounded-circle mr-0 mr-sm-3"
                        src={input?.profileImg}
                        width="50"
                        height="50"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="mb-0">{input?.name}</h5>
                        <p className="mb-0">Max file size is 2mb</p>
                      </div>
                    </div>
                    <div
                      className="file-upload-wrapper"
                      data-text="Change Photo"
                    >
                      <input
                        name="file-upload-field"
                        type="file"
                        className="file-upload-field"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          setGetExactImage(true);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success waves-effect px-4">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* password */}
        <div className="col-xl-6 col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Reset Passward</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit1}>
                <div className="form-row">
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">Old Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="**********"
                      name="opassward"
                      onChange={handleChange1}
                      value={input1.opassward}
                    />
                  </div>
                  <div className="form-group col-xl-12">
                    <label className="mr-sm-2">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="**********"
                      name="passward"
                      onChange={handleChange1}
                      value={input1.passward}
                    />
                    <p className="mt-2 mb-0">Reset Your Password</p>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-success waves-effect px-4">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* all details */}
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Personal Information</h4>
            </div>
            <div className="card-body">
              <form
                method="post"
                name="myform"
                className="personal_validate"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={input?.name}
                      name="fullname"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={input?.email}
                      name="email"
                      disabled
                    />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Mobile No.</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={input?.mobile}
                      name="mobile"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-xl-6 col-md-6">
                    <label className="mr-sm-2">Country</label>
                    <select className="form-control" name="country">
                      <option value="India">India</option>
                    </select>
                  </div>

                  <div className="form-group col-12">
                    <button className="btn btn-success px-4">Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
