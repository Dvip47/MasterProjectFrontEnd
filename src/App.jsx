import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AddBank from "./components/Admin/Bank/AddBank";
import Credentials from "./components/credentials/Credentials";
import Reset from "./components/credentials/Reset/Reset";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Transaction from "./components/Transaction/Transaction";
import { AuthContext } from "./context/Auth";
function App() {
  const { loader } = useContext(AuthContext);
  return (
    <>
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
      </Routes>
      {/* <AddBank /> */}
    </>
  );
}
export default App;
