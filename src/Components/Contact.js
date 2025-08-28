// src/Components/Contact.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-animated-background">
                <div className="contact-shape shape1"></div>
                <div className="contact-shape shape2"></div>
                <div className="contact-shape shape3"></div>
                <div className="contact-shape shape4"></div>
                <div className="contact-shape shape5"></div>
            </div>

            <div className="container contact-container">
                <div className="row contact-content">
                    <div className="contact-info-card col-lg-8 offset-lg-2 text-center">
                        <h2 className="section-title">
                            <span className="gradient-text">Let's Connect</span>
                        </h2>
                        <p className="contact-description">
                            I'm open to new opportunities and collaborations. Whether you have a project idea or just want to chat, feel free to reach out!
                        </p>
                        <div className="contact-info">
                            <p>
                                
                                <strong><FontAwesomeIcon icon={faEnvelope} /> Email:</strong> 
                                <a href="mailto:your.email@example.com">katererekeisher4@gmail.com</a>
                            </p>
                            <p>
                                
                                <strong><FontAwesomeIcon icon={faPhone} /> Phone:</strong> 
                                +263 78 991 7878
                            </p>
                            <div className="social-links">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;