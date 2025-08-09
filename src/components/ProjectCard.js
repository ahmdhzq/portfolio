import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <div className="overflow-hidden">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{project.company}</p>
                <p className="text-gray-600 text-sm min-h-[60px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;