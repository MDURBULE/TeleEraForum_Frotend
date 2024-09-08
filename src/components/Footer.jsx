import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Developer Contact Info */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Contact Us</h2>
            <p className="mt-2 text-gray-300">For any queries or collaborations, reach out to us:</p>
            <p className="mt-2 text-gray-400">Email: <a href="mailto:info@studentforum.com" className="text-blue-300 hover:underline">info@studentforum.com</a></p>
            <p className="mt-2 text-gray-400">LinkedIn: <a href="https://www.linkedin.com/company/student-forum" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Student Forum LinkedIn</a></p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/studentforum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <IoLogoInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/student-forum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/studentforum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Student Forum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
