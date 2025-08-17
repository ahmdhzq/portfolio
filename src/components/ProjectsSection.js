import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import projects from '../data/projectData.js';
import ProjectDetailModal from './ProjectDetailModal';

const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const INITIAL_PROJECTS_COUNT = 3;

    const projectsToShow = showAll ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

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

            <div className="flex flex-wrap justify-center gap-10">
                {projectsToShow.map((project, index) => {

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-sm aspect-[230/258] md:w-[calc(33.33%-1.66rem)]"
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
                                    </div>
                                    <div className="flex justify-between items-end max-w-[80%]">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="bg-white/10 text-text-gray text-xs font-semibold px-3 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="absolute bottom-2 right-2 h-16 w-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-pointer bg-bg-card text-white border-2 border-bg-card hover:bg-transparent hover:border-bg-card hover:text-bg-card transition-all duration-300 ease-in-out"
                                    aria-label={`View details for ${project.title}`}
                                >
                                    <FiArrowRight className="text-2xl" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className='mt-16 flex justify-center'>
                {!showAll && projects.length > INITIAL_PROJECTS_COUNT && (
                    <motion.button
                        onClick={() => setShowAll(true)}
                        className='bg-bg-card text-white px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-bg-card border-2 border-bg-card transition-all duration-300 flex items-center gap-2'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Show All Projects
                        <FiArrowDown />
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectDetailModal
                        project={selectedProject}
                        onClose={()=>setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;