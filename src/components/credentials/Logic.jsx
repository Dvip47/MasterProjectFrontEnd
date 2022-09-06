import { postFetch } from "../../api/api";
import { FORGET, LOGIN, RESET, SIGNUP } from "../../constants/constants";
export const signupValidation = (input) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let message = "";
  let result = true;
  if (!input.name?.trim()?.length) {
    return { message: "Invalid name", result: false };
  }
  if (!regex.test(input?.email)) {
    return { message: "Invalid email", result: false };
  }
  if (input.passward?.trim()?.length < 5) {
    return { message: "Invalid passward", result: false };
  }
  if (!input.mobile?.trim()?.length < 11 && !input.mobile?.trim()?.length > 0) {
    return { message: "Invalid mobile number", result: false };
  }
  return { message, result };
};
export const loginValidation = (input) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let message = "";
  let result = true;
  if (!regex.test(input?.email)) {
    return { message: "Invalid email", result: false };
  }
  if (input.passward?.trim()?.length < 5) {
    return { message: "Invalid passward", result: false };
  }
  return { message, result };
};
export const forgetValidation = (input) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let message = "";
  let result = true;
  if (!regex.test(input?.email)) {
    return { message: "Invalid email", result: false };
  }
  return { message, result };
};
export const resetValidation = (input) => {
  let message = "";
  let result = true;
  console.log(input);
  if (input.passward?.trim()?.length < 5) {
    return { message: "Invalid passward", result: false };
  }
  if (input.passward !== input.cpassward) {
    return { message: "Passward does not match", result: false };
  }
  return { message, result };
};
export const signup = async (data) => {
  try {
    const res = await postFetch(SIGNUP, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const login = async (data) => {
  try {
    const res = await postFetch(LOGIN, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const forget = async (data) => {
  try {
    const res = await postFetch(FORGET, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const reset = async (data) => {
  try {
    const res = await postFetch(RESET, data);
    return res;
  } catch (error) {
    return error;
  }
};
