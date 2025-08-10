// src/components/AboutMe.js

import React from 'react';
// Kita akan menggunakan beberapa ikon untuk memperjelas poin
import { CgWebsite } from "react-icons/cg";
import { IoRocketOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

const AboutMe = () => {
    return (
        <div className="py-20 px-[10%] font-manrope bg-bg-light">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Kolom Kiri: Judul */}
                <div className="lg:col-span-1">
                    <h2 className="text-5xl font-extrabold text-text-dark sticky top-20">
                        A Little More About Me
                    </h2>
                </div>

                {/* Kolom Kanan: Konten */}
                <div className="lg:col-span-2">
                    <p className="text-lg text-gray-600 leading-relaxed">
                        [cite_start]A results-oriented Software Developer with a specialization in frontend development, passionate about creating seamless and efficient user experiences. [cite: 61] [cite_start]My core strength lies in translating UI/UX designs into high-quality, maintainable code. [cite: 63] [cite_start]With over a year of hands-on experience using modern technologies like React.js and Next.js, my goal is to build digital experiences that are not only well-engineered but also perfectly aligned with user needs. [cite: 62, 66]
                    </p>

                    <div className="mt-12 space-y-8">
                        {/* Poin Kekuatan 1 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full border border-gray-200/80 shadow-sm">
                                <CgWebsite size={24} className="text-text-dark"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-dark">Frontend Development</h3>
                                <p className="text-gray-600 mt-1">
                                    [cite_start]Proficient in modern JavaScript technologies like React & Next.js to build responsive and dynamic user interfaces. [cite: 62]
                                </p>
                            </div>
                        </div>

                        {/* Poin Kekuatan 2 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full border border-gray-200/80 shadow-sm">
                                <IoRocketOutline size={24} className="text-text-dark"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-dark">Code Efficiency</h3>
                                <p className="text-gray-600 mt-1">
                                    [cite_start]Proven ability to increase team development efficiency by 30% by designing and implementing reusable component systems. [cite: 64]
                                </p>
                            </div>
                        </div>

                        {/* Poin Kekuatan 3 */}
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-full border border-gray-200/80 shadow-sm">
                                <BsPeople size={24} className="text-text-dark"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-dark">Mentoring & Quality Assurance</h3>
                                <p className="text-gray-600 mt-1">
                                    [cite_start]Experienced in mentoring junior developers and conducting User Acceptance Testing (UAT) to ensure a high-quality, user-approved final product. [cite: 65]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;