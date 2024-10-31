import React from "react";

const Navlink = ({ item, handleClick }) => {
  return (
    <a
      href={item.path} // Use 'href' for standard navigation
      onClick={handleClick}
      className="px-3 py-2 hover:bg-white hover:text-black md:hover:bg-black md:hover:text-white"
      
    >
      {item.title}
    </a>
  );
};

export default Navlink;
