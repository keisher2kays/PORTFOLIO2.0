// src/components/Hero.js

import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect';
import profileImage from '../assets/IMG-20250428-WA0021.jpg';

const Hero = ({ scrollToSection }) => {
  const phrases = ['Frontend Developer', 'UI/UX Designer', 'React Specialist'];
  const typedText = useTypingEffect(phrases, 100);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-text-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Keisher</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}
          </h2>
          <p className="hero-description">
            I create beautiful, responsive, and user-friendly web applications with modern technologies. I specialize in building stunning user interfaces and seamless user experiences.
          </p>
          <div className="hero-actions">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="Alex Johnson" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;