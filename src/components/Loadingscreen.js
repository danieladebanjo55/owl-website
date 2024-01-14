import React from 'react';

const LoadingScreen = () => (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="border-4 border-yellow-500 border-solid rounded-full w-10 h-10 animate-spin"></div>
    
  </div>
);

export default LoadingScreen;
