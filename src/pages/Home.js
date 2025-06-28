
import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext';

import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import OurServices from '../components/OurServices';
import OurCommitment from '../components/OurCommitment';
import Certifications from '../components/Certifications';
import Reviews from '../components/Reviews';


const Home = () => {
  const { content } = useContext(ContentContext)
  let heroImages, ourServicesImages = []

  if (content) {
    heroImages = content.media.filter((img) => img.role === 'home-hero');
    ourServicesImages = content.media
  }

  return (
    <main className='home'>
      <Hero images={heroImages || []} interval={5000} />
      <WhoWeAre />
      <OurServices images={ourServicesImages} />
      <OurCommitment />
      <Certifications />
      <Reviews />
    </main>
  );
}; export default Home;