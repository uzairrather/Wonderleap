import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-wl-teal rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-display font-bold text-wl-purple">
              WonderLeap
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Home
            </Link>
            <Link to="/teachers" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Teachers
            </Link>
            <Link to="/students" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Students
            </Link>
            <Link to="/parents" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Parents
            </Link>
            <Link to="/zones" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Zones
            </Link>
            <Link to="/pricing" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Pricing
            </Link>
            <Link to="/help" className="text-wl-gray-700 hover:text-wl-teal transition font-medium">
              Help
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/signin"
              className="px-6 py-2 bg-wl-purple text-white rounded-full hover:bg-wl-purple-dark transition font-medium"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-wl-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-wl-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/teachers"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Teachers
              </Link>
              <Link
                to="/students"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Students
              </Link>
              <Link
                to="/parents"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Parents
              </Link>
              <Link
                to="/zones"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Zones
              </Link>
              <Link
                to="/pricing"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/help"
                className="text-wl-gray-700 hover:text-wl-teal transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <Link
                to="/signin"
                className="px-6 py-2 bg-wl-purple text-white rounded-full hover:bg-wl-purple-dark transition font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;