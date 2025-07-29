import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext';

import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import OurCommitment from '../components/OurCommitment';
import Certifications from '../components/Certifications';
import Reviews from '../components/Reviews';


const Home = () => {
  const { value } = useContext(ContentContext)
  return (
    <main className='home'>
      <Hero value={value} />
      <WhoWeAre value={value} />
      {/* <OurServices images={value.media} /> */}
      <OurCommitment value={value} />
      {/* <Certifications /> */}
      {/* <Reviews /> */}
    </main>
  );
}; export default Home;