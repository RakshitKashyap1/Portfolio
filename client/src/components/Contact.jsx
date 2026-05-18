import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }

        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-grid">

                    {/* Contact Info */}
                    <div className="contact-info animate-fade-in">
                        <h3 className="sub-title">Let's Talk About Your Next Project</h3>
                        <p className="contact-desc">
                            Whether you have a question, a project proposal, or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="info-items">
                            <div className="info-item glass">
                                <div className="info-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:hello@rakshit.dev">hello@rakshit.dev</a>
                                </div>
                            </div>

                            <div className="info-item glass">
                                <div className="info-icon"><MapPin size={24} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <span>New Delhi, India</span>
                                </div>
                            </div>

                            <div className="info-item glass">
                                <div className="info-icon"><Phone size={24} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:+919876543210">+91 98765 43210</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper glass animate-fade-in delay-200">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    required
                                    className="form-control"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${status}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' :
                                    status === 'success' ? 'Message Sent!' :
                                        status === 'error' ? 'Failed to Send' :
                                            <><Send size={18} className="mr-2" /> Send Message</>}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
