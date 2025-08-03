import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GameDetails from "./Pages/GameDetails";
import LeaderBoard from "./Pages/LeaderBoard";
import Tournament from "./Pages/Tournament";
import Layout from "./components/layout/layout";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Signup" element={<Signup />} />

          <Route path="/ForgotPassword" element={<VerifyEmail />} />

          <Route element={<Layout />}>
            <Route path="/Home" element={<Homepage />} />

            <Route path="/GameDetails" element={<GameDetails />} />

            <Route path="/LeaderBoard" element={<LeaderBoard />} />

            <Route path="/Tournament" element={<Tournament />} />

            <Route path="/Pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
