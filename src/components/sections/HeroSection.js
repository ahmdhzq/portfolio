import React from 'react';
import styled from 'styled-components';
import { GoArrowUpRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { BsBriefcase, BsCodeSlash } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";

const Pill = styled.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: #1C1C1E;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" }
    }
};

const HeroSection = () => {
    return (
        <section id='home' className="bg-bg-dark mt-24 container mx-auto text-text-light rounded-3xl md:rounded-[3rem]">
            <motion.div
                className="flex flex-col lg:flex-row justify-between items-center py-16 mb-10 px-[10%] gap-10 font-manrope"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Left Content */}
                <div className="flex-1">
                    <motion.div variants={itemVariants} className="mb-4">
                        <Pill>Ahmad Haziq Mu'izzaddin Wafiq</Pill>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-2xl"
                    >
                        Crafting Seamless Digital Experiences with Precision Code
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-text-gray mb-8 max-w-xl"
                    >
                        As a dedicated Frontend Developer, I specialize in translating intricate UI/UX designs into high-quality, maintainable code. My focus is on creating responsive and scalable web applications that deliver an exceptional user experience.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mb-14 flex items-center">
                        <button className="px-8 py-4 border-2 border-white rounded-full text-black bg-white font-semibold text-base cursor-pointer transition-all duration-200 hover:bg-gray-200">
                            See My Work
                        </button>
                        <div className="w-14 h-14 border-2 border-white rounded-full bg-transparent text-white inline-flex items-center justify-center cursor-pointer transition-all duration-200 hover:rotate-45 ml-4">
                            <GoArrowUpRight size={24} />
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 md:gap-10">
                        <div className="stat flex items-center gap-3">
                            <BsBriefcase size={28} className="text-gray-300" />
                            <div>
                                <strong className="text-3xl font-extrabold text-text-light">2+</strong>
                                <p className="text-text-gray">Years Experience</p>
                            </div>
                        </div>
                        <div className="stat flex items-center gap-3">
                            <IoRocketOutline size={28} className="text-gray-300" />
                            <div>
                                <strong className="text-3xl font-extrabold text-text-light">30%</strong>
                                <p className="text-text-gray">Development Efficiency</p>
                            </div>
                        </div>
                        <div className="stat flex items-center gap-3">
                            <BsCodeSlash size={28} className="text-gray-300" />
                            <div>
                                <strong className="text-3xl font-extrabold text-text-light">10+</strong>
                                <p className="text-text-gray">Core Technologies</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content */}
                <motion.div
                    className="flex-1 lg:flex max-w-max hidden relative justify-center mt-10 lg:mt-0"
                    variants={imageVariants}
                >
                    <img
                        src="/assets/profile.png"
                        alt="Ahmad Haziq"
                        className="w-[400px] h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute bottom-6 -left-10 backdrop-blur-xl bg-white/10 rounded-2xl p-5 shadow-lg border border-white/20">
                        <h3 className="text-xl font-bold text-white">Ahmad Haziq M. W.</h3>
                        <p className="text-base text-text-gray">Frontend Developer</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;