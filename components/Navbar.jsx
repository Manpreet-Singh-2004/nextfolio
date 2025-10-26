"use client"
import React, { useState } from 'react';
import { Home, User, Briefcase, Award, Menu, X, Download, Book } from 'lucide-react';
import Link from "next/link";
// FIX: Updated path to resolve import error. Assuming standard components directory structure.
import {ModeToggle} from "../components/ModeToggle";

/**
 * Navbar Component for the Next.js Portfolio.
 * Implements a contrasting scheme for better separation from dark page content:
 * Background: #B6B09F (Light Beige/Grey)
 * Text/Icon Color: #121212 (Deep Black)
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

  // External action links (Resume Download)
  const externalActions = [
    // Use the Download icon for the resume button
    { name: 'Resume (PDF)', href: 'Manpreet Singh Resume.pdf', icon: Download, type: 'button', download: true },
  ];

  // Define colors for easy reference
  const BG_COLOR = 'bg-[#B6B09F]';
  const TEXT_COLOR = 'text-[#121212]';
  const HOVER_BG_COLOR = 'bg-[#121212]';
  const HOVER_TEXT_COLOR = 'text-[#eae4d5]';

  // Updated link styles: default text is dark, hover background is dark, and hover text is light.
  const linkClasses = `inline-flex items-center px-3 py-2 ${TEXT_COLOR} hover:${HOVER_TEXT_COLOR} hover:${HOVER_BG_COLOR} rounded-lg transition duration-150 ease-in-out`;

  return (
    // Updated background and border color
    <nav className={`sticky top-0 z-50 ${BG_COLOR} border-b border-gray-400 shadow-lg w-full font-inter`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo/Name - Uses the dark text color */}
          <div className="flex-shrink-0">
            <a href="/" className={`text-xl font-bold ${TEXT_COLOR} tracking-widest uppercase`}>
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
                    // Resume CTA is prominent (dark button on light background)
                    ? `${HOVER_BG_COLOR} ${HOVER_TEXT_COLOR} hover:bg-gray-700 border border-[#121212]` 
                    // Other links are subtle (ghost button - uses dark text and light hover)
                    : `border border-gray-700 ${TEXT_COLOR} hover:bg-gray-300` 
                  }
                `}
              >
                <action.icon className="h-4 w-4 mr-2" aria-hidden="true" />
                {action.name}
              </a>
            ))}
            {/* ModeToggle - Styled separately, but positioned here */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              type="button"
              // Updated text and hover colors for button contrast
              className={`inline-flex items-center justify-center p-2 rounded-lg ${TEXT_COLOR} hover:${HOVER_TEXT_COLOR} hover:${HOVER_BG_COLOR} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#121212]`}
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
        // Updated border and link colors
        <div className="lg:hidden border-t border-gray-400" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...navItems, ...externalActions].map((item) => (
              <a
                key={item.name}
                href={item.href}
                download={item.download ? "Manpreet Singh Resume" : undefined}
                target={item.type === 'link' ? "_blank" : "_self"}
                rel={item.type === 'link' ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                // Mobile menu links are dark on light hover
                className={`block px-3 py-2 text-base font-medium ${TEXT_COLOR} hover:bg-gray-300 rounded-lg transition duration-150 ease-in-out`}
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