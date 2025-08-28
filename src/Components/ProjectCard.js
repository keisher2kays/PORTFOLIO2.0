// src/components/ProjectCard.js

import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-list">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-tag"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-icon"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;