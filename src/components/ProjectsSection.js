import React from 'react';
import projects from '../data/projectData.js';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
    return (
        <div className="py-12 px-[10%] font-manrope bg-bg-light">
            <div className="text-center">
                <h2 className="text-5xl font-extrabold text-text-dark">
                    My Recent Work
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Here are a few projects I've worked on recently. This demonstrates my skills in turning ideas into functional and user-friendly web applications.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;