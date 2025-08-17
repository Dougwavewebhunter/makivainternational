import React from 'react';
import Hero from '../components/Hero';
import { Truck, Package, Shield, Users, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Supply Chain Excellence Since 2013
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MAKIVA International Holdings has been at the forefront of supply chain management 
              and delivery solutions across South Africa. With B-BBEE Level 1 recognition and 
              over a decade of proven excellence, we deliver reliability you can trust.
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center space-x-2 bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From supply chain management to last-mile delivery, we provide end-to-end solutions 
              tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Package className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supply Chain Management</h3>
              <p className="text-gray-600 mb-4">End-to-end supply chain optimization and management solutions.</p>
              <Link to="/services" className="text-blue-900 font-medium hover:text-blue-700 flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Truck className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery Services</h3>
              <p className="text-gray-600 mb-4">Same-day, next-day, and scheduled delivery options nationwide.</p>
              <Link to="/services" className="text-blue-900 font-medium hover:text-blue-700 flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-yellow-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Warehousing</h3>
              <p className="text-gray-600 mb-4">Secure storage solutions with advanced inventory management.</p>
              <Link to="/services" className="text-blue-900 font-medium hover:text-blue-700 flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                <Users className="text-purple-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">Tailored logistics solutions designed for your specific needs.</p>
              <Link to="/services" className="text-blue-900 font-medium hover:text-blue-700 flex items-center space-x-1">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Leading Companies Trust MAKIVA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">11+</div>
                <div className="text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-blue-200">Reliable Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-blue-200">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">Level 1</div>
                <div className="text-blue-200">B-BBEE Recognition</div>
              </div>
            </div>
            <Link 
              to="/why-choose-us"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Discover Our Advantages</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by leading companies across South Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "MAKIVA has transformed our supply chain operations. Their reliability and 
                professionalism are unmatched in the industry."
              </p>
              <div className="font-semibold text-gray-900">Manufacturing Client</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Outstanding delivery service with consistent on-time performance. 
                They understand our business needs perfectly."
              </p>
              <div className="font-semibold text-gray-900">Retail Partner</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Their B-BBEE Level 1 status and professional approach make them 
                our preferred logistics partner for all major projects."
              </p>
              <div className="font-semibold text-gray-900">Government Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a customized solution that meets your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Contact Us Today
              </Link>
              <a 
                href={`https://wa.me/27665714988?text=${encodeURIComponent('Hello! I would like to get a quote for your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;