
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-500">
      <div className="max-w-[90rem] mx-auto px-8 md:px-12 h-24 flex items-center justify-between">
        <Link to="/" className="text-3xl font-extrabold tracking-tighter text-black hover:opacity-80 transition-opacity">
          GANING
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          <Link to="/projects" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
            Projects
          </Link>
          <Link to="/about" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
            About
          </Link>
          <Link to="/gallery" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
            Contact
          </Link>
          <Link
            to="/appointment"
            className="px-7 py-3 bg-black text-white text-base font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
          >
            Book Session
          </Link>
        </nav>

        <button className="md:hidden p-2 text-black hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
