import React from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
    className={`fixed top-0 left-0 w-full h-screen bg-gray-800/80 z-40 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out ${
      menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
    
    >
      <button
        onClick={() => {
          setMenuOpen(false); 
        }}
        className="absolute top-6 right-6 bg-white text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        x
      </button>

      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } `}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        Home
      </a>
      <a
        href="#services"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } `}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        Services
      </a>
      <a
        href="#about"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } `}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        About
      </a>
      <a
        href="#Contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } `} 
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        Contact
      </a>
      <a
        href="#project"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            } `} 
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        Projects
      </a>
    </div>
  );
};

export default MobileMenu;
