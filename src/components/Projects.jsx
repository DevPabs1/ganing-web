import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import { motion } from 'framer-motion';
import FloatingElement from './FloatingElement';

const Projects = () => {
    // Mock categories for the "Ecosystem" feel
    const categories = [
        { id: 'finance', name: 'Finance & Accounting', icon: '📊' },
        { id: 'hr', name: 'HR & Payroll', icon: '👥' },
        { id: 'tax', name: 'Tax Compliance', icon: '📝' },
        { id: 'crm', name: 'CRM & Sales', icon: '🤝' },
    ];

    return (
        <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-0" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-white/10">
                        Product Ecosystem
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Solusi Komprehensif untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Setiap Divisi</span>
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Satu platform terintegrasi untuk mengelola operasional bisnis Anda, dari keuangan hingga sumber daya manusia.
                    </p>
                </div>

                {/* Categories Pills (Visual only for now) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold shadow-lg">All Products</button>
                    {categories.map(cat => (
                        <button key={cat.id} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-bold hover:border-white/30 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/project/${project.id}`}
                                className="group block h-full bg-white/5 rounded-2xl border border-white/10 p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[100px] -z-0" />

                                <div className="h-24 mb-6 flex items-start">
                                    <FloatingElement
                                        image={
                                            project.category === 'Finance' ? `${import.meta.env.BASE_URL}assets/3dicons/wallet.png` :
                                                project.category === 'HR & Payroll' ? `${import.meta.env.BASE_URL}assets/3dicons/boy.png` :
                                                    project.category === 'Tax' ? `${import.meta.env.BASE_URL}assets/3dicons/calculator.png` :
                                                        project.category === 'CRM' ? `${import.meta.env.BASE_URL}assets/3dicons/target.png` :
                                                            project.category === 'Productivity' ? `${import.meta.env.BASE_URL}assets/3dicons/rocket.png` :
                                                                `${import.meta.env.BASE_URL}assets/3dicons/star.png`
                                        }
                                        className="w-20 rounded-xl icon-3d"
                                        duration={4 + index} // Varied duration
                                        yOffset={10}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description ? project.description.substring(0, 100) + '...' : 'Otomatisasi proses bisnis Anda dengan solusi terdepan di industri.'}
                                </p>

                                <div className="flex items-center text-white text-sm font-bold mt-auto">
                                    Pelajari Selengkapnya
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/projects" className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
                        Lihat Semua Produk
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
