import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">

        <div className="text-gold text-2xl md:text-3xl font-bold font-poppins">
          <span className="text-gold">Abimbola Jolayemi</span> | <span className="text-white font-light text-xl">Software Engineer</span>
        </div>

        <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-white hover:text-gold">
            Home
          </a>
          <a href="#about" className="text-white hover:text-gold">
            About
          </a>
          <a href="#projects" className="text-white hover:text-gold">
            Projects
          </a>
          <a href="#contact" className="text-white hover:text-gold">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-gold focus:outline-none"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center py-4 space-y-4">
          <a
            href="#home"
            className="text-white font-bold text-lg border-b-2 border-gold pb-2 hover:text-gold hover:border-yellow-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white font-bold text-lg border-b-2 border-gold pb-2 hover:text-gold hover:border-yellow-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white font-bold text-lg border-b-2 border-gold pb-2 hover:text-gold hover:border-yellow-500 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white font-bold text-lg border-b-2 border-gold pb-2 hover:text-gold hover:border-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
