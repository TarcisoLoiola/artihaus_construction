import React, { useContext, useState } from 'react';
import { ContentContext } from '../context/ContentContext';
import { ContactContext } from '../context/ContactContext';
import InputField from '../components/ContactForm'
import ImageHandler from '../components/ImageHandler';
import Link from '../components/Link'

const Contact = () => {
    const { value } = useContext(ContentContext)
    const image = value.media.find((img) => img._id === 1);
    const { formData } = useContext(ContactContext);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [cityState, setCityState] = useState('')

    const validate = (data) => {
        let newErrors = {};

        if (data && !data.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (data && !data.project.trim()) {
            newErrors.project = "Select project is required";
        }

        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                newErrors.email = "Invalid email address";
            }
        }

        if (!data.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else {
            const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // US format
            if (!phoneRegex.test(data.phone)) {
                newErrors.phone = "Invalid phone number format";
            }
        }
        if (!data.areacode.trim()) {
            newErrors.areacode = "Area code is required";
        } else {
            const phoneRegex = /^\d{5}$/; // US format
            if (!phoneRegex.test(data.areacode)) {
                newErrors.areacode = "Invalid area code";
            }
        }

        if (!data.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };


    const handleSubmit = async e => {
        e.preventDefault();
        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length > 0) {
            console.log(validationErrors)
            setErrors(validationErrors);
            return;
        }

        // ✅ Valid form
        console.log("Form submitted:", formData);

        // const response = await fetch('https://formspree.io/f/mwpqbdan', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json'
        //     },
        //     body: JSON.stringify(formData),
        // });

        // if (response.ok) {
        //     setSubmitted(true);
        // }
    };
    return (
        <main className='about backgroundColor-lightgray'>
            <div className='page-content-container minVHHeight'>
                <h1 className='text-center h1 color-blue marginBottom-md'>
                    Would like to hire us? Let's talk!
                </h1>
                <section className='flex-row gap-md marginBottom-md'>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={image.url} alt='who we are image' role='image-role' />
                    </div>

                    <form onSubmit={handleSubmit} className='flex-2 marginTop-md'>
                        {submitted && <p>Thanks for your message!</p>}
                        <div className="flex-row gap-xs">
                            <div className='flex-2'>
                                <InputField label={errors.name ? errors.name : 'Name'} name="name" type="text" className={errors.name ? '-error' : '-softgray'} />
                            </div>
                            <div className='flex-1'>
                                <InputField label={errors.phone ? errors.phone : 'Phone'} name="phone" type="number" className={errors.phone ? '-error' : '-softgray'} />
                            </div>
                        </div>
                        <div className="flex-row gap-md">
                            <InputField label={errors.email ? errors.email : 'Email'} name="email" type="email" className={errors.email ? '-error' : '-softgray'} />
                        </div>
                        <div className="flex-row gap-xxs">
                            <InputField label={errors.areacode ? errors.areacode : 'Area Code'} name="areacode" type="number" className={errors.areacode ? '-error' : '-softgray'} />
                        </div>
                        <InputField label={errors.project ? errors.project : 'Project'} name="project" type="select" select={true} className={errors.project ? '-error' : '-softgray'} />
                        <InputField label={errors.message ? errors.message : 'Message'} name="message" type="text" textarea={true} className={errors.message ? '-error' : '-softgray'} />
                        <Link type="submit" text='Send' className='button-xl justify-center' color='white' backgroundColor='gold' onClick={e => handleSubmit(e)} direction="right" />
                    </form>
                </section>

            </div>
        </main>
    );
}
export default Contact;