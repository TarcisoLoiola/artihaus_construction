import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { GalleryContext } from '../context/GalleryContext';

const FullscreenImage = () => {
    const { fullScreenImage } = useContext(GalleryContext);
    const navigate = useNavigate();
    const video = fullScreenImage.type === 'video'
    const handleClose = () => {
        navigate('/gallery');
    };

    if (!fullScreenImage) return <p>Image not found</p>;

    return (
        <div className="fullscreen-container" onClick={handleClose}>
            {
                video ?
                    <div className='fullscreen-video'>
                        <video controls autoPlay muted loop fullScreen >
                            <source src={fullScreenImage.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    :
                    <div className='fullscreen-image'>
                        <img src={fullScreenImage.url} alt={fullScreenImage.category} />
                    </div>
            }
            <div className="image-overlay">
                <h3>{fullScreenImage.category}</h3>
                <p><strong>Location:</strong> {fullScreenImage.location}</p>
                <p>{fullScreenImage.description} {fullScreenImage._id}</p>
            </div>
        </div>
    );
};
export default FullscreenImage;