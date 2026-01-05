
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
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Gallery Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-12 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Gallery
                </Link>

                <div className="md:w-3/4 lg:w-2/3 mx-auto">
                    <div className="aspect-square bg-gray-100 relative overflow-hidden mb-12 shadow-xl">
                        <img
                            src={gallery.image}
                            alt={gallery.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">{gallery.title}</h1>
                        </div>
                    </div>

                    <div className="space-y-8 text-center max-w-2xl mx-auto">
                        <div className="prose prose-xl text-gray-700 leading-relaxed font-light">
                            <p>{gallery.description || "No description available for this gallery collection."}</p>
                        </div>

                        <div>
                            <p className="text-gray-400 italic text-sm">Collection containing multiple works.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetail;
