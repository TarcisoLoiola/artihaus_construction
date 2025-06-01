import { useState, useEffect, useRef, useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import Button from '../components/Link'

const Carousel = ({ role, interval = 3000 }) => {
  const { selectedImages, imageMap } = useContext(GalleryContext);
  const itemsPerView = 3;
  const totalItems = selectedImages.length;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef(null);

  // Clone first few slides to end for seamless loop
  const extendedImages = [...selectedImages, ...selectedImages.slice(0, itemsPerView)];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    // When reaching the fake end, reset without animation
    if (index === totalItems) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500); // Wait for current transition to finish
    } else {
      setIsTransitioning(true);
    }
  }, [index, totalItems]);

  return (
    <div className="carousel-container">
      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          transform: `translateX(-${(100 / itemsPerView) * index}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {extendedImages.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={imageMap[img.url]} alt={`Slide ${i}`} />
            <div className={`${role}-button btn-xl`}>
              <Button text={img.category} color='gold' backgroundColor='white' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
