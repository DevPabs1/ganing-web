
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-stone-50">
            <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
                <div className="sticky top-32">
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-12 leading-[0.85] opacity-90">
                        The <br />
                        Story.
                    </h2>
                    <div className="h-1 w-20 bg-black mb-12"></div>
                </div>

                <div className="space-y-20">
                    <div>
                        <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-800">
                            Ganing is an Indonesian photographer and art director known for his keen eye in capturing the <span className="font-normal text-black underline decoration-1 underline-offset-4">interplay of light, shadow, and structure.</span>
                        </p>
                        <p className="text-xl leading-relaxed text-gray-500 mt-8 font-light max-w-2xl">
                            His work delves into themes of space and design, offering a visual exploration of the built environment and its relationship with the natural world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
                        <div>
                            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-black">Services</h4>
                            <ul className="space-y-3 text-lg text-gray-600 font-medium">
                                <li className="hover:text-black transition-colors cursor-default">Architectural Photography</li>
                                <li className="hover:text-black transition-colors cursor-default">Interior Design</li>
                                <li className="hover:text-black transition-colors cursor-default">Art Direction</li>
                                <li className="hover:text-black transition-colors cursor-default">Commercial Spaces</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-black">Base</h4>
                            <p className="text-lg text-gray-600 font-medium">
                                Indonesia. <br />
                                <span className="text-gray-400 font-normal">Available Worldwide.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
