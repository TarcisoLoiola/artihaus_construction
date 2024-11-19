import React, { useState } from 'react';
import '../style/ContactForm.css';

const ContactForm = () => {
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
        <div className="contact-form-container">

            <form onSubmit={handleSubmit} className="contact-form">
                <button type="submit">REQUEST A QUOTE</button>
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
            </form>
        </div>
    );
};

export default ContactForm;
