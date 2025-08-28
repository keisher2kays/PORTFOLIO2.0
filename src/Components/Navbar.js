// src/components/Navbar.js

import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection, darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setIsMenuOpen(false); 
  };

  const navClass = `navbar ${isScrolled ? 'scrolled' : ''} ${darkMode ? 'dark-mode' : 'light-mode'}`;

  return (
    <nav className={navClass}>
      <div className="container navbar-container">
        <button onClick={() => handleLinkClick('home')} className="nav-logo">
          Portfolio
        </button>
        <div className="nav-controls">
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <div className="nav-links-desktop">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleLinkClick(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button className={`menu-toggle-button ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar bar-top"></span>
            <span className="bar bar-middle"></span>
            <span className="bar bar-bottom"></span>
          </button>
        </div>
      </div>
      <div className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => handleLinkClick(section)}
            className={`nav-link-mobile ${activeSection === section ? 'active' : ''}`}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;