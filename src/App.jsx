import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FooterSection from "./components/footer/FooterSection";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/loading/Loader";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/navbar/Navbar";
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

  // Cek apakah berada di DetailPage
  const isDetailPage = location.pathname.startsWith("/projects/");

  return (
    <div className="bg-primary min-h-screen overflow-x-hidden">
      {loading && <Loader />}
      {!isDetailPage && <Navbar />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<DetailPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
