import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Header from "./header/Header.jsx";
import { useState } from "react";

function App() {
  const [pageChangeEvent, setPageChangeEvent] = useState(true);

  return (
    <div id="app-root" className={pageChangeEvent ? "active" : ""}>
      <Router>
        <div id="main-wrap">
          <div id="borders"></div>
          <div className="web-content page-loader">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
