import React from "react";

import Carousel from "./Carousel";
import rec84 from '../Assets/Rectangle 84.png';
import Link from "./Link";

const OurServices = ({ className }) => {

  return (
    <section className='our-services backgroundColor-gold'>
      <div className='page-content-container'>
        <h1 className="h1 color-white text-center marginBottom-lg">Our Services</h1>
        {/* <div className='our-services--carousel flex-row gap-md'> */}
        <div className='carousel-container'>
          <Carousel role='ourservices-carousel' itemsPerView={3} dots={false} />
        </div>
        <Link to='/gallery' text='Learn More' className='button-md marginTop-lg' color='gold' backgroundColor='white' icon='arrow' />
      </div>
    </section>
  )
};
export default OurServices