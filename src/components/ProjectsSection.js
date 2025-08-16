import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from "react-icons/fi";
import projects from '../data/projectData.js';

const ProjectsSection = () => {
    return (
        <section className="py-20 px-[8%] font-manrope">
            <div className="text-center mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900"
                >
                    My Recent Work
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
                >
                    A curated list of projects I’ve worked on recently, showcasing my skills in design & development.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => {

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-md mx-auto aspect-[230/258]"
                        >
                            <svg
                                viewBox="0 0 230 258"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute inset-0 w-full h-full fill-bg-card"
                                strokeWidth="1.5"
                            >
                                <path
                                    d="M26 257h126.885c10.422 0 19.285-7.604 20.869-17.904.164-1.062.246-2.136.246-3.211V227.5c0-13.807 11.193-25 25-25h5c13.807 0 25-11.193 25-25V26c0-13.807-11.193-25-25-25H26C12.193 1 1 12.193 1 26v206c0 13.807 11.193 25 25 25Z"
                                />
                            </svg>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="h-[55%] p-4 pb-0">
                                    <div className="w-full h-full overflow-hidden rounded-[30px]">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 p-5 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-text-light mb-1">
                                            {project.title}
                                        </h3>
                                        {/* <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p> */}
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col gap-0 text-md text-text-gray">
                                            <span>Duration: {project.duration}</span>
                                            <span>Conversion: {project.conversion}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer bg-bg-card text-white border-2 border-bg-card hover:bg-transparent hover:border-bg-card hover:text-bg-card transition-all duration-300 ease-in-out
">
                                    <FiArrowRight className="text-2xl" />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;