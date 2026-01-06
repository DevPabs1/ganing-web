
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-white">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black max-w-xl leading-[0.9]">
                        Selected <br />
                        <span className="text-gray-300">Works.</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-sm mb-2">
                        A curation of spaces that define modern living and architectural excellence.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {projects.map((project, index) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="group cursor-pointer block break-inside-avoid"
                        >
                            <div className="relative mb-4 overflow-hidden rounded-2xl">
                                <div className="aspect-[4/5] w-full">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-sm font-semibold text-black">View Project</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start pt-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-black group-hover:text-gray-600 transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mt-1 font-medium">{project.location}</p>
                                </div>
                                <span className="text-xs font-mono border border-gray-200 rounded-full px-3 py-1 text-gray-400 group-hover:border-black group-hover:text-black transition-colors">
                                    0{index + 1}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="#" className="inline-block border-b-2 border-black pb-1 text-xl font-medium hover:text-gray-600 transition-colors">
                        View All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
