import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch } from "../api/api";
import { ADMINDEPOSITEDATA, config, GETALLUSER } from "../constants/constants";
import { toast } from "react-toastify";
export const AdminContext = createContext({
  depositeAmountData: [],
  callDepositeAmountData: () => {},
  callAllUser: () => {},
  AllUserData: [],
});

const AdminState = ({ children }) => {
  const navigate = useNavigate();
  const [depositeAmountData, setDepositeAmountData] = useState([]);
  const [AllUserData, setAllUserData] = useState([]);

  const callDepositeAmountData = async () => {
    const res = await getFetch(ADMINDEPOSITEDATA);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    setDepositeAmountData(res.message);
  };
  const callAllUser = async () => {
    const res = await getFetch(GETALLUSER);
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
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
