import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md fixed top-0 left-0 w-full z-50 rounded-xl ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Forum Name */}
          <div className="flex items-center">
            <img
              src={logo} // Replace with the actual path to your logo
              alt="Forum Logo"
              className="h-12 w-12 rounded-full"
            />
            <div className='flex flex-col justify-center items-center ml-3'>
              <span className="text-2xl font-bold text-blue-400">TELE ERA</span>
              <span className="text-sm text-gray-300 font-bold">Electronics and Telecommunications</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-blue-400 font-bold">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-blue-400 font-bold">
              About
            </Link>
            <Link to="/forum" className="text-gray-300 hover:text-blue-400 font-bold">
              Forum
            </Link>
            <Link to="/events" className="text-gray-300 hover:text-blue-400 font-bold">
              Events
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-blue-400 font-bold">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/forum"
              onClick={toggleMenu}
              className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              Forum
            </Link>
            <Link
              to="/events"
              onClick={toggleMenu}
              className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
