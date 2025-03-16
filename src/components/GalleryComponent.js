import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';

import { useAppContext } from '../context/AppContext';
import { GalleryContext } from '../context/GalleryContext'
import '../style/GalleryComponent.css'

const GalleryComponent = () => {

    useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to the top
  }, []);

    const { toggleHeader } = useAppContext()
    const { selectedImages, imageMap } = useContext(GalleryContext);

    const navigate = useNavigate();
    const handleImageClick = (index) => {
        toggleHeader()
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
        <div style={styles.container}>
            {/* Gallery Section */}
            <section>
                <h2>Our Work</h2>
                <div style={styles.galleryImages}>
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
                            <div style={styles.mediaCard} key={index} onClick={() => handleImageClick(index)} >
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
                                        <img style={styles.mediaCardImg} src={imageMap[media.url]} alt={media.category} />
                                }
                                <div style={styles.mediaInfo}>
                                    <p>{media.location}</p>
                                </div>
                            </div>
                        )
                    }
                    )}
            </Masonry>
        </div>
    );
}; export default GalleryComponent;

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
