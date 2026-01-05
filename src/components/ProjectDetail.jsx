
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-gray-100 aspect-[4/5] relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-8 sticky top-24">
                        <div>
                            <p className="text-gray-500 text-sm tracking-widest uppercase mb-2">Project</p>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{project.title}</h1>
                            <p className="text-xl text-gray-600 font-light">{project.location}</p>
                        </div>

                        <div className="prose prose-lg text-gray-600 leading-relaxed font-light">
                            <p>{project.description || "No description available for this project."}</p>
                        </div>

                        <div>
                            <button className="bg-black text-white px-8 py-4 font-bold tracking-wide hover:bg-gray-800 transition-colors">
                                VIEW FULL GALLERY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
