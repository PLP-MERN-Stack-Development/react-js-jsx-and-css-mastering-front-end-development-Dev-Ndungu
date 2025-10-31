import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <NavLink to="/" className="text-xl font-bold">PLP</NavLink>
            <div className="hidden sm:flex items-center gap-2">
              <NavLink to="/tasks" className={({isActive}) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600 dark:text-gray-300'}>Tasks</NavLink>
              <NavLink to="/posts" className={({isActive}) => isActive ? 'text-blue-600 font-medium' : 'text-gray-600 dark:text-gray-300'}>Posts</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
