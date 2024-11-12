import React from 'react';
import CompanyInfo from './CompanyInfo';
import ContactInfo from './ContactInfo';
import LocationInfo from './LocationInfo';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <ContactInfo />
          <LocationInfo />
          <SocialLinks />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 animate-fadeIn animation-delay-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((text, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;