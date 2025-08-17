import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Mission & Goals', path: '/mission' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.imgur.com/HHFwsXD.png" 
              alt="MAKIVA International Holdings" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <div className="text-blue-900 font-bold text-lg">MAKIVA INTERNATIONAL</div>
              <div className="text-gray-600 text-sm">HOLDINGS (PTY) LTD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium ${
                  location.pathname === item.path ? 'text-blue-900 border-b-2 border-blue-900' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:block text-right">
            <div className="text-blue-900 font-semibold">+27 66 571 4988</div>
            <div className="text-gray-600 text-sm">info@makivainternationalholdings.co.za</div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-900 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium py-2 ${
                    location.pathname === item.path ? 'text-blue-900' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-blue-900 font-semibold">+27 66 571 4988</div>
                <div className="text-gray-600 text-sm">info@makivainternationalholdings.co.za</div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;