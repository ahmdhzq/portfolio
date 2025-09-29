/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiX } from 'react-icons/fi';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};

const MobileSvgBackground = () => (
    <svg
        viewBox="0 0 838 1444"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full fill-bg-dark stroke-border-color"
        strokeWidth="1.5"
        preserveAspectRatio="none"
    >
        <path d="M153.289 1.00012C125.757 1.00012 103.406 23.2573 103.29 50.7888L103.041 109.711C102.924 137.243 80.5727 159.5 53.041 159.5H51C23.3858 159.5 1 181.886 1 209.5V1226.4V1393C1 1420.61 23.3858 1443 51 1443H74H764H787C814.614 1443 837 1420.61 837 1393V1226.4V208C837 180.386 814.614 158 787 158H785.5C757.886 158 735.5 135.614 735.5 108V51C735.5 23.3858 713.114 1 685.5 1.00001L153.289 1.00012Z" />
    </svg>
);

const DesktopSvgBackground = () => (
    <svg
        viewBox="0 0 838 488"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full fill-bg-dark stroke-border-color"
        strokeWidth="1.5"
        preserveAspectRatio="none"
    >
        <path d="M140 1c-20.158 0-36.5 16.342-36.5 36.5S87.158 74 67 74H51C23.386 74 1 96.386 1 124v313c0 27.614 22.386 50 50 50h736c27.614 0 50-22.386 50-50V124c0-27.614-22.386-50-50-50h-15c-20.158 0-36.5-16.342-36.5-36.5S719.158 1 699 1z" />
    </svg>
);


const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) return null;
    const isDesktop = useMediaQuery('(min-width: 1024px)');

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
                className="relative w-full max-w-sm h-full max-h-[90vh] aspect-[838/1444] lg:max-w-5xl lg:h-auto lg:max-h-[550px] lg:aspect-[838/488] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {isDesktop ? <DesktopSvgBackground /> : <MobileSvgBackground />}

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 text-text-gray hover:text-text-light transition-colors"
                    aria-label="Close modal"
                >
                    <FiX size={28} />
                </button>

                <div className='relative z-10 h-full w-full flex flex-col p-4 sm:p-6 md:p-4'>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-text-light max-w-60 mx-auto text-center pt-2 sm:pt-8 pb-4 flex-shrink-0">
                        {project.title}
                    </h2>

                    <div className="flex flex-col md:flex-row flex-1 h-full overflow-hidden">

                        <div className="w-full md:w-1/2 flex-shrink-0 h-48 sm:h-64 md:h-full pt-4 sm:pt-0 p-2 md:p-6 md:py-9">
                            <div className="w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 p-4 md:p-8 md:pt-4 flex flex-col flex-1 overflow-y-auto">
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