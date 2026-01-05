
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Selected Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project) => (
                        <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer block">
                            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                            <p className="text-gray-500 text-sm">{project.location}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
