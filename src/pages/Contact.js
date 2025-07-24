import React, { useContext } from 'react';
import { ContentContext } from '../context/ContentContext';
import { ContactContext } from '../context/ContactContext';
import InputField from '../components/ContactForm'
import ImageHandler from '../components/ImageHandler';
import Link from '../components/Link'

const Contact = () => {
    const { value } = useContext(ContentContext)
    const image = value.media.find((img) => img._id === 1);
    const { formData } = useContext(ContactContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <main className='about backgroundColor-lightgray'>
            <div className='page-content-container'>
                <h1 className='text-center h1 color-blue marginBottom-md'>
                    Would like to hire us? Let's talk!
                </h1>
                <section className='flex-row gap-lg marginBottom-lg'>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={image.url} alt='who we are image' role='image-role' />
                    </div>
                    <div className='flex-1 marginTop-md'>
                        <InputField label="Name" name="name" />
                        <InputField label="Contact Number" name="contactNumber" type="number" />
                        <InputField label="Email" name="email" type="email" />
                        <InputField label="Message" name="message" textarea />
                        <Link text='Send' className='button-lg' color='white' backgroundColor='gold' icon='arrow' onClick={e => handleSubmit(e)} />
                    </div>
                </section>

            </div>
        </main>
    );
}
export default Contact;