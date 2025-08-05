import React from 'react';

const FeatureCard = ({ number, title, children }) => {
    return (
        <div className="bg-bg-card p-8 rounded-3xl border border-border-color">

            {/* Top part with number and title */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-6xl font-extrabold text-text-gray opacity-50">{number}</span>
            </div>

            {/* The main content text */}
            <div className="mt-4">
                <h3 className="text-2xl font-bold text-text-light mb-2">{title}</h3>
                <p className="text-text-gray leading-relaxed">
                    {children}
                </p>
            </div>

        </div>
    );
};

export default FeatureCard;