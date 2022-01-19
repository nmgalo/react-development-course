import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Header from "./header/Header.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import Contact from "./contact/Contact.jsx";

import { useEffect, useState } from "react";

function App() {
  const [pageChangeEvent, setPageChangeEvent] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setPageChangeEvent(true);
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
      setPageChangeEvent(false);
    }, 500);
  }, [pageChangeEvent]);

  return (
    <div id="app-root" className={!pageChangeEvent ? "active" : "loading"}>
      <div id="main-wrap">
        <div id="borders"></div>
        <div className="web-content page-loader">
          <Header />
          <div className="active_content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
