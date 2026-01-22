import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { galleries, galleryDetailContent } from '../data';

const GalleryDetail = () => {
    const { id } = useParams();
    const item = galleries.find(g => g.id === parseInt(id));
    const detail = galleryDetailContent[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">Article Not Found</h2>
                    <Link to="/gallery" className="text-white font-bold hover:underline">Return to Gallery</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-24 bg-black min-h-screen text-white">
            {/* Header */}
            <div className="container-custom mb-12">
                <Link to="/gallery" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-medium transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Insights
                </Link>

                <div className="max-w-4xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
                            {item.category}
                        </span>
                        <span className="text-gray-500 font-medium">{item.date}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                        {item.title}
                    </h1>
                </div>
            </div>

            {/* Featured Image */}
            <div className="container-custom mb-16">
                <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content & Sidebar */}
            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        {/* Render HTML content safely */}
                        {detail ? (
                            <div dangerouslySetInnerHTML={{ __html: detail.content }} />
                        ) : (
                            <p>Content is currently being updated. Please check back later.</p>
                        )}
                    </div>

                    {/* Tags */}
                    {detail && detail.tags && (
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Related Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {detail.tags.map(tag => (
                                    <span key={tag} className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Author Widget */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <h3 className="font-bold text-white mb-4">About the Author</h3>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold border border-white/5">
                                G
                            </div>
                            <div>
                                <p className="font-bold text-white">Ganing Team</p>
                                <p className="text-xs text-gray-400">Industry Analysts</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Widget */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white shadow-lg backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-3">Ready to optimize your business?</h3>
                        <p className="text-gray-300 mb-6 text-sm">
                            Get a free consultation with our experts today.
                        </p>
                        <Link to="/appointment" className="block w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors">
                            Book Session
                        </Link>
                    </div>
                </aside>
            </div>
        </article>
    );
};


export default GalleryDetail;
