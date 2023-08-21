import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/Logo.png";

function Nav() {
  let links = [
    { name: "Home", link: "home" },
    { name: "Classses", link: "classes" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-between items-center p-4 md:px-6 font-serif fixed bg-transparent z-40 backdrop-blur-sm">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="gorilla logo"
          className="md:w-12 sm:w-10 w-7 h-7 sm:h-10 md:h-12 md:mr-3 mr-1"
        />
        <h1 className="text-red-700 md:text-2xl sm:text-xl text-md">
          Gorilla.Fitness
        </h1>
      </div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer text-red-700">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              open
                ? "M6 18L18 6M6 6l12 12"
                : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            }
          />
        </svg>
      </div>
      <div
        className={`absolute bg-transpraent md:static left-0 z-[-1] md:z-auto w-full md:w-auto bottom-0 md:right-0 mr-10  top-14 text-center  transition-all ease-in duration-700 ${
          open ? "top-10 opacity-0" : "top-[-500px]"
        } opacity-100 md:opacity-100`}>
        <ul
          className={`md:flex justify-around bg-transparent backdrop-blur-sm`}>
          {links.map((link) => (
            <li
              key={link.name}
              className="text-sm font-bold   text-red-700 hover:text-red-400 cursor-pointer py-2 md:py-0 md:ml-10 border-b border-red-700 md:border-b-0 md:bg-transparent bg-black md:opacity-100 opacity-90">
              <Link to={link.link} smooth={true} duration={1000}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
