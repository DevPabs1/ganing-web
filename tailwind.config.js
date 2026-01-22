/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // 'mekari-blue': '#4459E1', // REMOVED for B&W Theme
                // 'mekari-dark': '#0C213B', // REMOVED for B&W Theme
                // 'mekari-grey': '#F8F9FA', // REMOVED for B&W Theme
                // 'mekari-purple': '#6B46C1', // REMOVED for B&W Theme
                // 'mekari-text': '#2D3748', // REMOVED for B&W Theme
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
                '3xl': '24px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            animation: {
                fadeIn: 'fadeIn 0.8s ease-out forwards',
                float: 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
