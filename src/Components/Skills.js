// src/Components/Skills.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faHtml5, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'React.js', icon: faReact, description: 'Building modern and scalable single-page applications with React.' },
  { name: 'JavaScript', icon: faJs, description: 'Writing clean, efficient, and maintainable code for interactive web experiences.' },
  { name: 'TypeScript', icon: faCode, description: 'Using TypeScript to build robust, type-safe applications that are scalable and easy to maintain.' },
  { name: 'HTML5 & CSS3', icon: faHtml5, description: 'Structuring web content and styling professional web interfaces with HTML5 and CSS3.' },
  { name: 'Sass', icon: faSass, description: 'Writing professional, modular, and reusable CSS with the power of Sass pre-processing.' },
  { name: 'Node.js', icon: faNodeJs, description: 'Developing server-side applications and RESTful APIs with Node.js.' },
  { name: 'MongoDB', icon: faDatabase, description: 'Designing and managing NoSQL databases for scalable, modern web applications.' },
  { name: 'Responsive Design', icon: faMobileAlt, description: 'Ensuring seamless user experiences across all devices and screen sizes.' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">My Technical Skills</span>
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-box">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;