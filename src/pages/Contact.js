import React, { useState, useEffect } from 'react';

import InputField from '../components/ContactForm'
import ImageHandler from '../components/ImageHandler';
import rec84 from '../Assets/gallery01.jpeg';
import Button from '../components/Link'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        project: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add API call here to send form data
    };
    return (
        <main className='about backgroundColor-lightgray'>
            <div className='page-content-container'>
                <h1 className='text-center h1 color-blue marginBottom-md'>
                    Would like to hire us? Let's talk!
                </h1>
                <section className='flex-row gap-lg marginBottom-lg'>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={rec84} alt='who we are image' role='image-role' />
                    </div>
                    <div className='flex-1 marginTop-md'>
                        <InputField label="Name" name="name" />
                        <InputField label="Contact Number" name="contactNumber" type="number" />
                        <InputField label="Email" name="email" type="email" />
                        <InputField label="Message" name="message" textarea />
                        <Button text='Submit' color='white' backgroundColor='gold' className='button-xl justify-center cursor-pointer'
                            onClick={e => handleSubmit(e)}
                        />
                    </div>
                </section>

            </div>
        </main>
    );
}
export default Contact;