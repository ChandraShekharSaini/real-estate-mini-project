import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="animate-fadeIn animation-delay-200">
      <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
          <Phone className="w-5 h-5" />
          <span className="text-sm">+91 8445680548</span>
        </div>
        <div className="flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
          <Mail className="w-5 h-5" />
          <a
            href="#"
            className="text-sm hover:text-white transition-colors"
          >
           chandrashekharsaini322@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;