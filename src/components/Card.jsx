import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
