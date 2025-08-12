import React from 'react';
import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';

const Pill = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: #1C1C1E;
  border-radius: 20px;
  font-size: 14px;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
}


const HeroSection = () => {
    return (
        <div className="bg-bg-dark mt-20 container mx-auto text-text-light rounded-3xl md:rounded[3rem]">
            <motion.div 
                className="flex justify-between items-center py-20 mb-10 px-[10%] gap-10 font-manrope"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
            >

                <div className="flex-1">
                    <motion.div variants={itemVariants} className="mb-6">
                        <Pill>Ahmad Haziq Mu'izzaddin Wafiq</Pill>
                    </motion.div>
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-2xl text-text-light"
                    >
                        Transforming Ideas into Engaging Web Experiences
                    </motion.h1>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-text-gray mb-8 max-w-xl"
                    >
                        I am a developer passionate about translating complex ideas into beautiful, functional, and user-friendly web applications. My focus is on bridging the gap between user needs and business goals to create intuitive digital experiences that deliver real value.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mb-10 flex items-center">
                        <button className="px-8 py-4 border-2 border-white rounded-full text-black bg-white text-base cursor-pointer transition-all duration-200">
                            See My Work
                        </button>
                        <div className="w-14 h-14 border-2 border-white rounded-full bg-transparent text-white inline-flex items-center justify-center cursor-pointer transition-all duration-200  hover:rotate-45">
                            <GoArrowUpRight size={24} />
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-10">
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
                    </motion.div>
                </div>

                <motion.div
                    className="flex-1 lg:flex max-w-max hidden"
                    variants={imageVariants}
                    
                >
                    <img
                        src="/assets/profile.jpeg"
                        alt="Foto profil Ahmad Haziq"
                        className="w-[400px] h-[500px] object-cover rounded-3xl shadow-lg"
                    />
                </motion.div>

            </motion.div>
        </div >
    );
};

export default HeroSection;