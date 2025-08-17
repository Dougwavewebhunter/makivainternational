import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://i.imgur.com/HHFwsXD.png" 
              alt="MAKIVA International Holdings" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <div>
              <div className="font-bold text-lg">MAKIVA INTERNATIONAL</div>
              <div className="text-gray-300">HOLDINGS (PTY) LTD</div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your reliable supply and delivery solutions nationwide with over 11 years of industry experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Supply Chain Management</li>
              <li>Delivery Services</li>
              <li>Warehousing & Storage</li>
              <li>Freight Services</li>
              <li>Customized Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+27 66 571 4988</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@makivainternationalholdings.co.za</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">Nationwide Coverage<br />South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 MAKIVA International Holdings (PTY) LTD. All rights reserved.</p>
          <p className="mt-2">Website designed by <a href="http://www.webdevpro.co.za" className="text-blue-400 hover:text-blue-300">www.webdevpro.co.za</a> call/App +27812155979</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;