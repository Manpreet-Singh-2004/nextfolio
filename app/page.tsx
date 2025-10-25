"use client"
import React from 'react';
import { Briefcase, ShieldCheck, FileText, Download, User, Github } from 'lucide-react';

// Define the custom colors for easy reference
const COLOR_BG_DARK = 'bg-[#121212]';
const COLOR_TEXT_LIGHT = 'text-[#eae4d5]';
const COLOR_ACCENT = 'text-gray-400';
const COLOR_BORDER = 'border-gray-700';

/**
 * Renders the Home page content, including About Me, Experience, and Certifications.
 * This file replaces the main content of the original index.html.
 */
const Home = () => {

  const experienceData = [
    {
      title: 'Uniformed Asset Protection Personel (UAPP)',
      company: 'Loblaw Companies Limited',
      duration: 'November 2024 - Present',
      location: 'Real Canadian Superstore (Gladwin Road, Abbotsford)',
      type: 'Part Time',
      description: "My primary responsibility is to maintain a safe and secure environment for customers, employees, and assets. I actively monitor the premises, conduct regular patrols, and respond promptly to any alarms or security concerns.",
      points: [
        'Dealing with Angry Customers',
        'Standing for Long Periods of Time',
        'Monitoring the Area',
        'Responding to Alarms',
        'Writing Reports',
        'Preventing Theft',
        'Ensuring Safety',
        'Communication and Teamwork',
      ],
      imageSrc: 'RealCanadianSuperStore/superstore.jpg',
      links: [{ name: 'Letter of Employment (LoE)', href: 'RealCanadianSuperStore/LCL - Reference Letter 2025-02-12.pdf', download: true, icon: Download }],
    },
    {
      title: 'Business Analyst',
      company: 'Paragon PMO (TechGear Program)',
      duration: 'May 2023 - September 2023 | Duration -: 4 Months',
      location: 'Online',
      type: 'Part Time',
      description: "Worked with the TechGear program for Paragon PMO to develop a mobile application for the First Nation population of Canada to help them clear their driving license test. My main role was as a Business Analyst, ensuring requirements were met.",
      points: [
        'Documenting and analyzing customer problems identifying area for improvements',
        'Created more than 60 user stories',
        'Maintained a database with 300+ examination queries',
        'Adhered to client requests, effectively communicating their needs to the software development team',
        'Collaborated seamlessly with four cross-functional teams (UI/UX, development, design, and database) to ensure efficient information flow and project alignment.',
        'Directly engaged with clients to understand their needs and deliver tailored solutions that met or exceeded expectations',
      ],
      imageSrc: 'TechGear/tg.png',
      links: [
        { name: 'Download Application (Roadschool v1.0)', href: 'TechGear/Roadschool.apk', download: true, icon: Download },
        { name: 'Github Source Code', href: 'https://github.com/saranshahuja/roadschool', download: false, icon: Github },
        { name: 'Employment Credentials', href: 'TechGear/Techgear-Confirmation.jpg', download: true, icon: FileText },
      ],
    },
    {
      title: 'Digital Intern',
      company: 'Digital Series',
      duration: 'April, 2023- June, 2023 | Duration -: 3 Months',
      location: 'Sector 34, Chandigarh',
      type: 'Full-Time',
      description: "Worked across Social Media Management (SMM), Search Engine Optimisation (SEO), and Website Management (WM) departments. Received the 'India’s Most Trusted Brand of the Year 2023' award during my tenure.",
      points: [
        'Enhancing SEO by creating backlinks which improved search ranking by 84% (Google Analytics)',
        'Posted daily on 20 high-traffic social bookmarking sites to boost visibility',
        'Submitted over 15 PowerPoint presentations daily',
        'Maintained and updated websites daily per client needs.',
        'Created weekly reports for clients to ensure satisfaction',
        'Posted 3 daily social media videos to maintain relevancy',
      ],
      imageSrc: 'DigitalSeries/DSmain.png', // Using one image to represent the experience
      links: [{ name: 'Email Confirmation', href: 'DigitalSeries/Re_ [EXTERNAL]Experience Confirmation of Manpreet Singh.eml', download: true, icon: FileText }],
    },
  ];

  const certificationData = [
    { title: 'Security Workers License', issuer: 'Justice Institute of British Columbia', date: 'September 24, 2024', file: 'Certifications/BST JIBC.pdf' },
    { title: 'Serving it Right', issuer: 'Responsible Service BC', date: 'September 23, 2024', file: 'Certifications/Serving It Right.pdf' },
    { title: 'Ethical Hacking Android (Basics)', issuer: 'Frank Anemaet', date: 'May 11, 2024', file: 'Certifications/UC-8633bd5d-8c6e-45c8-882c-24feb2699dc4.pdf' },
  ];


  // --- Helper Components ---

  const SectionTitle = ({ icon: Icon, title }) => (
    <h2 className={`text-4xl font-bold ${COLOR_TEXT_LIGHT} mb-4 flex items-center`}>
      <Icon className={`w-8 h-8 mr-3 text-gray-400`} />
      {title}
      <div className={`flex-grow border-t ml-4 ${COLOR_BORDER}`} />
    </h2>
  );

  const ExperienceItem = ({ data }) => (
    <div className={`relative p-6 mb-10 border-l-4 border-gray-500 hover:border-[#eae4d5] transition-colors duration-300 rounded-tr-xl`}>
      <div className={`absolute -left-2.5 top-0 w-5 h-5 ${COLOR_BG_DARK} rounded-full border-4 border-gray-500`} />

      <h3 className={`text-2xl font-semibold ${COLOR_TEXT_LIGHT} mb-1`}>{data.title}</h3>
      <p className={`text-lg italic ${COLOR_TEXT_LIGHT} opacity-80 mb-2`}>
        {data.company} | <span className={`${COLOR_ACCENT} font-light`}>{data.duration} ({data.type})</span>
      </p>
      
      <p className={`${COLOR_ACCENT} mb-4`}>{data.description}</p>

      {/* Main Points List */}
      <ul className={`list-none space-y-2 mb-4 pl-0`}>
        {data.points.map((point, index) => (
          <li key={index} className={`flex items-start ${COLOR_TEXT_LIGHT} text-sm`}>
            <span className="mr-2 text-gray-500 mt-0.5">•</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Image (Placeholder since actual file paths are local) */}
      {data.imageSrc && (
        <div className="my-4 overflow-hidden rounded-lg shadow-xl border border-gray-800">
            {/* Using a functional image tag with a placeholder style */}
            <div className={`w-full h-48 flex items-center justify-center ${COLOR_BG_DARK} border-b ${COLOR_BORDER}`}>
                <span className={`${COLOR_ACCENT} text-base`}>Visual Asset Placeholder: {data.company}</span>
            </div>
        </div>
      )}

      {/* Links/CTAs */}
      <div className="flex flex-wrap gap-3 mt-5">
        {data.links.map((link) => (
            <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download ? link.name : undefined}
                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg shadow-md transition duration-200 ease-in-out bg-[#eae4d5] text-[#121212] hover:bg-gray-300"
            >
                {/* Dynamically render the icon */}
                <link.icon className="h-4 w-4 mr-2" />
                {link.name}
            </a>
        ))}
      </div>
    </div>
  );

  const CertificationItem = ({ data }) => (
    <div className={`p-4 ${COLOR_BORDER} border-b last:border-b-0`}>
        <div className="flex justify-between items-start">
            <div>
                <h4 className={`text-xl font-semibold ${COLOR_TEXT_LIGHT}`}>{data.title}</h4>
                <p className={`${COLOR_ACCENT} text-sm mt-1`}>Issued by: {data.issuer} | {data.date}</p>
            </div>
            <a
                href={data.file}
                target="_blank"
                rel="noopener noreferrer"
                download={data.title}
                className="ml-4 inline-flex items-center px-3 py-1 text-sm font-medium rounded-lg transition duration-150 ease-in-out border border-gray-600 text-[#eae4d5] hover:bg-gray-800"
            >
                <Download className="h-4 w-4 mr-2" />
                View Certificate
            </a>
        </div>
    </div>
  );

  // --- Main Render ---

  return (
    <main className={`min-h-screen ${COLOR_BG_DARK} font-inter pt-12 pb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 1. Header/Hero Section */}
        <section className="text-center mb-16">
            <h1 className={`text-6xl font-extrabold ${COLOR_TEXT_LIGHT} mb-4 tracking-tight`}>
                Manpreet Singh
            </h1>
            <p className={`text-xl ${COLOR_ACCENT} max-w-2xl mx-auto`}>
                BCIS Student | Business Analyst & Software Enthusiast | Upholding Security & Integrity
            </p>
        </section>

        {/* 2. About Me Section - UPDATED FOR 3-COLUMN LAYOUT AND BETTER IMAGE FILL */}
        {/* 2. About Me Section - FIXED WIDTH AND ALIGNMENT */}
<section id="about" className="pt-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle icon={User} title="About Me" />

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-10 items-start mt-6">
      
      {/* LEFT COLUMN: Angle Image Background */}
      <div className="hidden md:block col-span-1 h-full relative overflow-hidden rounded-xl border border-gray-700">
        <img
          src="/Angle.png"
          alt="Abstract design background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `<div class='w-full h-full bg-gray-800 flex items-center justify-center'><span class='${COLOR_ACCENT} text-center p-4 text-sm'>Angle Image Placeholder</span></div>`;
          }}
        />
      </div>

      {/* MIDDLE COLUMN: Professional Summary */}
      <div className="col-span-1 md:col-span-2">
        <p className={`${COLOR_TEXT_LIGHT} text-lg mb-4 leading-relaxed`}>
          I am a motivated <b>BCIS student</b> at the University of Fraser Valley. At my core, I am a collaborative team player committed to building strong relationships and fostering positive working environments. I believe that success is best achieved through hard work, dedication, and a positive attitude, and I always strive to live up to these values in everything I do.
        </p>
        <p className={`${COLOR_TEXT_LIGHT} text-lg leading-relaxed`}>
          Beyond my technical and professional pursuits, I occasionally find time to <b>write</b>. It's a great way to process thoughts and explore ideas outside the realm of code and business analysis, adding a layer of creativity to my profile.
        </p>
      </div>

      {/* RIGHT COLUMN: Profile Picture */}
      <div className="col-span-1 flex justify-center md:justify-end mt-4 md:mt-0">
        <div className="w-full md:max-w-full rounded-xl border-4 border-gray-600 shadow-xl overflow-hidden bg-gray-800 aspect-[4/5] flex items-center justify-center">
          <img
            src="/photo.png"
            alt="Manpreet Singh Profile Photo"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<span class='${COLOR_ACCENT} text-center p-4'>Profile Photo Placeholder</span>`;
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>


        {/* 3. Experience Section */}
        <section id="experience" className="pt-8">
          <SectionTitle icon={Briefcase} title="Experience" />
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-1 bg-gray-800 rounded-full hidden md:block" />
            {experienceData.map((exp, index) => (
              <ExperienceItem key={index} data={exp} />
            ))}
            <div className={`text-center mt-10 p-4 border border-gray-700 rounded-lg ${COLOR_TEXT_LIGHT} text-sm opacity-70`}>
                Note: List of references available on request
            </div>
          </div>
        </section>

        {/* 4. Certifications Section */}
        <section id="certifications" className="pt-8">
            <SectionTitle icon={ShieldCheck} title="Licenses and Certifications" />
            <div className={`rounded-xl overflow-hidden border ${COLOR_BORDER} shadow-2xl`}>
                {certificationData.map((cert, index) => (
                    <CertificationItem key={index} data={cert} />
                ))}
            </div>
        </section>

      </div>
    </main>
  );
};

export default Home;