"use client"
import React, { useState } from 'react';
import { Home, User, Briefcase, Award, Menu, X, Download, Book } from 'lucide-react';
import Link from "next/link";
import {ModeToggle} from "./ModeToggle";

/**
 * Navbar Component for the Next.js Portfolio.
 * Implements a modern, black-and-white schema with custom off-white (#EAE4D5) and deep-black (#121212) colors.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Primary Navigation links
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About/Experience', href: '/#about', icon: User },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Volunteer', href: '/volunteer', icon: Award },
    {name: 'Blogs', href: '/blogs', icon: Book},
  ];

  // External action links (Mail, LinkedIn, Resume Download)
  const externalActions = [
    // Use the Download icon for the resume button
    { name: 'Resume (PDF)', href: 'Manpreet Singh Resume.pdf', icon: Download, type: 'button', download: true },
  ];

  // Common styles for navigation links - uses your custom off-white color
  const linkClasses = "inline-flex items-center px-3 py-2 text-[#eae4d5] hover:text-[#121212] hover:bg-[#eae4d5] rounded-lg transition duration-150 ease-in-out";

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-b border-gray-700 shadow-lg w-full font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo/Name - Uses the custom off-white text color */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-[#eae4d5] tracking-widest uppercase">
              M. SINGH
            </a>
          </div>

          {/* Primary Navigation Links (Desktop) */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className={linkClasses}>
                <item.icon className="h-5 w-5 mr-1" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>

          {/* External Action Buttons (Desktop) */}
          <div className="hidden lg:flex space-x-3 items-center">
            {externalActions.map((action) => (
              <a
                key={action.name}
                href={action.href}
                target={action.type === 'link' ? "_blank" : "_self"}
                rel={action.type === 'link' ? "noopener noreferrer" : undefined}
                download={action.download ? "Manpreet Singh Resume" : undefined}
                className={`
                  inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg shadow-md transition duration-200 ease-in-out
                  ${action.name === 'Resume (PDF)'
                    ? 'bg-[#eae4d5] text-[#121212] hover:bg-gray-300 border border-[#eae4d5]' // Resume CTA is prominent (off-white button)
                    : 'border border-gray-600 text-[#eae4d5] hover:bg-gray-700' // Other links are subtle (ghost button)
                  }
                `}
              >
                <action.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                {action.name}
              </a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#eae4d5] hover:text-[#121212] hover:bg-[#eae4d5] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#eae4d5]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Conditionally rendered) */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...navItems, ...externalActions].map((item) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download ? "Manpreet Singh Resume" : undefined}
                target={item.type === 'link' ? "_blank" : "_self"}
                rel={item.type === 'link' ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#eae4d5] hover:bg-gray-700 hover:text-white rounded-lg transition duration-150 ease-in-out"
              >
                <item.icon className="h-5 w-5 mr-2 inline-block" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;