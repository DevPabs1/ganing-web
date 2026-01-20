import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const TokenHandler = () => {
    const [searchParams] = useSearchParams();
    const { login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');
        const username = searchParams.get('username');

        if (token && username) {
            login({ token, username });
            // Clear the query string from the URL
            window.history.replaceState({}, document.title, window.location.pathname + '#/');
            // No need to navigate if we are already on home (which is where standard redirect goes)
            // But if we want to be safe:
            // navigate('/'); 
        }
    }, [searchParams, login, navigate]);

    return null; // This component handles logic only, no UI
};

export default TokenHandler;
