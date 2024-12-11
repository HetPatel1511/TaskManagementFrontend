import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DownArrowSVG } from '../../utils/customSvg';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-slate-900 text-white fixed w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Site Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-primary-300">Task Manager App</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-primary-300">Home</Link>
          <Link to="/about" className="hover:text-primary-300">About</Link>
          <Link to="/services" className="hover:text-primary-300">Services</Link>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="group flex items-center hover:text-primary-300"
            >
              More
              <DownArrowSVG height={15} className="ml-2 fill-white group-hover:fill-primary-300" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute top-full right-0 mt-5 w-40 rounded-md bg-slate-600 text-white shadow-lg flex flex-col"
                onMouseLeave={closeDropdown}
              >
                <Link to="/pricing" className="block px-4 py-2 hover:bg-slate-500">Pricing</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-slate-500">Contact</Link>
                <Link to="/blog" className="block px-4 py-2 hover:bg-slate-500">Blog</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
