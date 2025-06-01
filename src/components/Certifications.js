
import React, { useState, useContext } from 'react'
import { ContentContext } from "../context/ContentContext"

import CPOCertification from '../Assets/CPOCertification.svg'
import ICPICertification from '../Assets/ICPICertification.svg'
import CBPCertification from '../Assets/CBPCertification.svg'
import DefaultCertification from '../Assets/DefaultCertification.svg'

const Certifications = ({ certifications = [], className }) => {
    const { data, loading, error } = useContext(ContentContext);

    if (certifications.length < 1) {
        certifications = [
            { image: CBPCertification, label: 'Certified Builder Professional' },
            { image: ICPICertification, label: 'Interlock Concrete Pavement Institute' },
            { image: CPOCertification, label: 'Certified Pool & Spa Operator' },
        ];
    }

    return (
        <section className='certifications backgroundColor-blue'>
            <div className='page-content-container'>
                <h1 className='h1 color-white text-center marginBottom-lg'>Certifications</h1>
                <div className='certifications-container flex-row gap-xl'>
                        {certifications.map((certification, index) => (
                            <div className='certification' key={index}>
                                <img src={certification.image} alt='our commitment card icon' />
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
export default Certifications