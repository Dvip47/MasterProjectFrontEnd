import { useState } from "react";
import { createContext } from "react";
import { getFetch, postFetch } from "../api/api";
import {
  ADMINDEPOSITEDATA,
  GETALLDEPOSITETRANSACTION,
  GETALLUSER,
} from "../constants/constants";

export const TransactionContext = createContext({
  deposites: [],
  callDeposite: () => {},
});

const TrasactionState = ({ children }) => {
  const [deposites, setDeposite] = useState([]);
  const callDeposite = async (data) => {
    const res = await postFetch(GETALLDEPOSITETRANSACTION, {
      email: data.email,
    });
    if (res.success) {
      setDeposite(res.message);
    }
  };
  return (
    <TransactionContext.Provider value={{ deposites, callDeposite }}>
      {children}
    </TransactionContext.Provider>
  );
};
export default TrasactionState;
