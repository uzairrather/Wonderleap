import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false, 
  className = '',
  type = 'button',
  icon = null,
  loading = false
}) => {
  const baseStyles = 'font-bold rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-wl-purple to-wl-teal text-white hover:shadow-xl',
    secondary: 'bg-white text-wl-purple border-2 border-wl-purple hover:bg-wl-purple hover:text-white',
    accent: 'bg-wl-yellow text-gray-900 hover:bg-wl-yellow-dark',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-wl-purple',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-500 text-white hover:bg-green-600'
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  };

  const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed transform-none' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;