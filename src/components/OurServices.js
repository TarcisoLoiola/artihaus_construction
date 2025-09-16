import React from "react";

import Carousel from "./Carousel";
import Link from "./Link";

const OurServices = ({ images }) => {
  return (
    <section className='our-services backgroundColor-lightgray'>
      <div className='page-content-container minVHHeight'>
        <h1 className="h1 color-blue text-center marginBottom-lg">Our Services</h1>
        {/* <div className='our-services--carousel flex-row gap-md'> */}
        <Carousel data={images} isImage={true} role='ourservices-carousel' itemsPerView={3} dots />
        <Link to='/gallery' text='Learn More' className='button-md marginTop-lg' color='white' backgroundColor='gold' icon='arrow' />
      </div>
    </section>
  )
};
export default OurServices