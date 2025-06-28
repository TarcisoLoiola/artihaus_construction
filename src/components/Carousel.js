import { useState, useEffect, useRef } from "react";
import CarouselArrow from "../Assets/CarouselArrow";
import Button from '../components/Link'

const Carousel = ({ images, role, dots = true, interval = 3000 }) => {

  const itemsPerView = 3;
  const totalItems = images.length;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [transitionSpeed, settransitionSpeed] = useState(1.2);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Clone first few slides to end for seamless loop
  const extendedImages = [...images, ...images.slice(0, itemsPerView)];

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [interval]);


  useEffect(() => {
    // When reaching the fake end, reset without animation
    if (index === totalItems) {
      setTimeout(() => {
        setIsTransitioning(false);
        settransitionSpeed(1.2)
        setIndex(0);
      }, 500); // Wait for current transition to finish
    } else {
      setIsTransitioning(true);
      settransitionSpeed(1.2)
    }
  }, [index, totalItems]);

  const handlePrev = () => {
    // If at the start, jump to last visible set
    if (index === 0) {
      setIsTransitioning(false);
      settransitionSpeed(1.2)
      setIndex(totalItems - 1);
    } else {
      setIsTransitioning(true);
      settransitionSpeed(.3)
      setIndex((prev) => prev - 1);
      startInterval();
    }
  };

  const handleNext = () => {
    setIsTransitioning(true);
    settransitionSpeed(.3)
    setIndex((prev) => prev + 1);
    startInterval();
  };


  return (
    <div className="carousel-container">
      {/* Left Arrow */}
      <CarouselArrow className="carousel-arrow left cursor-pointer" direction='left' onClick={handlePrev} />
      {/* Right Arrow */}
      <CarouselArrow className="carousel-arrow right cursor-pointer" direction='right' onClick={handleNext} />

      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          transform: `translateX(-${(100 / itemsPerView) * index}%)`,
          transition: isTransitioning ? `transform ${transitionSpeed}s ease-in-out` : 'none',
        }}
      >
        {extendedImages.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img.url} alt={`Slide ${i}`} />
            <div className={`${role}-button btn-xl`}>
              <Button text={img.category} color='blue' backgroundColor='white' icon='plus' />
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Carousel;
