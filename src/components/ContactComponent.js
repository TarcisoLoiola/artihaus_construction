import React, { useState } from 'react';

import '../style/Contact.css';

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        project: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted');
        // Add API call here to send form data
    };

    return (
        <div className="contact-container">
            <section className="contact-header">
                <h2>Contact Artihaus For Your Project</h2>
            </section>
            <div className="contact-component--container">
                <section >
                    <div className="contact-info">
                        <h4>Ready to transform your outdoor space? Get in touch to discuss your vision!</h4>
                        <p><strong>Phone:</strong> <a href='tel:+1(678)260-5968'> +1(678) 260-5968</a></p>
                        <p><strong>Email:</strong> <a href="mailto:artihausconstruction@gmail.com">artihausconstruction@gmail.com</a></p>
                        <p><strong>Location:</strong> Serving the local area and all over GA</p>
                        <p><strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>

                        <h4>Follow us on social media to see our latest projects and updates!</h4>
                        {/* Social Media Links */}
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                            <label htmlFor="project">Tell us about your project</label>
                            <textarea
                                id="project"
                                name="project"
                                value={formData.project}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit">REQUEST A QUOTE</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default ContactComponent;
