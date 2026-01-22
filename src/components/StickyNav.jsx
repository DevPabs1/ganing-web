import React, { useState, useEffect } from 'react';

const StickyNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(sections[0]?.id);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Toggle sticky state
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
                className={`w-full z-40 transition-all duration-500 ${isSticky ? 'fixed top-[90px] glass-nav' : 'relative bg-black/40 border-b border-white/5 backdrop-blur-md'
                    }`}
            >
                <div className="container-custom h-14 flex items-center overflow-x-auto no-scrollbar">
                    <nav className="flex space-x-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollTo(section.id)}
                                className={`text-[13px] font-bold whitespace-nowrap px-4 py-1.5 rounded-full transition-all duration-300 ${activeSection === section.id
                                    ? 'bg-white text-black'
                                    : 'text-gray-500 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </nav>

                    <div className="ml-auto hidden md:block pl-6 border-l border-white/10">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-4 py-1.5 bg-white/10 text-white text-[11px] font-bold rounded-lg hover:bg-white hover:text-black transition-all border border-white/10"
                        >
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StickyNav;
