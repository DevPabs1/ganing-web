import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import FloatingElement from '../components/FloatingElement';

const AboutPage = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-12 max-w-[90rem] mx-auto text-white">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                <div>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] relative text-white">
                        We Craft<br />Visual<br />Narratives
                        <div className="absolute top-0 right-10 w-24 hidden lg:block opacity-90">
                            <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/pencil.png`} duration={6} yOffset={20} className="icon-3d" />
                        </div>
                    </h1>
                </div>
                <div className="flex flex-col justify-end">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-400">
                        Ganing is a specialized architectural photography studio based in Indonesia. We work with architects, designers, and hospitality brands to translate built environments into compelling visual stories.
                    </p>
                </div>
            </div>

            {/* Large Image */}
            <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-2xl mb-24 border border-white/10">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2940&auto=format&fit=crop"
                    alt="Studio Workspace"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>

            {/* Floating Camera Decoration */}
            <div className="absolute right-0 top-[80vh] w-48 opacity-40 z-[-1] hidden lg:block">
                <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/camera.png`} duration={8} yOffset={-30} className="icon-3d" />
            </div>

            {/* Approach Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                <div className="lg:col-span-4">
                    <h2 className="text-3xl font-bold sticky top-32 text-white">Our Approach</h2>
                </div>
                <div className="lg:col-span-8 space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Observation First</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Before we pick up a camera, we observe. We watch how light moves through a space, how people interact with it, and what feelings the architect intended to evoke. This patience allows us to capture not just the geometry, but the atmosphere.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Technical Precision</h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            While art drives our vision, technical excellence drives our execution. We utilize state-of-the-art equipment and specialized techniques to ensure accurate color reproduction, perfect vertical alignment, and balanced exposures.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-t border-white/10 pt-24">
                <div className="lg:col-span-4">
                    <h2 className="text-3xl font-bold sticky top-32 text-white">Services & Capabilities</h2>
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ul className="space-y-4 text-lg text-gray-400">
                        <li className="text-white font-semibold mb-2">Photography</li>
                        <li>Architectural Photography</li>
                        <li>Interior Photography</li>
                        <li>Aerial / Drone</li>
                        <li>Hospitality & Resort</li>
                        <li>Industrial & Construction</li>
                    </ul>
                    <ul className="space-y-4 text-lg text-gray-400">
                        <li className="text-white font-semibold mb-2">Videography</li>
                        <li>Architectural Films</li>
                        <li>Brand Narratives</li>
                        <li>Process Documentation</li>
                        <li>Interviews</li>
                    </ul>
                </div>
            </div>

            {/* Team / Founder */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 border-t border-white/10 pt-24">
                <div className="lg:col-span-4">
                    <h2 className="text-3xl font-bold sticky top-32 text-white">The Lead</h2>
                </div>
                <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 items-start">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                        alt="Founder"
                        className="w-48 h-48 object-cover rounded-full grayscale border-2 border-white/10"
                    />
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Davit Ganing</h3>
                        <p className="text-gray-500 mb-6">Founder & Principal Photographer</p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            With over a decade of experience in visual arts, Davit brings a unique painterly quality to architectural photography. His work has been featured in leading design publications and recognized for its emotive quality.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-12 md:p-24 text-center mb-12 backdrop-blur-sm">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Let's create something timeless.</h2>
                <Link to="/appointment" className="inline-block px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105">
                    Book a Session
                </Link>
            </div>

            {/* Contact Form Integration */}
            <Contact />
        </div>
    );
};

export default AboutPage;
