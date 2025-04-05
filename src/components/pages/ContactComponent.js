import React, { useState, useEffect } from 'react';

import PageBackground from '../../components/PageBackground';

const ContactComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position to the top
      }, []);

    const [ hovered, setHovered ] = useState(false)
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
        <PageBackground pageType="contactpage">
            <div style={contactComponentContainer} >
                <main style={overlay}>
                    <section>
                        <div style={contactInfoContainer}>
                            <h4 style={contactInfoH4}>Ready to transform your outdoor space? Get in touch with us! No commitments</h4>
                            <p style={contactInfoP}><strong>📞 Phone:</strong><a href='tel:+1(678)260-5968'> +1(678) 260-5968</a></p>
                            <p style={contactInfoP}><strong>✉️Email:</strong><a href="mailto:artihausconstruction@gmail.com"> artihausconstruction@gmail.com</a></p>
                            <p style={contactInfoP}><strong>📍Location:</strong> Serving Georgia</p>
                            <p style={contactInfoP}><strong>🕔Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>

                            <h4 style={contactInfoH4}>Connect With Us</h4>
                            <p style={contactInfoP}>Stay inspired and see our latest projects by following us on social media:</p>
                            {/* Social Media Links */}
                            <div style={socialLinks}>
                                <a style={socialLinksA} href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <a style={socialLinksA} href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div style={contactFormContainer}>
                            <form style={contactForm} onSubmit={handleSubmit}>
                                <label style={contactFormLabel} htmlFor="name">Name</label>
                                <input
                                    style={contactFormInput}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label style={contactFormLabel} htmlFor="email">Email</label>
                                <input
                                    style={contactFormInput}
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label style={contactFormLabel} htmlFor="subject">Subject</label>
                                <input
                                    style={contactFormInput}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <label style={contactFormLabel} htmlFor="project">Tell us about your project</label>
                                <textarea
                                    style={contactFormTextarea}
                                    id="project"
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                <button
                                style={!hovered ? contactFormButton : contactFormButtonHover}
                                onMouseEnter={()=>setHovered(true)}
                                onMouseLeave={()=>setHovered(false)}
                                type="submit">
                                REQUEST A QUOTE
                                </button>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </PageBackground>
    );
}
export default ContactComponent;

const contactHeader = {
    textAlign: 'center',
}

const contactComponentContainer = {
    position: 'relative',
    height: '100vh', /* Full viewport height */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#3e2008',
    textAlign: 'center',
    overflow: 'hidden',
    zIndex: 1,
    // /* padding: 20px, */
}

const overlay = {
    // backgroundColor: 'rgb(66 56 52 / 69%)', /* Dark overlay for text readability */
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor: 'rgb(62 32 8 / 50%)',//#9db289
    gap: '20px',
    padding: '30px',
    borderRadius: '8px',
    zIndex: 1, /* Places overlay above the image */
}

const contactInfoContainer = {
    textDecoration: 'none',
    flex: 1,
    padding: '20px',
    /* borderRadius: 8px, */
    color: '#3e2008',
    backgroundColor: '#fff',
    fontSize: '20px',
    height: '100%'
}

const contactInfoH = {
    marginTop: 0,
    color: '#2c3864',
}

const contactInfoH4 = {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '20px',
}

const contactInfoP = {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '10px',
    textAlign: 'left',
    padding: '10px 40px',
    color: '#3e2008',
    // marginLeft: '10%'
}

const socialLinks = {
    textAlign: 'center',
    color: '#3e2008',
}
const socialLinksA = {
    textAlign: 'center',
    display: 'inline-block',
    marginRight: '20px',
}
/* Container styling */
const contactFormContainer = {
    display: 'flex',
    flexDirection: 'column',
    /* align-items: flex-end, */
    padding: '30px',
    backgroundColor: '#fff',
    /* borderRadius: '10px', */
    color: '#3e2008',
}

/* Heading */
const contactFormContainerH4 = {
    padding: '10px',
    /* font-size: 24px, */
    color: '#2c3864',
}

/* Form styling */
const contactForm = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

/* Label styling */
const contactFormLabel = {
    marginBottom: '5px',
    fontSize: '20px',
    textAlign: 'left',
    color: '#3e2008',
}

/* Input and textarea styling */
const contactFormInput = {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '20px',
    /* width: 100%, */
    color: '#3e2008',
    fontSize: 'large',
}
const contactFormTextarea = {
    ...contactFormInput,
    resize: 'vertical',
    minHeight: '100px',
}

/* Button styling */
const contactFormButton = {
    alignSelf: 'center',
    backgroundColor: '#648072',
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '20px',
    width: 'fit-content',
    transition: 'transform 0.3s ease',
}

const contactFormButtonHover = {
    /* color: '#2c3864', */
    ...contactFormButton,
    transform: 'scale(1.05)'
}

