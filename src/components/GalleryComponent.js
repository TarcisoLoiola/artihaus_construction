import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { GalleryContext } from '../context/GalleryContext'
import '../style/GalleryComponent.css'

const GalleryComponent = () => {
    const { selectedImages, imageMap } = useContext(GalleryContext);
    const navigate = useNavigate();
    const handleImageClick = (index) => {
        // setSelectedImage(media)
        navigate(`/gallery/${index}`);
    };
    const breakpoints = {
        default: 3,  // number of columns for default screen size
        1100: 2,     // columns for medium screens
        700: 1,      // columns for small screens
        500: 1       // columns for extra small screens
    };
    return (
        <div className="gallery-container">
            {/* Gallery Section */}
            <section className="gallery">
                <h2>Our Work</h2>
                <div className="gallery-images">
                </div>
            </section>
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    selectedImages.map((media, index) => {
                        const video = media.type === 'video'
                        return (
                            <div className="media-card" key={index} onClick={() => handleImageClick(index)} >
                                {
                                    video ?
                                        <div>
                                            <div className='button play-button' />
                                            <video>
                                                <source src={imageMap[media.url]} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        :
                                        <img src={imageMap[media.url]} alt={media.category} />
                                }
                                <div className="media-info">
                                    <p>{media.location} {media.url}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
            </Masonry>
        </div>
    );
};

export default GalleryComponent;
