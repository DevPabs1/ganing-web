import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-9xl font-extrabold tracking-tighter text-white/10 mb-8">404</h1>
            <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-gray-400 max-w-lg mb-12 text-lg">
                The page you are looking for doesn't exist or has been moved.
                Our platform is constantly evolving.
            </p>
            <Link
                to="/"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:-translate-y-1 block"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
