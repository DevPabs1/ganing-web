import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = projects.map(p => p.category);
        return ['All', ...new Set(cats)];
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter(p => p.category === filter);
    }, [filter]);

    return (
        <div className="pt-32 pb-20 px-4 md:px-12 max-w-[90rem] mx-auto opacity-0 animate-fadeIn" style={{ animationFillMode: 'forwards' }}>
            <div className="mb-16">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Selected Works</h1>
                <p className="text-xl text-gray-500 max-w-2xl">
                    A curated collection of architectural and interior photography, capturing the essence of spaces across the globe.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap gap-4 mt-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {filteredProjects.map((project, index) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="group block tracking-wide relative overflow-hidden rounded-xl break-inside-avoid">
                        <div className="relative overflow-hidden w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white text-lg font-medium px-6 py-2 border border-white/30 backdrop-blur-sm rounded-full bg-white/10">View Project</span>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                <p className="text-sm text-gray-500">{project.location}</p>
                            </div>
                            <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-24 text-center border-t border-gray-100 pt-16">
                <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
                <Link to="/appointment" className="inline-block px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-transform hover:scale-105">
                    Start a Conversation
                </Link>
            </div>
        </div>
    );
};

export default ProjectsPage;
