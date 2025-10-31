import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} PLP Task Manager. Built with React + Tailwind.</p>
      </div>
    </footer>
  );
};

export default Footer;
