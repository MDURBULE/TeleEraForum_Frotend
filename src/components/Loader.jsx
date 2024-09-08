import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-56 bg-transparent px-4 pt-10 md:px-20 my-10">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 border-t-4 border-pink-500 border-solid rounded-full animate-spin-slow"></div>
        <div className="absolute w-8 h-8 border-t-4 border-yellow-500 border-solid rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Loader;
