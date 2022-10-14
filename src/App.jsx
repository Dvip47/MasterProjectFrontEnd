import { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Credentials from "./components/credentials/Credentials";
import Reset from "./components/credentials/Reset/Reset";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import { AuthContext } from "./context/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import User from "./components/Admin/Users/User";
import Admin from "./components/Admin/Admin";
import Coins from "./components/Admin/Coins/Coins";
import Assets from "./components/Assets/Assets";
import AdminTransaction from "./components/Admin/Transaction/Transaction";
import Account from "./components/Account/Account";
import Bank from "./components/Admin/Bank/Bank";
function App() {
  const { loader } = useContext(AuthContext);
  const location = useLocation();
  const { userData } = useContext(AuthContext);
  return (
    <>
      <ToastContainer />
      <div id="preloder" style={{ display: loader ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
      {userData?.role == "admin" ||
      (location.pathname == "/" && location.state == "admin") ? (
        <>
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<Admin />} />
            <Route exact path="/user" element={<User />} />
            <Route exact path="/bank" element={<Bank />} />
            <Route exact path="/coin" element={<Coins />} />
            <Route exact path="/transaction" element={<AdminTransaction />} />
          </Routes>
        </>
      ) : location.pathname == "/credential" ? (
        <Routes>
          <Route exact path="/credential" element={<Credentials />} />
        </Routes>
      ) : (
        <>
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/exchange" element={<Exchange />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/travelRxReset:token" element={<Reset />} />
            <Route exact path="/assets" element={<Assets />} />
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
