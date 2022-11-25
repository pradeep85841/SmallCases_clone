import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Discover from "./pages/DiscoverPage/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/discover" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
