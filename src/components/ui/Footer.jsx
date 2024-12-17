import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaYoutube, FaLinkedin, FaHeart } from "react-icons/fa";
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-8 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
          <div className="text-left mb-6 md:mb-0">
            <p>VIT University<br />
              Vellore, Tamil Nadu<br />
              India - 632014</p>
            <div className=" w-screen text-white text-3xl ">
              <div className="flex justify-end space-x-5 pr-14">
                <a href="https://www.instagram.com/iste_vit_vellore/" target="_blank" className="text-white hover:text-white"><AiFillInstagram /></a>
                <a href="https://x.com/iste_vitvellore" target="_blank" className="text-white hover:text-white"><FaXTwitter /></a>
                <a href="https://www.linkedin.com/company/indian-society-for-technical-education/mycompany/" target="_blank" className="text-white hover:text-white" ><FaLinkedin /></a>
                <a href="https://github.com/ISTE-VIT" target="_blank"className="text-white hover:text-white" ><IoLogoGithub /></a>
                <a href="https://www.youtube.com/@ISTEVITVellore" target="_blank" className="text-white hover:text-white" ><FaYoutube /></a>
              </div>
            </div>
            <div className="flex-cols">
              <a href="mailto:iste@vit.ac.in" className="text-white hover:text-white font-normal">
                iste@vit.ac.in
              </a>
              <p>+91 70114 22095</p>
            </div>
            <div className="p-16">

            </div>
          </div>

           </div>
             
            <div className="">
            <p className="flex justify-between items-left space-x-7 pl-7 text-2xl">
                <div className="flex space-x-7">
                  <span>Projects</span>
                  <span>Events</span>
                  <span>Webinars</span>
                  <span>Teams</span>
                </div>
                <div className="text-right pr-4 flex">
                  Made with <FaHeart className="text-blue-400 m-2"/> By ISTE
                </div>
            </p>
            </div>
            <div className="pl-5 pr-5">
              _______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
            </div>

          <div className="relative w-full flex justify-center overflow-hidden pt-4" style={{ height: '391px' }}>
          <svg width="1342" height="482" viewBox="0 0 1342 562" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.032 118.053C-15.4478 118.053 39.8175 137.849 39.8175 266.527C39.8175 334.165 10.1227 361.385 25.795 361.385C56.3146 361.385 94.258 216.211 50.5406 148.573H166.02V561H1.04932V316.018C1.04932 114.753 -10.4986 0.0986328 100.032 0.0986328H100.857C187.467 0.0986328 186.642 118.053 100.857 118.053H100.032Z" fill="white"/>
            <path d="M195.219 504.085L229.863 415.826C239.761 391.905 250.484 382.007 262.032 382.007C308.224 382.007 370.088 523.057 427.003 523.057C481.444 523.057 478.144 466.142 448.449 447.995L262.032 332.515C181.196 282.199 216.665 157.646 370.913 148.573C464.947 142.799 549.082 165.07 613.42 205.488L587.025 293.747C579.601 318.493 569.703 328.391 557.33 328.391C511.963 328.391 437.726 186.516 381.636 186.516C334.619 186.516 341.218 231.058 364.314 245.081L561.455 367.159C668.686 433.148 600.223 561 451.749 561C374.212 561 252.959 567.599 195.219 504.085Z" fill="white"/>
            <path d="M885.926 439.746L919.745 551.927C888.4 557.701 856.231 561 827.361 561C624.446 561 644.243 471.091 644.243 369.634V57.8385H809.214V170.844C809.214 228.583 836.434 228.583 899.123 228.583H915.62V278.075H899.123C811.689 278.075 784.468 245.905 784.468 170.844C784.468 136.2 796.016 125.477 784.468 125.477C739.926 125.477 747.35 511.509 817.463 523.882C844.683 528.831 865.304 482.639 885.926 439.746Z" fill="white"/>
            <path d="M1169.2 148.573C1218.69 148.573 1337.47 181.567 1341.59 299.521V340.764H1250.86C1165.07 340.764 1133.73 392.73 1151.88 438.922C1179.1 500.786 1205.49 546.153 1236.01 535.43C1250.03 530.48 1254.98 511.509 1254.98 485.113L1297.05 526.356C1263.23 547.802 1221.16 561 1169.2 561C868.127 561 867.302 148.573 1169.2 148.573ZM1193.12 306.12C1180.75 254.979 1156.83 164.245 1102.39 174.968C1003.4 194.764 1094.14 472.741 1127.96 457.893C1135.38 454.594 1129.61 444.696 1126.31 434.797C1108.16 384.481 1118.88 325.092 1193.12 306.12Z" fill="white"/>
          </svg>
        </div>

      </footer>
    </>
  );
};

export default Footer;