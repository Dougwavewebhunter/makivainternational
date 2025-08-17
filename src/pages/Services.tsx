import React from 'react';
import { Package, Truck, Warehouse, Plane, Settings, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'Complete end-to-end supply chain optimization and management solutions tailored to your business needs.',
      features: [
        'Inventory optimization',
        'Demand forecasting',
        'Supplier management',
        'Cost reduction strategies',
        'Performance analytics'
      ],
      color: 'blue'
    },
    {
      icon: Truck,
      title: 'Delivery Services',
      description: 'Flexible delivery options with real-time tracking and guaranteed on-time performance nationwide.',
      features: [
        'Same-day delivery',
        'Next-day delivery',
        'Scheduled deliveries',
        'Express services',
        'Real-time tracking'
      ],
      color: 'green'
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Storage',
      description: 'Secure, climate-controlled storage facilities with advanced inventory management systems.',
      features: [
        'Climate-controlled environment',
        'Advanced security systems',
        'Inventory management',
        'Pick and pack services',
        'Cross-docking capabilities'
      ],
      color: 'yellow'
    },
    {
      icon: Plane,
      title: 'Freight Services',
      description: 'Comprehensive freight solutions covering road, air, and sea transportation across all routes.',
      features: [
        'Road freight',
        'Air freight',
        'Sea freight',
        'International shipping',
        'Customs clearance'
      ],
      color: 'purple'
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Bespoke logistics solutions designed specifically for your unique business requirements.',
      features: [
        'Custom workflow design',
        'Integration services',
        'Dedicated account management',
        'Flexible pricing models',
        'Scalable solutions'
      ],
      color: 'indigo'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support ensuring your operations never stop.',
      features: [
        'Emergency response',
        'Real-time communication',
        'Proactive monitoring',
        'Issue resolution',
        'Performance reporting'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-900',
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      red: 'bg-red-100 text-red-700'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive logistics solutions designed to streamline your operations and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Logistics Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From supply chain optimization to final delivery, we provide end-to-end solutions 
                that ensure your business operations run smoothly and efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className={`p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-600 text-sm flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-gray-600">
                Streamlined approach ensuring optimal results for every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Understanding your specific requirements and challenges</p>
              </div>

              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600 text-sm">Developing customized solutions and implementation strategies</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">Executing solutions with precision and attention to detail</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
                <p className="text-gray-600 text-sm">Continuous monitoring and improvement for optimal performance</p>
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
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can optimize your supply chain and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get a Free Consultation
              </a>
              <a 
                href={`https://wa.me/27665714988?text=${encodeURIComponent('Hello! I would like to learn more about your services.')}`}
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

export default Services;