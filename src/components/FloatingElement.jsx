import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ image, className, delay = 0, duration = 6, yOffset = 20 }) => {
    return (
        <motion.div
            animate={{
                y: [0, -yOffset, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={`relative ${className}`}
        >
            <img
                src={image}
                alt="3D Floating Element"
                className="w-full h-auto drop-shadow-2xl"
            />
        </motion.div>
    );
};

export default FloatingElement;
