import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-scale e-commerce solution built with MERN stack. Features include user authentication, payment processing, admin dashboard, and inventory management.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com/rakshit/ecommerce',
        live: 'https://ecommerce.rakshit.dev'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'Collaborative task management tool with real-time updates. Drag-and-drop kanban boards, task assignments, and progress tracking.',
        tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com/rakshit/task-manager',
        live: 'https://tasks.rakshit.dev'
    },
    {
        id: 3,
        title: 'AI Image Generator',
        description: 'Web application that integrates with OpenAI API to generate unique images based on user prompts. Includes gallery and download features.',
        tech: ['React', 'Express', 'OpenAI API', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
        github: 'https://github.com/rakshit/ai-image',
        live: 'https://ai-image.rakshit.dev'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card glass">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-icon">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="project-icon">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
