import React from "react";
import Navlink from "./navlink/Navlink";

const Links = ({ isOpen, handleClick, setCurrentPage }) => {
  const linkroll = [
    { title: "HOME", path: "home" },
    { title: "PROJECTS", path: "projects" },

  ];

  return (
    <div
      className={`${isOpen
        ? "flex absolute top-12 w-full h-screen left-0 justify-start items-center gap-12 bg-black z-51 py-8 text-white"
        : "hidden"
        } flex-col md:flex md:flex-row`}
    >
      {linkroll.map((link) => (
        <Navlink
          item={link}
          handleClick={() => {
            handleClick();
            setCurrentPage(link.path);
          }}
          key={link.title}
          className="text-black"
        />
      ))}
    </div>
  );
};

export default Links;
