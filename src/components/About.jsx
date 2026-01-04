
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">About</h2>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Services</h4>
                            <ul className="space-y-2 text-xl font-medium">
                                <li>Architectural Photography</li>
                                <li>Interior Design Photography</li>
                                <li>Commercial & Establishment Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-400">Location</h4>
                        <p className="text-xl leading-relaxed text-gray-800">
                            Indonesia but travel everywhere.
                        </p>
                    </div>

                    <p className="text-xl leading-relaxed text-gray-600 font-light">
                        Ganing is an Indonesian photographer and art director known for his keen eye in capturing the interplay of light, shadow, and structure. His work delves into themes of space and design, offering a visual exploration of the built environment and its relationship with the natural world.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
