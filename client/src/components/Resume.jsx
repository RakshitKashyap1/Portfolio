import React from 'react';
import { Briefcase, GraduationCap, Code2, Database, Layout, Server, MonitorSmartphone } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    const skills = [
        { category: 'Frontend', icon: <Layout size={20} />, list: ['React', 'HTML5/CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'Vite'] },
        { category: 'Backend', icon: <Server size={20} />, list: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Authentication (JWT)', 'WebSockets'] },
        { category: 'Database', icon: <Database size={20} />, list: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Firebase'] },
        { category: 'Tools & Other', icon: <Code2 size={20} />, list: ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'Linux/Ubuntu'] }
    ];

    const experience = [
        {
            role: 'Full-Stack Developer',
            company: 'Tech Solutions Inc.',
            period: '2023 - Present',
            description: 'Developing and maintaining robust MERN stack applications. Collaborating with cross-functional teams to deliver scalable product features.',
            icon: <Briefcase size={24} />
        },
        {
            role: 'Frontend Developer Intern',
            company: 'Creative Agency',
            period: '2022 - 2023',
            description: 'Built responsive and interactive UI components using React and styled-components. Improved website performance and SEO scores.',
            icon: <Briefcase size={24} />
        },
        {
            role: 'B.S. in Computer Science',
            company: 'University of Technology',
            period: '2018 - 2022',
            description: 'Key Coursework: Data Structures & Algorithms, Database Management Systems, Web Technologies, Software Engineering.',
            icon: <GraduationCap size={24} />
        }
    ];

    return (
        <section id="resume" className="section resume-section">
            <div className="container">
                <h2 className="section-title">Resume & Skills</h2>

                <div className="resume-grid">

                    {/* Skills Matrix */}
                    <div className="skills-container animate-fade-in">
                        <h3 className="sub-title">Technical Proficiency</h3>
                        <div className="skills-matrix">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="skill-card glass card3d-small">
                                    <div className="skill-header">
                                        <div className="skill-icon">{skillGroup.icon}</div>
                                        <h4>{skillGroup.category}</h4>
                                    </div>
                                    <ul className="skill-list">
                                        {skillGroup.list.map((item, id) => (
                                            <li key={id}><span className="bullet"></span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="timeline-container animate-fade-in delay-200">
                        <h3 className="sub-title">Experience & Education</h3>
                        <div className="timeline">
                            {experience.map((item, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-icon glass">
                                        {item.icon}
                                    </div>
                                    <div className="timeline-content glass hover-float">
                                        <h4 className="timeline-role">{item.role}</h4>
                                        <div className="timeline-meta">
                                            <span className="timeline-company">{item.company}</span>
                                            <span className="timeline-period">{item.period}</span>
                                        </div>
                                        <p className="timeline-desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Resume;
