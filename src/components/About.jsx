import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingElement from './FloatingElement';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -bottom-[20%] right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-0" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10 backdrop-blur-md">
                            Our Mission
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                            Memberdayakan Bisnis Melalui <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Teknologi</span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            Mekari adalah perusahaan Software-as-a-Service (SaaS) terdepan di Indonesia yang menyediakan solusi digital untuk operasional bisnis.
                        </p>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Misi kami adalah mempercepat pertumbuhan bisnis UMKM dan perusahaan besar dengan teknologi yang mudah diakses, terjangkau, dan berdampak tinggi.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                                <p className="text-sm text-gray-500">Tahun Pengalaman</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">800+</h4>
                                <p className="text-sm text-gray-500">Mekarians (Tim)</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">35k+</h4>
                                <p className="text-sm text-gray-500">Klien Aktif</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-2">24/7</h4>
                                <p className="text-sm text-gray-500">Support Lokal</p>
                            </div>
                        </div>

                        <Link to="/about" className="text-white font-bold hover:underline">
                            Pelajari Lebih Lanjut Tentang Kami →
                        </Link>
                    </div>

                    {/* Right: Visual/Office */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="h-48 bg-white/5 rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden relative backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                    <div className="absolute top-4 right-4 w-16 opacity-100">
                                        <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/bulb.png`} className="icon-3d" duration={6} />
                                    </div>
                                    <h4 className="font-bold text-white mt-auto relative z-10">Inovasi</h4>
                                    <p className="text-xs text-gray-400 relative z-10">Selalu berkembang</p>
                                </div>
                                <div className="h-64 bg-black/50 rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden relative backdrop-blur-sm group hover:bg-white/5 transition-colors">
                                    <div className="absolute top-8 right-0 left-0 mx-auto w-24 opacity-100">
                                        <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/puzzle.png`} className="icon-3d" duration={5} />
                                    </div>
                                    <h4 className="font-bold text-white mt-auto relative z-10">Kolaborasi</h4>
                                    <p className="text-xs text-gray-400 relative z-10">Kerja sama tim</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 bg-white/5 rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden relative backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                    <div className="absolute top-10 right-0 left-0 mx-auto w-20 opacity-100">
                                        <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/sheild.png`} className="icon-3d" duration={7} />
                                    </div>
                                    <h4 className="font-bold text-white mt-auto relative z-10">Integritas</h4>
                                    <p className="text-xs text-gray-400 relative z-10">Terpercaya & aman</p>
                                </div>
                                <div className="h-48 bg-white/5 rounded-2xl shadow-xl border border-white/10 p-6 flex flex-col justify-end overflow-hidden relative backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                    <div className="absolute top-4 right-4 w-16 opacity-100">
                                        <FloatingElement image={`${import.meta.env.BASE_URL}assets/3dicons/key.png`} className="icon-3d" duration={8} />
                                    </div>
                                    <h4 className="font-bold text-white mt-auto relative z-10">Solusi</h4>
                                    <p className="text-xs text-gray-400 relative z-10">Berorientasi hasil</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
