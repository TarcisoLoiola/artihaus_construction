import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../context/AppContext';
import { GalleryContext } from '../context/GalleryContext';
import Link from '../components/Link'

const Gallery = () => {

    useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

    const categories = ["All", "Patios", "Walls", "Driveways"];
    const { toggleHeader } = useAppContext()
    const { selectedImages, imageMap } = useContext(GalleryContext);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredImages =
    selectedCategory === "All"
            ? selectedImages
            : selectedImages.filter((img) => img.category === selectedCategory);

    console.log(filteredImages)

    const navigate = useNavigate();
    const HandleCategory = (cat) => {
        setSelectedCategory(cat)
        if (window.scrollY > 215) {
            window.scrollTo({
                top: 215,
                behavior: 'smooth'
            });
        }
    }

    const handleImageClick = (index) => {
        toggleHeader()
        // setSelectedImage(media)
        navigate(`/gallery/${index}`);
    };
    return (
        <section className='page-content-container'>

            <h1 className='u-h1 u-color-blue u-mr-bt-lg text-center'>Our Work</h1>{/* Category Buttons */}
            <div className="category-buttons-sticky u-mr-bt-md ">
                <div className='u-flex u-flex-row u-gap-lg justify-center u-backg-c-white u-padding-top-xs u-padding-bottom-xs'
                    style={{ width: '100%' }}
                >
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            text={cat}
                            onClick={() => HandleCategory(cat)}
                            color='gold'
                            backgroundColor='white'
                            border='gold'
                        />
                    ))}
                </div>
            </div>
            <div className='picture-grid'>
                {
                    filteredImages.map((img, index) => (
                        <img
                            key={img.url}
                            src={imageMap[img.url]}
                            alt={img.category}
                            onClick={() => console.log("Open Fullscreen:", img.src)}
                        />
                    ))
                }
            </div>
        </section >
    )
}; export default Gallery;

const styles = {
    container: {
        marginTop: '90px',
        backgroundColor: '#fff',
        textAlign: 'center'
        /* max-width: 1200px; */
    },
    masonryGrid: {
        display: 'flex',
        margin: '20px',
        width: 'auto',
    },
    masonryGridColumn: {
        paddingLeft: '30px',
        backgroundClip: 'padding-box',
    },
    mediaCard: {
        position: 'relative',
        borderRadius: '8px',
        marginBottom: '20px',
        overflow: 'hidden',
    },
    mediaCardImg: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
    },
    mediaCardHover: {
        cursor: 'pointer',
    },
    mediaCardHoverImg: {
        transform: 'scale(1.1)',
    },
    mediaCardVideo: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        transition: 'transform 0.3s ease',
    },
    mediaCardHoverVideo: {
        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)',
        transform: 'scale(1.1)',
    },
    mediaInfo: {
        position: 'absolute',
        bottom: -'15px',
        // left: '105px',
        minWidth: '200px',
        transform: 'translate(5%, -135%)',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgb(66 56 52 / 69%)',
        padding: '10px 20px',
        borderRadius: '8px',
    },
    mediaInfoHeading: {
        margin: '0',
        fontSize: '1.2em',
    },
    mediaInfoP: {
        margin: '5px 0',
    },
    video: {
        display: 'block',
        margin: 'auto',
    }
}

// selectedImages.map((media, index) => {
//     const video = media.type === 'video'
//     return (
//         <div style={styles.mediaCard} key={index} onClick={() => handleImageClick(index)} >
//             {
//                 video ?
//                     <div>
//                         <div className='button play-button' />
//                         <video>
//                             <source src={imageMap[media.url]} type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                     :
//                     <img style={styles.mediaCardImg} src={imageMap[media.url]} alt={media.category} />
//             }
//             <div style={styles.mediaInfo}>
//                 <p>{media.location}</p>
//             </div>
//         </div>
//     )
// }
// )

// import { useState } from "react";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", "Patios", "Walls", "Driveways"];

//   const images = [
//     { id: 1, src: "/images/patio1.jpg", category: "Patios" },
//     { id: 2, src: "/images/wall1.jpg", category: "Walls" },
//     { id: 3, src: "/images/driveway1.jpg", category: "Driveways" },
//     { id: 4, src: "/images/patio2.jpg", category: "Patios" },
//     { id: 5, src: "/images/wall2.jpg", category: "Walls" },
//   ];

//   const filteredImages =
//     selectedCategory === "All"
//       ? images
//       : images.filter((img) => img.category === selectedCategory);

//   return (
//     <div>
//       <h2>Gallery</h2>
      
//       {/* Category Buttons */}
//       <div>
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             style={{
//               margin: "5px",
//               padding: "8px",
//               background: selectedCategory === cat ? "#648072" : "#ccc",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Image Grid */}
//       <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
//         {filteredImages.map((img) => (
//           <img
//             key={img.id}
//             src={img.src}
//             alt={img.category}
//             style={{
//               width: "200px",
//               height: "150px",
//               objectFit: "cover",
//               margin: "5px",
//               cursor: "pointer",
//             }}
//             onClick={() => console.log("Open Fullscreen:", img.src)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
