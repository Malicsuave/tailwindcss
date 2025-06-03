import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/images/Adobe Express - file.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'bg-black/30 backdrop-blur-md h-14'
          : 'bg-black/80 h-20'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-all duration-300">
          <img
            src={logoImage}
            alt="SentinelCore Logo"
            className={`h-7 w-auto mr-3 ${scrolled ? 'opacity-80' : 'opacity-100'} transition-all duration-300`}
          />
          <span
            className={`font-cy-grotesk text-white font-bold ${
              scrolled ? 'text-lg' : 'text-xl'
            } tracking-tight transition-all duration-300`}
          >
            SentinelCore
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center space-x-2">
          {['/', '/services', '/contact'].map((path, i) => {
            const labels = ['Home', 'Services', 'Contact'];
            return (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === path
                    ? 'text-white bg-cyan-600'
                    : 'text-gray-300 hover:bg-cyan-700 hover:text-white'
                }`}
              >
                {labels[i]}
              </Link>
            );
          })}
          <button className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
            Free Security Scan
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-900/95 backdrop-blur-sm`}>
        <div className="px-4 pt-4 pb-3 space-y-2">
          {['/', '/services', '/contact'].map((path, i) => {
            const labels = ['Home', 'Services', 'Contact'];
            return (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === path
                    ? 'text-white bg-cyan-600'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {labels[i]}
              </Link>
            );
          })}
          <button className="w-full mt-2 flex items-center justify-center px-4 py-2 text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
            Free Security Scan
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
