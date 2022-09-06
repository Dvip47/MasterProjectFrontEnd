import { Routes, Route } from "react-router-dom";
import Credentials from "./components/credentials/Credentials";
import Reset from "./components/credentials/Reset/Reset";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Transaction from "./components/Transaction/Transaction";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/exchange" element={<Exchange />} />
      <Route exact path="/credential" element={<Credentials />} />
      <Route exact path="/transaction" element={<Transaction />} />
      <Route exact path="/travelRxReset:token" element={<Reset />} />
    </Routes>
  );
}
export default App;
