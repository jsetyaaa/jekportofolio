import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import FooterSection from "./components/footer/FooterSection";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loading/Loader";
import AboutPage from "./pages/AboutPage";
import "./index.css";
import "./App.css";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="bg-second">
      {loading && <Loader />}
      <DesktopNavbar />
      <MobileNavbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
