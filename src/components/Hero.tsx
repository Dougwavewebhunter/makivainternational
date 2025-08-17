import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Reliable Supply & 
            <span className="text-yellow-400"> Delivery Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
            Nationwide coverage with over 11 years of industry excellence
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
            MAKIVA International Holdings delivers comprehensive logistics solutions 
            across South Africa with B-BBEE Level 1 recognition and unmatched reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get a Quote</span>
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800 p-4 rounded-full">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">B-BBEE Level 1</h3>
                <p className="text-blue-200 text-sm">Certified Recognition</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800 p-4 rounded-full">
                <Clock size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">11+ Years</h3>
                <p className="text-blue-200 text-sm">Industry Experience</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-800 p-4 rounded-full">
                <Users size={32} className="text-yellow-400" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg">Nationwide</h3>
                <p className="text-blue-200 text-sm">Coverage & Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;