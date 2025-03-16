import React from 'react';

// Import images
import homeBackground from '../../Assets/driveway.jpeg';
import contactBackground from '../../Assets/contactPage.png';
import aboutBackground from '../../Assets/aboutPage.png';

const PageBackground = ({ pageType, children }) => {
    // Define styles dynamically based on the pageType prop
    const getBackgroundStyle = () => {
        const base = {
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed', // Keeps the image fixed
            minHeight: '100vh',
            padding: '40px 20px',
            top: 0,
            left: 0,
            width: '100%',
        }
        switch (pageType) {
            case 'homepage':
                return {
                    backgroundImage: `url(${homeBackground})`,
                    ...base
                };
            case 'contactpage':
                return {
                    backgroundImage: `url(${contactBackground})`,
                    ...base
                };
            case 'aboutpage':
                return {
                    backgroundImage: `url(${aboutBackground})`,
                    ...base
                };
            default:
                return {
                    background: 'white',
                    minHeight: '100vh',
                    padding: '0 20px',
                };
        }
    };

    return <div style={getBackgroundStyle()}>{children}</div>;
};

export default PageBackground;
