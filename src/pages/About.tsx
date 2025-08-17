import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MAKIVA International Holdings</h1>
            <p className="text-xl text-blue-100">
              Over 11 years of excellence in supply chain management and logistics solutions across South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded with a vision to revolutionize supply chain management in South Africa, 
                  MAKIVA International Holdings (PTY) LTD has grown from a local logistics provider 
                  to a nationwide leader in comprehensive supply and delivery solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Under the strategic leadership of Luvuyo Attwell Makiva, our company has consistently 
                  delivered innovative solutions that drive business growth and operational efficiency 
                  for our clients across diverse industries.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our B-BBEE Level 1 recognition reflects our commitment to transformation and 
                  empowerment, making us the preferred partner for organizations seeking reliable 
                  logistics solutions with strong transformation credentials.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg" 
                  alt="Modern logistics and supply chain"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-2">2013</div>
                  <div className="text-gray-600">Year Established</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-900 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Delivering superior quality in every aspect of our service delivery
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
                <p className="text-gray-600">
                  Consistent, dependable service that our clients can count on
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
                <p className="text-gray-600">
                  Building long-term relationships based on trust and mutual success
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Continuously evolving our solutions to meet changing market needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
              <p className="text-lg text-gray-600">Experienced leadership driving our success</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">LM</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Luvuyo Attwell Makiva</h3>
              <p className="text-blue-900 font-semibold mb-4">Chief Executive Officer & Founder</p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                With over 11 years of experience in the logistics and supply chain industry, 
                Luvuyo Attwell Makiva has built MAKIVA International Holdings into a leading 
                provider of comprehensive logistics solutions. His vision and strategic leadership 
                have established the company as a trusted partner for businesses across South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg text-gray-600">Milestones that define our journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-yellow-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">B-BBEE Level 1</h3>
                <p className="text-gray-600">
                  Recognized for our commitment to broad-based black economic empowerment
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-900" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11+ Years Growth</h3>
                <p className="text-gray-600">
                  Consistent year-over-year growth and expansion across multiple sectors
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nationwide Network</h3>
                <p className="text-gray-600">
                  Comprehensive coverage across all major cities and regions in South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;