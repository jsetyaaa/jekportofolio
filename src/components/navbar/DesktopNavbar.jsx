import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`hidden fixed w-full md:flex py-4 justify-between px-12 z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-md" : "bg-transparent"}`}>
        <h1 className="text-second text-2xl font-bold cursor-pointer font-gummy">
          myPortfolio
        </h1>
        <ul className="flex items-center gap-8">
          <li className="text-second font-gummy text-lg font-bold hover:underline cursor-pointer">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
