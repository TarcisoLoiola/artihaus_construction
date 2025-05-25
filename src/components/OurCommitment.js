import React from "react";

import CommitmentCards from './CommitmentCards'
import Link from "./Link";

const OurCommitment = ({className}) => {

    return (
      <section className='our-commitment backgroundColor-lightgray'>
        <div className='page-content-container'>
          <div className='our-commitment--describe'>
            <h1 className="h1 marginBottom-md">Our commitment to quality and excellence.</h1>
            <p className="p color-gray">What sets us apart is not just our quality and attention to detail, but our hands-on approach. We are fully present throughout the entire process, ensuring commitment and responsibility.</p>
          </div>
            <CommitmentCards className='home-our-commitment'/>
          <Link to='/about' text='Learn More' className='button-md marginTop-lg' color='white' backgroundColor='gold' icon='arrow' />
        </div>
      </section>
    )
};
export default OurCommitment;