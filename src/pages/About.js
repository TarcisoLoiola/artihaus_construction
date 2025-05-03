import React, { useState, useEffect } from 'react';

import ImageHandler from '../components/ImageRoleHandler';
import rec84 from '../Assets/gallery01.jpeg';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <main className='about u-backg-c-lightgray'>
            <div className='page-content-container'>
                <section className='u-flex-row u-gap-lg u-mr-bt-lg'>
                    <div className='flex-1'>
                        <h1 className='u-h1 u-color-blue u-mr-bt-sm'>About Us</h1>
                        <h4 className='u-h4 u-color-gray u-mr-bt-sm'>Our Story</h4>
                        <p className='u-p u-color-gray u-mr-bt-md'>
                            At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
                            From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
                        </p>
                    </div>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={rec84} alt='who we are image' role='home--whoweare' />
                    </div>
                </section>
                <section className='u-mr-bt-md'>
                    <h4 className='u-h4 u-color-gray u-mr-bt-md'>Our Mission</h4>
                    <p className='u-p u-color-gray'>
                        Our mission is to deliver thoughtful, durable outdoor spaces that blend aesthetics with functionality. We value integrity, quality craftsmanship, and clear communication throughout every project.
                    </p>
                </section>

                <section className='u-flex-row u-gap-lg u-mr-bt-lg'>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={rec84} alt='who we are image' role='home--whoweare' />
                    </div>
                    <div className='flex-1'>
                        <h4 className='u-h4 u-color-gray u-mr-bt-md u-padding-top-md'>Why Choose Artihaus</h4>
                        <ul className='u-p u-color-gray u-list-disc u-ml-md u-mr-bt-md'>
                            <li>20+ years of hands-on experience in hardscaping & landscaping</li>
                            <li>Locally owned and fully licensed/insured</li>
                            <li>Personalized designs tailored to your space</li>
                            <li>We don’t cut corners — we build with pride and precision</li>
                        </ul>
                    </div>
                </section>

                <section>

                    <h4 className='u-h4 u-color-gray u-mr-bt-md'>Meet the Owner</h4>
                    <p className='u-p u-color-gray u-mr-bt-md'>
                        Artihaus Construction was founded by a dedicated builder with deep roots in the trades and a passion for creating timeless outdoor spaces. We bring hands-on expertise and personal accountability to every project.
                    </p>

                    <h4 className='u-h4 u-color-blue u-mr-tp-md'>
                        Ready to transform your outdoor space? <a href='/contact' className='u-link'>Let’s talk.</a>
                    </h4>
                </section>
            </div>
        </main>
    )
};
export default About
