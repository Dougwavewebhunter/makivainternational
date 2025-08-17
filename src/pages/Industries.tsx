import React from 'react';
import { ShoppingCart, Factory, Pill, Utensils, Globe, Building, Truck, Briefcase } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Comprehensive supply chain solutions for retail operations, from inventory management to last-mile delivery.',
      services: [
        'Inventory management',
        'Point-of-sale delivery',
        'Seasonal logistics',
        'Returns processing',
        'Multi-channel fulfillment'
      ],
      color: 'blue'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Streamlined logistics for manufacturing operations, ensuring timely delivery of raw materials and finished products.',
      services: [
        'Raw material sourcing',
        'Production scheduling',
        'Quality control logistics',
        'Distribution management',
        'Just-in-time delivery'
      ],
      color: 'green'
    },
    {
      icon: Pill,
      title: 'Pharmaceutical',
      description: 'Specialized handling and distribution for pharmaceutical products with strict compliance and temperature control.',
      services: [
        'Cold chain logistics',
        'Regulatory compliance',
        'Secure transportation',
        'Batch tracking',
        'Emergency deliveries'
      ],
      color: 'red'
    },
    {
      icon: Utensils,
      title: 'Food & Beverage',
      description: 'Temperature-controlled logistics solutions ensuring freshness and quality from source to consumer.',
      services: [
        'Cold storage solutions',
        'Fresh produce logistics',
        'HACCP compliance',
        'Traceability systems',
        'Rapid distribution'
      ],
      color: 'yellow'
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Scalable fulfillment solutions for online retailers, supporting growth and customer satisfaction.',
      services: [
        'Order fulfillment',
        'Same-day delivery',
        'Returns management',
        'Peak season scaling',
        'Integration services'
      ],
      color: 'purple'
    },
    {
      icon: Building,
      title: 'Government',
      description: 'Reliable logistics services for government departments with B-BBEE Level 1 compliance and transparency.',
      services: [
        'Tender compliance',
        'Secure handling',
        'Documentation services',
        'Project logistics',
        'Emergency response'
      ],
      color: 'indigo'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Supporting logistics companies with additional capacity and specialized transportation services.',
      services: [
        'Capacity augmentation',
        'Specialized transport',
        'Cross-docking',
        'Network optimization',
        'Technology integration'
      ],
      color: 'teal'
    },
    {
      icon: Briefcase,
      title: 'Corporate',
      description: 'Professional logistics solutions for corporate clients requiring premium service levels.',
      services: [
        'Executive deliveries',
        'Document management',
        'Corporate events',
        'Office relocations',
        'Meeting logistics'
      ],
      color: 'gray'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-900 border-blue-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      teal: 'bg-teal-100 text-teal-700 border-teal-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100">
              Specialized logistics solutions across diverse industries with deep sector expertise
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sector-Specific Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our deep understanding of industry-specific requirements enables us to deliver 
                tailored solutions that meet the unique challenges and compliance needs of each sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-lg w-16 h-16 flex items-center justify-center ${getColorClasses(industry.color)}`}>
                        <industry.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Specialized Services:</h4>
                          <ul className="space-y-2">
                            {industry.services.map((service, serviceIndex) => (
                              <li key={serviceIndex} className="text-gray-600 flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Industries Choose MAKIVA
              </h2>
              <p className="text-lg text-gray-600">
                Industry-specific advantages that set us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of industry regulations and compliance requirements 
                  ensuring your operations meet all necessary standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Settings className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customized Solutions</h3>
                <p className="text-gray-600">
                  Tailored logistics solutions designed specifically for your industry's 
                  unique challenges and operational requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Clock className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  Over 11 years of successful partnerships across multiple industries 
                  with consistently positive outcomes and client satisfaction.
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
              Transform Your Industry Operations
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with us to experience industry-specific logistics excellence that drives results.
            </p>
            <a 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Discuss Your Industry Needs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;