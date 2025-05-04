
import React, { useState } from 'react';
// import { Link } from 'react-scroll';
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link to="/" smooth={true} duration={500}>
            Avery's Brand
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
        <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-400">
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className="hover:text-blue-400">
            Services
          </Link>
          <Link to="blog" smooth={true} duration={500} className="hover:text-blue-400">
            Blog
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400">
            Contact
          </Link>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book a Consultation
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-4 p-4">
          <Link to="about" smooth={true} duration={500} className="block hover:text-blue-400">
            About
          </Link>
          <Link to="services" smooth={true} duration={500} className="block hover:text-blue-400">
            Services
          </Link>
          <Link to="blog" smooth={true} duration={500} className="block hover:text-blue-400">
            Blog
          </Link>
          <Link to="contact" smooth={true} duration={500} className="block hover:text-blue-400">
            Contact
          </Link>
          <a
            href="#contact"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Book a Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
