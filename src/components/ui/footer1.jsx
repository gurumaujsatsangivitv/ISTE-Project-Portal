import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white px-2 pl-2 md:px-6 md:pl-6 font-hamlin w-screen">
      <div className="flex items-end justify-between w-screen">
        <div className="flex flex-col text-md md:text-xl lg:text-2xl py-10">
          <div className="flex flex-col text-[#949494]">
            <p className="text-nowrap">VIT University</p>
            <p className="text-nowrap">Vellore, Tamil Nadu</p>
            <p className="text-nowrap">India - 632014</p>
          </div>
          <div className="py-10">
            <a href="https://istevit.in" className="underline text-white hover:text-white">
              iste@vit.ac.in
            </a>
            <p>+91 83289 26213</p>
          </div>
        </div>
        <div className="flex pb-20 ">
          <div className="px-2 text-white">
            <a href="https://www.instagram.com/iste_vit_vellore/?hl=en">
              <RiInstagramFill
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
          <div className="px-2 text-white">
            <a href="https://x.com/iste_vitvellore">
              <FaXTwitter
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
          <div className="px-2 text-white">
            <a href="https://www.linkedin.com/company/indian-society-for-technical-education/posts/?feedView=all">
              <FaLinkedin
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
          <div className="px-2 text-white">
            <a href="https://github.com/ISTE-VIT">
              <FaGithub
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
          <div className="px-2 text-white">
            <a href="https://www.youtube.com/c/istevitvellore">
              <FaYoutube
                size={35}
                className="h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-b-white   border-b-2 text-sm items-end md:text-xl lg:text-2xl text-white">
        <div className="flex flex-col md:flex-row py-2">
          <div className="py-2 md:py-0 md:pr-2 hidden md:flex">
            <a href="/projects" className="text-white">Projects</a>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <a href="/events" className="text-white">Events</a>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <a href="/webinars" className="text-white">Webinars</a>
          </div>
          <div className="px-1 py-2 md:py-0 md:px-2 hidden md:flex">
            <a href="/team" className="text-white">Team</a>
          </div>
          <div className="px-1 md:py-0 md:px-2">
            <a href="/devs" className="text-white">Developers</a>
          </div>
        </div>
        <div className="text-sm py-2 md:text-xl lg:text-2xl flex items-center">
          Made with{" "}
          <span className="px-3">
            <img
              src="https://res.cloudinary.com/dleuqns7p/image/upload/v1730130545/iyp3bwhmeogekcncsnk4.png"
              alt="ISTE FOOTER"
              width={25}
              height={25}
            />
          </span>{" "}
          by ISTE
        </div>
      </div>
      <div className="flex items-center justify-center pt-20">
        <img
        //   src="/assets/iste.svg"
        src = "https://jumpshare.com/s/8sTc9dRutL9dt2btOYiy"
        // src = "/iste.svg"
          alt="ISTE logo"
          width={2000}
          height={500}
        />
      </div>
    </div>
  );
};

export default Footer;