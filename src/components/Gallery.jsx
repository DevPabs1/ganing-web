import React from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../data';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <section id="gallery" className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-24">
                    <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] text-black">
                        Visual <br />
                        <span className="text-gray-300">Journal.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-light leading-relaxed">
                        A curated collection of visual experiments, personal works, and behind-the-scenes moments.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleries.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index % 3 * 0.1 }}
                            className="break-inside-avoid"
                        >
                            <Link
                                to={`/gallery/${item.id}`}
                                className="group cursor-pointer block relative overflow-hidden rounded-2xl"
                            >
                                <div className="relative w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-300">
                                            <span className="text-sm font-bold tracking-widest uppercase text-black">View</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center px-2">
                                    <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-gray-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <span className="text-xs font-mono text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                                        {index < 9 ? `0${index + 1}` : index + 1}
                                    </span>
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
