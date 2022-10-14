import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { postFetch } from "../api/api";
import { config, GETUSERBANK } from "../constants/constants";

export const UserContext = createContext({
  callUserBank: () => {},
  userBank: [],
});

const UserState = ({ children }) => {
  const navigate = useNavigate();
  const [userBank, setUserBank] = useState([]);
  const callUserBank = async (data) => {
    const res = await postFetch(GETUSERBANK, { email: data.email });
    if (res == 401) {
      toast.error("Session Over", config);
      localStorage.removeItem("token");
      navigate("/credential", { state: "login" });
    }
    if (res.success) {
      setUserBank(res.message);
    }
  };

  return (
    <UserContext.Provider value={{ callUserBank, userBank }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserState;
