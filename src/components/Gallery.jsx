
import React from 'react';

const galleries = [
    { title: "Shapes & Structures", image: "https://images.unsplash.com/photo-1516893842880-5d8aafa7cc4a?q=80&w=2800&auto=format&fit=crop" },
    { title: "Beautiful People", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2800&auto=format&fit=crop" },
    { title: "Madame Nature", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2800&auto=format&fit=crop" },
    { title: "What I See on the Street", image: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=2800&auto=format&fit=crop" }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Gallery</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {galleries.map((item) => (
                        <div key={item.title} className="relative aspect-square group overflow-hidden cursor-pointer">
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
