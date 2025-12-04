import React, { useState } from "react";
import logoIcon from "./assets/logo.svg";
import logoText from "./assets/text.svg";
import menuIcon from "./assets/menu.svg";
import closeIcon from "./assets/close.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="logo" className="w-8" />
          <img src={logoText} alt="text" className="h-6" />
        </div>

        
        <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <li>About us</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>How it Works</li>
          <li>Hire</li>
        </ul>

        
        <button className="hidden md:block px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500">
          Contact us
        </button>

        
        <button
          className="block md:hidden relative z-[1001]"
          onClick={() => setOpen(!open)}
        >
          <img
            src={open ? closeIcon : menuIcon}
            alt="menu toggle"
            className="w-8 h-8 transition-all duration-300"
          />
        </button>
      </div>

      
      <div
        className={`
          fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-[1000]
          transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-6 mt-20 px-6 text-gray-700 font-medium">
          <a>About us</a>
          <a>Services</a>
          <a>Case Studies</a>
          <a>Blog</a>
          <a>How it Works</a>
          <a>Hire</a>

          <button className="mt-4 px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-purple-600 to-blue-500">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
}

