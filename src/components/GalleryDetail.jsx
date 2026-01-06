import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleries } from '../data';

const GalleryDetail = () => {
    const { id } = useParams();
    const gallery = galleries.find(g => g.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!gallery) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">Gallery Not Found</h2>
                    <Link to="/" className="text-lg underline underline-offset-4 hover:text-gray-600 transition-colors">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <div className="pt-40 pb-20 px-6 md:px-12 max-w-[90rem] mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-400 hover:text-black mb-12 transition-colors text-sm tracking-widest uppercase font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Gallery
                </Link>

                <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-bold tracking-tighter text-black leading-none mb-8">
                    {gallery.title}
                </h1>
                <p className="text-2xl text-gray-500 font-light max-w-3xl leading-relaxed">
                    {gallery.description || "A curated selection of images exploring form, texture, and light."}
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-[100rem] mx-auto px-6 md:px-12 pb-32">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {/* Primary Image */}
                    <div className="break-inside-avoid mb-8">
                        <img
                            src={gallery.image}
                            alt={gallery.title}
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    {/* Placeholder for more images in the collection */}
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="break-inside-avoid mb-8">
                            <div className={`bg-gray-100 w-full rounded-lg overflow-hidden ${item % 2 === 0 ? 'aspect-[3/4]' : 'aspect-video'}`}>
                                <img
                                    src={`https://source.unsplash.com/random/800x${item % 2 === 0 ? '1000' : '600'}?architecture,interior&sig=${item}`}
                                    alt="Gallery Item"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.target.src = gallery.image }} // Fallback
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryDetail;
