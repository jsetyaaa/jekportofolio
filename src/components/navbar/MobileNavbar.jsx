import React, { useState } from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons";

const MobileNavbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <div className="bg-second">
      <nav className="py-2 px-6 flex flex-col items-end md:hidden">
        <img
          src={icons["icons8-hamburger-menu-50.png"]}
          alt="hamburger-menu"
          className="w-10 h-10 cursor-pointer"
          id="hamburger-menu"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
        <div className="w-[86%] bg-primary px-4 py-4 my-4 mt-2 rounded-lg shadow-md">
          <ul id="mobile-menu">
            <li className="py-3 px-4 text-second font-gummy hover:bg-third cursor-pointer hover:rounded-md font-bold text-lg text-center" onClick={closeMenu}><Link to="/">Home</Link></li>
            <li className="py-3 px-4 text-second font-gummy hover:bg-third cursor-pointer hover:rounded-md font-bold text-lg text-center" onClick={closeMenu}><Link to="/about">About</Link></li>
          </ul>
        </div>
        )}
      </nav>
    </div>
  );
}

export default MobileNavbar;