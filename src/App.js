import { Suspense } from "react";
// react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App relative">
      <Suspense fallback={() => <div> Loader </div>}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Navbar />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
