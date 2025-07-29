import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext';
import OurServices from '../components/OurServices';
import Certifications from '../components/Certifications';


const Services = () => {
    const { value } = useContext(ContentContext)
    return (
        <main className='services'>
            <OurServices images={value.media} />
            <Certifications />
        </main>
    );
}; export default Services;