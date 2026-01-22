import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Gallery = () => {
    // Mock blog/resource data
    const resources = [
        {
            id: 1,
            category: "Artikel",
            title: "5 Strategi Efisiensi Operasional untuk Bisnis Manufaktur",
            date: "12 Jan 2026",
            image: `${import.meta.env.BASE_URL}assets/3dicons/chart.png`
        },
        {
            id: 2,
            category: "E-Book",
            title: "Panduan Lengkap Pajak Perusahaan 2026",
            date: "08 Jan 2026",
            image: `${import.meta.env.BASE_URL}assets/3dicons/file-text.png`
        },
        {
            id: 3,
            category: "Studi Kasus",
            title: "Bagaimana TechCorp Menghemat 40% Biaya HR dengan Automasi",
            date: "05 Jan 2026",
            image: `${import.meta.env.BASE_URL}assets/3dicons/computer.png`
        }
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-0" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                            Wawasan Bisnis
                        </div>
                        <h2 className="text-4xl font-extrabold text-white">
                            Resource Center
                        </h2>
                    </div>
                    <Link to="/gallery" className="text-white font-bold hover:underline">
                        Lihat Semua Artikel →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/gallery/${item.id}`} className="group block h-full bg-white/5 rounded-2xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-300">
                                <div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6 bg-black/20">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105 icon-3d"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-lg text-xs font-bold text-white uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="space-y-3 px-2 pb-2">
                                    <span className="text-sm text-gray-400 font-medium">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-blue-400 text-sm font-bold mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Baca Selengkapnya
                                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
