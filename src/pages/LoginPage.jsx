import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const LoginPage = () => {
    const [searchParams] = useSearchParams();
    const { login } = useAuth();
    const navigate = useNavigate();

    // Check both router params (if inside hash) and window.location (if outside hash)
    const query = new URLSearchParams(window.location.search);
    const hashQuery = searchParams;

    const error = hashQuery.get('error') || query.get('error');
    const token = hashQuery.get('token') || query.get('token');
    const username = hashQuery.get('username') || query.get('username');

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

    useEffect(() => {
        if (token && username) {
            login({ token, username });
            // Clear the query string from the URL to look cleaner
            window.history.replaceState({}, document.title, window.location.pathname + '#/');
            navigate('/');
        }
    }, [token, username, login, navigate]);

    const handleLogin = () => {
        window.location.href = `${apiUrl}/auth/github`;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800 text-center"
            >
                <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Restricted Access
                </h1>

                <p className="text-gray-400 mb-8">
                    This website is restricted to collaborators of the
                    <span className="text-white font-mono mx-1">ganing-web</span>
                    repository.
                </p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-6 text-sm">
                        {error === 'access_denied'
                            ? 'Access Denied: You are not a collaborator on the repository.'
                            : 'Authentication failed. Please try again.'}
                    </div>
                )}

                <button
                    onClick={handleLogin}
                    className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Sign in with GitHub
                </button>
            </motion.div>
        </div>
    );
};

export default LoginPage;
