import React from 'react';
import { Target, Eye, Heart, Compass, Users, Globe, Award, TrendingUp } from 'lucide-react';

const Mission = () => {
  const goals = [
    {
      icon: Globe,
      title: 'Market Leadership',
      description: 'Become the leading logistics provider across Southern Africa',
      timeline: '2025-2027'
    },
    {
      icon: Users,
      title: 'Client Growth',
      description: 'Expand our client base while maintaining exceptional service quality',
      timeline: '2025-2026'
    },
    {
      icon: Award,
      title: 'Service Excellence',
      description: 'Achieve industry-leading standards in all service categories',
      timeline: 'Ongoing'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Build sustainable business practices that benefit all stakeholders',
      timeline: '2025-2030'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our interactions.'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new ways to improve our services and deliver value to our clients.'
    },
    {
      title: 'Excellence',
      description: 'We strive for superior quality in everything we do, from service delivery to client relationships.'
    },
    {
      title: 'Partnership',
      description: 'We build lasting relationships based on mutual trust, respect, and shared success.'
    },
    {
      title: 'Empowerment',
      description: 'We are committed to transformation and creating opportunities for sustainable development.'
    },
    {
      title: 'Sustainability',
      description: 'We operate responsibly, considering the environmental and social impact of our activities.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Goals</h1>
            <p className="text-xl text-blue-100">
              Our purpose, vision, and strategic objectives that drive everything we do
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Target className="text-blue-900" size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To provide exceptional supply chain and logistics solutions that empower 
                  businesses across South Africa to achieve their full potential. We are 
                  committed to delivering reliable, efficient, and innovative services that 
                  create sustainable value for our clients, employees, and communities.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our B-BBEE Level 1 recognition and unwavering commitment to excellence, 
                  we strive to be the trusted partner that enables business transformation 
                  and economic growth throughout the region.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/7688079/pexels-photo-7688079.jpeg" 
                  alt="Mission and vision"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg" 
                  alt="Vision for the future"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="lg:order-2">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Eye className="text-green-700" size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To be recognized as Southern Africa's premier logistics and supply chain 
                  management company, setting the standard for service excellence, innovation, 
                  and transformation in the industry.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where our comprehensive solutions enable businesses 
                  to focus on their core competencies while we handle their logistics challenges 
                  with unparalleled expertise and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-yellow-600" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">
                The fundamental principles that guide our decisions and shape our culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-purple-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Compass className="text-purple-700" size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Goals</h2>
              <p className="text-lg text-gray-600">
                Our roadmap for continued growth and industry leadership
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="bg-blue-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                      <goal.icon className="text-blue-900" size={32} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
                        <span className="bg-blue-100 text-blue-900 text-xs px-3 py-1 rounded-full font-medium">
                          {goal.timeline}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Performance Indicators
              </h2>
              <p className="text-lg text-gray-600">
                Metrics that measure our success and commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveEdges.map((edge, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <edge.icon className="text-white" size={28} />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{edge.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{edge.title}</h3>
                  <p className="text-gray-600 text-sm">{edge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission for Excellence
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us to experience logistics solutions aligned with your business goals and values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Your Partnership
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;