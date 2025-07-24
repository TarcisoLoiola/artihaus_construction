import React from "react";
import ImageHandler from "./ImageHandler";
import Stats from "./Stats";
import Link from "./Link";

const WhoWeAre = ({ className, value }) => {
  const image = value.media.find((img) => img._id === 44);
    return (
      <section className='who-we-are backgroundColor-white'>
        <div className='page-content-container'>
          <div className='who-we-are--describe flex-row space-between gap-md marginBottom-lg'>
            <div className='--describe'>
              <h1 className="h1 marginBottom-sm color-blue">Who we are?</h1>
              <h4 className="h4 color-gray marginBottom-xs">
                Transform Your Outdoors with Artihaus Construction
              </h4>
              <p className="p color-gray marginBottom-xs">
                At Artihaus Construction, we believe that outdoor spaces should be as inviting and functional as the interiors of a home. With over 20 years of experience in hardscape and landscape construction, we specialize in transforming yards into stunning, long-lasting outdoor living spaces.
              </p>
              <p className="p color-gray marginBottom-xs">
                From patios and retaining walls to walkways, driveways, and custom outdoor features, our craftsmanship is built to stand the test of time.
              </p>
            </div>
            <div className='image-role-handler'><ImageHandler src={image.url} alt='who we are image' role='home--whoweare' /> </div>
          </div>
          <div className='who-we-are--stats colo-gray text-center'>
            <Stats />
          </div>
          <Link to='/about' text='Learn More' className='button-md marginTop-lg align-center' color='white' backgroundColor='gold' icon='arrow' />
        </div>
      </section>
    )
};
export default WhoWeAre