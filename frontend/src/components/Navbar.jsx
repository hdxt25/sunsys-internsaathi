import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../contexts/AuthContext';

import { FaYoutube } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  const getDashboardLink = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'company':
        return '/dashboard'; //dashboard
      case 'student':
        return '/dashboard';
      case 'college':
        return '/college-dashboard';
      default:
        return '/dashboard';
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 animate-fade-in-down">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="relative flex items-center justify-center h-20">

          {/* Logo extreme left */}
          <div className="absolute left-2 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="InternSaathi Logo"
                className="w-43 h-22 object-contain"
              />
            </Link>
          </div>


{/* Center navigation links */}
<div className="hidden md:flex items-center space-x-6">
  {/* YouTube Icon with strong blinking + glowing effect */}
  <a
    href="https://www.youtube.com/shorts/JpCDJmvy81c" // 🔗 Replace with your actual YouTube link
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex items-center justify-center text-red-600 hover:scale-110 transition-transform duration-300"
  >
    {/* Glowing pulse background */}
    <span className="absolute w-12 h-12 bg-red-300 rounded-full blur-lg opacity-40 animate-youtubeGlow"></span>


    {/* Icon itself */}
    {/* Play Icon with gentle yet noticeable blink */}
<a
  href="https://www.youtube.com/shorts/JpCDJmvy81c"
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex items-center justify-center text-red-600 hover:scale-110 transition-transform duration-300"
>
  {/* Light red glow background */}
  <span className="absolute w-11 h-11 bg-red-400 rounded-full blur-md opacity-25 animate-softPulse"></span>

  {/* Elegant Play Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="relative z-10 text-red-600 animate-softBlink"
    width="42"
    height="42"
  >
    <circle cx="12" cy="12" r="11" fill="white" stroke="currentColor" strokeWidth="2" />
    <polygon points="10,8 17,12 10,16" fill="currentColor" />
  </svg>
</a>

  </a>

  {/* Navigation Links */}
  <Link to="/internships" className="text-gray-700 hover:text-teal-600 font-medium">
    Explore Internships
  </Link>
  <Link to="/about-us" className="text-gray-700 hover:text-teal-600 font-medium">
    About Us
  </Link>
  <Link to="/features-page" className="text-gray-700 hover:text-teal-600 font-medium">
    Features
  </Link>
  <a
    href="mailto:admin@internsaathi.com?subject=Inquiry%20from%20InternSaathi%20Website&body=Hello%2C%0AI%20would%20like%20to%20learn%20more%20about..."
    className="text-gray-700 hover:text-teal-600 font-medium"
  >
    Contact Us
  </a>

  {user && (
    <Link to="/profile" className="text-gray-700 hover:text-teal-600 font-medium">
      Profile
    </Link>
  )}
</div>


          {/* Dashboard & Auth extreme right - NO CHANGES HERE */}
          <div className="absolute right-2 hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to={getDashboardLink()}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-md "
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-md "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-md"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button - NO CHANGES HERE */}
          <div className="absolute right-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={() => setIsOpen(false)} to="/internships" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Explore Internships
            </Link>
            {/* 2. MOBILE CHANGE: Change from HashLink to Link, and update the 'to' path */}
            <Link onClick={() => setIsOpen(false)} to="/about-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              About Us
            </Link>
            {/* These links still point to the homepage sections */}
            <HashLink onClick={() => setIsOpen(false)} smooth to="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Features
            </HashLink>
            <HashLink onClick={() => setIsOpen(false)} smooth to="/#contact-us" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Contact Us
            </HashLink>

            <hr className="my-2" />
             
            {/* Auth Links - NO CHANGES HERE */}
            {user ? (
              <>
                <Link onClick={() => setIsOpen(false)} to={getDashboardLink()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Dashboard
                </Link>
                <Link onClick={() => setIsOpen(false)} to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link onClick={() => setIsOpen(false)} to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Login
                </Link>
                <Link onClick={() => setIsOpen(false)} to="/register" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;