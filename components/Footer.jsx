// Footer.jsx
"use client"
import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer Component for the Next.js Portfolio.
 * New Color Scheme:
 * Background: #B6B09F (Light Beige/Grey)
 * Text/Accent: #121212 (Deep Black)
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
    // Updated BG to B6B09F, removed border-t, and kept mt-0 for no extra space
    <footer className="bg-[#B6B09F] py-12 font-inter mt-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header - Updated text color to black/121212 */}
        <h3 className="text-3xl font-bold text-[#121212] mb-6 tracking-wide">
          Connect With Me!
        </h3>

        {/* Social Media Links - Updated icon color to black/121212 */}
        <div className="flex justify-center space-x-10 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              // New text color and hover state
              className="text-[#121212] hover:text-gray-600 transition-colors duration-200 group"
              aria-label={link.name}
            >
              <link.icon className="w-8 h-8 md:w-10 md:h-10 transform group-hover:scale-110 transition-transform" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Divider Line - Updated border color for visibility on light BG */}
        <hr className="w-1/2 mx-auto border-t border-gray-400 mb-6" />

        {/* Legal and Update Info - Updated text color for visibility */}
        <div className="text-sm text-[#121212]">
          <p className="mb-1">
            &copy; {currentYear} Manpreet Singh. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-gray-700">
            LAST UPDATED ~
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;