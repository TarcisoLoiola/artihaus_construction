import React from 'react';
import '../style/ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info--container">
            <div className="contact-info">
                <h4>Ready to transform your outdoor space? Get in touch to discuss your vision!</h4>
                <p><strong>Phone:</strong> <a href='tel:+1(678)260-5968'> +1(678) 260-5968</a></p>
                <p><strong>Email:</strong> <a href="mailto:artihausconstruction@gmail.com">artihausconstruction@gmail.com</a></p>
                <p><strong>Location:</strong> Serving the local area and preety much all over GA</p>
                <p><strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>

                <h4>Follow us on social media to see our latest projects and updates!</h4>
                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;