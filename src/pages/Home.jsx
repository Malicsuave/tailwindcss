import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import profile images
import sarahProfile from '../assets/images/profiles/Adriana O\'Sullivan.jpg';
import michaelProfile from '../assets/images/profiles/Byron Robertson.jpg';
import jenniferProfile from '../assets/images/profiles/Ethan Valdez.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Cybersecurity Pattern - CSS Grid + SVG */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                />
              </svg>
            </div>
          ))}
        </div>
        
        {/* Hero Content */}
        <div className={`container mx-auto px-6 z-10 max-w-4xl text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Advanced Cybersecurity
            </span>
            <br />Solutions for the Digital Age
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Protecting your digital assets with cutting-edge security tools and expert consulting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-700 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-transparent border-2 border-cyan-500 rounded-lg text-white font-medium hover:bg-cyan-900/30 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Animated Down Arrow - Animation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Services Section - Using CSS Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cybersecurity Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive solutions to protect your business from evolving cyber threats
            </p>
          </div>
          
          {/* Services Grid - CSS Grid & Borders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Vulnerability Assessment</h3>
                <p className="text-gray-400 mb-6">Identify security gaps in your infrastructure before they can be exploited by hackers.</p>
                <a href="#" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Penetration Testing</h3>
                <p className="text-gray-400 mb-6">Simulate real-world attacks to test your defenses and uncover critical security flaws.</p>
                <a href="#" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-300">
                  <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Security Monitoring</h3>
                <p className="text-gray-400 mb-6">24/7 monitoring of your networks and systems to detect and respond to threats in real-time.</p>
                <a href="#" className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section - Using Flexbox */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Protect Your Business from Evolving Threats</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our team of security experts uses the latest tools and techniques to keep your data safe from increasingly sophisticated cyber attacks.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous monitoring and threat detection</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Industry-leading response times</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive security strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-cyan-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular security assessments and updates</span>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-6">
              {/* Stats Grid - Using CSS Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">98%</div>
                  <div className="text-gray-300 font-medium">Client Retention Rate</div>
                </div>
                <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">500+</div>
                  <div className="text-gray-300 font-medium">Security Threats Blocked Daily</div>
                </div>
                <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">15+</div>
                  <div className="text-gray-300 font-medium">Years of Experience</div>
                </div>
                <div className="bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-colors duration-300 shadow-lg">
                  <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Support & Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Using CSS Grid & Box Alignment */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by businesses worldwide to protect their digital assets
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative shadow-lg">
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-cyan-500 rotate-45 transform"></div>
              </div>
              <div className="mb-4">
                <svg className="h-8 w-8 text-cyan-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">
                SentinelCore has been an invaluable partner in strengthening our security posture. Their team identified vulnerabilities we weren't aware of and implemented robust solutions.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cyan-500">
                  <img src={sarahProfile} alt="Adriana O'Sullivan" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Adriana O'Sullivan</h4>
                  <p className="text-sm text-gray-400">CTO, TechCorp Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative shadow-lg">
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-cyan-500 rotate-45 transform"></div>
              </div>
              <div className="mb-4">
                <svg className="h-8 w-8 text-cyan-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">
                After experiencing a ransomware attack, we brought in SentinelCore. Their incident response was exceptional, and they've since implemented security measures that give us peace of mind.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cyan-500">
                  <img src={michaelProfile} alt="Byron Robertson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Byron Robertson</h4>
                  <p className="text-sm text-gray-400">CEO, DataFlow Systems</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 relative shadow-lg">
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-cyan-500 rotate-45 transform"></div>
              </div>
              <div className="mb-4">
                <svg className="h-8 w-8 text-cyan-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">
                The security training SentinelCore provided to our team was excellent. They made complex security concepts accessible and gave our employees practical skills to prevent breaches.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-cyan-500">
                  <img src={jenniferProfile} alt="Ethan Valdez" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Ethan Valdez</h4>
                  <p className="text-sm text-gray-400">CISO, HealthSecure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Using Flexbox & Effects */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 right-0 bg-cyan-500 opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 bg-blue-700 opacity-10 w-96 h-96 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free security assessment and consultation
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
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;