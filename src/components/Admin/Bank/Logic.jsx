import { postFetch } from "../../../api/api";
import { ADDADMINBANK, UPDATEADMINBANK } from "../../../constants/constants";

export const addBankValidation = (input) => {
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
export const addBank = async (data) => {
  const res = await postFetch(ADDADMINBANK, data);
  return res;
};
export const updateBank = async (data) => {
  const res = await postFetch(UPDATEADMINBANK, data);
  return res;
};
