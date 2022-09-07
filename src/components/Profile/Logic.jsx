import { postFetch } from "../../api/api";
import { UPDATEPASSWARD, UPDATEPROFILE } from "../../constants/constants";

export const updateProfileValidation = (input) => {
  let message = "";
  let result = true;
  if (!input?.name?.trim()?.length) {
    return { message: "Invalid name", result: false };
  }
  if (input?.mobile?.length < 10 && input?.mobile?.length < 10) {
    return { message: "Invalid mobile number", result: false };
  }
  return { message, result };
};
export const updatePasswardValidation = (input) => {
  let message = "";
  let result = true;
  if (input?.opassward?.length < 5 && input?.passward?.length < 5) {
    return { message: "Invalid passward", result: false };
  }
  return { message, result };
};
export const updateProfile = async (data) => {
  try {
    const res = await postFetch(UPDATEPROFILE, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const updatePassward = async (data) => {
  try {
    const res = await postFetch(UPDATEPASSWARD, data);
    return res;
  } catch (error) {
    return error;
  }
};
