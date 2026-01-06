import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">Project Not Found</h2>
                    <Link to="/" className="text-lg underline underline-offset-4 hover:text-gray-600 transition-colors">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Image */}
            <div className="w-full h-[60vh] md:h-[80vh] bg-gray-100 relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-[90rem] mx-auto">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm tracking-widest uppercase">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Works
                        </Link>
                        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tracking-tighter leading-[0.9] mb-4">
                            {project.title}
                        </h1>
                        <p className="text-2xl md:text-3xl text-white/90 font-light">{project.location}</p>
                    </div>
                </div>
            </div>

            <div className="max-w-[90rem] mx-auto px-8 md:px-16 py-24 md:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Sticky Details */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-12">
                        <div>
                            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">Client</h3>
                            <p className="text-xl font-medium">Private Commission</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">Services</h3>
                            <p className="text-xl font-medium">Photography, Art Direction</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">Year</h3>
                            <p className="text-xl font-medium">2023</p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <button className="w-full bg-black text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-800 transition-all shadow-lg rounded-sm">
                                Start a Project
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-2xl prose-gray max-w-none font-light leading-relaxed">
                            <h2 className="text-4xl font-bold text-black tracking-tight mb-8">The Concept</h2>
                            <p className="mb-12">
                                {project.description || "Every space tells a story. In this project, we aimed to capture the silent dialogue between light and architecture, revealing the subtle textures and forms that often go unnoticed."}
                            </p>

                            <p>
                                The approach was minimalist yet profound, focusing on the interplay of natural light throughout the day. By carefully framing each shot, we highlighted the structural integrity and the emotional resonance of the space.
                            </p>
                        </div>

                        {/* Additional Images Grid (Placeholder) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                            <div className="bg-gray-100 aspect-[3/4] rounded-lg overflow-hidden">
                                <img src={project.image} alt="Detail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="bg-gray-100 aspect-[3/4] rounded-lg overflow-hidden mt-16">
                                <img src={project.image} alt="Detail 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
