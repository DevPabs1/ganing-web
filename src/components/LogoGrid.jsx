import React from 'react';

const LogoGrid = () => {
    // Using placeholder logos for demo
    const logos = [
        { name: "TechCorp", color: "bg-gray-400" },
        { name: "Innovate", color: "bg-gray-400" },
        { name: "BuildFast", color: "bg-gray-400" },
        { name: "CloudScale", color: "bg-gray-400" },
        { name: "DataFlow", color: "bg-gray-400" },
        { name: "SecureNet", color: "bg-gray-400" },
    ];

    return (
        <section className="py-12 border-b border-white/10 bg-black">
            <div className="container-custom">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    Trusted by Industry Leaders
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
                    {/* Simple text placeholders for logos to avoid external image dependencies for now */}
                    {logos.map((logo, idx) => (
                        <div key={idx} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                            <h3 className="text-xl font-bold text-gray-500 hover:text-white transition-colors cursor-default">{logo.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoGrid;
