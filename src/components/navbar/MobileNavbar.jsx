import { Link } from "react-router-dom";
import icons from "../../assets/icons";
import { React, useState, useEffect } from "react";


const MobileNavbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-md" : "bg-transparent"}`}>
      <nav className="py-2 px-6 flex flex-col items-end md:hidden">
        <img
          src={icons["icons8-hamburger-menu-50.png"]}
          alt="hamburger-menu"
          className="w-10 h-10 cursor-pointer"
          id="hamburger-menu"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
        <div className="w-[86%] bg-transparent px-4 py-4 my-4 mt-2 rounded-lg shadow-md">
          <ul id="mobile-menu">
            <li className="py-3 px-4 text-white font-gummy hover:bg-third cursor-pointer hover:rounded-md font-bold text-lg text-center" onClick={closeMenu}><Link to="/">Home</Link></li>
          </ul>
        </div>
        )}
      </nav>
    </div>
  );
}

export default MobileNavbar;