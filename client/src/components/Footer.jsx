import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="logo-text">Rakshit<span>.</span></h2>
                        <p className="footer-desc">
                            Building scalable, beautifully designed web experiences. Always open to discussing new projects and creative ideas.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h3>Quick Links</h3>
                            <a href="#home">Home</a>
                            <a href="#projects">Projects</a>
                            <a href="#resume">Resume</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="link-group">
                            <h3>Socials</h3>
                            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        &copy; {new Date().getFullYear()} Rakshit's Portfolio. Layout & Design by Rakshit.
                    </p>
                    <p className="made-with">
                        Made with <Heart size={16} className="heart" /> and <span className="highlight-text">React</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
