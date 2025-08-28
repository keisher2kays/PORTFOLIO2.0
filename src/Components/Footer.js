// src/components/Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const socialLinks = {
  github: 'https://github.com/keisher2kays',
  linkedin: 'https://www.linkedin.com/in/keisher-katerere-90550a327/',
  whatsapp: 'tel:078 991 7878', // Use 'tel:' for a simple call
};

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="container footer-content">
        <a href="https://gemini.google.com/app/a14e4de46d989c79" className="footer-logo gradient-text">Portfolio</a>
        <div className="footer-socials">
          {['github', 'linkedin', 'whatsapp'].map((social) => (
            <a 
              key={social} 
              href={socialLinks[social]} 
              className="social-link"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              <FontAwesomeIcon 
                icon={
                  social === 'github' ? faGithub :
                  social === 'linkedin' ? faLinkedin :
                  faWhatsapp
                } 
              />
            </a>
          ))}
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Keisher Katerere. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;