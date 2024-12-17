// components/test/Header.jsx
import React from 'react';
import Navbar from './navbar/Navbar.jsx';

const Header = ({ setCurrentPage }) => {
  return (
    <div className="w-screen h-[580px] bg-black rounded-b-[20px] opacity-100 flex flex-col items-center justify-center text-center relative px-4">
      <Navbar setCurrentPage={setCurrentPage} />
      <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mt-4">
        <span className="font-VanioTrial">welcome to the</span> <br />
        <span className="font-George font-bold">ISTE Projects Portal</span>
      </h1>
    </div>
  );
};

export default Header;


