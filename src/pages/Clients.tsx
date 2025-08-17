import React from 'react';
import { Star, Award, Users, TrendingUp, Factory, Settings, Clock } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      company: 'Leading Manufacturing Group',
      industry: 'Manufacturing',
      testimonial: 'MAKIVA has transformed our supply chain operations. Their reliability and professionalism are unmatched in the industry. We\'ve seen a 30% improvement in delivery times since partnering with them.',
      rating: 5,
      results: '30% faster delivery times'
    },
    {
      company: 'Premier Retail Chain',
      industry: 'Retail',
      testimonial: 'Outstanding delivery service with consistent on-time performance. They understand our business needs perfectly and have become an integral part of our operations.',
      rating: 5,
      results: '99.5% on-time delivery rate'
    },
    {
      company: 'Government Department',
      industry: 'Government',
      testimonial: 'Their B-BBEE Level 1 status and professional approach make them our preferred logistics partner for all major projects. Compliance and quality are never compromised.',
      rating: 5,
      results: '100% compliance record'
    },
    {
      company: 'Pharmaceutical Company',
      industry: 'Healthcare',
      testimonial: 'Critical pharmaceutical logistics require precision and reliability. MAKIVA consistently delivers with their specialized cold chain solutions and regulatory expertise.',
      rating: 5,
      results: 'Zero temperature breaches'
    },
    {
      company: 'E-commerce Platform',
      industry: 'E-commerce',
      testimonial: 'Their scalable solutions have supported our growth from startup to national retailer. Same-day delivery capabilities have transformed our customer experience.',
      rating: 5,
      results: '40% increase in customer satisfaction'
    },
    {
      company: 'Food & Beverage Company',
      industry: 'Food & Beverage',
      testimonial: 'Fresh produce logistics is complex, but MAKIVA makes it look effortless. Their temperature-controlled transport ensures our products reach customers in perfect condition.',
      rating: 5,
      results: '95% product quality retention'
    }
  ];

  const clientCategories = [
    {
      icon: Factory,
      title: 'Manufacturing Partners',
      count: '25+',
      description: 'Leading manufacturers trust us with their supply chain operations'
    },
    {
      icon: Users,
      title: 'Government Contracts',
      count: '15+',
      description: 'Government departments rely on our B-BBEE Level 1 services'
    },
    {
      icon: TrendingUp,
      title: 'Growing E-commerce',
      count: '50+',
      description: 'Online retailers scale their operations with our solutions'
    },
    {
      icon: Award,
      title: 'Corporate Clients',
      count: '100+',
      description: 'Corporations across industries choose our premium services'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Esteemed Clients</h1>
            <p className="text-xl text-blue-100">
              Trusted by leading organizations across South Africa for over 11 years
            </p>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Client Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We proudly serve a diverse range of clients, from emerging businesses to 
                established corporations and government entities across multiple industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {clientCategories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <category.icon className="text-blue-900" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{category.count}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Real feedback from our valued clients across different industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900 mb-1">{testimonial.company}</div>
                    <div className="text-blue-900 text-sm mb-2">{testimonial.industry}</div>
                    <div className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full inline-block">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Partnership Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Partnership Approach
              </h2>
              <p className="text-lg text-gray-600">
                How we build lasting relationships with our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding</h3>
                <p className="text-gray-600">
                  We take time to deeply understand your business model, challenges, 
                  and objectives to create perfectly aligned solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600">
                  Working as an extension of your team, we integrate seamlessly with 
                  your existing processes and systems.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600">
                  Our scalable solutions grow with your business, supporting expansion 
                  and adapting to changing requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Family of Satisfied Clients
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the MAKIVA difference and discover why leading companies 
              across South Africa choose us as their logistics partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Become a Client
              </a>
              <a 
                href={`https://wa.me/27665714988?text=${encodeURIComponent('Hello! I would like to discuss becoming a client.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
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

export default Clients;