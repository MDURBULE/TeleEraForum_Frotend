import React, { useState, useEffect } from 'react';
import video from '../assets/video1.mp4'; // Replace with the actual path to your video

function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start the fade-out animation after 3 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 300);

    // Hide the overlay after the fade-out animation completes (1 second duration)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Cleanup timers if the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative w-full h-96  sm:min-h-screen mt-16 overflow-hidden">
        {/* Video element for larger screens */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Fallback message for small screens */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 sm:hidden ">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 px-4">
            Welcome to Student Forum mobile
          </h1>
        </div>

        {/* Conditional rendering of the overlay section with fade-out animation */}
        {isVisible && (
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center transition-opacity duration-0 ${
              isFading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 px-4">
              Welcome to Student Forum
            </h1>
          </div>
        )}
      </section>

      {/* Additional Content */}
      <section className="container mx-auto py-8 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          What's New?
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          Check out the latest topics, events, and more in our forum.
        </p>
      </section>
    </div>
  );
}

export default Home;
