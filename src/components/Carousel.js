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
