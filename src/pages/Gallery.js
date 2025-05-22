import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { GalleryContext } from '../context/GalleryContext';
import CategoryDropdown from '../components/CategoryDropDown';

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }, []);
    const { selectedImages, imageMap, galleryCategory, setfullScreenImage } = useContext(GalleryContext);

    const filteredImages = selectedImages.filter((img) => galleryCategory === 'All' ? true : img.category === galleryCategory);

    const navigate = useNavigate();

    const handleImageClick = (image) => {
        setfullScreenImage(image)
        navigate(`/gallery/${image._id}`);
    };
    return (
        <section className='page-content-container'>

            <h1 className='u-h1 u-color-blue u-mr-bt-lg text-center'>Our Work</h1>{/* Category Buttons */}
            <div className="category-button-sticky picture-grid u-mr-bt-md">
                <CategoryDropdown />
            </div>
            <div className='picture-grid'>
                {
                    filteredImages.map((img) => (
                        <img
                            key={img._id}
                            src={imageMap[img.url]}
                            alt={img.category}
                            onClick={() => handleImageClick(img)}
                        />
                    ))
                }
            </div>
        </section>
    )
};
export default Gallery;