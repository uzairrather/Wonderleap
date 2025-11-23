import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  gradient = false,
  gradientColors = 'from-wl-teal to-wl-purple'
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-lg transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer' : '';
  const gradientStyles = gradient ? `bg-gradient-to-br ${gradientColors} text-white` : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;