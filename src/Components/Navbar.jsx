import React, { useEffect } from "react";

const Navbar = ({menuOpen, setMenuOpen}) => {

useEffect(()=>{
  document.body.style.overflow = menuOpen ? "hidden" : "";
},[menuOpen])



  return (
    <div className="fixed lg:top-3 top-6 w-screen lg:w-full z-50   ">
        <div className="max-w-5xl backdrop-blur-lg bg-cyan-700 shadow-lg border-blue-800/80 rounded-3xl  mx-auto px-8">
      <div className="flex justify-between items-center h-16">
        <a
          href="#home"
          className="text-cyan-400 font-mono text-4xl font-bold  "
        >
          <span className="text-blue-500">INK</span>Tech
        </a>
       {/* Desktop */} 
        <div onClick={()=>{setMenuOpen(prev => !prev )}} className="text-white w-7 h-5 relative cursor-pointer z-40 md:hidden ">
          {" "}
          &#9776;{" "}
        </div>
        {/* MObile */} 
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 text-2xl hover:text-blue-800/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-300 text-2xl hover:text-blue-800/80 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-300 text-2xl hover:text-blue-800/80 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-300 text-2xl hover:text-blue-800/80 transition-colors"
          >
            Contact
          </a>
          <a
            href="#project"
            className="text-gray-300 text-2xl hover:text-blue-800/80 transition-colors"
          >
            Projects
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
