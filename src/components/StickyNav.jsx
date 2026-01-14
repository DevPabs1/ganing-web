import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]?.id);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle sticky state
            // Assuming hero is ~600px, but accurate method is using refs. 
            // For simplicity, we check if scrollY > 500
            setIsSticky(window.scrollY > 600);

            // Determine active section
            const scrollPosition = window.scrollY + 150; // Offset

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for header (80px) + stickynav (60px)
            const offset = 140;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    if (!sections || sections.length === 0) return null;

    return (
        <>
            {/* Spacer to prevent layout jump when nav becomes fixed */}
            <div className={`h-16 w-full ${isSticky ? 'block' : 'hidden'}`} />

            <div
                className={`w-full z-40 bg-white border-b border-gray-200 transition-all duration-300 ${isSticky ? 'fixed top-20 shadow-md' : 'relative'
                    }`}
            >
                <div className="container-custom h-16 flex items-center overflow-x-auto no-scrollbar">
                    <nav className="flex space-x-8">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollTo(section.id)}
                                className={`text-sm font-bold whitespace-nowrap px-1 py-4 border-b-2 transition-colors ${activeSection === section.id
                                        ? 'border-mekari-blue text-mekari-blue'
                                        : 'border-transparent text-gray-500 hover:text-mekari-dark'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>

                    <div className="ml-auto hidden md:block">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-4 py-2 bg-mekari-blue text-white text-xs font-bold rounded-lg hover:bg-blue-700"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StickyNav;
