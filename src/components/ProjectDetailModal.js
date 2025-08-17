import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
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
            {/* Panel Modal */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                // PERUBAHAN 1: Ukuran modal diperbesar dari 4xl ke 5xl
                // PERUBAHAN 2: Tema diubah menjadi dark theme (bg-bg-card)
                className="bg-bg-card text-text-light rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-border-color"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tombol Close */}
                <button
                    onClick={onClose}
                    // PERUBAHAN 2: Warna tombol close disesuaikan
                    className="absolute top-4 right-4 text-text-gray hover:text-text-light transition-colors z-10"
                >
                    <IoClose size={28} />
                </button>

                {/* Kolom Kiri: Gambar Proyek */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover"
                    />
                </div>

                {/* Kolom Kanan: Detail Proyek */}
                <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                    {/* PERUBAHAN 2: Warna teks disesuaikan */}
                    <h2 className="text-4xl font-extrabold text-text-light mb-2">{project.title}</h2>

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
                                // PERUBAHAN 2: Warna tag disesuaikan
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
                                className="flex items-center gap-2 text-text-gray font-semibold py-2 px-4 rounded-lg border border-border-color hover:text-text-light hover:bg-border-color transition-all"
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
                                className="flex items-center gap-2 text-bg-dark font-bold py-2 px-4 rounded-lg bg-text-light hover:bg-opacity-80 transition-all"
                            >
                                <FiExternalLink />
                                Live Preview
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetailModal;