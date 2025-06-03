import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  
  // Pricing tiers data
  const pricingTiers = [
    {
      name: 'Basic',
      price: '$299',
      frequency: 'per month',
      description: 'Essential security for small businesses',
      features: [
        'Vulnerability Scanning',
        'Firewall Management',
        'Security Monitoring',
        'Email Protection',
        '8/5 Support',
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$799',
      frequency: 'per month',
      description: 'Advanced security for growing companies',
      features: [
        'Everything in Basic',
        'Intrusion Detection',
        'Penetration Testing',
        'Security Training',
        '24/7 Support',
      ],
      popular: true,
      buttonText: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      frequency: 'pricing',
      description: 'Maximum security for organizations',
      features: [
        'Everything in Professional',
        'Dedicated Security Team',
        'Advanced Threat Detection',
        'Security Strategy Planning',
        'Incident Response',
      ],
      popular: false,
      buttonText: 'Contact Us'
    }
  ];
  
  // Services data
  const services = [
    {
      id: 'security-audit',
      name: 'Security Audits',
      category: 'assessment',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: 'Comprehensive evaluation of your security posture to identify vulnerabilities and compliance gaps.',
      benefits: [
        'Identify security weaknesses',
        'Validate security controls',
        'Meet regulatory requirements',
        'Prioritize security investments'
      ]
    },
    {
      id: 'penetration-testing',
      name: 'Penetration Testing',
      category: 'assessment',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: 'Simulate real-world attacks to test your security defenses and uncover exploitable vulnerabilities.',
      benefits: [
        'Test security effectiveness',
        'Validate security controls',
        'Identify attack vectors',
        'Improve incident response'
      ]
    },
    {
      id: 'security-monitoring',
      name: 'Security Monitoring',
      category: 'protection',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: '24/7 threat monitoring and detection to identify and respond to security incidents in real-time.',
      benefits: [
        'Real-time threat detection',
        'Rapid incident response',
        'Reduce attack impact',
        'Continuous security visibility'
      ]
    },
    {
      id: 'incident-response',
      name: 'Incident Response',
      category: 'response',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Expert response to security incidents to minimize damage and restore normal operations quickly.',
      benefits: [
        'Rapid containment',
        'Evidence preservation',
        'Root cause analysis',
        'Recovery guidance'
      ]
    },
    {
      id: 'security-training',
      name: 'Security Training',
      category: 'training',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Cybersecurity awareness programs to educate employees and build a security-conscious culture.',
      benefits: [
        'Reduce human error',
        'Strengthen security culture',
        'Phishing awareness',
        'Policy compliance'
      ]
    },
    {
      id: 'managed-security',
      name: 'Managed Security',
      category: 'protection',
      icon: (
        <svg className="w-12 h-12 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      description: 'Comprehensive security service that manages and monitors your security infrastructure 24/7.',
      benefits: [
        'Proactive defense',
        'Reduced operational burden',
        'Expert security management',
        'Continuous improvement'
      ]
    }
  ];
  
  // Filter services based on active tab
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);
  
  // Comparison table data
  const comparisonData = {
    headers: [
      'Service Features',
      'Basic',
      'Professional',
      'Enterprise'
    ],
    rows: [
      {
        feature: 'Vulnerability Scanning',
        basic: 'Monthly',
        professional: 'Weekly',
        enterprise: 'Daily'
      },
      {
        feature: 'Firewall Management',
        basic: 'Basic',
        professional: 'Advanced',
        enterprise: 'Custom'
      },
      {
        feature: 'Security Monitoring',
        basic: '8/5',
        professional: '24/7',
        enterprise: '24/7 Dedicated'
      },
      {
        feature: 'Penetration Testing',
        basic: '❌',
        professional: 'Annual',
        enterprise: 'Quarterly'
      },
      {
        feature: 'Incident Response',
        basic: 'Basic',
        professional: 'Standard',
        enterprise: 'Priority'
      },
      {
        feature: 'Security Training',
        basic: 'Online Only',
        professional: 'Online + Workshop',
        enterprise: 'Customized'
      },
      {
        feature: 'Support',
        basic: '8/5 Email',
        professional: '24/7 Phone & Email',
        enterprise: 'Dedicated Team'
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cybersecurity Services
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-10">
              Comprehensive security solutions to protect your organization from evolving cyber threats
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Filter Tabs */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center mb-10 space-x-2">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            <button 
              onClick={() => setActiveTab('assessment')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'assessment' 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Assessment
            </button>
            <button 
              onClick={() => setActiveTab('protection')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'protection' 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Protection
            </button>
            <button 
              onClick={() => setActiveTab('response')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'response' 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Response
            </button>
            <button 
              onClick={() => setActiveTab('training')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === 'training' 
                  ? 'bg-cyan-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Training
            </button>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div 
                key={service.id}
                className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl mb-6 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400">{service.name}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className={`space-y-2 ${hoveredService === service.id ? 'block' : 'hidden'}`}>
                    <p className="text-sm font-semibold text-cyan-500 mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-cyan-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="#" 
                    className="mt-6 inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that's right for your business
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-gray-800 rounded-xl overflow-hidden border ${
                  tier.popular ? 'border-cyan-500 transform scale-105 shadow-xl z-10' : 'border-gray-700 shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="text-xs font-semibold py-1 px-4 bg-cyan-500 text-white transform rotate-45 translate-x-5 -translate-y-1">
                      Popular
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.frequency}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-cyan-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Table Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Comparison</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Detailed comparison of our service plans
            </p>
          </div>
          
          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-800">
                <tr>
                  {comparisonData.headers.map((header, index) => (
                    <th 
                      key={index}
                      className={`px-6 py-4 text-left text-sm font-semibold ${
                        index === 0 ? 'text-white' : 'text-cyan-500'
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {comparisonData.rows.map((row, rowIndex) => (
                  <tr 
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-750'}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{row.basic}</td>
                    <td className="px-6 py-4 text-sm text-gray-300 bg-gray-750/30">{row.professional}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Need a customized solution for your specific requirements?
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-700 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 bg-cyan-500 opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 bg-blue-700 opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our security experts are ready to help you protect your business from cyber threats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-700 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <a 
                href="#" 
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-900/30 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;