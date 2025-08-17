import React from 'react';
import { Shield, Clock, Users, Award, CheckCircle, TrendingUp, Star, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: 'Reliability You Can Trust',
      description: 'Over 11 years of consistent service delivery with a proven track record of meeting commitments and exceeding expectations.',
      benefits: [
        '99.5% on-time delivery rate',
        'Comprehensive insurance coverage',
        'Risk management protocols',
        'Backup contingency plans'
      ],
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Unmatched Efficiency',
      description: 'Streamlined processes and advanced technology ensure maximum efficiency in every aspect of our operations.',
      benefits: [
        'Real-time tracking systems',
        'Optimized routing algorithms',
        'Automated inventory management',
        'Performance analytics'
      ],
      color: 'green'
    },
    {
      icon: Users,
      title: 'Exceptional Customer Service',
      description: 'Dedicated support teams providing personalized attention and 24/7 assistance for all your logistics needs.',
      benefits: [
        '24/7 customer support',
        'Dedicated account managers',
        'Proactive communication',
        'Rapid issue resolution'
      ],
      color: 'yellow'
    },
    {
      icon: Award,
      title: 'B-BBEE Level 1 Recognition',
      description: 'Certified transformation partner helping you meet your B-BBEE procurement requirements while receiving world-class service.',
      benefits: [
        'B-BBEE compliance certification',
        'Transformation scorecard points',
        'Regulatory compliance support',
        'Empowerment partnership'
      ],
      color: 'purple'
    }
  ];

  const competitiveEdges = [
    {
      icon: Target,
      title: 'Precision Logistics',
      stat: '99.8%',
      description: 'Accuracy rate in order fulfillment and delivery'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      stat: '500%',
      description: 'Growth capacity to handle peak demands'
    },
    {
      icon: Star,
      title: 'Client Satisfaction',
      stat: '98%',
      description: 'Client retention rate year over year'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      stat: '100%',
      description: 'ISO compliance across all operations'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-900',
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose MAKIVA</h1>
            <p className="text-xl text-blue-100">
              The competitive advantages that make us South Africa's preferred logistics partner
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Competitive Advantages
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover what sets MAKIVA apart from other logistics providers and why 
                leading companies choose us as their trusted supply chain partner.
              </p>
            </div>

            <div className="space-y-16">
              {advantages.map((advantage, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className={`p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 ${getColorClasses(advantage.color)}`}>
                      <advantage.icon size={40} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                    <ul className="space-y-3">
                      {advantage.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <CheckCircle size={20} className="text-green-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                      <img 
                        src={`https://images.pexels.com/photos/${
                          index === 0 ? '7688336' : 
                          index === 1 ? '7688240' : 
                          index === 2 ? '5025665' : '7688161'
                        }/pexels-photo-${
                          index === 0 ? '7688336' : 
                          index === 1 ? '7688240' : 
                          index === 2 ? '5025665' : '7688161'
                        }.jpeg`}
                        alt={advantage.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Performance That Speaks Volumes
              </h2>
              <p className="text-lg text-gray-600">
                Measurable results that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competitiveEdges.map((edge, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <edge.icon className="text-blue-900" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-blue-900 mb-2">{edge.stat}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{edge.title}</h3>
                  <p className="text-gray-600 text-sm">{edge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 rounded-2xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The MAKIVA Promise
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                When you choose MAKIVA, you're not just selecting a logistics provider – 
                you're partnering with a team committed to your success. Our comprehensive 
                approach, proven track record, and unwavering dedication to excellence 
                ensure your supply chain becomes a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Experience the Difference
                </a>
                <a 
                  href="/services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;