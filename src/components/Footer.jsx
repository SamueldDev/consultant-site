

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Mission */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Avery Brand</h3>
          <p>
            Helping consultants and professionals build a strong online presence through strategy,
            design, and development.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p>Email: consultant@averybrand.com </p>
          <p className="mb-4">Phone: (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">
              <FaEnvelope size={20} />
            </a>
            <a href="#"  className="hover:text-blue-400">
              <FaLinkedin size={20} />
            </a>
            <a href="#"  className="hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Avery Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
