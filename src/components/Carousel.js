import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import CarouselArrow from "../Assets/CarouselArrow";
import Button from '../components/Link'
import RatingStarHandler from '../components/RatingStarHandler'

const Carousel = ({ data, isImage = true, role, dots = true, interval = 3000, itemsPerView = 3 }) => {

  const totalItems = data.length;
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [transitionSpeed, settransitionSpeed] = useState(1.2);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const extendedData = [...data, ...data.slice(0, itemsPerView)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalItems);
    }, interval);
  };

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isVisible && document.visibilityState === 'visible') {
      startInterval();
    }
    return () => clearInterval(intervalRef.current);
  }, [location.pathname, isVisible]);

  useEffect(() => {
    setIsTransitioning(true);
    settransitionSpeed(1.2);
  }, [index]);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState !== 'visible') clearInterval(intervalRef.current);
    });
  }, []);
  // useEffect(() => {
  //   console.log(carouselRef)
  //   const observer = new IntersectionObserver(
  //     ([entry]) => setIsVisible(entry.isIntersecting),
  //     { threshold: 0.4 }
  //   );

  //   if (carouselRef.current) observer.observe(carouselRef.current);

  //   return () => {
  //     if (carouselRef.current) observer.unobserve(carouselRef.current);
  //   };
  // }, []);

  // // Clone first few slides to end for seamless loop
  // const extendedData = [...data, ...data.slice(0, itemsPerView)];

  // const startInterval = () => {
  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(() => {
  //     setIndex((prev) => prev + 1);
  //   }, interval);
  // };

  // useEffect(() => {
  //   clearInterval(intervalRef.current);
  //   if (isVisible && document.visibilityState === 'visible') {
  //     startInterval();
  //   }
  //   return () => clearInterval(intervalRef.current);
  // }, [location.pathname, isVisible]);


  // useEffect(() => {
  //   // When reaching the fake end, reset without animation
  //   if (index === totalItems) {
  //     setTimeout(() => {
  //       setIsTransitioning(false);
  //       settransitionSpeed(1.2)
  //       setIndex(0);
  //     }, 500); // Wait for current transition to finish
  //   } else {
  //     setIsTransitioning(true);
  //     settransitionSpeed(1.2)
  //   }
  // }, [index, totalItems]);

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
    <div className="carousel-container" ref={carouselRef}>
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
        {
          isImage ?
            (
              extendedData.map((img, i) => (
                <div className="carousel-slide cursor-pointer" key={i}>
                  <img src={img.url} alt={`Slide ${i}`} />
                  <div className={`${role}-button btn-xl`}>
                    <Button text={img.category} color='blue' backgroundColor='white' icon='plus' />
                  </div>
                </div>
              )
              )
            )
            :
            (
              extendedData.map((item, i) => (
                <div className="carousel-slide cursor-pointer" key={i}>
                  <div className='card'>
                    <div className='review-rating'><RatingStarHandler rating={item.rating} /></div>
                    <h3 className='h3 review-project'>{item.project}</h3>
                    <p className='p review-comment'>{item.comment}</p>
                    <h3 className='h3 review-userName'>{item.name}</h3>
                    <p className='p review-location-service'>{item.location}</p>
                  </div>
                </div>
              )
              )
            )
        }
      </div>
    </div>

  );
};

export default Carousel;

// import { useState, useEffect, useRef } from "react";
// import { useLocation } from 'react-router-dom';
// import CarouselArrow from "../Assets/CarouselArrow";
// import Button from '../components/Link';
// import RatingStarHandler from '../components/RatingStarHandler';

// const Carousel = ({ data, isImage = true, role, dots = true, interval = 3000, itemsPerView = 3 }) => {
//   const totalItems = data.length;
//   const [index, setIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [transitionSpeed, settransitionSpeed] = useState(1.2);
//   const trackRef = useRef(null);
//   const intervalRef = useRef(null);
//   const carouselRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const location = useLocation();

//   const handleResizeHeight = () => {
//     if (trackRef.current) {
//       const currentSlide = trackRef.current.querySelector('.carousel-slide');
//       if (currentSlide) {
//         trackRef.current.style.height = `${currentSlide.offsetHeight}px`;
//       }
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.4 }
//     );
//     if (carouselRef.current) observer.observe(carouselRef.current);
//     return () => {
//       if (carouselRef.current) observer.unobserve(carouselRef.current);
//     };
//   }, []);

//   const startInterval = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % totalItems);
//     }, interval);
//   };

//   useEffect(() => {
//     clearInterval(intervalRef.current);
//     if (isVisible && document.visibilityState === 'visible' && !isHovered) {
//       startInterval();
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [location.pathname, isVisible, isHovered]);

//   useEffect(() => {
//     handleResizeHeight();
//     setIsTransitioning(true);
//     settransitionSpeed(1.2);
//   }, [index]);

//   useEffect(() => {
//     document.addEventListener('visibilitychange', () => {
//       if (document.visibilityState !== 'visible') clearInterval(intervalRef.current);
//     });
//   }, []);

//   const handlePrev = () => {
//     setIsTransitioning(true);
//     settransitionSpeed(0.3);
//     setIndex((prev) => (prev - 1 + totalItems) % totalItems);
//   };

//   const handleNext = () => {
//     setIsTransitioning(true);
//     settransitionSpeed(0.3);
//     setIndex((prev) => (prev + 1) % totalItems);
//   };

//   const handleTouch = () => {
//     let startX = 0;
//     let endX = 0;
//     return {
//       onTouchStart: (e) => (startX = e.touches[0].clientX),
//       onTouchMove: (e) => (endX = e.touches[0].clientX),
//       onTouchEnd: () => {
//         if (startX - endX > 50) handleNext();
//         else if (endX - startX > 50) handlePrev();
//       },
//     };
//   };

//   const { onTouchStart, onTouchMove, onTouchEnd } = handleTouch();

//   return (
//     <div
//       className="carousel-container"
//       ref={carouselRef}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       {...{ onTouchStart, onTouchMove, onTouchEnd }}
//     >
//       <CarouselArrow className="carousel-arrow left cursor-pointer" direction='left' onClick={handlePrev} />
//       <CarouselArrow className="carousel-arrow right cursor-pointer" direction='right' onClick={handleNext} />

//       <div
//         ref={trackRef}
//         className="carousel-track"
//         style={{
//           transform: `translateX(-${(100 / itemsPerView) * index}%)`,
//           transition: isTransitioning ? `transform ${transitionSpeed}s ease-in-out` : 'none',
//         }}
//       >
//         {data.map((item, i) => {
//           const visible = Math.abs(index - i) <= itemsPerView;
//           if (!visible) return null;

//           return (
//             <div className="carousel-slide cursor-pointer" key={i}>
//               {isImage ? (
//                 <>
//                   <img src={item.url} alt={`Slide ${i}`} loading="lazy" />
//                   <div className={`${role}-button btn-xl`}>
//                     <Button text={item.category} color='blue' backgroundColor='white' icon='plus' />
//                   </div>
//                 </>
//               ) : (
//                 <div className='card'>
//                   <div className='review-rating'><RatingStarHandler rating={item.rating} /></div>
//                   <h4 className='h4 review-comment'>{item.project}</h4>
//                   <p className='p review-comment'>{item.comment}</p>
//                   <p className='p review-userName'>{item.name}, {item.location}</p>
//                   </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Carousel;