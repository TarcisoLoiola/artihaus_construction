import React, { useEffect, useState } from 'react';

const FadeCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const cycle = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(cycle);
  }, [images, interval]);

  return (
    <div className="fade-carousel">
      {images && images.map(({ url }, index) => (
        <img
          key={index}
          src={url}
          alt={`slide-${index}`}
          className={`fade-slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  )
};

export default FadeCarousel;
