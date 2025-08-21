import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full max-w-5xl aspect-[838/488]"
                onClick={(e) => e.stopPropagation()}
            >
                <svg
                    viewBox="0 0 838 488"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full fill-bg-dark stroke-border-color"
                    strokeWidth="1.5"
                >
                    <path
                        d="M140 1c-20.158 0-36.5 16.342-36.5 36.5S87.158 74 67 74H51C23.386 74 1 96.386 1 124v313c0 27.614 22.386 50 50 50h736c27.614 0 50-22.386 50-50V124c0-27.614-22.386-50-50-50h-15c-20.158 0-36.5-16.342-36.5-36.5S719.158 1 699 1z"
                    />
                </svg>

                <div className='relative z-10 h-full w-full flex flex-col justify-center items-center p-4 gap-y-3 pt-10'>
                    <h2 className="text-4xl font-extrabold text-text-light text-center">{project.title}</h2>
                    <div className="flex flex-col justify-center h-full items-center md:flex-row overflow-hidden">
                        <div className="w-full md:w-1/2 h-full flex-shrink-0 p-6 py-9">
                            <div className="w-full h-full rounded-3xl overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-8 pt-4 flex flex-col overflow-y-auto">
                            <p className="text-text-gray leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <h3 className="text-lg font-semibold text-text-light mb-3">
                                Technologies & Tags
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-border-color text-text-gray text-sm font-medium px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-border-color">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-full text-text-gray border border-border-color hover:text-text-light hover:bg-border-color cursor-pointer transition-all duration-200"
                                    >
                                        <FaGithub />
                                        View Code
                                    </a>
                                )}
                                {project.livePreviewUrl && (
                                    <a
                                        href={project.livePreviewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 rounded-full text-bg-dark bg-text-light font-semibold text-base cursor-pointer transition-all duration-200 hover:bg-opacity-80"
                                    >
                                        <FiExternalLink />
                                        Live Preview
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetailModal;