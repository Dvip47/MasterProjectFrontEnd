import { postFetch } from "../../api/api";
import { SIGNUP } from "../../constants/constants";
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
  if (!input.passward?.trim()?.length > 5) {
    return { message: "Invalid passward", result: false };
  }
  if (!input.mobile?.trim()?.length < 11 && !input.mobile?.trim()?.length > 0) {
    return { message: "Invalid mobile number", result: false };
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
