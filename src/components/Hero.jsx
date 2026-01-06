
import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-8 md:px-12 relative overflow-hidden">
            <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
                <div className="space-y-10">
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-black">
                        Capture <br />
                        The <span className="text-gray-300">Essence</span> <br />
                        Of Space.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-lg font-normal leading-relaxed">
                        Architectural photography that breathes life into structures.
                        Minimalist, emotive, and timeless.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <a href="#projects" className="group flex items-center gap-2 text-black font-semibold text-lg hover:gap-4 transition-all duration-300">
                            View Selected Works
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="relative aspect-[4/5] lg:aspect-[3/4] bg-gray-100 overflow-hidden rounded-2xl shadow-2xl transform hover:scale-[1.01] transition-transform duration-700 ease-out">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80"
                        alt="Minimalist Architecture"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 ease-out"
                        onLoad={(e) => e.target.classList.remove('opacity-0')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-xs font-medium uppercase tracking-widest text-gray-400">Scroll</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent -z-10" />
        </section>
    );
};

export default Hero;
