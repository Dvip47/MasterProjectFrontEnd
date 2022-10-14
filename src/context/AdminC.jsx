import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { getFetch, postFetch } from "../api/api";
import {
  ADMINDEPOSITEDATA,
  config,
  GETLEDGER,
  GETALLUSER,
} from "../constants/constants";
import { toast } from "react-toastify";
export const AdminContext = createContext({
  depositeAmountData: [],
  callDepositeAmountData: () => {},
  callAllUser: () => {},
  AllUserData: [],
  pagination: {},
  handlePagination: () => {},
  getLedger: () => {},
  allTransactionForAdmin: [],
});

const AdminState = ({ children }) => {
  const navigate = useNavigate();
  const [depositeAmountData, setDepositeAmountData] = useState([]);
  const [AllUserData, setAllUserData] = useState([]);
  const [allTransactionForAdmin, setAllTransactionForAdmin] = useState([]);
  const [pagination, setPagination] = useState({
    start: 0,
    end: 10,
    limit: 10,
  });
  const getLedger = async () => {
    const res = await getFetch(GETLEDGER);
    if (res.success) {
      setAllTransactionForAdmin(res.message);
    }
  };
  const handlePagination = (type, array) => {
    if (type == "next") {
      if (pagination.start > 0) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start + pagination.limit,
            end: pagination.end + pagination.limit,
          };
        });
      }
    } else {
      if (pagination.end < array?.length) {
        setPagination((prev) => {
          return {
            ...prev,
            start: pagination.start - pagination.limit,
            end: pagination.end - pagination.limit,
          };
        });
      }
    }
  };
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
        handlePagination,
        pagination,
        getLedger,
        allTransactionForAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminState;
