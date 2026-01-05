
import React from 'react';
import { Link } from 'react-router-dom';
import { galleries } from '../data';

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleries.map((item) => (
                        <Link to={`/gallery/${item.id}`} key={item.id} className="relative aspect-square group overflow-hidden cursor-pointer block">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                <h3 className="text-white text-3xl font-bold text-center px-4 tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {item.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
