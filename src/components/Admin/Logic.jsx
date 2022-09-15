import { postFetch } from "../../api/api";
import { UPDATEDEPOSITERECIEPT } from "../../constants/constants";

export const updateDeposite = async (data) => {
  const res = await postFetch(UPDATEDEPOSITERECIEPT, data);
  return res;
};
