import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleries } from '../data';

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Artikel', 'E-Book', 'Studi Kasus', 'Webinar'];

    const filteredResources = activeTab === 'All'
        ? galleries
        : galleries.filter(g => g.category === activeTab);

    return (
        <div className="pt-32 pb-20 px-4 md:px-12 bg-black text-white">
            <div className="container-custom">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                        Insights & Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Pusat Wawasan Bisnis
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Pelajari tren industri terbaru, tips manajemen, dan panduan penggunaan produk untuk mengembangkan bisnis Anda.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-8 mt-10 border-b border-white/10">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`pb-4 text-base font-bold transition-all border-b-2 ${activeTab === cat
                                    ? 'border-white text-white'
                                    : 'border-transparent text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                to={`/gallery/${item.id}`}
                                className="group block h-full flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                            >
                                <div className="relative overflow-hidden aspect-[16/9] mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white uppercase tracking-wide border border-white/10 shadow-lg">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3 px-6 pb-6 pt-0">
                                    <span className="text-sm text-gray-500 font-medium">{item.date}</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors line-clamp-3 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-white text-sm font-bold mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                        Baca Artikel
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
        </div>
    );
};

export default GalleryPage;
