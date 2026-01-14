import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { galleries } from '../data';

const GalleryPage = () => {
    return (
        <div className="pt-32 pb-20 px-4 md:px-12 max-w-[90rem] mx-auto">
            <div className="mb-16">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Visual Journal</h1>
                <p className="text-xl text-gray-500 max-w-2xl">
                    Explorations in light, shadow, and composition. A personal archive of visual stories.
                </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {galleries.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="break-inside-avoid"
                    >
                        <Link
                            to={`/gallery/${item.id}`}
                            className="group block relative overflow-hidden rounded-xl hover:shadow-2xl transition-all duration-500 ease-out"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <span className="text-white/60 text-sm font-mono mb-2">0{index + 1}</span>
                                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
