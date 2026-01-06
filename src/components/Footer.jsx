import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-neutral-900">
            <div className="max-w-[90rem] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <a href="#" className="text-4xl font-extrabold tracking-tighter text-white block">
                            GANING
                        </a>
                        <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
                            Capturing the silence of space and the noise of structure.
                            Available for commissions worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">Sitemap</h4>
                        <ul className="space-y-4 text-lg font-medium text-gray-300">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/appointment" className="hover:text-white transition-colors">Book Session</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-8">Connect</h4>
                        <ul className="space-y-4 text-lg font-medium text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:wallstreetinquries@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600 pt-8 border-t border-neutral-900">
                    <p>&copy; {new Date().getFullYear()} Ganing. All rights reserved.</p>
                    <p>Designed with Intent.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
