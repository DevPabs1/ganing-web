import React from 'react';
import { motion } from 'framer-motion';

const FeatureZigZag = ({ features }) => {
    return (
        <div className="flex flex-col">
            {features.map((feature, index) => {
                const isEven = index % 2 === 0;
                return (
                    <section
                        key={index}
                        id={feature.id}
                        className={`py-20 overflow-hidden ${isEven ? 'bg-black' : 'bg-white/5'}`}
                    >
                        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                            >
                                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/10">
                                    {feature.tagline || 'Feature'}
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    {feature.title}
                                </h2>
                                <div className="text-lg text-gray-400 space-y-4 leading-relaxed">
                                    {/* Render HTML or text */}
                                    <div dangerouslySetInnerHTML={{ __html: feature.description }} />
                                </div>

                                {feature.link && (
                                    <a href={feature.link} className="inline-block mt-8 text-white font-bold hover:underline">
                                        Pelajari Selengkapnya →
                                    </a>
                                )}
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-tr ${isEven ? 'from-blue-500/10' : 'from-purple-500/10'} to-transparent rounded-3xl transform ${isEven ? 'rotate-2' : '-rotate-2'} -z-10`} />
                                <div className="bg-white/5 rounded-2xl shadow-xl border border-white/10 overflow-hidden min-h-[300px] flex items-center justify-center backdrop-blur-sm">
                                    {feature.image ? (
                                        <img src={feature.image} alt={feature.title} className="w-full h-auto" />
                                    ) : (
                                        <div className="text-gray-600 font-bold text-4xl select-none opacity-20">
                                            {index + 1}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default FeatureZigZag;
