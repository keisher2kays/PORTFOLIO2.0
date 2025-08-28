// src/components/About.js

import React from 'react';
import profileImage from '../assets/IMG-20240524-WA0018.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="about-content">
          <img src={profileImage} alt="Alex Johnson" className="about-image" />
          <div className="about-text-content">
            <p className="about-description">
              I am a dedicated frontend developer with experience building modern, responsive, and user-centric web applications. My journey in the tech world has been driven by a passion for clean code and a relentless pursuit of pixel-perfect designs. I specialize in the React ecosystem, leveraging its power to create dynamic and efficient user interfaces. I thrive on collaborating with cross-functional teams to solve complex problems and bring creative ideas to life. When I'm not coding, I'm exploring new design trends and honing my skills to stay at the forefront of the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;