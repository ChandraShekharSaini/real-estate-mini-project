import React from 'react';
import { Building2, Users, Trophy, Clock4 } from 'lucide-react';

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl">
      <Icon className="w-8 h-8 mb-3 text-blue-600" />
      <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Building Dreams Since 1990
            </h1>
            <p className="text-xl text-gray-200">
              Leading the way in luxury real estate with unparalleled expertise and dedication
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <StatCard icon={Building2} value="2,500+" label="Properties Sold" />
          <StatCard icon={Users} value="10,000+" label="Happy Clients" />
          <StatCard icon={Trophy} value="150+" label="Awards Won" />
          <StatCard icon={Clock4} value="33" label="Years Experience" />
        </div>
      </div>

      {/* Mission Section */}
      <div 
        className="min-h-screen bg-fixed bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            To transform the real estate experience through innovation, integrity, and exceptional service. 
            We believe everyone deserves their dream home, and we're here to make that dream a reality.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div 
        className="min-h-screen bg-fixed bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CEO & Founder', experience: '20+ years in luxury real estate' },
              { name: 'Michael Chen', role: 'Chief Operations Officer', experience: '15+ years in property development' },
              { name: 'Emma Rodriguez', role: 'Head of Sales', experience: '12+ years in real estate marketing' }
            ].map((member) => (
              <div key={member.name} className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;