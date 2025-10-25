"use client"
import React, { useState } from 'react';
import { Download, HeartHandshake } from 'lucide-react';

// --- GLOBAL COLOR SCHEME (Extracted from page.tsx for consistency) ---
const COLOR_BG_DARK = 'bg-[#121212]';
const COLOR_TEXT_LIGHT = 'text-[#eae4d5]';
const COLOR_ACCENT = 'text-gray-400';
const COLOR_BORDER = 'border-gray-700';

// --- Data Structure for Volunteer Activities ---
const VOLUNTEER_ACTIVITIES = [
    {
        title: "Swachhta Warriors",
        date: "2023",
        description: "In 2023, I actively participated in a commendable campaign organized by the Municipality Corporation of Chandigarh aimed at fostering environmental awareness and responsible waste management practices. As a dedicated volunteer, I engaged in a series of impactful initiatives, primarily focusing on enlightening students in various government schools. My role involved delivering compelling speeches and practical demonstrations to elucidate the importance of the three Rs – Reduce, Reuse, and Recycle – in our daily lives. This experience not only enriched my understanding of environmental issues but also enhanced my ability to communicate and inspire positive actions in the community.",
        media: { type: 'certificate', src: 'Volunteer/Swachhta Warriors.jpg', downloadName: 'Swacchta Warriors Certificate.jpg' },
    },
    {
        title: "Project Amrit 2024 (Water Body Conservation)",
        date: "2024",
        description: "Inspired by the motto 'Clean Water, Clean Mind,' this initiative spanned over 1500 locations across India. The central objective was to enlighten the public on preserving water bodies for future generations. I participated by cleaning a small river channel and the surrounding ground near Sahid Udam Singh colony, TDI Pull, Mohali. The project aimed to enhance the cleanliness of various water bodies through awareness campaigns within local communities.",
        media: {
            type: 'carousel',
            images: [
                { src: 'Volunteer/Cleaning Drive 2024/img1.jpg', alt: "Group photo of volunteers" },
                { src: 'Volunteer/Cleaning Drive 2024/img2.jpg', alt: "Volunteers posing" },
                { src: 'Volunteer/Cleaning Drive 2024/img3.jpg', alt: "Cleaning the river channel" },
                { src: 'Volunteer/Cleaning Drive 2024/img4.jpg', alt: "Cleaning the river channel" },
            ],
        },
    },
    {
        title: "Qbiz 2022",
        date: "2022",
        description: "I volunteered for Qbiz, an impactful initiative focused on fostering positive change and innovation. I actively contributed my time and skills by organizing events, assisting with logistics, and engaging with participants. This experience provided valuable insights into collaboration, leadership, and the intersection of business and innovation.",
        media: { type: 'certificate', src: 'Volunteer/Qbiz/Qbiz 22.jpg', downloadName: 'Qbiz 22 Certificate.jpg' },
    },
    {
        title: "Pariksha Pe Charcha",
        date: "2022",
        description: "I participated in the enlightening event, 'Pariksha Pe Charcha,' which offered a unique opportunity to discuss and address the challenges associated with exams. The event provided valuable insights, alleviated exam-related stress, and equipped me with a renewed perspective on handling academic pressures.",
        media: { type: 'certificate', src: 'Volunteer/certificate.png', downloadName: 'Pariksha Pe Charcha Certificate.png' },
    },
    {
        title: "Blood Donation Camp",
        date: "June 25, 2023",
        description: "I volunteered at a blood donation camp, where my responsibilities included entering the essential information of prospective blood donors to ensure efficiency and safety. I also played a pivotal role in the post-donation phase by providing refreshments to those who generously donated blood, reinforcing the importance of life-saving initiatives.",
        media: { type: 'image', src: 'Volunteer/Blood donation_2.jpg' },
    },
];

// --- Carousel Component (Tailwind/React Replacement for Bootstrap Carousel) ---
const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl border border-gray-700">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className="w-full flex-shrink-0 object-cover"
                        style={{ aspectRatio: '16/9', maxHeight: '480px' }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                                <div class='w-full h-full bg-gray-800 flex items-center justify-center' style="aspect-ratio:16/9;">
                                    <span class='${COLOR_ACCENT} text-center p-4 text-sm'>Image Placeholder</span>
                                </div>`;
                        }}
                    />
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-r-lg text-white transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-l-lg text-white transition"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index
                                ? 'bg-white scale-110'
                                : 'bg-gray-500 hover:bg-white/70'
                        }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};


// --- Main Volunteer Item Renderer ---
const VolunteerItem = ({ activity }) => {
    const isCarousel = activity.media?.type === 'carousel';

    return (
        <div className="mb-12 pt-4">
            <h3 className={`text-3xl font-bold ${COLOR_TEXT_LIGHT} mb-2`}>{activity.title}</h3>
            {activity.date && <p className={`text-lg italic ${COLOR_ACCENT} mb-4`}>{activity.date}</p>}
            
            <p className={`text-lg leading-relaxed ${COLOR_TEXT_LIGHT} opacity-90 mb-6`}>
                {activity.description}
            </p>
            
            <div className={`flex flex-col items-center justify-center gap-6 mt-8`}>
                {/* Render Media/Certificate */}
                {activity.media && activity.media.type === 'certificate' && (
                    <>
                        <a 
                            href={activity.media.src} 
                            download={activity.media.downloadName}
                            className="inline-flex items-center px-6 py-3 text-base font-semibold rounded-lg shadow-md transition duration-200 ease-in-out bg-[#C6AC8E] text-[#5E503F] hover:bg-[#C6AC8E]/80"
                        >
                            <Download className="h-5 w-5 mr-2" />
                            Download Certificate
                        </a>
                        <img 
                            src={activity.media.src} 
                            alt={`${activity.title} Certificate`} 
                            className="w-full max-w-lg rounded-xl shadow-xl border border-gray-700 h-auto"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div class='w-full max-w-lg h-64 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700'><span class='${COLOR_ACCENT} text-center p-4 text-base'>Certificate Image Placeholder: ${activity.title}</span></div>`;
                            }}
                        />
                    </>
                )}

                {/* Render Carousel */}
                {isCarousel && <Carousel images={activity.media.images} />}

                {/* Render Simple Image (Blood Donation) */}
                 {activity.media && activity.media.type === 'image' && (
                    <img 
                        src={activity.media.src} 
                        alt={activity.title} 
                        className="w-full max-w-lg rounded-xl shadow-xl border border-gray-700 h-auto"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<div class='w-full max-w-lg h-64 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700'><span class='${COLOR_ACCENT} text-center p-4 text-base'>Image Placeholder: ${activity.title}</span></div>`;
                        }}
                    />
                )}
            </div>
        </div>
    );
};


const VolunteerPage = () => {
    return (
        // Main container uses the primary dark background color #121212
        <main className={`min-h-screen ${COLOR_BG_DARK} font-sans ${COLOR_TEXT_LIGHT} py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Volunteer Title */}
                <header className="text-center mb-8">
                    <h1 className={`text-6xl font-extrabold tracking-tight ${COLOR_TEXT_LIGHT} mb-4 flex items-center justify-center`}>
                        <HeartHandshake className="w-12 h-12 mr-4 text-[#C6AC8E]" />
                        Volunteer Experience
                    </h1>
                </header>

                {/* Introduction */}
                <section className={`p-6 rounded-xl border ${COLOR_BORDER} bg-[#121212]/50 shadow-lg`}>
                    <h2 className={`text-3xl font-bold ${COLOR_TEXT_LIGHT} mb-3`}>Why is Volunteering Important?</h2>
                    <p className={`text-lg leading-relaxed ${COLOR_ACCENT}`}>
                        Volunteering is vital as it fosters a sense of <b>community, compassion, and social responsibility</b>. 
                        It enables individuals to contribute their time and skills for the betterment of others, creating a positive 
                        impact on society. Through volunteering, people build connections, gain valuable experiences, and collectively 
                        work towards creating a more empathetic and supportive world.
                    </p>
                </section>

                {/* Volunteer Activities List */}
                <section>
                    <div className="space-y-20">
                        {VOLUNTEER_ACTIVITIES.map((activity, index) => (
                            <React.Fragment key={index}>
                                <VolunteerItem activity={activity} />
                                {/* Divider for separation, but not after the last item */}
                                {index < VOLUNTEER_ACTIVITIES.length - 1 && (
                                    <hr className={`border-t ${COLOR_BORDER} mx-auto max-w-3xl`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
};


export default VolunteerPage;