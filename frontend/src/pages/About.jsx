import React from 'react';
import { Building2, Award, Users2, Trophy, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Footer from './Foote';

function App() {
  return (
    <>
  
    <div className="min-h-screen bg-white mt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center bg-fixed fixed top-0 left-0" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070")',
      }}>
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Leading Real Estate Agency Since 1970</h1>
              <p className="text-xl opacity-90">Creating lasting impressions through exceptional property experiences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Building2, stat: '1500+', text: 'Properties Sold' },
            { icon: Users2, stat: '950+', text: 'Happy Clients' },
            { icon: Trophy, stat: '25+', text: 'Industry Awards' },
            { icon: MapPin, stat: '15+', text: 'Cities Covered' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Content */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Legacy of Excellence</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Since 1970, we've been at the forefront of the real estate industry, delivering exceptional service and expertise to our clients. Our commitment to integrity, innovation, and client satisfaction has made us a trusted name in property solutions.
              </p>
              <div className="space-y-4">
                {[
                  'Expert team of certified real estate professionals',
                  'Comprehensive property management services',
                  'Innovative marketing strategies',
                  'Personalized client approach'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1973"
                alt="Modern office interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-lg">
                <p className="text-2xl font-bold mb-2">50+ Years</p>
                <p>Of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our experienced team of real estate professionals is dedicated to providing you with the highest level of service and expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=988'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Sales',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Property Manager',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
            <p className="mb-8 text-blue-100">Contact us today and let's discuss how we can help you achieve your real estate goals.</p>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a href="tel:+1234567890" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <Phone className="w-5 h-5" />
                (123) 456-7890
              </a>
              <a href="mailto:contact@estate.com" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                <Mail className="w-5 h-5" />
                contact@estate.com
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </div>
     <Footer/>
     </>
  );
}

export default App;