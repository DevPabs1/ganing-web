import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeDisplay = ({ url = "https://DevPabs1.github.io/ganing-web", size = 100 }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-white rounded-xl shadow-lg inline-block transition-transform hover:scale-105 duration-300">
                <QRCode value={url} size={size} />
            </div>
            <span className="text-xs text-gray-400 font-light tracking-wide">Scan to view on mobile</span>
        </div>
    );
};

export default QRCodeDisplay;
