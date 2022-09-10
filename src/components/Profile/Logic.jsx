import { postFetch } from "../../api/api";
import {
  BANKDETAIL,
  KYC,
  SECURITY,
  UPDATEPASSWARD,
  UPDATEPROFILE,
  UTR,
  VERIFY,
  VERIFYSECURITY,
} from "../../constants/constants";

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
export const kycValidation = (input) => {
  let message = "";
  let result = true;
  if (input?.pan == undefined || input?.pan == null || input?.pan == "") {
    return { message: "Please select Pan Card", result: false };
  }
  if (
    input?.adharFront == undefined ||
    input?.adharFront == null ||
    input?.adharFront == ""
  ) {
    return { message: "Please select Adhar Card Front", result: false };
  }
  if (
    input?.adharBack == undefined ||
    input?.adharBack == null ||
    input?.adharBack == ""
  ) {
    return { message: "Please select Adhar Card Back", result: false };
  }
  if (
    input?.uniqueNumber == undefined ||
    input?.uniqueNumber == null ||
    input?.uniqueNumber == ""
  ) {
    return { message: "Please select Selfie Image", result: false };
  }
  if (
    input?.panNumber.trim().length > 12 ||
    input?.panNumber.trim().length < 12
  ) {
    return { message: "Invalid Pan Card Number", result: false };
  }
  if (
    input?.adharNumber.trim().length > 16 ||
    input?.adharNumber.trim().length < 16
  ) {
    return { message: "Invalid Adhar Card Number", result: false };
  }
  return { message, result };
};
export const bankValidation = (input) => {
  let message = "";
  let result = true;
  let regex = new RegExp("[0-9]");
  if (input?.bankName?.trim().length < 3) {
    return { message: "Invalid Bank Name", result: false };
  }
  if (input?.accountNumber?.length != 14 || !regex.test(input?.accountNumber)) {
    return { message: "Invalid Bank Account", result: false };
  }
  if (input?.accountNumber !== input?.confirmAccountNumber) {
    return { message: "Account Number does not matched", result: false };
  }
  if (input?.ifscCode?.trim().length < 8) {
    return { message: "Invalid IFSC code", result: false };
  }
  return { message, result };
};
export const utrValidation = (input) => {
  let message = "";
  let result = true;
  if (input?.length < 5) {
    return { message: "Invalid UTR Number", result: false };
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
export const kyc = async (data) => {
  try {
    const res = await postFetch(KYC, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const bankDeatils = async (data) => {
  try {
    const res = await postFetch(BANKDETAIL, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const utrSubmit = async (data) => {
  try {
    const res = await postFetch(UTR, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const verify = async (data) => {
  try {
    const res = await postFetch(VERIFY, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const security = async (data) => {
  try {
    const res = await postFetch(SECURITY, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const verifySecurity = async (data) => {
  try {
    const res = await postFetch(VERIFYSECURITY, data);
    return res;
  } catch (error) {
    return error;
  }
};
