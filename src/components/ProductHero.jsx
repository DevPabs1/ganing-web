import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingElement from './FloatingElement';

const ProductHero = ({ title, description, benefits, image, ctaPrimary, ctaSecondary }) => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden">
            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-mekari-dark mb-6 leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {/* Benefits Checklists */}
                    {benefits && (
                        <div className="space-y-4 mb-10">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5 shrink-0">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-mekari-text font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to={ctaPrimary?.link || "/appointment"}
                            className="px-8 py-3.5 bg-mekari-blue text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all text-center"
                        >
                            {ctaPrimary?.text || "Hubungi Kami"}
                        </Link>
                        {ctaSecondary && (
                            <button
                                onClick={ctaSecondary.action}
                                className="px-8 py-3.5 bg-white text-mekari-dark border border-gray-200 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-center"
                            >
                                {ctaSecondary.text}
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract backdrop */}
                    <div className="absolute inset-0 bg-mekari-blue/5 rounded-3xl transform rotate-3 scale-105 -z-10" />

                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                        {image ? (
                            <>
                                <img src={image} alt={title} className="w-full h-auto object-cover relative z-10" />
                                {/* 3D Decoration Overlay */}
                                <div className="absolute -bottom-10 -right-10 w-40 z-20 pointer-events-none">
                                    <FloatingElement image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" duration={8} yOffset={20} />
                                </div>
                                <div className="absolute -top-6 -left-6 w-24 z-20 pointer-events-none opacity-80">
                                    <FloatingElement image="https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400" duration={6} yOffset={-15} />
                                </div>
                            </>
                        ) : (
                            // Fallback Abstract Dashboard
                            <div className="aspect-[4/3] bg-gray-50 relative p-8">
                                <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative z-10">
                                    <div className="w-1/3 h-4 bg-gray-100 rounded mb-8" />
                                    <div className="space-y-4">
                                        <div className="h-6 bg-blue-50 rounded w-full" />
                                        <div className="h-6 bg-gray-50 rounded w-5/6" />
                                        <div className="h-6 bg-gray-50 rounded w-4/6" />
                                    </div>
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-gray-50 rounded-lg" />
                                        <div className="h-24 bg-gray-50 rounded-lg" />
                                    </div>
                                </div>
                                {/* Floating Element replaced with 3D */}
                                <div className="absolute bottom-8 right-8 w-24 z-20">
                                    <FloatingElement image="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=400" duration={5} />
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductHero;
