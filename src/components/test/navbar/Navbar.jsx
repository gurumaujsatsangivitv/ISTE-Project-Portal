// components/test/navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import loginLogo from "../../../assets/loginLogo.svg";
import Links from "./links/Links";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between w-full fixed top-0 border-b-black border-b-4 p-4 z-30 transition-colors duration-300 ${
        isScrolled || isOpen ? "bg-black text-white" : "bg-white text-black"
      } navbar-text`}
    >
      <div className="flex items-center">
        <a href="/" className="navbar-text">
          <img src={logo} alt="logo" className="mx-2 w-8 md:w-12" />
        </a>
        <a href="/" className="navbar-text">
          <div
            className={`text-2xl md:text-xl lg:text-3xl transition-colors duration-300 ${
              isOpen || isScrolled ? "text-white" : "text-black"
            }`}
          >
            ISTE
          </div>
        </a>
      </div>
      <div id="menu" className="flex items-center">
        <Links
          isOpen={isOpen}
          handleClick={handleClick}
          setCurrentPage={setCurrentPage}
        />

        {/* Login Logo with hover effect */}
        <div className="ml-4 group navbar-text">
          <a href="/login" onClick={handleClick} className="flex items-center">
            <img src={loginLogo} alt="Login" className="w-8 h-8" />
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center ml-4 navbar-text">
          {!isOpen && (
            <button onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu size={25} />
            </button>
          )}
          {isOpen && (
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={35} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;