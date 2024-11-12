import React from 'react';
import { MapPin } from 'lucide-react';

const LocationInfo = () => {
  return (
    <div className="animate-fadeIn animation-delay-300">
      <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
      <div className="flex items-start gap-3 hover:-translate-y-1 transition-transform duration-300">
        <MapPin className="w-5 h-5 mt-1" />
        <p className="text-sm leading-relaxed">
          123 Innovation Drive<br />
          Tech Valley, CA 94043<br />
          United States
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;