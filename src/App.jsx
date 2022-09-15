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
import User from "./components/Admin/Users/User";
import AdminHeader from "./assets/admin/Header/AdminHeader";
import Admin from "./components/Admin/Admin";
function App() {
  const { loader, findUser } = useContext(AuthContext);
  return (
    <>
      <ToastContainer />
      <div id="preloder" style={{ display: loader ? "block" : "none" }}>
        <div className="loader"></div>
      </div>
      {findUser == "user" ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route exact path="/credential" element={<Credentials />} />
          <Route exact path="/transaction" element={<Transaction />} />
          <Route exact path="/travelRxReset:token" element={<Reset />} />
        </Routes>
      ) : (
        <>
          <AdminHeader />
          <Routes>
            <Route exact path="/" element={<Admin />} />
            <Route exact path="/users" element={<User />} />
            <Route exact path="/addbank" element={<AddBank />} />
          </Routes>
        </>
      )}
    </>
  );
}
export default App;
