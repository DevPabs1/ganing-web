import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link
                        to={`/gallery/${item.id}`}
                        key={item.id}
                        className="group block relative overflow-hidden rounded-xl break-inside-avoid opacity-0 animate-fadeIn hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out"
                        style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 animate-float"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                <span className="text-white/60 text-sm font-mono mb-2">0{index + 1}</span>
                                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
