import { useState, useEffect, useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useAppContext } from '../context/AppContext';
import { GalleryContext } from '../context/GalleryContext'
import ImageRoleHandler from "./ImageRoleHandler";

const Carousel = () => {

  const { selectedImages, imageMap } = useContext(GalleryContext);
  console.log(imageMap)
  // Ensure media exists and has items before filtering
  // const images = Array.isArray(imageMap) ? imageMap.filter(item => item.usage === "carousel") : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageMap.length);
  };

  // Handle previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageMap.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide (only if there are imageMap)
  useEffect(() => {
    if (imageMap.length > 1) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [imageMap.length]);

  // If no imageMap, don't render carousel
  if (imageMap.length === 0) {
    return <p>No images available for the carousel.</p>;
  }

  return (
    <div className="carousel">
      {/* Navigation Buttons */}
      <button className="carousel-btn left" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>

      {/* Image Display */}
      <div className="carousel-images">
        {selectedImages.map((media, index) =>  (
          <img
            key={index}
            src={imageMap[media.url]}
            alt={media.alt || "Carousel Image"}
            role={media.role}
            // className={index === currentIndex ? "active" : "hidden"}
          />
        ))}
      </div>

      <button className="carousel-btn right" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect } from 'react';
// import './ImageCarousel.scss'; // for styles

// const ImageCarousel = ({ images = [], autoSlide = true, interval = 3000 }) => {
//   const [current, setCurrent] = useState(0);
//   const total = images.length;

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % total);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + total) % total);
//   };

//   useEffect(() => {
//     if (!autoSlide) return;
//     const timer = setInterval(nextSlide, interval);
//     return () => clearInterval(timer);
//   }, [current, autoSlide, interval]);

//   return (
//     <div className="carousel">
//       <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
      
//       <div className="carousel-image-wrapper">
//         {images.map((img, i) => (
//           <img
//             key={i}
//             src={img}
//             alt={`Slide ${i}`}
//             className={`carousel-image ${i === current ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
//     </div>
//   );
// };

// export default ImageCarousel;

// .carousel {
//   position: relative;
//   width: 100%;
//   max-width: 600px;
//   margin: auto;
//   overflow: hidden;

//   .carousel-image-wrapper {
//     display: flex;
//     transition: transform 0.5s ease-in-out;
//   }

//   .carousel-image {
//     min-width: 100%;
//     height: auto;
//     opacity: 0;
//     transition: opacity 0.5s ease;
//     display: none;

//     &.active {
//       opacity: 1;
//       display: block;
//     }
//   }

//   .carousel-btn {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     background: rgba(0,0,0,0.3);
//     color: white;
//     border: none;
//     font-size: 2rem;
//     padding: 0.5rem 1rem;
//     cursor: pointer;
//     z-index: 1;

//     &.left {
//       left: 0;
//     }

//     &.right {
//       right: 0;
//     }
//   }
// }

// import ImageCarousel from './components/ImageCarousel';

// const images = [
//   '/images/img1.jpg',
//   '/images/img2.jpg',
//   '/images/img3.jpg',
// ];

// function App() {
//   return (
//     <section>
//       <h2>Our Work</h2>
//       <ImageCarousel images={images} autoSlide={true} interval={5000} />
//     </section>
//   );
// }
