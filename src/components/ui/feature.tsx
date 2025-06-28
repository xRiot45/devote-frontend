import React from 'react';

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
    return (
        <div className="flex items-start gap-3 font-sans">
            {icon}
            <div>
                <p className="font-semibold font-sans text-md">{title}</p>
                <p className="text-sm text-slate-400 font-sans">{description}</p>
            </div>
        </div>
    );
};

export default Feature;
