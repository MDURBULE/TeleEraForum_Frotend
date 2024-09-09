import React, { useState, useEffect } from 'react';
import hod from '../assets/hod.jpeg';

function Hod() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure the effect is noticeable

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4 mt-8">
      <div className='flex justify-center mb-4 md:justify-start md:ml-24'>
        <h1 className='text-2xl font-serif capitalize font-bold underline'>Head of Department</h1>
      </div>
      <div
        className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 xl:mx-14  duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        {/* Image */}
        <img
          src={hod} // Replace with a real image URL or a static asset
          alt="Head of Department"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0"
        />

        {/* Details */}
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600">Dr. V.K. Taksande</h2>
          <p className="text-lg text-gray-700 mt-2">Head of Department, Electronics and Telecommunications</p>
          <p className="text-sm text-gray-500 mt-1">
          Dr. V.K.Taksande has more than 25 years of experience in successfully managing all aspects in education sector
          comprising all national committees; selection of staff, managing and training staff; developing and managing the 
          departmental budget; establishing and monitoring productivity goals in all respect; and leading cross-functional 
          teams on key projects
          </p>
          <p className="text-sm text-gray-500 mt-1">Contact: virendra.taksande@pcenagpur.edu.in</p>
        </div>
      </div>
    </div>
  );
}

export default Hod;
