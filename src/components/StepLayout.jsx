import React from 'react';
import { motion } from 'framer-motion';

const StepLayout = ({ children, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`container ${className}`}
        >
            <div className="card glass-panel w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default StepLayout;
