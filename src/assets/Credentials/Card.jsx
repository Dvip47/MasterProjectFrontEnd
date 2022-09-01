import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/bootstrap.css";
import "./card.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import { useEffect } from "react";
const Card = ({
  handleChange,
  handleSubmit,
  title,
  inputData = [],
  type,
  setInput,
}) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 pt-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6 d-xs-none">
            <div className="card1 pb-5">
              <div className="row">
                <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row mb-4 px-3">
                <h3 className="mb-0 mr-4 mt-2">{title}</h3>
              </div>
              <div className="row px-3 mb-4">
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <form onSubmit={handleSubmit}>
                {inputData?.map((data, index) => {
                  return (
                    <div className="row px-3" key={index}>
                      <label className="mb-1">
                        <h6 className="mb-0 text-sm">{data.label}</h6>
                      </label>
                      <input
                        className="mb-4"
                        type={data.type}
                        name={data.name}
                        placeholder={data.placeholder}
                        onChange={handleChange}
                      />
                    </div>
                  );
                })}
                {type == "signup" && (
                  <div className="row px-3 ">
                    <label className="mb-1">
                      <h6 className="mb-0 text-sm">Enter Mobile Number</h6>
                    </label>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PhoneInput
                        inputStyle={{ width: "60%" }}
                        enableSearch={true}
                        country="in"
                        onChange={(data) =>
                          setInput((prev) => {
                            return { ...prev, countryCode: data };
                          })
                        }
                        countryCodeEditable={false}
                      />
                      <input
                        type="number"
                        name="mobile"
                        placeholder="Enter mobile number"
                        onChange={handleChange}
                        maxLength={10}
                        max={10}
                      />
                    </div>
                  </div>
                )}
                {type == "login" && (
                  <div className="row px-3 mb-4">
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <input
                        id="chk1"
                        type="checkbox"
                        name="chk"
                        className="custom-control-input"
                      />
                      <label
                        htmlFor="chk1"
                        className="custom-control-label text-sm"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      onClick={() =>
                        navigate("/credential", { state: "forget" })
                      }
                      className="ml-auto mb-0 text-sm"
                    >
                      Forgot Password?
                    </a>
                  </div>
                )}
                <div className="row mb-3 px-3 mt-2">
                  <button type="submit" className="btn btn-blue text-center">
                    {type == "forget"
                      ? "Send"
                      : type == "login"
                      ? "Login"
                      : "Sign up"}{" "}
                  </button>
                </div>
              </form>
              {type == "forget" ? (
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Back to{" "}
                    <a
                      className="text-danger"
                      onClick={() =>
                        navigate("/credential", { state: "login" })
                      }
                    >
                      Login
                    </a>
                  </small>
                </div>
              ) : type == "login" ? (
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Don't have an account?{" "}
                    <a
                      className="text-danger"
                      onClick={() =>
                        navigate("/credential", { state: "signup" })
                      }
                    >
                      Register
                    </a>
                  </small>
                </div>
              ) : (
                <div className="row mb-4 px-3">
                  <small className="font-weight-bold">
                    Already have an account ?{" "}
                    <a
                      className="text-danger"
                      onClick={() =>
                        navigate("/credential", { state: "login" })
                      }
                    >
                      Login
                    </a>
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-blue py-3">
          <div className="row px-3 justify-content-between">
            <small className="ml-4 ml-sm-5 mb-2">
              Copyright &copy; 2019. All rights reserved.
            </small>
            <div className="social-contact ml-4 ml-sm-auto text-right">
              <span className="fa fa-facebook mr-4 text-sm"></span>
              <span className="fa fa-google-plus mr-4 text-sm"></span>
              <span className="fa fa-linkedin mr-4 text-sm"></span>
              <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
