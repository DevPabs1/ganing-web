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
            image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            category: "E-Book",
            title: "Panduan Lengkap Pajak Perusahaan 2026",
            date: "08 Jan 2026",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            category: "Studi Kasus",
            title: "Bagaimana TechCorp Menghemat 40% Biaya HR dengan Automasi",
            date: "05 Jan 2026",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
        }
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-50 text-mekari-blue text-xs font-bold uppercase tracking-wider">
                            Wawasan Bisnis
                        </div>
                        <h2 className="text-4xl font-extrabold text-mekari-dark">
                            Resource Center
                        </h2>
                    </div>
                    <Link to="/gallery" className="text-mekari-blue font-bold hover:underline">
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
                            <Link to={`/gallery/${item.id}`} className="group block h-full">
                                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-mekari-dark uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <span className="text-sm text-gray-400 font-medium">{item.date}</span>
                                    <h3 className="text-xl font-bold text-mekari-dark group-hover:text-mekari-blue transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-mekari-blue text-sm font-bold mt-2 flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
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
