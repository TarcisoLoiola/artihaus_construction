import React from "react";
import ImageHandler from "./ImageHandler";
import Stats from "./Stats";
import Link from "./Link";

const WhoWeAre = ({ className, value }) => {
  const { title, subtitle, description } = value.pages.home.sections.whoweare
  const { url } = value.pages.home.sections.whoweare.image
    return (
      <section className='who-we-are backgroundColor-white'>
        <div className='page-content-container'>
          <div className='who-we-are--describe flex-row space-between gap-md marginBottom-lg'>
            <div className='--describe'>
              <h1 className="h1 marginBottom-sm color-blue">{title}</h1>
              <h4 className="h4 color-gray marginBottom-xs">
                {subtitle}
              </h4>
              {
                description.map((des, index) => (
                  <p key={index} className="p color-gray marginBottom-xs">
                    {des}
                  </p>
                ))
              }
            </div>
            <div className='image-role-handler'><ImageHandler src={url} alt='who we are image' role='home--whoweare' /> </div>
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