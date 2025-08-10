// src/components/AboutMe.js

import React from 'react';
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { GoVerified } from "react-icons/go";

const StatItem = ({ icon, value, label, isBlack = false }) => {
    const theme = {
        light: {
            fill: '#FFFFFF',
            stroke: '#E5E7EB',
            iconText: '#1F2937',
            valueText: '#1F2937',
            labelText: '#6B7280'
        },
        dark: {
            fill: '#111827',
            stroke: '#374151',
            iconText: '#FFFFFF',
            valueText: '#FFFFFF',
            labelText: '#9CA3AF'
        }
    };
    const currentStyle = isBlack ? theme.dark : theme.light;

    return (
        <div className="relative" style={{ aspectRatio: '258 / 140' }}>
            <svg
                viewBox="0 0 258 140"
                className="absolute inset-0 w-full h-full drop-shadow-sm"
                fill={currentStyle.fill}
                stroke={currentStyle.stroke}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M47 25V21C47 9.95431 55.9543 1 67 1H237.5C248.546 1 257.5 9.95431 257.5 21V119C257.5 130.046 248.546 139 237.5 139H21C9.95431 139 1.00001 130.046 1.00001 119L1 65C1 53.9543 9.95431 45 21 45H27C38.0457 45 47 36.0457 47 25Z" />
            </svg>

            {/* 2. Konten (Ikon & Teks) yang diposisikan di atas SVG */}
            <div className="relative z-10 h-full flex items-center justify-start p-6">
                <div className="w-1/3 text-center" style={{ color: currentStyle.iconText }}>
                    {icon}
                </div>
                <div className="w-2/3 pl-2">
                    <p className="text-3xl font-extrabold" style={{ color: currentStyle.valueText }}>
                        {value}
                    </p>
                    <p className="text-sm" style={{ color: currentStyle.labelText }}>
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
};

const AboutMe = () => {
    const skills = ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Laravel"];

    return (
        <div className="py-24 px-[10%] font-manrope bg-bg-light">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-extrabold text-text-dark sticky top-24">
                        About Me
                    </h2>
                </div>
                <div className="lg:col-span-2">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        A results-oriented Software Developer specializing in frontend development, passionate about creating seamless and efficient user experiences by translating UI/UX designs into high-quality, maintainable code.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 my-12">
                        <StatItem
                            icon={<BsBriefcase size={32} />}
                            value="2+ Year"
                            label="Experience"
                            isBlack={false}
                        />
                        <StatItem
                            icon={<IoRocketOutline size={32} />}
                            value="30%"
                            label="Efficiency Gain"
                            isBlack={true}
                        />
                        <StatItem
                            icon={<BsCodeSlash size={32} />}
                            value="10+"
                            label="Technologies"
                            isBlack={true}
                        />
                        <StatItem
                            icon={<GoVerified size={32} />}
                            value="5+"
                            label="Certifications"
                            isBlack={false}
                        />
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {skills.map(skill => (
                            <span key={skill} className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;