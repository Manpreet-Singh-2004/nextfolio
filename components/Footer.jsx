"use client"
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer Component for the Next.js Portfolio.
 * Implements the black-and-white schema with custom colors:
 * Background: #121212 (Deep Black)
 * Text/Accent: #EAE4D5 (Off-White/Cream)
 */
const Footer = () => {
  const socialLinks = [
    { name: 'Mail me', href: 'mailto:manpreet.singh18@student.ufv.ca', icon: Mail, type: 'link' },
    { name: 'Instagram', href: 'https://instagram.com/manpreet_singh_2004?igshid=MzNlNGNkZWQ4Mg==', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/manpreetsingh18-ufv/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/Manpreet-Singh-2004', icon: Github },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] border-t border-gray-700 mt-16 py-12 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <h3 className="text-3xl font-bold text-[#eae4d5] mb-6 tracking-wide">
          Connect With Me!
        </h3>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-10 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eae4d5] hover:text-gray-400 transition-colors duration-200 group"
              aria-label={link.name}
            >
              <link.icon className="w-8 h-8 md:w-10 md:h-10 transform group-hover:scale-110 transition-transform" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <hr className="w-1/2 mx-auto border-t border-gray-700 mb-6" />

        {/* Legal and Update Info */}
        <div className="text-sm text-gray-400">
          <p className="mb-1">
            &copy; {currentYear} Manpreet Singh. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500">
            LAST UPDATED ~
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;