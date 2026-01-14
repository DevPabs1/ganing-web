import React from 'react';
import FloatingElement from './FloatingElement';

const StatsSection = () => {
    const stats = [
        { label: "Active Users", value: "35,000+" },
        { label: "Companies", value: "5,000+" },
        { label: "Customer Retention", value: "98%" },
        { label: "Support Satisfaction", value: "4.9/5" },
    ];

    return (
        <section className="py-20 bg-mekari-dark text-white relative overflow-hidden">
            {/* 3D Background Decor */}
            <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none">
                <FloatingElement image="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=400" duration={10} yOffset={30} />
            </div>
            <div className="absolute bottom-0 left-10 w-48 opacity-5 pointer-events-none">
                <FloatingElement image="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=400" duration={12} yOffset={20} />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="space-y-2">
                            <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{stat.value}</h3>
                            <p className="text-blue-200 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
