import React from 'react'

const SocialMediaLink = ({ to, icon, alt }) => {
    return (
        <li className='socialMediaLink'>
            <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                >
                <img src={icon} alt={alt} />
            </a>
        </li>
    )
};
export default SocialMediaLink