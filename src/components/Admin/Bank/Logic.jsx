import { postFetch } from "../../../api/api";
import { ADDADMINBANK, UPDATEADMINBANK } from "../../../constants/constants";

export const addBankValidation = (input) => {
  let regex = new RegExp("^[A-Z]{4}0[A-Z0-9]{6}$");
  let message = "";
  let result = true;
  if (input?.bankName?.trim()?.length < 3) {
    return { message: "Invalid Bank Name", result: false };
  }
  if (input?.accountNumber?.length < 16) {
    return { message: "Invalid Account number", result: false };
  }
  if (input?.ifscCode?.length < 9 && !regex.test(input.ifscCode)) {
    return { message: "Invalid IFSC code", result: false };
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
