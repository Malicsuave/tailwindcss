import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function Contact() {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };
  
  // Set up map container style
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.375rem',
  };
  
  // Example location - replace with your actual business location
  const center = {
    lat: 40.7128, // New York City coordinates as example
    lng: -74.0060,
  };

  // Business info for the InfoWindow
  const businessInfo = {
    name: "Your Business Name",
    address: "123 Main Street, New York, NY 10001",
    phone: "+1 (555) 123-4567"
  };

  // Get Google Maps API key from environment variables
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Business hours
  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-3 text-gray-800">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Fill out the form below or use our contact information to reach out.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-10 transition-all hover:shadow-xl">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Send us a message</h2>
          
          {formSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
            </div>
          ) : null}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Information & Map Section */}
        <div className="space-y-10">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-10 transition-all hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">{businessInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Hours Card */}
          <div className="bg-white rounded-xl shadow-lg p-10 transition-all hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Business Hours</h2>
            <div className="grid grid-cols-2 gap-y-4">
              {businessHours.map((item, index) => (
                <div key={index} className="col-span-2 flex justify-between border-b pb-3 last:border-b-0">
                  <span className="font-medium text-gray-800">{item.day}</span>
                  <span className={item.hours === "Closed" ? "text-red-500 font-semibold" : "text-gray-600"}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Google Maps */}
          <div className="bg-white rounded-xl shadow-lg p-10 transition-all hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Find Us</h2>
            <div className="h-80 overflow-hidden rounded-lg border border-gray-200">
              {apiKey ? (
                <LoadScript googleMapsApiKey={apiKey}>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={14}
                    options={{
                      styles: [
                        {
                          featureType: "all",
                          elementType: "geometry.fill",
                          stylers: [{ weight: "2.00" }]
                        },
                        {
                          featureType: "all",
                          elementType: "geometry.stroke",
                          stylers: [{ color: "#9c9c9c" }]
                        },
                        {
                          featureType: "all",
                          elementType: "labels.text",
                          stylers: [{ visibility: "on" }]
                        }
                      ]
                    }}
                  >
                    <Marker 
                      position={center} 
                      onClick={() => setShowInfoWindow(true)}
                    >
                      {showInfoWindow && (
                        <InfoWindow
                          position={center}
                          onCloseClick={() => setShowInfoWindow(false)}
                        >
                          <div className="p-2">
                            <h3 className="font-bold">{businessInfo.name}</h3>
                            <p className="text-sm">{businessInfo.address}</p>
                            <p className="text-sm">{businessInfo.phone}</p>
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  </GoogleMap>
                </LoadScript>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100 rounded-md">
                  <p className="text-gray-600">
                    To display the map, add your Google Maps API key to the .env file.
                  </p>
                </div>
              )}
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              You can find us at this location during our business hours. Feel free to stop by or book an appointment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;