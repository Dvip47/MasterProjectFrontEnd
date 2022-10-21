import React from "react";
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
  showOtp,
}) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <div class="authincation section-padding pb-2">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-xl-5 col-md-6">
            <div class="mini-logo text-center my-5">
              <a href="index.html">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            <div class="auth-form card">
              <div class="card-header justify-content-center">
                <h4 class="card-title">{title}</h4>
              </div>
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  {inputData?.map((data, index) => {
                    return (
                      <div class="form-group" key={index}>
                        <label>{data.label}</label>
                        <input
                          class="form-control"
                          type={data.type}
                          name={data.name}
                          placeholder={data.placeholder}
                          onChange={handleChange}
                        />
                      </div>
                    );
                  })}
                  {type == "login" && showOtp && (
                    <div class="form-group">
                      <label>OTP</label>
                      <input
                        class="form-control"
                        type="number"
                        name="otp"
                        placeholder="Enter OTP"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  {type == "signup" && (
                    <div className="row px-3 mob-text-input">
                      <label>Enter Mobile Number</label>
                      <div className="mob-textbox">
                        <PhoneInput
                          inputStyle={{
                            pointerEvents: "none",
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                          }}
                          enableSearch={true}
                          country="in"
                          onChange={(data) =>
                            setInput((prev) => {
                              return { ...prev, code: data };
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
                          className="react-tel-inputbox"
                        />
                      </div>
                    </div>
                  )}
                  {type == "login" && (
                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="form-group mb-0">
                        <label class="toggle">
                          <input class="toggle-checkbox" type="checkbox" />
                          <span class="toggle-switch"></span>
                          <span class="toggle-label">Remember me</span>
                        </label>
                      </div>
                      <a
                        onClick={() =>
                          navigate("/credential", { state: "forget" })
                        }
                        className="form-group mb-0"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  )}
                  <div className="text-center">
                    <button type="submit" class="btn btn-success btn-block">
                      {type == "forget"
                        ? "Send"
                        : type == "login"
                        ? "Login"
                        : type == "reset"
                        ? "Reset"
                        : "Sign up"}
                    </button>
                  </div>
                </form>

                {type == "forget" ? (
                  <div class="new-account mt-3">
                    <small className="font-weight-bold">
                      Back to
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
                  <div class="new-account mt-3">
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
                  <div class="new-account mt-3">
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
        </div>
      </div>
    </div>
  );
};

export default Card;
