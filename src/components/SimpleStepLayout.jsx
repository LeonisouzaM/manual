import React from 'react';

const SimpleStepLayout = ({ children, className = "" }) => {
    return (
        <div className={`container animate-fade-in ${className}`}>
            <div className="card glass-panel w-full">
                {children}
            </div>
        </div>
    );
};

export default SimpleStepLayout;
