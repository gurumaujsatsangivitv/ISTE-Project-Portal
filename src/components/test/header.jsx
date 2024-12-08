// components/test/Header.jsx
import React from 'react';
import Navbar from './navbar/Navbar.jsx';

const Header = ({ setCurrentPage }) => {
  return (
    <div className="w-screen h-[580px] bg-black rounded-b-[20px] opacity-100 flex items-center justify-center text-center relative">
      <Navbar setCurrentPage={setCurrentPage} />
      <h1 className="text-white text-7xl mt-0">
        <span className="font-VanioTrial">welcome to the</span> <br />
        <span className="font-George font-bold">ISTE Projects Portal</span>
      </h1>
    </div>
  );
};

export default Header;
