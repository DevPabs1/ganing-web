
import React from 'react';

const projects = [
    {
        id: 1,
        title: "One & Only Cape Town",
        location: "Cape Town, 2025",
        image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "L7 Hotel Hanoi by Lotte",
        location: "Hanoi, 2025",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "The Meru Sanur",
        location: "Bali, 2025",
        image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Pan Pacific Jakarta",
        location: "Jakarta, 2025",
        image: "https://images.unsplash.com/photo-1596436807771-760241b7f914?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Wyndham Grand Busan",
        location: "Busan, 2025",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Padma Hotel Bandung",
        location: "Bandung, 2025",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Selected Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                            <p className="text-gray-500 text-sm">{project.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
