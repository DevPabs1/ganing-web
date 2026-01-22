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
        <div className="pt-32 pb-20 px-4 md:px-12 bg-black text-white">
            <div className="container-custom">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                        Ekosistem Produk
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Solusi Terintegrasi untuk Bisnis Anda
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Temukan aplikasi yang tepat untuk mengotomatisasi setiap aspek operasional perusahaan, dari keuangan hingga pengelolaan SDM.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${filter === cat
                                    ? 'bg-white text-black border-white shadow-lg'
                                    : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link
                            to={`/project/${project.id}`}
                            key={project.id}
                            className="group block h-full bg-white/5 rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center p-2 mb-6 group-hover:scale-110 transition-transform border border-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain icon-3d" // Applied icon-3d class
                                />
                            </div>

                            <div className="mb-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{project.category}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.description || 'Solusi terbaik untuk bisnis Anda.'}
                            </p>

                            <div className="flex items-center text-white text-sm font-bold mt-auto">
                                Pelajari Selengkapnya
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 bg-white/5 rounded-3xl p-12 text-center border border-white/10 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-white mb-4">Butuh Rekomendasi Produk?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami untuk mendapatkan solusi yang paling tepat.</p>
                    <Link to="/appointment" className="inline-block px-8 py-4 bg-white text-black rounded-xl font-bold shadow-lg shadow-white/20 hover:bg-gray-200 transition-all hover:-translate-y-1">
                        Hubungi Sales
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
