import React from 'react';
import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";

const Pill = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: #1C1C1E;
  border-radius: 20px;
  font-size: 14px;
`;



const HeroSection = () => {
    return (
        <div className="bg-bg-dark mt-20 container mx-auto text-text-light rounded-3xl md:rounded[3rem]">
            <div className="flex justify-between items-center py-20 px-[10%] gap-10 font-manrope">

                {/* Left Content */}
                <div className="flex-1">
                    <div className="mb-6">
                        <Pill>Ahmad Haziq Mu'izzaddin Wafiq</Pill>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-2xl text-text-light">
                        Transforming Ideas into Engaging Web Experiences
                    </h1>
                    <p className="text-lg text-text-gray mb-8 max-w-xl">
                        I am a developer passionate about translating complex ideas into beautiful, functional, and user-friendly web applications. My focus is on bridging the gap between user needs and business goals to create intuitive digital experiences that deliver real value.
                    </p>
                    <div className="mb-10 flex items-center">
                        <button className="px-8 py-4 border-2 border-white rounded-full text-black bg-white text-base cursor-pointer transition-all duration-200">
                            See My Work
                        </button>
                        <div className="w-14 h-14 border-2 border-white rounded-full bg-transparent text-white inline-flex items-center justify-center cursor-pointer transition-all duration-200  hover:rotate-45">
                            <GoArrowUpRight size={24} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="stat">
                            <strong className="text-3xl font-extrabold text-text-light">30%</strong>
                            <p className="text-text-gray">Development Efficiency</p>
                        </div>
                        <div className="stat">
                            <strong className="text-3xl font-extrabold text-text-light">30+</strong>
                            <p className="text-text-gray">Students Mentored</p>
                        </div>
                        <div className="stat">
                            <strong className="text-3xl font-extrabold text-text-light">2+ Year</strong>
                            <p className="text-text-gray">Professional Experience</p>
                        </div>
                    </div>
                </div>

                {/* Right Content (Image) */}
                <div className="flex-1 lg:flex max-w-max hidden">
                    <img
                        src="/assets/profile.jpeg"
                        alt="Foto profil Ahmad Haziq"
                        className="w-[400px] h-[500px] object-cover rounded-3xl shadow-lg"
                    />
                </div>

            </div>
        </div >
    );
};

export default HeroSection;