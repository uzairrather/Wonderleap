import React from 'react';

const Loader = ({ size = 'md', text = 'Loading...', fullScreen = false }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const loader = (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 border-4 border-wl-teal/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-wl-purple rounded-full border-t-transparent animate-spin"></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-600 font-semibold animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {loader}
      </div>
    );
  }

  return loader;
};

export default Loader;