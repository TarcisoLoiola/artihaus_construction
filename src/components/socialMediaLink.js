import React from 'react'

const SocialMediaLink = ({ to, icon, alt }) => {
    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className='socialMediaLink'
        >
            <img src={icon} alt={alt} />
        </a>
    )
};
export default SocialMediaLink