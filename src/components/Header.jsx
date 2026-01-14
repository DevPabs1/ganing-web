
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-black hover:opacity-80 transition-opacity z-50 relative" onClick={closeMenu}>
            GANING
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link to="/gallery" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
            <Link
              to="/appointment"
              className="px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Book Session
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-full transition-colors z-50 relative focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-32 px-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col space-y-8">
          <Link to="/projects" className="text-3xl font-bold text-black hover:text-gray-600 transition-colors" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/about" className="text-3xl font-bold text-black hover:text-gray-600 transition-colors" onClick={closeMenu}>
            About
          </Link>
          <Link to="/gallery" className="text-3xl font-bold text-black hover:text-gray-600 transition-colors" onClick={closeMenu}>
            Gallery
          </Link>
          <Link to="/contact" className="text-3xl font-bold text-black hover:text-gray-600 transition-colors" onClick={closeMenu}>
            Contact
          </Link>
          <div className="pt-8">
            <Link
              to="/appointment"
              className="block w-full text-center px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
              onClick={closeMenu}
            >
              Book Session
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

};
export default Header;
