import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="animate-fadeIn">
      <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex gap-4">
        {[
          { icon: Facebook, href: '#' },
          { icon: Twitter, href: '#' },
          { icon: Instagram, href: '#' },
          { icon: Linkedin, href: '#' },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="transform hover:scale-110 hover:text-white transition-all duration-300 p-2 hover:bg-gray-800 rounded-full group"
          >
            <social.icon className="w-5 h-5 group-hover:animate-pulse" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;