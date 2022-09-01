import { Routes, Route } from "react-router-dom";
import Credentials from "./components/credentials/Credentials";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/exchange" element={<Exchange />} />
      <Route exact path="/credential" element={<Credentials />} />
    </Routes>
  );
}
export default App;
