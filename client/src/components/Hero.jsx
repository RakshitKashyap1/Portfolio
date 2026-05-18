import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <p className="subtitle delay-100">Hello, I'm</p>
                    <h1 className="title delay-200">
                        Rakshit<span className="dot">.</span>
                    </h1>
                    <h2 className="role delay-300">
                        A Full-Stack Developer creating
                        <span className="highlight"> elegant </span>
                        digital experiences.
                    </h2>
                    <p className="description delay-300">
                        I bridge the gap between back-end data and stunning front-end interfaces.
                        Passionate about building scalable modern applications using the MERN stack.
                    </p>

                    <div className="hero-actions delay-300">
                        <a href="#projects" className="btn btn-primary">
                            View Work <ArrowRight className="ml-2" size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me <ArrowRight className="ml-2" size={18} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual animate-fade-in delay-200">
                    <div className="glass card3d">
                        <div className="code-snippet">
                            <div className="dots">
                                <span className="red"></span>
                                <span className="yellow"></span>
                                <span className="green"></span>
                            </div>
                            <pre>
                                <code>{`const developer = {
  name: "Rakshit",
  role: "Full-Stack Dev",
  skills: [
    "MongoDB",
    "Express.js",
    "React",
    "Node.js"
  ],
  isCoffeeAddicted: true,
  collaborate: () => {
    return "Let's build something!";
  }
};`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
