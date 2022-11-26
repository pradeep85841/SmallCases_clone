import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Discover from "./pages/DiscoverPage/index.js";
import Signin from "./pages/User/Signin/Signin.js";
import SignUp from "./pages/User/Signup/Signup.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
