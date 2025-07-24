import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext';
import ImageHandler from '../components/ImageHandler';
import Reviews from '../components/Reviews';

const About = () => {
    const { value } = useContext(ContentContext)
    const image01 = value.media.find((img) => img._id === 37);
    const image02 = value.media.find((img) => img._id === 43);
    return (
        <main className='about backgroundColor-lightgray'>
            <div className='page-content-container'>
                <section className='flex-row gap-lg marginBottom-lg'>
                    <div className='flex-1'>
                        <h1 className='h1 color-blue marginBottom-sm'>About Us</h1>
                        <h4 className='h4 color-gray marginBottom-sm'>Our Story</h4>
                        <p className='p color-gray marginBottom-md'>
                            At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
                            From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
                        </p>
                    </div>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={image01.url} alt='who we are image' role='home--whoweare' />
                    </div>
                </section>
                <section className='marginBottom-md'>
                    <h4 className='h4 color-gray marginBottom-md'>Our Mission</h4>
                    <p className='p color-gray'>
                        Our mission is to deliver thoughtful, durable outdoor spaces that blend aesthetics with functionality. We value integrity, quality craftsmanship, and clear communication throughout every project.
                    </p>
                </section>
                <section className='flex-row gap-lg marginBottom-lg'>
                    <div className='image-role-handler flex-1'>
                        <ImageHandler src={image02.url} alt='who we are image' role='home--whoweare' />
                    </div>
                    <div className='flex-1'>
                        <h4 className='h4 color-gray marginBottom-md paddingTop-md'>Why Choose Artihaus</h4>
                        <ul className='p color-gray u-list-disc u-ml-md marginBottom-md'>
                            <li>20+ years of hands-on experience in hardscaping & landscaping</li>
                            <li>Locally owned and fully licensed/insured</li>
                            <li>Personalized designs tailored to your space</li>
                            <li>We don’t cut corners — we build with pride and precision</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h4 className='h4 color-gray marginBottom-md'>Meet the Owner</h4>
                    <p className='p color-gray marginBottom-md'>
                        Artihaus Construction was founded by a dedicated builder with deep roots in the trades and a passion for creating timeless outdoor spaces. We bring hands-on expertise and personal accountability to every project.
                    </p>
                    <h4 className='h4 color-blue marginTop-md'>
                        Don't believe us. See what our clientes have to say.{/* <a href='/contact' className='u-link'>Let’s talk.</a> */}
                    </h4>
                </section>
            </div>
            <Reviews />
        </main>
    )
};
export default About
