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
        <section id="projects" className="py-32 px-6 bg-white">
            <div className="container-custom">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-50 text-mekari-blue text-xs font-bold uppercase tracking-wider">
                        Product Ecosystem
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-mekari-dark mb-6">
                        Solusi Komprehensif untuk <span className="text-mekari-blue">Setiap Divisi</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Satu platform terintegrasi untuk mengelola operasional bisnis Anda, dari keuangan hingga sumber daya manusia.
                    </p>
                </div>

                {/* Categories Pills (Visual only for now) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button className="px-6 py-2 rounded-full bg-mekari-dark text-white text-sm font-bold shadow-lg">All Products</button>
                    {categories.map(cat => (
                        <button key={cat.id} className="px-6 py-2 rounded-full bg-white border border-gray-200 text-gray-500 text-sm font-bold hover:border-mekari-blue hover:text-mekari-blue transition-all">
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
                                className="group block h-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-[100px] -z-0" />

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
                                        className="w-20 rounded-xl"
                                        duration={4 + index} // Varied duration
                                        yOffset={10}
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-mekari-dark mb-3 group-hover:text-mekari-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {project.description ? project.description.substring(0, 100) + '...' : 'Otomatisasi proses bisnis Anda dengan solusi terdepan di industri.'}
                                </p>

                                <div className="flex items-center text-mekari-blue text-sm font-bold mt-auto">
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
                    <Link to="/projects" className="inline-flex items-center px-8 py-4 border border-mekari-blue text-mekari-blue font-bold rounded-xl hover:bg-blue-50 transition-all">
                        Lihat Semua Produk
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
