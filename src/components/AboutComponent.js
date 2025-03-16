import React, { useState, useEffect } from 'react';

import PageBackground from './App/PageBackground';

const AboutPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const styles = {
        container: {
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#eeeff1',
            textAlign: 'center',
            overflow: 'hidden',
            padding: '20px',
            ...(isMobile && { padding: '10px' }) // Responsive styles
        },
        overlay: {
            backgroundColor: 'rgb(62 32 8 / 50%)',
            padding: '50px',
            borderRadius: '8px',
            zIndex: 1,
        },
        title: {
            fontSize: isMobile ? '1.8rem' : '2.7rem',
            marginBottom: '15px',
        },
        description: {
            fontSize: isMobile ? '1rem' : '1.7rem',
            lineHeight: '1.7',
        }
    };

    return (
        <PageBackground pageType="aboutpage">
            <section style={styles.container}>
                <div style={styles.overlay}>
                    <h2 style={styles.title}>About Us</h2>
                    <p style={styles.description}>
                        About Artihaus Construction
                        <br />
                        At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
                        <br />
                        From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
                    </p>
                </div>
            </section>
        </PageBackground>
    );
}

export default AboutPage;
