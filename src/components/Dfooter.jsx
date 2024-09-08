import React from 'react';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { SiFirefoxbrowser } from "react-icons/si";

function Dfooter() {
  return (
    <>
      <hr className="border-gray-700" />
      <footer className="py-3 bg-black dark:bg-gray-800">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Footer Text */}
            <div className="mt-1 border-gray-700 pt-1 flex flex-col items-center">
              <p className="text-sm text-white dark:text-gray-300">
                Developer's Contact - Mayur ( Backend Developer )
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-1 mt-2 pt-2 border-t">
              <a
                href="https://www.instagram.com/m.n.durbule?igsh=MTBkNmxoa2drMjk1bg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200 text-white dark:text-gray-300"
              >
                <IoLogoInstagram size={24} />
              </a>
              <a
                href="https://in.linkedin.com/in/mayur-durbule-20981b251"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200 text-white dark:text-gray-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://beamish-mooncake-8025a6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 duration-200 text-white dark:text-gray-300"
              >
               <SiFirefoxbrowser size={24}/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Dfooter;
