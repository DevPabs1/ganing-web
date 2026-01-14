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
        <div className="pt-32 pb-20 px-4 md:px-12 bg-white">
            <div className="container-custom">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-50 text-mekari-blue text-xs font-bold uppercase tracking-wider">
                        Insights & Resources
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-mekari-dark mb-6">
                        Pusat Wawasan Bisnis
                    </h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Pelajari tren industri terbaru, tips manajemen, dan panduan penggunaan produk untuk mengembangkan bisnis Anda.
                    </p>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-8 mt-10 border-b border-gray-200">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`pb-4 text-base font-bold transition-all border-b-2 ${activeTab === cat
                                    ? 'border-mekari-blue text-mekari-blue'
                                    : 'border-transparent text-gray-400 hover:text-mekari-dark'
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
                                className="group block h-full flex flex-col"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-mekari-dark uppercase tracking-wide shadow-sm">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-3">
                                    <span className="text-sm text-gray-400 font-medium">{item.date}</span>
                                    <h3 className="text-xl font-bold text-mekari-dark group-hover:text-mekari-blue transition-colors line-clamp-3 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-mekari-blue text-sm font-bold mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
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
