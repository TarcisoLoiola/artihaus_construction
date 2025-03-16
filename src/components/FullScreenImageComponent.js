import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import '../style/FullScreenImageComponent.css';
import { useAppContext } from '../context/AppContext';
import { GalleryContext } from '../context/GalleryContext';

const FullscreenImage = () => {
    const { toggleHeader } =  useAppContext()
    const { selectedImages, imageMap } = useContext(GalleryContext);

    const { index } = useParams()
    const navigate = useNavigate();
    const image = selectedImages[index];
    const video = image.type === 'video'
    const handleClose = () => {
        toggleHeader()
        navigate('/gallery');
    };

    if (!image) return <p>Image not found</p>;

    return (
        <div className="fullscreen-container" onClick={handleClose}>
            {
                video ?
                    <div className='fullscreen-video'>
                        <video controls autoPlay muted loop fullScreen >
                            <source src={imageMap[image.url]} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    :
                    <div className='fullscreen-image'>
                        <img src={imageMap[image.url]} alt={image.category} />
                    </div>
            }
            <div className="image-overlay">
                <h3>{image.category}</h3>
                <p><strong>Location:</strong> {image.Location}</p>
                <p>{image.description} {index}</p>
            </div>
        </div>
    );
};

export default FullscreenImage;
