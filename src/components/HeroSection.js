import React from 'react';
import styled from 'styled-components';

const Pill = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: #1C1C1E;
  border-radius: 20px;
  font-size: 14px;
`;

const HeroButton = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
  background-color: #FFFFFF;
  color: #121212;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeroImagePlaceholder = styled.div`
  width: 400px;
  height: 500px;
  background-color: #1C1C1E;
  border-radius: 20px;
`;

const HeroSection = () => {
    return (
        <div className="bg-bg-dark text-text-light rounded-3xl md:rounded-[3rem]">
            <div className="flex justify-between items-center py-20 px-[10%] gap-10 font-manrope">

                {/* Left Content */}
                <div className="flex-1">
                    <div className="mb-6">
                        <Pill>Ahmad Haziq Mu'izzaddin Wafiq</Pill>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-2xl text-text-light">
                        Building Responsive & User-Centric Web Apps
                    </h1>
                    <p className="text-lg text-text-gray mb-8 max-w-xl">
                        A results-focused Frontend Developer with over a year of experience in building responsive and efficient web applications using React.js and Next.js.
                    </p>
                    <div className="mb-10">
                        <HeroButton>See My Work ↙</HeroButton>
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
                            <strong className="text-3xl font-extrabold text-text-light">1+ Year</strong>
                            <p className="text-text-gray">Professional Experience</p>
                        </div>
                    </div>
                </div>

                {/* Right Content (Image) */}
                <div className="flex-1 lg:flex justify-center items-center hidden">
                    <HeroImagePlaceholder />
                </div>

            </div>
        </div >
    );
};

export default HeroSection;