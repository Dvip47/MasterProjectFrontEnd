import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddBank from "./components/Admin/Bank/AddBank/AddBank";
import Credentials from "./components/credentials/Credentials";
import Reset from "./components/credentials/Reset/Reset";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Transaction from "./components/Transaction/Transaction";
import { AuthContext } from "./context/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Deposite from "./components/Admin/Deposite/Deposite";
function App() {
  const { loader } = useContext(AuthContext);
  return (
    <>
      <ToastContainer />
      <div id="preloder" style={{ display: loader ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/exchange" element={<Exchange />} />
        <Route exact path="/credential" element={<Credentials />} />
        <Route exact path="/transaction" element={<Transaction />} />
        <Route exact path="/travelRxReset:token" element={<Reset />} />
        <Route exact path="/adminBank" element={<AddBank />} />
        <Route exact path="/admin/deposite" element={<Deposite />} />
      </Routes>
    </>
  );
}
export default App;
