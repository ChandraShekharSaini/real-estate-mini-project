import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Heritage Estate</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Empowering innovation through technology. We create solutions that make a difference.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 8445680548</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="#" className="text-sm hover:text-white transition-colors">
                  chandrashekharsaini322@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <p className="text-sm leading-relaxed">
                Village-Kaluwala Jahanpur,<br />
                Saharanpur  <br />
                India
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/chandra-shekhar-saini-772b53249/" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;