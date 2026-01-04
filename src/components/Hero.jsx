
import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black">
                        Capture <br />
                        Your Space <br />
                        <span className="text-gray-400">Today.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-lg font-light">
                        Timeless architectural and interior photography by Ganing.
                        Capturing spaces with emotional depth and detail.
                    </p>
                </div>
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm shadow-2xl">
                    {/* Placeholder for hero image - using a nice gradient/placeholder for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2787&q=80"
                        alt="Architecture"
                        className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-700"
                        onLoad={(e) => e.target.classList.remove('opacity-0')}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
