import React from 'react';
import { Mail, Linkedin, Github, Home, FileText } from 'lucide-react';

// --- GLOBAL COLOR SCHEME (Extracted from page.tsx for consistency) ---
const COLOR_BG_DARK = 'bg-[#121212]';
const COLOR_TEXT_LIGHT = 'text-[#eae4d5]';
const COLOR_ACCENT = 'text-gray-400';
const COLOR_BORDER = 'border-gray-700';

// --- CARD COLOR SCHEME (User requested) ---
const ODD_BG = 'bg-[#C6AC8E]'; // C6AC8E
const ODD_TEXT = 'text-[#5E503F]'; // 5E503F
const EVEN_BG = 'bg-[#22333B]'; // 22333B
const EVEN_TEXT = 'text-[#EAE0D5]'; // EAE0D5

// Project Data extracted from the original HTML
const PROJECTS = [
    {
        title: "Ball Destroy Game",
        description: "Ball Escape is an exciting maze game where your goal is to escape through a blue portal while avoiding robot claws. These claws will throw you back to your starting position if they catch you, adding a layer of challenge to your escape! This game is made on godot gaming engine.",
        links: [
            { href: "https://manpreet-singh-2004.itch.io/ball-destroy", text: "Download on itch.io" },
            { href: "https://github.com/Sahib17/Assignment-4---COMP-360", text: "Check the source code" }
        ],
        media: { type: 'video', src: "godot/assignment4/Game.mp4" },
    },
    {
        title: "Pendulem motion and physics",
        description: "This project is a simulation of a double pendulum system in 3D, implemented using GDScript in the Godot game engine. The primary objective is to programmatically showcase hierarchical object movement using simplified physics principles, specifically the chaotic and dynamic motion of a double pendulum under gravitational influence with damping.",
        links: [
            { href: "https://manpreet-singh-2004.itch.io/godot-projects", text: "Download on itch.io" },
            { href: "https://github.com/Manpreet-Singh-2004/Assignment-3_Godot", text: "Check the source code" }
        ],
        media: { type: 'video', src: "godot/assignment3/physics.mp4" },
    },
    {
        title: "Plane movement with landscape",
        description: "In the plane simulation built with the Godot Engine, the glider follows a predefined red spline path using a Path3D with a PathFollow3D node to control its position and orientation smoothly. A Camera3D, either parented or attached via a spring arm, dynamically adjusts its angle to track the glider's movement. The rain effect is achieved with a Particles3D node, using a process material to fine-tune properties like gravity, lifetime, and emission shape for realistic rainfall. Optional collision handling adds further realism to the particle interactions with the environment.",
        links: [
            { href: "https://manpreet-singh-2004.itch.io/godot-projects", text: "Download on itch.io" },
            { href: "https://github.com/Manpreet-Singh-2004/Assignment-3_Godot", text: "Check the source code" }
        ],
        media: { type: 'video', src: "godot/assignment2/flying.mp4" },
    },
    {
        title: "Landscape generation through godot",
        description: "Using the Godot Engine, I created a procedurally generated landscape with the FastNoise module. By adjusting noise parameters like frequency, lacunarity, and octaves, I achieved a balance between smooth shapes and detailed variations, resulting in a realistic and visually appealing terrain.",
        links: [
            { href: "https://manpreet-singh-2004.itch.io/godot-projects", text: "Download on itch.io" },
            { href: "https://github.com/ShreyasDutt/Godot_Assignment-1", text: "Check the source code" }
        ],
        media: { type: 'image', src: "godot/assignment1/landscape.png" },
    },
    {
        title: "Software Training Plan",
        description: "For CIS 285 our Professor Anoop Saxena had us make a Software Training Plan, in which we have to make a plan to teach our target audience. For this project, I took my target audience to be Starbucks Employees and the target software to be Microsoft Teams.",
        links: [
            { href: "/Projects/Software Training Plan.pdf", text: "View the file" }
        ],
        media: { type: 'image', src: "Projects/Software-Training-Plan.png" },
    },
    {
        title: "Online Raspberry Pi SSH",
        description: (
            <>
                I own a Kali Linux Raspberry Pi 4B which can be accessed from anywhere in the world using ngrok tunneling. You just need to use the command on your terminal or command prompt and you'll be able to have a guest connection. However, please note that the device may not always be connected to the internet. If you wish to access the Raspberry Pi, you can request the necessary commands and credentials via <a href="mailto: manpreet.singh18@student.ufv.ca" className="underline font-semibold hover:text-white transition duration-200">Email</a>.
            </>
        ),
        links: [],
        media: { type: 'image', src: "Projects/Raspberry_Pi_online.jpeg" },
    },
    {
        title: "Local File Transfer Server",
        description: (
            <>
                This repository contains files for a local server that allows users on the same wifi network to save, view and download files from different devices. The server is set to automatically delete files after 2 hours. Additionally, users can also send files to others on the same wifi network using this server.
                <br /><br />
                To run the files, you need to have node.js installed and configured. Once you have downloaded all the files in the same folder, launch the terminal or command prompt and use the command "node server.js".
                <br /><br />
                To access the HTML file, use the command "ipconfig" to check your IPv4 address, which is your local address (e.g. 192.168.1.2). The default port used in this local server is 3000. To upload and download files, open your browser and search for "http://localaddress:3000/frontend.html" (e.g. http://192.168.1.2:3000/frontend.html).
                <br /><br />
                The uploaded files will be saved in the upload folder, and any device connected to the network can add or view/download them. To ensure that only authorized personnel can access the files, I have implemented a "your name" feature, meaning that only those who know their name can access the files.
                <br /><br />
                The files will be stored for 2 hours and will be automatically deleted thereafter.
            </>
        ),
        links: [
            { href: "https://github.com/Manpreet-Singh-2004/local-server", text: "Check the repository" }
        ],
        media: { type: 'image', src: "Projects/Local_file_server.png" },
    },
    {
        title: "File Manager",
        description: "For my Javascript final project, I undertook the creation of a robust file management system, leveraging advanced concepts such as Node.js and integrating external libraries like SJCL, which employs encryption algorithms like SHA-256 for enhanced security. The user journey begins with a verification page where users input their credentials, which are then subjected to a dual SHA-256 encryption process to ensure robust data security. Once verified, users gain access to the dashboard. Access to the dashboard is restricted solely to verified users, ensuring a secure environment. Within the dashboard, users can seamlessly view and upload files. Additionally, an option for enabling dark mode enhances user experience. One notable feature of the system is its dynamic embedded frame capability, enabling users to interact with any file supported by their browser directly within the interface, enhancing usability and convenience.",
        links: [
            { href: "https://github.com/Manpreet-Singh-2004/File-Manager", text: "Check the repository" }
        ],
        media: { type: 'image', src: "Projects/File-Manager.png" },
    },
];

const ProjectCard = ({ project, index }) => {
    // Determine if the card is odd (index 1, 3, 5, 7...) or even (index 0, 2, 4, 6...)
    const isOdd = index % 2 !== 0;
    const bgColor = isOdd ? ODD_BG : EVEN_BG;
    const textColor = isOdd ? ODD_TEXT : EVEN_TEXT;
    const linkColorClass = isOdd ? 'text-[#5E503F] hover:text-[#5E503F]/80' : 'text-[#EAE0D5] hover:text-[#EAE0D5]/80';
    
    // Reverse the flex order for odd cards (media on left, text on right)
    const flexOrder = isOdd ? 'md:flex-row-reverse' : 'md:flex-row';

    const MediaComponent = () => {
        const { type, src } = project.media;
        const mediaClasses = "rounded-xl shadow-lg w-full md:w-[400px] h-auto object-cover max-w-full";

        if (type === 'video') {
            return (
                <a href={project.links?.[0]?.href || '#'} target="_blank" rel="noopener noreferrer">
                    <video 
                        src={src} 
                        controls 
                        className={mediaClasses}
                        // Use a fixed aspect ratio for better CLS prevention, even if flexible width
                        style={{ aspectRatio: '16/9' }} 
                    >
                        Your browser does not support the video tag.
                    </video>
                </a>
            );
        } else if (type === 'image') {
            return (
                <a href={project.links?.[0]?.href || '#'} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={src} 
                        alt={project.title} 
                        className={mediaClasses} 
                    />
                </a>
            );
        }
        return null;
    };

    return (
        <div className={`p-6 md:p-10 rounded-3xl shadow-2xl transition-all duration-300 transform hover:scale-[1.01] ${bgColor} ${textColor}`}>
            <h3 className="text-3xl font-extrabold mb-6 tracking-wide border-b-2 pb-2">
                {project.title}
            </h3>
            
            <div className={`flex flex-col gap-8 ${flexOrder} items-center`}>
                {/* Project Details (Text) */}
                <div className="flex-1 min-w-0">
                    <div className="text-lg leading-relaxed mb-6">
                        {project.description}
                    </div>

                    <div className="flex flex-col gap-2 font-bold mt-4">
                        {project.links.map((link, linkIndex) => (
                            <a 
                                key={linkIndex} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={`inline-flex items-center w-fit transition duration-200 text-base ${linkColorClass}`}
                            >
                                {link.text}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                                    <path d="M7 17l9.2-9.2M17 17V7M17 7h-10"></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Project Media (Image/Video) */}
                <div className="md:w-auto w-full flex justify-center">
                    <MediaComponent />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        // Corrected main container to use the primary dark background color #121212
        <div className={`min-h-screen ${COLOR_BG_DARK} font-sans ${COLOR_TEXT_LIGHT}`}>

            <main className="container mx-auto px-4 md:px-8 py-12">
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className={`text-4xl font-bold mb-4 ${COLOR_TEXT_LIGHT}`}>Why are Projects Crucial?</h2>
                    <p className={`text-lg leading-relaxed ${COLOR_ACCENT}`}>
                        Coding projects are crucial in honing <b>problem-solving skills</b>, fostering <b>creativity</b>, and deepening comprehension of programming principles. These projects offer practical, hands-on experience, enabling individuals to apply theoretical knowledge in real-world situations, ultimately building <b>confidence and expertise</b> in the field of software development.
                        Following below are some of my Projects.
                    </p>
                </div>

                <div className="flex flex-col space-y-16">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index} 
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default App;
