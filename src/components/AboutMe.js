import React from 'react';
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { GoVerified } from "react-icons/go";

const StatItem = ({ icon, value, label, isBlack = false }) => {
    return (
        <div className="relative aspect-[258/180]">
            <svg
                viewBox="0 0 258 140"
                className={`absolute inset-0 w-full h-full 
                    ${isBlack ? 'fill-bg-card stroke-border-color' : 'fill-white stroke-gray-200'}`
                }
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M47 25V21C47 9.95431 55.9543 1 67 1H237.5C248.546 1 257.5 9.95431 257.5 21V119C257.5 130.046 248.546 139 237.5 139H21C9.95431 139 1.00001 130.046 1.00001 119L1 65C1 53.9543 9.95431 45 21 45H27C38.0457 45 47 36.0457 47 25Z" />
            </svg>

            <div className='absolute top-12 left-5 z-20 text-bg-card'>
                {icon}
            </div>
            
            <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center">
                <p className={`text-4xl font-extrabold 
                    ${isBlack ? 'text-text-light' : 'text-gray-800'}`
                }>
                    {value}
                </p>
                <p className={`text-sm -mt-1 
                    ${isBlack ? 'text-text-gray' : 'text-gray-500'}`
                }>
                    {label}
                </p>
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
                    <h2 className="text-8xl font-extrabold text-text-dark sticky top-24">
                        A Little More About Me
                    </h2>
                </div>
                <div className="lg:col-span-2">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        A results-oriented Software Developer specializing in frontend development, passionate about creating seamless and efficient user experiences by translating UI/UX designs into high-quality, maintainable code.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        <StatItem
                            icon={<BsBriefcase size={33} />}
                            value="2+ Year"
                            label="Experience"
                            isBlack={false}
                        />
                        <StatItem
                            icon={<IoRocketOutline size={33} />}
                            value="30%"
                            label="Efficiency Gain"
                            isBlack={true}
                        />
                        <StatItem
                            icon={<BsCodeSlash size={33} />}
                            value="10+"
                            label="Technologies"
                            isBlack={true}
                        />
                        <StatItem
                            icon={<GoVerified size={33} />}
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