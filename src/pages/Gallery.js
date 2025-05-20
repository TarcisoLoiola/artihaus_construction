import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';
import { GalleryContext } from '../context/GalleryContext';
import Link from '../components/Link'

const Gallery = () => {

    useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

    const categories = ["All", "Pool Deck", "Patio", "Wall", "Driveway", "Fireplace"];
    // const { galleryCategory, setGalleryCategory } = useAppContext();
    const { selectedImages, imageMap, galleryCategory, setGalleryCategory, setfullScreenImage } = useContext(GalleryContext);
    const [cat_Id, setCat_Id] = useState();

    const filteredImages = selectedImages.filter((img) => galleryCategory === 'All' ? true : img.category === galleryCategory);

    const navigate = useNavigate();
    const HandleCategory = (cat) => {
        setGalleryCategory(cat)
        if (window.scrollY > 215) {
            window.scrollTo({
                top: 215,
                behavior: 'smooth'
            });
        }
    }

    const handleImageClick = (image) => {
        setfullScreenImage(image)
        navigate(`/gallery/${image._id}`);
    };
    return (
        <section className='page-content-container'>

            <h1 className='u-h1 u-color-blue u-mr-bt-lg text-center'>Our Work</h1>{/* Category Buttons */}
            <div className="category-buttons-sticky u-mr-bt-md ">
                <div className='u-flex u-flex-row u-gap-lg justify-center u-backg-c-white u-padding-top-xs u-padding-bottom-xs'
                    style={{ width: '100%' }}
                >
                    {categories.map((cat, _id) => (
                        <Link
                            key={_id}
                            text={cat}
                            onClick={() => HandleCategory(cat)}
                            color={galleryCategory === cat ? 'white' : 'gold'}
                            backgroundColor={galleryCategory === cat ? 'gold' : 'white'}
                            border='gold'
                        />
                    ))}
                </div>
            </div>
            <div className='picture-grid'>
                {
                    filteredImages.map((img) => (
                        <div><img
                            key={img._id}
                            src={imageMap[img.url]}
                            alt={img.category}
                            onClick={() => handleImageClick(img)}
                        />
                            {img._id} {img.category}</div>
                    ))

                }
            </div>
        </section>
    )
};
export default Gallery;