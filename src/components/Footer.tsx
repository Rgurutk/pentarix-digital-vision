
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/3ae89110-1b07-45bf-a0b1-03d446b2b750.png" 
                alt="Pentarix Logo" 
                className="h-8 w-auto mr-3 filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">Pentarix</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. 
              From web development to AI integration, we deliver excellence in every project.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-orange-500" />
                <a href="mailto:pentarixlabs@gmail.com" className="hover:text-orange-500 transition-colors">
                  pentarixlabs@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span>070 723 3731 / 075 135 2570 / 074 055 8858</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-orange-500" />
                <span>Kalutara North, Kalutara, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">ERP Systems</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#schedule" className="hover:text-orange-500 transition-colors">Schedule Meeting</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Pentarix. All rights reserved. | Transforming Digital Visions Into Reality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
