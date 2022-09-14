import { useState } from "react";
import { createContext } from "react";
import { getFetch } from "../api/api";
import { ADMINDEPOSITEDATA, GETALLUSER } from "../constants/constants";

export const AdminContext = createContext({
  depositeAmountData: [],
  callDepositeAmountData: () => {},
  callAllUser: () => {},
  AllUserData: [],
});

const AdminState = ({ children }) => {
  const [depositeAmountData, setDepositeAmountData] = useState([]);
  const [AllUserData, setAllUserData] = useState([]);

  const callDepositeAmountData = async () => {
    const res = await getFetch(ADMINDEPOSITEDATA);
    setDepositeAmountData(res.message);
  };
  const callAllUser = async () => {
    const res = await getFetch(GETALLUSER);
    setAllUserData(res.message);
  };
  return (
    <AdminContext.Provider
      value={{
        depositeAmountData,
        callDepositeAmountData,
        callAllUser,
        AllUserData,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminState;
