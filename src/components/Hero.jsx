import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingElement from './FloatingElement';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-mekari-blue text-xs font-bold uppercase tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-mekari-blue animate-pulse"></span>
                        #1 System Integrator
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-mekari-dark leading-[1.15] mb-6">
                        Solusi Digital Terpercaya untuk <span className="text-mekari-blue">Pertumbuhan Bisnis</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                        Tingkatkan efisiensi dan produktivitas perusahaan Anda dengan ekosistem teknologi yang terintegrasi, aman, dan mudah digunakan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/appointment"
                            className="px-8 py-4 bg-mekari-blue text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                        >
                            Jadwalkan Konsultasi Gratis
                        </Link>
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-white text-mekari-dark border border-gray-200 font-bold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-center flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Lihat Demo Produk
                        </Link>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                            ))}
                        </div>
                        <p>Dipercaya oleh <span className="font-bold text-mekari-dark">5,000+</span> perusahaan</p>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full flex justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[600px]">
                        {/* Main 3D Composition */}
                        <FloatingElement
                            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
                            className="z-10 relative drop-shadow-2xl rounded-2xl"
                            duration={8}
                        />

                        {/* Floating Decorative Elements */}
                        <FloatingElement
                            image="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=400"
                            className="absolute -bottom-10 -left-10 w-32 z-20"
                            delay={1}
                            duration={5}
                            yOffset={15}
                        />

                        <FloatingElement
                            image="https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&q=80&w=400"
                            className="absolute -top-10 -right-5 w-24 z-0 opacity-80 blur-[1px]"
                            delay={2}
                            duration={7}
                            yOffset={-15}
                        />
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-3xl -z-10 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
