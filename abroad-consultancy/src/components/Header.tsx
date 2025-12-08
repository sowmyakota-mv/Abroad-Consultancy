import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    { name: 'Study Abroad', href: location.pathname === '/' ? '#services' : '/#services' },
    { name: 'Our Services', href: location.pathname === '/' ? '#process' : '/#process' },
    { name: 'Why Choose Us', href: location.pathname === '/' ? '#why-choose-us' : '/#why-choose-us' },
    { name: 'Our Success', href: location.pathname === '/' ? '#testimonials' : '/#testimonials' },
    { name: 'FAQ', href: location.pathname === '/' ? '#contact' : '/#contact' },
    { name: 'Book Free Counselling', href: location.pathname === '/' ? '#quote' : '/#quote', isCta: true }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo" 
                alt="consultancy"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-all duration-200 ${
                    link.isCta
                      ? 'bg-purple-700 text-white px-5 py-2.5 rounded-3xl hover:bg-purple-700 hover:scale-105 hover:shadow-md'
                      : 'text-gray-700 hover:text-[blue-600] hover:scale-105'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-blue-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-blue-700 transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-blue-700 transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-blue-700 transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-2 border-t border-blue-100 pt-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-center py-2.5 transition-colors duration-200 ${
                      link.isCta
                        ? 'bg-purple-700 text-white px-4 rounded-lg hover:bg-purple-700 hover:scale-105'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
