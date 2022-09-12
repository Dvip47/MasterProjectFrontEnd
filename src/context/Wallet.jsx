import { useState, createContext } from "react";
export const WallteContext = createContext({
  setDesposite: () => {},
  deposite: "INR",
});
const WalletState = ({ children }) => {
  const [deposite, setDesposite] = useState({ symbol: "INR" });
  return (
    <WallteContext.Provider value={{ deposite, setDesposite }}>
      {children}
    </WallteContext.Provider>
  );
};
export default WalletState;
