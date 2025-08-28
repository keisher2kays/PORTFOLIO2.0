// src/components/Projects.js

import React from 'react';
import ProjectCard from './ProjectCard';
import ATL from '../assets/Screenshot (127).png'
import BMW from '../assets/Screenshot (128).png'

const projects = [
  {
    id: 1,
    title: 'Altruistic and Loyal',
    description: 'A full-featured online store with cart functionality, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'Javascript','CSS'],
    image: [ATL],
    link: 'https://atruistic.netlify.app/',
    
  },
  {
    id: 2,
    title: 'Exotic Car Marketplace',
    description: 'A productivity application for exotic car marketers to locate their  exotic beasts near them',
    technologies: ['React', 'Firebase', 'Simple CSS', 'Mongodb'],
    image: [BMW],
    link: 'https://rare-rides.netlify.app/',
    
  },

];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">My Projects</span>
        </h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;